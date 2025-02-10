"use client";

import { AiFillHeart } from "react-icons/ai";
import { ImMusic } from "react-icons/im";
import Link from "next/link";
import { useEffect, useState } from "react";
import PostMainLikes from "./PostMainLikes";
import useCreateBucketUrl from "../hooks/useCreateBucketUrl";
import { Follower, PostMainCompTypes } from "../types";
import { useUser } from "../context/user";
import { useGeneralStore } from "../stores/general";
import useGetFollowById from "../hooks/useGetFollowByUserId";
import useCreateFollow from "../hooks/useCreateFollow";
import useDeleteFollow from "../hooks/useDeleteFollow";
import { BiLoaderCircle } from "react-icons/bi";

export default function PostMain({ post }: PostMainCompTypes) {
  const userContext = useUser();
  const { setIsLoginOpen } = useGeneralStore();
  const [follower, setFollower] = useState<Follower[]>([]);
  const [hasClickedFollow, setHasClickedFollow] = useState<boolean>(false);
  const [userFollowed, setUserFollowed] = useState<boolean>(false);

  useEffect(() => {
    const video = document.getElementById(
      `video-${post?.id}`
    ) as HTMLVideoElement;
    const postMainElement = document.getElementById(`PostMain-${post.id}`);

    if (postMainElement && video) {
      let observer = new IntersectionObserver(
        (entries) => {
          entries[0].isIntersecting ? video.play() : video.pause();
        },
        { threshold: [0.6] }
      );

      observer.observe(postMainElement);
    }
  }, []);

  useEffect(() => {
    getAllFollowByUserId();
  }, [post]);

  const getAllFollowByUserId = async () => {
    let result = await useGetFollowById(userContext?.user?.id || "");
    setFollower(result);
  };

  const follow = async () => {
    setHasClickedFollow(true);
    await useCreateFollow(userContext?.user?.id || "", post?.profile.user_id);
    await getAllFollowByUserId();
    hasUserFollow();
    setHasClickedFollow(false);
  };

  const unfollow = async (id: string) => {
    setHasClickedFollow(true);
    await useDeleteFollow(id);
    await getAllFollowByUserId();
    hasUserFollow();
    setHasClickedFollow(false);
  };

  const hasUserFollow = () => {
    if (!userContext) return;

    if (follower?.length < 1 || !userContext?.user?.id) {
      setUserFollowed(false);
      return;
    }
    let res = useIsFollow(
      userContext?.user?.id,
      post?.profile.user_id,
      follower
    );
    setUserFollowed(res ? true : false);
  };

  const useIsFollow = (
    userId: string,
    followerId: string,
    follower: Array<Follower>
  ) => {
    let res: Follower[] = [];
    follower?.forEach((follow) => {
      if (follow.user_id == userId && follow.follower_id == followerId)
        res.push(follow);
    });
    if (typeof res == undefined) return;
    return res.length > 0;
  };

  const followOrUnfollow = () => {
    if (!userContext?.user?.id) {
      setIsLoginOpen(true);
      return;
    }

    let res = useIsFollow(userContext?.user?.id, post?.profile.user_id, follower);

    if (!res) {
      follow();
    } else {
      follower.forEach((follow: Follower) => {
        if (
          userContext?.user?.id == follow?.user_id &&
          follow?.follower_id == post?.profile.user_id
        ) {
          unfollow(follow?.id);
        }
      });
    }
  };

  return (
    <>
      <div id={`PostMain-${post.id}`} className="flex border-b py-6">
        <div className="cursor-pointer">
          <img
            className="rounded-full max-h-[60px]"
            width="60"
            src={useCreateBucketUrl(post?.profile?.image)}
          />
        </div>

        <div className="pl-3 w-full px-4">
          <div className="flex items-center justify-between pb-0.5">
            <Link href={`/profile/${post.profile.user_id}`}>
              <span className="font-bold hover:underline cursor-pointer">
                {post.profile.name}
              </span>
            </Link>
            {post?.user_id &&
            userContext?.user?.id &&
            userContext?.user?.id === post?.user_id ? (
              <>
                <button className="border text-[15px] px-[21px] py-0.5 border-[#F02C56] text-[#F02C56] hover:bg-[#ffeef2] font-semibold rounded-md">
                  <Link href={`/profile/${post.profile.user_id}`}>
                    My Profile
                  </Link>
                </button>
              </>
            ) : (
              <>
                {follower &&
                post?.profile?.user_id &&
                follower
                  .map((item) => item.follower_id)
                  .includes(post?.profile?.user_id) ? (
                  <>
                    <button
                      onClick={followOrUnfollow}
                      className="border text-[15px] px-[21px] py-0.5 border-gray-300 text-gray-600 hover:text-gray-400 hover:border-[#F02C56] font-semibold rounded-md"
                    >
                      {!hasClickedFollow ? (
                        <>Following</>
                      ) : (
                        <BiLoaderCircle className="animate-spin" size="25" />
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={followOrUnfollow}
                      className="border text-[15px] px-[21px] py-0.5 border-[#F02C56] text-[#F02C56] hover:text-opacity-75 hover:border-gray-300 font-semibold rounded-md"
                    >
                      {!hasClickedFollow ? (
                        <>Follow</>
                      ) : (
                        <BiLoaderCircle className="animate-spin" size="25" />
                      )}
                    </button>
                  </>
                )}
              </>
            )}
          </div>
          <p className="text-[15px] pb-0.5 break-words md:max-w-[400px] max-w-[300px]">
            {post.text}
          </p>
          <p className="text-[14px] text-gray-500 pb-0.5">
            #fun #cool #SuperAwesome
          </p>
          <p className="text-[14px] pb-0.5 flex items-center font-semibold">
            <ImMusic size="17" />
            <span className="px-1">original sound - AWESOME</span>
            <AiFillHeart size="20" />
          </p>

          <div className="mt-2.5 flex">
            <div className="relative min-h-[480px] max-h-[580px] max-w-[260px] flex items-center bg-black rounded-xl cursor-pointer">
              <video
                id={`video-${post.id}`}
                loop
                controls
                muted
                className="rounded-xl object-cover mx-auto h-full"
                src={useCreateBucketUrl(post?.video_url)}
              />
              <img
                className="absolute right-2 bottom-10"
                width="90"
                src="/images/tiktok-logo-white.png"
              />
            </div>

            <PostMainLikes post={post} />
          </div>
        </div>
      </div>
    </>
  );
}

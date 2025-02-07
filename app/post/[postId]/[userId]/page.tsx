"use client";

import { useRouter } from "next/navigation";
import { PostPageTypes } from "../../../type";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ClientOnly from "@/app/components/ClientOnly";
import CommentsHeader from "@/app/components/post/CommentsHeader";
import Comments from "@/app/components/post/Comments";

function Post({ val }: PostPageTypes) {
  const router = useRouter();

  const loopThroughPostUp = () => {
    console.log("loopThroughPostUp");
  };

  const loopThroughPostDown = () => {
    console.log("loopThroughPostDown");
  };

  const postById = {
    id: "123",
    user_id: "345",
    video_url: "/images/data.mp4",
    text: "this is some text",
    created_at: "date here",
    profile: {
      user_id: "345",
      name: "User 1",
      image: "https://placehold.jp/100x100.png",
    },
  };

  return (
    <>
      <div
        id="PostPage"
        className="lg:flex justify-between w-full h-screen bg-black overflow-auto"
      >
        <div className="lg:w-[calc(100%-540px)] h-full relative">
          <Link
            href={`/profile/${val?.userId}`}
            className="absolute text-white z-20 m-5 rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
          >
            <AiOutlineClose size="27" />
          </Link>

          <div>
            <button
              className="absolute z-20 right-4 top-4 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
              onClick={() => loopThroughPostUp()}
            >
              <BiChevronUp size={30} color="#ffffff" />
            </button>

            <button
              className="absolute z-20 right-4 top-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
              onClick={() => loopThroughPostDown()}
            >
              <BiChevronDown size={30} color="#ffffff" />
            </button>
          </div>
          <img
            className="absolute z-20 top-[18px] left-[70px] rounded-full lg:mx-0 mx-auto"
            width={45}
            src="/images/tiktok-logo-small.png"
          />

          <ClientOnly>
            {postById?.video_url ? (
              <>
                <video
                  className="fixed object-cover w-full my-auto z-[0] h-screen"
                  src="/images/data.mp4"
                />
              </>
            ) : null}

            <div className="bg-black bg-opacity-70 lg:min-w-[480px] z-10 relative">
              {true ? (
                <>
                  <video
                    className="h-screen mx-auto"
                    src="/images/data.mp4"
                    autoPlay
                    controls
                    muted
                    loop
                  />
                </>
              ) : null}
            </div>
          </ClientOnly>
        </div>

        <div
          id="InfoSection"
          className="lg:max-w-[550px] relative w-full h-full bg-white"
        >
          <div className="py-4" />

          <ClientOnly>
            {postById?.video_url ? (
              <>
                <CommentsHeader post={postById} params={val} />
              </>
            ) : null}
          </ClientOnly>
          <Comments params={val} />
        </div>
      </div>
    </>
  );
}

export default Post;

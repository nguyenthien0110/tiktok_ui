import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import useGetCommentsByPostId from "../hooks/useGetCommentsByPostId";
import { CommmentWithProfile } from "../type";

interface CommentStore {
  commentsByPost: CommmentWithProfile[];
  setCommentsByPost: (postId: string) => void;
}

export const useCommentStore = create<CommentStore>()(
  devtools(
    persist(
      (set) => ({
        commentsByPost: [],

        setCommentsByPost: async (postId: string) => {
          const result = await useGetCommentsByPostId(postId);
          set({ commentsByPost: result });
        },
      }),
      {
        name: "store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

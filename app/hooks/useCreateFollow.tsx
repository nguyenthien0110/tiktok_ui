import { database, ID } from "@/libs/AppWriteClient";

const useCreateFollow = async (userId: string, follower_id: string) => {
  try {
    await database.createDocument(
      String(process.env.NEXT_PUBLIC_DATABASE_ID),
      String(process.env.NEXT_PUBLIC_COLLECTION_ID_FOLLOW),
      ID.unique(),
      {
        user_id: userId,
        follower_id: follower_id,
      }
    );
  } catch (error) {
    throw error;
  }
};

export default useCreateFollow;

import { database, Query } from "@/libs/AppWriteClient";

const useGetFollowById = async (userId: string) => {
  try {
    const response = await database.listDocuments(
      String(process.env.NEXT_PUBLIC_DATABASE_ID),
      String(process.env.NEXT_PUBLIC_COLLECTION_ID_FOLLOW),
      [Query.equal("user_id", userId)]
    );
    const documents = response.documents;
    const result = documents.map((doc) => {
      return {
        id: doc?.$id,
        user_id: doc?.user_id,
        follower_id: doc?.follower_id,
      };
    });

    return result;
  } catch (error) {
    throw error;
  }
};

export default useGetFollowById;

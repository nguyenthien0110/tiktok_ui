import { database } from "@/libs/AppWriteClient";

const useDeleteFollow = async (id: string) => {
  try {
    console.log("clickData:" + id);
    await database.deleteDocument(
      String(process.env.NEXT_PUBLIC_DATABASE_ID),
      String(process.env.NEXT_PUBLIC_COLLECTION_ID_FOLLOW),
      id
    );
  } catch (error) {
    throw error;
  }
};

export default useDeleteFollow;

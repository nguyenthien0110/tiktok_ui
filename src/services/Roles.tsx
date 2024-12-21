export const getRoles = async () => {
  const response = await fetch("../../public/data/roles.json");
  if (!response.ok) {
    throw new Error("Faild to get roles");
  }
  const data = response.json();
  return data;
};

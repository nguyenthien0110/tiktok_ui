export const getAccountList = async () => {
  const response = await fetch("../../public/data/accounts.json");
  if (!response.ok) {
    throw new Error("Failed to load account data");
  }
  const { accounts } = await response.json();
  return accounts;
};
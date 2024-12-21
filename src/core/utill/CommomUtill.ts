export interface Account {
  id: number;
  username: string;
  password: string;
  imgLink: string;
  idRole: number;
}

export interface Role {
  id: number;
  name: string;
}

export interface Video {
  id: number;
  idUser: number;
  videoLink: string;
}

export const FilterElementValue = (
  value: string,
  arr: Account[]
): Account[] => {
  const regex = new RegExp(value, "i");
  return arr.filter((element) => regex.test(JSON.stringify(element)));
};

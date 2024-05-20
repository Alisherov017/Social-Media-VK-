export type RegisterValues = {
  email: string;
  password: string;
  password_confirm: string;
};
export const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png";

export type LoginValues = Omit<RegisterValues, "password_confirm">;

export interface ProfileType {
  id: number;
  email: string;
}

export type FormDatas = {
  description: string;
  title: string;
  image: null | File;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  reviews: any[];
  likes: number;
  is_author: boolean;
  liked_by_user: boolean;
};


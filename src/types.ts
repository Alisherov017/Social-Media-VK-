export interface UserType {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirm?: string;
  id?: number;
  [key: string]: string | number | undefined | CardData[];
}

export interface ProfileType extends UserType {
  city: string;
  avatar: string;
  bd: string;
  posts?: CardData[];
}

export type LoginType = {
  email: string;
  password: string;
  [key: string]: string;
};

export interface CardData {
  image: string;

  description: string;
  time?: string;
  [key: string]: string | number | undefined;
}
export const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png";

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

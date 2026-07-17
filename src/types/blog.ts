import { DetailImages } from "./common";

export interface BlogPost {
  id: number;
  image: string;
  date: string;
  title: string;
  link: string;
  isSpecial: boolean;
}

export interface BlogDetail {
  title: string;
  description: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  concept: string;
  story: string;
  takeaways: string[];
  images: DetailImages;
}

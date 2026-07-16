import { DetailImages } from "./common";

export type RowType = "split" | "centered" | "grid";

export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  aspectRatio: string;
  widthClass: string;
  sizes: string;
}

export interface CaseRow {
  id: string;
  type: RowType;
  items: CaseStudy[];
}

export interface ProjectDetail {
  title: string;
  description: string;
  category: string;
  client: string;
  startDate: string;
  endDate: string;
  challenge: string;
  solution: string;
  features: string[];
  images: DetailImages;
}

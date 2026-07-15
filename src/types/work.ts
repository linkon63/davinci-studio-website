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

export interface BreadcrumbPath {
  name: string;
  href?: string;
  active?: boolean;
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
  images: {
    hero: string;
    gallery1: string;
    gallery2: string;
    gallery3: string;
    bottom: string;
  };
}

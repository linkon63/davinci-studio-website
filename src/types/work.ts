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

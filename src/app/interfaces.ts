
export interface Item {
  id: number;
  categories: string[];
  title: string;
  region: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
}
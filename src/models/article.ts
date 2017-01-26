export interface Article {
  id: number;
  date: string;
  categories: Array<number>;
  categoriesName: Array<string>;
  title: {
    rendered: string
  };
  content: {
    rendered: string
  };
  source_url: string
}
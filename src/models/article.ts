export interface Article {
  id: number;
  date: string;
  title: {
    rendered: string
  };
  content: {
    rendered: string
  };
  source_url: string
}
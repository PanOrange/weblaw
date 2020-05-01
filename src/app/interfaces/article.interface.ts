import { ArticleRole } from "../enums/article-role.enum";

export interface Article {
  number: number;
  role: ArticleRole;
  text: string;
  documentsCount: number;
}

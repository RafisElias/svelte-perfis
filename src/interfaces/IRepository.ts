export default interface IRepository {
  name: string;
  html_url: string;
  description: string | null;
  watchers_count: number;
  stargazers_count: number;
  language: string;
  created_at: string;
}
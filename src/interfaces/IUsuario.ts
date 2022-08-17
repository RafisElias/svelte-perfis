import type IRepository from "./IRepository";

export default interface IUsuario {
  avatar_url: string;
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  html_url: string;
  repositories: IRepository[];
}
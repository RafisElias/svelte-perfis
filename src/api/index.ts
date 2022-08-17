import type IRepository from "src/interfaces/IRepository";
import type IUsuario from "src/interfaces/IUsuario";

/**
* @param {string} nome - Nome do usuário no GitHub
**/
export const buscaUsuario = async (nome: string) => {
  const response = await fetch(`https://api.github.com/users/${nome}`);
  const data: IUsuario = await response.json();

  if (response.ok) {
    return {
      status: response.status,
      data: {
        avatar_url: data.avatar_url,
        login: data.login,
        name: data.name,
        public_repos: data.public_repos,
        followers: data.followers,
        html_url: data.html_url,
      }
    };
  }

  return { status: response.status, data: null };
};

/**
* @param {string} nome - Nome do usuário no GitHub
**/
export const buscaRepositorios = async (nome: string) => {
  const params = 'sort=created&per_page=5';
  const response = await fetch(`https://api.github.com/users/${nome}/repos?${params}`);
  const data = (await response.json()) as IRepository[];

  if (response.ok) {
    return {
      status: response.status,
      data: data.map(repo => ({
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        watchers_count: repo.watchers_count,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
        created_at: repo.created_at,
      }))
    };
  }

  return { status: response.status, data: null };
};
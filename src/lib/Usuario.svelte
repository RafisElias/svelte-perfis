<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';

  import type IUsuario from 'src/interfaces/IUsuario';
  import BarraSuperior from './BarraSuperior.svelte';

  export let usuario: IUsuario;

  $: mostrarRepositorios = Boolean(usuario.repositories.length);
</script>

<section class="card-usuario" in:fly={{ easing: sineIn }} out:fade>
  <BarraSuperior />

  <div class="usuario">
    <div class="foto-container">
      <a href={usuario.html_url} target="_blank" rel="noopener">
        <img src={usuario.avatar_url} alt="" class="foto-usuario" />
      </a>
    </div>

    <div class="detalhes-usuario">
      {#if usuario.name}
        <div class="info">
          Nome: <span>{usuario.name}</span>
        </div>
      {/if}
      <div class="info">
        Usuário: <span>{usuario.login}</span>
      </div>
      <div class="info">
        Repositórios: <span>{usuario.public_repos}</span>
      </div>
      <div class="info">Seguidores: <span>{usuario.followers}</span></div>
    </div>
  </div>
</section>

<section>
  {#if mostrarRepositorios}
    <div class="repositorios">
      <h2 class="titulo">Repositórios</h2>
      <div>
        {#each usuario.repositories as repo}
          <div class="repositorio">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener"
              class="repositorio-link"
            >
              {repo.name}
            </a>
            <p class="description">
              <b>Descrição: </b>{repo.description
                ? repo.description
                : 'Sem descrição.'}
            </p>
            <p>
              <b>Data de Criação: </b>{new Date(repo.created_at).toLocaleString(
                'pt-BR'
              )}
            </p>
            <p><b>Stars: </b>{repo.stargazers_count}</p>
            <p><b>Watching: </b>{repo.watchers_count}</p>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>

<style>
  .card-usuario {
    margin-top: 65px;
  }

  .usuario {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 1.25rem;
    column-gap: clamp(2.5rem, 3.5rem, 5rem);

    padding: 28px 0;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: -12px 37px 45px rgba(133, 127, 201, 0.18);
    border-radius: 0px 0px 13px 13px;
  }

  .foto-usuario {
    width: 12.75rem;
    height: 12.75rem;
    border: 4.56px solid #2e80fa;
    border-radius: 50%;
    background-size: cover;
    background-image: url('https://github.com/RafisElias.png');
  }

  .detalhes-usuario {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .detalhes-usuario > .info {
    font-weight: 600;
    font-size: 20px;
    line-height: 31px;
    color: #395278;
  }

  .detalhes-usuario > .info > span {
    color: #6781a8;
    font-weight: normal;
  }

  .repositorios > .titulo {
    font-size: 20px;
    line-height: 31px;
    margin-block: 2rem;
    font-weight: 600;
    color: #395278;
  }

  .repositorios > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }

  .repositorio {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 1rem 1.75rem;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 6px 10px rgba(133, 127, 201, 0.18);
    border-radius: 0px 0px 13px 13px;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }

  .repositorio:hover {
    transform: scale(1.05);
  }

  .repositorio-link {
    font-size: 20px;
    line-height: 31px;
    color: #6781a8;
    transition: color 0.2s;
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    hyphens: auto;
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';

  import type IUsuario from 'src/interfaces/IUsuario';
  import { buscaRepositorios, buscaUsuario } from '../api';
  import Botao from './Botao.svelte';
  import Loading from './Loading.svelte';

  export let valorInput = '';
  let statusDeErro: number | null | undefined = null;
  let loading = false;

  const dispatch = createEventDispatcher<{ onUserUpdated: IUsuario | null }>();

  const onSubmit = async () => {
    loading = true;
    const { data: user, status } = await buscaUsuario(valorInput);
    const { data: repos } = await buscaRepositorios(valorInput);

    if (user && repos) {
      const usuario = {
        avatar_url: user.avatar_url,
        login: user.login,
        name: user.name,
        public_repos: user.public_repos,
        followers: user.followers,
        html_url: user.html_url,
        repositories: repos,
      };

      statusDeErro = null;

      dispatch('onUserUpdated', usuario);
      loading = false;
    } else {
      statusDeErro = status;
      dispatch('onUserUpdated', null);
      loading = false;
    }
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <input
    type="text"
    class="input"
    class:erro-input={statusDeErro === 404}
    bind:value={valorInput}
    placeholder="Pesquisar usuário"
  />

  {#if statusDeErro === 404}
    <span class="erro" in:fly={{ easing: sineIn }} out:fade
      >Usuário não encontrado!</span
    >
  {/if}
  <Botao {loading}>
    <svelte:fragment slot="label">
      {#if loading}
        <Loading />
      {:else}
        Buscar
      {/if}
    </svelte:fragment>
  </Botao>
</form>

<style>
  form {
    display: flex;
    justify-content: center;
  }
  .input {
    padding: 15px 25px;
    width: calc(100% - 8.75rem);
    font-size: 1rem;
    border-radius: 8px 0 0 8px;
    border: 1px solid #2e80fa;
    box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
    outline: 0;
  }

  .input::placeholder {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 26px;
    color: #6e8cba;
  }

  .erro-input {
    border: 1px solid #ff003e;
  }

  .erro {
    position: absolute;
    bottom: -25px;
    left: 0;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    z-index: -1;
    color: #ff003e;
  }
</style>

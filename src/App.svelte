<script lang="ts">
  import type IUsuario from './interfaces/IUsuario';
  import Formulario from './lib/Formulario.svelte';
  import Titulo from './lib/Titulo.svelte';
  import Usuario from './lib/Usuario.svelte';

  let usuario: IUsuario | null = null;

  const listenerUserUpdate = (event: CustomEvent<IUsuario | null>) => {
    usuario = event.detail;
  };
</script>

<main class="app">
  <header>
    <Titulo />

    <div class="busca-usuario">
      <Formulario on:onUserUpdated={listenerUserUpdate} />
    </div>
  </header>

  {#if usuario}
    <Usuario {usuario} />
  {/if}
</main>

<style>
  .app {
    width: min(95%, 50rem);
    margin-inline: auto;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .busca-usuario {
    position: relative;
    /* width: 70%; */
    flex: 1;
  }
</style>

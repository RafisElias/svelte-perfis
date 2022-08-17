<script lang="ts">
  import lupa from '../assets/lupa.svg';
  export let loading = false;
</script>

<button type="submit" class="botao">
  <slot name="label">Buscar</slot>
  {#if !loading}
    <slot name="icone">
      <img src={lupa} alt="ícone de lupa" />
    </slot>
  {/if}
</button>

<style>
  .botao {
    padding: 15px 24px;
    border-radius: 0 8px 8px 0;
    border: none;
    background: #2e80fa;
    line-height: 26px;
    color: #fff;
    font-size: 22px;
    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    gap: 13px;
  }

  .botao:hover {
    background: #4590ff;
  }
</style>

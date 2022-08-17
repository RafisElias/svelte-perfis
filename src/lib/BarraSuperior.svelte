<script>
  import github from '../assets/github.svg';
  import plus from '../assets/plus.svg';
  import copy from '../assets/copy.svg';
</script>

<div
  style:display="flex"
  style:justify-content="space-between"
  style:align-items="center"
  style:flex-wrap="wrap"
>
  <div class="barra-superior">
    <span class="acao" />
    <span class="acao" />
    <span class="acao" />
  </div>

  <div class="icones">
    <img src={github} alt="ícone github" />
    <img src={plus} alt="ícone mais" />
    <img src={copy} alt="ícone copy" />
  </div>
</div>

<style>
  .barra-superior {
    background: rgba(255, 255, 255, 0.5);
    padding: 10px;
    border-radius: 8px 8px 0 0;
  }

  .barra-superior > .acao {
    width: 7px;
    height: 7px;

    display: inline-block;
    border-radius: 50%;
  }

  .barra-superior > .acao:first-child {
    background: #d8695b;
  }

  .barra-superior > .acao:nth-child(2) {
    background: #eac213;
  }

  .barra-superior > .acao:nth-child(3) {
    background: #79c743;
  }

  .icones {
    display: flex;
    gap: 0.75rem;
  }

  .icones > img {
    cursor: pointer;
  }
</style>

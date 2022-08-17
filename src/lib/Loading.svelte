<script lang="ts"></script>

<div class="loader">
  <svg
    class="circular-loader"
    viewBox="22 22 44 44"
    fill="currentColor"
    stroke="currentColor"
  >
    <circle
      class="loader-path"
      cx="44"
      cy="44"
      r="20.2"
      fill="none"
      stroke-width="3.6"
    />
  </svg>
</div>

<style>
  :root {
    --rotation-animation-speed: 2s;
    --rotation-animation-easing: linear;
    --stroke-animation-speed: 1.5s;
    --stroke-animation-easing: ease-in-out;
    --stroke-width: 3px;
    --stroke-start-dasharray: 1, 200;
    --stroke-end-dasharray: 89, 200;
  }

  .loader {
    margin: 0px auto;
    width: 26px;
    height: 26px;
  }

  .circular-loader {
    animation: rotate var(--rotation-animation-speed)
      var(--rotation-animation-easing) infinite;
  }

  .loader-path {
    fill: none;
    stroke-width: var(--stroke-width);
    animation: animate-stroke var(--stroke-animation-speed)
      var(--stroke-animation-easing) infinite;
    stroke-linecap: round;
    stroke: #f9f9f9;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate-stroke {
    0% {
      stroke-dasharray: var(--stroke-start-dasharray);
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: var(--stroke-end-dasharray);
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: var(--stroke-end-dasharray);
      stroke-dashoffset: -124;
    }
  }
</style>

<script lang="ts">
    export let callback = () => {};
</script>

<svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="48"
    height="48"
    on:click={callback}
    ><path
        class="svg"
        d="m16.6 32.95 7.4-7.4 7.4 7.4 1.55-1.55-7.4-7.4 7.4-7.4-1.55-1.55-7.4 7.4-7.4-7.4-1.55 1.55 7.4 7.4-7.4 7.4Zm7.4 9.9q-3.85 0-7.3-1.5-3.45-1.5-6-4.05t-4.05-5.975Q5.15 27.9 5.15 24q0-3.9 1.5-7.35 1.5-3.45 4.05-6t5.975-4.025Q20.1 5.15 24 5.15q3.9 0 7.35 1.475 3.45 1.475 6 4.025 2.55 2.55 4.025 6Q42.85 20.1 42.85 24q0 3.85-1.475 7.3-1.475 3.45-4.025 6-2.55 2.55-6 4.05T24 42.85Z"
    /></svg
>

<style>
    svg {
        width: 40px;
        height: 40px;
        margin-right: 5px;
    }

    @media screen and (max-width: 850px) {
        svg {
            width: 32px;
            height: 32px;
        }
    }
</style>

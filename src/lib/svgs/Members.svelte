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
        d="m1.6 40.1q-0.7 0-1.1-0.5-0.5-0.4-0.5-1.1v-3.5q0-1.9 1-3.5 1-1.5 2.7-2.3 4-1.7 7.1-2.5 3.2-0.7 6.6-0.7 3.3 0 6.5 0.7 3.1 0.8 7.1 2.5 1.7 0.8 2.7 2.3 1.1 1.6 1.1 3.5v3.5q0 0.7-0.5 1.1-0.5 0.5-1.2 0.5zm35.2 0q0.6-0.1 0.9-0.6 0.3-0.4 0.3-1.2v-3.3q0-3.4-1.7-5.6-1.8-2.2-4.6-3.6 3.8 0.4 7.1 1.3 3.3 0.8 5.3 1.9 1.8 1 2.9 2.6 1 1.5 1 3.4v3.5q0 0.7-0.5 1.1-0.4 0.5-1.1 0.5zm-19.5-17.4q-3.6 0-5.8-2.3-2.3-2.3-2.3-5.9 0-3.6 2.3-5.9 2.2-2.2 5.8-2.2 3.6 0 5.9 2.2 2.3 2.3 2.3 5.9 0 3.6-2.3 5.9-2.3 2.3-5.9 2.3zm19.6-8.2q0 3.6-2.3 5.9-2.3 2.3-5.9 2.3-0.6 0-1.3-0.1-0.7-0.1-1.3-0.3 1.3-1.4 1.9-3.4 0.7-1.9 0.7-4.4 0-2.4-0.7-4.3-0.6-1.9-1.9-3.5 0.6-0.1 1.3-0.2 0.7-0.1 1.3-0.1 3.6 0 5.9 2.2 2.3 2.3 2.3 5.9zm-33.7 22.3h28.2v-1.8q0-0.9-0.5-1.7-0.5-0.8-1.2-1.1-4-1.8-6.6-2.4-2.7-0.6-5.8-0.6-3.1 0-5.8 0.6-2.6 0.6-6.6 2.4-0.7 0.3-1.2 1.1-0.5 0.8-0.5 1.7zm14.1-17.4q2.1 0 3.5-1.4 1.4-1.4 1.4-3.5 0-2.2-1.4-3.5-1.4-1.4-3.5-1.4-2.1 0-3.5 1.4-1.4 1.3-1.4 3.5 0 2.1 1.4 3.5 1.4 1.4 3.5 1.4z"
    /></svg
>

<style>
    svg {
        width: 50px;
        height: 50px;
        padding: 10px;
        border-radius: 10px;
    }

    svg:hover {
        background: var(--side_svg_bg_color);
    }

    @media screen and (max-width: 850px) {
        svg {
            width: 34px;
            height: 34px;
            padding: 5px;
        }
    }
</style>

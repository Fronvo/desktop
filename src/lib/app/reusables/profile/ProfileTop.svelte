<script lang="ts">
    import { dataSaver } from 'stores/main';

    export let avatar: string;
</script>

<div class="top-container">
    <img
        id="avatar"
        src={avatar && !$dataSaver ? avatar : '/svgs/profile/avatar-filled.svg'}
        alt={`${avatar}`}
        draggable={false}
    />
</div>

<style>
    .top-container {
        display: flex;
        width: 107%;
        height: 35vh;
        border-radius: 5px;
        align-self: center;
        margin-bottom: 40px;
    }

    #avatar {
        width: 164px;
        height: 164px;
        border-radius: 100px;
        align-self: flex-end;
        margin-left: 20px;
        transition: 150ms;
        transform: translateY(40px);
        border: 2px solid var(--button_background);
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @media screen and (max-width: 850px) {
        .top-container {
            border-radius: 0px;
            width: 100%;
            height: 23vh;
        }

        #avatar {
            width: 100px;
            height: 100px;
        }
    }
</style>

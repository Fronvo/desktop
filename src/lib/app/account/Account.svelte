<script lang="ts">
    import { goto } from '$app/navigation';
    import Login from '$lib/app/account/Login.svelte';
    import Register from '$lib/app/account/Register.svelte';
    import RegisterVerify from '$lib/app/account/RegisterVerify.svelte';
    import {
        accountRegisterFinalTab,
        accountRegisterTab,
        accountRegisterVerifyTab,
        accountResetPasswordFinalTab,
        accountResetPasswordTab,
        accountResetPasswordVerifyTab,
    } from 'stores/account';
    import Center from '../Center.svelte';
    import AccountHeader from './AccountHeader.svelte';
    import RegisterFinal from './RegisterFinal.svelte';
    import ResetPassword from './ResetPassword.svelte';
    import ResetPasswordFinal from './ResetPasswordFinal.svelte';
    import ResetPasswordVerify from './ResetPasswordVerify.svelte';

    goto('/login', {
        replaceState: true,
    });
</script>

<Center>
    <AccountHeader />

    {#if $accountRegisterFinalTab}
        <RegisterFinal />
    {:else if $accountRegisterVerifyTab}
        <RegisterVerify />
    {:else if $accountResetPasswordTab}
        {#if $accountResetPasswordFinalTab}
            <ResetPasswordFinal />
        {:else if $accountResetPasswordVerifyTab}
            <ResetPasswordVerify />
        {:else}
            <ResetPassword />
        {/if}
    {:else if $accountRegisterTab}
        <Register />
    {:else}
        <Login />
    {/if}
</Center>

<script lang="ts">
    import { dismissModal, setProgressBar, switchPanel } from 'utilities/main';
    import { loadCommunitiesData } from 'utilities/communities';
    import ModalTemplate from '../ModalTemplate.svelte';
    import { cachedAccountData, socket } from 'stores/main';
    import type { ModalData } from 'stores/modals';
    import { loadOurProfile } from 'utilities/profile';
    import { PanelTypes } from 'stores/panels';
    import ErrorHeader from '$lib/app/reusables/all/ErrorHeader.svelte';

    let inviteCode: string;
    let isJoining = false;
    let canJoin = true;
    let errorMessage: string;

    function joinCommunity(): void {
        if (!canJoin || isJoining || !inviteCode) return;

        isJoining = true;

        setProgressBar(true);

        socket.emit(
            'joinCommunity',
            {
                communityId: inviteCode,
            },
            async ({ err }) => {
                if (err) {
                    errorMessage = err.msg;
                    isJoining = false;
                    setProgressBar(false);

                    return;
                }
                // Update community panel
                await loadCommunitiesData(
                    await loadOurProfile($cachedAccountData)
                );

                switchPanel(PanelTypes.Community);

                dismissModal();
            }
        );
    }

    const data: ModalData = {
        title: 'Join Community',

        actions: [
            {
                title: 'Join',
                callback: joinCommunity,
            },
            {
                title: 'Dismiss',
                callback: dismissModal,
            },
        ],

        useSecondaryHr: true,
    };
</script>

<ModalTemplate {data}>
    <ErrorHeader {errorMessage} />

    <!-- svelte-ignore a11y-autofocus -->
    <input
        placeholder="Invite code"
        class="modal-input"
        autofocus
        bind:value={inviteCode}
        maxlength={15}
    />
</ModalTemplate>

<style>
</style>

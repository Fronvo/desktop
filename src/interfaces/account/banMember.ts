// ******************** //
// Interfaces for the banMember event file.
// ******************** //

import type { FronvoError } from 'interfaces/all';

export interface BanMemberParams {
    profileId: string;
}

export interface BanMemberResult extends FronvoError {}

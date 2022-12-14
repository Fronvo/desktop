// ******************** //
// Interfaces for the sendCommunityMessage event file.
// ******************** //

import type { FronvoError } from 'interfaces/all';

export interface SendCommunityMessageParams {
    message: string;
    replyId?: string;
}

export interface SendCommunityMessageResult extends FronvoError {}

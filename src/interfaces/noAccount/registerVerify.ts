// ******************** //
// Interfaces for the registerVerify event.
// ******************** //

import type { FronvoError } from 'interfaces/all';

export interface RegisterVerifyParams {
    code: string;
}

export interface RegisterVerifyResult extends FronvoError {
    token: string;
}

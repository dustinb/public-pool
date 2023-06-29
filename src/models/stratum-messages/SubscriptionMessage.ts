import { IsArray } from 'class-validator';

import { eRequestMethod } from '../enums/eRequestMethod';
import { StratumBaseMessage } from './StratumBaseMessage';

export class SubscriptionMessage extends StratumBaseMessage {


    @IsArray()
    params: string[];

    constructor() {
        super();
        this.method = eRequestMethod.SUBSCRIBE;
    }

    public response(clientId: string) {
        return {
            id: this.id,
            error: null,
            result: [
                null,
                clientId, //Extranonce1 -  Hex-encoded, per-connection unique string which will be used for coinbase serialization later. Keep it safe!
                4 //Extranonce2_size - Represents expected length of extranonce2 which will be generated by the miner.
            ]
        }


    }
}
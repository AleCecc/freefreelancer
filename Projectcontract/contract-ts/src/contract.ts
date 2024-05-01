import { NearBindgen, near, call, view, UnorderedMap, includeBytes, NearPromise, validateAccountId, UnorderedSet, LookupSet, Vector, initialize } from 'near-sdk-js';
import { AccountId } from 'near-sdk-js/lib/types';

const INITIAL_BALANCE = BigInt(3_000_000_000_000_000_000_000_000);
const CODE = includeBytes("../build/subcontract.wasm");

@NearBindgen({})
export class Contract {
  @call({})
  createAccount({ prefix}:{prefix:String}):void {
    
    const subAccountId = `${prefix}.${near.currentAccountId()}`;
    NearPromise.new(subAccountId)
        .createAccount()
        //@ts-ignore
        .addFullAccessKey(near.signerAccountPk())
        .transfer(INITIAL_BALANCE)
        //@ts-ignore
        .deployContract(CODE);
  }
}




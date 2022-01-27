/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LMSRMarketMakerData,
  LMSRMarketMakerDataInterface,
} from "../LMSRMarketMakerData";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "initialFunding",
        type: "uint256",
      },
    ],
    name: "AMMCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603e80601d6000396000f3fe6080604052600080fdfea265627a7a7231582088ca14e17fa2ef2235d94e5f51a9ebc69eede83787dce9099af34d158b99ed5264736f6c63430005100032";

export class LMSRMarketMakerData__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LMSRMarketMakerData> {
    return super.deploy(overrides || {}) as Promise<LMSRMarketMakerData>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LMSRMarketMakerData {
    return super.attach(address) as LMSRMarketMakerData;
  }
  connect(signer: Signer): LMSRMarketMakerData__factory {
    return super.connect(signer) as LMSRMarketMakerData__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LMSRMarketMakerDataInterface {
    return new utils.Interface(_abi) as LMSRMarketMakerDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LMSRMarketMakerData {
    return new Contract(address, _abi, signerOrProvider) as LMSRMarketMakerData;
  }
}

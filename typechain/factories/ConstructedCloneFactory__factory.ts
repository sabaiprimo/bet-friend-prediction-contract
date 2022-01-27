/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ConstructedCloneFactory,
  ConstructedCloneFactoryInterface,
} from "../ConstructedCloneFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "clone",
        type: "address",
      },
    ],
    name: "CloneCreated",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "cloneConstructor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ConstructedCloneFactory__factory {
  static readonly abi = _abi;
  static createInterface(): ConstructedCloneFactoryInterface {
    return new utils.Interface(_abi) as ConstructedCloneFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConstructedCloneFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConstructedCloneFactory;
  }
}
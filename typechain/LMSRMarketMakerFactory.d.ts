/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LMSRMarketMakerFactoryInterface extends ethers.utils.Interface {
  functions: {
    "cloneConstructor(bytes)": FunctionFragment;
    "createLMSRMarketMaker(address,address,bytes32[],uint64,address,uint256)": FunctionFragment;
    "implementationMaster()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cloneConstructor",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createLMSRMarketMaker",
    values: [string, string, BytesLike[], BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "implementationMaster",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cloneConstructor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createLMSRMarketMaker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementationMaster",
    data: BytesLike
  ): Result;

  events: {
    "AMMCreated(uint256)": EventFragment;
    "CloneCreated(address,address)": EventFragment;
    "LMSRMarketMakerCreation(address,address,address,address,bytes32[],uint64,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AMMCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CloneCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LMSRMarketMakerCreation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type AMMCreatedEvent = TypedEvent<
  [BigNumber] & { initialFunding: BigNumber }
>;

export type CloneCreatedEvent = TypedEvent<
  [string, string] & { target: string; clone: string }
>;

export type LMSRMarketMakerCreationEvent = TypedEvent<
  [string, string, string, string, string[], BigNumber, BigNumber] & {
    creator: string;
    lmsrMarketMaker: string;
    pmSystem: string;
    collateralToken: string;
    conditionIds: string[];
    fee: BigNumber;
    funding: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class LMSRMarketMakerFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LMSRMarketMakerFactoryInterface;

  functions: {
    cloneConstructor(
      consData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createLMSRMarketMaker(
      pmSystem: string,
      collateralToken: string,
      conditionIds: BytesLike[],
      fee: BigNumberish,
      whitelist: string,
      funding: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    implementationMaster(overrides?: CallOverrides): Promise<[string]>;
  };

  cloneConstructor(
    consData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createLMSRMarketMaker(
    pmSystem: string,
    collateralToken: string,
    conditionIds: BytesLike[],
    fee: BigNumberish,
    whitelist: string,
    funding: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  implementationMaster(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cloneConstructor(
      consData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    createLMSRMarketMaker(
      pmSystem: string,
      collateralToken: string,
      conditionIds: BytesLike[],
      fee: BigNumberish,
      whitelist: string,
      funding: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    implementationMaster(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AMMCreated(uint256)"(
      initialFunding?: null
    ): TypedEventFilter<[BigNumber], { initialFunding: BigNumber }>;

    AMMCreated(
      initialFunding?: null
    ): TypedEventFilter<[BigNumber], { initialFunding: BigNumber }>;

    "CloneCreated(address,address)"(
      target?: string | null,
      clone?: null
    ): TypedEventFilter<[string, string], { target: string; clone: string }>;

    CloneCreated(
      target?: string | null,
      clone?: null
    ): TypedEventFilter<[string, string], { target: string; clone: string }>;

    "LMSRMarketMakerCreation(address,address,address,address,bytes32[],uint64,uint256)"(
      creator?: string | null,
      lmsrMarketMaker?: null,
      pmSystem?: null,
      collateralToken?: null,
      conditionIds?: null,
      fee?: null,
      funding?: null
    ): TypedEventFilter<
      [string, string, string, string, string[], BigNumber, BigNumber],
      {
        creator: string;
        lmsrMarketMaker: string;
        pmSystem: string;
        collateralToken: string;
        conditionIds: string[];
        fee: BigNumber;
        funding: BigNumber;
      }
    >;

    LMSRMarketMakerCreation(
      creator?: string | null,
      lmsrMarketMaker?: null,
      pmSystem?: null,
      collateralToken?: null,
      conditionIds?: null,
      fee?: null,
      funding?: null
    ): TypedEventFilter<
      [string, string, string, string, string[], BigNumber, BigNumber],
      {
        creator: string;
        lmsrMarketMaker: string;
        pmSystem: string;
        collateralToken: string;
        conditionIds: string[];
        fee: BigNumber;
        funding: BigNumber;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    cloneConstructor(
      consData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createLMSRMarketMaker(
      pmSystem: string,
      collateralToken: string,
      conditionIds: BytesLike[],
      fee: BigNumberish,
      whitelist: string,
      funding: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    implementationMaster(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cloneConstructor(
      consData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createLMSRMarketMaker(
      pmSystem: string,
      collateralToken: string,
      conditionIds: BytesLike[],
      fee: BigNumberish,
      whitelist: string,
      funding: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    implementationMaster(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

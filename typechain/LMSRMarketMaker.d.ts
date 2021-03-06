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

interface LMSRMarketMakerInterface extends ethers.utils.Interface {
  functions: {
    "FEE_RANGE()": FunctionFragment;
    "atomicOutcomeSlotCount()": FunctionFragment;
    "calcMarginalPrice(uint8)": FunctionFragment;
    "calcMarketFee(uint256)": FunctionFragment;
    "calcNetCost(int256[])": FunctionFragment;
    "changeFee(uint64)": FunctionFragment;
    "changeFunding(int256)": FunctionFragment;
    "close()": FunctionFragment;
    "collateralToken()": FunctionFragment;
    "conditionIds(uint256)": FunctionFragment;
    "fee()": FunctionFragment;
    "funding()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "pmSystem()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resume()": FunctionFragment;
    "stage()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "trade(int256[],int256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "whitelist()": FunctionFragment;
    "withdrawFees()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "FEE_RANGE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "atomicOutcomeSlotCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calcMarginalPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calcMarketFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calcNetCost",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "changeFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeFunding",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "close", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "collateralToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "conditionIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "funding", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "pmSystem", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "resume", values?: undefined): string;
  encodeFunctionData(functionFragment: "stage", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "trade",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "whitelist", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawFees",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "FEE_RANGE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "atomicOutcomeSlotCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcMarginalPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcMarketFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcNetCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "changeFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeFunding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "conditionIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "funding", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pmSystem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resume", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stage", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "trade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFees",
    data: BytesLike
  ): Result;

  events: {
    "AMMClosed()": EventFragment;
    "AMMCreated(uint256)": EventFragment;
    "AMMFeeChanged(uint64)": EventFragment;
    "AMMFeeWithdrawal(uint256)": EventFragment;
    "AMMFundingChanged(int256)": EventFragment;
    "AMMOutcomeTokenTrade(address,int256[],int256,uint256)": EventFragment;
    "AMMPaused()": EventFragment;
    "AMMResumed()": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AMMClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AMMCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AMMFeeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AMMFeeWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AMMFundingChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AMMOutcomeTokenTrade"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AMMPaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AMMResumed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type AMMClosedEvent = TypedEvent<[] & {}>;

export type AMMCreatedEvent = TypedEvent<
  [BigNumber] & { initialFunding: BigNumber }
>;

export type AMMFeeChangedEvent = TypedEvent<
  [BigNumber] & { newFee: BigNumber }
>;

export type AMMFeeWithdrawalEvent = TypedEvent<
  [BigNumber] & { fees: BigNumber }
>;

export type AMMFundingChangedEvent = TypedEvent<
  [BigNumber] & { fundingChange: BigNumber }
>;

export type AMMOutcomeTokenTradeEvent = TypedEvent<
  [string, BigNumber[], BigNumber, BigNumber] & {
    transactor: string;
    outcomeTokenAmounts: BigNumber[];
    outcomeTokenNetCost: BigNumber;
    marketFees: BigNumber;
  }
>;

export type AMMPausedEvent = TypedEvent<[] & {}>;

export type AMMResumedEvent = TypedEvent<[] & {}>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class LMSRMarketMaker extends BaseContract {
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

  interface: LMSRMarketMakerInterface;

  functions: {
    FEE_RANGE(overrides?: CallOverrides): Promise<[BigNumber]>;

    atomicOutcomeSlotCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    calcMarginalPrice(
      outcomeTokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { price: BigNumber }>;

    calcMarketFee(
      outcomeTokenCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calcNetCost(
      outcomeTokenAmounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { netCost: BigNumber }>;

    changeFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeFunding(
      fundingChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    close(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collateralToken(overrides?: CallOverrides): Promise<[string]>;

    conditionIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    funding(overrides?: CallOverrides): Promise<[BigNumber]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    onERC1155BatchReceived(
      _operator: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      operator: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pmSystem(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resume(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stage(overrides?: CallOverrides): Promise<[number]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    trade(
      outcomeTokenAmounts: BigNumberish[],
      collateralLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelist(overrides?: CallOverrides): Promise<[string]>;

    withdrawFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  FEE_RANGE(overrides?: CallOverrides): Promise<BigNumber>;

  atomicOutcomeSlotCount(overrides?: CallOverrides): Promise<BigNumber>;

  calcMarginalPrice(
    outcomeTokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcMarketFee(
    outcomeTokenCost: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calcNetCost(
    outcomeTokenAmounts: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  changeFee(
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeFunding(
    fundingChange: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  close(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collateralToken(overrides?: CallOverrides): Promise<string>;

  conditionIds(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  funding(overrides?: CallOverrides): Promise<BigNumber>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  onERC1155BatchReceived(
    _operator: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    operator: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pmSystem(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resume(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stage(overrides?: CallOverrides): Promise<number>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  trade(
    outcomeTokenAmounts: BigNumberish[],
    collateralLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelist(overrides?: CallOverrides): Promise<string>;

  withdrawFees(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    FEE_RANGE(overrides?: CallOverrides): Promise<BigNumber>;

    atomicOutcomeSlotCount(overrides?: CallOverrides): Promise<BigNumber>;

    calcMarginalPrice(
      outcomeTokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcMarketFee(
      outcomeTokenCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcNetCost(
      outcomeTokenAmounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeFee(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    changeFunding(
      fundingChange: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    close(overrides?: CallOverrides): Promise<void>;

    collateralToken(overrides?: CallOverrides): Promise<string>;

    conditionIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    funding(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    onERC1155BatchReceived(
      _operator: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      operator: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    pmSystem(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    resume(overrides?: CallOverrides): Promise<void>;

    stage(overrides?: CallOverrides): Promise<number>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    trade(
      outcomeTokenAmounts: BigNumberish[],
      collateralLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    whitelist(overrides?: CallOverrides): Promise<string>;

    withdrawFees(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AMMClosed()"(): TypedEventFilter<[], {}>;

    AMMClosed(): TypedEventFilter<[], {}>;

    "AMMCreated(uint256)"(
      initialFunding?: null
    ): TypedEventFilter<[BigNumber], { initialFunding: BigNumber }>;

    AMMCreated(
      initialFunding?: null
    ): TypedEventFilter<[BigNumber], { initialFunding: BigNumber }>;

    "AMMFeeChanged(uint64)"(
      newFee?: null
    ): TypedEventFilter<[BigNumber], { newFee: BigNumber }>;

    AMMFeeChanged(
      newFee?: null
    ): TypedEventFilter<[BigNumber], { newFee: BigNumber }>;

    "AMMFeeWithdrawal(uint256)"(
      fees?: null
    ): TypedEventFilter<[BigNumber], { fees: BigNumber }>;

    AMMFeeWithdrawal(
      fees?: null
    ): TypedEventFilter<[BigNumber], { fees: BigNumber }>;

    "AMMFundingChanged(int256)"(
      fundingChange?: null
    ): TypedEventFilter<[BigNumber], { fundingChange: BigNumber }>;

    AMMFundingChanged(
      fundingChange?: null
    ): TypedEventFilter<[BigNumber], { fundingChange: BigNumber }>;

    "AMMOutcomeTokenTrade(address,int256[],int256,uint256)"(
      transactor?: string | null,
      outcomeTokenAmounts?: null,
      outcomeTokenNetCost?: null,
      marketFees?: null
    ): TypedEventFilter<
      [string, BigNumber[], BigNumber, BigNumber],
      {
        transactor: string;
        outcomeTokenAmounts: BigNumber[];
        outcomeTokenNetCost: BigNumber;
        marketFees: BigNumber;
      }
    >;

    AMMOutcomeTokenTrade(
      transactor?: string | null,
      outcomeTokenAmounts?: null,
      outcomeTokenNetCost?: null,
      marketFees?: null
    ): TypedEventFilter<
      [string, BigNumber[], BigNumber, BigNumber],
      {
        transactor: string;
        outcomeTokenAmounts: BigNumber[];
        outcomeTokenNetCost: BigNumber;
        marketFees: BigNumber;
      }
    >;

    "AMMPaused()"(): TypedEventFilter<[], {}>;

    AMMPaused(): TypedEventFilter<[], {}>;

    "AMMResumed()"(): TypedEventFilter<[], {}>;

    AMMResumed(): TypedEventFilter<[], {}>;

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
    FEE_RANGE(overrides?: CallOverrides): Promise<BigNumber>;

    atomicOutcomeSlotCount(overrides?: CallOverrides): Promise<BigNumber>;

    calcMarginalPrice(
      outcomeTokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcMarketFee(
      outcomeTokenCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcNetCost(
      outcomeTokenAmounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeFunding(
      fundingChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    close(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collateralToken(overrides?: CallOverrides): Promise<BigNumber>;

    conditionIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    funding(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      _operator: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      operator: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pmSystem(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resume(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stage(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    trade(
      outcomeTokenAmounts: BigNumberish[],
      collateralLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelist(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FEE_RANGE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    atomicOutcomeSlotCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcMarginalPrice(
      outcomeTokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcMarketFee(
      outcomeTokenCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcNetCost(
      outcomeTokenAmounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeFunding(
      fundingChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    close(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collateralToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    conditionIds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    funding(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      _operator: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      operator: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pmSystem(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resume(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    trade(
      outcomeTokenAmounts: BigNumberish[],
      collateralLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawFees(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

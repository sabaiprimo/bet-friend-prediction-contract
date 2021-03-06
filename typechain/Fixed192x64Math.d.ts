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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface Fixed192x64MathInterface extends ethers.utils.Interface {
  functions: {
    "LN2()": FunctionFragment;
    "LOG2_E()": FunctionFragment;
    "ONE()": FunctionFragment;
    "binaryLog(uint256,uint8)": FunctionFragment;
    "exp(int256)": FunctionFragment;
    "floorLog2(uint256)": FunctionFragment;
    "ln(uint256)": FunctionFragment;
    "log2Bounds(uint256)": FunctionFragment;
    "max(int256[])": FunctionFragment;
    "pow2(int256,uint8)": FunctionFragment;
    "pow2Bounds(int256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "LN2", values?: undefined): string;
  encodeFunctionData(functionFragment: "LOG2_E", values?: undefined): string;
  encodeFunctionData(functionFragment: "ONE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "binaryLog",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "exp", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "floorLog2",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ln", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "log2Bounds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "max", values: [BigNumberish[]]): string;
  encodeFunctionData(
    functionFragment: "pow2",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pow2Bounds",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "LN2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "LOG2_E", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ONE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "binaryLog", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "floorLog2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ln", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "log2Bounds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "max", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pow2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pow2Bounds", data: BytesLike): Result;

  events: {};
}

export class Fixed192x64Math extends BaseContract {
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

  interface: Fixed192x64MathInterface;

  functions: {
    LN2(overrides?: CallOverrides): Promise<[BigNumber]>;

    LOG2_E(overrides?: CallOverrides): Promise<[BigNumber]>;

    ONE(overrides?: CallOverrides): Promise<[BigNumber]>;

    binaryLog(
      x: BigNumberish,
      estimationMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exp(x: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    floorLog2(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { lo: BigNumber }>;

    ln(x: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    log2Bounds(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { lower: BigNumber; upper: BigNumber }>;

    max(
      nums: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxNum: BigNumber }>;

    pow2(
      x: BigNumberish,
      estimationMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pow2Bounds(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { lower: BigNumber; upper: BigNumber }>;
  };

  LN2(overrides?: CallOverrides): Promise<BigNumber>;

  LOG2_E(overrides?: CallOverrides): Promise<BigNumber>;

  ONE(overrides?: CallOverrides): Promise<BigNumber>;

  binaryLog(
    x: BigNumberish,
    estimationMode: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exp(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  floorLog2(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  ln(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  log2Bounds(
    x: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { lower: BigNumber; upper: BigNumber }>;

  max(nums: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;

  pow2(
    x: BigNumberish,
    estimationMode: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pow2Bounds(
    x: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { lower: BigNumber; upper: BigNumber }>;

  callStatic: {
    LN2(overrides?: CallOverrides): Promise<BigNumber>;

    LOG2_E(overrides?: CallOverrides): Promise<BigNumber>;

    ONE(overrides?: CallOverrides): Promise<BigNumber>;

    binaryLog(
      x: BigNumberish,
      estimationMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exp(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    floorLog2(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    ln(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    log2Bounds(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { lower: BigNumber; upper: BigNumber }>;

    max(nums: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;

    pow2(
      x: BigNumberish,
      estimationMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pow2Bounds(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { lower: BigNumber; upper: BigNumber }>;
  };

  filters: {};

  estimateGas: {
    LN2(overrides?: CallOverrides): Promise<BigNumber>;

    LOG2_E(overrides?: CallOverrides): Promise<BigNumber>;

    ONE(overrides?: CallOverrides): Promise<BigNumber>;

    binaryLog(
      x: BigNumberish,
      estimationMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exp(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    floorLog2(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    ln(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    log2Bounds(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    max(nums: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;

    pow2(
      x: BigNumberish,
      estimationMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pow2Bounds(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    LN2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOG2_E(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ONE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    binaryLog(
      x: BigNumberish,
      estimationMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exp(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    floorLog2(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ln(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    log2Bounds(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    max(
      nums: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pow2(
      x: BigNumberish,
      estimationMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pow2Bounds(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

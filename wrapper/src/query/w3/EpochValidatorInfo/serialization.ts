import {
  Read,
  ReadDecoder,
  Write,
  WriteSizer,
  WriteEncoder,
  Nullable,
  BigInt,
  JSON,
  Context
} from "@web3api/wasm-as";
import { EpochValidatorInfo } from "./";
import * as Types from "..";

export function serializeEpochValidatorInfo(type: EpochValidatorInfo): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: EpochValidatorInfo");
  const sizer = new WriteSizer(sizerContext);
  writeEpochValidatorInfo(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: EpochValidatorInfo");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeEpochValidatorInfo(encoder, type);
  return buffer;
}

export function writeEpochValidatorInfo(writer: Write, type: EpochValidatorInfo): void {
  writer.writeMapLength(8);
  writer.context().push("next_validators", "Array<Types.NextEpochValidatorInfo>", "writing property");
  writer.writeString("next_validators");
  writer.writeArray(type.next_validators, (writer: Write, item: Types.NextEpochValidatorInfo): void => {
    Types.NextEpochValidatorInfo.write(writer, item);
  });
  writer.context().pop();
  writer.context().push("current_validators", "Array<Types.CurrentEpochValidatorInfo>", "writing property");
  writer.writeString("current_validators");
  writer.writeArray(type.current_validators, (writer: Write, item: Types.CurrentEpochValidatorInfo): void => {
    Types.CurrentEpochValidatorInfo.write(writer, item);
  });
  writer.context().pop();
  writer.context().push("next_fisherman", "Array<Types.ValidatorStakeView>", "writing property");
  writer.writeString("next_fisherman");
  writer.writeArray(type.next_fisherman, (writer: Write, item: Types.ValidatorStakeView): void => {
    Types.ValidatorStakeView.write(writer, item);
  });
  writer.context().pop();
  writer.context().push("current_fisherman", "Array<Types.ValidatorStakeView>", "writing property");
  writer.writeString("current_fisherman");
  writer.writeArray(type.current_fisherman, (writer: Write, item: Types.ValidatorStakeView): void => {
    Types.ValidatorStakeView.write(writer, item);
  });
  writer.context().pop();
  writer.context().push("current_proposals", "Array<Types.ValidatorStakeView>", "writing property");
  writer.writeString("current_proposals");
  writer.writeArray(type.current_proposals, (writer: Write, item: Types.ValidatorStakeView): void => {
    Types.ValidatorStakeView.write(writer, item);
  });
  writer.context().pop();
  writer.context().push("prev_epoch_kickout", "Array<Types.ValidatorStakeView>", "writing property");
  writer.writeString("prev_epoch_kickout");
  writer.writeArray(type.prev_epoch_kickout, (writer: Write, item: Types.ValidatorStakeView): void => {
    Types.ValidatorStakeView.write(writer, item);
  });
  writer.context().pop();
  writer.context().push("epoch_start_height", "BigInt", "writing property");
  writer.writeString("epoch_start_height");
  writer.writeBigInt(type.epoch_start_height);
  writer.context().pop();
  writer.context().push("epoch_height", "BigInt", "writing property");
  writer.writeString("epoch_height");
  writer.writeBigInt(type.epoch_height);
  writer.context().pop();
}

export function deserializeEpochValidatorInfo(buffer: ArrayBuffer): EpochValidatorInfo {
  const context: Context = new Context("Deserializing object-type EpochValidatorInfo");
  const reader = new ReadDecoder(buffer, context);
  return readEpochValidatorInfo(reader);
}

export function readEpochValidatorInfo(reader: Read): EpochValidatorInfo {
  let numFields = reader.readMapLength();

  let _next_validators: Array<Types.NextEpochValidatorInfo> = [];
  let _next_validatorsSet: bool = false;
  let _current_validators: Array<Types.CurrentEpochValidatorInfo> = [];
  let _current_validatorsSet: bool = false;
  let _next_fisherman: Array<Types.ValidatorStakeView> = [];
  let _next_fishermanSet: bool = false;
  let _current_fisherman: Array<Types.ValidatorStakeView> = [];
  let _current_fishermanSet: bool = false;
  let _current_proposals: Array<Types.ValidatorStakeView> = [];
  let _current_proposalsSet: bool = false;
  let _prev_epoch_kickout: Array<Types.ValidatorStakeView> = [];
  let _prev_epoch_kickoutSet: bool = false;
  let _epoch_start_height: BigInt = BigInt.fromUInt16(0);
  let _epoch_start_heightSet: bool = false;
  let _epoch_height: BigInt = BigInt.fromUInt16(0);
  let _epoch_heightSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "next_validators") {
      reader.context().push(field, "Array<Types.NextEpochValidatorInfo>", "type found, reading property");
      _next_validators = reader.readArray((reader: Read): Types.NextEpochValidatorInfo => {
        const object = Types.NextEpochValidatorInfo.read(reader);
        return object;
      });
      _next_validatorsSet = true;
      reader.context().pop();
    }
    else if (field == "current_validators") {
      reader.context().push(field, "Array<Types.CurrentEpochValidatorInfo>", "type found, reading property");
      _current_validators = reader.readArray((reader: Read): Types.CurrentEpochValidatorInfo => {
        const object = Types.CurrentEpochValidatorInfo.read(reader);
        return object;
      });
      _current_validatorsSet = true;
      reader.context().pop();
    }
    else if (field == "next_fisherman") {
      reader.context().push(field, "Array<Types.ValidatorStakeView>", "type found, reading property");
      _next_fisherman = reader.readArray((reader: Read): Types.ValidatorStakeView => {
        const object = Types.ValidatorStakeView.read(reader);
        return object;
      });
      _next_fishermanSet = true;
      reader.context().pop();
    }
    else if (field == "current_fisherman") {
      reader.context().push(field, "Array<Types.ValidatorStakeView>", "type found, reading property");
      _current_fisherman = reader.readArray((reader: Read): Types.ValidatorStakeView => {
        const object = Types.ValidatorStakeView.read(reader);
        return object;
      });
      _current_fishermanSet = true;
      reader.context().pop();
    }
    else if (field == "current_proposals") {
      reader.context().push(field, "Array<Types.ValidatorStakeView>", "type found, reading property");
      _current_proposals = reader.readArray((reader: Read): Types.ValidatorStakeView => {
        const object = Types.ValidatorStakeView.read(reader);
        return object;
      });
      _current_proposalsSet = true;
      reader.context().pop();
    }
    else if (field == "prev_epoch_kickout") {
      reader.context().push(field, "Array<Types.ValidatorStakeView>", "type found, reading property");
      _prev_epoch_kickout = reader.readArray((reader: Read): Types.ValidatorStakeView => {
        const object = Types.ValidatorStakeView.read(reader);
        return object;
      });
      _prev_epoch_kickoutSet = true;
      reader.context().pop();
    }
    else if (field == "epoch_start_height") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _epoch_start_height = reader.readBigInt();
      _epoch_start_heightSet = true;
      reader.context().pop();
    }
    else if (field == "epoch_height") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _epoch_height = reader.readBigInt();
      _epoch_heightSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_next_validatorsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'next_validators: [NextEpochValidatorInfo]'"));
  }
  if (!_current_validatorsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'current_validators: [CurrentEpochValidatorInfo]'"));
  }
  if (!_next_fishermanSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'next_fisherman: [ValidatorStakeView]'"));
  }
  if (!_current_fishermanSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'current_fisherman: [ValidatorStakeView]'"));
  }
  if (!_current_proposalsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'current_proposals: [ValidatorStakeView]'"));
  }
  if (!_prev_epoch_kickoutSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'prev_epoch_kickout: [ValidatorStakeView]'"));
  }
  if (!_epoch_start_heightSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'epoch_start_height: BigInt'"));
  }
  if (!_epoch_heightSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'epoch_height: BigInt'"));
  }

  return {
    next_validators: _next_validators,
    current_validators: _current_validators,
    next_fisherman: _next_fisherman,
    current_fisherman: _current_fisherman,
    current_proposals: _current_proposals,
    prev_epoch_kickout: _prev_epoch_kickout,
    epoch_start_height: _epoch_start_height,
    epoch_height: _epoch_height
  };
}

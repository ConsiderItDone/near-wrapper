export enum IdType {
  transaction,
  receipt,
  _MAX_
}

export function sanitizeIdTypeValue(value: i32): void {
  const valid = value >= 0 && value < IdType._MAX_;
  if (!valid) {
    throw new Error("Invalid value for enum 'IdType': " + value.toString());
  }
}

export function getIdTypeValue(key: string): IdType {
  if (key == "transaction") {
    return IdType.transaction;
  }
  if (key == "receipt") {
    return IdType.receipt;
  }

  throw new Error("Invalid key for enum 'IdType': " + key);
}

export function getIdTypeKey(value: IdType): string {
  sanitizeIdTypeValue(value);

  switch (value) {
    case IdType.transaction: return "transaction";
    case IdType.receipt: return "receipt";
    default:
      throw new Error("Invalid value for enum 'IdType': " + value.toString());
  }
}

/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Pagination } from "./common";

export const protobufPackage = "item";

export interface ItemById {
  id: number;
}

export interface Item {
  id: number;
  name: string;
  url: string;
}

export interface Items {
  list: Item[];
}

function createBaseItemById(): ItemById {
  return { id: 0 };
}

export const ItemById = {
  encode(message: ItemById, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ItemById {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemById();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ItemById {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: ItemById): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create(base?: DeepPartial<ItemById>): ItemById {
    return ItemById.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ItemById>): ItemById {
    const message = createBaseItemById();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseItem(): Item {
  return { id: 0, name: "", url: "" };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Item {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create(base?: DeepPartial<Item>): Item {
    return Item.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseItems(): Items {
  return { list: [] };
}

export const Items = {
  encode(message: Items, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Items {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItems();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(Item.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Items {
    return { list: Array.isArray(object?.list) ? object.list.map((e: any) => Item.fromJSON(e)) : [] };
  },

  toJSON(message: Items): unknown {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map((e) => e ? Item.toJSON(e) : undefined);
    } else {
      obj.list = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Items>): Items {
    return Items.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Items>): Items {
    const message = createBaseItems();
    message.list = object.list?.map((e) => Item.fromPartial(e)) || [];
    return message;
  },
};

export type ItemServiceDefinition = typeof ItemServiceDefinition;
export const ItemServiceDefinition = {
  name: "ItemService",
  fullName: "item.ItemService",
  methods: {
    findOne: {
      name: "FindOne",
      requestType: ItemById,
      requestStream: false,
      responseType: Item,
      responseStream: false,
      options: {},
    },
    getItems: {
      name: "GetItems",
      requestType: Pagination,
      requestStream: false,
      responseType: Items,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ItemServiceImplementation<CallContextExt = {}> {
  findOne(request: ItemById, context: CallContext & CallContextExt): Promise<DeepPartial<Item>>;
  getItems(request: Pagination, context: CallContext & CallContextExt): Promise<DeepPartial<Items>>;
}

export interface ItemServiceClient<CallOptionsExt = {}> {
  findOne(request: DeepPartial<ItemById>, options?: CallOptions & CallOptionsExt): Promise<Item>;
  getItems(request: DeepPartial<Pagination>, options?: CallOptions & CallOptionsExt): Promise<Items>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

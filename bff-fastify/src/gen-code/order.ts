/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Pagination } from "./common";

export const protobufPackage = "order";

export interface OrderById {
  id: number;
}

export interface Order {
  id: number;
  price: number;
  createTime: number;
  itemIds: number[];
}

export interface Orders {
  orders: Order[];
}

function createBaseOrderById(): OrderById {
  return { id: 0 };
}

export const OrderById = {
  encode(message: OrderById, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderById {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderById();
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

  fromJSON(object: any): OrderById {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: OrderById): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create(base?: DeepPartial<OrderById>): OrderById {
    return OrderById.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<OrderById>): OrderById {
    const message = createBaseOrderById();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseOrder(): Order {
  return { id: 0, price: 0, createTime: 0, itemIds: [] };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.price !== 0) {
      writer.uint32(21).float(message.price);
    }
    if (message.createTime !== 0) {
      writer.uint32(24).int32(message.createTime);
    }
    writer.uint32(34).fork();
    for (const v of message.itemIds) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.price = reader.float();
          break;
        case 3:
          message.createTime = reader.int32();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.itemIds.push(reader.int32());
            }
          } else {
            message.itemIds.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
      createTime: isSet(object.createTime) ? Number(object.createTime) : 0,
      itemIds: Array.isArray(object?.itemIds) ? object.itemIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.price !== undefined && (obj.price = message.price);
    message.createTime !== undefined && (obj.createTime = Math.round(message.createTime));
    if (message.itemIds) {
      obj.itemIds = message.itemIds.map((e) => Math.round(e));
    } else {
      obj.itemIds = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Order>): Order {
    return Order.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id ?? 0;
    message.price = object.price ?? 0;
    message.createTime = object.createTime ?? 0;
    message.itemIds = object.itemIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseOrders(): Orders {
  return { orders: [] };
}

export const Orders = {
  encode(message: Orders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Orders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Orders {
    return { orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [] };
  },

  toJSON(message: Orders): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Orders>): Orders {
    return Orders.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Orders>): Orders {
    const message = createBaseOrders();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    return message;
  },
};

export type OrderServiceDefinition = typeof OrderServiceDefinition;
export const OrderServiceDefinition = {
  name: "OrderService",
  fullName: "order.OrderService",
  methods: {
    findOne: {
      name: "FindOne",
      requestType: OrderById,
      requestStream: false,
      responseType: Order,
      responseStream: false,
      options: {},
    },
    getOrders: {
      name: "GetOrders",
      requestType: Pagination,
      requestStream: false,
      responseType: Orders,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface OrderServiceImplementation<CallContextExt = {}> {
  findOne(request: OrderById, context: CallContext & CallContextExt): Promise<DeepPartial<Order>>;
  getOrders(request: Pagination, context: CallContext & CallContextExt): Promise<DeepPartial<Orders>>;
}

export interface OrderServiceClient<CallOptionsExt = {}> {
  findOne(request: DeepPartial<OrderById>, options?: CallOptions & CallOptionsExt): Promise<Order>;
  getOrders(request: DeepPartial<Pagination>, options?: CallOptions & CallOptionsExt): Promise<Orders>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

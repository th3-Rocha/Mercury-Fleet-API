
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Truck
 * 
 */
export type Truck = $Result.DefaultSelection<Prisma.$TruckPayload>
/**
 * Model Recipient
 * 
 */
export type Recipient = $Result.DefaultSelection<Prisma.$RecipientPayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model ShipmentEvent
 * 
 */
export type ShipmentEvent = $Result.DefaultSelection<Prisma.$ShipmentEventPayload>
/**
 * Model BalanceEvent
 * 
 */
export type BalanceEvent = $Result.DefaultSelection<Prisma.$BalanceEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CargoType: {
  LIQUID: 'LIQUID',
  SOLID: 'SOLID'
};

export type CargoType = (typeof CargoType)[keyof typeof CargoType]


export const ShipmentStatus: {
  PENDING: 'PENDING',
  IN_TRANSIT: 'IN_TRANSIT',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
  RETURNING: 'RETURNING'
};

export type ShipmentStatus = (typeof ShipmentStatus)[keyof typeof ShipmentStatus]


export const BalanceEventType: {
  VEHICLE_MAINTENANCE: 'VEHICLE_MAINTENANCE',
  FUEL: 'FUEL',
  FOOD: 'FOOD',
  TOLL: 'TOLL',
  INSURANCE: 'INSURANCE',
  TAX: 'TAX',
  SALARY: 'SALARY',
  MARKETING: 'MARKETING',
  SOFTWARE: 'SOFTWARE',
  UTILITIES: 'UTILITIES',
  OTHER_EXPENSE: 'OTHER_EXPENSE',
  FREIGHT_INCOME: 'FREIGHT_INCOME',
  ASSET_SALE: 'ASSET_SALE',
  OTHER_INCOME: 'OTHER_INCOME'
};

export type BalanceEventType = (typeof BalanceEventType)[keyof typeof BalanceEventType]


export const SubscriptionPlan: {
  FREE: 'FREE',
  PRO: 'PRO',
  ENTERPRISE: 'ENTERPRISE'
};

export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan]

}

export type CargoType = $Enums.CargoType

export const CargoType: typeof $Enums.CargoType

export type ShipmentStatus = $Enums.ShipmentStatus

export const ShipmentStatus: typeof $Enums.ShipmentStatus

export type BalanceEventType = $Enums.BalanceEventType

export const BalanceEventType: typeof $Enums.BalanceEventType

export type SubscriptionPlan = $Enums.SubscriptionPlan

export const SubscriptionPlan: typeof $Enums.SubscriptionPlan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.truck`: Exposes CRUD operations for the **Truck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trucks
    * const trucks = await prisma.truck.findMany()
    * ```
    */
  get truck(): Prisma.TruckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipient`: Exposes CRUD operations for the **Recipient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipients
    * const recipients = await prisma.recipient.findMany()
    * ```
    */
  get recipient(): Prisma.RecipientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentEvent`: Exposes CRUD operations for the **ShipmentEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentEvents
    * const shipmentEvents = await prisma.shipmentEvent.findMany()
    * ```
    */
  get shipmentEvent(): Prisma.ShipmentEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balanceEvent`: Exposes CRUD operations for the **BalanceEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BalanceEvents
    * const balanceEvents = await prisma.balanceEvent.findMany()
    * ```
    */
  get balanceEvent(): Prisma.BalanceEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Company: 'Company',
    Employee: 'Employee',
    Truck: 'Truck',
    Recipient: 'Recipient',
    Shipment: 'Shipment',
    ShipmentEvent: 'ShipmentEvent',
    BalanceEvent: 'BalanceEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "company" | "employee" | "truck" | "recipient" | "shipment" | "shipmentEvent" | "balanceEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Truck: {
        payload: Prisma.$TruckPayload<ExtArgs>
        fields: Prisma.TruckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TruckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TruckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          findFirst: {
            args: Prisma.TruckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TruckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          findMany: {
            args: Prisma.TruckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>[]
          }
          create: {
            args: Prisma.TruckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          createMany: {
            args: Prisma.TruckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TruckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>[]
          }
          delete: {
            args: Prisma.TruckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          update: {
            args: Prisma.TruckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          deleteMany: {
            args: Prisma.TruckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TruckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TruckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>[]
          }
          upsert: {
            args: Prisma.TruckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          aggregate: {
            args: Prisma.TruckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTruck>
          }
          groupBy: {
            args: Prisma.TruckGroupByArgs<ExtArgs>
            result: $Utils.Optional<TruckGroupByOutputType>[]
          }
          count: {
            args: Prisma.TruckCountArgs<ExtArgs>
            result: $Utils.Optional<TruckCountAggregateOutputType> | number
          }
        }
      }
      Recipient: {
        payload: Prisma.$RecipientPayload<ExtArgs>
        fields: Prisma.RecipientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          findFirst: {
            args: Prisma.RecipientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          findMany: {
            args: Prisma.RecipientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>[]
          }
          create: {
            args: Prisma.RecipientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          createMany: {
            args: Prisma.RecipientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>[]
          }
          delete: {
            args: Prisma.RecipientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          update: {
            args: Prisma.RecipientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          deleteMany: {
            args: Prisma.RecipientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>[]
          }
          upsert: {
            args: Prisma.RecipientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          aggregate: {
            args: Prisma.RecipientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipient>
          }
          groupBy: {
            args: Prisma.RecipientGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipientGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipientCountArgs<ExtArgs>
            result: $Utils.Optional<RecipientCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      ShipmentEvent: {
        payload: Prisma.$ShipmentEventPayload<ExtArgs>
        fields: Prisma.ShipmentEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          findFirst: {
            args: Prisma.ShipmentEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          findMany: {
            args: Prisma.ShipmentEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>[]
          }
          create: {
            args: Prisma.ShipmentEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          createMany: {
            args: Prisma.ShipmentEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>[]
          }
          delete: {
            args: Prisma.ShipmentEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          update: {
            args: Prisma.ShipmentEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          aggregate: {
            args: Prisma.ShipmentEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentEvent>
          }
          groupBy: {
            args: Prisma.ShipmentEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentEventCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentEventCountAggregateOutputType> | number
          }
        }
      }
      BalanceEvent: {
        payload: Prisma.$BalanceEventPayload<ExtArgs>
        fields: Prisma.BalanceEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceEventPayload>
          }
          findFirst: {
            args: Prisma.BalanceEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceEventPayload>
          }
          findMany: {
            args: Prisma.BalanceEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceEventPayload>[]
          }
          create: {
            args: Prisma.BalanceEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceEventPayload>
          }
          createMany: {
            args: Prisma.BalanceEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceEventPayload>[]
          }
          delete: {
            args: Prisma.BalanceEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceEventPayload>
          }
          update: {
            args: Prisma.BalanceEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceEventPayload>
          }
          deleteMany: {
            args: Prisma.BalanceEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalanceEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceEventPayload>[]
          }
          upsert: {
            args: Prisma.BalanceEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceEventPayload>
          }
          aggregate: {
            args: Prisma.BalanceEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalanceEvent>
          }
          groupBy: {
            args: Prisma.BalanceEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceEventCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    company?: CompanyOmit
    employee?: EmployeeOmit
    truck?: TruckOmit
    recipient?: RecipientOmit
    shipment?: ShipmentOmit
    shipmentEvent?: ShipmentEventOmit
    balanceEvent?: BalanceEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    employees: number
    trucks: number
    shipments: number
    recipients: number
    balanceEvents: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | CompanyCountOutputTypeCountEmployeesArgs
    trucks?: boolean | CompanyCountOutputTypeCountTrucksArgs
    shipments?: boolean | CompanyCountOutputTypeCountShipmentsArgs
    recipients?: boolean | CompanyCountOutputTypeCountRecipientsArgs
    balanceEvents?: boolean | CompanyCountOutputTypeCountBalanceEventsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountTrucksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TruckWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountRecipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipientWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountBalanceEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceEventWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    shipments: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | EmployeeCountOutputTypeCountShipmentsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }


  /**
   * Count Type TruckCountOutputType
   */

  export type TruckCountOutputType = {
    shipments: number
  }

  export type TruckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | TruckCountOutputTypeCountShipmentsArgs
  }

  // Custom InputTypes
  /**
   * TruckCountOutputType without action
   */
  export type TruckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TruckCountOutputType
     */
    select?: TruckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TruckCountOutputType without action
   */
  export type TruckCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }


  /**
   * Count Type RecipientCountOutputType
   */

  export type RecipientCountOutputType = {
    shipments: number
  }

  export type RecipientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | RecipientCountOutputTypeCountShipmentsArgs
  }

  // Custom InputTypes
  /**
   * RecipientCountOutputType without action
   */
  export type RecipientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipientCountOutputType
     */
    select?: RecipientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipientCountOutputType without action
   */
  export type RecipientCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }


  /**
   * Count Type ShipmentCountOutputType
   */

  export type ShipmentCountOutputType = {
    events: number
  }

  export type ShipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ShipmentCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCountOutputType
     */
    select?: ShipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    balance: Decimal | null
  }

  export type CompanySumAggregateOutputType = {
    balance: Decimal | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    tradeName: string | null
    legalName: string | null
    taxId: string | null
    balance: Decimal | null
    supportEmail: string | null
    mainPhone: string | null
    subscriptionPlan: $Enums.SubscriptionPlan | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    tradeName: string | null
    legalName: string | null
    taxId: string | null
    balance: Decimal | null
    supportEmail: string | null
    mainPhone: string | null
    subscriptionPlan: $Enums.SubscriptionPlan | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    tradeName: number
    legalName: number
    taxId: number
    balance: number
    supportEmail: number
    mainPhone: number
    subscriptionPlan: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    balance?: true
  }

  export type CompanySumAggregateInputType = {
    balance?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    tradeName?: true
    legalName?: true
    taxId?: true
    balance?: true
    supportEmail?: true
    mainPhone?: true
    subscriptionPlan?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    tradeName?: true
    legalName?: true
    taxId?: true
    balance?: true
    supportEmail?: true
    mainPhone?: true
    subscriptionPlan?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    tradeName?: true
    legalName?: true
    taxId?: true
    balance?: true
    supportEmail?: true
    mainPhone?: true
    subscriptionPlan?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    tradeName: string
    legalName: string
    taxId: string
    balance: Decimal
    supportEmail: string
    mainPhone: string
    subscriptionPlan: $Enums.SubscriptionPlan
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeName?: boolean
    legalName?: boolean
    taxId?: boolean
    balance?: boolean
    supportEmail?: boolean
    mainPhone?: boolean
    subscriptionPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    employees?: boolean | Company$employeesArgs<ExtArgs>
    trucks?: boolean | Company$trucksArgs<ExtArgs>
    shipments?: boolean | Company$shipmentsArgs<ExtArgs>
    recipients?: boolean | Company$recipientsArgs<ExtArgs>
    balanceEvents?: boolean | Company$balanceEventsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeName?: boolean
    legalName?: boolean
    taxId?: boolean
    balance?: boolean
    supportEmail?: boolean
    mainPhone?: boolean
    subscriptionPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeName?: boolean
    legalName?: boolean
    taxId?: boolean
    balance?: boolean
    supportEmail?: boolean
    mainPhone?: boolean
    subscriptionPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    tradeName?: boolean
    legalName?: boolean
    taxId?: boolean
    balance?: boolean
    supportEmail?: boolean
    mainPhone?: boolean
    subscriptionPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tradeName" | "legalName" | "taxId" | "balance" | "supportEmail" | "mainPhone" | "subscriptionPlan" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    employees?: boolean | Company$employeesArgs<ExtArgs>
    trucks?: boolean | Company$trucksArgs<ExtArgs>
    shipments?: boolean | Company$shipmentsArgs<ExtArgs>
    recipients?: boolean | Company$recipientsArgs<ExtArgs>
    balanceEvents?: boolean | Company$balanceEventsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      trucks: Prisma.$TruckPayload<ExtArgs>[]
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
      recipients: Prisma.$RecipientPayload<ExtArgs>[]
      balanceEvents: Prisma.$BalanceEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tradeName: string
      legalName: string
      taxId: string
      balance: Prisma.Decimal
      supportEmail: string
      mainPhone: string
      subscriptionPlan: $Enums.SubscriptionPlan
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employees<T extends Company$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Company$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trucks<T extends Company$trucksArgs<ExtArgs> = {}>(args?: Subset<T, Company$trucksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipments<T extends Company$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Company$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipients<T extends Company$recipientsArgs<ExtArgs> = {}>(args?: Subset<T, Company$recipientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    balanceEvents<T extends Company$balanceEventsArgs<ExtArgs> = {}>(args?: Subset<T, Company$balanceEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly tradeName: FieldRef<"Company", 'String'>
    readonly legalName: FieldRef<"Company", 'String'>
    readonly taxId: FieldRef<"Company", 'String'>
    readonly balance: FieldRef<"Company", 'Decimal'>
    readonly supportEmail: FieldRef<"Company", 'String'>
    readonly mainPhone: FieldRef<"Company", 'String'>
    readonly subscriptionPlan: FieldRef<"Company", 'SubscriptionPlan'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
    readonly userId: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.employees
   */
  export type Company$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Company.trucks
   */
  export type Company$trucksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    where?: TruckWhereInput
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    cursor?: TruckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Company.shipments
   */
  export type Company$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Company.recipients
   */
  export type Company$recipientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    where?: RecipientWhereInput
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    cursor?: RecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Company.balanceEvents
   */
  export type Company$balanceEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventInclude<ExtArgs> | null
    where?: BalanceEventWhereInput
    orderBy?: BalanceEventOrderByWithRelationInput | BalanceEventOrderByWithRelationInput[]
    cursor?: BalanceEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalanceEventScalarFieldEnum | BalanceEventScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    salary: Decimal | null
  }

  export type EmployeeSumAggregateOutputType = {
    salary: Decimal | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    name: string | null
    cnh: string | null
    cnhExpiration: Date | null
    cpf: string | null
    salary: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cnh: string | null
    cnhExpiration: Date | null
    cpf: string | null
    salary: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    cnh: number
    cnhExpiration: number
    cpf: number
    salary: number
    createdAt: number
    updatedAt: number
    companyId: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    salary?: true
  }

  export type EmployeeSumAggregateInputType = {
    salary?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    cnh?: true
    cnhExpiration?: true
    cpf?: true
    salary?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    cnh?: true
    cnhExpiration?: true
    cpf?: true
    salary?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    cnh?: true
    cnhExpiration?: true
    cpf?: true
    salary?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    name: string
    cnh: string
    cnhExpiration: Date
    cpf: string
    salary: Decimal
    createdAt: Date
    updatedAt: Date
    companyId: string
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnh?: boolean
    cnhExpiration?: boolean
    cpf?: boolean
    salary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    shipments?: boolean | Employee$shipmentsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnh?: boolean
    cnhExpiration?: boolean
    cpf?: boolean
    salary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnh?: boolean
    cnhExpiration?: boolean
    cpf?: boolean
    salary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    cnh?: boolean
    cnhExpiration?: boolean
    cpf?: boolean
    salary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cnh" | "cnhExpiration" | "cpf" | "salary" | "createdAt" | "updatedAt" | "companyId", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    shipments?: boolean | Employee$shipmentsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cnh: string
      cnhExpiration: Date
      cpf: string
      salary: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
      companyId: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shipments<T extends Employee$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly cnh: FieldRef<"Employee", 'String'>
    readonly cnhExpiration: FieldRef<"Employee", 'DateTime'>
    readonly cpf: FieldRef<"Employee", 'String'>
    readonly salary: FieldRef<"Employee", 'Decimal'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
    readonly companyId: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.shipments
   */
  export type Employee$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Truck
   */

  export type AggregateTruck = {
    _count: TruckCountAggregateOutputType | null
    _avg: TruckAvgAggregateOutputType | null
    _sum: TruckSumAggregateOutputType | null
    _min: TruckMinAggregateOutputType | null
    _max: TruckMaxAggregateOutputType | null
  }

  export type TruckAvgAggregateOutputType = {
    maxPayload: number | null
  }

  export type TruckSumAggregateOutputType = {
    maxPayload: number | null
  }

  export type TruckMinAggregateOutputType = {
    id: string | null
    licensePlate: string | null
    maxPayload: number | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type TruckMaxAggregateOutputType = {
    id: string | null
    licensePlate: string | null
    maxPayload: number | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type TruckCountAggregateOutputType = {
    id: number
    licensePlate: number
    maxPayload: number
    createdAt: number
    updatedAt: number
    companyId: number
    _all: number
  }


  export type TruckAvgAggregateInputType = {
    maxPayload?: true
  }

  export type TruckSumAggregateInputType = {
    maxPayload?: true
  }

  export type TruckMinAggregateInputType = {
    id?: true
    licensePlate?: true
    maxPayload?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type TruckMaxAggregateInputType = {
    id?: true
    licensePlate?: true
    maxPayload?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type TruckCountAggregateInputType = {
    id?: true
    licensePlate?: true
    maxPayload?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    _all?: true
  }

  export type TruckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Truck to aggregate.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trucks
    **/
    _count?: true | TruckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TruckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TruckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TruckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TruckMaxAggregateInputType
  }

  export type GetTruckAggregateType<T extends TruckAggregateArgs> = {
        [P in keyof T & keyof AggregateTruck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTruck[P]>
      : GetScalarType<T[P], AggregateTruck[P]>
  }




  export type TruckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TruckWhereInput
    orderBy?: TruckOrderByWithAggregationInput | TruckOrderByWithAggregationInput[]
    by: TruckScalarFieldEnum[] | TruckScalarFieldEnum
    having?: TruckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TruckCountAggregateInputType | true
    _avg?: TruckAvgAggregateInputType
    _sum?: TruckSumAggregateInputType
    _min?: TruckMinAggregateInputType
    _max?: TruckMaxAggregateInputType
  }

  export type TruckGroupByOutputType = {
    id: string
    licensePlate: string
    maxPayload: number
    createdAt: Date
    updatedAt: Date
    companyId: string
    _count: TruckCountAggregateOutputType | null
    _avg: TruckAvgAggregateOutputType | null
    _sum: TruckSumAggregateOutputType | null
    _min: TruckMinAggregateOutputType | null
    _max: TruckMaxAggregateOutputType | null
  }

  type GetTruckGroupByPayload<T extends TruckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TruckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TruckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TruckGroupByOutputType[P]>
            : GetScalarType<T[P], TruckGroupByOutputType[P]>
        }
      >
    >


  export type TruckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licensePlate?: boolean
    maxPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    shipments?: boolean | Truck$shipmentsArgs<ExtArgs>
    _count?: boolean | TruckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["truck"]>

  export type TruckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licensePlate?: boolean
    maxPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["truck"]>

  export type TruckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licensePlate?: boolean
    maxPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["truck"]>

  export type TruckSelectScalar = {
    id?: boolean
    licensePlate?: boolean
    maxPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
  }

  export type TruckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "licensePlate" | "maxPayload" | "createdAt" | "updatedAt" | "companyId", ExtArgs["result"]["truck"]>
  export type TruckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    shipments?: boolean | Truck$shipmentsArgs<ExtArgs>
    _count?: boolean | TruckCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TruckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type TruckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $TruckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Truck"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licensePlate: string
      maxPayload: number
      createdAt: Date
      updatedAt: Date
      companyId: string
    }, ExtArgs["result"]["truck"]>
    composites: {}
  }

  type TruckGetPayload<S extends boolean | null | undefined | TruckDefaultArgs> = $Result.GetResult<Prisma.$TruckPayload, S>

  type TruckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TruckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TruckCountAggregateInputType | true
    }

  export interface TruckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Truck'], meta: { name: 'Truck' } }
    /**
     * Find zero or one Truck that matches the filter.
     * @param {TruckFindUniqueArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TruckFindUniqueArgs>(args: SelectSubset<T, TruckFindUniqueArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Truck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TruckFindUniqueOrThrowArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TruckFindUniqueOrThrowArgs>(args: SelectSubset<T, TruckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Truck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckFindFirstArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TruckFindFirstArgs>(args?: SelectSubset<T, TruckFindFirstArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Truck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckFindFirstOrThrowArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TruckFindFirstOrThrowArgs>(args?: SelectSubset<T, TruckFindFirstOrThrowArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trucks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trucks
     * const trucks = await prisma.truck.findMany()
     * 
     * // Get first 10 Trucks
     * const trucks = await prisma.truck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const truckWithIdOnly = await prisma.truck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TruckFindManyArgs>(args?: SelectSubset<T, TruckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Truck.
     * @param {TruckCreateArgs} args - Arguments to create a Truck.
     * @example
     * // Create one Truck
     * const Truck = await prisma.truck.create({
     *   data: {
     *     // ... data to create a Truck
     *   }
     * })
     * 
     */
    create<T extends TruckCreateArgs>(args: SelectSubset<T, TruckCreateArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trucks.
     * @param {TruckCreateManyArgs} args - Arguments to create many Trucks.
     * @example
     * // Create many Trucks
     * const truck = await prisma.truck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TruckCreateManyArgs>(args?: SelectSubset<T, TruckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trucks and returns the data saved in the database.
     * @param {TruckCreateManyAndReturnArgs} args - Arguments to create many Trucks.
     * @example
     * // Create many Trucks
     * const truck = await prisma.truck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trucks and only return the `id`
     * const truckWithIdOnly = await prisma.truck.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TruckCreateManyAndReturnArgs>(args?: SelectSubset<T, TruckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Truck.
     * @param {TruckDeleteArgs} args - Arguments to delete one Truck.
     * @example
     * // Delete one Truck
     * const Truck = await prisma.truck.delete({
     *   where: {
     *     // ... filter to delete one Truck
     *   }
     * })
     * 
     */
    delete<T extends TruckDeleteArgs>(args: SelectSubset<T, TruckDeleteArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Truck.
     * @param {TruckUpdateArgs} args - Arguments to update one Truck.
     * @example
     * // Update one Truck
     * const truck = await prisma.truck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TruckUpdateArgs>(args: SelectSubset<T, TruckUpdateArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trucks.
     * @param {TruckDeleteManyArgs} args - Arguments to filter Trucks to delete.
     * @example
     * // Delete a few Trucks
     * const { count } = await prisma.truck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TruckDeleteManyArgs>(args?: SelectSubset<T, TruckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trucks
     * const truck = await prisma.truck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TruckUpdateManyArgs>(args: SelectSubset<T, TruckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trucks and returns the data updated in the database.
     * @param {TruckUpdateManyAndReturnArgs} args - Arguments to update many Trucks.
     * @example
     * // Update many Trucks
     * const truck = await prisma.truck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trucks and only return the `id`
     * const truckWithIdOnly = await prisma.truck.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TruckUpdateManyAndReturnArgs>(args: SelectSubset<T, TruckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Truck.
     * @param {TruckUpsertArgs} args - Arguments to update or create a Truck.
     * @example
     * // Update or create a Truck
     * const truck = await prisma.truck.upsert({
     *   create: {
     *     // ... data to create a Truck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Truck we want to update
     *   }
     * })
     */
    upsert<T extends TruckUpsertArgs>(args: SelectSubset<T, TruckUpsertArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckCountArgs} args - Arguments to filter Trucks to count.
     * @example
     * // Count the number of Trucks
     * const count = await prisma.truck.count({
     *   where: {
     *     // ... the filter for the Trucks we want to count
     *   }
     * })
    **/
    count<T extends TruckCountArgs>(
      args?: Subset<T, TruckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TruckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Truck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TruckAggregateArgs>(args: Subset<T, TruckAggregateArgs>): Prisma.PrismaPromise<GetTruckAggregateType<T>>

    /**
     * Group by Truck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TruckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TruckGroupByArgs['orderBy'] }
        : { orderBy?: TruckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TruckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTruckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Truck model
   */
  readonly fields: TruckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Truck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TruckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shipments<T extends Truck$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Truck$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Truck model
   */
  interface TruckFieldRefs {
    readonly id: FieldRef<"Truck", 'String'>
    readonly licensePlate: FieldRef<"Truck", 'String'>
    readonly maxPayload: FieldRef<"Truck", 'Float'>
    readonly createdAt: FieldRef<"Truck", 'DateTime'>
    readonly updatedAt: FieldRef<"Truck", 'DateTime'>
    readonly companyId: FieldRef<"Truck", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Truck findUnique
   */
  export type TruckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck findUniqueOrThrow
   */
  export type TruckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck findFirst
   */
  export type TruckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trucks.
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trucks.
     */
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Truck findFirstOrThrow
   */
  export type TruckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trucks.
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trucks.
     */
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Truck findMany
   */
  export type TruckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Trucks to fetch.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trucks.
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Truck create
   */
  export type TruckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * The data needed to create a Truck.
     */
    data: XOR<TruckCreateInput, TruckUncheckedCreateInput>
  }

  /**
   * Truck createMany
   */
  export type TruckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trucks.
     */
    data: TruckCreateManyInput | TruckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Truck createManyAndReturn
   */
  export type TruckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * The data used to create many Trucks.
     */
    data: TruckCreateManyInput | TruckCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Truck update
   */
  export type TruckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * The data needed to update a Truck.
     */
    data: XOR<TruckUpdateInput, TruckUncheckedUpdateInput>
    /**
     * Choose, which Truck to update.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck updateMany
   */
  export type TruckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trucks.
     */
    data: XOR<TruckUpdateManyMutationInput, TruckUncheckedUpdateManyInput>
    /**
     * Filter which Trucks to update
     */
    where?: TruckWhereInput
    /**
     * Limit how many Trucks to update.
     */
    limit?: number
  }

  /**
   * Truck updateManyAndReturn
   */
  export type TruckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * The data used to update Trucks.
     */
    data: XOR<TruckUpdateManyMutationInput, TruckUncheckedUpdateManyInput>
    /**
     * Filter which Trucks to update
     */
    where?: TruckWhereInput
    /**
     * Limit how many Trucks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Truck upsert
   */
  export type TruckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * The filter to search for the Truck to update in case it exists.
     */
    where: TruckWhereUniqueInput
    /**
     * In case the Truck found by the `where` argument doesn't exist, create a new Truck with this data.
     */
    create: XOR<TruckCreateInput, TruckUncheckedCreateInput>
    /**
     * In case the Truck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TruckUpdateInput, TruckUncheckedUpdateInput>
  }

  /**
   * Truck delete
   */
  export type TruckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter which Truck to delete.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck deleteMany
   */
  export type TruckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trucks to delete
     */
    where?: TruckWhereInput
    /**
     * Limit how many Trucks to delete.
     */
    limit?: number
  }

  /**
   * Truck.shipments
   */
  export type Truck$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Truck without action
   */
  export type TruckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
  }


  /**
   * Model Recipient
   */

  export type AggregateRecipient = {
    _count: RecipientCountAggregateOutputType | null
    _min: RecipientMinAggregateOutputType | null
    _max: RecipientMaxAggregateOutputType | null
  }

  export type RecipientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    fullAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type RecipientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    fullAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type RecipientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    fullAddress: number
    createdAt: number
    updatedAt: number
    companyId: number
    _all: number
  }


  export type RecipientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    fullAddress?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type RecipientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    fullAddress?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type RecipientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    fullAddress?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    _all?: true
  }

  export type RecipientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipient to aggregate.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipients
    **/
    _count?: true | RecipientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipientMaxAggregateInputType
  }

  export type GetRecipientAggregateType<T extends RecipientAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipient[P]>
      : GetScalarType<T[P], AggregateRecipient[P]>
  }




  export type RecipientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipientWhereInput
    orderBy?: RecipientOrderByWithAggregationInput | RecipientOrderByWithAggregationInput[]
    by: RecipientScalarFieldEnum[] | RecipientScalarFieldEnum
    having?: RecipientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipientCountAggregateInputType | true
    _min?: RecipientMinAggregateInputType
    _max?: RecipientMaxAggregateInputType
  }

  export type RecipientGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    fullAddress: string
    createdAt: Date
    updatedAt: Date
    companyId: string
    _count: RecipientCountAggregateOutputType | null
    _min: RecipientMinAggregateOutputType | null
    _max: RecipientMaxAggregateOutputType | null
  }

  type GetRecipientGroupByPayload<T extends RecipientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipientGroupByOutputType[P]>
            : GetScalarType<T[P], RecipientGroupByOutputType[P]>
        }
      >
    >


  export type RecipientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    fullAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    shipments?: boolean | Recipient$shipmentsArgs<ExtArgs>
    _count?: boolean | RecipientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipient"]>

  export type RecipientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    fullAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipient"]>

  export type RecipientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    fullAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipient"]>

  export type RecipientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    fullAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
  }

  export type RecipientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "fullAddress" | "createdAt" | "updatedAt" | "companyId", ExtArgs["result"]["recipient"]>
  export type RecipientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    shipments?: boolean | Recipient$shipmentsArgs<ExtArgs>
    _count?: boolean | RecipientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type RecipientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $RecipientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipient"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      fullAddress: string
      createdAt: Date
      updatedAt: Date
      companyId: string
    }, ExtArgs["result"]["recipient"]>
    composites: {}
  }

  type RecipientGetPayload<S extends boolean | null | undefined | RecipientDefaultArgs> = $Result.GetResult<Prisma.$RecipientPayload, S>

  type RecipientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipientCountAggregateInputType | true
    }

  export interface RecipientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipient'], meta: { name: 'Recipient' } }
    /**
     * Find zero or one Recipient that matches the filter.
     * @param {RecipientFindUniqueArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipientFindUniqueArgs>(args: SelectSubset<T, RecipientFindUniqueArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipientFindUniqueOrThrowArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipientFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindFirstArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipientFindFirstArgs>(args?: SelectSubset<T, RecipientFindFirstArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindFirstOrThrowArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipientFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipientFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipients
     * const recipients = await prisma.recipient.findMany()
     * 
     * // Get first 10 Recipients
     * const recipients = await prisma.recipient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipientWithIdOnly = await prisma.recipient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipientFindManyArgs>(args?: SelectSubset<T, RecipientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipient.
     * @param {RecipientCreateArgs} args - Arguments to create a Recipient.
     * @example
     * // Create one Recipient
     * const Recipient = await prisma.recipient.create({
     *   data: {
     *     // ... data to create a Recipient
     *   }
     * })
     * 
     */
    create<T extends RecipientCreateArgs>(args: SelectSubset<T, RecipientCreateArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipients.
     * @param {RecipientCreateManyArgs} args - Arguments to create many Recipients.
     * @example
     * // Create many Recipients
     * const recipient = await prisma.recipient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipientCreateManyArgs>(args?: SelectSubset<T, RecipientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipients and returns the data saved in the database.
     * @param {RecipientCreateManyAndReturnArgs} args - Arguments to create many Recipients.
     * @example
     * // Create many Recipients
     * const recipient = await prisma.recipient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipients and only return the `id`
     * const recipientWithIdOnly = await prisma.recipient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipientCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipient.
     * @param {RecipientDeleteArgs} args - Arguments to delete one Recipient.
     * @example
     * // Delete one Recipient
     * const Recipient = await prisma.recipient.delete({
     *   where: {
     *     // ... filter to delete one Recipient
     *   }
     * })
     * 
     */
    delete<T extends RecipientDeleteArgs>(args: SelectSubset<T, RecipientDeleteArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipient.
     * @param {RecipientUpdateArgs} args - Arguments to update one Recipient.
     * @example
     * // Update one Recipient
     * const recipient = await prisma.recipient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipientUpdateArgs>(args: SelectSubset<T, RecipientUpdateArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipients.
     * @param {RecipientDeleteManyArgs} args - Arguments to filter Recipients to delete.
     * @example
     * // Delete a few Recipients
     * const { count } = await prisma.recipient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipientDeleteManyArgs>(args?: SelectSubset<T, RecipientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipients
     * const recipient = await prisma.recipient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipientUpdateManyArgs>(args: SelectSubset<T, RecipientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipients and returns the data updated in the database.
     * @param {RecipientUpdateManyAndReturnArgs} args - Arguments to update many Recipients.
     * @example
     * // Update many Recipients
     * const recipient = await prisma.recipient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipients and only return the `id`
     * const recipientWithIdOnly = await prisma.recipient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipientUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipient.
     * @param {RecipientUpsertArgs} args - Arguments to update or create a Recipient.
     * @example
     * // Update or create a Recipient
     * const recipient = await prisma.recipient.upsert({
     *   create: {
     *     // ... data to create a Recipient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipient we want to update
     *   }
     * })
     */
    upsert<T extends RecipientUpsertArgs>(args: SelectSubset<T, RecipientUpsertArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientCountArgs} args - Arguments to filter Recipients to count.
     * @example
     * // Count the number of Recipients
     * const count = await prisma.recipient.count({
     *   where: {
     *     // ... the filter for the Recipients we want to count
     *   }
     * })
    **/
    count<T extends RecipientCountArgs>(
      args?: Subset<T, RecipientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipientAggregateArgs>(args: Subset<T, RecipientAggregateArgs>): Prisma.PrismaPromise<GetRecipientAggregateType<T>>

    /**
     * Group by Recipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipientGroupByArgs['orderBy'] }
        : { orderBy?: RecipientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipient model
   */
  readonly fields: RecipientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shipments<T extends Recipient$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Recipient$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipient model
   */
  interface RecipientFieldRefs {
    readonly id: FieldRef<"Recipient", 'String'>
    readonly name: FieldRef<"Recipient", 'String'>
    readonly email: FieldRef<"Recipient", 'String'>
    readonly phone: FieldRef<"Recipient", 'String'>
    readonly fullAddress: FieldRef<"Recipient", 'String'>
    readonly createdAt: FieldRef<"Recipient", 'DateTime'>
    readonly updatedAt: FieldRef<"Recipient", 'DateTime'>
    readonly companyId: FieldRef<"Recipient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipient findUnique
   */
  export type RecipientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient findUniqueOrThrow
   */
  export type RecipientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient findFirst
   */
  export type RecipientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipients.
     */
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Recipient findFirstOrThrow
   */
  export type RecipientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipients.
     */
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Recipient findMany
   */
  export type RecipientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipients to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Recipient create
   */
  export type RecipientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipient.
     */
    data: XOR<RecipientCreateInput, RecipientUncheckedCreateInput>
  }

  /**
   * Recipient createMany
   */
  export type RecipientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipients.
     */
    data: RecipientCreateManyInput | RecipientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipient createManyAndReturn
   */
  export type RecipientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * The data used to create many Recipients.
     */
    data: RecipientCreateManyInput | RecipientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipient update
   */
  export type RecipientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipient.
     */
    data: XOR<RecipientUpdateInput, RecipientUncheckedUpdateInput>
    /**
     * Choose, which Recipient to update.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient updateMany
   */
  export type RecipientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipients.
     */
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyInput>
    /**
     * Filter which Recipients to update
     */
    where?: RecipientWhereInput
    /**
     * Limit how many Recipients to update.
     */
    limit?: number
  }

  /**
   * Recipient updateManyAndReturn
   */
  export type RecipientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * The data used to update Recipients.
     */
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyInput>
    /**
     * Filter which Recipients to update
     */
    where?: RecipientWhereInput
    /**
     * Limit how many Recipients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipient upsert
   */
  export type RecipientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipient to update in case it exists.
     */
    where: RecipientWhereUniqueInput
    /**
     * In case the Recipient found by the `where` argument doesn't exist, create a new Recipient with this data.
     */
    create: XOR<RecipientCreateInput, RecipientUncheckedCreateInput>
    /**
     * In case the Recipient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipientUpdateInput, RecipientUncheckedUpdateInput>
  }

  /**
   * Recipient delete
   */
  export type RecipientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter which Recipient to delete.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient deleteMany
   */
  export type RecipientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipients to delete
     */
    where?: RecipientWhereInput
    /**
     * Limit how many Recipients to delete.
     */
    limit?: number
  }

  /**
   * Recipient.shipments
   */
  export type Recipient$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Recipient without action
   */
  export type RecipientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipient
     */
    omit?: RecipientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentAvgAggregateOutputType = {
    startLat: number | null
    startLng: number | null
    deliveryLat: number | null
    deliveryLng: number | null
    currentLat: number | null
    currentLng: number | null
    weight: number | null
    gasSpent: Decimal | null
    estimatedProfit: Decimal | null
  }

  export type ShipmentSumAggregateOutputType = {
    startLat: number | null
    startLng: number | null
    deliveryLat: number | null
    deliveryLng: number | null
    currentLat: number | null
    currentLng: number | null
    weight: number | null
    gasSpent: Decimal | null
    estimatedProfit: Decimal | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: string | null
    status: $Enums.ShipmentStatus | null
    startLat: number | null
    startLng: number | null
    startAddress: string | null
    deliveryLat: number | null
    deliveryLng: number | null
    deliveryAddress: string | null
    currentLat: number | null
    currentLng: number | null
    cargoType: $Enums.CargoType | null
    weight: number | null
    gasSpent: Decimal | null
    estimatedProfit: Decimal | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
    employeeId: string | null
    truckId: string | null
    recipientId: string | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: string | null
    status: $Enums.ShipmentStatus | null
    startLat: number | null
    startLng: number | null
    startAddress: string | null
    deliveryLat: number | null
    deliveryLng: number | null
    deliveryAddress: string | null
    currentLat: number | null
    currentLng: number | null
    cargoType: $Enums.CargoType | null
    weight: number | null
    gasSpent: Decimal | null
    estimatedProfit: Decimal | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
    employeeId: string | null
    truckId: string | null
    recipientId: string | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    status: number
    startLat: number
    startLng: number
    startAddress: number
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: number
    currentLat: number
    currentLng: number
    cargoType: number
    weight: number
    gasSpent: number
    estimatedProfit: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    companyId: number
    employeeId: number
    truckId: number
    recipientId: number
    _all: number
  }


  export type ShipmentAvgAggregateInputType = {
    startLat?: true
    startLng?: true
    deliveryLat?: true
    deliveryLng?: true
    currentLat?: true
    currentLng?: true
    weight?: true
    gasSpent?: true
    estimatedProfit?: true
  }

  export type ShipmentSumAggregateInputType = {
    startLat?: true
    startLng?: true
    deliveryLat?: true
    deliveryLng?: true
    currentLat?: true
    currentLng?: true
    weight?: true
    gasSpent?: true
    estimatedProfit?: true
  }

  export type ShipmentMinAggregateInputType = {
    id?: true
    status?: true
    startLat?: true
    startLng?: true
    startAddress?: true
    deliveryLat?: true
    deliveryLng?: true
    deliveryAddress?: true
    currentLat?: true
    currentLng?: true
    cargoType?: true
    weight?: true
    gasSpent?: true
    estimatedProfit?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    employeeId?: true
    truckId?: true
    recipientId?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    status?: true
    startLat?: true
    startLng?: true
    startAddress?: true
    deliveryLat?: true
    deliveryLng?: true
    deliveryAddress?: true
    currentLat?: true
    currentLng?: true
    cargoType?: true
    weight?: true
    gasSpent?: true
    estimatedProfit?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    employeeId?: true
    truckId?: true
    recipientId?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    status?: true
    startLat?: true
    startLng?: true
    startAddress?: true
    deliveryLat?: true
    deliveryLng?: true
    deliveryAddress?: true
    currentLat?: true
    currentLng?: true
    cargoType?: true
    weight?: true
    gasSpent?: true
    estimatedProfit?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    employeeId?: true
    truckId?: true
    recipientId?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _avg?: ShipmentAvgAggregateInputType
    _sum?: ShipmentSumAggregateInputType
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: string
    status: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat: number | null
    currentLng: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent: Decimal
    estimatedProfit: Decimal
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    companyId: string
    employeeId: string
    truckId: string
    recipientId: string
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    startLat?: boolean
    startLng?: boolean
    startAddress?: boolean
    deliveryLat?: boolean
    deliveryLng?: boolean
    deliveryAddress?: boolean
    currentLat?: boolean
    currentLng?: boolean
    cargoType?: boolean
    weight?: boolean
    gasSpent?: boolean
    estimatedProfit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    employeeId?: boolean
    truckId?: boolean
    recipientId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    truck?: boolean | TruckDefaultArgs<ExtArgs>
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
    events?: boolean | Shipment$eventsArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    startLat?: boolean
    startLng?: boolean
    startAddress?: boolean
    deliveryLat?: boolean
    deliveryLng?: boolean
    deliveryAddress?: boolean
    currentLat?: boolean
    currentLng?: boolean
    cargoType?: boolean
    weight?: boolean
    gasSpent?: boolean
    estimatedProfit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    employeeId?: boolean
    truckId?: boolean
    recipientId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    truck?: boolean | TruckDefaultArgs<ExtArgs>
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    startLat?: boolean
    startLng?: boolean
    startAddress?: boolean
    deliveryLat?: boolean
    deliveryLng?: boolean
    deliveryAddress?: boolean
    currentLat?: boolean
    currentLng?: boolean
    cargoType?: boolean
    weight?: boolean
    gasSpent?: boolean
    estimatedProfit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    employeeId?: boolean
    truckId?: boolean
    recipientId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    truck?: boolean | TruckDefaultArgs<ExtArgs>
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectScalar = {
    id?: boolean
    status?: boolean
    startLat?: boolean
    startLng?: boolean
    startAddress?: boolean
    deliveryLat?: boolean
    deliveryLng?: boolean
    deliveryAddress?: boolean
    currentLat?: boolean
    currentLng?: boolean
    cargoType?: boolean
    weight?: boolean
    gasSpent?: boolean
    estimatedProfit?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    employeeId?: boolean
    truckId?: boolean
    recipientId?: boolean
  }

  export type ShipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "startLat" | "startLng" | "startAddress" | "deliveryLat" | "deliveryLng" | "deliveryAddress" | "currentLat" | "currentLng" | "cargoType" | "weight" | "gasSpent" | "estimatedProfit" | "startDate" | "endDate" | "createdAt" | "updatedAt" | "companyId" | "employeeId" | "truckId" | "recipientId", ExtArgs["result"]["shipment"]>
  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    truck?: boolean | TruckDefaultArgs<ExtArgs>
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
    events?: boolean | Shipment$eventsArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    truck?: boolean | TruckDefaultArgs<ExtArgs>
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    truck?: boolean | TruckDefaultArgs<ExtArgs>
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
      truck: Prisma.$TruckPayload<ExtArgs>
      recipient: Prisma.$RecipientPayload<ExtArgs>
      events: Prisma.$ShipmentEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.ShipmentStatus
      startLat: number
      startLng: number
      startAddress: string
      deliveryLat: number
      deliveryLng: number
      deliveryAddress: string
      currentLat: number | null
      currentLng: number | null
      cargoType: $Enums.CargoType
      weight: number
      gasSpent: Prisma.Decimal
      estimatedProfit: Prisma.Decimal
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
      companyId: string
      employeeId: string
      truckId: string
      recipientId: string
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {ShipmentCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments and returns the data updated in the database.
     * @param {ShipmentUpdateManyAndReturnArgs} args - Arguments to update many Shipments.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    truck<T extends TruckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TruckDefaultArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends RecipientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipientDefaultArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends Shipment$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipment model
   */
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'String'>
    readonly status: FieldRef<"Shipment", 'ShipmentStatus'>
    readonly startLat: FieldRef<"Shipment", 'Float'>
    readonly startLng: FieldRef<"Shipment", 'Float'>
    readonly startAddress: FieldRef<"Shipment", 'String'>
    readonly deliveryLat: FieldRef<"Shipment", 'Float'>
    readonly deliveryLng: FieldRef<"Shipment", 'Float'>
    readonly deliveryAddress: FieldRef<"Shipment", 'String'>
    readonly currentLat: FieldRef<"Shipment", 'Float'>
    readonly currentLng: FieldRef<"Shipment", 'Float'>
    readonly cargoType: FieldRef<"Shipment", 'CargoType'>
    readonly weight: FieldRef<"Shipment", 'Float'>
    readonly gasSpent: FieldRef<"Shipment", 'Decimal'>
    readonly estimatedProfit: FieldRef<"Shipment", 'Decimal'>
    readonly startDate: FieldRef<"Shipment", 'DateTime'>
    readonly endDate: FieldRef<"Shipment", 'DateTime'>
    readonly createdAt: FieldRef<"Shipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Shipment", 'DateTime'>
    readonly companyId: FieldRef<"Shipment", 'String'>
    readonly employeeId: FieldRef<"Shipment", 'String'>
    readonly truckId: FieldRef<"Shipment", 'String'>
    readonly recipientId: FieldRef<"Shipment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipment createManyAndReturn
   */
  export type ShipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment updateManyAndReturn
   */
  export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to delete.
     */
    limit?: number
  }

  /**
   * Shipment.events
   */
  export type Shipment$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    where?: ShipmentEventWhereInput
    orderBy?: ShipmentEventOrderByWithRelationInput | ShipmentEventOrderByWithRelationInput[]
    cursor?: ShipmentEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentEventScalarFieldEnum | ShipmentEventScalarFieldEnum[]
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentEvent
   */

  export type AggregateShipmentEvent = {
    _count: ShipmentEventCountAggregateOutputType | null
    _avg: ShipmentEventAvgAggregateOutputType | null
    _sum: ShipmentEventSumAggregateOutputType | null
    _min: ShipmentEventMinAggregateOutputType | null
    _max: ShipmentEventMaxAggregateOutputType | null
  }

  export type ShipmentEventAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ShipmentEventSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ShipmentEventMinAggregateOutputType = {
    id: string | null
    latitude: number | null
    longitude: number | null
    description: string | null
    recordedAt: Date | null
    shipmentId: string | null
  }

  export type ShipmentEventMaxAggregateOutputType = {
    id: string | null
    latitude: number | null
    longitude: number | null
    description: string | null
    recordedAt: Date | null
    shipmentId: string | null
  }

  export type ShipmentEventCountAggregateOutputType = {
    id: number
    latitude: number
    longitude: number
    description: number
    recordedAt: number
    shipmentId: number
    _all: number
  }


  export type ShipmentEventAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ShipmentEventSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ShipmentEventMinAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    description?: true
    recordedAt?: true
    shipmentId?: true
  }

  export type ShipmentEventMaxAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    description?: true
    recordedAt?: true
    shipmentId?: true
  }

  export type ShipmentEventCountAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    description?: true
    recordedAt?: true
    shipmentId?: true
    _all?: true
  }

  export type ShipmentEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentEvent to aggregate.
     */
    where?: ShipmentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentEvents to fetch.
     */
    orderBy?: ShipmentEventOrderByWithRelationInput | ShipmentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentEvents
    **/
    _count?: true | ShipmentEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentEventMaxAggregateInputType
  }

  export type GetShipmentEventAggregateType<T extends ShipmentEventAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentEvent[P]>
      : GetScalarType<T[P], AggregateShipmentEvent[P]>
  }




  export type ShipmentEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentEventWhereInput
    orderBy?: ShipmentEventOrderByWithAggregationInput | ShipmentEventOrderByWithAggregationInput[]
    by: ShipmentEventScalarFieldEnum[] | ShipmentEventScalarFieldEnum
    having?: ShipmentEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentEventCountAggregateInputType | true
    _avg?: ShipmentEventAvgAggregateInputType
    _sum?: ShipmentEventSumAggregateInputType
    _min?: ShipmentEventMinAggregateInputType
    _max?: ShipmentEventMaxAggregateInputType
  }

  export type ShipmentEventGroupByOutputType = {
    id: string
    latitude: number
    longitude: number
    description: string
    recordedAt: Date
    shipmentId: string
    _count: ShipmentEventCountAggregateOutputType | null
    _avg: ShipmentEventAvgAggregateOutputType | null
    _sum: ShipmentEventSumAggregateOutputType | null
    _min: ShipmentEventMinAggregateOutputType | null
    _max: ShipmentEventMaxAggregateOutputType | null
  }

  type GetShipmentEventGroupByPayload<T extends ShipmentEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentEventGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentEventGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    recordedAt?: boolean
    shipmentId?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentEvent"]>

  export type ShipmentEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    recordedAt?: boolean
    shipmentId?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentEvent"]>

  export type ShipmentEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    recordedAt?: boolean
    shipmentId?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentEvent"]>

  export type ShipmentEventSelectScalar = {
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    recordedAt?: boolean
    shipmentId?: boolean
  }

  export type ShipmentEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "latitude" | "longitude" | "description" | "recordedAt" | "shipmentId", ExtArgs["result"]["shipmentEvent"]>
  export type ShipmentEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type ShipmentEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type ShipmentEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }

  export type $ShipmentEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentEvent"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      latitude: number
      longitude: number
      description: string
      recordedAt: Date
      shipmentId: string
    }, ExtArgs["result"]["shipmentEvent"]>
    composites: {}
  }

  type ShipmentEventGetPayload<S extends boolean | null | undefined | ShipmentEventDefaultArgs> = $Result.GetResult<Prisma.$ShipmentEventPayload, S>

  type ShipmentEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentEventCountAggregateInputType | true
    }

  export interface ShipmentEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentEvent'], meta: { name: 'ShipmentEvent' } }
    /**
     * Find zero or one ShipmentEvent that matches the filter.
     * @param {ShipmentEventFindUniqueArgs} args - Arguments to find a ShipmentEvent
     * @example
     * // Get one ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentEventFindUniqueArgs>(args: SelectSubset<T, ShipmentEventFindUniqueArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentEventFindUniqueOrThrowArgs} args - Arguments to find a ShipmentEvent
     * @example
     * // Get one ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventFindFirstArgs} args - Arguments to find a ShipmentEvent
     * @example
     * // Get one ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentEventFindFirstArgs>(args?: SelectSubset<T, ShipmentEventFindFirstArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventFindFirstOrThrowArgs} args - Arguments to find a ShipmentEvent
     * @example
     * // Get one ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentEvents
     * const shipmentEvents = await prisma.shipmentEvent.findMany()
     * 
     * // Get first 10 ShipmentEvents
     * const shipmentEvents = await prisma.shipmentEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentEventWithIdOnly = await prisma.shipmentEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentEventFindManyArgs>(args?: SelectSubset<T, ShipmentEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentEvent.
     * @param {ShipmentEventCreateArgs} args - Arguments to create a ShipmentEvent.
     * @example
     * // Create one ShipmentEvent
     * const ShipmentEvent = await prisma.shipmentEvent.create({
     *   data: {
     *     // ... data to create a ShipmentEvent
     *   }
     * })
     * 
     */
    create<T extends ShipmentEventCreateArgs>(args: SelectSubset<T, ShipmentEventCreateArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentEvents.
     * @param {ShipmentEventCreateManyArgs} args - Arguments to create many ShipmentEvents.
     * @example
     * // Create many ShipmentEvents
     * const shipmentEvent = await prisma.shipmentEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentEventCreateManyArgs>(args?: SelectSubset<T, ShipmentEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShipmentEvents and returns the data saved in the database.
     * @param {ShipmentEventCreateManyAndReturnArgs} args - Arguments to create many ShipmentEvents.
     * @example
     * // Create many ShipmentEvents
     * const shipmentEvent = await prisma.shipmentEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShipmentEvents and only return the `id`
     * const shipmentEventWithIdOnly = await prisma.shipmentEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShipmentEvent.
     * @param {ShipmentEventDeleteArgs} args - Arguments to delete one ShipmentEvent.
     * @example
     * // Delete one ShipmentEvent
     * const ShipmentEvent = await prisma.shipmentEvent.delete({
     *   where: {
     *     // ... filter to delete one ShipmentEvent
     *   }
     * })
     * 
     */
    delete<T extends ShipmentEventDeleteArgs>(args: SelectSubset<T, ShipmentEventDeleteArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentEvent.
     * @param {ShipmentEventUpdateArgs} args - Arguments to update one ShipmentEvent.
     * @example
     * // Update one ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentEventUpdateArgs>(args: SelectSubset<T, ShipmentEventUpdateArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentEvents.
     * @param {ShipmentEventDeleteManyArgs} args - Arguments to filter ShipmentEvents to delete.
     * @example
     * // Delete a few ShipmentEvents
     * const { count } = await prisma.shipmentEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentEventDeleteManyArgs>(args?: SelectSubset<T, ShipmentEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentEvents
     * const shipmentEvent = await prisma.shipmentEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentEventUpdateManyArgs>(args: SelectSubset<T, ShipmentEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentEvents and returns the data updated in the database.
     * @param {ShipmentEventUpdateManyAndReturnArgs} args - Arguments to update many ShipmentEvents.
     * @example
     * // Update many ShipmentEvents
     * const shipmentEvent = await prisma.shipmentEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShipmentEvents and only return the `id`
     * const shipmentEventWithIdOnly = await prisma.shipmentEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShipmentEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShipmentEvent.
     * @param {ShipmentEventUpsertArgs} args - Arguments to update or create a ShipmentEvent.
     * @example
     * // Update or create a ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.upsert({
     *   create: {
     *     // ... data to create a ShipmentEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentEvent we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentEventUpsertArgs>(args: SelectSubset<T, ShipmentEventUpsertArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventCountArgs} args - Arguments to filter ShipmentEvents to count.
     * @example
     * // Count the number of ShipmentEvents
     * const count = await prisma.shipmentEvent.count({
     *   where: {
     *     // ... the filter for the ShipmentEvents we want to count
     *   }
     * })
    **/
    count<T extends ShipmentEventCountArgs>(
      args?: Subset<T, ShipmentEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentEventAggregateArgs>(args: Subset<T, ShipmentEventAggregateArgs>): Prisma.PrismaPromise<GetShipmentEventAggregateType<T>>

    /**
     * Group by ShipmentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentEventGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentEvent model
   */
  readonly fields: ShipmentEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShipmentEvent model
   */
  interface ShipmentEventFieldRefs {
    readonly id: FieldRef<"ShipmentEvent", 'String'>
    readonly latitude: FieldRef<"ShipmentEvent", 'Float'>
    readonly longitude: FieldRef<"ShipmentEvent", 'Float'>
    readonly description: FieldRef<"ShipmentEvent", 'String'>
    readonly recordedAt: FieldRef<"ShipmentEvent", 'DateTime'>
    readonly shipmentId: FieldRef<"ShipmentEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentEvent findUnique
   */
  export type ShipmentEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentEvent to fetch.
     */
    where: ShipmentEventWhereUniqueInput
  }

  /**
   * ShipmentEvent findUniqueOrThrow
   */
  export type ShipmentEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentEvent to fetch.
     */
    where: ShipmentEventWhereUniqueInput
  }

  /**
   * ShipmentEvent findFirst
   */
  export type ShipmentEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentEvent to fetch.
     */
    where?: ShipmentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentEvents to fetch.
     */
    orderBy?: ShipmentEventOrderByWithRelationInput | ShipmentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentEvents.
     */
    cursor?: ShipmentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentEvents.
     */
    distinct?: ShipmentEventScalarFieldEnum | ShipmentEventScalarFieldEnum[]
  }

  /**
   * ShipmentEvent findFirstOrThrow
   */
  export type ShipmentEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentEvent to fetch.
     */
    where?: ShipmentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentEvents to fetch.
     */
    orderBy?: ShipmentEventOrderByWithRelationInput | ShipmentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentEvents.
     */
    cursor?: ShipmentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentEvents.
     */
    distinct?: ShipmentEventScalarFieldEnum | ShipmentEventScalarFieldEnum[]
  }

  /**
   * ShipmentEvent findMany
   */
  export type ShipmentEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentEvents to fetch.
     */
    where?: ShipmentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentEvents to fetch.
     */
    orderBy?: ShipmentEventOrderByWithRelationInput | ShipmentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentEvents.
     */
    cursor?: ShipmentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentEvents.
     */
    skip?: number
    distinct?: ShipmentEventScalarFieldEnum | ShipmentEventScalarFieldEnum[]
  }

  /**
   * ShipmentEvent create
   */
  export type ShipmentEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentEvent.
     */
    data: XOR<ShipmentEventCreateInput, ShipmentEventUncheckedCreateInput>
  }

  /**
   * ShipmentEvent createMany
   */
  export type ShipmentEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentEvents.
     */
    data: ShipmentEventCreateManyInput | ShipmentEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentEvent createManyAndReturn
   */
  export type ShipmentEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * The data used to create many ShipmentEvents.
     */
    data: ShipmentEventCreateManyInput | ShipmentEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShipmentEvent update
   */
  export type ShipmentEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentEvent.
     */
    data: XOR<ShipmentEventUpdateInput, ShipmentEventUncheckedUpdateInput>
    /**
     * Choose, which ShipmentEvent to update.
     */
    where: ShipmentEventWhereUniqueInput
  }

  /**
   * ShipmentEvent updateMany
   */
  export type ShipmentEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentEvents.
     */
    data: XOR<ShipmentEventUpdateManyMutationInput, ShipmentEventUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentEvents to update
     */
    where?: ShipmentEventWhereInput
    /**
     * Limit how many ShipmentEvents to update.
     */
    limit?: number
  }

  /**
   * ShipmentEvent updateManyAndReturn
   */
  export type ShipmentEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * The data used to update ShipmentEvents.
     */
    data: XOR<ShipmentEventUpdateManyMutationInput, ShipmentEventUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentEvents to update
     */
    where?: ShipmentEventWhereInput
    /**
     * Limit how many ShipmentEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShipmentEvent upsert
   */
  export type ShipmentEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentEvent to update in case it exists.
     */
    where: ShipmentEventWhereUniqueInput
    /**
     * In case the ShipmentEvent found by the `where` argument doesn't exist, create a new ShipmentEvent with this data.
     */
    create: XOR<ShipmentEventCreateInput, ShipmentEventUncheckedCreateInput>
    /**
     * In case the ShipmentEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentEventUpdateInput, ShipmentEventUncheckedUpdateInput>
  }

  /**
   * ShipmentEvent delete
   */
  export type ShipmentEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter which ShipmentEvent to delete.
     */
    where: ShipmentEventWhereUniqueInput
  }

  /**
   * ShipmentEvent deleteMany
   */
  export type ShipmentEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentEvents to delete
     */
    where?: ShipmentEventWhereInput
    /**
     * Limit how many ShipmentEvents to delete.
     */
    limit?: number
  }

  /**
   * ShipmentEvent without action
   */
  export type ShipmentEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
  }


  /**
   * Model BalanceEvent
   */

  export type AggregateBalanceEvent = {
    _count: BalanceEventCountAggregateOutputType | null
    _avg: BalanceEventAvgAggregateOutputType | null
    _sum: BalanceEventSumAggregateOutputType | null
    _min: BalanceEventMinAggregateOutputType | null
    _max: BalanceEventMaxAggregateOutputType | null
  }

  export type BalanceEventAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type BalanceEventSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type BalanceEventMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    description: string | null
    type: $Enums.BalanceEventType | null
    occurredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type BalanceEventMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    description: string | null
    type: $Enums.BalanceEventType | null
    occurredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    companyId: string | null
  }

  export type BalanceEventCountAggregateOutputType = {
    id: number
    amount: number
    description: number
    type: number
    occurredAt: number
    createdAt: number
    updatedAt: number
    companyId: number
    _all: number
  }


  export type BalanceEventAvgAggregateInputType = {
    amount?: true
  }

  export type BalanceEventSumAggregateInputType = {
    amount?: true
  }

  export type BalanceEventMinAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    type?: true
    occurredAt?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type BalanceEventMaxAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    type?: true
    occurredAt?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
  }

  export type BalanceEventCountAggregateInputType = {
    id?: true
    amount?: true
    description?: true
    type?: true
    occurredAt?: true
    createdAt?: true
    updatedAt?: true
    companyId?: true
    _all?: true
  }

  export type BalanceEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BalanceEvent to aggregate.
     */
    where?: BalanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceEvents to fetch.
     */
    orderBy?: BalanceEventOrderByWithRelationInput | BalanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BalanceEvents
    **/
    _count?: true | BalanceEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceEventMaxAggregateInputType
  }

  export type GetBalanceEventAggregateType<T extends BalanceEventAggregateArgs> = {
        [P in keyof T & keyof AggregateBalanceEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalanceEvent[P]>
      : GetScalarType<T[P], AggregateBalanceEvent[P]>
  }




  export type BalanceEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceEventWhereInput
    orderBy?: BalanceEventOrderByWithAggregationInput | BalanceEventOrderByWithAggregationInput[]
    by: BalanceEventScalarFieldEnum[] | BalanceEventScalarFieldEnum
    having?: BalanceEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceEventCountAggregateInputType | true
    _avg?: BalanceEventAvgAggregateInputType
    _sum?: BalanceEventSumAggregateInputType
    _min?: BalanceEventMinAggregateInputType
    _max?: BalanceEventMaxAggregateInputType
  }

  export type BalanceEventGroupByOutputType = {
    id: string
    amount: Decimal
    description: string
    type: $Enums.BalanceEventType
    occurredAt: Date
    createdAt: Date
    updatedAt: Date
    companyId: string
    _count: BalanceEventCountAggregateOutputType | null
    _avg: BalanceEventAvgAggregateOutputType | null
    _sum: BalanceEventSumAggregateOutputType | null
    _min: BalanceEventMinAggregateOutputType | null
    _max: BalanceEventMaxAggregateOutputType | null
  }

  type GetBalanceEventGroupByPayload<T extends BalanceEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceEventGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceEventGroupByOutputType[P]>
        }
      >
    >


  export type BalanceEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    type?: boolean
    occurredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balanceEvent"]>

  export type BalanceEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    type?: boolean
    occurredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balanceEvent"]>

  export type BalanceEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    description?: boolean
    type?: boolean
    occurredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balanceEvent"]>

  export type BalanceEventSelectScalar = {
    id?: boolean
    amount?: boolean
    description?: boolean
    type?: boolean
    occurredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companyId?: boolean
  }

  export type BalanceEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "description" | "type" | "occurredAt" | "createdAt" | "updatedAt" | "companyId", ExtArgs["result"]["balanceEvent"]>
  export type BalanceEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type BalanceEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type BalanceEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $BalanceEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BalanceEvent"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      description: string
      type: $Enums.BalanceEventType
      occurredAt: Date
      createdAt: Date
      updatedAt: Date
      companyId: string
    }, ExtArgs["result"]["balanceEvent"]>
    composites: {}
  }

  type BalanceEventGetPayload<S extends boolean | null | undefined | BalanceEventDefaultArgs> = $Result.GetResult<Prisma.$BalanceEventPayload, S>

  type BalanceEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalanceEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceEventCountAggregateInputType | true
    }

  export interface BalanceEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BalanceEvent'], meta: { name: 'BalanceEvent' } }
    /**
     * Find zero or one BalanceEvent that matches the filter.
     * @param {BalanceEventFindUniqueArgs} args - Arguments to find a BalanceEvent
     * @example
     * // Get one BalanceEvent
     * const balanceEvent = await prisma.balanceEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceEventFindUniqueArgs>(args: SelectSubset<T, BalanceEventFindUniqueArgs<ExtArgs>>): Prisma__BalanceEventClient<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BalanceEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalanceEventFindUniqueOrThrowArgs} args - Arguments to find a BalanceEvent
     * @example
     * // Get one BalanceEvent
     * const balanceEvent = await prisma.balanceEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceEventFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceEventClient<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BalanceEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceEventFindFirstArgs} args - Arguments to find a BalanceEvent
     * @example
     * // Get one BalanceEvent
     * const balanceEvent = await prisma.balanceEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceEventFindFirstArgs>(args?: SelectSubset<T, BalanceEventFindFirstArgs<ExtArgs>>): Prisma__BalanceEventClient<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BalanceEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceEventFindFirstOrThrowArgs} args - Arguments to find a BalanceEvent
     * @example
     * // Get one BalanceEvent
     * const balanceEvent = await prisma.balanceEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceEventFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceEventClient<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BalanceEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BalanceEvents
     * const balanceEvents = await prisma.balanceEvent.findMany()
     * 
     * // Get first 10 BalanceEvents
     * const balanceEvents = await prisma.balanceEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceEventWithIdOnly = await prisma.balanceEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceEventFindManyArgs>(args?: SelectSubset<T, BalanceEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BalanceEvent.
     * @param {BalanceEventCreateArgs} args - Arguments to create a BalanceEvent.
     * @example
     * // Create one BalanceEvent
     * const BalanceEvent = await prisma.balanceEvent.create({
     *   data: {
     *     // ... data to create a BalanceEvent
     *   }
     * })
     * 
     */
    create<T extends BalanceEventCreateArgs>(args: SelectSubset<T, BalanceEventCreateArgs<ExtArgs>>): Prisma__BalanceEventClient<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BalanceEvents.
     * @param {BalanceEventCreateManyArgs} args - Arguments to create many BalanceEvents.
     * @example
     * // Create many BalanceEvents
     * const balanceEvent = await prisma.balanceEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceEventCreateManyArgs>(args?: SelectSubset<T, BalanceEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BalanceEvents and returns the data saved in the database.
     * @param {BalanceEventCreateManyAndReturnArgs} args - Arguments to create many BalanceEvents.
     * @example
     * // Create many BalanceEvents
     * const balanceEvent = await prisma.balanceEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BalanceEvents and only return the `id`
     * const balanceEventWithIdOnly = await prisma.balanceEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceEventCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BalanceEvent.
     * @param {BalanceEventDeleteArgs} args - Arguments to delete one BalanceEvent.
     * @example
     * // Delete one BalanceEvent
     * const BalanceEvent = await prisma.balanceEvent.delete({
     *   where: {
     *     // ... filter to delete one BalanceEvent
     *   }
     * })
     * 
     */
    delete<T extends BalanceEventDeleteArgs>(args: SelectSubset<T, BalanceEventDeleteArgs<ExtArgs>>): Prisma__BalanceEventClient<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BalanceEvent.
     * @param {BalanceEventUpdateArgs} args - Arguments to update one BalanceEvent.
     * @example
     * // Update one BalanceEvent
     * const balanceEvent = await prisma.balanceEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceEventUpdateArgs>(args: SelectSubset<T, BalanceEventUpdateArgs<ExtArgs>>): Prisma__BalanceEventClient<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BalanceEvents.
     * @param {BalanceEventDeleteManyArgs} args - Arguments to filter BalanceEvents to delete.
     * @example
     * // Delete a few BalanceEvents
     * const { count } = await prisma.balanceEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceEventDeleteManyArgs>(args?: SelectSubset<T, BalanceEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BalanceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BalanceEvents
     * const balanceEvent = await prisma.balanceEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceEventUpdateManyArgs>(args: SelectSubset<T, BalanceEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BalanceEvents and returns the data updated in the database.
     * @param {BalanceEventUpdateManyAndReturnArgs} args - Arguments to update many BalanceEvents.
     * @example
     * // Update many BalanceEvents
     * const balanceEvent = await prisma.balanceEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BalanceEvents and only return the `id`
     * const balanceEventWithIdOnly = await prisma.balanceEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BalanceEventUpdateManyAndReturnArgs>(args: SelectSubset<T, BalanceEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BalanceEvent.
     * @param {BalanceEventUpsertArgs} args - Arguments to update or create a BalanceEvent.
     * @example
     * // Update or create a BalanceEvent
     * const balanceEvent = await prisma.balanceEvent.upsert({
     *   create: {
     *     // ... data to create a BalanceEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BalanceEvent we want to update
     *   }
     * })
     */
    upsert<T extends BalanceEventUpsertArgs>(args: SelectSubset<T, BalanceEventUpsertArgs<ExtArgs>>): Prisma__BalanceEventClient<$Result.GetResult<Prisma.$BalanceEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BalanceEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceEventCountArgs} args - Arguments to filter BalanceEvents to count.
     * @example
     * // Count the number of BalanceEvents
     * const count = await prisma.balanceEvent.count({
     *   where: {
     *     // ... the filter for the BalanceEvents we want to count
     *   }
     * })
    **/
    count<T extends BalanceEventCountArgs>(
      args?: Subset<T, BalanceEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BalanceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalanceEventAggregateArgs>(args: Subset<T, BalanceEventAggregateArgs>): Prisma.PrismaPromise<GetBalanceEventAggregateType<T>>

    /**
     * Group by BalanceEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BalanceEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceEventGroupByArgs['orderBy'] }
        : { orderBy?: BalanceEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BalanceEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BalanceEvent model
   */
  readonly fields: BalanceEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BalanceEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BalanceEvent model
   */
  interface BalanceEventFieldRefs {
    readonly id: FieldRef<"BalanceEvent", 'String'>
    readonly amount: FieldRef<"BalanceEvent", 'Decimal'>
    readonly description: FieldRef<"BalanceEvent", 'String'>
    readonly type: FieldRef<"BalanceEvent", 'BalanceEventType'>
    readonly occurredAt: FieldRef<"BalanceEvent", 'DateTime'>
    readonly createdAt: FieldRef<"BalanceEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"BalanceEvent", 'DateTime'>
    readonly companyId: FieldRef<"BalanceEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BalanceEvent findUnique
   */
  export type BalanceEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventInclude<ExtArgs> | null
    /**
     * Filter, which BalanceEvent to fetch.
     */
    where: BalanceEventWhereUniqueInput
  }

  /**
   * BalanceEvent findUniqueOrThrow
   */
  export type BalanceEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventInclude<ExtArgs> | null
    /**
     * Filter, which BalanceEvent to fetch.
     */
    where: BalanceEventWhereUniqueInput
  }

  /**
   * BalanceEvent findFirst
   */
  export type BalanceEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventInclude<ExtArgs> | null
    /**
     * Filter, which BalanceEvent to fetch.
     */
    where?: BalanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceEvents to fetch.
     */
    orderBy?: BalanceEventOrderByWithRelationInput | BalanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BalanceEvents.
     */
    cursor?: BalanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BalanceEvents.
     */
    distinct?: BalanceEventScalarFieldEnum | BalanceEventScalarFieldEnum[]
  }

  /**
   * BalanceEvent findFirstOrThrow
   */
  export type BalanceEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventInclude<ExtArgs> | null
    /**
     * Filter, which BalanceEvent to fetch.
     */
    where?: BalanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceEvents to fetch.
     */
    orderBy?: BalanceEventOrderByWithRelationInput | BalanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BalanceEvents.
     */
    cursor?: BalanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BalanceEvents.
     */
    distinct?: BalanceEventScalarFieldEnum | BalanceEventScalarFieldEnum[]
  }

  /**
   * BalanceEvent findMany
   */
  export type BalanceEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventInclude<ExtArgs> | null
    /**
     * Filter, which BalanceEvents to fetch.
     */
    where?: BalanceEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceEvents to fetch.
     */
    orderBy?: BalanceEventOrderByWithRelationInput | BalanceEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BalanceEvents.
     */
    cursor?: BalanceEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceEvents.
     */
    skip?: number
    distinct?: BalanceEventScalarFieldEnum | BalanceEventScalarFieldEnum[]
  }

  /**
   * BalanceEvent create
   */
  export type BalanceEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventInclude<ExtArgs> | null
    /**
     * The data needed to create a BalanceEvent.
     */
    data: XOR<BalanceEventCreateInput, BalanceEventUncheckedCreateInput>
  }

  /**
   * BalanceEvent createMany
   */
  export type BalanceEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BalanceEvents.
     */
    data: BalanceEventCreateManyInput | BalanceEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BalanceEvent createManyAndReturn
   */
  export type BalanceEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * The data used to create many BalanceEvents.
     */
    data: BalanceEventCreateManyInput | BalanceEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BalanceEvent update
   */
  export type BalanceEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventInclude<ExtArgs> | null
    /**
     * The data needed to update a BalanceEvent.
     */
    data: XOR<BalanceEventUpdateInput, BalanceEventUncheckedUpdateInput>
    /**
     * Choose, which BalanceEvent to update.
     */
    where: BalanceEventWhereUniqueInput
  }

  /**
   * BalanceEvent updateMany
   */
  export type BalanceEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BalanceEvents.
     */
    data: XOR<BalanceEventUpdateManyMutationInput, BalanceEventUncheckedUpdateManyInput>
    /**
     * Filter which BalanceEvents to update
     */
    where?: BalanceEventWhereInput
    /**
     * Limit how many BalanceEvents to update.
     */
    limit?: number
  }

  /**
   * BalanceEvent updateManyAndReturn
   */
  export type BalanceEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * The data used to update BalanceEvents.
     */
    data: XOR<BalanceEventUpdateManyMutationInput, BalanceEventUncheckedUpdateManyInput>
    /**
     * Filter which BalanceEvents to update
     */
    where?: BalanceEventWhereInput
    /**
     * Limit how many BalanceEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BalanceEvent upsert
   */
  export type BalanceEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventInclude<ExtArgs> | null
    /**
     * The filter to search for the BalanceEvent to update in case it exists.
     */
    where: BalanceEventWhereUniqueInput
    /**
     * In case the BalanceEvent found by the `where` argument doesn't exist, create a new BalanceEvent with this data.
     */
    create: XOR<BalanceEventCreateInput, BalanceEventUncheckedCreateInput>
    /**
     * In case the BalanceEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceEventUpdateInput, BalanceEventUncheckedUpdateInput>
  }

  /**
   * BalanceEvent delete
   */
  export type BalanceEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventInclude<ExtArgs> | null
    /**
     * Filter which BalanceEvent to delete.
     */
    where: BalanceEventWhereUniqueInput
  }

  /**
   * BalanceEvent deleteMany
   */
  export type BalanceEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BalanceEvents to delete
     */
    where?: BalanceEventWhereInput
    /**
     * Limit how many BalanceEvents to delete.
     */
    limit?: number
  }

  /**
   * BalanceEvent without action
   */
  export type BalanceEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceEvent
     */
    select?: BalanceEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceEvent
     */
    omit?: BalanceEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    tradeName: 'tradeName',
    legalName: 'legalName',
    taxId: 'taxId',
    balance: 'balance',
    supportEmail: 'supportEmail',
    mainPhone: 'mainPhone',
    subscriptionPlan: 'subscriptionPlan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cnh: 'cnh',
    cnhExpiration: 'cnhExpiration',
    cpf: 'cpf',
    salary: 'salary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyId: 'companyId'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const TruckScalarFieldEnum: {
    id: 'id',
    licensePlate: 'licensePlate',
    maxPayload: 'maxPayload',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyId: 'companyId'
  };

  export type TruckScalarFieldEnum = (typeof TruckScalarFieldEnum)[keyof typeof TruckScalarFieldEnum]


  export const RecipientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    fullAddress: 'fullAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyId: 'companyId'
  };

  export type RecipientScalarFieldEnum = (typeof RecipientScalarFieldEnum)[keyof typeof RecipientScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    status: 'status',
    startLat: 'startLat',
    startLng: 'startLng',
    startAddress: 'startAddress',
    deliveryLat: 'deliveryLat',
    deliveryLng: 'deliveryLng',
    deliveryAddress: 'deliveryAddress',
    currentLat: 'currentLat',
    currentLng: 'currentLng',
    cargoType: 'cargoType',
    weight: 'weight',
    gasSpent: 'gasSpent',
    estimatedProfit: 'estimatedProfit',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyId: 'companyId',
    employeeId: 'employeeId',
    truckId: 'truckId',
    recipientId: 'recipientId'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const ShipmentEventScalarFieldEnum: {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude',
    description: 'description',
    recordedAt: 'recordedAt',
    shipmentId: 'shipmentId'
  };

  export type ShipmentEventScalarFieldEnum = (typeof ShipmentEventScalarFieldEnum)[keyof typeof ShipmentEventScalarFieldEnum]


  export const BalanceEventScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    description: 'description',
    type: 'type',
    occurredAt: 'occurredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    companyId: 'companyId'
  };

  export type BalanceEventScalarFieldEnum = (typeof BalanceEventScalarFieldEnum)[keyof typeof BalanceEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan'
   */
  export type EnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan'>
    


  /**
   * Reference to a field of type 'SubscriptionPlan[]'
   */
  export type ListEnumSubscriptionPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPlan[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ShipmentStatus'
   */
  export type EnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus'>
    


  /**
   * Reference to a field of type 'ShipmentStatus[]'
   */
  export type ListEnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus[]'>
    


  /**
   * Reference to a field of type 'CargoType'
   */
  export type EnumCargoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CargoType'>
    


  /**
   * Reference to a field of type 'CargoType[]'
   */
  export type ListEnumCargoTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CargoType[]'>
    


  /**
   * Reference to a field of type 'BalanceEventType'
   */
  export type EnumBalanceEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BalanceEventType'>
    


  /**
   * Reference to a field of type 'BalanceEventType[]'
   */
  export type ListEnumBalanceEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BalanceEventType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    tradeName?: StringFilter<"Company"> | string
    legalName?: StringFilter<"Company"> | string
    taxId?: StringFilter<"Company"> | string
    balance?: DecimalFilter<"Company"> | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFilter<"Company"> | string
    mainPhone?: StringFilter<"Company"> | string
    subscriptionPlan?: EnumSubscriptionPlanFilter<"Company"> | $Enums.SubscriptionPlan
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    userId?: StringFilter<"Company"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    employees?: EmployeeListRelationFilter
    trucks?: TruckListRelationFilter
    shipments?: ShipmentListRelationFilter
    recipients?: RecipientListRelationFilter
    balanceEvents?: BalanceEventListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    tradeName?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    balance?: SortOrder
    supportEmail?: SortOrder
    mainPhone?: SortOrder
    subscriptionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    employees?: EmployeeOrderByRelationAggregateInput
    trucks?: TruckOrderByRelationAggregateInput
    shipments?: ShipmentOrderByRelationAggregateInput
    recipients?: RecipientOrderByRelationAggregateInput
    balanceEvents?: BalanceEventOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taxId?: string
    userId?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    tradeName?: StringFilter<"Company"> | string
    legalName?: StringFilter<"Company"> | string
    balance?: DecimalFilter<"Company"> | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFilter<"Company"> | string
    mainPhone?: StringFilter<"Company"> | string
    subscriptionPlan?: EnumSubscriptionPlanFilter<"Company"> | $Enums.SubscriptionPlan
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    employees?: EmployeeListRelationFilter
    trucks?: TruckListRelationFilter
    shipments?: ShipmentListRelationFilter
    recipients?: RecipientListRelationFilter
    balanceEvents?: BalanceEventListRelationFilter
  }, "id" | "taxId" | "userId">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    tradeName?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    balance?: SortOrder
    supportEmail?: SortOrder
    mainPhone?: SortOrder
    subscriptionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    tradeName?: StringWithAggregatesFilter<"Company"> | string
    legalName?: StringWithAggregatesFilter<"Company"> | string
    taxId?: StringWithAggregatesFilter<"Company"> | string
    balance?: DecimalWithAggregatesFilter<"Company"> | Decimal | DecimalJsLike | number | string
    supportEmail?: StringWithAggregatesFilter<"Company"> | string
    mainPhone?: StringWithAggregatesFilter<"Company"> | string
    subscriptionPlan?: EnumSubscriptionPlanWithAggregatesFilter<"Company"> | $Enums.SubscriptionPlan
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    userId?: StringWithAggregatesFilter<"Company"> | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    cnh?: StringFilter<"Employee"> | string
    cnhExpiration?: DateTimeFilter<"Employee"> | Date | string
    cpf?: StringFilter<"Employee"> | string
    salary?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    companyId?: StringFilter<"Employee"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    shipments?: ShipmentListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cnh?: SortOrder
    cnhExpiration?: SortOrder
    cpf?: SortOrder
    salary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    company?: CompanyOrderByWithRelationInput
    shipments?: ShipmentOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnh?: string
    cpf?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    cnhExpiration?: DateTimeFilter<"Employee"> | Date | string
    salary?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    companyId?: StringFilter<"Employee"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    shipments?: ShipmentListRelationFilter
  }, "id" | "cnh" | "cpf">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cnh?: SortOrder
    cnhExpiration?: SortOrder
    cpf?: SortOrder
    salary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    name?: StringWithAggregatesFilter<"Employee"> | string
    cnh?: StringWithAggregatesFilter<"Employee"> | string
    cnhExpiration?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    cpf?: StringWithAggregatesFilter<"Employee"> | string
    salary?: DecimalWithAggregatesFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    companyId?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type TruckWhereInput = {
    AND?: TruckWhereInput | TruckWhereInput[]
    OR?: TruckWhereInput[]
    NOT?: TruckWhereInput | TruckWhereInput[]
    id?: StringFilter<"Truck"> | string
    licensePlate?: StringFilter<"Truck"> | string
    maxPayload?: FloatFilter<"Truck"> | number
    createdAt?: DateTimeFilter<"Truck"> | Date | string
    updatedAt?: DateTimeFilter<"Truck"> | Date | string
    companyId?: StringFilter<"Truck"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    shipments?: ShipmentListRelationFilter
  }

  export type TruckOrderByWithRelationInput = {
    id?: SortOrder
    licensePlate?: SortOrder
    maxPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    company?: CompanyOrderByWithRelationInput
    shipments?: ShipmentOrderByRelationAggregateInput
  }

  export type TruckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licensePlate?: string
    AND?: TruckWhereInput | TruckWhereInput[]
    OR?: TruckWhereInput[]
    NOT?: TruckWhereInput | TruckWhereInput[]
    maxPayload?: FloatFilter<"Truck"> | number
    createdAt?: DateTimeFilter<"Truck"> | Date | string
    updatedAt?: DateTimeFilter<"Truck"> | Date | string
    companyId?: StringFilter<"Truck"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    shipments?: ShipmentListRelationFilter
  }, "id" | "licensePlate">

  export type TruckOrderByWithAggregationInput = {
    id?: SortOrder
    licensePlate?: SortOrder
    maxPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    _count?: TruckCountOrderByAggregateInput
    _avg?: TruckAvgOrderByAggregateInput
    _max?: TruckMaxOrderByAggregateInput
    _min?: TruckMinOrderByAggregateInput
    _sum?: TruckSumOrderByAggregateInput
  }

  export type TruckScalarWhereWithAggregatesInput = {
    AND?: TruckScalarWhereWithAggregatesInput | TruckScalarWhereWithAggregatesInput[]
    OR?: TruckScalarWhereWithAggregatesInput[]
    NOT?: TruckScalarWhereWithAggregatesInput | TruckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Truck"> | string
    licensePlate?: StringWithAggregatesFilter<"Truck"> | string
    maxPayload?: FloatWithAggregatesFilter<"Truck"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Truck"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Truck"> | Date | string
    companyId?: StringWithAggregatesFilter<"Truck"> | string
  }

  export type RecipientWhereInput = {
    AND?: RecipientWhereInput | RecipientWhereInput[]
    OR?: RecipientWhereInput[]
    NOT?: RecipientWhereInput | RecipientWhereInput[]
    id?: StringFilter<"Recipient"> | string
    name?: StringFilter<"Recipient"> | string
    email?: StringFilter<"Recipient"> | string
    phone?: StringFilter<"Recipient"> | string
    fullAddress?: StringFilter<"Recipient"> | string
    createdAt?: DateTimeFilter<"Recipient"> | Date | string
    updatedAt?: DateTimeFilter<"Recipient"> | Date | string
    companyId?: StringFilter<"Recipient"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    shipments?: ShipmentListRelationFilter
  }

  export type RecipientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    fullAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    company?: CompanyOrderByWithRelationInput
    shipments?: ShipmentOrderByRelationAggregateInput
  }

  export type RecipientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: RecipientWhereInput | RecipientWhereInput[]
    OR?: RecipientWhereInput[]
    NOT?: RecipientWhereInput | RecipientWhereInput[]
    name?: StringFilter<"Recipient"> | string
    phone?: StringFilter<"Recipient"> | string
    fullAddress?: StringFilter<"Recipient"> | string
    createdAt?: DateTimeFilter<"Recipient"> | Date | string
    updatedAt?: DateTimeFilter<"Recipient"> | Date | string
    companyId?: StringFilter<"Recipient"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    shipments?: ShipmentListRelationFilter
  }, "id" | "email">

  export type RecipientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    fullAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    _count?: RecipientCountOrderByAggregateInput
    _max?: RecipientMaxOrderByAggregateInput
    _min?: RecipientMinOrderByAggregateInput
  }

  export type RecipientScalarWhereWithAggregatesInput = {
    AND?: RecipientScalarWhereWithAggregatesInput | RecipientScalarWhereWithAggregatesInput[]
    OR?: RecipientScalarWhereWithAggregatesInput[]
    NOT?: RecipientScalarWhereWithAggregatesInput | RecipientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipient"> | string
    name?: StringWithAggregatesFilter<"Recipient"> | string
    email?: StringWithAggregatesFilter<"Recipient"> | string
    phone?: StringWithAggregatesFilter<"Recipient"> | string
    fullAddress?: StringWithAggregatesFilter<"Recipient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Recipient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recipient"> | Date | string
    companyId?: StringWithAggregatesFilter<"Recipient"> | string
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    startLat?: FloatFilter<"Shipment"> | number
    startLng?: FloatFilter<"Shipment"> | number
    startAddress?: StringFilter<"Shipment"> | string
    deliveryLat?: FloatFilter<"Shipment"> | number
    deliveryLng?: FloatFilter<"Shipment"> | number
    deliveryAddress?: StringFilter<"Shipment"> | string
    currentLat?: FloatNullableFilter<"Shipment"> | number | null
    currentLng?: FloatNullableFilter<"Shipment"> | number | null
    cargoType?: EnumCargoTypeFilter<"Shipment"> | $Enums.CargoType
    weight?: FloatFilter<"Shipment"> | number
    gasSpent?: DecimalFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"Shipment"> | Date | string
    endDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    companyId?: StringFilter<"Shipment"> | string
    employeeId?: StringFilter<"Shipment"> | string
    truckId?: StringFilter<"Shipment"> | string
    recipientId?: StringFilter<"Shipment"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    truck?: XOR<TruckScalarRelationFilter, TruckWhereInput>
    recipient?: XOR<RecipientScalarRelationFilter, RecipientWhereInput>
    events?: ShipmentEventListRelationFilter
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    startLat?: SortOrder
    startLng?: SortOrder
    startAddress?: SortOrder
    deliveryLat?: SortOrder
    deliveryLng?: SortOrder
    deliveryAddress?: SortOrder
    currentLat?: SortOrderInput | SortOrder
    currentLng?: SortOrderInput | SortOrder
    cargoType?: SortOrder
    weight?: SortOrder
    gasSpent?: SortOrder
    estimatedProfit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    truckId?: SortOrder
    recipientId?: SortOrder
    company?: CompanyOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    truck?: TruckOrderByWithRelationInput
    recipient?: RecipientOrderByWithRelationInput
    events?: ShipmentEventOrderByRelationAggregateInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    startLat?: FloatFilter<"Shipment"> | number
    startLng?: FloatFilter<"Shipment"> | number
    startAddress?: StringFilter<"Shipment"> | string
    deliveryLat?: FloatFilter<"Shipment"> | number
    deliveryLng?: FloatFilter<"Shipment"> | number
    deliveryAddress?: StringFilter<"Shipment"> | string
    currentLat?: FloatNullableFilter<"Shipment"> | number | null
    currentLng?: FloatNullableFilter<"Shipment"> | number | null
    cargoType?: EnumCargoTypeFilter<"Shipment"> | $Enums.CargoType
    weight?: FloatFilter<"Shipment"> | number
    gasSpent?: DecimalFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"Shipment"> | Date | string
    endDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    companyId?: StringFilter<"Shipment"> | string
    employeeId?: StringFilter<"Shipment"> | string
    truckId?: StringFilter<"Shipment"> | string
    recipientId?: StringFilter<"Shipment"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    truck?: XOR<TruckScalarRelationFilter, TruckWhereInput>
    recipient?: XOR<RecipientScalarRelationFilter, RecipientWhereInput>
    events?: ShipmentEventListRelationFilter
  }, "id">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    startLat?: SortOrder
    startLng?: SortOrder
    startAddress?: SortOrder
    deliveryLat?: SortOrder
    deliveryLng?: SortOrder
    deliveryAddress?: SortOrder
    currentLat?: SortOrderInput | SortOrder
    currentLng?: SortOrderInput | SortOrder
    cargoType?: SortOrder
    weight?: SortOrder
    gasSpent?: SortOrder
    estimatedProfit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    truckId?: SortOrder
    recipientId?: SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _avg?: ShipmentAvgOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
    _sum?: ShipmentSumOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shipment"> | string
    status?: EnumShipmentStatusWithAggregatesFilter<"Shipment"> | $Enums.ShipmentStatus
    startLat?: FloatWithAggregatesFilter<"Shipment"> | number
    startLng?: FloatWithAggregatesFilter<"Shipment"> | number
    startAddress?: StringWithAggregatesFilter<"Shipment"> | string
    deliveryLat?: FloatWithAggregatesFilter<"Shipment"> | number
    deliveryLng?: FloatWithAggregatesFilter<"Shipment"> | number
    deliveryAddress?: StringWithAggregatesFilter<"Shipment"> | string
    currentLat?: FloatNullableWithAggregatesFilter<"Shipment"> | number | null
    currentLng?: FloatNullableWithAggregatesFilter<"Shipment"> | number | null
    cargoType?: EnumCargoTypeWithAggregatesFilter<"Shipment"> | $Enums.CargoType
    weight?: FloatWithAggregatesFilter<"Shipment"> | number
    gasSpent?: DecimalWithAggregatesFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalWithAggregatesFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    companyId?: StringWithAggregatesFilter<"Shipment"> | string
    employeeId?: StringWithAggregatesFilter<"Shipment"> | string
    truckId?: StringWithAggregatesFilter<"Shipment"> | string
    recipientId?: StringWithAggregatesFilter<"Shipment"> | string
  }

  export type ShipmentEventWhereInput = {
    AND?: ShipmentEventWhereInput | ShipmentEventWhereInput[]
    OR?: ShipmentEventWhereInput[]
    NOT?: ShipmentEventWhereInput | ShipmentEventWhereInput[]
    id?: StringFilter<"ShipmentEvent"> | string
    latitude?: FloatFilter<"ShipmentEvent"> | number
    longitude?: FloatFilter<"ShipmentEvent"> | number
    description?: StringFilter<"ShipmentEvent"> | string
    recordedAt?: DateTimeFilter<"ShipmentEvent"> | Date | string
    shipmentId?: StringFilter<"ShipmentEvent"> | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }

  export type ShipmentEventOrderByWithRelationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    recordedAt?: SortOrder
    shipmentId?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type ShipmentEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShipmentEventWhereInput | ShipmentEventWhereInput[]
    OR?: ShipmentEventWhereInput[]
    NOT?: ShipmentEventWhereInput | ShipmentEventWhereInput[]
    latitude?: FloatFilter<"ShipmentEvent"> | number
    longitude?: FloatFilter<"ShipmentEvent"> | number
    description?: StringFilter<"ShipmentEvent"> | string
    recordedAt?: DateTimeFilter<"ShipmentEvent"> | Date | string
    shipmentId?: StringFilter<"ShipmentEvent"> | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }, "id">

  export type ShipmentEventOrderByWithAggregationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    recordedAt?: SortOrder
    shipmentId?: SortOrder
    _count?: ShipmentEventCountOrderByAggregateInput
    _avg?: ShipmentEventAvgOrderByAggregateInput
    _max?: ShipmentEventMaxOrderByAggregateInput
    _min?: ShipmentEventMinOrderByAggregateInput
    _sum?: ShipmentEventSumOrderByAggregateInput
  }

  export type ShipmentEventScalarWhereWithAggregatesInput = {
    AND?: ShipmentEventScalarWhereWithAggregatesInput | ShipmentEventScalarWhereWithAggregatesInput[]
    OR?: ShipmentEventScalarWhereWithAggregatesInput[]
    NOT?: ShipmentEventScalarWhereWithAggregatesInput | ShipmentEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShipmentEvent"> | string
    latitude?: FloatWithAggregatesFilter<"ShipmentEvent"> | number
    longitude?: FloatWithAggregatesFilter<"ShipmentEvent"> | number
    description?: StringWithAggregatesFilter<"ShipmentEvent"> | string
    recordedAt?: DateTimeWithAggregatesFilter<"ShipmentEvent"> | Date | string
    shipmentId?: StringWithAggregatesFilter<"ShipmentEvent"> | string
  }

  export type BalanceEventWhereInput = {
    AND?: BalanceEventWhereInput | BalanceEventWhereInput[]
    OR?: BalanceEventWhereInput[]
    NOT?: BalanceEventWhereInput | BalanceEventWhereInput[]
    id?: StringFilter<"BalanceEvent"> | string
    amount?: DecimalFilter<"BalanceEvent"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"BalanceEvent"> | string
    type?: EnumBalanceEventTypeFilter<"BalanceEvent"> | $Enums.BalanceEventType
    occurredAt?: DateTimeFilter<"BalanceEvent"> | Date | string
    createdAt?: DateTimeFilter<"BalanceEvent"> | Date | string
    updatedAt?: DateTimeFilter<"BalanceEvent"> | Date | string
    companyId?: StringFilter<"BalanceEvent"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type BalanceEventOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    company?: CompanyOrderByWithRelationInput
  }

  export type BalanceEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BalanceEventWhereInput | BalanceEventWhereInput[]
    OR?: BalanceEventWhereInput[]
    NOT?: BalanceEventWhereInput | BalanceEventWhereInput[]
    amount?: DecimalFilter<"BalanceEvent"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"BalanceEvent"> | string
    type?: EnumBalanceEventTypeFilter<"BalanceEvent"> | $Enums.BalanceEventType
    occurredAt?: DateTimeFilter<"BalanceEvent"> | Date | string
    createdAt?: DateTimeFilter<"BalanceEvent"> | Date | string
    updatedAt?: DateTimeFilter<"BalanceEvent"> | Date | string
    companyId?: StringFilter<"BalanceEvent"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "id">

  export type BalanceEventOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    _count?: BalanceEventCountOrderByAggregateInput
    _avg?: BalanceEventAvgOrderByAggregateInput
    _max?: BalanceEventMaxOrderByAggregateInput
    _min?: BalanceEventMinOrderByAggregateInput
    _sum?: BalanceEventSumOrderByAggregateInput
  }

  export type BalanceEventScalarWhereWithAggregatesInput = {
    AND?: BalanceEventScalarWhereWithAggregatesInput | BalanceEventScalarWhereWithAggregatesInput[]
    OR?: BalanceEventScalarWhereWithAggregatesInput[]
    NOT?: BalanceEventScalarWhereWithAggregatesInput | BalanceEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BalanceEvent"> | string
    amount?: DecimalWithAggregatesFilter<"BalanceEvent"> | Decimal | DecimalJsLike | number | string
    description?: StringWithAggregatesFilter<"BalanceEvent"> | string
    type?: EnumBalanceEventTypeWithAggregatesFilter<"BalanceEvent"> | $Enums.BalanceEventType
    occurredAt?: DateTimeWithAggregatesFilter<"BalanceEvent"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"BalanceEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BalanceEvent"> | Date | string
    companyId?: StringWithAggregatesFilter<"BalanceEvent"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: CompanyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    trucks?: TruckCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentCreateNestedManyWithoutCompanyInput
    recipients?: RecipientCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    trucks?: TruckUncheckedCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCompanyInput
    recipients?: RecipientUncheckedCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    trucks?: TruckUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    trucks?: TruckUncheckedUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUncheckedUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCreateInput = {
    id?: string
    name: string
    cnh: string
    cnhExpiration: Date | string
    cpf: string
    salary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
    shipments?: ShipmentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    name: string
    cnh: string
    cnhExpiration: Date | string
    cpf: string
    salary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnh?: StringFieldUpdateOperationsInput | string
    cnhExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
    shipments?: ShipmentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnh?: StringFieldUpdateOperationsInput | string
    cnhExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    shipments?: ShipmentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    name: string
    cnh: string
    cnhExpiration: Date | string
    cpf: string
    salary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnh?: StringFieldUpdateOperationsInput | string
    cnhExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnh?: StringFieldUpdateOperationsInput | string
    cnhExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type TruckCreateInput = {
    id?: string
    licensePlate: string
    maxPayload: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutTrucksInput
    shipments?: ShipmentCreateNestedManyWithoutTruckInput
  }

  export type TruckUncheckedCreateInput = {
    id?: string
    licensePlate: string
    maxPayload: number
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutTruckInput
  }

  export type TruckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    maxPayload?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutTrucksNestedInput
    shipments?: ShipmentUpdateManyWithoutTruckNestedInput
  }

  export type TruckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    maxPayload?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    shipments?: ShipmentUncheckedUpdateManyWithoutTruckNestedInput
  }

  export type TruckCreateManyInput = {
    id?: string
    licensePlate: string
    maxPayload: number
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type TruckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    maxPayload?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TruckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    maxPayload?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipientCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    fullAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutRecipientsInput
    shipments?: ShipmentCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    fullAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRecipientsNestedInput
    shipments?: ShipmentUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    shipments?: ShipmentUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    fullAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type RecipientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentCreateInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutShipmentsInput
    employee: EmployeeCreateNestedOneWithoutShipmentsInput
    truck: TruckCreateNestedOneWithoutShipmentsInput
    recipient: RecipientCreateNestedOneWithoutShipmentsInput
    events?: ShipmentEventCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    employeeId: string
    truckId: string
    recipientId: string
    events?: ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutShipmentsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutShipmentsNestedInput
    truck?: TruckUpdateOneRequiredWithoutShipmentsNestedInput
    recipient?: RecipientUpdateOneRequiredWithoutShipmentsNestedInput
    events?: ShipmentEventUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    truckId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    events?: ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateManyInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    employeeId: string
    truckId: string
    recipientId: string
  }

  export type ShipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    truckId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentEventCreateInput = {
    id?: string
    latitude: number
    longitude: number
    description: string
    recordedAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutEventsInput
  }

  export type ShipmentEventUncheckedCreateInput = {
    id?: string
    latitude: number
    longitude: number
    description: string
    recordedAt?: Date | string
    shipmentId: string
  }

  export type ShipmentEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutEventsNestedInput
  }

  export type ShipmentEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentEventCreateManyInput = {
    id?: string
    latitude: number
    longitude: number
    description: string
    recordedAt?: Date | string
    shipmentId: string
  }

  export type ShipmentEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipmentId?: StringFieldUpdateOperationsInput | string
  }

  export type BalanceEventCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    type: $Enums.BalanceEventType
    occurredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutBalanceEventsInput
  }

  export type BalanceEventUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    type: $Enums.BalanceEventType
    occurredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type BalanceEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumBalanceEventTypeFieldUpdateOperationsInput | $Enums.BalanceEventType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutBalanceEventsNestedInput
  }

  export type BalanceEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumBalanceEventTypeFieldUpdateOperationsInput | $Enums.BalanceEventType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type BalanceEventCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    type: $Enums.BalanceEventType
    occurredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type BalanceEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumBalanceEventTypeFieldUpdateOperationsInput | $Enums.BalanceEventType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumBalanceEventTypeFieldUpdateOperationsInput | $Enums.BalanceEventType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type TruckListRelationFilter = {
    every?: TruckWhereInput
    some?: TruckWhereInput
    none?: TruckWhereInput
  }

  export type ShipmentListRelationFilter = {
    every?: ShipmentWhereInput
    some?: ShipmentWhereInput
    none?: ShipmentWhereInput
  }

  export type RecipientListRelationFilter = {
    every?: RecipientWhereInput
    some?: RecipientWhereInput
    none?: RecipientWhereInput
  }

  export type BalanceEventListRelationFilter = {
    every?: BalanceEventWhereInput
    some?: BalanceEventWhereInput
    none?: BalanceEventWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TruckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BalanceEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    tradeName?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    balance?: SortOrder
    supportEmail?: SortOrder
    mainPhone?: SortOrder
    subscriptionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    tradeName?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    balance?: SortOrder
    supportEmail?: SortOrder
    mainPhone?: SortOrder
    subscriptionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    tradeName?: SortOrder
    legalName?: SortOrder
    taxId?: SortOrder
    balance?: SortOrder
    supportEmail?: SortOrder
    mainPhone?: SortOrder
    subscriptionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnh?: SortOrder
    cnhExpiration?: SortOrder
    cpf?: SortOrder
    salary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnh?: SortOrder
    cnhExpiration?: SortOrder
    cpf?: SortOrder
    salary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnh?: SortOrder
    cnhExpiration?: SortOrder
    cpf?: SortOrder
    salary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TruckCountOrderByAggregateInput = {
    id?: SortOrder
    licensePlate?: SortOrder
    maxPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type TruckAvgOrderByAggregateInput = {
    maxPayload?: SortOrder
  }

  export type TruckMaxOrderByAggregateInput = {
    id?: SortOrder
    licensePlate?: SortOrder
    maxPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type TruckMinOrderByAggregateInput = {
    id?: SortOrder
    licensePlate?: SortOrder
    maxPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type TruckSumOrderByAggregateInput = {
    maxPayload?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RecipientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    fullAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type RecipientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    fullAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type RecipientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    fullAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type EnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumCargoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoType | EnumCargoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoTypeFilter<$PrismaModel> | $Enums.CargoType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type TruckScalarRelationFilter = {
    is?: TruckWhereInput
    isNot?: TruckWhereInput
  }

  export type RecipientScalarRelationFilter = {
    is?: RecipientWhereInput
    isNot?: RecipientWhereInput
  }

  export type ShipmentEventListRelationFilter = {
    every?: ShipmentEventWhereInput
    some?: ShipmentEventWhereInput
    none?: ShipmentEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShipmentEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    startLat?: SortOrder
    startLng?: SortOrder
    startAddress?: SortOrder
    deliveryLat?: SortOrder
    deliveryLng?: SortOrder
    deliveryAddress?: SortOrder
    currentLat?: SortOrder
    currentLng?: SortOrder
    cargoType?: SortOrder
    weight?: SortOrder
    gasSpent?: SortOrder
    estimatedProfit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    truckId?: SortOrder
    recipientId?: SortOrder
  }

  export type ShipmentAvgOrderByAggregateInput = {
    startLat?: SortOrder
    startLng?: SortOrder
    deliveryLat?: SortOrder
    deliveryLng?: SortOrder
    currentLat?: SortOrder
    currentLng?: SortOrder
    weight?: SortOrder
    gasSpent?: SortOrder
    estimatedProfit?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    startLat?: SortOrder
    startLng?: SortOrder
    startAddress?: SortOrder
    deliveryLat?: SortOrder
    deliveryLng?: SortOrder
    deliveryAddress?: SortOrder
    currentLat?: SortOrder
    currentLng?: SortOrder
    cargoType?: SortOrder
    weight?: SortOrder
    gasSpent?: SortOrder
    estimatedProfit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    truckId?: SortOrder
    recipientId?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    startLat?: SortOrder
    startLng?: SortOrder
    startAddress?: SortOrder
    deliveryLat?: SortOrder
    deliveryLng?: SortOrder
    deliveryAddress?: SortOrder
    currentLat?: SortOrder
    currentLng?: SortOrder
    cargoType?: SortOrder
    weight?: SortOrder
    gasSpent?: SortOrder
    estimatedProfit?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
    employeeId?: SortOrder
    truckId?: SortOrder
    recipientId?: SortOrder
  }

  export type ShipmentSumOrderByAggregateInput = {
    startLat?: SortOrder
    startLng?: SortOrder
    deliveryLat?: SortOrder
    deliveryLng?: SortOrder
    currentLat?: SortOrder
    currentLng?: SortOrder
    weight?: SortOrder
    gasSpent?: SortOrder
    estimatedProfit?: SortOrder
  }

  export type EnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumCargoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoType | EnumCargoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoTypeWithAggregatesFilter<$PrismaModel> | $Enums.CargoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoTypeFilter<$PrismaModel>
    _max?: NestedEnumCargoTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ShipmentScalarRelationFilter = {
    is?: ShipmentWhereInput
    isNot?: ShipmentWhereInput
  }

  export type ShipmentEventCountOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    recordedAt?: SortOrder
    shipmentId?: SortOrder
  }

  export type ShipmentEventAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ShipmentEventMaxOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    recordedAt?: SortOrder
    shipmentId?: SortOrder
  }

  export type ShipmentEventMinOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    recordedAt?: SortOrder
    shipmentId?: SortOrder
  }

  export type ShipmentEventSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumBalanceEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BalanceEventType | EnumBalanceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BalanceEventType[] | ListEnumBalanceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BalanceEventType[] | ListEnumBalanceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBalanceEventTypeFilter<$PrismaModel> | $Enums.BalanceEventType
  }

  export type BalanceEventCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type BalanceEventAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BalanceEventMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type BalanceEventMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    type?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companyId?: SortOrder
  }

  export type BalanceEventSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumBalanceEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BalanceEventType | EnumBalanceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BalanceEventType[] | ListEnumBalanceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BalanceEventType[] | ListEnumBalanceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBalanceEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.BalanceEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBalanceEventTypeFilter<$PrismaModel>
    _max?: NestedEnumBalanceEventTypeFilter<$PrismaModel>
  }

  export type CompanyCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    connect?: CompanyWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompanyUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    upsert?: CompanyUpsertWithoutUserInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUserInput, CompanyUpdateWithoutUserInput>, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUserInput
    upsert?: CompanyUpsertWithoutUserInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUserInput, CompanyUpdateWithoutUserInput>, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    connect?: UserWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type TruckCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TruckCreateWithoutCompanyInput, TruckUncheckedCreateWithoutCompanyInput> | TruckCreateWithoutCompanyInput[] | TruckUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutCompanyInput | TruckCreateOrConnectWithoutCompanyInput[]
    createMany?: TruckCreateManyCompanyInputEnvelope
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput> | ShipmentCreateWithoutCompanyInput[] | ShipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCompanyInput | ShipmentCreateOrConnectWithoutCompanyInput[]
    createMany?: ShipmentCreateManyCompanyInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type RecipientCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RecipientCreateWithoutCompanyInput, RecipientUncheckedCreateWithoutCompanyInput> | RecipientCreateWithoutCompanyInput[] | RecipientUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutCompanyInput | RecipientCreateOrConnectWithoutCompanyInput[]
    createMany?: RecipientCreateManyCompanyInputEnvelope
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type BalanceEventCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BalanceEventCreateWithoutCompanyInput, BalanceEventUncheckedCreateWithoutCompanyInput> | BalanceEventCreateWithoutCompanyInput[] | BalanceEventUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BalanceEventCreateOrConnectWithoutCompanyInput | BalanceEventCreateOrConnectWithoutCompanyInput[]
    createMany?: BalanceEventCreateManyCompanyInputEnvelope
    connect?: BalanceEventWhereUniqueInput | BalanceEventWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type TruckUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<TruckCreateWithoutCompanyInput, TruckUncheckedCreateWithoutCompanyInput> | TruckCreateWithoutCompanyInput[] | TruckUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutCompanyInput | TruckCreateOrConnectWithoutCompanyInput[]
    createMany?: TruckCreateManyCompanyInputEnvelope
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput> | ShipmentCreateWithoutCompanyInput[] | ShipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCompanyInput | ShipmentCreateOrConnectWithoutCompanyInput[]
    createMany?: ShipmentCreateManyCompanyInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type RecipientUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<RecipientCreateWithoutCompanyInput, RecipientUncheckedCreateWithoutCompanyInput> | RecipientCreateWithoutCompanyInput[] | RecipientUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutCompanyInput | RecipientCreateOrConnectWithoutCompanyInput[]
    createMany?: RecipientCreateManyCompanyInputEnvelope
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type BalanceEventUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<BalanceEventCreateWithoutCompanyInput, BalanceEventUncheckedCreateWithoutCompanyInput> | BalanceEventCreateWithoutCompanyInput[] | BalanceEventUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BalanceEventCreateOrConnectWithoutCompanyInput | BalanceEventCreateOrConnectWithoutCompanyInput[]
    createMany?: BalanceEventCreateManyCompanyInputEnvelope
    connect?: BalanceEventWhereUniqueInput | BalanceEventWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumSubscriptionPlanFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPlan
  }

  export type UserUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    upsert?: UserUpsertWithoutCompanyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyInput, UserUpdateWithoutCompanyInput>, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type EmployeeUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutCompanyInput | EmployeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutCompanyInput | EmployeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutCompanyInput | EmployeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type TruckUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TruckCreateWithoutCompanyInput, TruckUncheckedCreateWithoutCompanyInput> | TruckCreateWithoutCompanyInput[] | TruckUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutCompanyInput | TruckCreateOrConnectWithoutCompanyInput[]
    upsert?: TruckUpsertWithWhereUniqueWithoutCompanyInput | TruckUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TruckCreateManyCompanyInputEnvelope
    set?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    disconnect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    delete?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    update?: TruckUpdateWithWhereUniqueWithoutCompanyInput | TruckUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TruckUpdateManyWithWhereWithoutCompanyInput | TruckUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TruckScalarWhereInput | TruckScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput> | ShipmentCreateWithoutCompanyInput[] | ShipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCompanyInput | ShipmentCreateOrConnectWithoutCompanyInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCompanyInput | ShipmentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ShipmentCreateManyCompanyInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCompanyInput | ShipmentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCompanyInput | ShipmentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type RecipientUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RecipientCreateWithoutCompanyInput, RecipientUncheckedCreateWithoutCompanyInput> | RecipientCreateWithoutCompanyInput[] | RecipientUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutCompanyInput | RecipientCreateOrConnectWithoutCompanyInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutCompanyInput | RecipientUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RecipientCreateManyCompanyInputEnvelope
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutCompanyInput | RecipientUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutCompanyInput | RecipientUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type BalanceEventUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BalanceEventCreateWithoutCompanyInput, BalanceEventUncheckedCreateWithoutCompanyInput> | BalanceEventCreateWithoutCompanyInput[] | BalanceEventUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BalanceEventCreateOrConnectWithoutCompanyInput | BalanceEventCreateOrConnectWithoutCompanyInput[]
    upsert?: BalanceEventUpsertWithWhereUniqueWithoutCompanyInput | BalanceEventUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BalanceEventCreateManyCompanyInputEnvelope
    set?: BalanceEventWhereUniqueInput | BalanceEventWhereUniqueInput[]
    disconnect?: BalanceEventWhereUniqueInput | BalanceEventWhereUniqueInput[]
    delete?: BalanceEventWhereUniqueInput | BalanceEventWhereUniqueInput[]
    connect?: BalanceEventWhereUniqueInput | BalanceEventWhereUniqueInput[]
    update?: BalanceEventUpdateWithWhereUniqueWithoutCompanyInput | BalanceEventUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BalanceEventUpdateManyWithWhereWithoutCompanyInput | BalanceEventUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BalanceEventScalarWhereInput | BalanceEventScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput> | EmployeeCreateWithoutCompanyInput[] | EmployeeUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompanyInput | EmployeeCreateOrConnectWithoutCompanyInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutCompanyInput | EmployeeUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: EmployeeCreateManyCompanyInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutCompanyInput | EmployeeUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutCompanyInput | EmployeeUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type TruckUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<TruckCreateWithoutCompanyInput, TruckUncheckedCreateWithoutCompanyInput> | TruckCreateWithoutCompanyInput[] | TruckUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutCompanyInput | TruckCreateOrConnectWithoutCompanyInput[]
    upsert?: TruckUpsertWithWhereUniqueWithoutCompanyInput | TruckUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: TruckCreateManyCompanyInputEnvelope
    set?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    disconnect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    delete?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    update?: TruckUpdateWithWhereUniqueWithoutCompanyInput | TruckUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: TruckUpdateManyWithWhereWithoutCompanyInput | TruckUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: TruckScalarWhereInput | TruckScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput> | ShipmentCreateWithoutCompanyInput[] | ShipmentUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCompanyInput | ShipmentCreateOrConnectWithoutCompanyInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCompanyInput | ShipmentUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ShipmentCreateManyCompanyInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCompanyInput | ShipmentUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCompanyInput | ShipmentUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type RecipientUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<RecipientCreateWithoutCompanyInput, RecipientUncheckedCreateWithoutCompanyInput> | RecipientCreateWithoutCompanyInput[] | RecipientUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutCompanyInput | RecipientCreateOrConnectWithoutCompanyInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutCompanyInput | RecipientUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: RecipientCreateManyCompanyInputEnvelope
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutCompanyInput | RecipientUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutCompanyInput | RecipientUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type BalanceEventUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<BalanceEventCreateWithoutCompanyInput, BalanceEventUncheckedCreateWithoutCompanyInput> | BalanceEventCreateWithoutCompanyInput[] | BalanceEventUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: BalanceEventCreateOrConnectWithoutCompanyInput | BalanceEventCreateOrConnectWithoutCompanyInput[]
    upsert?: BalanceEventUpsertWithWhereUniqueWithoutCompanyInput | BalanceEventUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: BalanceEventCreateManyCompanyInputEnvelope
    set?: BalanceEventWhereUniqueInput | BalanceEventWhereUniqueInput[]
    disconnect?: BalanceEventWhereUniqueInput | BalanceEventWhereUniqueInput[]
    delete?: BalanceEventWhereUniqueInput | BalanceEventWhereUniqueInput[]
    connect?: BalanceEventWhereUniqueInput | BalanceEventWhereUniqueInput[]
    update?: BalanceEventUpdateWithWhereUniqueWithoutCompanyInput | BalanceEventUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: BalanceEventUpdateManyWithWhereWithoutCompanyInput | BalanceEventUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: BalanceEventScalarWhereInput | BalanceEventScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput
    connect?: CompanyWhereUniqueInput
  }

  export type ShipmentCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ShipmentCreateWithoutEmployeeInput, ShipmentUncheckedCreateWithoutEmployeeInput> | ShipmentCreateWithoutEmployeeInput[] | ShipmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutEmployeeInput | ShipmentCreateOrConnectWithoutEmployeeInput[]
    createMany?: ShipmentCreateManyEmployeeInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ShipmentCreateWithoutEmployeeInput, ShipmentUncheckedCreateWithoutEmployeeInput> | ShipmentCreateWithoutEmployeeInput[] | ShipmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutEmployeeInput | ShipmentCreateOrConnectWithoutEmployeeInput[]
    createMany?: ShipmentCreateManyEmployeeInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutEmployeesInput
    upsert?: CompanyUpsertWithoutEmployeesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutEmployeesInput, CompanyUpdateWithoutEmployeesInput>, CompanyUncheckedUpdateWithoutEmployeesInput>
  }

  export type ShipmentUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ShipmentCreateWithoutEmployeeInput, ShipmentUncheckedCreateWithoutEmployeeInput> | ShipmentCreateWithoutEmployeeInput[] | ShipmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutEmployeeInput | ShipmentCreateOrConnectWithoutEmployeeInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutEmployeeInput | ShipmentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ShipmentCreateManyEmployeeInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutEmployeeInput | ShipmentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutEmployeeInput | ShipmentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ShipmentCreateWithoutEmployeeInput, ShipmentUncheckedCreateWithoutEmployeeInput> | ShipmentCreateWithoutEmployeeInput[] | ShipmentUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutEmployeeInput | ShipmentCreateOrConnectWithoutEmployeeInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutEmployeeInput | ShipmentUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ShipmentCreateManyEmployeeInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutEmployeeInput | ShipmentUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutEmployeeInput | ShipmentUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutTrucksInput = {
    create?: XOR<CompanyCreateWithoutTrucksInput, CompanyUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTrucksInput
    connect?: CompanyWhereUniqueInput
  }

  export type ShipmentCreateNestedManyWithoutTruckInput = {
    create?: XOR<ShipmentCreateWithoutTruckInput, ShipmentUncheckedCreateWithoutTruckInput> | ShipmentCreateWithoutTruckInput[] | ShipmentUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutTruckInput | ShipmentCreateOrConnectWithoutTruckInput[]
    createMany?: ShipmentCreateManyTruckInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutTruckInput = {
    create?: XOR<ShipmentCreateWithoutTruckInput, ShipmentUncheckedCreateWithoutTruckInput> | ShipmentCreateWithoutTruckInput[] | ShipmentUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutTruckInput | ShipmentCreateOrConnectWithoutTruckInput[]
    createMany?: ShipmentCreateManyTruckInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanyUpdateOneRequiredWithoutTrucksNestedInput = {
    create?: XOR<CompanyCreateWithoutTrucksInput, CompanyUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutTrucksInput
    upsert?: CompanyUpsertWithoutTrucksInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutTrucksInput, CompanyUpdateWithoutTrucksInput>, CompanyUncheckedUpdateWithoutTrucksInput>
  }

  export type ShipmentUpdateManyWithoutTruckNestedInput = {
    create?: XOR<ShipmentCreateWithoutTruckInput, ShipmentUncheckedCreateWithoutTruckInput> | ShipmentCreateWithoutTruckInput[] | ShipmentUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutTruckInput | ShipmentCreateOrConnectWithoutTruckInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutTruckInput | ShipmentUpsertWithWhereUniqueWithoutTruckInput[]
    createMany?: ShipmentCreateManyTruckInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutTruckInput | ShipmentUpdateWithWhereUniqueWithoutTruckInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutTruckInput | ShipmentUpdateManyWithWhereWithoutTruckInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutTruckNestedInput = {
    create?: XOR<ShipmentCreateWithoutTruckInput, ShipmentUncheckedCreateWithoutTruckInput> | ShipmentCreateWithoutTruckInput[] | ShipmentUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutTruckInput | ShipmentCreateOrConnectWithoutTruckInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutTruckInput | ShipmentUpsertWithWhereUniqueWithoutTruckInput[]
    createMany?: ShipmentCreateManyTruckInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutTruckInput | ShipmentUpdateWithWhereUniqueWithoutTruckInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutTruckInput | ShipmentUpdateManyWithWhereWithoutTruckInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutRecipientsInput = {
    create?: XOR<CompanyCreateWithoutRecipientsInput, CompanyUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRecipientsInput
    connect?: CompanyWhereUniqueInput
  }

  export type ShipmentCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ShipmentCreateWithoutRecipientInput, ShipmentUncheckedCreateWithoutRecipientInput> | ShipmentCreateWithoutRecipientInput[] | ShipmentUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutRecipientInput | ShipmentCreateOrConnectWithoutRecipientInput[]
    createMany?: ShipmentCreateManyRecipientInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ShipmentCreateWithoutRecipientInput, ShipmentUncheckedCreateWithoutRecipientInput> | ShipmentCreateWithoutRecipientInput[] | ShipmentUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutRecipientInput | ShipmentCreateOrConnectWithoutRecipientInput[]
    createMany?: ShipmentCreateManyRecipientInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutRecipientsNestedInput = {
    create?: XOR<CompanyCreateWithoutRecipientsInput, CompanyUncheckedCreateWithoutRecipientsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutRecipientsInput
    upsert?: CompanyUpsertWithoutRecipientsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutRecipientsInput, CompanyUpdateWithoutRecipientsInput>, CompanyUncheckedUpdateWithoutRecipientsInput>
  }

  export type ShipmentUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ShipmentCreateWithoutRecipientInput, ShipmentUncheckedCreateWithoutRecipientInput> | ShipmentCreateWithoutRecipientInput[] | ShipmentUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutRecipientInput | ShipmentCreateOrConnectWithoutRecipientInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutRecipientInput | ShipmentUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ShipmentCreateManyRecipientInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutRecipientInput | ShipmentUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutRecipientInput | ShipmentUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ShipmentCreateWithoutRecipientInput, ShipmentUncheckedCreateWithoutRecipientInput> | ShipmentCreateWithoutRecipientInput[] | ShipmentUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutRecipientInput | ShipmentCreateOrConnectWithoutRecipientInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutRecipientInput | ShipmentUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ShipmentCreateManyRecipientInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutRecipientInput | ShipmentUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutRecipientInput | ShipmentUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<CompanyCreateWithoutShipmentsInput, CompanyUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutShipmentsInput
    connect?: CompanyWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<EmployeeCreateWithoutShipmentsInput, EmployeeUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutShipmentsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type TruckCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<TruckCreateWithoutShipmentsInput, TruckUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: TruckCreateOrConnectWithoutShipmentsInput
    connect?: TruckWhereUniqueInput
  }

  export type RecipientCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<RecipientCreateWithoutShipmentsInput, RecipientUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: RecipientCreateOrConnectWithoutShipmentsInput
    connect?: RecipientWhereUniqueInput
  }

  export type ShipmentEventCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput> | ShipmentEventCreateWithoutShipmentInput[] | ShipmentEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutShipmentInput | ShipmentEventCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentEventCreateManyShipmentInputEnvelope
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
  }

  export type ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput> | ShipmentEventCreateWithoutShipmentInput[] | ShipmentEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutShipmentInput | ShipmentEventCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentEventCreateManyShipmentInputEnvelope
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
  }

  export type EnumShipmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShipmentStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCargoTypeFieldUpdateOperationsInput = {
    set?: $Enums.CargoType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompanyUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<CompanyCreateWithoutShipmentsInput, CompanyUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutShipmentsInput
    upsert?: CompanyUpsertWithoutShipmentsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutShipmentsInput, CompanyUpdateWithoutShipmentsInput>, CompanyUncheckedUpdateWithoutShipmentsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<EmployeeCreateWithoutShipmentsInput, EmployeeUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutShipmentsInput
    upsert?: EmployeeUpsertWithoutShipmentsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutShipmentsInput, EmployeeUpdateWithoutShipmentsInput>, EmployeeUncheckedUpdateWithoutShipmentsInput>
  }

  export type TruckUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<TruckCreateWithoutShipmentsInput, TruckUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: TruckCreateOrConnectWithoutShipmentsInput
    upsert?: TruckUpsertWithoutShipmentsInput
    connect?: TruckWhereUniqueInput
    update?: XOR<XOR<TruckUpdateToOneWithWhereWithoutShipmentsInput, TruckUpdateWithoutShipmentsInput>, TruckUncheckedUpdateWithoutShipmentsInput>
  }

  export type RecipientUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<RecipientCreateWithoutShipmentsInput, RecipientUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: RecipientCreateOrConnectWithoutShipmentsInput
    upsert?: RecipientUpsertWithoutShipmentsInput
    connect?: RecipientWhereUniqueInput
    update?: XOR<XOR<RecipientUpdateToOneWithWhereWithoutShipmentsInput, RecipientUpdateWithoutShipmentsInput>, RecipientUncheckedUpdateWithoutShipmentsInput>
  }

  export type ShipmentEventUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput> | ShipmentEventCreateWithoutShipmentInput[] | ShipmentEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutShipmentInput | ShipmentEventCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentEventUpsertWithWhereUniqueWithoutShipmentInput | ShipmentEventUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentEventCreateManyShipmentInputEnvelope
    set?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    disconnect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    delete?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    update?: ShipmentEventUpdateWithWhereUniqueWithoutShipmentInput | ShipmentEventUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentEventUpdateManyWithWhereWithoutShipmentInput | ShipmentEventUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentEventScalarWhereInput | ShipmentEventScalarWhereInput[]
  }

  export type ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput> | ShipmentEventCreateWithoutShipmentInput[] | ShipmentEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutShipmentInput | ShipmentEventCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentEventUpsertWithWhereUniqueWithoutShipmentInput | ShipmentEventUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentEventCreateManyShipmentInputEnvelope
    set?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    disconnect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    delete?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    update?: ShipmentEventUpdateWithWhereUniqueWithoutShipmentInput | ShipmentEventUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentEventUpdateManyWithWhereWithoutShipmentInput | ShipmentEventUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentEventScalarWhereInput | ShipmentEventScalarWhereInput[]
  }

  export type ShipmentCreateNestedOneWithoutEventsInput = {
    create?: XOR<ShipmentCreateWithoutEventsInput, ShipmentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutEventsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type ShipmentUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ShipmentCreateWithoutEventsInput, ShipmentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutEventsInput
    upsert?: ShipmentUpsertWithoutEventsInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutEventsInput, ShipmentUpdateWithoutEventsInput>, ShipmentUncheckedUpdateWithoutEventsInput>
  }

  export type CompanyCreateNestedOneWithoutBalanceEventsInput = {
    create?: XOR<CompanyCreateWithoutBalanceEventsInput, CompanyUncheckedCreateWithoutBalanceEventsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBalanceEventsInput
    connect?: CompanyWhereUniqueInput
  }

  export type EnumBalanceEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.BalanceEventType
  }

  export type CompanyUpdateOneRequiredWithoutBalanceEventsNestedInput = {
    create?: XOR<CompanyCreateWithoutBalanceEventsInput, CompanyUncheckedCreateWithoutBalanceEventsInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutBalanceEventsInput
    upsert?: CompanyUpsertWithoutBalanceEventsInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutBalanceEventsInput, CompanyUpdateWithoutBalanceEventsInput>, CompanyUncheckedUpdateWithoutBalanceEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumSubscriptionPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanFilter<$PrismaModel> | $Enums.SubscriptionPlan
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPlan | EnumSubscriptionPlanFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPlan[] | ListEnumSubscriptionPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPlanWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPlanFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCargoTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoType | EnumCargoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoTypeFilter<$PrismaModel> | $Enums.CargoType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCargoTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CargoType | EnumCargoTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CargoType[] | ListEnumCargoTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCargoTypeWithAggregatesFilter<$PrismaModel> | $Enums.CargoType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCargoTypeFilter<$PrismaModel>
    _max?: NestedEnumCargoTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumBalanceEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BalanceEventType | EnumBalanceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BalanceEventType[] | ListEnumBalanceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BalanceEventType[] | ListEnumBalanceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBalanceEventTypeFilter<$PrismaModel> | $Enums.BalanceEventType
  }

  export type NestedEnumBalanceEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BalanceEventType | EnumBalanceEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BalanceEventType[] | ListEnumBalanceEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BalanceEventType[] | ListEnumBalanceEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBalanceEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.BalanceEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBalanceEventTypeFilter<$PrismaModel>
    _max?: NestedEnumBalanceEventTypeFilter<$PrismaModel>
  }

  export type CompanyCreateWithoutUserInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    trucks?: TruckCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentCreateNestedManyWithoutCompanyInput
    recipients?: RecipientCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    trucks?: TruckUncheckedCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCompanyInput
    recipients?: RecipientUncheckedCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
  }

  export type CompanyUpsertWithoutUserInput = {
    update: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCreateWithoutUserInput, CompanyUncheckedCreateWithoutUserInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUserInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUserInput, CompanyUncheckedUpdateWithoutUserInput>
  }

  export type CompanyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    trucks?: TruckUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    trucks?: TruckUncheckedUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUncheckedUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type EmployeeCreateWithoutCompanyInput = {
    id?: string
    name: string
    cnh: string
    cnhExpiration: Date | string
    cpf: string
    salary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    cnh: string
    cnhExpiration: Date | string
    cpf: string
    salary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput>
  }

  export type EmployeeCreateManyCompanyInputEnvelope = {
    data: EmployeeCreateManyCompanyInput | EmployeeCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type TruckCreateWithoutCompanyInput = {
    id?: string
    licensePlate: string
    maxPayload: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentCreateNestedManyWithoutTruckInput
  }

  export type TruckUncheckedCreateWithoutCompanyInput = {
    id?: string
    licensePlate: string
    maxPayload: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutTruckInput
  }

  export type TruckCreateOrConnectWithoutCompanyInput = {
    where: TruckWhereUniqueInput
    create: XOR<TruckCreateWithoutCompanyInput, TruckUncheckedCreateWithoutCompanyInput>
  }

  export type TruckCreateManyCompanyInputEnvelope = {
    data: TruckCreateManyCompanyInput | TruckCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutCompanyInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutShipmentsInput
    truck: TruckCreateNestedOneWithoutShipmentsInput
    recipient: RecipientCreateNestedOneWithoutShipmentsInput
    events?: ShipmentEventCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutCompanyInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeId: string
    truckId: string
    recipientId: string
    events?: ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutCompanyInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput>
  }

  export type ShipmentCreateManyCompanyInputEnvelope = {
    data: ShipmentCreateManyCompanyInput | ShipmentCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type RecipientCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    phone: string
    fullAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    phone: string
    fullAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type RecipientCreateOrConnectWithoutCompanyInput = {
    where: RecipientWhereUniqueInput
    create: XOR<RecipientCreateWithoutCompanyInput, RecipientUncheckedCreateWithoutCompanyInput>
  }

  export type RecipientCreateManyCompanyInputEnvelope = {
    data: RecipientCreateManyCompanyInput | RecipientCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type BalanceEventCreateWithoutCompanyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    type: $Enums.BalanceEventType
    occurredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalanceEventUncheckedCreateWithoutCompanyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    type: $Enums.BalanceEventType
    occurredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalanceEventCreateOrConnectWithoutCompanyInput = {
    where: BalanceEventWhereUniqueInput
    create: XOR<BalanceEventCreateWithoutCompanyInput, BalanceEventUncheckedCreateWithoutCompanyInput>
  }

  export type BalanceEventCreateManyCompanyInputEnvelope = {
    data: BalanceEventCreateManyCompanyInput | BalanceEventCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCompanyInput = {
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutCompanyInput, EmployeeUncheckedUpdateWithoutCompanyInput>
    create: XOR<EmployeeCreateWithoutCompanyInput, EmployeeUncheckedCreateWithoutCompanyInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutCompanyInput, EmployeeUncheckedUpdateWithoutCompanyInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutCompanyInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutCompanyInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    name?: StringFilter<"Employee"> | string
    cnh?: StringFilter<"Employee"> | string
    cnhExpiration?: DateTimeFilter<"Employee"> | Date | string
    cpf?: StringFilter<"Employee"> | string
    salary?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    companyId?: StringFilter<"Employee"> | string
  }

  export type TruckUpsertWithWhereUniqueWithoutCompanyInput = {
    where: TruckWhereUniqueInput
    update: XOR<TruckUpdateWithoutCompanyInput, TruckUncheckedUpdateWithoutCompanyInput>
    create: XOR<TruckCreateWithoutCompanyInput, TruckUncheckedCreateWithoutCompanyInput>
  }

  export type TruckUpdateWithWhereUniqueWithoutCompanyInput = {
    where: TruckWhereUniqueInput
    data: XOR<TruckUpdateWithoutCompanyInput, TruckUncheckedUpdateWithoutCompanyInput>
  }

  export type TruckUpdateManyWithWhereWithoutCompanyInput = {
    where: TruckScalarWhereInput
    data: XOR<TruckUpdateManyMutationInput, TruckUncheckedUpdateManyWithoutCompanyInput>
  }

  export type TruckScalarWhereInput = {
    AND?: TruckScalarWhereInput | TruckScalarWhereInput[]
    OR?: TruckScalarWhereInput[]
    NOT?: TruckScalarWhereInput | TruckScalarWhereInput[]
    id?: StringFilter<"Truck"> | string
    licensePlate?: StringFilter<"Truck"> | string
    maxPayload?: FloatFilter<"Truck"> | number
    createdAt?: DateTimeFilter<"Truck"> | Date | string
    updatedAt?: DateTimeFilter<"Truck"> | Date | string
    companyId?: StringFilter<"Truck"> | string
  }

  export type ShipmentUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutCompanyInput, ShipmentUncheckedUpdateWithoutCompanyInput>
    create: XOR<ShipmentCreateWithoutCompanyInput, ShipmentUncheckedCreateWithoutCompanyInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutCompanyInput, ShipmentUncheckedUpdateWithoutCompanyInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutCompanyInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ShipmentScalarWhereInput = {
    AND?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    OR?: ShipmentScalarWhereInput[]
    NOT?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    id?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    startLat?: FloatFilter<"Shipment"> | number
    startLng?: FloatFilter<"Shipment"> | number
    startAddress?: StringFilter<"Shipment"> | string
    deliveryLat?: FloatFilter<"Shipment"> | number
    deliveryLng?: FloatFilter<"Shipment"> | number
    deliveryAddress?: StringFilter<"Shipment"> | string
    currentLat?: FloatNullableFilter<"Shipment"> | number | null
    currentLng?: FloatNullableFilter<"Shipment"> | number | null
    cargoType?: EnumCargoTypeFilter<"Shipment"> | $Enums.CargoType
    weight?: FloatFilter<"Shipment"> | number
    gasSpent?: DecimalFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFilter<"Shipment"> | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFilter<"Shipment"> | Date | string
    endDate?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    companyId?: StringFilter<"Shipment"> | string
    employeeId?: StringFilter<"Shipment"> | string
    truckId?: StringFilter<"Shipment"> | string
    recipientId?: StringFilter<"Shipment"> | string
  }

  export type RecipientUpsertWithWhereUniqueWithoutCompanyInput = {
    where: RecipientWhereUniqueInput
    update: XOR<RecipientUpdateWithoutCompanyInput, RecipientUncheckedUpdateWithoutCompanyInput>
    create: XOR<RecipientCreateWithoutCompanyInput, RecipientUncheckedCreateWithoutCompanyInput>
  }

  export type RecipientUpdateWithWhereUniqueWithoutCompanyInput = {
    where: RecipientWhereUniqueInput
    data: XOR<RecipientUpdateWithoutCompanyInput, RecipientUncheckedUpdateWithoutCompanyInput>
  }

  export type RecipientUpdateManyWithWhereWithoutCompanyInput = {
    where: RecipientScalarWhereInput
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyWithoutCompanyInput>
  }

  export type RecipientScalarWhereInput = {
    AND?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
    OR?: RecipientScalarWhereInput[]
    NOT?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
    id?: StringFilter<"Recipient"> | string
    name?: StringFilter<"Recipient"> | string
    email?: StringFilter<"Recipient"> | string
    phone?: StringFilter<"Recipient"> | string
    fullAddress?: StringFilter<"Recipient"> | string
    createdAt?: DateTimeFilter<"Recipient"> | Date | string
    updatedAt?: DateTimeFilter<"Recipient"> | Date | string
    companyId?: StringFilter<"Recipient"> | string
  }

  export type BalanceEventUpsertWithWhereUniqueWithoutCompanyInput = {
    where: BalanceEventWhereUniqueInput
    update: XOR<BalanceEventUpdateWithoutCompanyInput, BalanceEventUncheckedUpdateWithoutCompanyInput>
    create: XOR<BalanceEventCreateWithoutCompanyInput, BalanceEventUncheckedCreateWithoutCompanyInput>
  }

  export type BalanceEventUpdateWithWhereUniqueWithoutCompanyInput = {
    where: BalanceEventWhereUniqueInput
    data: XOR<BalanceEventUpdateWithoutCompanyInput, BalanceEventUncheckedUpdateWithoutCompanyInput>
  }

  export type BalanceEventUpdateManyWithWhereWithoutCompanyInput = {
    where: BalanceEventScalarWhereInput
    data: XOR<BalanceEventUpdateManyMutationInput, BalanceEventUncheckedUpdateManyWithoutCompanyInput>
  }

  export type BalanceEventScalarWhereInput = {
    AND?: BalanceEventScalarWhereInput | BalanceEventScalarWhereInput[]
    OR?: BalanceEventScalarWhereInput[]
    NOT?: BalanceEventScalarWhereInput | BalanceEventScalarWhereInput[]
    id?: StringFilter<"BalanceEvent"> | string
    amount?: DecimalFilter<"BalanceEvent"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"BalanceEvent"> | string
    type?: EnumBalanceEventTypeFilter<"BalanceEvent"> | $Enums.BalanceEventType
    occurredAt?: DateTimeFilter<"BalanceEvent"> | Date | string
    createdAt?: DateTimeFilter<"BalanceEvent"> | Date | string
    updatedAt?: DateTimeFilter<"BalanceEvent"> | Date | string
    companyId?: StringFilter<"BalanceEvent"> | string
  }

  export type CompanyCreateWithoutEmployeesInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyInput
    trucks?: TruckCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentCreateNestedManyWithoutCompanyInput
    recipients?: RecipientCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutEmployeesInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    trucks?: TruckUncheckedCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCompanyInput
    recipients?: RecipientUncheckedCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutEmployeesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
  }

  export type ShipmentCreateWithoutEmployeeInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutShipmentsInput
    truck: TruckCreateNestedOneWithoutShipmentsInput
    recipient: RecipientCreateNestedOneWithoutShipmentsInput
    events?: ShipmentEventCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutEmployeeInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    truckId: string
    recipientId: string
    events?: ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutEmployeeInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutEmployeeInput, ShipmentUncheckedCreateWithoutEmployeeInput>
  }

  export type ShipmentCreateManyEmployeeInputEnvelope = {
    data: ShipmentCreateManyEmployeeInput | ShipmentCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutEmployeesInput = {
    update: XOR<CompanyUpdateWithoutEmployeesInput, CompanyUncheckedUpdateWithoutEmployeesInput>
    create: XOR<CompanyCreateWithoutEmployeesInput, CompanyUncheckedCreateWithoutEmployeesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutEmployeesInput, CompanyUncheckedUpdateWithoutEmployeesInput>
  }

  export type CompanyUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    trucks?: TruckUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    trucks?: TruckUncheckedUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUncheckedUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ShipmentUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutEmployeeInput, ShipmentUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ShipmentCreateWithoutEmployeeInput, ShipmentUncheckedCreateWithoutEmployeeInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutEmployeeInput, ShipmentUncheckedUpdateWithoutEmployeeInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutEmployeeInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type CompanyCreateWithoutTrucksInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentCreateNestedManyWithoutCompanyInput
    recipients?: RecipientCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutTrucksInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCompanyInput
    recipients?: RecipientUncheckedCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutTrucksInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutTrucksInput, CompanyUncheckedCreateWithoutTrucksInput>
  }

  export type ShipmentCreateWithoutTruckInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutShipmentsInput
    employee: EmployeeCreateNestedOneWithoutShipmentsInput
    recipient: RecipientCreateNestedOneWithoutShipmentsInput
    events?: ShipmentEventCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutTruckInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    employeeId: string
    recipientId: string
    events?: ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutTruckInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutTruckInput, ShipmentUncheckedCreateWithoutTruckInput>
  }

  export type ShipmentCreateManyTruckInputEnvelope = {
    data: ShipmentCreateManyTruckInput | ShipmentCreateManyTruckInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutTrucksInput = {
    update: XOR<CompanyUpdateWithoutTrucksInput, CompanyUncheckedUpdateWithoutTrucksInput>
    create: XOR<CompanyCreateWithoutTrucksInput, CompanyUncheckedCreateWithoutTrucksInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutTrucksInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutTrucksInput, CompanyUncheckedUpdateWithoutTrucksInput>
  }

  export type CompanyUpdateWithoutTrucksInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutTrucksInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUncheckedUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ShipmentUpsertWithWhereUniqueWithoutTruckInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutTruckInput, ShipmentUncheckedUpdateWithoutTruckInput>
    create: XOR<ShipmentCreateWithoutTruckInput, ShipmentUncheckedCreateWithoutTruckInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutTruckInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutTruckInput, ShipmentUncheckedUpdateWithoutTruckInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutTruckInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutTruckInput>
  }

  export type CompanyCreateWithoutRecipientsInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    trucks?: TruckCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutRecipientsInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    trucks?: TruckUncheckedCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutRecipientsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutRecipientsInput, CompanyUncheckedCreateWithoutRecipientsInput>
  }

  export type ShipmentCreateWithoutRecipientInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutShipmentsInput
    employee: EmployeeCreateNestedOneWithoutShipmentsInput
    truck: TruckCreateNestedOneWithoutShipmentsInput
    events?: ShipmentEventCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutRecipientInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    employeeId: string
    truckId: string
    events?: ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutRecipientInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutRecipientInput, ShipmentUncheckedCreateWithoutRecipientInput>
  }

  export type ShipmentCreateManyRecipientInputEnvelope = {
    data: ShipmentCreateManyRecipientInput | ShipmentCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutRecipientsInput = {
    update: XOR<CompanyUpdateWithoutRecipientsInput, CompanyUncheckedUpdateWithoutRecipientsInput>
    create: XOR<CompanyCreateWithoutRecipientsInput, CompanyUncheckedCreateWithoutRecipientsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutRecipientsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutRecipientsInput, CompanyUncheckedUpdateWithoutRecipientsInput>
  }

  export type CompanyUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    trucks?: TruckUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutRecipientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    trucks?: TruckUncheckedUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ShipmentUpsertWithWhereUniqueWithoutRecipientInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutRecipientInput, ShipmentUncheckedUpdateWithoutRecipientInput>
    create: XOR<ShipmentCreateWithoutRecipientInput, ShipmentUncheckedCreateWithoutRecipientInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutRecipientInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutRecipientInput, ShipmentUncheckedUpdateWithoutRecipientInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutRecipientInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutRecipientInput>
  }

  export type CompanyCreateWithoutShipmentsInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    trucks?: TruckCreateNestedManyWithoutCompanyInput
    recipients?: RecipientCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutShipmentsInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    trucks?: TruckUncheckedCreateNestedManyWithoutCompanyInput
    recipients?: RecipientUncheckedCreateNestedManyWithoutCompanyInput
    balanceEvents?: BalanceEventUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutShipmentsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutShipmentsInput, CompanyUncheckedCreateWithoutShipmentsInput>
  }

  export type EmployeeCreateWithoutShipmentsInput = {
    id?: string
    name: string
    cnh: string
    cnhExpiration: Date | string
    cpf: string
    salary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutShipmentsInput = {
    id?: string
    name: string
    cnh: string
    cnhExpiration: Date | string
    cpf: string
    salary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type EmployeeCreateOrConnectWithoutShipmentsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutShipmentsInput, EmployeeUncheckedCreateWithoutShipmentsInput>
  }

  export type TruckCreateWithoutShipmentsInput = {
    id?: string
    licensePlate: string
    maxPayload: number
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutTrucksInput
  }

  export type TruckUncheckedCreateWithoutShipmentsInput = {
    id?: string
    licensePlate: string
    maxPayload: number
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type TruckCreateOrConnectWithoutShipmentsInput = {
    where: TruckWhereUniqueInput
    create: XOR<TruckCreateWithoutShipmentsInput, TruckUncheckedCreateWithoutShipmentsInput>
  }

  export type RecipientCreateWithoutShipmentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    fullAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutRecipientsInput
  }

  export type RecipientUncheckedCreateWithoutShipmentsInput = {
    id?: string
    name: string
    email: string
    phone: string
    fullAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
  }

  export type RecipientCreateOrConnectWithoutShipmentsInput = {
    where: RecipientWhereUniqueInput
    create: XOR<RecipientCreateWithoutShipmentsInput, RecipientUncheckedCreateWithoutShipmentsInput>
  }

  export type ShipmentEventCreateWithoutShipmentInput = {
    id?: string
    latitude: number
    longitude: number
    description: string
    recordedAt?: Date | string
  }

  export type ShipmentEventUncheckedCreateWithoutShipmentInput = {
    id?: string
    latitude: number
    longitude: number
    description: string
    recordedAt?: Date | string
  }

  export type ShipmentEventCreateOrConnectWithoutShipmentInput = {
    where: ShipmentEventWhereUniqueInput
    create: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentEventCreateManyShipmentInputEnvelope = {
    data: ShipmentEventCreateManyShipmentInput | ShipmentEventCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutShipmentsInput = {
    update: XOR<CompanyUpdateWithoutShipmentsInput, CompanyUncheckedUpdateWithoutShipmentsInput>
    create: XOR<CompanyCreateWithoutShipmentsInput, CompanyUncheckedCreateWithoutShipmentsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutShipmentsInput, CompanyUncheckedUpdateWithoutShipmentsInput>
  }

  export type CompanyUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    trucks?: TruckUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    trucks?: TruckUncheckedUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUncheckedUpdateManyWithoutCompanyNestedInput
    balanceEvents?: BalanceEventUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type EmployeeUpsertWithoutShipmentsInput = {
    update: XOR<EmployeeUpdateWithoutShipmentsInput, EmployeeUncheckedUpdateWithoutShipmentsInput>
    create: XOR<EmployeeCreateWithoutShipmentsInput, EmployeeUncheckedCreateWithoutShipmentsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutShipmentsInput, EmployeeUncheckedUpdateWithoutShipmentsInput>
  }

  export type EmployeeUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnh?: StringFieldUpdateOperationsInput | string
    cnhExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnh?: StringFieldUpdateOperationsInput | string
    cnhExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type TruckUpsertWithoutShipmentsInput = {
    update: XOR<TruckUpdateWithoutShipmentsInput, TruckUncheckedUpdateWithoutShipmentsInput>
    create: XOR<TruckCreateWithoutShipmentsInput, TruckUncheckedCreateWithoutShipmentsInput>
    where?: TruckWhereInput
  }

  export type TruckUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: TruckWhereInput
    data: XOR<TruckUpdateWithoutShipmentsInput, TruckUncheckedUpdateWithoutShipmentsInput>
  }

  export type TruckUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    maxPayload?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutTrucksNestedInput
  }

  export type TruckUncheckedUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    maxPayload?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipientUpsertWithoutShipmentsInput = {
    update: XOR<RecipientUpdateWithoutShipmentsInput, RecipientUncheckedUpdateWithoutShipmentsInput>
    create: XOR<RecipientCreateWithoutShipmentsInput, RecipientUncheckedCreateWithoutShipmentsInput>
    where?: RecipientWhereInput
  }

  export type RecipientUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: RecipientWhereInput
    data: XOR<RecipientUpdateWithoutShipmentsInput, RecipientUncheckedUpdateWithoutShipmentsInput>
  }

  export type RecipientUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutRecipientsNestedInput
  }

  export type RecipientUncheckedUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentEventUpsertWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentEventWhereUniqueInput
    update: XOR<ShipmentEventUpdateWithoutShipmentInput, ShipmentEventUncheckedUpdateWithoutShipmentInput>
    create: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentEventUpdateWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentEventWhereUniqueInput
    data: XOR<ShipmentEventUpdateWithoutShipmentInput, ShipmentEventUncheckedUpdateWithoutShipmentInput>
  }

  export type ShipmentEventUpdateManyWithWhereWithoutShipmentInput = {
    where: ShipmentEventScalarWhereInput
    data: XOR<ShipmentEventUpdateManyMutationInput, ShipmentEventUncheckedUpdateManyWithoutShipmentInput>
  }

  export type ShipmentEventScalarWhereInput = {
    AND?: ShipmentEventScalarWhereInput | ShipmentEventScalarWhereInput[]
    OR?: ShipmentEventScalarWhereInput[]
    NOT?: ShipmentEventScalarWhereInput | ShipmentEventScalarWhereInput[]
    id?: StringFilter<"ShipmentEvent"> | string
    latitude?: FloatFilter<"ShipmentEvent"> | number
    longitude?: FloatFilter<"ShipmentEvent"> | number
    description?: StringFilter<"ShipmentEvent"> | string
    recordedAt?: DateTimeFilter<"ShipmentEvent"> | Date | string
    shipmentId?: StringFilter<"ShipmentEvent"> | string
  }

  export type ShipmentCreateWithoutEventsInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyCreateNestedOneWithoutShipmentsInput
    employee: EmployeeCreateNestedOneWithoutShipmentsInput
    truck: TruckCreateNestedOneWithoutShipmentsInput
    recipient: RecipientCreateNestedOneWithoutShipmentsInput
  }

  export type ShipmentUncheckedCreateWithoutEventsInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    employeeId: string
    truckId: string
    recipientId: string
  }

  export type ShipmentCreateOrConnectWithoutEventsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutEventsInput, ShipmentUncheckedCreateWithoutEventsInput>
  }

  export type ShipmentUpsertWithoutEventsInput = {
    update: XOR<ShipmentUpdateWithoutEventsInput, ShipmentUncheckedUpdateWithoutEventsInput>
    create: XOR<ShipmentCreateWithoutEventsInput, ShipmentUncheckedCreateWithoutEventsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutEventsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutEventsInput, ShipmentUncheckedUpdateWithoutEventsInput>
  }

  export type ShipmentUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutShipmentsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutShipmentsNestedInput
    truck?: TruckUpdateOneRequiredWithoutShipmentsNestedInput
    recipient?: RecipientUpdateOneRequiredWithoutShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    truckId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyCreateWithoutBalanceEventsInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCompanyInput
    employees?: EmployeeCreateNestedManyWithoutCompanyInput
    trucks?: TruckCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentCreateNestedManyWithoutCompanyInput
    recipients?: RecipientCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutBalanceEventsInput = {
    id?: string
    tradeName: string
    legalName: string
    taxId: string
    balance?: Decimal | DecimalJsLike | number | string
    supportEmail: string
    mainPhone: string
    subscriptionPlan?: $Enums.SubscriptionPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    employees?: EmployeeUncheckedCreateNestedManyWithoutCompanyInput
    trucks?: TruckUncheckedCreateNestedManyWithoutCompanyInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCompanyInput
    recipients?: RecipientUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutBalanceEventsInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutBalanceEventsInput, CompanyUncheckedCreateWithoutBalanceEventsInput>
  }

  export type CompanyUpsertWithoutBalanceEventsInput = {
    update: XOR<CompanyUpdateWithoutBalanceEventsInput, CompanyUncheckedUpdateWithoutBalanceEventsInput>
    create: XOR<CompanyCreateWithoutBalanceEventsInput, CompanyUncheckedCreateWithoutBalanceEventsInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutBalanceEventsInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutBalanceEventsInput, CompanyUncheckedUpdateWithoutBalanceEventsInput>
  }

  export type CompanyUpdateWithoutBalanceEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    employees?: EmployeeUpdateManyWithoutCompanyNestedInput
    trucks?: TruckUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutBalanceEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    legalName?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    supportEmail?: StringFieldUpdateOperationsInput | string
    mainPhone?: StringFieldUpdateOperationsInput | string
    subscriptionPlan?: EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    employees?: EmployeeUncheckedUpdateManyWithoutCompanyNestedInput
    trucks?: TruckUncheckedUpdateManyWithoutCompanyNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutCompanyNestedInput
    recipients?: RecipientUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type EmployeeCreateManyCompanyInput = {
    id?: string
    name: string
    cnh: string
    cnhExpiration: Date | string
    cpf: string
    salary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TruckCreateManyCompanyInput = {
    id?: string
    licensePlate: string
    maxPayload: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateManyCompanyInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employeeId: string
    truckId: string
    recipientId: string
  }

  export type RecipientCreateManyCompanyInput = {
    id?: string
    name: string
    email: string
    phone: string
    fullAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalanceEventCreateManyCompanyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    description: string
    type: $Enums.BalanceEventType
    occurredAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnh?: StringFieldUpdateOperationsInput | string
    cnhExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnh?: StringFieldUpdateOperationsInput | string
    cnhExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnh?: StringFieldUpdateOperationsInput | string
    cnhExpiration?: DateTimeFieldUpdateOperationsInput | Date | string
    cpf?: StringFieldUpdateOperationsInput | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TruckUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    maxPayload?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUpdateManyWithoutTruckNestedInput
  }

  export type TruckUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    maxPayload?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutTruckNestedInput
  }

  export type TruckUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    maxPayload?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutShipmentsNestedInput
    truck?: TruckUpdateOneRequiredWithoutShipmentsNestedInput
    recipient?: RecipientUpdateOneRequiredWithoutShipmentsNestedInput
    events?: ShipmentEventUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    truckId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    events?: ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    truckId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
  }

  export type RecipientUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceEventUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumBalanceEventTypeFieldUpdateOperationsInput | $Enums.BalanceEventType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceEventUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumBalanceEventTypeFieldUpdateOperationsInput | $Enums.BalanceEventType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceEventUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumBalanceEventTypeFieldUpdateOperationsInput | $Enums.BalanceEventType
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCreateManyEmployeeInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    truckId: string
    recipientId: string
  }

  export type ShipmentUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutShipmentsNestedInput
    truck?: TruckUpdateOneRequiredWithoutShipmentsNestedInput
    recipient?: RecipientUpdateOneRequiredWithoutShipmentsNestedInput
    events?: ShipmentEventUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    truckId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    events?: ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    truckId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentCreateManyTruckInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    employeeId: string
    recipientId: string
  }

  export type ShipmentUpdateWithoutTruckInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutShipmentsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutShipmentsNestedInput
    recipient?: RecipientUpdateOneRequiredWithoutShipmentsNestedInput
    events?: ShipmentEventUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutTruckInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    events?: ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutTruckInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentCreateManyRecipientInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    startLat: number
    startLng: number
    startAddress: string
    deliveryLat: number
    deliveryLng: number
    deliveryAddress: string
    currentLat?: number | null
    currentLng?: number | null
    cargoType: $Enums.CargoType
    weight: number
    gasSpent?: Decimal | DecimalJsLike | number | string
    estimatedProfit?: Decimal | DecimalJsLike | number | string
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId: string
    employeeId: string
    truckId: string
  }

  export type ShipmentUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutShipmentsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutShipmentsNestedInput
    truck?: TruckUpdateOneRequiredWithoutShipmentsNestedInput
    events?: ShipmentEventUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    truckId?: StringFieldUpdateOperationsInput | string
    events?: ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    startLat?: FloatFieldUpdateOperationsInput | number
    startLng?: FloatFieldUpdateOperationsInput | number
    startAddress?: StringFieldUpdateOperationsInput | string
    deliveryLat?: FloatFieldUpdateOperationsInput | number
    deliveryLng?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    currentLat?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLng?: NullableFloatFieldUpdateOperationsInput | number | null
    cargoType?: EnumCargoTypeFieldUpdateOperationsInput | $Enums.CargoType
    weight?: FloatFieldUpdateOperationsInput | number
    gasSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedProfit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    truckId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentEventCreateManyShipmentInput = {
    id?: string
    latitude: number
    longitude: number
    description: string
    recordedAt?: Date | string
  }

  export type ShipmentEventUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentEventUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentEventUncheckedUpdateManyWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
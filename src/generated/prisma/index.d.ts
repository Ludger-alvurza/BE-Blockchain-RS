
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model patients
 * 
 */
export type patients = $Result.DefaultSelection<Prisma.$patientsPayload>
/**
 * Model providers
 * 
 */
export type providers = $Result.DefaultSelection<Prisma.$providersPayload>
/**
 * Model doctors
 * 
 */
export type doctors = $Result.DefaultSelection<Prisma.$doctorsPayload>
/**
 * Model visits
 * 
 */
export type visits = $Result.DefaultSelection<Prisma.$visitsPayload>
/**
 * Model diagnoses
 * 
 */
export type diagnoses = $Result.DefaultSelection<Prisma.$diagnosesPayload>
/**
 * Model prescriptions
 * 
 */
export type prescriptions = $Result.DefaultSelection<Prisma.$prescriptionsPayload>
/**
 * Model labs
 * 
 */
export type labs = $Result.DefaultSelection<Prisma.$labsPayload>
/**
 * Model files
 * 
 */
export type files = $Result.DefaultSelection<Prisma.$filesPayload>
/**
 * Model access_controls
 * 
 */
export type access_controls = $Result.DefaultSelection<Prisma.$access_controlsPayload>
/**
 * Model audit_access_logs
 * 
 */
export type audit_access_logs = $Result.DefaultSelection<Prisma.$audit_access_logsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Patients
 * const patients = await prisma.patients.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Patients
   * const patients = await prisma.patients.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.patients`: Exposes CRUD operations for the **patients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patients.findMany()
    * ```
    */
  get patients(): Prisma.patientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providers`: Exposes CRUD operations for the **providers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.providers.findMany()
    * ```
    */
  get providers(): Prisma.providersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctors`: Exposes CRUD operations for the **doctors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctors.findMany()
    * ```
    */
  get doctors(): Prisma.doctorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visits`: Exposes CRUD operations for the **visits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visits
    * const visits = await prisma.visits.findMany()
    * ```
    */
  get visits(): Prisma.visitsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnoses`: Exposes CRUD operations for the **diagnoses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnoses
    * const diagnoses = await prisma.diagnoses.findMany()
    * ```
    */
  get diagnoses(): Prisma.diagnosesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescriptions`: Exposes CRUD operations for the **prescriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescriptions.findMany()
    * ```
    */
  get prescriptions(): Prisma.prescriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.labs`: Exposes CRUD operations for the **labs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labs
    * const labs = await prisma.labs.findMany()
    * ```
    */
  get labs(): Prisma.labsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.files`: Exposes CRUD operations for the **files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.access_controls`: Exposes CRUD operations for the **access_controls** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Access_controls
    * const access_controls = await prisma.access_controls.findMany()
    * ```
    */
  get access_controls(): Prisma.access_controlsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audit_access_logs`: Exposes CRUD operations for the **audit_access_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_access_logs
    * const audit_access_logs = await prisma.audit_access_logs.findMany()
    * ```
    */
  get audit_access_logs(): Prisma.audit_access_logsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    patients: 'patients',
    providers: 'providers',
    doctors: 'doctors',
    visits: 'visits',
    diagnoses: 'diagnoses',
    prescriptions: 'prescriptions',
    labs: 'labs',
    files: 'files',
    access_controls: 'access_controls',
    audit_access_logs: 'audit_access_logs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "patients" | "providers" | "doctors" | "visits" | "diagnoses" | "prescriptions" | "labs" | "files" | "access_controls" | "audit_access_logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      patients: {
        payload: Prisma.$patientsPayload<ExtArgs>
        fields: Prisma.patientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          findFirst: {
            args: Prisma.patientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          findMany: {
            args: Prisma.patientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          create: {
            args: Prisma.patientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          createMany: {
            args: Prisma.patientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.patientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          delete: {
            args: Prisma.patientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          update: {
            args: Prisma.patientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          deleteMany: {
            args: Prisma.patientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.patientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>[]
          }
          upsert: {
            args: Prisma.patientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientsPayload>
          }
          aggregate: {
            args: Prisma.PatientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatients>
          }
          groupBy: {
            args: Prisma.patientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.patientsCountArgs<ExtArgs>
            result: $Utils.Optional<PatientsCountAggregateOutputType> | number
          }
        }
      }
      providers: {
        payload: Prisma.$providersPayload<ExtArgs>
        fields: Prisma.providersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.providersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.providersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          findFirst: {
            args: Prisma.providersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.providersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          findMany: {
            args: Prisma.providersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>[]
          }
          create: {
            args: Prisma.providersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          createMany: {
            args: Prisma.providersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.providersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>[]
          }
          delete: {
            args: Prisma.providersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          update: {
            args: Prisma.providersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          deleteMany: {
            args: Prisma.providersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.providersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.providersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>[]
          }
          upsert: {
            args: Prisma.providersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$providersPayload>
          }
          aggregate: {
            args: Prisma.ProvidersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviders>
          }
          groupBy: {
            args: Prisma.providersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvidersGroupByOutputType>[]
          }
          count: {
            args: Prisma.providersCountArgs<ExtArgs>
            result: $Utils.Optional<ProvidersCountAggregateOutputType> | number
          }
        }
      }
      doctors: {
        payload: Prisma.$doctorsPayload<ExtArgs>
        fields: Prisma.doctorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.doctorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.doctorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          findFirst: {
            args: Prisma.doctorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.doctorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          findMany: {
            args: Prisma.doctorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>[]
          }
          create: {
            args: Prisma.doctorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          createMany: {
            args: Prisma.doctorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.doctorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>[]
          }
          delete: {
            args: Prisma.doctorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          update: {
            args: Prisma.doctorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          deleteMany: {
            args: Prisma.doctorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.doctorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.doctorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>[]
          }
          upsert: {
            args: Prisma.doctorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$doctorsPayload>
          }
          aggregate: {
            args: Prisma.DoctorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctors>
          }
          groupBy: {
            args: Prisma.doctorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.doctorsCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorsCountAggregateOutputType> | number
          }
        }
      }
      visits: {
        payload: Prisma.$visitsPayload<ExtArgs>
        fields: Prisma.visitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.visitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.visitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitsPayload>
          }
          findFirst: {
            args: Prisma.visitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.visitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitsPayload>
          }
          findMany: {
            args: Prisma.visitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitsPayload>[]
          }
          create: {
            args: Prisma.visitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitsPayload>
          }
          createMany: {
            args: Prisma.visitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.visitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitsPayload>[]
          }
          delete: {
            args: Prisma.visitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitsPayload>
          }
          update: {
            args: Prisma.visitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitsPayload>
          }
          deleteMany: {
            args: Prisma.visitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.visitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.visitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitsPayload>[]
          }
          upsert: {
            args: Prisma.visitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitsPayload>
          }
          aggregate: {
            args: Prisma.VisitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisits>
          }
          groupBy: {
            args: Prisma.visitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.visitsCountArgs<ExtArgs>
            result: $Utils.Optional<VisitsCountAggregateOutputType> | number
          }
        }
      }
      diagnoses: {
        payload: Prisma.$diagnosesPayload<ExtArgs>
        fields: Prisma.diagnosesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.diagnosesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.diagnosesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosesPayload>
          }
          findFirst: {
            args: Prisma.diagnosesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.diagnosesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosesPayload>
          }
          findMany: {
            args: Prisma.diagnosesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosesPayload>[]
          }
          create: {
            args: Prisma.diagnosesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosesPayload>
          }
          createMany: {
            args: Prisma.diagnosesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.diagnosesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosesPayload>[]
          }
          delete: {
            args: Prisma.diagnosesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosesPayload>
          }
          update: {
            args: Prisma.diagnosesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosesPayload>
          }
          deleteMany: {
            args: Prisma.diagnosesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.diagnosesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.diagnosesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosesPayload>[]
          }
          upsert: {
            args: Prisma.diagnosesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diagnosesPayload>
          }
          aggregate: {
            args: Prisma.DiagnosesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnoses>
          }
          groupBy: {
            args: Prisma.diagnosesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosesGroupByOutputType>[]
          }
          count: {
            args: Prisma.diagnosesCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosesCountAggregateOutputType> | number
          }
        }
      }
      prescriptions: {
        payload: Prisma.$prescriptionsPayload<ExtArgs>
        fields: Prisma.prescriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prescriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prescriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionsPayload>
          }
          findFirst: {
            args: Prisma.prescriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prescriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionsPayload>
          }
          findMany: {
            args: Prisma.prescriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionsPayload>[]
          }
          create: {
            args: Prisma.prescriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionsPayload>
          }
          createMany: {
            args: Prisma.prescriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prescriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionsPayload>[]
          }
          delete: {
            args: Prisma.prescriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionsPayload>
          }
          update: {
            args: Prisma.prescriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionsPayload>
          }
          deleteMany: {
            args: Prisma.prescriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prescriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prescriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionsPayload>[]
          }
          upsert: {
            args: Prisma.prescriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionsPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescriptions>
          }
          groupBy: {
            args: Prisma.prescriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.prescriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionsCountAggregateOutputType> | number
          }
        }
      }
      labs: {
        payload: Prisma.$labsPayload<ExtArgs>
        fields: Prisma.labsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.labsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.labsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labsPayload>
          }
          findFirst: {
            args: Prisma.labsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.labsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labsPayload>
          }
          findMany: {
            args: Prisma.labsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labsPayload>[]
          }
          create: {
            args: Prisma.labsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labsPayload>
          }
          createMany: {
            args: Prisma.labsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.labsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labsPayload>[]
          }
          delete: {
            args: Prisma.labsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labsPayload>
          }
          update: {
            args: Prisma.labsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labsPayload>
          }
          deleteMany: {
            args: Prisma.labsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.labsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.labsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labsPayload>[]
          }
          upsert: {
            args: Prisma.labsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$labsPayload>
          }
          aggregate: {
            args: Prisma.LabsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabs>
          }
          groupBy: {
            args: Prisma.labsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabsGroupByOutputType>[]
          }
          count: {
            args: Prisma.labsCountArgs<ExtArgs>
            result: $Utils.Optional<LabsCountAggregateOutputType> | number
          }
        }
      }
      files: {
        payload: Prisma.$filesPayload<ExtArgs>
        fields: Prisma.filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          findFirst: {
            args: Prisma.filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          findMany: {
            args: Prisma.filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          create: {
            args: Prisma.filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          createMany: {
            args: Prisma.filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          delete: {
            args: Prisma.filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          update: {
            args: Prisma.filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          deleteMany: {
            args: Prisma.filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          upsert: {
            args: Prisma.filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          aggregate: {
            args: Prisma.FilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiles>
          }
          groupBy: {
            args: Prisma.filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.filesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesCountAggregateOutputType> | number
          }
        }
      }
      access_controls: {
        payload: Prisma.$access_controlsPayload<ExtArgs>
        fields: Prisma.access_controlsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.access_controlsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_controlsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.access_controlsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_controlsPayload>
          }
          findFirst: {
            args: Prisma.access_controlsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_controlsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.access_controlsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_controlsPayload>
          }
          findMany: {
            args: Prisma.access_controlsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_controlsPayload>[]
          }
          create: {
            args: Prisma.access_controlsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_controlsPayload>
          }
          createMany: {
            args: Prisma.access_controlsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.access_controlsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_controlsPayload>[]
          }
          delete: {
            args: Prisma.access_controlsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_controlsPayload>
          }
          update: {
            args: Prisma.access_controlsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_controlsPayload>
          }
          deleteMany: {
            args: Prisma.access_controlsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.access_controlsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.access_controlsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_controlsPayload>[]
          }
          upsert: {
            args: Prisma.access_controlsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$access_controlsPayload>
          }
          aggregate: {
            args: Prisma.Access_controlsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccess_controls>
          }
          groupBy: {
            args: Prisma.access_controlsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Access_controlsGroupByOutputType>[]
          }
          count: {
            args: Prisma.access_controlsCountArgs<ExtArgs>
            result: $Utils.Optional<Access_controlsCountAggregateOutputType> | number
          }
        }
      }
      audit_access_logs: {
        payload: Prisma.$audit_access_logsPayload<ExtArgs>
        fields: Prisma.audit_access_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.audit_access_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_access_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.audit_access_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_access_logsPayload>
          }
          findFirst: {
            args: Prisma.audit_access_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_access_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.audit_access_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_access_logsPayload>
          }
          findMany: {
            args: Prisma.audit_access_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_access_logsPayload>[]
          }
          create: {
            args: Prisma.audit_access_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_access_logsPayload>
          }
          createMany: {
            args: Prisma.audit_access_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.audit_access_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_access_logsPayload>[]
          }
          delete: {
            args: Prisma.audit_access_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_access_logsPayload>
          }
          update: {
            args: Prisma.audit_access_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_access_logsPayload>
          }
          deleteMany: {
            args: Prisma.audit_access_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.audit_access_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.audit_access_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_access_logsPayload>[]
          }
          upsert: {
            args: Prisma.audit_access_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_access_logsPayload>
          }
          aggregate: {
            args: Prisma.Audit_access_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_access_logs>
          }
          groupBy: {
            args: Prisma.audit_access_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_access_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.audit_access_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_access_logsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    patients?: patientsOmit
    providers?: providersOmit
    doctors?: doctorsOmit
    visits?: visitsOmit
    diagnoses?: diagnosesOmit
    prescriptions?: prescriptionsOmit
    labs?: labsOmit
    files?: filesOmit
    access_controls?: access_controlsOmit
    audit_access_logs?: audit_access_logsOmit
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
   * Count Type PatientsCountOutputType
   */

  export type PatientsCountOutputType = {
    visits: number
    access_controls: number
    audit_logs: number
  }

  export type PatientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | PatientsCountOutputTypeCountVisitsArgs
    access_controls?: boolean | PatientsCountOutputTypeCountAccess_controlsArgs
    audit_logs?: boolean | PatientsCountOutputTypeCountAudit_logsArgs
  }

  // Custom InputTypes
  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientsCountOutputType
     */
    select?: PatientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: visitsWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountAccess_controlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: access_controlsWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_access_logsWhereInput
  }


  /**
   * Count Type ProvidersCountOutputType
   */

  export type ProvidersCountOutputType = {
    doctors: number
    visits: number
  }

  export type ProvidersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | ProvidersCountOutputTypeCountDoctorsArgs
    visits?: boolean | ProvidersCountOutputTypeCountVisitsArgs
  }

  // Custom InputTypes
  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvidersCountOutputType
     */
    select?: ProvidersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorsWhereInput
  }

  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: visitsWhereInput
  }


  /**
   * Count Type DoctorsCountOutputType
   */

  export type DoctorsCountOutputType = {
    visits: number
    prescriptions: number
  }

  export type DoctorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | DoctorsCountOutputTypeCountVisitsArgs
    prescriptions?: boolean | DoctorsCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsCountOutputType
     */
    select?: DoctorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: visitsWhereInput
  }

  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prescriptionsWhereInput
  }


  /**
   * Count Type VisitsCountOutputType
   */

  export type VisitsCountOutputType = {
    diagnoses: number
    prescriptions: number
    labs: number
    files: number
  }

  export type VisitsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnoses?: boolean | VisitsCountOutputTypeCountDiagnosesArgs
    prescriptions?: boolean | VisitsCountOutputTypeCountPrescriptionsArgs
    labs?: boolean | VisitsCountOutputTypeCountLabsArgs
    files?: boolean | VisitsCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * VisitsCountOutputType without action
   */
  export type VisitsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitsCountOutputType
     */
    select?: VisitsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisitsCountOutputType without action
   */
  export type VisitsCountOutputTypeCountDiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosesWhereInput
  }

  /**
   * VisitsCountOutputType without action
   */
  export type VisitsCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prescriptionsWhereInput
  }

  /**
   * VisitsCountOutputType without action
   */
  export type VisitsCountOutputTypeCountLabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: labsWhereInput
  }

  /**
   * VisitsCountOutputType without action
   */
  export type VisitsCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model patients
   */

  export type AggregatePatients = {
    _count: PatientsCountAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  export type PatientsMinAggregateOutputType = {
    patient_id: string | null
    wallet_did: string | null
    full_name: string | null
    birth_date: Date | null
    gender: string | null
    blood_type: string | null
    contact_phone: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PatientsMaxAggregateOutputType = {
    patient_id: string | null
    wallet_did: string | null
    full_name: string | null
    birth_date: Date | null
    gender: string | null
    blood_type: string | null
    contact_phone: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PatientsCountAggregateOutputType = {
    patient_id: number
    wallet_did: number
    full_name: number
    birth_date: number
    gender: number
    blood_type: number
    contact_phone: number
    address: number
    emergency_contact: number
    insurance: number
    allergies: number
    chronic_conditions: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PatientsMinAggregateInputType = {
    patient_id?: true
    wallet_did?: true
    full_name?: true
    birth_date?: true
    gender?: true
    blood_type?: true
    contact_phone?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type PatientsMaxAggregateInputType = {
    patient_id?: true
    wallet_did?: true
    full_name?: true
    birth_date?: true
    gender?: true
    blood_type?: true
    contact_phone?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type PatientsCountAggregateInputType = {
    patient_id?: true
    wallet_did?: true
    full_name?: true
    birth_date?: true
    gender?: true
    blood_type?: true
    contact_phone?: true
    address?: true
    emergency_contact?: true
    insurance?: true
    allergies?: true
    chronic_conditions?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PatientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to aggregate.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patients
    **/
    _count?: true | PatientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientsMaxAggregateInputType
  }

  export type GetPatientsAggregateType<T extends PatientsAggregateArgs> = {
        [P in keyof T & keyof AggregatePatients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatients[P]>
      : GetScalarType<T[P], AggregatePatients[P]>
  }




  export type patientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientsWhereInput
    orderBy?: patientsOrderByWithAggregationInput | patientsOrderByWithAggregationInput[]
    by: PatientsScalarFieldEnum[] | PatientsScalarFieldEnum
    having?: patientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientsCountAggregateInputType | true
    _min?: PatientsMinAggregateInputType
    _max?: PatientsMaxAggregateInputType
  }

  export type PatientsGroupByOutputType = {
    patient_id: string
    wallet_did: string | null
    full_name: string
    birth_date: Date | null
    gender: string | null
    blood_type: string | null
    contact_phone: string | null
    address: string | null
    emergency_contact: JsonValue | null
    insurance: JsonValue | null
    allergies: JsonValue | null
    chronic_conditions: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: PatientsCountAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  type GetPatientsGroupByPayload<T extends patientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientsGroupByOutputType[P]>
            : GetScalarType<T[P], PatientsGroupByOutputType[P]>
        }
      >
    >


  export type patientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    wallet_did?: boolean
    full_name?: boolean
    birth_date?: boolean
    gender?: boolean
    blood_type?: boolean
    contact_phone?: boolean
    address?: boolean
    emergency_contact?: boolean
    insurance?: boolean
    allergies?: boolean
    chronic_conditions?: boolean
    created_at?: boolean
    updated_at?: boolean
    visits?: boolean | patients$visitsArgs<ExtArgs>
    access_controls?: boolean | patients$access_controlsArgs<ExtArgs>
    audit_logs?: boolean | patients$audit_logsArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    wallet_did?: boolean
    full_name?: boolean
    birth_date?: boolean
    gender?: boolean
    blood_type?: boolean
    contact_phone?: boolean
    address?: boolean
    emergency_contact?: boolean
    insurance?: boolean
    allergies?: boolean
    chronic_conditions?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patient_id?: boolean
    wallet_did?: boolean
    full_name?: boolean
    birth_date?: boolean
    gender?: boolean
    blood_type?: boolean
    contact_phone?: boolean
    address?: boolean
    emergency_contact?: boolean
    insurance?: boolean
    allergies?: boolean
    chronic_conditions?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["patients"]>

  export type patientsSelectScalar = {
    patient_id?: boolean
    wallet_did?: boolean
    full_name?: boolean
    birth_date?: boolean
    gender?: boolean
    blood_type?: boolean
    contact_phone?: boolean
    address?: boolean
    emergency_contact?: boolean
    insurance?: boolean
    allergies?: boolean
    chronic_conditions?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type patientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"patient_id" | "wallet_did" | "full_name" | "birth_date" | "gender" | "blood_type" | "contact_phone" | "address" | "emergency_contact" | "insurance" | "allergies" | "chronic_conditions" | "created_at" | "updated_at", ExtArgs["result"]["patients"]>
  export type patientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visits?: boolean | patients$visitsArgs<ExtArgs>
    access_controls?: boolean | patients$access_controlsArgs<ExtArgs>
    audit_logs?: boolean | patients$audit_logsArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type patientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type patientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $patientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patients"
    objects: {
      visits: Prisma.$visitsPayload<ExtArgs>[]
      access_controls: Prisma.$access_controlsPayload<ExtArgs>[]
      audit_logs: Prisma.$audit_access_logsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      patient_id: string
      wallet_did: string | null
      full_name: string
      birth_date: Date | null
      gender: string | null
      blood_type: string | null
      contact_phone: string | null
      address: string | null
      emergency_contact: Prisma.JsonValue | null
      insurance: Prisma.JsonValue | null
      allergies: Prisma.JsonValue | null
      chronic_conditions: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["patients"]>
    composites: {}
  }

  type patientsGetPayload<S extends boolean | null | undefined | patientsDefaultArgs> = $Result.GetResult<Prisma.$patientsPayload, S>

  type patientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientsCountAggregateInputType | true
    }

  export interface patientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patients'], meta: { name: 'patients' } }
    /**
     * Find zero or one Patients that matches the filter.
     * @param {patientsFindUniqueArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patientsFindUniqueArgs>(args: SelectSubset<T, patientsFindUniqueArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patientsFindUniqueOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patientsFindUniqueOrThrowArgs>(args: SelectSubset<T, patientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindFirstArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patientsFindFirstArgs>(args?: SelectSubset<T, patientsFindFirstArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindFirstOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patientsFindFirstOrThrowArgs>(args?: SelectSubset<T, patientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patients.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patients.findMany({ take: 10 })
     * 
     * // Only select the `patient_id`
     * const patientsWithPatient_idOnly = await prisma.patients.findMany({ select: { patient_id: true } })
     * 
     */
    findMany<T extends patientsFindManyArgs>(args?: SelectSubset<T, patientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patients.
     * @param {patientsCreateArgs} args - Arguments to create a Patients.
     * @example
     * // Create one Patients
     * const Patients = await prisma.patients.create({
     *   data: {
     *     // ... data to create a Patients
     *   }
     * })
     * 
     */
    create<T extends patientsCreateArgs>(args: SelectSubset<T, patientsCreateArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {patientsCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patientsCreateManyArgs>(args?: SelectSubset<T, patientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {patientsCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `patient_id`
     * const patientsWithPatient_idOnly = await prisma.patients.createManyAndReturn({
     *   select: { patient_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends patientsCreateManyAndReturnArgs>(args?: SelectSubset<T, patientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patients.
     * @param {patientsDeleteArgs} args - Arguments to delete one Patients.
     * @example
     * // Delete one Patients
     * const Patients = await prisma.patients.delete({
     *   where: {
     *     // ... filter to delete one Patients
     *   }
     * })
     * 
     */
    delete<T extends patientsDeleteArgs>(args: SelectSubset<T, patientsDeleteArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patients.
     * @param {patientsUpdateArgs} args - Arguments to update one Patients.
     * @example
     * // Update one Patients
     * const patients = await prisma.patients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patientsUpdateArgs>(args: SelectSubset<T, patientsUpdateArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {patientsDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patientsDeleteManyArgs>(args?: SelectSubset<T, patientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patientsUpdateManyArgs>(args: SelectSubset<T, patientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {patientsUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `patient_id`
     * const patientsWithPatient_idOnly = await prisma.patients.updateManyAndReturn({
     *   select: { patient_id: true },
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
    updateManyAndReturn<T extends patientsUpdateManyAndReturnArgs>(args: SelectSubset<T, patientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patients.
     * @param {patientsUpsertArgs} args - Arguments to update or create a Patients.
     * @example
     * // Update or create a Patients
     * const patients = await prisma.patients.upsert({
     *   create: {
     *     // ... data to create a Patients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patients we want to update
     *   }
     * })
     */
    upsert<T extends patientsUpsertArgs>(args: SelectSubset<T, patientsUpsertArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patients.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends patientsCountArgs>(
      args?: Subset<T, patientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientsAggregateArgs>(args: Subset<T, PatientsAggregateArgs>): Prisma.PrismaPromise<GetPatientsAggregateType<T>>

    /**
     * Group by Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientsGroupByArgs} args - Group by arguments.
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
      T extends patientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientsGroupByArgs['orderBy'] }
        : { orderBy?: patientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, patientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patients model
   */
  readonly fields: patientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visits<T extends patients$visitsArgs<ExtArgs> = {}>(args?: Subset<T, patients$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    access_controls<T extends patients$access_controlsArgs<ExtArgs> = {}>(args?: Subset<T, patients$access_controlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audit_logs<T extends patients$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, patients$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the patients model
   */
  interface patientsFieldRefs {
    readonly patient_id: FieldRef<"patients", 'String'>
    readonly wallet_did: FieldRef<"patients", 'String'>
    readonly full_name: FieldRef<"patients", 'String'>
    readonly birth_date: FieldRef<"patients", 'DateTime'>
    readonly gender: FieldRef<"patients", 'String'>
    readonly blood_type: FieldRef<"patients", 'String'>
    readonly contact_phone: FieldRef<"patients", 'String'>
    readonly address: FieldRef<"patients", 'String'>
    readonly emergency_contact: FieldRef<"patients", 'Json'>
    readonly insurance: FieldRef<"patients", 'Json'>
    readonly allergies: FieldRef<"patients", 'Json'>
    readonly chronic_conditions: FieldRef<"patients", 'Json'>
    readonly created_at: FieldRef<"patients", 'DateTime'>
    readonly updated_at: FieldRef<"patients", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * patients findUnique
   */
  export type patientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients findUniqueOrThrow
   */
  export type patientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients findFirst
   */
  export type patientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients findFirstOrThrow
   */
  export type patientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients findMany
   */
  export type patientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientsOrderByWithRelationInput | patientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patients.
     */
    cursor?: patientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * patients create
   */
  export type patientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The data needed to create a patients.
     */
    data: XOR<patientsCreateInput, patientsUncheckedCreateInput>
  }

  /**
   * patients createMany
   */
  export type patientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientsCreateManyInput | patientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patients createManyAndReturn
   */
  export type patientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * The data used to create many patients.
     */
    data: patientsCreateManyInput | patientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patients update
   */
  export type patientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The data needed to update a patients.
     */
    data: XOR<patientsUpdateInput, patientsUncheckedUpdateInput>
    /**
     * Choose, which patients to update.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients updateMany
   */
  export type patientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patients updateManyAndReturn
   */
  export type patientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * The data used to update patients.
     */
    data: XOR<patientsUpdateManyMutationInput, patientsUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patients upsert
   */
  export type patientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * The filter to search for the patients to update in case it exists.
     */
    where: patientsWhereUniqueInput
    /**
     * In case the patients found by the `where` argument doesn't exist, create a new patients with this data.
     */
    create: XOR<patientsCreateInput, patientsUncheckedCreateInput>
    /**
     * In case the patients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientsUpdateInput, patientsUncheckedUpdateInput>
  }

  /**
   * patients delete
   */
  export type patientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    /**
     * Filter which patients to delete.
     */
    where: patientsWhereUniqueInput
  }

  /**
   * patients deleteMany
   */
  export type patientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientsWhereInput
    /**
     * Limit how many patients to delete.
     */
    limit?: number
  }

  /**
   * patients.visits
   */
  export type patients$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    where?: visitsWhereInput
    orderBy?: visitsOrderByWithRelationInput | visitsOrderByWithRelationInput[]
    cursor?: visitsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitsScalarFieldEnum | VisitsScalarFieldEnum[]
  }

  /**
   * patients.access_controls
   */
  export type patients$access_controlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsInclude<ExtArgs> | null
    where?: access_controlsWhereInput
    orderBy?: access_controlsOrderByWithRelationInput | access_controlsOrderByWithRelationInput[]
    cursor?: access_controlsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Access_controlsScalarFieldEnum | Access_controlsScalarFieldEnum[]
  }

  /**
   * patients.audit_logs
   */
  export type patients$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsInclude<ExtArgs> | null
    where?: audit_access_logsWhereInput
    orderBy?: audit_access_logsOrderByWithRelationInput | audit_access_logsOrderByWithRelationInput[]
    cursor?: audit_access_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_access_logsScalarFieldEnum | Audit_access_logsScalarFieldEnum[]
  }

  /**
   * patients without action
   */
  export type patientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
  }


  /**
   * Model providers
   */

  export type AggregateProviders = {
    _count: ProvidersCountAggregateOutputType | null
    _min: ProvidersMinAggregateOutputType | null
    _max: ProvidersMaxAggregateOutputType | null
  }

  export type ProvidersMinAggregateOutputType = {
    provider_id: string | null
    name: string | null
    address: string | null
    contact_phone: string | null
    type: string | null
    license_number: string | null
    created_at: Date | null
  }

  export type ProvidersMaxAggregateOutputType = {
    provider_id: string | null
    name: string | null
    address: string | null
    contact_phone: string | null
    type: string | null
    license_number: string | null
    created_at: Date | null
  }

  export type ProvidersCountAggregateOutputType = {
    provider_id: number
    name: number
    address: number
    contact_phone: number
    type: number
    license_number: number
    metadata: number
    created_at: number
    _all: number
  }


  export type ProvidersMinAggregateInputType = {
    provider_id?: true
    name?: true
    address?: true
    contact_phone?: true
    type?: true
    license_number?: true
    created_at?: true
  }

  export type ProvidersMaxAggregateInputType = {
    provider_id?: true
    name?: true
    address?: true
    contact_phone?: true
    type?: true
    license_number?: true
    created_at?: true
  }

  export type ProvidersCountAggregateInputType = {
    provider_id?: true
    name?: true
    address?: true
    contact_phone?: true
    type?: true
    license_number?: true
    metadata?: true
    created_at?: true
    _all?: true
  }

  export type ProvidersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which providers to aggregate.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: providersOrderByWithRelationInput | providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned providers
    **/
    _count?: true | ProvidersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvidersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvidersMaxAggregateInputType
  }

  export type GetProvidersAggregateType<T extends ProvidersAggregateArgs> = {
        [P in keyof T & keyof AggregateProviders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviders[P]>
      : GetScalarType<T[P], AggregateProviders[P]>
  }




  export type providersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: providersWhereInput
    orderBy?: providersOrderByWithAggregationInput | providersOrderByWithAggregationInput[]
    by: ProvidersScalarFieldEnum[] | ProvidersScalarFieldEnum
    having?: providersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvidersCountAggregateInputType | true
    _min?: ProvidersMinAggregateInputType
    _max?: ProvidersMaxAggregateInputType
  }

  export type ProvidersGroupByOutputType = {
    provider_id: string
    name: string
    address: string | null
    contact_phone: string | null
    type: string | null
    license_number: string | null
    metadata: JsonValue | null
    created_at: Date
    _count: ProvidersCountAggregateOutputType | null
    _min: ProvidersMinAggregateOutputType | null
    _max: ProvidersMaxAggregateOutputType | null
  }

  type GetProvidersGroupByPayload<T extends providersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvidersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvidersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvidersGroupByOutputType[P]>
            : GetScalarType<T[P], ProvidersGroupByOutputType[P]>
        }
      >
    >


  export type providersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    name?: boolean
    address?: boolean
    contact_phone?: boolean
    type?: boolean
    license_number?: boolean
    metadata?: boolean
    created_at?: boolean
    doctors?: boolean | providers$doctorsArgs<ExtArgs>
    visits?: boolean | providers$visitsArgs<ExtArgs>
    _count?: boolean | ProvidersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providers"]>

  export type providersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    name?: boolean
    address?: boolean
    contact_phone?: boolean
    type?: boolean
    license_number?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["providers"]>

  export type providersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    name?: boolean
    address?: boolean
    contact_phone?: boolean
    type?: boolean
    license_number?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["providers"]>

  export type providersSelectScalar = {
    provider_id?: boolean
    name?: boolean
    address?: boolean
    contact_phone?: boolean
    type?: boolean
    license_number?: boolean
    metadata?: boolean
    created_at?: boolean
  }

  export type providersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"provider_id" | "name" | "address" | "contact_phone" | "type" | "license_number" | "metadata" | "created_at", ExtArgs["result"]["providers"]>
  export type providersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | providers$doctorsArgs<ExtArgs>
    visits?: boolean | providers$visitsArgs<ExtArgs>
    _count?: boolean | ProvidersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type providersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type providersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $providersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "providers"
    objects: {
      doctors: Prisma.$doctorsPayload<ExtArgs>[]
      visits: Prisma.$visitsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      provider_id: string
      name: string
      address: string | null
      contact_phone: string | null
      type: string | null
      license_number: string | null
      metadata: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["providers"]>
    composites: {}
  }

  type providersGetPayload<S extends boolean | null | undefined | providersDefaultArgs> = $Result.GetResult<Prisma.$providersPayload, S>

  type providersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<providersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvidersCountAggregateInputType | true
    }

  export interface providersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['providers'], meta: { name: 'providers' } }
    /**
     * Find zero or one Providers that matches the filter.
     * @param {providersFindUniqueArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends providersFindUniqueArgs>(args: SelectSubset<T, providersFindUniqueArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Providers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {providersFindUniqueOrThrowArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends providersFindUniqueOrThrowArgs>(args: SelectSubset<T, providersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindFirstArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends providersFindFirstArgs>(args?: SelectSubset<T, providersFindFirstArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Providers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindFirstOrThrowArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends providersFindFirstOrThrowArgs>(args?: SelectSubset<T, providersFindFirstOrThrowArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.providers.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.providers.findMany({ take: 10 })
     * 
     * // Only select the `provider_id`
     * const providersWithProvider_idOnly = await prisma.providers.findMany({ select: { provider_id: true } })
     * 
     */
    findMany<T extends providersFindManyArgs>(args?: SelectSubset<T, providersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Providers.
     * @param {providersCreateArgs} args - Arguments to create a Providers.
     * @example
     * // Create one Providers
     * const Providers = await prisma.providers.create({
     *   data: {
     *     // ... data to create a Providers
     *   }
     * })
     * 
     */
    create<T extends providersCreateArgs>(args: SelectSubset<T, providersCreateArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {providersCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const providers = await prisma.providers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends providersCreateManyArgs>(args?: SelectSubset<T, providersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {providersCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const providers = await prisma.providers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `provider_id`
     * const providersWithProvider_idOnly = await prisma.providers.createManyAndReturn({
     *   select: { provider_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends providersCreateManyAndReturnArgs>(args?: SelectSubset<T, providersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Providers.
     * @param {providersDeleteArgs} args - Arguments to delete one Providers.
     * @example
     * // Delete one Providers
     * const Providers = await prisma.providers.delete({
     *   where: {
     *     // ... filter to delete one Providers
     *   }
     * })
     * 
     */
    delete<T extends providersDeleteArgs>(args: SelectSubset<T, providersDeleteArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Providers.
     * @param {providersUpdateArgs} args - Arguments to update one Providers.
     * @example
     * // Update one Providers
     * const providers = await prisma.providers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends providersUpdateArgs>(args: SelectSubset<T, providersUpdateArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {providersDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.providers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends providersDeleteManyArgs>(args?: SelectSubset<T, providersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const providers = await prisma.providers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends providersUpdateManyArgs>(args: SelectSubset<T, providersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {providersUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const providers = await prisma.providers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `provider_id`
     * const providersWithProvider_idOnly = await prisma.providers.updateManyAndReturn({
     *   select: { provider_id: true },
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
    updateManyAndReturn<T extends providersUpdateManyAndReturnArgs>(args: SelectSubset<T, providersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Providers.
     * @param {providersUpsertArgs} args - Arguments to update or create a Providers.
     * @example
     * // Update or create a Providers
     * const providers = await prisma.providers.upsert({
     *   create: {
     *     // ... data to create a Providers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Providers we want to update
     *   }
     * })
     */
    upsert<T extends providersUpsertArgs>(args: SelectSubset<T, providersUpsertArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.providers.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends providersCountArgs>(
      args?: Subset<T, providersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvidersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProvidersAggregateArgs>(args: Subset<T, ProvidersAggregateArgs>): Prisma.PrismaPromise<GetProvidersAggregateType<T>>

    /**
     * Group by Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {providersGroupByArgs} args - Group by arguments.
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
      T extends providersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: providersGroupByArgs['orderBy'] }
        : { orderBy?: providersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, providersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvidersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the providers model
   */
  readonly fields: providersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for providers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__providersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctors<T extends providers$doctorsArgs<ExtArgs> = {}>(args?: Subset<T, providers$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visits<T extends providers$visitsArgs<ExtArgs> = {}>(args?: Subset<T, providers$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the providers model
   */
  interface providersFieldRefs {
    readonly provider_id: FieldRef<"providers", 'String'>
    readonly name: FieldRef<"providers", 'String'>
    readonly address: FieldRef<"providers", 'String'>
    readonly contact_phone: FieldRef<"providers", 'String'>
    readonly type: FieldRef<"providers", 'String'>
    readonly license_number: FieldRef<"providers", 'String'>
    readonly metadata: FieldRef<"providers", 'Json'>
    readonly created_at: FieldRef<"providers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * providers findUnique
   */
  export type providersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where: providersWhereUniqueInput
  }

  /**
   * providers findUniqueOrThrow
   */
  export type providersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where: providersWhereUniqueInput
  }

  /**
   * providers findFirst
   */
  export type providersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: providersOrderByWithRelationInput | providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providers.
     */
    distinct?: ProvidersScalarFieldEnum | ProvidersScalarFieldEnum[]
  }

  /**
   * providers findFirstOrThrow
   */
  export type providersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: providersOrderByWithRelationInput | providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of providers.
     */
    distinct?: ProvidersScalarFieldEnum | ProvidersScalarFieldEnum[]
  }

  /**
   * providers findMany
   */
  export type providersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter, which providers to fetch.
     */
    where?: providersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of providers to fetch.
     */
    orderBy?: providersOrderByWithRelationInput | providersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing providers.
     */
    cursor?: providersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` providers.
     */
    skip?: number
    distinct?: ProvidersScalarFieldEnum | ProvidersScalarFieldEnum[]
  }

  /**
   * providers create
   */
  export type providersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * The data needed to create a providers.
     */
    data: XOR<providersCreateInput, providersUncheckedCreateInput>
  }

  /**
   * providers createMany
   */
  export type providersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many providers.
     */
    data: providersCreateManyInput | providersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * providers createManyAndReturn
   */
  export type providersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * The data used to create many providers.
     */
    data: providersCreateManyInput | providersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * providers update
   */
  export type providersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * The data needed to update a providers.
     */
    data: XOR<providersUpdateInput, providersUncheckedUpdateInput>
    /**
     * Choose, which providers to update.
     */
    where: providersWhereUniqueInput
  }

  /**
   * providers updateMany
   */
  export type providersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update providers.
     */
    data: XOR<providersUpdateManyMutationInput, providersUncheckedUpdateManyInput>
    /**
     * Filter which providers to update
     */
    where?: providersWhereInput
    /**
     * Limit how many providers to update.
     */
    limit?: number
  }

  /**
   * providers updateManyAndReturn
   */
  export type providersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * The data used to update providers.
     */
    data: XOR<providersUpdateManyMutationInput, providersUncheckedUpdateManyInput>
    /**
     * Filter which providers to update
     */
    where?: providersWhereInput
    /**
     * Limit how many providers to update.
     */
    limit?: number
  }

  /**
   * providers upsert
   */
  export type providersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * The filter to search for the providers to update in case it exists.
     */
    where: providersWhereUniqueInput
    /**
     * In case the providers found by the `where` argument doesn't exist, create a new providers with this data.
     */
    create: XOR<providersCreateInput, providersUncheckedCreateInput>
    /**
     * In case the providers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<providersUpdateInput, providersUncheckedUpdateInput>
  }

  /**
   * providers delete
   */
  export type providersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    /**
     * Filter which providers to delete.
     */
    where: providersWhereUniqueInput
  }

  /**
   * providers deleteMany
   */
  export type providersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which providers to delete
     */
    where?: providersWhereInput
    /**
     * Limit how many providers to delete.
     */
    limit?: number
  }

  /**
   * providers.doctors
   */
  export type providers$doctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    where?: doctorsWhereInput
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    cursor?: doctorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * providers.visits
   */
  export type providers$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    where?: visitsWhereInput
    orderBy?: visitsOrderByWithRelationInput | visitsOrderByWithRelationInput[]
    cursor?: visitsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitsScalarFieldEnum | VisitsScalarFieldEnum[]
  }

  /**
   * providers without action
   */
  export type providersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
  }


  /**
   * Model doctors
   */

  export type AggregateDoctors = {
    _count: DoctorsCountAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  export type DoctorsMinAggregateOutputType = {
    doctor_id: string | null
    provider_id: string | null
    full_name: string | null
    specialty: string | null
    license_no: string | null
    contact: string | null
    created_at: Date | null
  }

  export type DoctorsMaxAggregateOutputType = {
    doctor_id: string | null
    provider_id: string | null
    full_name: string | null
    specialty: string | null
    license_no: string | null
    contact: string | null
    created_at: Date | null
  }

  export type DoctorsCountAggregateOutputType = {
    doctor_id: number
    provider_id: number
    full_name: number
    specialty: number
    license_no: number
    contact: number
    profile_meta: number
    created_at: number
    _all: number
  }


  export type DoctorsMinAggregateInputType = {
    doctor_id?: true
    provider_id?: true
    full_name?: true
    specialty?: true
    license_no?: true
    contact?: true
    created_at?: true
  }

  export type DoctorsMaxAggregateInputType = {
    doctor_id?: true
    provider_id?: true
    full_name?: true
    specialty?: true
    license_no?: true
    contact?: true
    created_at?: true
  }

  export type DoctorsCountAggregateInputType = {
    doctor_id?: true
    provider_id?: true
    full_name?: true
    specialty?: true
    license_no?: true
    contact?: true
    profile_meta?: true
    created_at?: true
    _all?: true
  }

  export type DoctorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to aggregate.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned doctors
    **/
    _count?: true | DoctorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorsMaxAggregateInputType
  }

  export type GetDoctorsAggregateType<T extends DoctorsAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctors[P]>
      : GetScalarType<T[P], AggregateDoctors[P]>
  }




  export type doctorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: doctorsWhereInput
    orderBy?: doctorsOrderByWithAggregationInput | doctorsOrderByWithAggregationInput[]
    by: DoctorsScalarFieldEnum[] | DoctorsScalarFieldEnum
    having?: doctorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorsCountAggregateInputType | true
    _min?: DoctorsMinAggregateInputType
    _max?: DoctorsMaxAggregateInputType
  }

  export type DoctorsGroupByOutputType = {
    doctor_id: string
    provider_id: string | null
    full_name: string
    specialty: string | null
    license_no: string | null
    contact: string | null
    profile_meta: JsonValue | null
    created_at: Date
    _count: DoctorsCountAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  type GetDoctorsGroupByPayload<T extends doctorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
        }
      >
    >


  export type doctorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctor_id?: boolean
    provider_id?: boolean
    full_name?: boolean
    specialty?: boolean
    license_no?: boolean
    contact?: boolean
    profile_meta?: boolean
    created_at?: boolean
    provider?: boolean | doctors$providerArgs<ExtArgs>
    visits?: boolean | doctors$visitsArgs<ExtArgs>
    prescriptions?: boolean | doctors$prescriptionsArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type doctorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctor_id?: boolean
    provider_id?: boolean
    full_name?: boolean
    specialty?: boolean
    license_no?: boolean
    contact?: boolean
    profile_meta?: boolean
    created_at?: boolean
    provider?: boolean | doctors$providerArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type doctorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctor_id?: boolean
    provider_id?: boolean
    full_name?: boolean
    specialty?: boolean
    license_no?: boolean
    contact?: boolean
    profile_meta?: boolean
    created_at?: boolean
    provider?: boolean | doctors$providerArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>

  export type doctorsSelectScalar = {
    doctor_id?: boolean
    provider_id?: boolean
    full_name?: boolean
    specialty?: boolean
    license_no?: boolean
    contact?: boolean
    profile_meta?: boolean
    created_at?: boolean
  }

  export type doctorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"doctor_id" | "provider_id" | "full_name" | "specialty" | "license_no" | "contact" | "profile_meta" | "created_at", ExtArgs["result"]["doctors"]>
  export type doctorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | doctors$providerArgs<ExtArgs>
    visits?: boolean | doctors$visitsArgs<ExtArgs>
    prescriptions?: boolean | doctors$prescriptionsArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type doctorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | doctors$providerArgs<ExtArgs>
  }
  export type doctorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | doctors$providerArgs<ExtArgs>
  }

  export type $doctorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "doctors"
    objects: {
      provider: Prisma.$providersPayload<ExtArgs> | null
      visits: Prisma.$visitsPayload<ExtArgs>[]
      prescriptions: Prisma.$prescriptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      doctor_id: string
      provider_id: string | null
      full_name: string
      specialty: string | null
      license_no: string | null
      contact: string | null
      profile_meta: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["doctors"]>
    composites: {}
  }

  type doctorsGetPayload<S extends boolean | null | undefined | doctorsDefaultArgs> = $Result.GetResult<Prisma.$doctorsPayload, S>

  type doctorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<doctorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorsCountAggregateInputType | true
    }

  export interface doctorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['doctors'], meta: { name: 'doctors' } }
    /**
     * Find zero or one Doctors that matches the filter.
     * @param {doctorsFindUniqueArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends doctorsFindUniqueArgs>(args: SelectSubset<T, doctorsFindUniqueArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {doctorsFindUniqueOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends doctorsFindUniqueOrThrowArgs>(args: SelectSubset<T, doctorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsFindFirstArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends doctorsFindFirstArgs>(args?: SelectSubset<T, doctorsFindFirstArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsFindFirstOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends doctorsFindFirstOrThrowArgs>(args?: SelectSubset<T, doctorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctors.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctors.findMany({ take: 10 })
     * 
     * // Only select the `doctor_id`
     * const doctorsWithDoctor_idOnly = await prisma.doctors.findMany({ select: { doctor_id: true } })
     * 
     */
    findMany<T extends doctorsFindManyArgs>(args?: SelectSubset<T, doctorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctors.
     * @param {doctorsCreateArgs} args - Arguments to create a Doctors.
     * @example
     * // Create one Doctors
     * const Doctors = await prisma.doctors.create({
     *   data: {
     *     // ... data to create a Doctors
     *   }
     * })
     * 
     */
    create<T extends doctorsCreateArgs>(args: SelectSubset<T, doctorsCreateArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {doctorsCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctors = await prisma.doctors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends doctorsCreateManyArgs>(args?: SelectSubset<T, doctorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {doctorsCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctors = await prisma.doctors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `doctor_id`
     * const doctorsWithDoctor_idOnly = await prisma.doctors.createManyAndReturn({
     *   select: { doctor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends doctorsCreateManyAndReturnArgs>(args?: SelectSubset<T, doctorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctors.
     * @param {doctorsDeleteArgs} args - Arguments to delete one Doctors.
     * @example
     * // Delete one Doctors
     * const Doctors = await prisma.doctors.delete({
     *   where: {
     *     // ... filter to delete one Doctors
     *   }
     * })
     * 
     */
    delete<T extends doctorsDeleteArgs>(args: SelectSubset<T, doctorsDeleteArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctors.
     * @param {doctorsUpdateArgs} args - Arguments to update one Doctors.
     * @example
     * // Update one Doctors
     * const doctors = await prisma.doctors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends doctorsUpdateArgs>(args: SelectSubset<T, doctorsUpdateArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {doctorsDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends doctorsDeleteManyArgs>(args?: SelectSubset<T, doctorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctors = await prisma.doctors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends doctorsUpdateManyArgs>(args: SelectSubset<T, doctorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {doctorsUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctors = await prisma.doctors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `doctor_id`
     * const doctorsWithDoctor_idOnly = await prisma.doctors.updateManyAndReturn({
     *   select: { doctor_id: true },
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
    updateManyAndReturn<T extends doctorsUpdateManyAndReturnArgs>(args: SelectSubset<T, doctorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctors.
     * @param {doctorsUpsertArgs} args - Arguments to update or create a Doctors.
     * @example
     * // Update or create a Doctors
     * const doctors = await prisma.doctors.upsert({
     *   create: {
     *     // ... data to create a Doctors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctors we want to update
     *   }
     * })
     */
    upsert<T extends doctorsUpsertArgs>(args: SelectSubset<T, doctorsUpsertArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctors.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends doctorsCountArgs>(
      args?: Subset<T, doctorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorsAggregateArgs>(args: Subset<T, DoctorsAggregateArgs>): Prisma.PrismaPromise<GetDoctorsAggregateType<T>>

    /**
     * Group by Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {doctorsGroupByArgs} args - Group by arguments.
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
      T extends doctorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: doctorsGroupByArgs['orderBy'] }
        : { orderBy?: doctorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, doctorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the doctors model
   */
  readonly fields: doctorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for doctors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__doctorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends doctors$providerArgs<ExtArgs> = {}>(args?: Subset<T, doctors$providerArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    visits<T extends doctors$visitsArgs<ExtArgs> = {}>(args?: Subset<T, doctors$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends doctors$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, doctors$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the doctors model
   */
  interface doctorsFieldRefs {
    readonly doctor_id: FieldRef<"doctors", 'String'>
    readonly provider_id: FieldRef<"doctors", 'String'>
    readonly full_name: FieldRef<"doctors", 'String'>
    readonly specialty: FieldRef<"doctors", 'String'>
    readonly license_no: FieldRef<"doctors", 'String'>
    readonly contact: FieldRef<"doctors", 'String'>
    readonly profile_meta: FieldRef<"doctors", 'Json'>
    readonly created_at: FieldRef<"doctors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * doctors findUnique
   */
  export type doctorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors findUniqueOrThrow
   */
  export type doctorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors findFirst
   */
  export type doctorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * doctors findFirstOrThrow
   */
  export type doctorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for doctors.
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * doctors findMany
   */
  export type doctorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter, which doctors to fetch.
     */
    where?: doctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of doctors to fetch.
     */
    orderBy?: doctorsOrderByWithRelationInput | doctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing doctors.
     */
    cursor?: doctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` doctors.
     */
    skip?: number
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * doctors create
   */
  export type doctorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * The data needed to create a doctors.
     */
    data: XOR<doctorsCreateInput, doctorsUncheckedCreateInput>
  }

  /**
   * doctors createMany
   */
  export type doctorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many doctors.
     */
    data: doctorsCreateManyInput | doctorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * doctors createManyAndReturn
   */
  export type doctorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * The data used to create many doctors.
     */
    data: doctorsCreateManyInput | doctorsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * doctors update
   */
  export type doctorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * The data needed to update a doctors.
     */
    data: XOR<doctorsUpdateInput, doctorsUncheckedUpdateInput>
    /**
     * Choose, which doctors to update.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors updateMany
   */
  export type doctorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorsUpdateManyMutationInput, doctorsUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorsWhereInput
    /**
     * Limit how many doctors to update.
     */
    limit?: number
  }

  /**
   * doctors updateManyAndReturn
   */
  export type doctorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * The data used to update doctors.
     */
    data: XOR<doctorsUpdateManyMutationInput, doctorsUncheckedUpdateManyInput>
    /**
     * Filter which doctors to update
     */
    where?: doctorsWhereInput
    /**
     * Limit how many doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * doctors upsert
   */
  export type doctorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * The filter to search for the doctors to update in case it exists.
     */
    where: doctorsWhereUniqueInput
    /**
     * In case the doctors found by the `where` argument doesn't exist, create a new doctors with this data.
     */
    create: XOR<doctorsCreateInput, doctorsUncheckedCreateInput>
    /**
     * In case the doctors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<doctorsUpdateInput, doctorsUncheckedUpdateInput>
  }

  /**
   * doctors delete
   */
  export type doctorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    /**
     * Filter which doctors to delete.
     */
    where: doctorsWhereUniqueInput
  }

  /**
   * doctors deleteMany
   */
  export type doctorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which doctors to delete
     */
    where?: doctorsWhereInput
    /**
     * Limit how many doctors to delete.
     */
    limit?: number
  }

  /**
   * doctors.provider
   */
  export type doctors$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    where?: providersWhereInput
  }

  /**
   * doctors.visits
   */
  export type doctors$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    where?: visitsWhereInput
    orderBy?: visitsOrderByWithRelationInput | visitsOrderByWithRelationInput[]
    cursor?: visitsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitsScalarFieldEnum | VisitsScalarFieldEnum[]
  }

  /**
   * doctors.prescriptions
   */
  export type doctors$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
    where?: prescriptionsWhereInput
    orderBy?: prescriptionsOrderByWithRelationInput | prescriptionsOrderByWithRelationInput[]
    cursor?: prescriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionsScalarFieldEnum | PrescriptionsScalarFieldEnum[]
  }

  /**
   * doctors without action
   */
  export type doctorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
  }


  /**
   * Model visits
   */

  export type AggregateVisits = {
    _count: VisitsCountAggregateOutputType | null
    _min: VisitsMinAggregateOutputType | null
    _max: VisitsMaxAggregateOutputType | null
  }

  export type VisitsMinAggregateOutputType = {
    visit_id: string | null
    patient_id: string | null
    provider_id: string | null
    doctor_id: string | null
    visit_timestamp: Date | null
    visit_type: string | null
    chief_complaint: string | null
    clinical_notes_hash: string | null
    clinical_notes_enc: string | null
    billing_id: string | null
    created_at: Date | null
  }

  export type VisitsMaxAggregateOutputType = {
    visit_id: string | null
    patient_id: string | null
    provider_id: string | null
    doctor_id: string | null
    visit_timestamp: Date | null
    visit_type: string | null
    chief_complaint: string | null
    clinical_notes_hash: string | null
    clinical_notes_enc: string | null
    billing_id: string | null
    created_at: Date | null
  }

  export type VisitsCountAggregateOutputType = {
    visit_id: number
    patient_id: number
    provider_id: number
    doctor_id: number
    visit_timestamp: number
    visit_type: number
    chief_complaint: number
    clinical_notes_hash: number
    clinical_notes_enc: number
    billing_id: number
    created_at: number
    _all: number
  }


  export type VisitsMinAggregateInputType = {
    visit_id?: true
    patient_id?: true
    provider_id?: true
    doctor_id?: true
    visit_timestamp?: true
    visit_type?: true
    chief_complaint?: true
    clinical_notes_hash?: true
    clinical_notes_enc?: true
    billing_id?: true
    created_at?: true
  }

  export type VisitsMaxAggregateInputType = {
    visit_id?: true
    patient_id?: true
    provider_id?: true
    doctor_id?: true
    visit_timestamp?: true
    visit_type?: true
    chief_complaint?: true
    clinical_notes_hash?: true
    clinical_notes_enc?: true
    billing_id?: true
    created_at?: true
  }

  export type VisitsCountAggregateInputType = {
    visit_id?: true
    patient_id?: true
    provider_id?: true
    doctor_id?: true
    visit_timestamp?: true
    visit_type?: true
    chief_complaint?: true
    clinical_notes_hash?: true
    clinical_notes_enc?: true
    billing_id?: true
    created_at?: true
    _all?: true
  }

  export type VisitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which visits to aggregate.
     */
    where?: visitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visits to fetch.
     */
    orderBy?: visitsOrderByWithRelationInput | visitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: visitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned visits
    **/
    _count?: true | VisitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitsMaxAggregateInputType
  }

  export type GetVisitsAggregateType<T extends VisitsAggregateArgs> = {
        [P in keyof T & keyof AggregateVisits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisits[P]>
      : GetScalarType<T[P], AggregateVisits[P]>
  }




  export type visitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: visitsWhereInput
    orderBy?: visitsOrderByWithAggregationInput | visitsOrderByWithAggregationInput[]
    by: VisitsScalarFieldEnum[] | VisitsScalarFieldEnum
    having?: visitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitsCountAggregateInputType | true
    _min?: VisitsMinAggregateInputType
    _max?: VisitsMaxAggregateInputType
  }

  export type VisitsGroupByOutputType = {
    visit_id: string
    patient_id: string | null
    provider_id: string | null
    doctor_id: string | null
    visit_timestamp: Date
    visit_type: string | null
    chief_complaint: string | null
    clinical_notes_hash: string | null
    clinical_notes_enc: string | null
    billing_id: string | null
    created_at: Date
    _count: VisitsCountAggregateOutputType | null
    _min: VisitsMinAggregateOutputType | null
    _max: VisitsMaxAggregateOutputType | null
  }

  type GetVisitsGroupByPayload<T extends visitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitsGroupByOutputType[P]>
            : GetScalarType<T[P], VisitsGroupByOutputType[P]>
        }
      >
    >


  export type visitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    visit_id?: boolean
    patient_id?: boolean
    provider_id?: boolean
    doctor_id?: boolean
    visit_timestamp?: boolean
    visit_type?: boolean
    chief_complaint?: boolean
    clinical_notes_hash?: boolean
    clinical_notes_enc?: boolean
    billing_id?: boolean
    created_at?: boolean
    patient?: boolean | visits$patientArgs<ExtArgs>
    provider?: boolean | visits$providerArgs<ExtArgs>
    doctor?: boolean | visits$doctorArgs<ExtArgs>
    diagnoses?: boolean | visits$diagnosesArgs<ExtArgs>
    prescriptions?: boolean | visits$prescriptionsArgs<ExtArgs>
    labs?: boolean | visits$labsArgs<ExtArgs>
    files?: boolean | visits$filesArgs<ExtArgs>
    _count?: boolean | VisitsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visits"]>

  export type visitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    visit_id?: boolean
    patient_id?: boolean
    provider_id?: boolean
    doctor_id?: boolean
    visit_timestamp?: boolean
    visit_type?: boolean
    chief_complaint?: boolean
    clinical_notes_hash?: boolean
    clinical_notes_enc?: boolean
    billing_id?: boolean
    created_at?: boolean
    patient?: boolean | visits$patientArgs<ExtArgs>
    provider?: boolean | visits$providerArgs<ExtArgs>
    doctor?: boolean | visits$doctorArgs<ExtArgs>
  }, ExtArgs["result"]["visits"]>

  export type visitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    visit_id?: boolean
    patient_id?: boolean
    provider_id?: boolean
    doctor_id?: boolean
    visit_timestamp?: boolean
    visit_type?: boolean
    chief_complaint?: boolean
    clinical_notes_hash?: boolean
    clinical_notes_enc?: boolean
    billing_id?: boolean
    created_at?: boolean
    patient?: boolean | visits$patientArgs<ExtArgs>
    provider?: boolean | visits$providerArgs<ExtArgs>
    doctor?: boolean | visits$doctorArgs<ExtArgs>
  }, ExtArgs["result"]["visits"]>

  export type visitsSelectScalar = {
    visit_id?: boolean
    patient_id?: boolean
    provider_id?: boolean
    doctor_id?: boolean
    visit_timestamp?: boolean
    visit_type?: boolean
    chief_complaint?: boolean
    clinical_notes_hash?: boolean
    clinical_notes_enc?: boolean
    billing_id?: boolean
    created_at?: boolean
  }

  export type visitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"visit_id" | "patient_id" | "provider_id" | "doctor_id" | "visit_timestamp" | "visit_type" | "chief_complaint" | "clinical_notes_hash" | "clinical_notes_enc" | "billing_id" | "created_at", ExtArgs["result"]["visits"]>
  export type visitsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | visits$patientArgs<ExtArgs>
    provider?: boolean | visits$providerArgs<ExtArgs>
    doctor?: boolean | visits$doctorArgs<ExtArgs>
    diagnoses?: boolean | visits$diagnosesArgs<ExtArgs>
    prescriptions?: boolean | visits$prescriptionsArgs<ExtArgs>
    labs?: boolean | visits$labsArgs<ExtArgs>
    files?: boolean | visits$filesArgs<ExtArgs>
    _count?: boolean | VisitsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type visitsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | visits$patientArgs<ExtArgs>
    provider?: boolean | visits$providerArgs<ExtArgs>
    doctor?: boolean | visits$doctorArgs<ExtArgs>
  }
  export type visitsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | visits$patientArgs<ExtArgs>
    provider?: boolean | visits$providerArgs<ExtArgs>
    doctor?: boolean | visits$doctorArgs<ExtArgs>
  }

  export type $visitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "visits"
    objects: {
      patient: Prisma.$patientsPayload<ExtArgs> | null
      provider: Prisma.$providersPayload<ExtArgs> | null
      doctor: Prisma.$doctorsPayload<ExtArgs> | null
      diagnoses: Prisma.$diagnosesPayload<ExtArgs>[]
      prescriptions: Prisma.$prescriptionsPayload<ExtArgs>[]
      labs: Prisma.$labsPayload<ExtArgs>[]
      files: Prisma.$filesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      visit_id: string
      patient_id: string | null
      provider_id: string | null
      doctor_id: string | null
      visit_timestamp: Date
      visit_type: string | null
      chief_complaint: string | null
      clinical_notes_hash: string | null
      clinical_notes_enc: string | null
      billing_id: string | null
      created_at: Date
    }, ExtArgs["result"]["visits"]>
    composites: {}
  }

  type visitsGetPayload<S extends boolean | null | undefined | visitsDefaultArgs> = $Result.GetResult<Prisma.$visitsPayload, S>

  type visitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<visitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitsCountAggregateInputType | true
    }

  export interface visitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['visits'], meta: { name: 'visits' } }
    /**
     * Find zero or one Visits that matches the filter.
     * @param {visitsFindUniqueArgs} args - Arguments to find a Visits
     * @example
     * // Get one Visits
     * const visits = await prisma.visits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends visitsFindUniqueArgs>(args: SelectSubset<T, visitsFindUniqueArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {visitsFindUniqueOrThrowArgs} args - Arguments to find a Visits
     * @example
     * // Get one Visits
     * const visits = await prisma.visits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends visitsFindUniqueOrThrowArgs>(args: SelectSubset<T, visitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitsFindFirstArgs} args - Arguments to find a Visits
     * @example
     * // Get one Visits
     * const visits = await prisma.visits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends visitsFindFirstArgs>(args?: SelectSubset<T, visitsFindFirstArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitsFindFirstOrThrowArgs} args - Arguments to find a Visits
     * @example
     * // Get one Visits
     * const visits = await prisma.visits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends visitsFindFirstOrThrowArgs>(args?: SelectSubset<T, visitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visits
     * const visits = await prisma.visits.findMany()
     * 
     * // Get first 10 Visits
     * const visits = await prisma.visits.findMany({ take: 10 })
     * 
     * // Only select the `visit_id`
     * const visitsWithVisit_idOnly = await prisma.visits.findMany({ select: { visit_id: true } })
     * 
     */
    findMany<T extends visitsFindManyArgs>(args?: SelectSubset<T, visitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visits.
     * @param {visitsCreateArgs} args - Arguments to create a Visits.
     * @example
     * // Create one Visits
     * const Visits = await prisma.visits.create({
     *   data: {
     *     // ... data to create a Visits
     *   }
     * })
     * 
     */
    create<T extends visitsCreateArgs>(args: SelectSubset<T, visitsCreateArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visits.
     * @param {visitsCreateManyArgs} args - Arguments to create many Visits.
     * @example
     * // Create many Visits
     * const visits = await prisma.visits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends visitsCreateManyArgs>(args?: SelectSubset<T, visitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visits and returns the data saved in the database.
     * @param {visitsCreateManyAndReturnArgs} args - Arguments to create many Visits.
     * @example
     * // Create many Visits
     * const visits = await prisma.visits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visits and only return the `visit_id`
     * const visitsWithVisit_idOnly = await prisma.visits.createManyAndReturn({
     *   select: { visit_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends visitsCreateManyAndReturnArgs>(args?: SelectSubset<T, visitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visits.
     * @param {visitsDeleteArgs} args - Arguments to delete one Visits.
     * @example
     * // Delete one Visits
     * const Visits = await prisma.visits.delete({
     *   where: {
     *     // ... filter to delete one Visits
     *   }
     * })
     * 
     */
    delete<T extends visitsDeleteArgs>(args: SelectSubset<T, visitsDeleteArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visits.
     * @param {visitsUpdateArgs} args - Arguments to update one Visits.
     * @example
     * // Update one Visits
     * const visits = await prisma.visits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends visitsUpdateArgs>(args: SelectSubset<T, visitsUpdateArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visits.
     * @param {visitsDeleteManyArgs} args - Arguments to filter Visits to delete.
     * @example
     * // Delete a few Visits
     * const { count } = await prisma.visits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends visitsDeleteManyArgs>(args?: SelectSubset<T, visitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visits
     * const visits = await prisma.visits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends visitsUpdateManyArgs>(args: SelectSubset<T, visitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visits and returns the data updated in the database.
     * @param {visitsUpdateManyAndReturnArgs} args - Arguments to update many Visits.
     * @example
     * // Update many Visits
     * const visits = await prisma.visits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visits and only return the `visit_id`
     * const visitsWithVisit_idOnly = await prisma.visits.updateManyAndReturn({
     *   select: { visit_id: true },
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
    updateManyAndReturn<T extends visitsUpdateManyAndReturnArgs>(args: SelectSubset<T, visitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visits.
     * @param {visitsUpsertArgs} args - Arguments to update or create a Visits.
     * @example
     * // Update or create a Visits
     * const visits = await prisma.visits.upsert({
     *   create: {
     *     // ... data to create a Visits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visits we want to update
     *   }
     * })
     */
    upsert<T extends visitsUpsertArgs>(args: SelectSubset<T, visitsUpsertArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitsCountArgs} args - Arguments to filter Visits to count.
     * @example
     * // Count the number of Visits
     * const count = await prisma.visits.count({
     *   where: {
     *     // ... the filter for the Visits we want to count
     *   }
     * })
    **/
    count<T extends visitsCountArgs>(
      args?: Subset<T, visitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitsAggregateArgs>(args: Subset<T, VisitsAggregateArgs>): Prisma.PrismaPromise<GetVisitsAggregateType<T>>

    /**
     * Group by Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitsGroupByArgs} args - Group by arguments.
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
      T extends visitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: visitsGroupByArgs['orderBy'] }
        : { orderBy?: visitsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, visitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the visits model
   */
  readonly fields: visitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for visits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__visitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends visits$patientArgs<ExtArgs> = {}>(args?: Subset<T, visits$patientArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    provider<T extends visits$providerArgs<ExtArgs> = {}>(args?: Subset<T, visits$providerArgs<ExtArgs>>): Prisma__providersClient<$Result.GetResult<Prisma.$providersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends visits$doctorArgs<ExtArgs> = {}>(args?: Subset<T, visits$doctorArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    diagnoses<T extends visits$diagnosesArgs<ExtArgs> = {}>(args?: Subset<T, visits$diagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends visits$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, visits$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labs<T extends visits$labsArgs<ExtArgs> = {}>(args?: Subset<T, visits$labsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends visits$filesArgs<ExtArgs> = {}>(args?: Subset<T, visits$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the visits model
   */
  interface visitsFieldRefs {
    readonly visit_id: FieldRef<"visits", 'String'>
    readonly patient_id: FieldRef<"visits", 'String'>
    readonly provider_id: FieldRef<"visits", 'String'>
    readonly doctor_id: FieldRef<"visits", 'String'>
    readonly visit_timestamp: FieldRef<"visits", 'DateTime'>
    readonly visit_type: FieldRef<"visits", 'String'>
    readonly chief_complaint: FieldRef<"visits", 'String'>
    readonly clinical_notes_hash: FieldRef<"visits", 'String'>
    readonly clinical_notes_enc: FieldRef<"visits", 'String'>
    readonly billing_id: FieldRef<"visits", 'String'>
    readonly created_at: FieldRef<"visits", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * visits findUnique
   */
  export type visitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    /**
     * Filter, which visits to fetch.
     */
    where: visitsWhereUniqueInput
  }

  /**
   * visits findUniqueOrThrow
   */
  export type visitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    /**
     * Filter, which visits to fetch.
     */
    where: visitsWhereUniqueInput
  }

  /**
   * visits findFirst
   */
  export type visitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    /**
     * Filter, which visits to fetch.
     */
    where?: visitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visits to fetch.
     */
    orderBy?: visitsOrderByWithRelationInput | visitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for visits.
     */
    cursor?: visitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of visits.
     */
    distinct?: VisitsScalarFieldEnum | VisitsScalarFieldEnum[]
  }

  /**
   * visits findFirstOrThrow
   */
  export type visitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    /**
     * Filter, which visits to fetch.
     */
    where?: visitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visits to fetch.
     */
    orderBy?: visitsOrderByWithRelationInput | visitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for visits.
     */
    cursor?: visitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of visits.
     */
    distinct?: VisitsScalarFieldEnum | VisitsScalarFieldEnum[]
  }

  /**
   * visits findMany
   */
  export type visitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    /**
     * Filter, which visits to fetch.
     */
    where?: visitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visits to fetch.
     */
    orderBy?: visitsOrderByWithRelationInput | visitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing visits.
     */
    cursor?: visitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visits.
     */
    skip?: number
    distinct?: VisitsScalarFieldEnum | VisitsScalarFieldEnum[]
  }

  /**
   * visits create
   */
  export type visitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    /**
     * The data needed to create a visits.
     */
    data?: XOR<visitsCreateInput, visitsUncheckedCreateInput>
  }

  /**
   * visits createMany
   */
  export type visitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many visits.
     */
    data: visitsCreateManyInput | visitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * visits createManyAndReturn
   */
  export type visitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * The data used to create many visits.
     */
    data: visitsCreateManyInput | visitsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * visits update
   */
  export type visitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    /**
     * The data needed to update a visits.
     */
    data: XOR<visitsUpdateInput, visitsUncheckedUpdateInput>
    /**
     * Choose, which visits to update.
     */
    where: visitsWhereUniqueInput
  }

  /**
   * visits updateMany
   */
  export type visitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update visits.
     */
    data: XOR<visitsUpdateManyMutationInput, visitsUncheckedUpdateManyInput>
    /**
     * Filter which visits to update
     */
    where?: visitsWhereInput
    /**
     * Limit how many visits to update.
     */
    limit?: number
  }

  /**
   * visits updateManyAndReturn
   */
  export type visitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * The data used to update visits.
     */
    data: XOR<visitsUpdateManyMutationInput, visitsUncheckedUpdateManyInput>
    /**
     * Filter which visits to update
     */
    where?: visitsWhereInput
    /**
     * Limit how many visits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * visits upsert
   */
  export type visitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    /**
     * The filter to search for the visits to update in case it exists.
     */
    where: visitsWhereUniqueInput
    /**
     * In case the visits found by the `where` argument doesn't exist, create a new visits with this data.
     */
    create: XOR<visitsCreateInput, visitsUncheckedCreateInput>
    /**
     * In case the visits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<visitsUpdateInput, visitsUncheckedUpdateInput>
  }

  /**
   * visits delete
   */
  export type visitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    /**
     * Filter which visits to delete.
     */
    where: visitsWhereUniqueInput
  }

  /**
   * visits deleteMany
   */
  export type visitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which visits to delete
     */
    where?: visitsWhereInput
    /**
     * Limit how many visits to delete.
     */
    limit?: number
  }

  /**
   * visits.patient
   */
  export type visits$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    where?: patientsWhereInput
  }

  /**
   * visits.provider
   */
  export type visits$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the providers
     */
    select?: providersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the providers
     */
    omit?: providersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: providersInclude<ExtArgs> | null
    where?: providersWhereInput
  }

  /**
   * visits.doctor
   */
  export type visits$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    where?: doctorsWhereInput
  }

  /**
   * visits.diagnoses
   */
  export type visits$diagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesInclude<ExtArgs> | null
    where?: diagnosesWhereInput
    orderBy?: diagnosesOrderByWithRelationInput | diagnosesOrderByWithRelationInput[]
    cursor?: diagnosesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * visits.prescriptions
   */
  export type visits$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
    where?: prescriptionsWhereInput
    orderBy?: prescriptionsOrderByWithRelationInput | prescriptionsOrderByWithRelationInput[]
    cursor?: prescriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionsScalarFieldEnum | PrescriptionsScalarFieldEnum[]
  }

  /**
   * visits.labs
   */
  export type visits$labsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsInclude<ExtArgs> | null
    where?: labsWhereInput
    orderBy?: labsOrderByWithRelationInput | labsOrderByWithRelationInput[]
    cursor?: labsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabsScalarFieldEnum | LabsScalarFieldEnum[]
  }

  /**
   * visits.files
   */
  export type visits$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    where?: filesWhereInput
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    cursor?: filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * visits without action
   */
  export type visitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
  }


  /**
   * Model diagnoses
   */

  export type AggregateDiagnoses = {
    _count: DiagnosesCountAggregateOutputType | null
    _min: DiagnosesMinAggregateOutputType | null
    _max: DiagnosesMaxAggregateOutputType | null
  }

  export type DiagnosesMinAggregateOutputType = {
    dx_id: string | null
    visit_id: string | null
    code_icd10: string | null
    description: string | null
    severity: string | null
    created_at: Date | null
  }

  export type DiagnosesMaxAggregateOutputType = {
    dx_id: string | null
    visit_id: string | null
    code_icd10: string | null
    description: string | null
    severity: string | null
    created_at: Date | null
  }

  export type DiagnosesCountAggregateOutputType = {
    dx_id: number
    visit_id: number
    code_icd10: number
    description: number
    severity: number
    created_at: number
    _all: number
  }


  export type DiagnosesMinAggregateInputType = {
    dx_id?: true
    visit_id?: true
    code_icd10?: true
    description?: true
    severity?: true
    created_at?: true
  }

  export type DiagnosesMaxAggregateInputType = {
    dx_id?: true
    visit_id?: true
    code_icd10?: true
    description?: true
    severity?: true
    created_at?: true
  }

  export type DiagnosesCountAggregateInputType = {
    dx_id?: true
    visit_id?: true
    code_icd10?: true
    description?: true
    severity?: true
    created_at?: true
    _all?: true
  }

  export type DiagnosesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnoses to aggregate.
     */
    where?: diagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnoses to fetch.
     */
    orderBy?: diagnosesOrderByWithRelationInput | diagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: diagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned diagnoses
    **/
    _count?: true | DiagnosesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosesMaxAggregateInputType
  }

  export type GetDiagnosesAggregateType<T extends DiagnosesAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnoses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnoses[P]>
      : GetScalarType<T[P], AggregateDiagnoses[P]>
  }




  export type diagnosesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diagnosesWhereInput
    orderBy?: diagnosesOrderByWithAggregationInput | diagnosesOrderByWithAggregationInput[]
    by: DiagnosesScalarFieldEnum[] | DiagnosesScalarFieldEnum
    having?: diagnosesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosesCountAggregateInputType | true
    _min?: DiagnosesMinAggregateInputType
    _max?: DiagnosesMaxAggregateInputType
  }

  export type DiagnosesGroupByOutputType = {
    dx_id: string
    visit_id: string | null
    code_icd10: string | null
    description: string | null
    severity: string | null
    created_at: Date
    _count: DiagnosesCountAggregateOutputType | null
    _min: DiagnosesMinAggregateOutputType | null
    _max: DiagnosesMaxAggregateOutputType | null
  }

  type GetDiagnosesGroupByPayload<T extends diagnosesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosesGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosesGroupByOutputType[P]>
        }
      >
    >


  export type diagnosesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dx_id?: boolean
    visit_id?: boolean
    code_icd10?: boolean
    description?: boolean
    severity?: boolean
    created_at?: boolean
    visit?: boolean | diagnoses$visitArgs<ExtArgs>
  }, ExtArgs["result"]["diagnoses"]>

  export type diagnosesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dx_id?: boolean
    visit_id?: boolean
    code_icd10?: boolean
    description?: boolean
    severity?: boolean
    created_at?: boolean
    visit?: boolean | diagnoses$visitArgs<ExtArgs>
  }, ExtArgs["result"]["diagnoses"]>

  export type diagnosesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dx_id?: boolean
    visit_id?: boolean
    code_icd10?: boolean
    description?: boolean
    severity?: boolean
    created_at?: boolean
    visit?: boolean | diagnoses$visitArgs<ExtArgs>
  }, ExtArgs["result"]["diagnoses"]>

  export type diagnosesSelectScalar = {
    dx_id?: boolean
    visit_id?: boolean
    code_icd10?: boolean
    description?: boolean
    severity?: boolean
    created_at?: boolean
  }

  export type diagnosesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dx_id" | "visit_id" | "code_icd10" | "description" | "severity" | "created_at", ExtArgs["result"]["diagnoses"]>
  export type diagnosesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | diagnoses$visitArgs<ExtArgs>
  }
  export type diagnosesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | diagnoses$visitArgs<ExtArgs>
  }
  export type diagnosesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | diagnoses$visitArgs<ExtArgs>
  }

  export type $diagnosesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "diagnoses"
    objects: {
      visit: Prisma.$visitsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      dx_id: string
      visit_id: string | null
      code_icd10: string | null
      description: string | null
      severity: string | null
      created_at: Date
    }, ExtArgs["result"]["diagnoses"]>
    composites: {}
  }

  type diagnosesGetPayload<S extends boolean | null | undefined | diagnosesDefaultArgs> = $Result.GetResult<Prisma.$diagnosesPayload, S>

  type diagnosesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<diagnosesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosesCountAggregateInputType | true
    }

  export interface diagnosesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['diagnoses'], meta: { name: 'diagnoses' } }
    /**
     * Find zero or one Diagnoses that matches the filter.
     * @param {diagnosesFindUniqueArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends diagnosesFindUniqueArgs>(args: SelectSubset<T, diagnosesFindUniqueArgs<ExtArgs>>): Prisma__diagnosesClient<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnoses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {diagnosesFindUniqueOrThrowArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends diagnosesFindUniqueOrThrowArgs>(args: SelectSubset<T, diagnosesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__diagnosesClient<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosesFindFirstArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends diagnosesFindFirstArgs>(args?: SelectSubset<T, diagnosesFindFirstArgs<ExtArgs>>): Prisma__diagnosesClient<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnoses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosesFindFirstOrThrowArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends diagnosesFindFirstOrThrowArgs>(args?: SelectSubset<T, diagnosesFindFirstOrThrowArgs<ExtArgs>>): Prisma__diagnosesClient<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnoses
     * const diagnoses = await prisma.diagnoses.findMany()
     * 
     * // Get first 10 Diagnoses
     * const diagnoses = await prisma.diagnoses.findMany({ take: 10 })
     * 
     * // Only select the `dx_id`
     * const diagnosesWithDx_idOnly = await prisma.diagnoses.findMany({ select: { dx_id: true } })
     * 
     */
    findMany<T extends diagnosesFindManyArgs>(args?: SelectSubset<T, diagnosesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnoses.
     * @param {diagnosesCreateArgs} args - Arguments to create a Diagnoses.
     * @example
     * // Create one Diagnoses
     * const Diagnoses = await prisma.diagnoses.create({
     *   data: {
     *     // ... data to create a Diagnoses
     *   }
     * })
     * 
     */
    create<T extends diagnosesCreateArgs>(args: SelectSubset<T, diagnosesCreateArgs<ExtArgs>>): Prisma__diagnosesClient<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnoses.
     * @param {diagnosesCreateManyArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnoses = await prisma.diagnoses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends diagnosesCreateManyArgs>(args?: SelectSubset<T, diagnosesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diagnoses and returns the data saved in the database.
     * @param {diagnosesCreateManyAndReturnArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnoses = await prisma.diagnoses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diagnoses and only return the `dx_id`
     * const diagnosesWithDx_idOnly = await prisma.diagnoses.createManyAndReturn({
     *   select: { dx_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends diagnosesCreateManyAndReturnArgs>(args?: SelectSubset<T, diagnosesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diagnoses.
     * @param {diagnosesDeleteArgs} args - Arguments to delete one Diagnoses.
     * @example
     * // Delete one Diagnoses
     * const Diagnoses = await prisma.diagnoses.delete({
     *   where: {
     *     // ... filter to delete one Diagnoses
     *   }
     * })
     * 
     */
    delete<T extends diagnosesDeleteArgs>(args: SelectSubset<T, diagnosesDeleteArgs<ExtArgs>>): Prisma__diagnosesClient<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnoses.
     * @param {diagnosesUpdateArgs} args - Arguments to update one Diagnoses.
     * @example
     * // Update one Diagnoses
     * const diagnoses = await prisma.diagnoses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends diagnosesUpdateArgs>(args: SelectSubset<T, diagnosesUpdateArgs<ExtArgs>>): Prisma__diagnosesClient<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnoses.
     * @param {diagnosesDeleteManyArgs} args - Arguments to filter Diagnoses to delete.
     * @example
     * // Delete a few Diagnoses
     * const { count } = await prisma.diagnoses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends diagnosesDeleteManyArgs>(args?: SelectSubset<T, diagnosesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnoses
     * const diagnoses = await prisma.diagnoses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends diagnosesUpdateManyArgs>(args: SelectSubset<T, diagnosesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses and returns the data updated in the database.
     * @param {diagnosesUpdateManyAndReturnArgs} args - Arguments to update many Diagnoses.
     * @example
     * // Update many Diagnoses
     * const diagnoses = await prisma.diagnoses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diagnoses and only return the `dx_id`
     * const diagnosesWithDx_idOnly = await prisma.diagnoses.updateManyAndReturn({
     *   select: { dx_id: true },
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
    updateManyAndReturn<T extends diagnosesUpdateManyAndReturnArgs>(args: SelectSubset<T, diagnosesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diagnoses.
     * @param {diagnosesUpsertArgs} args - Arguments to update or create a Diagnoses.
     * @example
     * // Update or create a Diagnoses
     * const diagnoses = await prisma.diagnoses.upsert({
     *   create: {
     *     // ... data to create a Diagnoses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnoses we want to update
     *   }
     * })
     */
    upsert<T extends diagnosesUpsertArgs>(args: SelectSubset<T, diagnosesUpsertArgs<ExtArgs>>): Prisma__diagnosesClient<$Result.GetResult<Prisma.$diagnosesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosesCountArgs} args - Arguments to filter Diagnoses to count.
     * @example
     * // Count the number of Diagnoses
     * const count = await prisma.diagnoses.count({
     *   where: {
     *     // ... the filter for the Diagnoses we want to count
     *   }
     * })
    **/
    count<T extends diagnosesCountArgs>(
      args?: Subset<T, diagnosesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosesAggregateArgs>(args: Subset<T, DiagnosesAggregateArgs>): Prisma.PrismaPromise<GetDiagnosesAggregateType<T>>

    /**
     * Group by Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diagnosesGroupByArgs} args - Group by arguments.
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
      T extends diagnosesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: diagnosesGroupByArgs['orderBy'] }
        : { orderBy?: diagnosesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, diagnosesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the diagnoses model
   */
  readonly fields: diagnosesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for diagnoses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__diagnosesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visit<T extends diagnoses$visitArgs<ExtArgs> = {}>(args?: Subset<T, diagnoses$visitArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the diagnoses model
   */
  interface diagnosesFieldRefs {
    readonly dx_id: FieldRef<"diagnoses", 'String'>
    readonly visit_id: FieldRef<"diagnoses", 'String'>
    readonly code_icd10: FieldRef<"diagnoses", 'String'>
    readonly description: FieldRef<"diagnoses", 'String'>
    readonly severity: FieldRef<"diagnoses", 'String'>
    readonly created_at: FieldRef<"diagnoses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * diagnoses findUnique
   */
  export type diagnosesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesInclude<ExtArgs> | null
    /**
     * Filter, which diagnoses to fetch.
     */
    where: diagnosesWhereUniqueInput
  }

  /**
   * diagnoses findUniqueOrThrow
   */
  export type diagnosesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesInclude<ExtArgs> | null
    /**
     * Filter, which diagnoses to fetch.
     */
    where: diagnosesWhereUniqueInput
  }

  /**
   * diagnoses findFirst
   */
  export type diagnosesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesInclude<ExtArgs> | null
    /**
     * Filter, which diagnoses to fetch.
     */
    where?: diagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnoses to fetch.
     */
    orderBy?: diagnosesOrderByWithRelationInput | diagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnoses.
     */
    cursor?: diagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnoses.
     */
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * diagnoses findFirstOrThrow
   */
  export type diagnosesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesInclude<ExtArgs> | null
    /**
     * Filter, which diagnoses to fetch.
     */
    where?: diagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnoses to fetch.
     */
    orderBy?: diagnosesOrderByWithRelationInput | diagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diagnoses.
     */
    cursor?: diagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diagnoses.
     */
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * diagnoses findMany
   */
  export type diagnosesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesInclude<ExtArgs> | null
    /**
     * Filter, which diagnoses to fetch.
     */
    where?: diagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diagnoses to fetch.
     */
    orderBy?: diagnosesOrderByWithRelationInput | diagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing diagnoses.
     */
    cursor?: diagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diagnoses.
     */
    skip?: number
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * diagnoses create
   */
  export type diagnosesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesInclude<ExtArgs> | null
    /**
     * The data needed to create a diagnoses.
     */
    data?: XOR<diagnosesCreateInput, diagnosesUncheckedCreateInput>
  }

  /**
   * diagnoses createMany
   */
  export type diagnosesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many diagnoses.
     */
    data: diagnosesCreateManyInput | diagnosesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * diagnoses createManyAndReturn
   */
  export type diagnosesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * The data used to create many diagnoses.
     */
    data: diagnosesCreateManyInput | diagnosesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * diagnoses update
   */
  export type diagnosesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesInclude<ExtArgs> | null
    /**
     * The data needed to update a diagnoses.
     */
    data: XOR<diagnosesUpdateInput, diagnosesUncheckedUpdateInput>
    /**
     * Choose, which diagnoses to update.
     */
    where: diagnosesWhereUniqueInput
  }

  /**
   * diagnoses updateMany
   */
  export type diagnosesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update diagnoses.
     */
    data: XOR<diagnosesUpdateManyMutationInput, diagnosesUncheckedUpdateManyInput>
    /**
     * Filter which diagnoses to update
     */
    where?: diagnosesWhereInput
    /**
     * Limit how many diagnoses to update.
     */
    limit?: number
  }

  /**
   * diagnoses updateManyAndReturn
   */
  export type diagnosesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * The data used to update diagnoses.
     */
    data: XOR<diagnosesUpdateManyMutationInput, diagnosesUncheckedUpdateManyInput>
    /**
     * Filter which diagnoses to update
     */
    where?: diagnosesWhereInput
    /**
     * Limit how many diagnoses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * diagnoses upsert
   */
  export type diagnosesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesInclude<ExtArgs> | null
    /**
     * The filter to search for the diagnoses to update in case it exists.
     */
    where: diagnosesWhereUniqueInput
    /**
     * In case the diagnoses found by the `where` argument doesn't exist, create a new diagnoses with this data.
     */
    create: XOR<diagnosesCreateInput, diagnosesUncheckedCreateInput>
    /**
     * In case the diagnoses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<diagnosesUpdateInput, diagnosesUncheckedUpdateInput>
  }

  /**
   * diagnoses delete
   */
  export type diagnosesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesInclude<ExtArgs> | null
    /**
     * Filter which diagnoses to delete.
     */
    where: diagnosesWhereUniqueInput
  }

  /**
   * diagnoses deleteMany
   */
  export type diagnosesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diagnoses to delete
     */
    where?: diagnosesWhereInput
    /**
     * Limit how many diagnoses to delete.
     */
    limit?: number
  }

  /**
   * diagnoses.visit
   */
  export type diagnoses$visitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    where?: visitsWhereInput
  }

  /**
   * diagnoses without action
   */
  export type diagnosesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diagnoses
     */
    select?: diagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diagnoses
     */
    omit?: diagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diagnosesInclude<ExtArgs> | null
  }


  /**
   * Model prescriptions
   */

  export type AggregatePrescriptions = {
    _count: PrescriptionsCountAggregateOutputType | null
    _min: PrescriptionsMinAggregateOutputType | null
    _max: PrescriptionsMaxAggregateOutputType | null
  }

  export type PrescriptionsMinAggregateOutputType = {
    presc_id: string | null
    visit_id: string | null
    presc_issued_by: string | null
    presc_hash: string | null
    created_at: Date | null
  }

  export type PrescriptionsMaxAggregateOutputType = {
    presc_id: string | null
    visit_id: string | null
    presc_issued_by: string | null
    presc_hash: string | null
    created_at: Date | null
  }

  export type PrescriptionsCountAggregateOutputType = {
    presc_id: number
    visit_id: number
    medications: number
    presc_issued_by: number
    presc_hash: number
    created_at: number
    _all: number
  }


  export type PrescriptionsMinAggregateInputType = {
    presc_id?: true
    visit_id?: true
    presc_issued_by?: true
    presc_hash?: true
    created_at?: true
  }

  export type PrescriptionsMaxAggregateInputType = {
    presc_id?: true
    visit_id?: true
    presc_issued_by?: true
    presc_hash?: true
    created_at?: true
  }

  export type PrescriptionsCountAggregateInputType = {
    presc_id?: true
    visit_id?: true
    medications?: true
    presc_issued_by?: true
    presc_hash?: true
    created_at?: true
    _all?: true
  }

  export type PrescriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prescriptions to aggregate.
     */
    where?: prescriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionsOrderByWithRelationInput | prescriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prescriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prescriptions
    **/
    _count?: true | PrescriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionsMaxAggregateInputType
  }

  export type GetPrescriptionsAggregateType<T extends PrescriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescriptions[P]>
      : GetScalarType<T[P], AggregatePrescriptions[P]>
  }




  export type prescriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prescriptionsWhereInput
    orderBy?: prescriptionsOrderByWithAggregationInput | prescriptionsOrderByWithAggregationInput[]
    by: PrescriptionsScalarFieldEnum[] | PrescriptionsScalarFieldEnum
    having?: prescriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionsCountAggregateInputType | true
    _min?: PrescriptionsMinAggregateInputType
    _max?: PrescriptionsMaxAggregateInputType
  }

  export type PrescriptionsGroupByOutputType = {
    presc_id: string
    visit_id: string | null
    medications: JsonValue | null
    presc_issued_by: string | null
    presc_hash: string | null
    created_at: Date
    _count: PrescriptionsCountAggregateOutputType | null
    _min: PrescriptionsMinAggregateOutputType | null
    _max: PrescriptionsMaxAggregateOutputType | null
  }

  type GetPrescriptionsGroupByPayload<T extends prescriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionsGroupByOutputType[P]>
        }
      >
    >


  export type prescriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    presc_id?: boolean
    visit_id?: boolean
    medications?: boolean
    presc_issued_by?: boolean
    presc_hash?: boolean
    created_at?: boolean
    visit?: boolean | prescriptions$visitArgs<ExtArgs>
    doctor?: boolean | prescriptions$doctorArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptions"]>

  export type prescriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    presc_id?: boolean
    visit_id?: boolean
    medications?: boolean
    presc_issued_by?: boolean
    presc_hash?: boolean
    created_at?: boolean
    visit?: boolean | prescriptions$visitArgs<ExtArgs>
    doctor?: boolean | prescriptions$doctorArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptions"]>

  export type prescriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    presc_id?: boolean
    visit_id?: boolean
    medications?: boolean
    presc_issued_by?: boolean
    presc_hash?: boolean
    created_at?: boolean
    visit?: boolean | prescriptions$visitArgs<ExtArgs>
    doctor?: boolean | prescriptions$doctorArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptions"]>

  export type prescriptionsSelectScalar = {
    presc_id?: boolean
    visit_id?: boolean
    medications?: boolean
    presc_issued_by?: boolean
    presc_hash?: boolean
    created_at?: boolean
  }

  export type prescriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"presc_id" | "visit_id" | "medications" | "presc_issued_by" | "presc_hash" | "created_at", ExtArgs["result"]["prescriptions"]>
  export type prescriptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | prescriptions$visitArgs<ExtArgs>
    doctor?: boolean | prescriptions$doctorArgs<ExtArgs>
  }
  export type prescriptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | prescriptions$visitArgs<ExtArgs>
    doctor?: boolean | prescriptions$doctorArgs<ExtArgs>
  }
  export type prescriptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | prescriptions$visitArgs<ExtArgs>
    doctor?: boolean | prescriptions$doctorArgs<ExtArgs>
  }

  export type $prescriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prescriptions"
    objects: {
      visit: Prisma.$visitsPayload<ExtArgs> | null
      doctor: Prisma.$doctorsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      presc_id: string
      visit_id: string | null
      medications: Prisma.JsonValue | null
      presc_issued_by: string | null
      presc_hash: string | null
      created_at: Date
    }, ExtArgs["result"]["prescriptions"]>
    composites: {}
  }

  type prescriptionsGetPayload<S extends boolean | null | undefined | prescriptionsDefaultArgs> = $Result.GetResult<Prisma.$prescriptionsPayload, S>

  type prescriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prescriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionsCountAggregateInputType | true
    }

  export interface prescriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prescriptions'], meta: { name: 'prescriptions' } }
    /**
     * Find zero or one Prescriptions that matches the filter.
     * @param {prescriptionsFindUniqueArgs} args - Arguments to find a Prescriptions
     * @example
     * // Get one Prescriptions
     * const prescriptions = await prisma.prescriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prescriptionsFindUniqueArgs>(args: SelectSubset<T, prescriptionsFindUniqueArgs<ExtArgs>>): Prisma__prescriptionsClient<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prescriptionsFindUniqueOrThrowArgs} args - Arguments to find a Prescriptions
     * @example
     * // Get one Prescriptions
     * const prescriptions = await prisma.prescriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prescriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, prescriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prescriptionsClient<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionsFindFirstArgs} args - Arguments to find a Prescriptions
     * @example
     * // Get one Prescriptions
     * const prescriptions = await prisma.prescriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prescriptionsFindFirstArgs>(args?: SelectSubset<T, prescriptionsFindFirstArgs<ExtArgs>>): Prisma__prescriptionsClient<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionsFindFirstOrThrowArgs} args - Arguments to find a Prescriptions
     * @example
     * // Get one Prescriptions
     * const prescriptions = await prisma.prescriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prescriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, prescriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__prescriptionsClient<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescriptions.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescriptions.findMany({ take: 10 })
     * 
     * // Only select the `presc_id`
     * const prescriptionsWithPresc_idOnly = await prisma.prescriptions.findMany({ select: { presc_id: true } })
     * 
     */
    findMany<T extends prescriptionsFindManyArgs>(args?: SelectSubset<T, prescriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescriptions.
     * @param {prescriptionsCreateArgs} args - Arguments to create a Prescriptions.
     * @example
     * // Create one Prescriptions
     * const Prescriptions = await prisma.prescriptions.create({
     *   data: {
     *     // ... data to create a Prescriptions
     *   }
     * })
     * 
     */
    create<T extends prescriptionsCreateArgs>(args: SelectSubset<T, prescriptionsCreateArgs<ExtArgs>>): Prisma__prescriptionsClient<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {prescriptionsCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescriptions = await prisma.prescriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prescriptionsCreateManyArgs>(args?: SelectSubset<T, prescriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {prescriptionsCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescriptions = await prisma.prescriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `presc_id`
     * const prescriptionsWithPresc_idOnly = await prisma.prescriptions.createManyAndReturn({
     *   select: { presc_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prescriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, prescriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescriptions.
     * @param {prescriptionsDeleteArgs} args - Arguments to delete one Prescriptions.
     * @example
     * // Delete one Prescriptions
     * const Prescriptions = await prisma.prescriptions.delete({
     *   where: {
     *     // ... filter to delete one Prescriptions
     *   }
     * })
     * 
     */
    delete<T extends prescriptionsDeleteArgs>(args: SelectSubset<T, prescriptionsDeleteArgs<ExtArgs>>): Prisma__prescriptionsClient<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescriptions.
     * @param {prescriptionsUpdateArgs} args - Arguments to update one Prescriptions.
     * @example
     * // Update one Prescriptions
     * const prescriptions = await prisma.prescriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prescriptionsUpdateArgs>(args: SelectSubset<T, prescriptionsUpdateArgs<ExtArgs>>): Prisma__prescriptionsClient<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {prescriptionsDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prescriptionsDeleteManyArgs>(args?: SelectSubset<T, prescriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescriptions = await prisma.prescriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prescriptionsUpdateManyArgs>(args: SelectSubset<T, prescriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {prescriptionsUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescriptions = await prisma.prescriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `presc_id`
     * const prescriptionsWithPresc_idOnly = await prisma.prescriptions.updateManyAndReturn({
     *   select: { presc_id: true },
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
    updateManyAndReturn<T extends prescriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, prescriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescriptions.
     * @param {prescriptionsUpsertArgs} args - Arguments to update or create a Prescriptions.
     * @example
     * // Update or create a Prescriptions
     * const prescriptions = await prisma.prescriptions.upsert({
     *   create: {
     *     // ... data to create a Prescriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescriptions we want to update
     *   }
     * })
     */
    upsert<T extends prescriptionsUpsertArgs>(args: SelectSubset<T, prescriptionsUpsertArgs<ExtArgs>>): Prisma__prescriptionsClient<$Result.GetResult<Prisma.$prescriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionsCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescriptions.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends prescriptionsCountArgs>(
      args?: Subset<T, prescriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionsAggregateArgs>(args: Subset<T, PrescriptionsAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionsAggregateType<T>>

    /**
     * Group by Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionsGroupByArgs} args - Group by arguments.
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
      T extends prescriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prescriptionsGroupByArgs['orderBy'] }
        : { orderBy?: prescriptionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, prescriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prescriptions model
   */
  readonly fields: prescriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prescriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prescriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visit<T extends prescriptions$visitArgs<ExtArgs> = {}>(args?: Subset<T, prescriptions$visitArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends prescriptions$doctorArgs<ExtArgs> = {}>(args?: Subset<T, prescriptions$doctorArgs<ExtArgs>>): Prisma__doctorsClient<$Result.GetResult<Prisma.$doctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the prescriptions model
   */
  interface prescriptionsFieldRefs {
    readonly presc_id: FieldRef<"prescriptions", 'String'>
    readonly visit_id: FieldRef<"prescriptions", 'String'>
    readonly medications: FieldRef<"prescriptions", 'Json'>
    readonly presc_issued_by: FieldRef<"prescriptions", 'String'>
    readonly presc_hash: FieldRef<"prescriptions", 'String'>
    readonly created_at: FieldRef<"prescriptions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * prescriptions findUnique
   */
  export type prescriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
    /**
     * Filter, which prescriptions to fetch.
     */
    where: prescriptionsWhereUniqueInput
  }

  /**
   * prescriptions findUniqueOrThrow
   */
  export type prescriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
    /**
     * Filter, which prescriptions to fetch.
     */
    where: prescriptionsWhereUniqueInput
  }

  /**
   * prescriptions findFirst
   */
  export type prescriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
    /**
     * Filter, which prescriptions to fetch.
     */
    where?: prescriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionsOrderByWithRelationInput | prescriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prescriptions.
     */
    cursor?: prescriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prescriptions.
     */
    distinct?: PrescriptionsScalarFieldEnum | PrescriptionsScalarFieldEnum[]
  }

  /**
   * prescriptions findFirstOrThrow
   */
  export type prescriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
    /**
     * Filter, which prescriptions to fetch.
     */
    where?: prescriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionsOrderByWithRelationInput | prescriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prescriptions.
     */
    cursor?: prescriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prescriptions.
     */
    distinct?: PrescriptionsScalarFieldEnum | PrescriptionsScalarFieldEnum[]
  }

  /**
   * prescriptions findMany
   */
  export type prescriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
    /**
     * Filter, which prescriptions to fetch.
     */
    where?: prescriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionsOrderByWithRelationInput | prescriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prescriptions.
     */
    cursor?: prescriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prescriptions.
     */
    skip?: number
    distinct?: PrescriptionsScalarFieldEnum | PrescriptionsScalarFieldEnum[]
  }

  /**
   * prescriptions create
   */
  export type prescriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a prescriptions.
     */
    data?: XOR<prescriptionsCreateInput, prescriptionsUncheckedCreateInput>
  }

  /**
   * prescriptions createMany
   */
  export type prescriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prescriptions.
     */
    data: prescriptionsCreateManyInput | prescriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prescriptions createManyAndReturn
   */
  export type prescriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many prescriptions.
     */
    data: prescriptionsCreateManyInput | prescriptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prescriptions update
   */
  export type prescriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a prescriptions.
     */
    data: XOR<prescriptionsUpdateInput, prescriptionsUncheckedUpdateInput>
    /**
     * Choose, which prescriptions to update.
     */
    where: prescriptionsWhereUniqueInput
  }

  /**
   * prescriptions updateMany
   */
  export type prescriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prescriptions.
     */
    data: XOR<prescriptionsUpdateManyMutationInput, prescriptionsUncheckedUpdateManyInput>
    /**
     * Filter which prescriptions to update
     */
    where?: prescriptionsWhereInput
    /**
     * Limit how many prescriptions to update.
     */
    limit?: number
  }

  /**
   * prescriptions updateManyAndReturn
   */
  export type prescriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * The data used to update prescriptions.
     */
    data: XOR<prescriptionsUpdateManyMutationInput, prescriptionsUncheckedUpdateManyInput>
    /**
     * Filter which prescriptions to update
     */
    where?: prescriptionsWhereInput
    /**
     * Limit how many prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prescriptions upsert
   */
  export type prescriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the prescriptions to update in case it exists.
     */
    where: prescriptionsWhereUniqueInput
    /**
     * In case the prescriptions found by the `where` argument doesn't exist, create a new prescriptions with this data.
     */
    create: XOR<prescriptionsCreateInput, prescriptionsUncheckedCreateInput>
    /**
     * In case the prescriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prescriptionsUpdateInput, prescriptionsUncheckedUpdateInput>
  }

  /**
   * prescriptions delete
   */
  export type prescriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
    /**
     * Filter which prescriptions to delete.
     */
    where: prescriptionsWhereUniqueInput
  }

  /**
   * prescriptions deleteMany
   */
  export type prescriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prescriptions to delete
     */
    where?: prescriptionsWhereInput
    /**
     * Limit how many prescriptions to delete.
     */
    limit?: number
  }

  /**
   * prescriptions.visit
   */
  export type prescriptions$visitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    where?: visitsWhereInput
  }

  /**
   * prescriptions.doctor
   */
  export type prescriptions$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the doctors
     */
    select?: doctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the doctors
     */
    omit?: doctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: doctorsInclude<ExtArgs> | null
    where?: doctorsWhereInput
  }

  /**
   * prescriptions without action
   */
  export type prescriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescriptions
     */
    select?: prescriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescriptions
     */
    omit?: prescriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionsInclude<ExtArgs> | null
  }


  /**
   * Model labs
   */

  export type AggregateLabs = {
    _count: LabsCountAggregateOutputType | null
    _min: LabsMinAggregateOutputType | null
    _max: LabsMaxAggregateOutputType | null
  }

  export type LabsMinAggregateOutputType = {
    lab_id: string | null
    visit_id: string | null
    lab_type: string | null
    results_enc: string | null
    results_hash: string | null
    created_at: Date | null
  }

  export type LabsMaxAggregateOutputType = {
    lab_id: string | null
    visit_id: string | null
    lab_type: string | null
    results_enc: string | null
    results_hash: string | null
    created_at: Date | null
  }

  export type LabsCountAggregateOutputType = {
    lab_id: number
    visit_id: number
    lab_type: number
    results_enc: number
    results_hash: number
    attachments: number
    created_at: number
    _all: number
  }


  export type LabsMinAggregateInputType = {
    lab_id?: true
    visit_id?: true
    lab_type?: true
    results_enc?: true
    results_hash?: true
    created_at?: true
  }

  export type LabsMaxAggregateInputType = {
    lab_id?: true
    visit_id?: true
    lab_type?: true
    results_enc?: true
    results_hash?: true
    created_at?: true
  }

  export type LabsCountAggregateInputType = {
    lab_id?: true
    visit_id?: true
    lab_type?: true
    results_enc?: true
    results_hash?: true
    attachments?: true
    created_at?: true
    _all?: true
  }

  export type LabsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which labs to aggregate.
     */
    where?: labsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of labs to fetch.
     */
    orderBy?: labsOrderByWithRelationInput | labsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: labsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned labs
    **/
    _count?: true | LabsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabsMaxAggregateInputType
  }

  export type GetLabsAggregateType<T extends LabsAggregateArgs> = {
        [P in keyof T & keyof AggregateLabs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabs[P]>
      : GetScalarType<T[P], AggregateLabs[P]>
  }




  export type labsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: labsWhereInput
    orderBy?: labsOrderByWithAggregationInput | labsOrderByWithAggregationInput[]
    by: LabsScalarFieldEnum[] | LabsScalarFieldEnum
    having?: labsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabsCountAggregateInputType | true
    _min?: LabsMinAggregateInputType
    _max?: LabsMaxAggregateInputType
  }

  export type LabsGroupByOutputType = {
    lab_id: string
    visit_id: string | null
    lab_type: string | null
    results_enc: string | null
    results_hash: string | null
    attachments: JsonValue | null
    created_at: Date
    _count: LabsCountAggregateOutputType | null
    _min: LabsMinAggregateOutputType | null
    _max: LabsMaxAggregateOutputType | null
  }

  type GetLabsGroupByPayload<T extends labsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabsGroupByOutputType[P]>
            : GetScalarType<T[P], LabsGroupByOutputType[P]>
        }
      >
    >


  export type labsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lab_id?: boolean
    visit_id?: boolean
    lab_type?: boolean
    results_enc?: boolean
    results_hash?: boolean
    attachments?: boolean
    created_at?: boolean
    visit?: boolean | labs$visitArgs<ExtArgs>
  }, ExtArgs["result"]["labs"]>

  export type labsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lab_id?: boolean
    visit_id?: boolean
    lab_type?: boolean
    results_enc?: boolean
    results_hash?: boolean
    attachments?: boolean
    created_at?: boolean
    visit?: boolean | labs$visitArgs<ExtArgs>
  }, ExtArgs["result"]["labs"]>

  export type labsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lab_id?: boolean
    visit_id?: boolean
    lab_type?: boolean
    results_enc?: boolean
    results_hash?: boolean
    attachments?: boolean
    created_at?: boolean
    visit?: boolean | labs$visitArgs<ExtArgs>
  }, ExtArgs["result"]["labs"]>

  export type labsSelectScalar = {
    lab_id?: boolean
    visit_id?: boolean
    lab_type?: boolean
    results_enc?: boolean
    results_hash?: boolean
    attachments?: boolean
    created_at?: boolean
  }

  export type labsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"lab_id" | "visit_id" | "lab_type" | "results_enc" | "results_hash" | "attachments" | "created_at", ExtArgs["result"]["labs"]>
  export type labsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | labs$visitArgs<ExtArgs>
  }
  export type labsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | labs$visitArgs<ExtArgs>
  }
  export type labsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | labs$visitArgs<ExtArgs>
  }

  export type $labsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "labs"
    objects: {
      visit: Prisma.$visitsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      lab_id: string
      visit_id: string | null
      lab_type: string | null
      results_enc: string | null
      results_hash: string | null
      attachments: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["labs"]>
    composites: {}
  }

  type labsGetPayload<S extends boolean | null | undefined | labsDefaultArgs> = $Result.GetResult<Prisma.$labsPayload, S>

  type labsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<labsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabsCountAggregateInputType | true
    }

  export interface labsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['labs'], meta: { name: 'labs' } }
    /**
     * Find zero or one Labs that matches the filter.
     * @param {labsFindUniqueArgs} args - Arguments to find a Labs
     * @example
     * // Get one Labs
     * const labs = await prisma.labs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends labsFindUniqueArgs>(args: SelectSubset<T, labsFindUniqueArgs<ExtArgs>>): Prisma__labsClient<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Labs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {labsFindUniqueOrThrowArgs} args - Arguments to find a Labs
     * @example
     * // Get one Labs
     * const labs = await prisma.labs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends labsFindUniqueOrThrowArgs>(args: SelectSubset<T, labsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__labsClient<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Labs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labsFindFirstArgs} args - Arguments to find a Labs
     * @example
     * // Get one Labs
     * const labs = await prisma.labs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends labsFindFirstArgs>(args?: SelectSubset<T, labsFindFirstArgs<ExtArgs>>): Prisma__labsClient<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Labs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labsFindFirstOrThrowArgs} args - Arguments to find a Labs
     * @example
     * // Get one Labs
     * const labs = await prisma.labs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends labsFindFirstOrThrowArgs>(args?: SelectSubset<T, labsFindFirstOrThrowArgs<ExtArgs>>): Prisma__labsClient<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Labs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Labs
     * const labs = await prisma.labs.findMany()
     * 
     * // Get first 10 Labs
     * const labs = await prisma.labs.findMany({ take: 10 })
     * 
     * // Only select the `lab_id`
     * const labsWithLab_idOnly = await prisma.labs.findMany({ select: { lab_id: true } })
     * 
     */
    findMany<T extends labsFindManyArgs>(args?: SelectSubset<T, labsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Labs.
     * @param {labsCreateArgs} args - Arguments to create a Labs.
     * @example
     * // Create one Labs
     * const Labs = await prisma.labs.create({
     *   data: {
     *     // ... data to create a Labs
     *   }
     * })
     * 
     */
    create<T extends labsCreateArgs>(args: SelectSubset<T, labsCreateArgs<ExtArgs>>): Prisma__labsClient<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Labs.
     * @param {labsCreateManyArgs} args - Arguments to create many Labs.
     * @example
     * // Create many Labs
     * const labs = await prisma.labs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends labsCreateManyArgs>(args?: SelectSubset<T, labsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Labs and returns the data saved in the database.
     * @param {labsCreateManyAndReturnArgs} args - Arguments to create many Labs.
     * @example
     * // Create many Labs
     * const labs = await prisma.labs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Labs and only return the `lab_id`
     * const labsWithLab_idOnly = await prisma.labs.createManyAndReturn({
     *   select: { lab_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends labsCreateManyAndReturnArgs>(args?: SelectSubset<T, labsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Labs.
     * @param {labsDeleteArgs} args - Arguments to delete one Labs.
     * @example
     * // Delete one Labs
     * const Labs = await prisma.labs.delete({
     *   where: {
     *     // ... filter to delete one Labs
     *   }
     * })
     * 
     */
    delete<T extends labsDeleteArgs>(args: SelectSubset<T, labsDeleteArgs<ExtArgs>>): Prisma__labsClient<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Labs.
     * @param {labsUpdateArgs} args - Arguments to update one Labs.
     * @example
     * // Update one Labs
     * const labs = await prisma.labs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends labsUpdateArgs>(args: SelectSubset<T, labsUpdateArgs<ExtArgs>>): Prisma__labsClient<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Labs.
     * @param {labsDeleteManyArgs} args - Arguments to filter Labs to delete.
     * @example
     * // Delete a few Labs
     * const { count } = await prisma.labs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends labsDeleteManyArgs>(args?: SelectSubset<T, labsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Labs
     * const labs = await prisma.labs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends labsUpdateManyArgs>(args: SelectSubset<T, labsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labs and returns the data updated in the database.
     * @param {labsUpdateManyAndReturnArgs} args - Arguments to update many Labs.
     * @example
     * // Update many Labs
     * const labs = await prisma.labs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Labs and only return the `lab_id`
     * const labsWithLab_idOnly = await prisma.labs.updateManyAndReturn({
     *   select: { lab_id: true },
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
    updateManyAndReturn<T extends labsUpdateManyAndReturnArgs>(args: SelectSubset<T, labsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Labs.
     * @param {labsUpsertArgs} args - Arguments to update or create a Labs.
     * @example
     * // Update or create a Labs
     * const labs = await prisma.labs.upsert({
     *   create: {
     *     // ... data to create a Labs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Labs we want to update
     *   }
     * })
     */
    upsert<T extends labsUpsertArgs>(args: SelectSubset<T, labsUpsertArgs<ExtArgs>>): Prisma__labsClient<$Result.GetResult<Prisma.$labsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labsCountArgs} args - Arguments to filter Labs to count.
     * @example
     * // Count the number of Labs
     * const count = await prisma.labs.count({
     *   where: {
     *     // ... the filter for the Labs we want to count
     *   }
     * })
    **/
    count<T extends labsCountArgs>(
      args?: Subset<T, labsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabsAggregateArgs>(args: Subset<T, LabsAggregateArgs>): Prisma.PrismaPromise<GetLabsAggregateType<T>>

    /**
     * Group by Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {labsGroupByArgs} args - Group by arguments.
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
      T extends labsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: labsGroupByArgs['orderBy'] }
        : { orderBy?: labsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, labsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the labs model
   */
  readonly fields: labsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for labs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__labsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visit<T extends labs$visitArgs<ExtArgs> = {}>(args?: Subset<T, labs$visitArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the labs model
   */
  interface labsFieldRefs {
    readonly lab_id: FieldRef<"labs", 'String'>
    readonly visit_id: FieldRef<"labs", 'String'>
    readonly lab_type: FieldRef<"labs", 'String'>
    readonly results_enc: FieldRef<"labs", 'String'>
    readonly results_hash: FieldRef<"labs", 'String'>
    readonly attachments: FieldRef<"labs", 'Json'>
    readonly created_at: FieldRef<"labs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * labs findUnique
   */
  export type labsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsInclude<ExtArgs> | null
    /**
     * Filter, which labs to fetch.
     */
    where: labsWhereUniqueInput
  }

  /**
   * labs findUniqueOrThrow
   */
  export type labsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsInclude<ExtArgs> | null
    /**
     * Filter, which labs to fetch.
     */
    where: labsWhereUniqueInput
  }

  /**
   * labs findFirst
   */
  export type labsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsInclude<ExtArgs> | null
    /**
     * Filter, which labs to fetch.
     */
    where?: labsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of labs to fetch.
     */
    orderBy?: labsOrderByWithRelationInput | labsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for labs.
     */
    cursor?: labsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of labs.
     */
    distinct?: LabsScalarFieldEnum | LabsScalarFieldEnum[]
  }

  /**
   * labs findFirstOrThrow
   */
  export type labsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsInclude<ExtArgs> | null
    /**
     * Filter, which labs to fetch.
     */
    where?: labsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of labs to fetch.
     */
    orderBy?: labsOrderByWithRelationInput | labsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for labs.
     */
    cursor?: labsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of labs.
     */
    distinct?: LabsScalarFieldEnum | LabsScalarFieldEnum[]
  }

  /**
   * labs findMany
   */
  export type labsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsInclude<ExtArgs> | null
    /**
     * Filter, which labs to fetch.
     */
    where?: labsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of labs to fetch.
     */
    orderBy?: labsOrderByWithRelationInput | labsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing labs.
     */
    cursor?: labsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` labs.
     */
    skip?: number
    distinct?: LabsScalarFieldEnum | LabsScalarFieldEnum[]
  }

  /**
   * labs create
   */
  export type labsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsInclude<ExtArgs> | null
    /**
     * The data needed to create a labs.
     */
    data?: XOR<labsCreateInput, labsUncheckedCreateInput>
  }

  /**
   * labs createMany
   */
  export type labsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many labs.
     */
    data: labsCreateManyInput | labsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * labs createManyAndReturn
   */
  export type labsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * The data used to create many labs.
     */
    data: labsCreateManyInput | labsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * labs update
   */
  export type labsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsInclude<ExtArgs> | null
    /**
     * The data needed to update a labs.
     */
    data: XOR<labsUpdateInput, labsUncheckedUpdateInput>
    /**
     * Choose, which labs to update.
     */
    where: labsWhereUniqueInput
  }

  /**
   * labs updateMany
   */
  export type labsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update labs.
     */
    data: XOR<labsUpdateManyMutationInput, labsUncheckedUpdateManyInput>
    /**
     * Filter which labs to update
     */
    where?: labsWhereInput
    /**
     * Limit how many labs to update.
     */
    limit?: number
  }

  /**
   * labs updateManyAndReturn
   */
  export type labsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * The data used to update labs.
     */
    data: XOR<labsUpdateManyMutationInput, labsUncheckedUpdateManyInput>
    /**
     * Filter which labs to update
     */
    where?: labsWhereInput
    /**
     * Limit how many labs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * labs upsert
   */
  export type labsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsInclude<ExtArgs> | null
    /**
     * The filter to search for the labs to update in case it exists.
     */
    where: labsWhereUniqueInput
    /**
     * In case the labs found by the `where` argument doesn't exist, create a new labs with this data.
     */
    create: XOR<labsCreateInput, labsUncheckedCreateInput>
    /**
     * In case the labs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<labsUpdateInput, labsUncheckedUpdateInput>
  }

  /**
   * labs delete
   */
  export type labsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsInclude<ExtArgs> | null
    /**
     * Filter which labs to delete.
     */
    where: labsWhereUniqueInput
  }

  /**
   * labs deleteMany
   */
  export type labsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which labs to delete
     */
    where?: labsWhereInput
    /**
     * Limit how many labs to delete.
     */
    limit?: number
  }

  /**
   * labs.visit
   */
  export type labs$visitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    where?: visitsWhereInput
  }

  /**
   * labs without action
   */
  export type labsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the labs
     */
    select?: labsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the labs
     */
    omit?: labsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: labsInclude<ExtArgs> | null
  }


  /**
   * Model files
   */

  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  export type FilesMinAggregateOutputType = {
    file_id: string | null
    owner_id: string | null
    visit_id: string | null
    file_type: string | null
    storage_path: string | null
    file_hash: string | null
    created_at: Date | null
  }

  export type FilesMaxAggregateOutputType = {
    file_id: string | null
    owner_id: string | null
    visit_id: string | null
    file_type: string | null
    storage_path: string | null
    file_hash: string | null
    created_at: Date | null
  }

  export type FilesCountAggregateOutputType = {
    file_id: number
    owner_id: number
    visit_id: number
    file_type: number
    storage_path: number
    file_hash: number
    created_at: number
    _all: number
  }


  export type FilesMinAggregateInputType = {
    file_id?: true
    owner_id?: true
    visit_id?: true
    file_type?: true
    storage_path?: true
    file_hash?: true
    created_at?: true
  }

  export type FilesMaxAggregateInputType = {
    file_id?: true
    owner_id?: true
    visit_id?: true
    file_type?: true
    storage_path?: true
    file_hash?: true
    created_at?: true
  }

  export type FilesCountAggregateInputType = {
    file_id?: true
    owner_id?: true
    visit_id?: true
    file_type?: true
    storage_path?: true
    file_hash?: true
    created_at?: true
    _all?: true
  }

  export type FilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to aggregate.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }




  export type filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filesWhereInput
    orderBy?: filesOrderByWithAggregationInput | filesOrderByWithAggregationInput[]
    by: FilesScalarFieldEnum[] | FilesScalarFieldEnum
    having?: filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesCountAggregateInputType | true
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }

  export type FilesGroupByOutputType = {
    file_id: string
    owner_id: string
    visit_id: string | null
    file_type: string | null
    storage_path: string | null
    file_hash: string | null
    created_at: Date
    _count: FilesCountAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      >
    >


  export type filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    owner_id?: boolean
    visit_id?: boolean
    file_type?: boolean
    storage_path?: boolean
    file_hash?: boolean
    created_at?: boolean
    visit?: boolean | files$visitArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    owner_id?: boolean
    visit_id?: boolean
    file_type?: boolean
    storage_path?: boolean
    file_hash?: boolean
    created_at?: boolean
    visit?: boolean | files$visitArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    owner_id?: boolean
    visit_id?: boolean
    file_type?: boolean
    storage_path?: boolean
    file_hash?: boolean
    created_at?: boolean
    visit?: boolean | files$visitArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type filesSelectScalar = {
    file_id?: boolean
    owner_id?: boolean
    visit_id?: boolean
    file_type?: boolean
    storage_path?: boolean
    file_hash?: boolean
    created_at?: boolean
  }

  export type filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"file_id" | "owner_id" | "visit_id" | "file_type" | "storage_path" | "file_hash" | "created_at", ExtArgs["result"]["files"]>
  export type filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | files$visitArgs<ExtArgs>
  }
  export type filesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | files$visitArgs<ExtArgs>
  }
  export type filesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visit?: boolean | files$visitArgs<ExtArgs>
  }

  export type $filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "files"
    objects: {
      visit: Prisma.$visitsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      file_id: string
      owner_id: string
      visit_id: string | null
      file_type: string | null
      storage_path: string | null
      file_hash: string | null
      created_at: Date
    }, ExtArgs["result"]["files"]>
    composites: {}
  }

  type filesGetPayload<S extends boolean | null | undefined | filesDefaultArgs> = $Result.GetResult<Prisma.$filesPayload, S>

  type filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesCountAggregateInputType | true
    }

  export interface filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['files'], meta: { name: 'files' } }
    /**
     * Find zero or one Files that matches the filter.
     * @param {filesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends filesFindUniqueArgs>(args: SelectSubset<T, filesFindUniqueArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {filesFindUniqueOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends filesFindUniqueOrThrowArgs>(args: SelectSubset<T, filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends filesFindFirstArgs>(args?: SelectSubset<T, filesFindFirstArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindFirstOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends filesFindFirstOrThrowArgs>(args?: SelectSubset<T, filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `file_id`
     * const filesWithFile_idOnly = await prisma.files.findMany({ select: { file_id: true } })
     * 
     */
    findMany<T extends filesFindManyArgs>(args?: SelectSubset<T, filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Files.
     * @param {filesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
     */
    create<T extends filesCreateArgs>(args: SelectSubset<T, filesCreateArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {filesCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends filesCreateManyArgs>(args?: SelectSubset<T, filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {filesCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `file_id`
     * const filesWithFile_idOnly = await prisma.files.createManyAndReturn({
     *   select: { file_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends filesCreateManyAndReturnArgs>(args?: SelectSubset<T, filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Files.
     * @param {filesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
     */
    delete<T extends filesDeleteArgs>(args: SelectSubset<T, filesDeleteArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Files.
     * @param {filesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends filesUpdateArgs>(args: SelectSubset<T, filesUpdateArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {filesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends filesDeleteManyArgs>(args?: SelectSubset<T, filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends filesUpdateManyArgs>(args: SelectSubset<T, filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {filesUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `file_id`
     * const filesWithFile_idOnly = await prisma.files.updateManyAndReturn({
     *   select: { file_id: true },
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
    updateManyAndReturn<T extends filesUpdateManyAndReturnArgs>(args: SelectSubset<T, filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Files.
     * @param {filesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
     */
    upsert<T extends filesUpsertArgs>(args: SelectSubset<T, filesUpsertArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends filesCountArgs>(
      args?: Subset<T, filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesGroupByArgs} args - Group by arguments.
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
      T extends filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: filesGroupByArgs['orderBy'] }
        : { orderBy?: filesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the files model
   */
  readonly fields: filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visit<T extends files$visitArgs<ExtArgs> = {}>(args?: Subset<T, files$visitArgs<ExtArgs>>): Prisma__visitsClient<$Result.GetResult<Prisma.$visitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the files model
   */
  interface filesFieldRefs {
    readonly file_id: FieldRef<"files", 'String'>
    readonly owner_id: FieldRef<"files", 'String'>
    readonly visit_id: FieldRef<"files", 'String'>
    readonly file_type: FieldRef<"files", 'String'>
    readonly storage_path: FieldRef<"files", 'String'>
    readonly file_hash: FieldRef<"files", 'String'>
    readonly created_at: FieldRef<"files", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * files findUnique
   */
  export type filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files findUniqueOrThrow
   */
  export type filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files findFirst
   */
  export type filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files findFirstOrThrow
   */
  export type filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files findMany
   */
  export type filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files create
   */
  export type filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The data needed to create a files.
     */
    data: XOR<filesCreateInput, filesUncheckedCreateInput>
  }

  /**
   * files createMany
   */
  export type filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many files.
     */
    data: filesCreateManyInput | filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * files createManyAndReturn
   */
  export type filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * The data used to create many files.
     */
    data: filesCreateManyInput | filesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * files update
   */
  export type filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The data needed to update a files.
     */
    data: XOR<filesUpdateInput, filesUncheckedUpdateInput>
    /**
     * Choose, which files to update.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files updateMany
   */
  export type filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update files.
     */
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: filesWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
  }

  /**
   * files updateManyAndReturn
   */
  export type filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * The data used to update files.
     */
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: filesWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * files upsert
   */
  export type filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The filter to search for the files to update in case it exists.
     */
    where: filesWhereUniqueInput
    /**
     * In case the files found by the `where` argument doesn't exist, create a new files with this data.
     */
    create: XOR<filesCreateInput, filesUncheckedCreateInput>
    /**
     * In case the files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filesUpdateInput, filesUncheckedUpdateInput>
  }

  /**
   * files delete
   */
  export type filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter which files to delete.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files deleteMany
   */
  export type filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to delete
     */
    where?: filesWhereInput
    /**
     * Limit how many files to delete.
     */
    limit?: number
  }

  /**
   * files.visit
   */
  export type files$visitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visits
     */
    select?: visitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visits
     */
    omit?: visitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: visitsInclude<ExtArgs> | null
    where?: visitsWhereInput
  }

  /**
   * files without action
   */
  export type filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
  }


  /**
   * Model access_controls
   */

  export type AggregateAccess_controls = {
    _count: Access_controlsCountAggregateOutputType | null
    _min: Access_controlsMinAggregateOutputType | null
    _max: Access_controlsMaxAggregateOutputType | null
  }

  export type Access_controlsMinAggregateOutputType = {
    ac_id: string | null
    patient_id: string | null
    granted_to: string | null
    granted_by: string | null
    valid_from: Date | null
    valid_to: Date | null
    on_chain_tx: string | null
    created_at: Date | null
  }

  export type Access_controlsMaxAggregateOutputType = {
    ac_id: string | null
    patient_id: string | null
    granted_to: string | null
    granted_by: string | null
    valid_from: Date | null
    valid_to: Date | null
    on_chain_tx: string | null
    created_at: Date | null
  }

  export type Access_controlsCountAggregateOutputType = {
    ac_id: number
    patient_id: number
    granted_to: number
    granted_by: number
    scope: number
    valid_from: number
    valid_to: number
    on_chain_tx: number
    created_at: number
    _all: number
  }


  export type Access_controlsMinAggregateInputType = {
    ac_id?: true
    patient_id?: true
    granted_to?: true
    granted_by?: true
    valid_from?: true
    valid_to?: true
    on_chain_tx?: true
    created_at?: true
  }

  export type Access_controlsMaxAggregateInputType = {
    ac_id?: true
    patient_id?: true
    granted_to?: true
    granted_by?: true
    valid_from?: true
    valid_to?: true
    on_chain_tx?: true
    created_at?: true
  }

  export type Access_controlsCountAggregateInputType = {
    ac_id?: true
    patient_id?: true
    granted_to?: true
    granted_by?: true
    scope?: true
    valid_from?: true
    valid_to?: true
    on_chain_tx?: true
    created_at?: true
    _all?: true
  }

  export type Access_controlsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which access_controls to aggregate.
     */
    where?: access_controlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_controls to fetch.
     */
    orderBy?: access_controlsOrderByWithRelationInput | access_controlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: access_controlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_controls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned access_controls
    **/
    _count?: true | Access_controlsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Access_controlsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Access_controlsMaxAggregateInputType
  }

  export type GetAccess_controlsAggregateType<T extends Access_controlsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccess_controls]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccess_controls[P]>
      : GetScalarType<T[P], AggregateAccess_controls[P]>
  }




  export type access_controlsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: access_controlsWhereInput
    orderBy?: access_controlsOrderByWithAggregationInput | access_controlsOrderByWithAggregationInput[]
    by: Access_controlsScalarFieldEnum[] | Access_controlsScalarFieldEnum
    having?: access_controlsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Access_controlsCountAggregateInputType | true
    _min?: Access_controlsMinAggregateInputType
    _max?: Access_controlsMaxAggregateInputType
  }

  export type Access_controlsGroupByOutputType = {
    ac_id: string
    patient_id: string | null
    granted_to: string
    granted_by: string | null
    scope: JsonValue | null
    valid_from: Date | null
    valid_to: Date | null
    on_chain_tx: string | null
    created_at: Date
    _count: Access_controlsCountAggregateOutputType | null
    _min: Access_controlsMinAggregateOutputType | null
    _max: Access_controlsMaxAggregateOutputType | null
  }

  type GetAccess_controlsGroupByPayload<T extends access_controlsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Access_controlsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Access_controlsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Access_controlsGroupByOutputType[P]>
            : GetScalarType<T[P], Access_controlsGroupByOutputType[P]>
        }
      >
    >


  export type access_controlsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ac_id?: boolean
    patient_id?: boolean
    granted_to?: boolean
    granted_by?: boolean
    scope?: boolean
    valid_from?: boolean
    valid_to?: boolean
    on_chain_tx?: boolean
    created_at?: boolean
    patient?: boolean | access_controls$patientArgs<ExtArgs>
  }, ExtArgs["result"]["access_controls"]>

  export type access_controlsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ac_id?: boolean
    patient_id?: boolean
    granted_to?: boolean
    granted_by?: boolean
    scope?: boolean
    valid_from?: boolean
    valid_to?: boolean
    on_chain_tx?: boolean
    created_at?: boolean
    patient?: boolean | access_controls$patientArgs<ExtArgs>
  }, ExtArgs["result"]["access_controls"]>

  export type access_controlsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ac_id?: boolean
    patient_id?: boolean
    granted_to?: boolean
    granted_by?: boolean
    scope?: boolean
    valid_from?: boolean
    valid_to?: boolean
    on_chain_tx?: boolean
    created_at?: boolean
    patient?: boolean | access_controls$patientArgs<ExtArgs>
  }, ExtArgs["result"]["access_controls"]>

  export type access_controlsSelectScalar = {
    ac_id?: boolean
    patient_id?: boolean
    granted_to?: boolean
    granted_by?: boolean
    scope?: boolean
    valid_from?: boolean
    valid_to?: boolean
    on_chain_tx?: boolean
    created_at?: boolean
  }

  export type access_controlsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ac_id" | "patient_id" | "granted_to" | "granted_by" | "scope" | "valid_from" | "valid_to" | "on_chain_tx" | "created_at", ExtArgs["result"]["access_controls"]>
  export type access_controlsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | access_controls$patientArgs<ExtArgs>
  }
  export type access_controlsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | access_controls$patientArgs<ExtArgs>
  }
  export type access_controlsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | access_controls$patientArgs<ExtArgs>
  }

  export type $access_controlsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "access_controls"
    objects: {
      patient: Prisma.$patientsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ac_id: string
      patient_id: string | null
      granted_to: string
      granted_by: string | null
      scope: Prisma.JsonValue | null
      valid_from: Date | null
      valid_to: Date | null
      on_chain_tx: string | null
      created_at: Date
    }, ExtArgs["result"]["access_controls"]>
    composites: {}
  }

  type access_controlsGetPayload<S extends boolean | null | undefined | access_controlsDefaultArgs> = $Result.GetResult<Prisma.$access_controlsPayload, S>

  type access_controlsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<access_controlsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Access_controlsCountAggregateInputType | true
    }

  export interface access_controlsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['access_controls'], meta: { name: 'access_controls' } }
    /**
     * Find zero or one Access_controls that matches the filter.
     * @param {access_controlsFindUniqueArgs} args - Arguments to find a Access_controls
     * @example
     * // Get one Access_controls
     * const access_controls = await prisma.access_controls.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends access_controlsFindUniqueArgs>(args: SelectSubset<T, access_controlsFindUniqueArgs<ExtArgs>>): Prisma__access_controlsClient<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Access_controls that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {access_controlsFindUniqueOrThrowArgs} args - Arguments to find a Access_controls
     * @example
     * // Get one Access_controls
     * const access_controls = await prisma.access_controls.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends access_controlsFindUniqueOrThrowArgs>(args: SelectSubset<T, access_controlsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__access_controlsClient<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Access_controls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_controlsFindFirstArgs} args - Arguments to find a Access_controls
     * @example
     * // Get one Access_controls
     * const access_controls = await prisma.access_controls.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends access_controlsFindFirstArgs>(args?: SelectSubset<T, access_controlsFindFirstArgs<ExtArgs>>): Prisma__access_controlsClient<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Access_controls that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_controlsFindFirstOrThrowArgs} args - Arguments to find a Access_controls
     * @example
     * // Get one Access_controls
     * const access_controls = await prisma.access_controls.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends access_controlsFindFirstOrThrowArgs>(args?: SelectSubset<T, access_controlsFindFirstOrThrowArgs<ExtArgs>>): Prisma__access_controlsClient<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Access_controls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_controlsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Access_controls
     * const access_controls = await prisma.access_controls.findMany()
     * 
     * // Get first 10 Access_controls
     * const access_controls = await prisma.access_controls.findMany({ take: 10 })
     * 
     * // Only select the `ac_id`
     * const access_controlsWithAc_idOnly = await prisma.access_controls.findMany({ select: { ac_id: true } })
     * 
     */
    findMany<T extends access_controlsFindManyArgs>(args?: SelectSubset<T, access_controlsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Access_controls.
     * @param {access_controlsCreateArgs} args - Arguments to create a Access_controls.
     * @example
     * // Create one Access_controls
     * const Access_controls = await prisma.access_controls.create({
     *   data: {
     *     // ... data to create a Access_controls
     *   }
     * })
     * 
     */
    create<T extends access_controlsCreateArgs>(args: SelectSubset<T, access_controlsCreateArgs<ExtArgs>>): Prisma__access_controlsClient<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Access_controls.
     * @param {access_controlsCreateManyArgs} args - Arguments to create many Access_controls.
     * @example
     * // Create many Access_controls
     * const access_controls = await prisma.access_controls.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends access_controlsCreateManyArgs>(args?: SelectSubset<T, access_controlsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Access_controls and returns the data saved in the database.
     * @param {access_controlsCreateManyAndReturnArgs} args - Arguments to create many Access_controls.
     * @example
     * // Create many Access_controls
     * const access_controls = await prisma.access_controls.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Access_controls and only return the `ac_id`
     * const access_controlsWithAc_idOnly = await prisma.access_controls.createManyAndReturn({
     *   select: { ac_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends access_controlsCreateManyAndReturnArgs>(args?: SelectSubset<T, access_controlsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Access_controls.
     * @param {access_controlsDeleteArgs} args - Arguments to delete one Access_controls.
     * @example
     * // Delete one Access_controls
     * const Access_controls = await prisma.access_controls.delete({
     *   where: {
     *     // ... filter to delete one Access_controls
     *   }
     * })
     * 
     */
    delete<T extends access_controlsDeleteArgs>(args: SelectSubset<T, access_controlsDeleteArgs<ExtArgs>>): Prisma__access_controlsClient<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Access_controls.
     * @param {access_controlsUpdateArgs} args - Arguments to update one Access_controls.
     * @example
     * // Update one Access_controls
     * const access_controls = await prisma.access_controls.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends access_controlsUpdateArgs>(args: SelectSubset<T, access_controlsUpdateArgs<ExtArgs>>): Prisma__access_controlsClient<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Access_controls.
     * @param {access_controlsDeleteManyArgs} args - Arguments to filter Access_controls to delete.
     * @example
     * // Delete a few Access_controls
     * const { count } = await prisma.access_controls.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends access_controlsDeleteManyArgs>(args?: SelectSubset<T, access_controlsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Access_controls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_controlsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Access_controls
     * const access_controls = await prisma.access_controls.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends access_controlsUpdateManyArgs>(args: SelectSubset<T, access_controlsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Access_controls and returns the data updated in the database.
     * @param {access_controlsUpdateManyAndReturnArgs} args - Arguments to update many Access_controls.
     * @example
     * // Update many Access_controls
     * const access_controls = await prisma.access_controls.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Access_controls and only return the `ac_id`
     * const access_controlsWithAc_idOnly = await prisma.access_controls.updateManyAndReturn({
     *   select: { ac_id: true },
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
    updateManyAndReturn<T extends access_controlsUpdateManyAndReturnArgs>(args: SelectSubset<T, access_controlsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Access_controls.
     * @param {access_controlsUpsertArgs} args - Arguments to update or create a Access_controls.
     * @example
     * // Update or create a Access_controls
     * const access_controls = await prisma.access_controls.upsert({
     *   create: {
     *     // ... data to create a Access_controls
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Access_controls we want to update
     *   }
     * })
     */
    upsert<T extends access_controlsUpsertArgs>(args: SelectSubset<T, access_controlsUpsertArgs<ExtArgs>>): Prisma__access_controlsClient<$Result.GetResult<Prisma.$access_controlsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Access_controls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_controlsCountArgs} args - Arguments to filter Access_controls to count.
     * @example
     * // Count the number of Access_controls
     * const count = await prisma.access_controls.count({
     *   where: {
     *     // ... the filter for the Access_controls we want to count
     *   }
     * })
    **/
    count<T extends access_controlsCountArgs>(
      args?: Subset<T, access_controlsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Access_controlsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Access_controls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Access_controlsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Access_controlsAggregateArgs>(args: Subset<T, Access_controlsAggregateArgs>): Prisma.PrismaPromise<GetAccess_controlsAggregateType<T>>

    /**
     * Group by Access_controls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {access_controlsGroupByArgs} args - Group by arguments.
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
      T extends access_controlsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: access_controlsGroupByArgs['orderBy'] }
        : { orderBy?: access_controlsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, access_controlsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccess_controlsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the access_controls model
   */
  readonly fields: access_controlsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for access_controls.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__access_controlsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends access_controls$patientArgs<ExtArgs> = {}>(args?: Subset<T, access_controls$patientArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the access_controls model
   */
  interface access_controlsFieldRefs {
    readonly ac_id: FieldRef<"access_controls", 'String'>
    readonly patient_id: FieldRef<"access_controls", 'String'>
    readonly granted_to: FieldRef<"access_controls", 'String'>
    readonly granted_by: FieldRef<"access_controls", 'String'>
    readonly scope: FieldRef<"access_controls", 'Json'>
    readonly valid_from: FieldRef<"access_controls", 'DateTime'>
    readonly valid_to: FieldRef<"access_controls", 'DateTime'>
    readonly on_chain_tx: FieldRef<"access_controls", 'String'>
    readonly created_at: FieldRef<"access_controls", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * access_controls findUnique
   */
  export type access_controlsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsInclude<ExtArgs> | null
    /**
     * Filter, which access_controls to fetch.
     */
    where: access_controlsWhereUniqueInput
  }

  /**
   * access_controls findUniqueOrThrow
   */
  export type access_controlsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsInclude<ExtArgs> | null
    /**
     * Filter, which access_controls to fetch.
     */
    where: access_controlsWhereUniqueInput
  }

  /**
   * access_controls findFirst
   */
  export type access_controlsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsInclude<ExtArgs> | null
    /**
     * Filter, which access_controls to fetch.
     */
    where?: access_controlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_controls to fetch.
     */
    orderBy?: access_controlsOrderByWithRelationInput | access_controlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for access_controls.
     */
    cursor?: access_controlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_controls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of access_controls.
     */
    distinct?: Access_controlsScalarFieldEnum | Access_controlsScalarFieldEnum[]
  }

  /**
   * access_controls findFirstOrThrow
   */
  export type access_controlsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsInclude<ExtArgs> | null
    /**
     * Filter, which access_controls to fetch.
     */
    where?: access_controlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_controls to fetch.
     */
    orderBy?: access_controlsOrderByWithRelationInput | access_controlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for access_controls.
     */
    cursor?: access_controlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_controls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of access_controls.
     */
    distinct?: Access_controlsScalarFieldEnum | Access_controlsScalarFieldEnum[]
  }

  /**
   * access_controls findMany
   */
  export type access_controlsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsInclude<ExtArgs> | null
    /**
     * Filter, which access_controls to fetch.
     */
    where?: access_controlsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of access_controls to fetch.
     */
    orderBy?: access_controlsOrderByWithRelationInput | access_controlsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing access_controls.
     */
    cursor?: access_controlsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` access_controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` access_controls.
     */
    skip?: number
    distinct?: Access_controlsScalarFieldEnum | Access_controlsScalarFieldEnum[]
  }

  /**
   * access_controls create
   */
  export type access_controlsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsInclude<ExtArgs> | null
    /**
     * The data needed to create a access_controls.
     */
    data: XOR<access_controlsCreateInput, access_controlsUncheckedCreateInput>
  }

  /**
   * access_controls createMany
   */
  export type access_controlsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many access_controls.
     */
    data: access_controlsCreateManyInput | access_controlsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * access_controls createManyAndReturn
   */
  export type access_controlsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * The data used to create many access_controls.
     */
    data: access_controlsCreateManyInput | access_controlsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * access_controls update
   */
  export type access_controlsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsInclude<ExtArgs> | null
    /**
     * The data needed to update a access_controls.
     */
    data: XOR<access_controlsUpdateInput, access_controlsUncheckedUpdateInput>
    /**
     * Choose, which access_controls to update.
     */
    where: access_controlsWhereUniqueInput
  }

  /**
   * access_controls updateMany
   */
  export type access_controlsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update access_controls.
     */
    data: XOR<access_controlsUpdateManyMutationInput, access_controlsUncheckedUpdateManyInput>
    /**
     * Filter which access_controls to update
     */
    where?: access_controlsWhereInput
    /**
     * Limit how many access_controls to update.
     */
    limit?: number
  }

  /**
   * access_controls updateManyAndReturn
   */
  export type access_controlsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * The data used to update access_controls.
     */
    data: XOR<access_controlsUpdateManyMutationInput, access_controlsUncheckedUpdateManyInput>
    /**
     * Filter which access_controls to update
     */
    where?: access_controlsWhereInput
    /**
     * Limit how many access_controls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * access_controls upsert
   */
  export type access_controlsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsInclude<ExtArgs> | null
    /**
     * The filter to search for the access_controls to update in case it exists.
     */
    where: access_controlsWhereUniqueInput
    /**
     * In case the access_controls found by the `where` argument doesn't exist, create a new access_controls with this data.
     */
    create: XOR<access_controlsCreateInput, access_controlsUncheckedCreateInput>
    /**
     * In case the access_controls was found with the provided `where` argument, update it with this data.
     */
    update: XOR<access_controlsUpdateInput, access_controlsUncheckedUpdateInput>
  }

  /**
   * access_controls delete
   */
  export type access_controlsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsInclude<ExtArgs> | null
    /**
     * Filter which access_controls to delete.
     */
    where: access_controlsWhereUniqueInput
  }

  /**
   * access_controls deleteMany
   */
  export type access_controlsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which access_controls to delete
     */
    where?: access_controlsWhereInput
    /**
     * Limit how many access_controls to delete.
     */
    limit?: number
  }

  /**
   * access_controls.patient
   */
  export type access_controls$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    where?: patientsWhereInput
  }

  /**
   * access_controls without action
   */
  export type access_controlsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access_controls
     */
    select?: access_controlsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access_controls
     */
    omit?: access_controlsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: access_controlsInclude<ExtArgs> | null
  }


  /**
   * Model audit_access_logs
   */

  export type AggregateAudit_access_logs = {
    _count: Audit_access_logsCountAggregateOutputType | null
    _min: Audit_access_logsMinAggregateOutputType | null
    _max: Audit_access_logsMaxAggregateOutputType | null
  }

  export type Audit_access_logsMinAggregateOutputType = {
    log_id: string | null
    patient_id: string | null
    accessed_by: string | null
    resource_type: string | null
    resource_id: string | null
    access_timestamp: Date | null
    on_chain_anchor: string | null
    created_at: Date | null
  }

  export type Audit_access_logsMaxAggregateOutputType = {
    log_id: string | null
    patient_id: string | null
    accessed_by: string | null
    resource_type: string | null
    resource_id: string | null
    access_timestamp: Date | null
    on_chain_anchor: string | null
    created_at: Date | null
  }

  export type Audit_access_logsCountAggregateOutputType = {
    log_id: number
    patient_id: number
    accessed_by: number
    resource_type: number
    resource_id: number
    access_timestamp: number
    on_chain_anchor: number
    created_at: number
    _all: number
  }


  export type Audit_access_logsMinAggregateInputType = {
    log_id?: true
    patient_id?: true
    accessed_by?: true
    resource_type?: true
    resource_id?: true
    access_timestamp?: true
    on_chain_anchor?: true
    created_at?: true
  }

  export type Audit_access_logsMaxAggregateInputType = {
    log_id?: true
    patient_id?: true
    accessed_by?: true
    resource_type?: true
    resource_id?: true
    access_timestamp?: true
    on_chain_anchor?: true
    created_at?: true
  }

  export type Audit_access_logsCountAggregateInputType = {
    log_id?: true
    patient_id?: true
    accessed_by?: true
    resource_type?: true
    resource_id?: true
    access_timestamp?: true
    on_chain_anchor?: true
    created_at?: true
    _all?: true
  }

  export type Audit_access_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_access_logs to aggregate.
     */
    where?: audit_access_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_access_logs to fetch.
     */
    orderBy?: audit_access_logsOrderByWithRelationInput | audit_access_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audit_access_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_access_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_access_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_access_logs
    **/
    _count?: true | Audit_access_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_access_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_access_logsMaxAggregateInputType
  }

  export type GetAudit_access_logsAggregateType<T extends Audit_access_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_access_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_access_logs[P]>
      : GetScalarType<T[P], AggregateAudit_access_logs[P]>
  }




  export type audit_access_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_access_logsWhereInput
    orderBy?: audit_access_logsOrderByWithAggregationInput | audit_access_logsOrderByWithAggregationInput[]
    by: Audit_access_logsScalarFieldEnum[] | Audit_access_logsScalarFieldEnum
    having?: audit_access_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_access_logsCountAggregateInputType | true
    _min?: Audit_access_logsMinAggregateInputType
    _max?: Audit_access_logsMaxAggregateInputType
  }

  export type Audit_access_logsGroupByOutputType = {
    log_id: string
    patient_id: string | null
    accessed_by: string
    resource_type: string | null
    resource_id: string | null
    access_timestamp: Date
    on_chain_anchor: string | null
    created_at: Date
    _count: Audit_access_logsCountAggregateOutputType | null
    _min: Audit_access_logsMinAggregateOutputType | null
    _max: Audit_access_logsMaxAggregateOutputType | null
  }

  type GetAudit_access_logsGroupByPayload<T extends audit_access_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_access_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_access_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_access_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_access_logsGroupByOutputType[P]>
        }
      >
    >


  export type audit_access_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    patient_id?: boolean
    accessed_by?: boolean
    resource_type?: boolean
    resource_id?: boolean
    access_timestamp?: boolean
    on_chain_anchor?: boolean
    created_at?: boolean
    patient?: boolean | audit_access_logs$patientArgs<ExtArgs>
  }, ExtArgs["result"]["audit_access_logs"]>

  export type audit_access_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    patient_id?: boolean
    accessed_by?: boolean
    resource_type?: boolean
    resource_id?: boolean
    access_timestamp?: boolean
    on_chain_anchor?: boolean
    created_at?: boolean
    patient?: boolean | audit_access_logs$patientArgs<ExtArgs>
  }, ExtArgs["result"]["audit_access_logs"]>

  export type audit_access_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    patient_id?: boolean
    accessed_by?: boolean
    resource_type?: boolean
    resource_id?: boolean
    access_timestamp?: boolean
    on_chain_anchor?: boolean
    created_at?: boolean
    patient?: boolean | audit_access_logs$patientArgs<ExtArgs>
  }, ExtArgs["result"]["audit_access_logs"]>

  export type audit_access_logsSelectScalar = {
    log_id?: boolean
    patient_id?: boolean
    accessed_by?: boolean
    resource_type?: boolean
    resource_id?: boolean
    access_timestamp?: boolean
    on_chain_anchor?: boolean
    created_at?: boolean
  }

  export type audit_access_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"log_id" | "patient_id" | "accessed_by" | "resource_type" | "resource_id" | "access_timestamp" | "on_chain_anchor" | "created_at", ExtArgs["result"]["audit_access_logs"]>
  export type audit_access_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | audit_access_logs$patientArgs<ExtArgs>
  }
  export type audit_access_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | audit_access_logs$patientArgs<ExtArgs>
  }
  export type audit_access_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | audit_access_logs$patientArgs<ExtArgs>
  }

  export type $audit_access_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit_access_logs"
    objects: {
      patient: Prisma.$patientsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      log_id: string
      patient_id: string | null
      accessed_by: string
      resource_type: string | null
      resource_id: string | null
      access_timestamp: Date
      on_chain_anchor: string | null
      created_at: Date
    }, ExtArgs["result"]["audit_access_logs"]>
    composites: {}
  }

  type audit_access_logsGetPayload<S extends boolean | null | undefined | audit_access_logsDefaultArgs> = $Result.GetResult<Prisma.$audit_access_logsPayload, S>

  type audit_access_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<audit_access_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_access_logsCountAggregateInputType | true
    }

  export interface audit_access_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_access_logs'], meta: { name: 'audit_access_logs' } }
    /**
     * Find zero or one Audit_access_logs that matches the filter.
     * @param {audit_access_logsFindUniqueArgs} args - Arguments to find a Audit_access_logs
     * @example
     * // Get one Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends audit_access_logsFindUniqueArgs>(args: SelectSubset<T, audit_access_logsFindUniqueArgs<ExtArgs>>): Prisma__audit_access_logsClient<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_access_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {audit_access_logsFindUniqueOrThrowArgs} args - Arguments to find a Audit_access_logs
     * @example
     * // Get one Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends audit_access_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, audit_access_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__audit_access_logsClient<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_access_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_access_logsFindFirstArgs} args - Arguments to find a Audit_access_logs
     * @example
     * // Get one Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends audit_access_logsFindFirstArgs>(args?: SelectSubset<T, audit_access_logsFindFirstArgs<ExtArgs>>): Prisma__audit_access_logsClient<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_access_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_access_logsFindFirstOrThrowArgs} args - Arguments to find a Audit_access_logs
     * @example
     * // Get one Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends audit_access_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, audit_access_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__audit_access_logsClient<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_access_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_access_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.findMany()
     * 
     * // Get first 10 Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.findMany({ take: 10 })
     * 
     * // Only select the `log_id`
     * const audit_access_logsWithLog_idOnly = await prisma.audit_access_logs.findMany({ select: { log_id: true } })
     * 
     */
    findMany<T extends audit_access_logsFindManyArgs>(args?: SelectSubset<T, audit_access_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_access_logs.
     * @param {audit_access_logsCreateArgs} args - Arguments to create a Audit_access_logs.
     * @example
     * // Create one Audit_access_logs
     * const Audit_access_logs = await prisma.audit_access_logs.create({
     *   data: {
     *     // ... data to create a Audit_access_logs
     *   }
     * })
     * 
     */
    create<T extends audit_access_logsCreateArgs>(args: SelectSubset<T, audit_access_logsCreateArgs<ExtArgs>>): Prisma__audit_access_logsClient<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_access_logs.
     * @param {audit_access_logsCreateManyArgs} args - Arguments to create many Audit_access_logs.
     * @example
     * // Create many Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends audit_access_logsCreateManyArgs>(args?: SelectSubset<T, audit_access_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audit_access_logs and returns the data saved in the database.
     * @param {audit_access_logsCreateManyAndReturnArgs} args - Arguments to create many Audit_access_logs.
     * @example
     * // Create many Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audit_access_logs and only return the `log_id`
     * const audit_access_logsWithLog_idOnly = await prisma.audit_access_logs.createManyAndReturn({
     *   select: { log_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends audit_access_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, audit_access_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit_access_logs.
     * @param {audit_access_logsDeleteArgs} args - Arguments to delete one Audit_access_logs.
     * @example
     * // Delete one Audit_access_logs
     * const Audit_access_logs = await prisma.audit_access_logs.delete({
     *   where: {
     *     // ... filter to delete one Audit_access_logs
     *   }
     * })
     * 
     */
    delete<T extends audit_access_logsDeleteArgs>(args: SelectSubset<T, audit_access_logsDeleteArgs<ExtArgs>>): Prisma__audit_access_logsClient<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_access_logs.
     * @param {audit_access_logsUpdateArgs} args - Arguments to update one Audit_access_logs.
     * @example
     * // Update one Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends audit_access_logsUpdateArgs>(args: SelectSubset<T, audit_access_logsUpdateArgs<ExtArgs>>): Prisma__audit_access_logsClient<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_access_logs.
     * @param {audit_access_logsDeleteManyArgs} args - Arguments to filter Audit_access_logs to delete.
     * @example
     * // Delete a few Audit_access_logs
     * const { count } = await prisma.audit_access_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends audit_access_logsDeleteManyArgs>(args?: SelectSubset<T, audit_access_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_access_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_access_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends audit_access_logsUpdateManyArgs>(args: SelectSubset<T, audit_access_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_access_logs and returns the data updated in the database.
     * @param {audit_access_logsUpdateManyAndReturnArgs} args - Arguments to update many Audit_access_logs.
     * @example
     * // Update many Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audit_access_logs and only return the `log_id`
     * const audit_access_logsWithLog_idOnly = await prisma.audit_access_logs.updateManyAndReturn({
     *   select: { log_id: true },
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
    updateManyAndReturn<T extends audit_access_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, audit_access_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit_access_logs.
     * @param {audit_access_logsUpsertArgs} args - Arguments to update or create a Audit_access_logs.
     * @example
     * // Update or create a Audit_access_logs
     * const audit_access_logs = await prisma.audit_access_logs.upsert({
     *   create: {
     *     // ... data to create a Audit_access_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_access_logs we want to update
     *   }
     * })
     */
    upsert<T extends audit_access_logsUpsertArgs>(args: SelectSubset<T, audit_access_logsUpsertArgs<ExtArgs>>): Prisma__audit_access_logsClient<$Result.GetResult<Prisma.$audit_access_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_access_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_access_logsCountArgs} args - Arguments to filter Audit_access_logs to count.
     * @example
     * // Count the number of Audit_access_logs
     * const count = await prisma.audit_access_logs.count({
     *   where: {
     *     // ... the filter for the Audit_access_logs we want to count
     *   }
     * })
    **/
    count<T extends audit_access_logsCountArgs>(
      args?: Subset<T, audit_access_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_access_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_access_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_access_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Audit_access_logsAggregateArgs>(args: Subset<T, Audit_access_logsAggregateArgs>): Prisma.PrismaPromise<GetAudit_access_logsAggregateType<T>>

    /**
     * Group by Audit_access_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_access_logsGroupByArgs} args - Group by arguments.
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
      T extends audit_access_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_access_logsGroupByArgs['orderBy'] }
        : { orderBy?: audit_access_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, audit_access_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_access_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit_access_logs model
   */
  readonly fields: audit_access_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_access_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_access_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends audit_access_logs$patientArgs<ExtArgs> = {}>(args?: Subset<T, audit_access_logs$patientArgs<ExtArgs>>): Prisma__patientsClient<$Result.GetResult<Prisma.$patientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the audit_access_logs model
   */
  interface audit_access_logsFieldRefs {
    readonly log_id: FieldRef<"audit_access_logs", 'String'>
    readonly patient_id: FieldRef<"audit_access_logs", 'String'>
    readonly accessed_by: FieldRef<"audit_access_logs", 'String'>
    readonly resource_type: FieldRef<"audit_access_logs", 'String'>
    readonly resource_id: FieldRef<"audit_access_logs", 'String'>
    readonly access_timestamp: FieldRef<"audit_access_logs", 'DateTime'>
    readonly on_chain_anchor: FieldRef<"audit_access_logs", 'String'>
    readonly created_at: FieldRef<"audit_access_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * audit_access_logs findUnique
   */
  export type audit_access_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_access_logs to fetch.
     */
    where: audit_access_logsWhereUniqueInput
  }

  /**
   * audit_access_logs findUniqueOrThrow
   */
  export type audit_access_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_access_logs to fetch.
     */
    where: audit_access_logsWhereUniqueInput
  }

  /**
   * audit_access_logs findFirst
   */
  export type audit_access_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_access_logs to fetch.
     */
    where?: audit_access_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_access_logs to fetch.
     */
    orderBy?: audit_access_logsOrderByWithRelationInput | audit_access_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_access_logs.
     */
    cursor?: audit_access_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_access_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_access_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_access_logs.
     */
    distinct?: Audit_access_logsScalarFieldEnum | Audit_access_logsScalarFieldEnum[]
  }

  /**
   * audit_access_logs findFirstOrThrow
   */
  export type audit_access_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_access_logs to fetch.
     */
    where?: audit_access_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_access_logs to fetch.
     */
    orderBy?: audit_access_logsOrderByWithRelationInput | audit_access_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_access_logs.
     */
    cursor?: audit_access_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_access_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_access_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_access_logs.
     */
    distinct?: Audit_access_logsScalarFieldEnum | Audit_access_logsScalarFieldEnum[]
  }

  /**
   * audit_access_logs findMany
   */
  export type audit_access_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_access_logs to fetch.
     */
    where?: audit_access_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_access_logs to fetch.
     */
    orderBy?: audit_access_logsOrderByWithRelationInput | audit_access_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_access_logs.
     */
    cursor?: audit_access_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_access_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_access_logs.
     */
    skip?: number
    distinct?: Audit_access_logsScalarFieldEnum | Audit_access_logsScalarFieldEnum[]
  }

  /**
   * audit_access_logs create
   */
  export type audit_access_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a audit_access_logs.
     */
    data: XOR<audit_access_logsCreateInput, audit_access_logsUncheckedCreateInput>
  }

  /**
   * audit_access_logs createMany
   */
  export type audit_access_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_access_logs.
     */
    data: audit_access_logsCreateManyInput | audit_access_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit_access_logs createManyAndReturn
   */
  export type audit_access_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * The data used to create many audit_access_logs.
     */
    data: audit_access_logsCreateManyInput | audit_access_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_access_logs update
   */
  export type audit_access_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a audit_access_logs.
     */
    data: XOR<audit_access_logsUpdateInput, audit_access_logsUncheckedUpdateInput>
    /**
     * Choose, which audit_access_logs to update.
     */
    where: audit_access_logsWhereUniqueInput
  }

  /**
   * audit_access_logs updateMany
   */
  export type audit_access_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_access_logs.
     */
    data: XOR<audit_access_logsUpdateManyMutationInput, audit_access_logsUncheckedUpdateManyInput>
    /**
     * Filter which audit_access_logs to update
     */
    where?: audit_access_logsWhereInput
    /**
     * Limit how many audit_access_logs to update.
     */
    limit?: number
  }

  /**
   * audit_access_logs updateManyAndReturn
   */
  export type audit_access_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * The data used to update audit_access_logs.
     */
    data: XOR<audit_access_logsUpdateManyMutationInput, audit_access_logsUncheckedUpdateManyInput>
    /**
     * Filter which audit_access_logs to update
     */
    where?: audit_access_logsWhereInput
    /**
     * Limit how many audit_access_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_access_logs upsert
   */
  export type audit_access_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the audit_access_logs to update in case it exists.
     */
    where: audit_access_logsWhereUniqueInput
    /**
     * In case the audit_access_logs found by the `where` argument doesn't exist, create a new audit_access_logs with this data.
     */
    create: XOR<audit_access_logsCreateInput, audit_access_logsUncheckedCreateInput>
    /**
     * In case the audit_access_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_access_logsUpdateInput, audit_access_logsUncheckedUpdateInput>
  }

  /**
   * audit_access_logs delete
   */
  export type audit_access_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsInclude<ExtArgs> | null
    /**
     * Filter which audit_access_logs to delete.
     */
    where: audit_access_logsWhereUniqueInput
  }

  /**
   * audit_access_logs deleteMany
   */
  export type audit_access_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_access_logs to delete
     */
    where?: audit_access_logsWhereInput
    /**
     * Limit how many audit_access_logs to delete.
     */
    limit?: number
  }

  /**
   * audit_access_logs.patient
   */
  export type audit_access_logs$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patients
     */
    select?: patientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patients
     */
    omit?: patientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientsInclude<ExtArgs> | null
    where?: patientsWhereInput
  }

  /**
   * audit_access_logs without action
   */
  export type audit_access_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_access_logs
     */
    select?: audit_access_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_access_logs
     */
    omit?: audit_access_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_access_logsInclude<ExtArgs> | null
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


  export const PatientsScalarFieldEnum: {
    patient_id: 'patient_id',
    wallet_did: 'wallet_did',
    full_name: 'full_name',
    birth_date: 'birth_date',
    gender: 'gender',
    blood_type: 'blood_type',
    contact_phone: 'contact_phone',
    address: 'address',
    emergency_contact: 'emergency_contact',
    insurance: 'insurance',
    allergies: 'allergies',
    chronic_conditions: 'chronic_conditions',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PatientsScalarFieldEnum = (typeof PatientsScalarFieldEnum)[keyof typeof PatientsScalarFieldEnum]


  export const ProvidersScalarFieldEnum: {
    provider_id: 'provider_id',
    name: 'name',
    address: 'address',
    contact_phone: 'contact_phone',
    type: 'type',
    license_number: 'license_number',
    metadata: 'metadata',
    created_at: 'created_at'
  };

  export type ProvidersScalarFieldEnum = (typeof ProvidersScalarFieldEnum)[keyof typeof ProvidersScalarFieldEnum]


  export const DoctorsScalarFieldEnum: {
    doctor_id: 'doctor_id',
    provider_id: 'provider_id',
    full_name: 'full_name',
    specialty: 'specialty',
    license_no: 'license_no',
    contact: 'contact',
    profile_meta: 'profile_meta',
    created_at: 'created_at'
  };

  export type DoctorsScalarFieldEnum = (typeof DoctorsScalarFieldEnum)[keyof typeof DoctorsScalarFieldEnum]


  export const VisitsScalarFieldEnum: {
    visit_id: 'visit_id',
    patient_id: 'patient_id',
    provider_id: 'provider_id',
    doctor_id: 'doctor_id',
    visit_timestamp: 'visit_timestamp',
    visit_type: 'visit_type',
    chief_complaint: 'chief_complaint',
    clinical_notes_hash: 'clinical_notes_hash',
    clinical_notes_enc: 'clinical_notes_enc',
    billing_id: 'billing_id',
    created_at: 'created_at'
  };

  export type VisitsScalarFieldEnum = (typeof VisitsScalarFieldEnum)[keyof typeof VisitsScalarFieldEnum]


  export const DiagnosesScalarFieldEnum: {
    dx_id: 'dx_id',
    visit_id: 'visit_id',
    code_icd10: 'code_icd10',
    description: 'description',
    severity: 'severity',
    created_at: 'created_at'
  };

  export type DiagnosesScalarFieldEnum = (typeof DiagnosesScalarFieldEnum)[keyof typeof DiagnosesScalarFieldEnum]


  export const PrescriptionsScalarFieldEnum: {
    presc_id: 'presc_id',
    visit_id: 'visit_id',
    medications: 'medications',
    presc_issued_by: 'presc_issued_by',
    presc_hash: 'presc_hash',
    created_at: 'created_at'
  };

  export type PrescriptionsScalarFieldEnum = (typeof PrescriptionsScalarFieldEnum)[keyof typeof PrescriptionsScalarFieldEnum]


  export const LabsScalarFieldEnum: {
    lab_id: 'lab_id',
    visit_id: 'visit_id',
    lab_type: 'lab_type',
    results_enc: 'results_enc',
    results_hash: 'results_hash',
    attachments: 'attachments',
    created_at: 'created_at'
  };

  export type LabsScalarFieldEnum = (typeof LabsScalarFieldEnum)[keyof typeof LabsScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    file_id: 'file_id',
    owner_id: 'owner_id',
    visit_id: 'visit_id',
    file_type: 'file_type',
    storage_path: 'storage_path',
    file_hash: 'file_hash',
    created_at: 'created_at'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const Access_controlsScalarFieldEnum: {
    ac_id: 'ac_id',
    patient_id: 'patient_id',
    granted_to: 'granted_to',
    granted_by: 'granted_by',
    scope: 'scope',
    valid_from: 'valid_from',
    valid_to: 'valid_to',
    on_chain_tx: 'on_chain_tx',
    created_at: 'created_at'
  };

  export type Access_controlsScalarFieldEnum = (typeof Access_controlsScalarFieldEnum)[keyof typeof Access_controlsScalarFieldEnum]


  export const Audit_access_logsScalarFieldEnum: {
    log_id: 'log_id',
    patient_id: 'patient_id',
    accessed_by: 'accessed_by',
    resource_type: 'resource_type',
    resource_id: 'resource_id',
    access_timestamp: 'access_timestamp',
    on_chain_anchor: 'on_chain_anchor',
    created_at: 'created_at'
  };

  export type Audit_access_logsScalarFieldEnum = (typeof Audit_access_logsScalarFieldEnum)[keyof typeof Audit_access_logsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type patientsWhereInput = {
    AND?: patientsWhereInput | patientsWhereInput[]
    OR?: patientsWhereInput[]
    NOT?: patientsWhereInput | patientsWhereInput[]
    patient_id?: StringFilter<"patients"> | string
    wallet_did?: StringNullableFilter<"patients"> | string | null
    full_name?: StringFilter<"patients"> | string
    birth_date?: DateTimeNullableFilter<"patients"> | Date | string | null
    gender?: StringNullableFilter<"patients"> | string | null
    blood_type?: StringNullableFilter<"patients"> | string | null
    contact_phone?: StringNullableFilter<"patients"> | string | null
    address?: StringNullableFilter<"patients"> | string | null
    emergency_contact?: JsonNullableFilter<"patients">
    insurance?: JsonNullableFilter<"patients">
    allergies?: JsonNullableFilter<"patients">
    chronic_conditions?: JsonNullableFilter<"patients">
    created_at?: DateTimeFilter<"patients"> | Date | string
    updated_at?: DateTimeFilter<"patients"> | Date | string
    visits?: VisitsListRelationFilter
    access_controls?: Access_controlsListRelationFilter
    audit_logs?: Audit_access_logsListRelationFilter
  }

  export type patientsOrderByWithRelationInput = {
    patient_id?: SortOrder
    wallet_did?: SortOrderInput | SortOrder
    full_name?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    blood_type?: SortOrderInput | SortOrder
    contact_phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    emergency_contact?: SortOrderInput | SortOrder
    insurance?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    chronic_conditions?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    visits?: visitsOrderByRelationAggregateInput
    access_controls?: access_controlsOrderByRelationAggregateInput
    audit_logs?: audit_access_logsOrderByRelationAggregateInput
  }

  export type patientsWhereUniqueInput = Prisma.AtLeast<{
    patient_id?: string
    wallet_did?: string
    AND?: patientsWhereInput | patientsWhereInput[]
    OR?: patientsWhereInput[]
    NOT?: patientsWhereInput | patientsWhereInput[]
    full_name?: StringFilter<"patients"> | string
    birth_date?: DateTimeNullableFilter<"patients"> | Date | string | null
    gender?: StringNullableFilter<"patients"> | string | null
    blood_type?: StringNullableFilter<"patients"> | string | null
    contact_phone?: StringNullableFilter<"patients"> | string | null
    address?: StringNullableFilter<"patients"> | string | null
    emergency_contact?: JsonNullableFilter<"patients">
    insurance?: JsonNullableFilter<"patients">
    allergies?: JsonNullableFilter<"patients">
    chronic_conditions?: JsonNullableFilter<"patients">
    created_at?: DateTimeFilter<"patients"> | Date | string
    updated_at?: DateTimeFilter<"patients"> | Date | string
    visits?: VisitsListRelationFilter
    access_controls?: Access_controlsListRelationFilter
    audit_logs?: Audit_access_logsListRelationFilter
  }, "patient_id" | "wallet_did">

  export type patientsOrderByWithAggregationInput = {
    patient_id?: SortOrder
    wallet_did?: SortOrderInput | SortOrder
    full_name?: SortOrder
    birth_date?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    blood_type?: SortOrderInput | SortOrder
    contact_phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    emergency_contact?: SortOrderInput | SortOrder
    insurance?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    chronic_conditions?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: patientsCountOrderByAggregateInput
    _max?: patientsMaxOrderByAggregateInput
    _min?: patientsMinOrderByAggregateInput
  }

  export type patientsScalarWhereWithAggregatesInput = {
    AND?: patientsScalarWhereWithAggregatesInput | patientsScalarWhereWithAggregatesInput[]
    OR?: patientsScalarWhereWithAggregatesInput[]
    NOT?: patientsScalarWhereWithAggregatesInput | patientsScalarWhereWithAggregatesInput[]
    patient_id?: StringWithAggregatesFilter<"patients"> | string
    wallet_did?: StringNullableWithAggregatesFilter<"patients"> | string | null
    full_name?: StringWithAggregatesFilter<"patients"> | string
    birth_date?: DateTimeNullableWithAggregatesFilter<"patients"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"patients"> | string | null
    blood_type?: StringNullableWithAggregatesFilter<"patients"> | string | null
    contact_phone?: StringNullableWithAggregatesFilter<"patients"> | string | null
    address?: StringNullableWithAggregatesFilter<"patients"> | string | null
    emergency_contact?: JsonNullableWithAggregatesFilter<"patients">
    insurance?: JsonNullableWithAggregatesFilter<"patients">
    allergies?: JsonNullableWithAggregatesFilter<"patients">
    chronic_conditions?: JsonNullableWithAggregatesFilter<"patients">
    created_at?: DateTimeWithAggregatesFilter<"patients"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"patients"> | Date | string
  }

  export type providersWhereInput = {
    AND?: providersWhereInput | providersWhereInput[]
    OR?: providersWhereInput[]
    NOT?: providersWhereInput | providersWhereInput[]
    provider_id?: StringFilter<"providers"> | string
    name?: StringFilter<"providers"> | string
    address?: StringNullableFilter<"providers"> | string | null
    contact_phone?: StringNullableFilter<"providers"> | string | null
    type?: StringNullableFilter<"providers"> | string | null
    license_number?: StringNullableFilter<"providers"> | string | null
    metadata?: JsonNullableFilter<"providers">
    created_at?: DateTimeFilter<"providers"> | Date | string
    doctors?: DoctorsListRelationFilter
    visits?: VisitsListRelationFilter
  }

  export type providersOrderByWithRelationInput = {
    provider_id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    contact_phone?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    license_number?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
    doctors?: doctorsOrderByRelationAggregateInput
    visits?: visitsOrderByRelationAggregateInput
  }

  export type providersWhereUniqueInput = Prisma.AtLeast<{
    provider_id?: string
    AND?: providersWhereInput | providersWhereInput[]
    OR?: providersWhereInput[]
    NOT?: providersWhereInput | providersWhereInput[]
    name?: StringFilter<"providers"> | string
    address?: StringNullableFilter<"providers"> | string | null
    contact_phone?: StringNullableFilter<"providers"> | string | null
    type?: StringNullableFilter<"providers"> | string | null
    license_number?: StringNullableFilter<"providers"> | string | null
    metadata?: JsonNullableFilter<"providers">
    created_at?: DateTimeFilter<"providers"> | Date | string
    doctors?: DoctorsListRelationFilter
    visits?: VisitsListRelationFilter
  }, "provider_id">

  export type providersOrderByWithAggregationInput = {
    provider_id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    contact_phone?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    license_number?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: providersCountOrderByAggregateInput
    _max?: providersMaxOrderByAggregateInput
    _min?: providersMinOrderByAggregateInput
  }

  export type providersScalarWhereWithAggregatesInput = {
    AND?: providersScalarWhereWithAggregatesInput | providersScalarWhereWithAggregatesInput[]
    OR?: providersScalarWhereWithAggregatesInput[]
    NOT?: providersScalarWhereWithAggregatesInput | providersScalarWhereWithAggregatesInput[]
    provider_id?: StringWithAggregatesFilter<"providers"> | string
    name?: StringWithAggregatesFilter<"providers"> | string
    address?: StringNullableWithAggregatesFilter<"providers"> | string | null
    contact_phone?: StringNullableWithAggregatesFilter<"providers"> | string | null
    type?: StringNullableWithAggregatesFilter<"providers"> | string | null
    license_number?: StringNullableWithAggregatesFilter<"providers"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"providers">
    created_at?: DateTimeWithAggregatesFilter<"providers"> | Date | string
  }

  export type doctorsWhereInput = {
    AND?: doctorsWhereInput | doctorsWhereInput[]
    OR?: doctorsWhereInput[]
    NOT?: doctorsWhereInput | doctorsWhereInput[]
    doctor_id?: StringFilter<"doctors"> | string
    provider_id?: StringNullableFilter<"doctors"> | string | null
    full_name?: StringFilter<"doctors"> | string
    specialty?: StringNullableFilter<"doctors"> | string | null
    license_no?: StringNullableFilter<"doctors"> | string | null
    contact?: StringNullableFilter<"doctors"> | string | null
    profile_meta?: JsonNullableFilter<"doctors">
    created_at?: DateTimeFilter<"doctors"> | Date | string
    provider?: XOR<ProvidersNullableScalarRelationFilter, providersWhereInput> | null
    visits?: VisitsListRelationFilter
    prescriptions?: PrescriptionsListRelationFilter
  }

  export type doctorsOrderByWithRelationInput = {
    doctor_id?: SortOrder
    provider_id?: SortOrderInput | SortOrder
    full_name?: SortOrder
    specialty?: SortOrderInput | SortOrder
    license_no?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    profile_meta?: SortOrderInput | SortOrder
    created_at?: SortOrder
    provider?: providersOrderByWithRelationInput
    visits?: visitsOrderByRelationAggregateInput
    prescriptions?: prescriptionsOrderByRelationAggregateInput
  }

  export type doctorsWhereUniqueInput = Prisma.AtLeast<{
    doctor_id?: string
    AND?: doctorsWhereInput | doctorsWhereInput[]
    OR?: doctorsWhereInput[]
    NOT?: doctorsWhereInput | doctorsWhereInput[]
    provider_id?: StringNullableFilter<"doctors"> | string | null
    full_name?: StringFilter<"doctors"> | string
    specialty?: StringNullableFilter<"doctors"> | string | null
    license_no?: StringNullableFilter<"doctors"> | string | null
    contact?: StringNullableFilter<"doctors"> | string | null
    profile_meta?: JsonNullableFilter<"doctors">
    created_at?: DateTimeFilter<"doctors"> | Date | string
    provider?: XOR<ProvidersNullableScalarRelationFilter, providersWhereInput> | null
    visits?: VisitsListRelationFilter
    prescriptions?: PrescriptionsListRelationFilter
  }, "doctor_id">

  export type doctorsOrderByWithAggregationInput = {
    doctor_id?: SortOrder
    provider_id?: SortOrderInput | SortOrder
    full_name?: SortOrder
    specialty?: SortOrderInput | SortOrder
    license_no?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    profile_meta?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: doctorsCountOrderByAggregateInput
    _max?: doctorsMaxOrderByAggregateInput
    _min?: doctorsMinOrderByAggregateInput
  }

  export type doctorsScalarWhereWithAggregatesInput = {
    AND?: doctorsScalarWhereWithAggregatesInput | doctorsScalarWhereWithAggregatesInput[]
    OR?: doctorsScalarWhereWithAggregatesInput[]
    NOT?: doctorsScalarWhereWithAggregatesInput | doctorsScalarWhereWithAggregatesInput[]
    doctor_id?: StringWithAggregatesFilter<"doctors"> | string
    provider_id?: StringNullableWithAggregatesFilter<"doctors"> | string | null
    full_name?: StringWithAggregatesFilter<"doctors"> | string
    specialty?: StringNullableWithAggregatesFilter<"doctors"> | string | null
    license_no?: StringNullableWithAggregatesFilter<"doctors"> | string | null
    contact?: StringNullableWithAggregatesFilter<"doctors"> | string | null
    profile_meta?: JsonNullableWithAggregatesFilter<"doctors">
    created_at?: DateTimeWithAggregatesFilter<"doctors"> | Date | string
  }

  export type visitsWhereInput = {
    AND?: visitsWhereInput | visitsWhereInput[]
    OR?: visitsWhereInput[]
    NOT?: visitsWhereInput | visitsWhereInput[]
    visit_id?: StringFilter<"visits"> | string
    patient_id?: StringNullableFilter<"visits"> | string | null
    provider_id?: StringNullableFilter<"visits"> | string | null
    doctor_id?: StringNullableFilter<"visits"> | string | null
    visit_timestamp?: DateTimeFilter<"visits"> | Date | string
    visit_type?: StringNullableFilter<"visits"> | string | null
    chief_complaint?: StringNullableFilter<"visits"> | string | null
    clinical_notes_hash?: StringNullableFilter<"visits"> | string | null
    clinical_notes_enc?: StringNullableFilter<"visits"> | string | null
    billing_id?: StringNullableFilter<"visits"> | string | null
    created_at?: DateTimeFilter<"visits"> | Date | string
    patient?: XOR<PatientsNullableScalarRelationFilter, patientsWhereInput> | null
    provider?: XOR<ProvidersNullableScalarRelationFilter, providersWhereInput> | null
    doctor?: XOR<DoctorsNullableScalarRelationFilter, doctorsWhereInput> | null
    diagnoses?: DiagnosesListRelationFilter
    prescriptions?: PrescriptionsListRelationFilter
    labs?: LabsListRelationFilter
    files?: FilesListRelationFilter
  }

  export type visitsOrderByWithRelationInput = {
    visit_id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    provider_id?: SortOrderInput | SortOrder
    doctor_id?: SortOrderInput | SortOrder
    visit_timestamp?: SortOrder
    visit_type?: SortOrderInput | SortOrder
    chief_complaint?: SortOrderInput | SortOrder
    clinical_notes_hash?: SortOrderInput | SortOrder
    clinical_notes_enc?: SortOrderInput | SortOrder
    billing_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    patient?: patientsOrderByWithRelationInput
    provider?: providersOrderByWithRelationInput
    doctor?: doctorsOrderByWithRelationInput
    diagnoses?: diagnosesOrderByRelationAggregateInput
    prescriptions?: prescriptionsOrderByRelationAggregateInput
    labs?: labsOrderByRelationAggregateInput
    files?: filesOrderByRelationAggregateInput
  }

  export type visitsWhereUniqueInput = Prisma.AtLeast<{
    visit_id?: string
    AND?: visitsWhereInput | visitsWhereInput[]
    OR?: visitsWhereInput[]
    NOT?: visitsWhereInput | visitsWhereInput[]
    patient_id?: StringNullableFilter<"visits"> | string | null
    provider_id?: StringNullableFilter<"visits"> | string | null
    doctor_id?: StringNullableFilter<"visits"> | string | null
    visit_timestamp?: DateTimeFilter<"visits"> | Date | string
    visit_type?: StringNullableFilter<"visits"> | string | null
    chief_complaint?: StringNullableFilter<"visits"> | string | null
    clinical_notes_hash?: StringNullableFilter<"visits"> | string | null
    clinical_notes_enc?: StringNullableFilter<"visits"> | string | null
    billing_id?: StringNullableFilter<"visits"> | string | null
    created_at?: DateTimeFilter<"visits"> | Date | string
    patient?: XOR<PatientsNullableScalarRelationFilter, patientsWhereInput> | null
    provider?: XOR<ProvidersNullableScalarRelationFilter, providersWhereInput> | null
    doctor?: XOR<DoctorsNullableScalarRelationFilter, doctorsWhereInput> | null
    diagnoses?: DiagnosesListRelationFilter
    prescriptions?: PrescriptionsListRelationFilter
    labs?: LabsListRelationFilter
    files?: FilesListRelationFilter
  }, "visit_id">

  export type visitsOrderByWithAggregationInput = {
    visit_id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    provider_id?: SortOrderInput | SortOrder
    doctor_id?: SortOrderInput | SortOrder
    visit_timestamp?: SortOrder
    visit_type?: SortOrderInput | SortOrder
    chief_complaint?: SortOrderInput | SortOrder
    clinical_notes_hash?: SortOrderInput | SortOrder
    clinical_notes_enc?: SortOrderInput | SortOrder
    billing_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: visitsCountOrderByAggregateInput
    _max?: visitsMaxOrderByAggregateInput
    _min?: visitsMinOrderByAggregateInput
  }

  export type visitsScalarWhereWithAggregatesInput = {
    AND?: visitsScalarWhereWithAggregatesInput | visitsScalarWhereWithAggregatesInput[]
    OR?: visitsScalarWhereWithAggregatesInput[]
    NOT?: visitsScalarWhereWithAggregatesInput | visitsScalarWhereWithAggregatesInput[]
    visit_id?: StringWithAggregatesFilter<"visits"> | string
    patient_id?: StringNullableWithAggregatesFilter<"visits"> | string | null
    provider_id?: StringNullableWithAggregatesFilter<"visits"> | string | null
    doctor_id?: StringNullableWithAggregatesFilter<"visits"> | string | null
    visit_timestamp?: DateTimeWithAggregatesFilter<"visits"> | Date | string
    visit_type?: StringNullableWithAggregatesFilter<"visits"> | string | null
    chief_complaint?: StringNullableWithAggregatesFilter<"visits"> | string | null
    clinical_notes_hash?: StringNullableWithAggregatesFilter<"visits"> | string | null
    clinical_notes_enc?: StringNullableWithAggregatesFilter<"visits"> | string | null
    billing_id?: StringNullableWithAggregatesFilter<"visits"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"visits"> | Date | string
  }

  export type diagnosesWhereInput = {
    AND?: diagnosesWhereInput | diagnosesWhereInput[]
    OR?: diagnosesWhereInput[]
    NOT?: diagnosesWhereInput | diagnosesWhereInput[]
    dx_id?: StringFilter<"diagnoses"> | string
    visit_id?: StringNullableFilter<"diagnoses"> | string | null
    code_icd10?: StringNullableFilter<"diagnoses"> | string | null
    description?: StringNullableFilter<"diagnoses"> | string | null
    severity?: StringNullableFilter<"diagnoses"> | string | null
    created_at?: DateTimeFilter<"diagnoses"> | Date | string
    visit?: XOR<VisitsNullableScalarRelationFilter, visitsWhereInput> | null
  }

  export type diagnosesOrderByWithRelationInput = {
    dx_id?: SortOrder
    visit_id?: SortOrderInput | SortOrder
    code_icd10?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    severity?: SortOrderInput | SortOrder
    created_at?: SortOrder
    visit?: visitsOrderByWithRelationInput
  }

  export type diagnosesWhereUniqueInput = Prisma.AtLeast<{
    dx_id?: string
    AND?: diagnosesWhereInput | diagnosesWhereInput[]
    OR?: diagnosesWhereInput[]
    NOT?: diagnosesWhereInput | diagnosesWhereInput[]
    visit_id?: StringNullableFilter<"diagnoses"> | string | null
    code_icd10?: StringNullableFilter<"diagnoses"> | string | null
    description?: StringNullableFilter<"diagnoses"> | string | null
    severity?: StringNullableFilter<"diagnoses"> | string | null
    created_at?: DateTimeFilter<"diagnoses"> | Date | string
    visit?: XOR<VisitsNullableScalarRelationFilter, visitsWhereInput> | null
  }, "dx_id">

  export type diagnosesOrderByWithAggregationInput = {
    dx_id?: SortOrder
    visit_id?: SortOrderInput | SortOrder
    code_icd10?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    severity?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: diagnosesCountOrderByAggregateInput
    _max?: diagnosesMaxOrderByAggregateInput
    _min?: diagnosesMinOrderByAggregateInput
  }

  export type diagnosesScalarWhereWithAggregatesInput = {
    AND?: diagnosesScalarWhereWithAggregatesInput | diagnosesScalarWhereWithAggregatesInput[]
    OR?: diagnosesScalarWhereWithAggregatesInput[]
    NOT?: diagnosesScalarWhereWithAggregatesInput | diagnosesScalarWhereWithAggregatesInput[]
    dx_id?: StringWithAggregatesFilter<"diagnoses"> | string
    visit_id?: StringNullableWithAggregatesFilter<"diagnoses"> | string | null
    code_icd10?: StringNullableWithAggregatesFilter<"diagnoses"> | string | null
    description?: StringNullableWithAggregatesFilter<"diagnoses"> | string | null
    severity?: StringNullableWithAggregatesFilter<"diagnoses"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"diagnoses"> | Date | string
  }

  export type prescriptionsWhereInput = {
    AND?: prescriptionsWhereInput | prescriptionsWhereInput[]
    OR?: prescriptionsWhereInput[]
    NOT?: prescriptionsWhereInput | prescriptionsWhereInput[]
    presc_id?: StringFilter<"prescriptions"> | string
    visit_id?: StringNullableFilter<"prescriptions"> | string | null
    medications?: JsonNullableFilter<"prescriptions">
    presc_issued_by?: StringNullableFilter<"prescriptions"> | string | null
    presc_hash?: StringNullableFilter<"prescriptions"> | string | null
    created_at?: DateTimeFilter<"prescriptions"> | Date | string
    visit?: XOR<VisitsNullableScalarRelationFilter, visitsWhereInput> | null
    doctor?: XOR<DoctorsNullableScalarRelationFilter, doctorsWhereInput> | null
  }

  export type prescriptionsOrderByWithRelationInput = {
    presc_id?: SortOrder
    visit_id?: SortOrderInput | SortOrder
    medications?: SortOrderInput | SortOrder
    presc_issued_by?: SortOrderInput | SortOrder
    presc_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
    visit?: visitsOrderByWithRelationInput
    doctor?: doctorsOrderByWithRelationInput
  }

  export type prescriptionsWhereUniqueInput = Prisma.AtLeast<{
    presc_id?: string
    AND?: prescriptionsWhereInput | prescriptionsWhereInput[]
    OR?: prescriptionsWhereInput[]
    NOT?: prescriptionsWhereInput | prescriptionsWhereInput[]
    visit_id?: StringNullableFilter<"prescriptions"> | string | null
    medications?: JsonNullableFilter<"prescriptions">
    presc_issued_by?: StringNullableFilter<"prescriptions"> | string | null
    presc_hash?: StringNullableFilter<"prescriptions"> | string | null
    created_at?: DateTimeFilter<"prescriptions"> | Date | string
    visit?: XOR<VisitsNullableScalarRelationFilter, visitsWhereInput> | null
    doctor?: XOR<DoctorsNullableScalarRelationFilter, doctorsWhereInput> | null
  }, "presc_id">

  export type prescriptionsOrderByWithAggregationInput = {
    presc_id?: SortOrder
    visit_id?: SortOrderInput | SortOrder
    medications?: SortOrderInput | SortOrder
    presc_issued_by?: SortOrderInput | SortOrder
    presc_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: prescriptionsCountOrderByAggregateInput
    _max?: prescriptionsMaxOrderByAggregateInput
    _min?: prescriptionsMinOrderByAggregateInput
  }

  export type prescriptionsScalarWhereWithAggregatesInput = {
    AND?: prescriptionsScalarWhereWithAggregatesInput | prescriptionsScalarWhereWithAggregatesInput[]
    OR?: prescriptionsScalarWhereWithAggregatesInput[]
    NOT?: prescriptionsScalarWhereWithAggregatesInput | prescriptionsScalarWhereWithAggregatesInput[]
    presc_id?: StringWithAggregatesFilter<"prescriptions"> | string
    visit_id?: StringNullableWithAggregatesFilter<"prescriptions"> | string | null
    medications?: JsonNullableWithAggregatesFilter<"prescriptions">
    presc_issued_by?: StringNullableWithAggregatesFilter<"prescriptions"> | string | null
    presc_hash?: StringNullableWithAggregatesFilter<"prescriptions"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"prescriptions"> | Date | string
  }

  export type labsWhereInput = {
    AND?: labsWhereInput | labsWhereInput[]
    OR?: labsWhereInput[]
    NOT?: labsWhereInput | labsWhereInput[]
    lab_id?: StringFilter<"labs"> | string
    visit_id?: StringNullableFilter<"labs"> | string | null
    lab_type?: StringNullableFilter<"labs"> | string | null
    results_enc?: StringNullableFilter<"labs"> | string | null
    results_hash?: StringNullableFilter<"labs"> | string | null
    attachments?: JsonNullableFilter<"labs">
    created_at?: DateTimeFilter<"labs"> | Date | string
    visit?: XOR<VisitsNullableScalarRelationFilter, visitsWhereInput> | null
  }

  export type labsOrderByWithRelationInput = {
    lab_id?: SortOrder
    visit_id?: SortOrderInput | SortOrder
    lab_type?: SortOrderInput | SortOrder
    results_enc?: SortOrderInput | SortOrder
    results_hash?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    created_at?: SortOrder
    visit?: visitsOrderByWithRelationInput
  }

  export type labsWhereUniqueInput = Prisma.AtLeast<{
    lab_id?: string
    AND?: labsWhereInput | labsWhereInput[]
    OR?: labsWhereInput[]
    NOT?: labsWhereInput | labsWhereInput[]
    visit_id?: StringNullableFilter<"labs"> | string | null
    lab_type?: StringNullableFilter<"labs"> | string | null
    results_enc?: StringNullableFilter<"labs"> | string | null
    results_hash?: StringNullableFilter<"labs"> | string | null
    attachments?: JsonNullableFilter<"labs">
    created_at?: DateTimeFilter<"labs"> | Date | string
    visit?: XOR<VisitsNullableScalarRelationFilter, visitsWhereInput> | null
  }, "lab_id">

  export type labsOrderByWithAggregationInput = {
    lab_id?: SortOrder
    visit_id?: SortOrderInput | SortOrder
    lab_type?: SortOrderInput | SortOrder
    results_enc?: SortOrderInput | SortOrder
    results_hash?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: labsCountOrderByAggregateInput
    _max?: labsMaxOrderByAggregateInput
    _min?: labsMinOrderByAggregateInput
  }

  export type labsScalarWhereWithAggregatesInput = {
    AND?: labsScalarWhereWithAggregatesInput | labsScalarWhereWithAggregatesInput[]
    OR?: labsScalarWhereWithAggregatesInput[]
    NOT?: labsScalarWhereWithAggregatesInput | labsScalarWhereWithAggregatesInput[]
    lab_id?: StringWithAggregatesFilter<"labs"> | string
    visit_id?: StringNullableWithAggregatesFilter<"labs"> | string | null
    lab_type?: StringNullableWithAggregatesFilter<"labs"> | string | null
    results_enc?: StringNullableWithAggregatesFilter<"labs"> | string | null
    results_hash?: StringNullableWithAggregatesFilter<"labs"> | string | null
    attachments?: JsonNullableWithAggregatesFilter<"labs">
    created_at?: DateTimeWithAggregatesFilter<"labs"> | Date | string
  }

  export type filesWhereInput = {
    AND?: filesWhereInput | filesWhereInput[]
    OR?: filesWhereInput[]
    NOT?: filesWhereInput | filesWhereInput[]
    file_id?: StringFilter<"files"> | string
    owner_id?: StringFilter<"files"> | string
    visit_id?: StringNullableFilter<"files"> | string | null
    file_type?: StringNullableFilter<"files"> | string | null
    storage_path?: StringNullableFilter<"files"> | string | null
    file_hash?: StringNullableFilter<"files"> | string | null
    created_at?: DateTimeFilter<"files"> | Date | string
    visit?: XOR<VisitsNullableScalarRelationFilter, visitsWhereInput> | null
  }

  export type filesOrderByWithRelationInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
    visit_id?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    storage_path?: SortOrderInput | SortOrder
    file_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
    visit?: visitsOrderByWithRelationInput
  }

  export type filesWhereUniqueInput = Prisma.AtLeast<{
    file_id?: string
    AND?: filesWhereInput | filesWhereInput[]
    OR?: filesWhereInput[]
    NOT?: filesWhereInput | filesWhereInput[]
    owner_id?: StringFilter<"files"> | string
    visit_id?: StringNullableFilter<"files"> | string | null
    file_type?: StringNullableFilter<"files"> | string | null
    storage_path?: StringNullableFilter<"files"> | string | null
    file_hash?: StringNullableFilter<"files"> | string | null
    created_at?: DateTimeFilter<"files"> | Date | string
    visit?: XOR<VisitsNullableScalarRelationFilter, visitsWhereInput> | null
  }, "file_id">

  export type filesOrderByWithAggregationInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
    visit_id?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    storage_path?: SortOrderInput | SortOrder
    file_hash?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: filesCountOrderByAggregateInput
    _max?: filesMaxOrderByAggregateInput
    _min?: filesMinOrderByAggregateInput
  }

  export type filesScalarWhereWithAggregatesInput = {
    AND?: filesScalarWhereWithAggregatesInput | filesScalarWhereWithAggregatesInput[]
    OR?: filesScalarWhereWithAggregatesInput[]
    NOT?: filesScalarWhereWithAggregatesInput | filesScalarWhereWithAggregatesInput[]
    file_id?: StringWithAggregatesFilter<"files"> | string
    owner_id?: StringWithAggregatesFilter<"files"> | string
    visit_id?: StringNullableWithAggregatesFilter<"files"> | string | null
    file_type?: StringNullableWithAggregatesFilter<"files"> | string | null
    storage_path?: StringNullableWithAggregatesFilter<"files"> | string | null
    file_hash?: StringNullableWithAggregatesFilter<"files"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"files"> | Date | string
  }

  export type access_controlsWhereInput = {
    AND?: access_controlsWhereInput | access_controlsWhereInput[]
    OR?: access_controlsWhereInput[]
    NOT?: access_controlsWhereInput | access_controlsWhereInput[]
    ac_id?: StringFilter<"access_controls"> | string
    patient_id?: StringNullableFilter<"access_controls"> | string | null
    granted_to?: StringFilter<"access_controls"> | string
    granted_by?: StringNullableFilter<"access_controls"> | string | null
    scope?: JsonNullableFilter<"access_controls">
    valid_from?: DateTimeNullableFilter<"access_controls"> | Date | string | null
    valid_to?: DateTimeNullableFilter<"access_controls"> | Date | string | null
    on_chain_tx?: StringNullableFilter<"access_controls"> | string | null
    created_at?: DateTimeFilter<"access_controls"> | Date | string
    patient?: XOR<PatientsNullableScalarRelationFilter, patientsWhereInput> | null
  }

  export type access_controlsOrderByWithRelationInput = {
    ac_id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    granted_to?: SortOrder
    granted_by?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    valid_from?: SortOrderInput | SortOrder
    valid_to?: SortOrderInput | SortOrder
    on_chain_tx?: SortOrderInput | SortOrder
    created_at?: SortOrder
    patient?: patientsOrderByWithRelationInput
  }

  export type access_controlsWhereUniqueInput = Prisma.AtLeast<{
    ac_id?: string
    AND?: access_controlsWhereInput | access_controlsWhereInput[]
    OR?: access_controlsWhereInput[]
    NOT?: access_controlsWhereInput | access_controlsWhereInput[]
    patient_id?: StringNullableFilter<"access_controls"> | string | null
    granted_to?: StringFilter<"access_controls"> | string
    granted_by?: StringNullableFilter<"access_controls"> | string | null
    scope?: JsonNullableFilter<"access_controls">
    valid_from?: DateTimeNullableFilter<"access_controls"> | Date | string | null
    valid_to?: DateTimeNullableFilter<"access_controls"> | Date | string | null
    on_chain_tx?: StringNullableFilter<"access_controls"> | string | null
    created_at?: DateTimeFilter<"access_controls"> | Date | string
    patient?: XOR<PatientsNullableScalarRelationFilter, patientsWhereInput> | null
  }, "ac_id">

  export type access_controlsOrderByWithAggregationInput = {
    ac_id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    granted_to?: SortOrder
    granted_by?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    valid_from?: SortOrderInput | SortOrder
    valid_to?: SortOrderInput | SortOrder
    on_chain_tx?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: access_controlsCountOrderByAggregateInput
    _max?: access_controlsMaxOrderByAggregateInput
    _min?: access_controlsMinOrderByAggregateInput
  }

  export type access_controlsScalarWhereWithAggregatesInput = {
    AND?: access_controlsScalarWhereWithAggregatesInput | access_controlsScalarWhereWithAggregatesInput[]
    OR?: access_controlsScalarWhereWithAggregatesInput[]
    NOT?: access_controlsScalarWhereWithAggregatesInput | access_controlsScalarWhereWithAggregatesInput[]
    ac_id?: StringWithAggregatesFilter<"access_controls"> | string
    patient_id?: StringNullableWithAggregatesFilter<"access_controls"> | string | null
    granted_to?: StringWithAggregatesFilter<"access_controls"> | string
    granted_by?: StringNullableWithAggregatesFilter<"access_controls"> | string | null
    scope?: JsonNullableWithAggregatesFilter<"access_controls">
    valid_from?: DateTimeNullableWithAggregatesFilter<"access_controls"> | Date | string | null
    valid_to?: DateTimeNullableWithAggregatesFilter<"access_controls"> | Date | string | null
    on_chain_tx?: StringNullableWithAggregatesFilter<"access_controls"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"access_controls"> | Date | string
  }

  export type audit_access_logsWhereInput = {
    AND?: audit_access_logsWhereInput | audit_access_logsWhereInput[]
    OR?: audit_access_logsWhereInput[]
    NOT?: audit_access_logsWhereInput | audit_access_logsWhereInput[]
    log_id?: StringFilter<"audit_access_logs"> | string
    patient_id?: StringNullableFilter<"audit_access_logs"> | string | null
    accessed_by?: StringFilter<"audit_access_logs"> | string
    resource_type?: StringNullableFilter<"audit_access_logs"> | string | null
    resource_id?: StringNullableFilter<"audit_access_logs"> | string | null
    access_timestamp?: DateTimeFilter<"audit_access_logs"> | Date | string
    on_chain_anchor?: StringNullableFilter<"audit_access_logs"> | string | null
    created_at?: DateTimeFilter<"audit_access_logs"> | Date | string
    patient?: XOR<PatientsNullableScalarRelationFilter, patientsWhereInput> | null
  }

  export type audit_access_logsOrderByWithRelationInput = {
    log_id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    accessed_by?: SortOrder
    resource_type?: SortOrderInput | SortOrder
    resource_id?: SortOrderInput | SortOrder
    access_timestamp?: SortOrder
    on_chain_anchor?: SortOrderInput | SortOrder
    created_at?: SortOrder
    patient?: patientsOrderByWithRelationInput
  }

  export type audit_access_logsWhereUniqueInput = Prisma.AtLeast<{
    log_id?: string
    AND?: audit_access_logsWhereInput | audit_access_logsWhereInput[]
    OR?: audit_access_logsWhereInput[]
    NOT?: audit_access_logsWhereInput | audit_access_logsWhereInput[]
    patient_id?: StringNullableFilter<"audit_access_logs"> | string | null
    accessed_by?: StringFilter<"audit_access_logs"> | string
    resource_type?: StringNullableFilter<"audit_access_logs"> | string | null
    resource_id?: StringNullableFilter<"audit_access_logs"> | string | null
    access_timestamp?: DateTimeFilter<"audit_access_logs"> | Date | string
    on_chain_anchor?: StringNullableFilter<"audit_access_logs"> | string | null
    created_at?: DateTimeFilter<"audit_access_logs"> | Date | string
    patient?: XOR<PatientsNullableScalarRelationFilter, patientsWhereInput> | null
  }, "log_id">

  export type audit_access_logsOrderByWithAggregationInput = {
    log_id?: SortOrder
    patient_id?: SortOrderInput | SortOrder
    accessed_by?: SortOrder
    resource_type?: SortOrderInput | SortOrder
    resource_id?: SortOrderInput | SortOrder
    access_timestamp?: SortOrder
    on_chain_anchor?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: audit_access_logsCountOrderByAggregateInput
    _max?: audit_access_logsMaxOrderByAggregateInput
    _min?: audit_access_logsMinOrderByAggregateInput
  }

  export type audit_access_logsScalarWhereWithAggregatesInput = {
    AND?: audit_access_logsScalarWhereWithAggregatesInput | audit_access_logsScalarWhereWithAggregatesInput[]
    OR?: audit_access_logsScalarWhereWithAggregatesInput[]
    NOT?: audit_access_logsScalarWhereWithAggregatesInput | audit_access_logsScalarWhereWithAggregatesInput[]
    log_id?: StringWithAggregatesFilter<"audit_access_logs"> | string
    patient_id?: StringNullableWithAggregatesFilter<"audit_access_logs"> | string | null
    accessed_by?: StringWithAggregatesFilter<"audit_access_logs"> | string
    resource_type?: StringNullableWithAggregatesFilter<"audit_access_logs"> | string | null
    resource_id?: StringNullableWithAggregatesFilter<"audit_access_logs"> | string | null
    access_timestamp?: DateTimeWithAggregatesFilter<"audit_access_logs"> | Date | string
    on_chain_anchor?: StringNullableWithAggregatesFilter<"audit_access_logs"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"audit_access_logs"> | Date | string
  }

  export type patientsCreateInput = {
    patient_id?: string
    wallet_did?: string | null
    full_name: string
    birth_date?: Date | string | null
    gender?: string | null
    blood_type?: string | null
    contact_phone?: string | null
    address?: string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    visits?: visitsCreateNestedManyWithoutPatientInput
    access_controls?: access_controlsCreateNestedManyWithoutPatientInput
    audit_logs?: audit_access_logsCreateNestedManyWithoutPatientInput
  }

  export type patientsUncheckedCreateInput = {
    patient_id?: string
    wallet_did?: string | null
    full_name: string
    birth_date?: Date | string | null
    gender?: string | null
    blood_type?: string | null
    contact_phone?: string | null
    address?: string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    visits?: visitsUncheckedCreateNestedManyWithoutPatientInput
    access_controls?: access_controlsUncheckedCreateNestedManyWithoutPatientInput
    audit_logs?: audit_access_logsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientsUpdateInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    wallet_did?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUpdateManyWithoutPatientNestedInput
    access_controls?: access_controlsUpdateManyWithoutPatientNestedInput
    audit_logs?: audit_access_logsUpdateManyWithoutPatientNestedInput
  }

  export type patientsUncheckedUpdateInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    wallet_did?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUncheckedUpdateManyWithoutPatientNestedInput
    access_controls?: access_controlsUncheckedUpdateManyWithoutPatientNestedInput
    audit_logs?: audit_access_logsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type patientsCreateManyInput = {
    patient_id?: string
    wallet_did?: string | null
    full_name: string
    birth_date?: Date | string | null
    gender?: string | null
    blood_type?: string | null
    contact_phone?: string | null
    address?: string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type patientsUpdateManyMutationInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    wallet_did?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type patientsUncheckedUpdateManyInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    wallet_did?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type providersCreateInput = {
    provider_id?: string
    name: string
    address?: string | null
    contact_phone?: string | null
    type?: string | null
    license_number?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    doctors?: doctorsCreateNestedManyWithoutProviderInput
    visits?: visitsCreateNestedManyWithoutProviderInput
  }

  export type providersUncheckedCreateInput = {
    provider_id?: string
    name: string
    address?: string | null
    contact_phone?: string | null
    type?: string | null
    license_number?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    doctors?: doctorsUncheckedCreateNestedManyWithoutProviderInput
    visits?: visitsUncheckedCreateNestedManyWithoutProviderInput
  }

  export type providersUpdateInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: doctorsUpdateManyWithoutProviderNestedInput
    visits?: visitsUpdateManyWithoutProviderNestedInput
  }

  export type providersUncheckedUpdateInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: doctorsUncheckedUpdateManyWithoutProviderNestedInput
    visits?: visitsUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type providersCreateManyInput = {
    provider_id?: string
    name: string
    address?: string | null
    contact_phone?: string | null
    type?: string | null
    license_number?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type providersUpdateManyMutationInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type providersUncheckedUpdateManyInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doctorsCreateInput = {
    doctor_id?: string
    full_name: string
    specialty?: string | null
    license_no?: string | null
    contact?: string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    provider?: providersCreateNestedOneWithoutDoctorsInput
    visits?: visitsCreateNestedManyWithoutDoctorInput
    prescriptions?: prescriptionsCreateNestedManyWithoutDoctorInput
  }

  export type doctorsUncheckedCreateInput = {
    doctor_id?: string
    provider_id?: string | null
    full_name: string
    specialty?: string | null
    license_no?: string | null
    contact?: string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    visits?: visitsUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: prescriptionsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorsUpdateInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    license_no?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: providersUpdateOneWithoutDoctorsNestedInput
    visits?: visitsUpdateManyWithoutDoctorNestedInput
    prescriptions?: prescriptionsUpdateManyWithoutDoctorNestedInput
  }

  export type doctorsUncheckedUpdateInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    license_no?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: prescriptionsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type doctorsCreateManyInput = {
    doctor_id?: string
    provider_id?: string | null
    full_name: string
    specialty?: string | null
    license_no?: string | null
    contact?: string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type doctorsUpdateManyMutationInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    license_no?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doctorsUncheckedUpdateManyInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    license_no?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type visitsCreateInput = {
    visit_id?: string
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    patient?: patientsCreateNestedOneWithoutVisitsInput
    provider?: providersCreateNestedOneWithoutVisitsInput
    doctor?: doctorsCreateNestedOneWithoutVisitsInput
    diagnoses?: diagnosesCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsCreateNestedManyWithoutVisitInput
    labs?: labsCreateNestedManyWithoutVisitInput
    files?: filesCreateNestedManyWithoutVisitInput
  }

  export type visitsUncheckedCreateInput = {
    visit_id?: string
    patient_id?: string | null
    provider_id?: string | null
    doctor_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    diagnoses?: diagnosesUncheckedCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsUncheckedCreateNestedManyWithoutVisitInput
    labs?: labsUncheckedCreateNestedManyWithoutVisitInput
    files?: filesUncheckedCreateNestedManyWithoutVisitInput
  }

  export type visitsUpdateInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneWithoutVisitsNestedInput
    provider?: providersUpdateOneWithoutVisitsNestedInput
    doctor?: doctorsUpdateOneWithoutVisitsNestedInput
    diagnoses?: diagnosesUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUpdateManyWithoutVisitNestedInput
    labs?: labsUpdateManyWithoutVisitNestedInput
    files?: filesUpdateManyWithoutVisitNestedInput
  }

  export type visitsUncheckedUpdateInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: diagnosesUncheckedUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUncheckedUpdateManyWithoutVisitNestedInput
    labs?: labsUncheckedUpdateManyWithoutVisitNestedInput
    files?: filesUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type visitsCreateManyInput = {
    visit_id?: string
    patient_id?: string | null
    provider_id?: string | null
    doctor_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
  }

  export type visitsUpdateManyMutationInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type visitsUncheckedUpdateManyInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diagnosesCreateInput = {
    dx_id?: string
    code_icd10?: string | null
    description?: string | null
    severity?: string | null
    created_at?: Date | string
    visit?: visitsCreateNestedOneWithoutDiagnosesInput
  }

  export type diagnosesUncheckedCreateInput = {
    dx_id?: string
    visit_id?: string | null
    code_icd10?: string | null
    description?: string | null
    severity?: string | null
    created_at?: Date | string
  }

  export type diagnosesUpdateInput = {
    dx_id?: StringFieldUpdateOperationsInput | string
    code_icd10?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visit?: visitsUpdateOneWithoutDiagnosesNestedInput
  }

  export type diagnosesUncheckedUpdateInput = {
    dx_id?: StringFieldUpdateOperationsInput | string
    visit_id?: NullableStringFieldUpdateOperationsInput | string | null
    code_icd10?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diagnosesCreateManyInput = {
    dx_id?: string
    visit_id?: string | null
    code_icd10?: string | null
    description?: string | null
    severity?: string | null
    created_at?: Date | string
  }

  export type diagnosesUpdateManyMutationInput = {
    dx_id?: StringFieldUpdateOperationsInput | string
    code_icd10?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diagnosesUncheckedUpdateManyInput = {
    dx_id?: StringFieldUpdateOperationsInput | string
    visit_id?: NullableStringFieldUpdateOperationsInput | string | null
    code_icd10?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionsCreateInput = {
    presc_id?: string
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_hash?: string | null
    created_at?: Date | string
    visit?: visitsCreateNestedOneWithoutPrescriptionsInput
    doctor?: doctorsCreateNestedOneWithoutPrescriptionsInput
  }

  export type prescriptionsUncheckedCreateInput = {
    presc_id?: string
    visit_id?: string | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_issued_by?: string | null
    presc_hash?: string | null
    created_at?: Date | string
  }

  export type prescriptionsUpdateInput = {
    presc_id?: StringFieldUpdateOperationsInput | string
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visit?: visitsUpdateOneWithoutPrescriptionsNestedInput
    doctor?: doctorsUpdateOneWithoutPrescriptionsNestedInput
  }

  export type prescriptionsUncheckedUpdateInput = {
    presc_id?: StringFieldUpdateOperationsInput | string
    visit_id?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_issued_by?: NullableStringFieldUpdateOperationsInput | string | null
    presc_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionsCreateManyInput = {
    presc_id?: string
    visit_id?: string | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_issued_by?: string | null
    presc_hash?: string | null
    created_at?: Date | string
  }

  export type prescriptionsUpdateManyMutationInput = {
    presc_id?: StringFieldUpdateOperationsInput | string
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionsUncheckedUpdateManyInput = {
    presc_id?: StringFieldUpdateOperationsInput | string
    visit_id?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_issued_by?: NullableStringFieldUpdateOperationsInput | string | null
    presc_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type labsCreateInput = {
    lab_id?: string
    lab_type?: string | null
    results_enc?: string | null
    results_hash?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    visit?: visitsCreateNestedOneWithoutLabsInput
  }

  export type labsUncheckedCreateInput = {
    lab_id?: string
    visit_id?: string | null
    lab_type?: string | null
    results_enc?: string | null
    results_hash?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type labsUpdateInput = {
    lab_id?: StringFieldUpdateOperationsInput | string
    lab_type?: NullableStringFieldUpdateOperationsInput | string | null
    results_enc?: NullableStringFieldUpdateOperationsInput | string | null
    results_hash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visit?: visitsUpdateOneWithoutLabsNestedInput
  }

  export type labsUncheckedUpdateInput = {
    lab_id?: StringFieldUpdateOperationsInput | string
    visit_id?: NullableStringFieldUpdateOperationsInput | string | null
    lab_type?: NullableStringFieldUpdateOperationsInput | string | null
    results_enc?: NullableStringFieldUpdateOperationsInput | string | null
    results_hash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type labsCreateManyInput = {
    lab_id?: string
    visit_id?: string | null
    lab_type?: string | null
    results_enc?: string | null
    results_hash?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type labsUpdateManyMutationInput = {
    lab_id?: StringFieldUpdateOperationsInput | string
    lab_type?: NullableStringFieldUpdateOperationsInput | string | null
    results_enc?: NullableStringFieldUpdateOperationsInput | string | null
    results_hash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type labsUncheckedUpdateManyInput = {
    lab_id?: StringFieldUpdateOperationsInput | string
    visit_id?: NullableStringFieldUpdateOperationsInput | string | null
    lab_type?: NullableStringFieldUpdateOperationsInput | string | null
    results_enc?: NullableStringFieldUpdateOperationsInput | string | null
    results_hash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filesCreateInput = {
    file_id?: string
    owner_id: string
    file_type?: string | null
    storage_path?: string | null
    file_hash?: string | null
    created_at?: Date | string
    visit?: visitsCreateNestedOneWithoutFilesInput
  }

  export type filesUncheckedCreateInput = {
    file_id?: string
    owner_id: string
    visit_id?: string | null
    file_type?: string | null
    storage_path?: string | null
    file_hash?: string | null
    created_at?: Date | string
  }

  export type filesUpdateInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    file_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visit?: visitsUpdateOneWithoutFilesNestedInput
  }

  export type filesUncheckedUpdateInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    visit_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    file_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filesCreateManyInput = {
    file_id?: string
    owner_id: string
    visit_id?: string | null
    file_type?: string | null
    storage_path?: string | null
    file_hash?: string | null
    created_at?: Date | string
  }

  export type filesUpdateManyMutationInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    file_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filesUncheckedUpdateManyInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    visit_id?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    file_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type access_controlsCreateInput = {
    ac_id?: string
    granted_to: string
    granted_by?: string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: Date | string | null
    valid_to?: Date | string | null
    on_chain_tx?: string | null
    created_at?: Date | string
    patient?: patientsCreateNestedOneWithoutAccess_controlsInput
  }

  export type access_controlsUncheckedCreateInput = {
    ac_id?: string
    patient_id?: string | null
    granted_to: string
    granted_by?: string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: Date | string | null
    valid_to?: Date | string | null
    on_chain_tx?: string | null
    created_at?: Date | string
  }

  export type access_controlsUpdateInput = {
    ac_id?: StringFieldUpdateOperationsInput | string
    granted_to?: StringFieldUpdateOperationsInput | string
    granted_by?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    on_chain_tx?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneWithoutAccess_controlsNestedInput
  }

  export type access_controlsUncheckedUpdateInput = {
    ac_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    granted_to?: StringFieldUpdateOperationsInput | string
    granted_by?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    on_chain_tx?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type access_controlsCreateManyInput = {
    ac_id?: string
    patient_id?: string | null
    granted_to: string
    granted_by?: string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: Date | string | null
    valid_to?: Date | string | null
    on_chain_tx?: string | null
    created_at?: Date | string
  }

  export type access_controlsUpdateManyMutationInput = {
    ac_id?: StringFieldUpdateOperationsInput | string
    granted_to?: StringFieldUpdateOperationsInput | string
    granted_by?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    on_chain_tx?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type access_controlsUncheckedUpdateManyInput = {
    ac_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    granted_to?: StringFieldUpdateOperationsInput | string
    granted_by?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    on_chain_tx?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_access_logsCreateInput = {
    log_id?: string
    accessed_by: string
    resource_type?: string | null
    resource_id?: string | null
    access_timestamp?: Date | string
    on_chain_anchor?: string | null
    created_at?: Date | string
    patient?: patientsCreateNestedOneWithoutAudit_logsInput
  }

  export type audit_access_logsUncheckedCreateInput = {
    log_id?: string
    patient_id?: string | null
    accessed_by: string
    resource_type?: string | null
    resource_id?: string | null
    access_timestamp?: Date | string
    on_chain_anchor?: string | null
    created_at?: Date | string
  }

  export type audit_access_logsUpdateInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    accessed_by?: StringFieldUpdateOperationsInput | string
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    on_chain_anchor?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneWithoutAudit_logsNestedInput
  }

  export type audit_access_logsUncheckedUpdateInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    accessed_by?: StringFieldUpdateOperationsInput | string
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    on_chain_anchor?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_access_logsCreateManyInput = {
    log_id?: string
    patient_id?: string | null
    accessed_by: string
    resource_type?: string | null
    resource_id?: string | null
    access_timestamp?: Date | string
    on_chain_anchor?: string | null
    created_at?: Date | string
  }

  export type audit_access_logsUpdateManyMutationInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    accessed_by?: StringFieldUpdateOperationsInput | string
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    on_chain_anchor?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_access_logsUncheckedUpdateManyInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    accessed_by?: StringFieldUpdateOperationsInput | string
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    on_chain_anchor?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type VisitsListRelationFilter = {
    every?: visitsWhereInput
    some?: visitsWhereInput
    none?: visitsWhereInput
  }

  export type Access_controlsListRelationFilter = {
    every?: access_controlsWhereInput
    some?: access_controlsWhereInput
    none?: access_controlsWhereInput
  }

  export type Audit_access_logsListRelationFilter = {
    every?: audit_access_logsWhereInput
    some?: audit_access_logsWhereInput
    none?: audit_access_logsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type visitsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type access_controlsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type audit_access_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type patientsCountOrderByAggregateInput = {
    patient_id?: SortOrder
    wallet_did?: SortOrder
    full_name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    blood_type?: SortOrder
    contact_phone?: SortOrder
    address?: SortOrder
    emergency_contact?: SortOrder
    insurance?: SortOrder
    allergies?: SortOrder
    chronic_conditions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type patientsMaxOrderByAggregateInput = {
    patient_id?: SortOrder
    wallet_did?: SortOrder
    full_name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    blood_type?: SortOrder
    contact_phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type patientsMinOrderByAggregateInput = {
    patient_id?: SortOrder
    wallet_did?: SortOrder
    full_name?: SortOrder
    birth_date?: SortOrder
    gender?: SortOrder
    blood_type?: SortOrder
    contact_phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type DoctorsListRelationFilter = {
    every?: doctorsWhereInput
    some?: doctorsWhereInput
    none?: doctorsWhereInput
  }

  export type doctorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type providersCountOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact_phone?: SortOrder
    type?: SortOrder
    license_number?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type providersMaxOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact_phone?: SortOrder
    type?: SortOrder
    license_number?: SortOrder
    created_at?: SortOrder
  }

  export type providersMinOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    contact_phone?: SortOrder
    type?: SortOrder
    license_number?: SortOrder
    created_at?: SortOrder
  }

  export type ProvidersNullableScalarRelationFilter = {
    is?: providersWhereInput | null
    isNot?: providersWhereInput | null
  }

  export type PrescriptionsListRelationFilter = {
    every?: prescriptionsWhereInput
    some?: prescriptionsWhereInput
    none?: prescriptionsWhereInput
  }

  export type prescriptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type doctorsCountOrderByAggregateInput = {
    doctor_id?: SortOrder
    provider_id?: SortOrder
    full_name?: SortOrder
    specialty?: SortOrder
    license_no?: SortOrder
    contact?: SortOrder
    profile_meta?: SortOrder
    created_at?: SortOrder
  }

  export type doctorsMaxOrderByAggregateInput = {
    doctor_id?: SortOrder
    provider_id?: SortOrder
    full_name?: SortOrder
    specialty?: SortOrder
    license_no?: SortOrder
    contact?: SortOrder
    created_at?: SortOrder
  }

  export type doctorsMinOrderByAggregateInput = {
    doctor_id?: SortOrder
    provider_id?: SortOrder
    full_name?: SortOrder
    specialty?: SortOrder
    license_no?: SortOrder
    contact?: SortOrder
    created_at?: SortOrder
  }

  export type PatientsNullableScalarRelationFilter = {
    is?: patientsWhereInput | null
    isNot?: patientsWhereInput | null
  }

  export type DoctorsNullableScalarRelationFilter = {
    is?: doctorsWhereInput | null
    isNot?: doctorsWhereInput | null
  }

  export type DiagnosesListRelationFilter = {
    every?: diagnosesWhereInput
    some?: diagnosesWhereInput
    none?: diagnosesWhereInput
  }

  export type LabsListRelationFilter = {
    every?: labsWhereInput
    some?: labsWhereInput
    none?: labsWhereInput
  }

  export type FilesListRelationFilter = {
    every?: filesWhereInput
    some?: filesWhereInput
    none?: filesWhereInput
  }

  export type diagnosesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type labsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type visitsCountOrderByAggregateInput = {
    visit_id?: SortOrder
    patient_id?: SortOrder
    provider_id?: SortOrder
    doctor_id?: SortOrder
    visit_timestamp?: SortOrder
    visit_type?: SortOrder
    chief_complaint?: SortOrder
    clinical_notes_hash?: SortOrder
    clinical_notes_enc?: SortOrder
    billing_id?: SortOrder
    created_at?: SortOrder
  }

  export type visitsMaxOrderByAggregateInput = {
    visit_id?: SortOrder
    patient_id?: SortOrder
    provider_id?: SortOrder
    doctor_id?: SortOrder
    visit_timestamp?: SortOrder
    visit_type?: SortOrder
    chief_complaint?: SortOrder
    clinical_notes_hash?: SortOrder
    clinical_notes_enc?: SortOrder
    billing_id?: SortOrder
    created_at?: SortOrder
  }

  export type visitsMinOrderByAggregateInput = {
    visit_id?: SortOrder
    patient_id?: SortOrder
    provider_id?: SortOrder
    doctor_id?: SortOrder
    visit_timestamp?: SortOrder
    visit_type?: SortOrder
    chief_complaint?: SortOrder
    clinical_notes_hash?: SortOrder
    clinical_notes_enc?: SortOrder
    billing_id?: SortOrder
    created_at?: SortOrder
  }

  export type VisitsNullableScalarRelationFilter = {
    is?: visitsWhereInput | null
    isNot?: visitsWhereInput | null
  }

  export type diagnosesCountOrderByAggregateInput = {
    dx_id?: SortOrder
    visit_id?: SortOrder
    code_icd10?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    created_at?: SortOrder
  }

  export type diagnosesMaxOrderByAggregateInput = {
    dx_id?: SortOrder
    visit_id?: SortOrder
    code_icd10?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    created_at?: SortOrder
  }

  export type diagnosesMinOrderByAggregateInput = {
    dx_id?: SortOrder
    visit_id?: SortOrder
    code_icd10?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    created_at?: SortOrder
  }

  export type prescriptionsCountOrderByAggregateInput = {
    presc_id?: SortOrder
    visit_id?: SortOrder
    medications?: SortOrder
    presc_issued_by?: SortOrder
    presc_hash?: SortOrder
    created_at?: SortOrder
  }

  export type prescriptionsMaxOrderByAggregateInput = {
    presc_id?: SortOrder
    visit_id?: SortOrder
    presc_issued_by?: SortOrder
    presc_hash?: SortOrder
    created_at?: SortOrder
  }

  export type prescriptionsMinOrderByAggregateInput = {
    presc_id?: SortOrder
    visit_id?: SortOrder
    presc_issued_by?: SortOrder
    presc_hash?: SortOrder
    created_at?: SortOrder
  }

  export type labsCountOrderByAggregateInput = {
    lab_id?: SortOrder
    visit_id?: SortOrder
    lab_type?: SortOrder
    results_enc?: SortOrder
    results_hash?: SortOrder
    attachments?: SortOrder
    created_at?: SortOrder
  }

  export type labsMaxOrderByAggregateInput = {
    lab_id?: SortOrder
    visit_id?: SortOrder
    lab_type?: SortOrder
    results_enc?: SortOrder
    results_hash?: SortOrder
    created_at?: SortOrder
  }

  export type labsMinOrderByAggregateInput = {
    lab_id?: SortOrder
    visit_id?: SortOrder
    lab_type?: SortOrder
    results_enc?: SortOrder
    results_hash?: SortOrder
    created_at?: SortOrder
  }

  export type filesCountOrderByAggregateInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
    visit_id?: SortOrder
    file_type?: SortOrder
    storage_path?: SortOrder
    file_hash?: SortOrder
    created_at?: SortOrder
  }

  export type filesMaxOrderByAggregateInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
    visit_id?: SortOrder
    file_type?: SortOrder
    storage_path?: SortOrder
    file_hash?: SortOrder
    created_at?: SortOrder
  }

  export type filesMinOrderByAggregateInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
    visit_id?: SortOrder
    file_type?: SortOrder
    storage_path?: SortOrder
    file_hash?: SortOrder
    created_at?: SortOrder
  }

  export type access_controlsCountOrderByAggregateInput = {
    ac_id?: SortOrder
    patient_id?: SortOrder
    granted_to?: SortOrder
    granted_by?: SortOrder
    scope?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    on_chain_tx?: SortOrder
    created_at?: SortOrder
  }

  export type access_controlsMaxOrderByAggregateInput = {
    ac_id?: SortOrder
    patient_id?: SortOrder
    granted_to?: SortOrder
    granted_by?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    on_chain_tx?: SortOrder
    created_at?: SortOrder
  }

  export type access_controlsMinOrderByAggregateInput = {
    ac_id?: SortOrder
    patient_id?: SortOrder
    granted_to?: SortOrder
    granted_by?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    on_chain_tx?: SortOrder
    created_at?: SortOrder
  }

  export type audit_access_logsCountOrderByAggregateInput = {
    log_id?: SortOrder
    patient_id?: SortOrder
    accessed_by?: SortOrder
    resource_type?: SortOrder
    resource_id?: SortOrder
    access_timestamp?: SortOrder
    on_chain_anchor?: SortOrder
    created_at?: SortOrder
  }

  export type audit_access_logsMaxOrderByAggregateInput = {
    log_id?: SortOrder
    patient_id?: SortOrder
    accessed_by?: SortOrder
    resource_type?: SortOrder
    resource_id?: SortOrder
    access_timestamp?: SortOrder
    on_chain_anchor?: SortOrder
    created_at?: SortOrder
  }

  export type audit_access_logsMinOrderByAggregateInput = {
    log_id?: SortOrder
    patient_id?: SortOrder
    accessed_by?: SortOrder
    resource_type?: SortOrder
    resource_id?: SortOrder
    access_timestamp?: SortOrder
    on_chain_anchor?: SortOrder
    created_at?: SortOrder
  }

  export type visitsCreateNestedManyWithoutPatientInput = {
    create?: XOR<visitsCreateWithoutPatientInput, visitsUncheckedCreateWithoutPatientInput> | visitsCreateWithoutPatientInput[] | visitsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutPatientInput | visitsCreateOrConnectWithoutPatientInput[]
    createMany?: visitsCreateManyPatientInputEnvelope
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
  }

  export type access_controlsCreateNestedManyWithoutPatientInput = {
    create?: XOR<access_controlsCreateWithoutPatientInput, access_controlsUncheckedCreateWithoutPatientInput> | access_controlsCreateWithoutPatientInput[] | access_controlsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: access_controlsCreateOrConnectWithoutPatientInput | access_controlsCreateOrConnectWithoutPatientInput[]
    createMany?: access_controlsCreateManyPatientInputEnvelope
    connect?: access_controlsWhereUniqueInput | access_controlsWhereUniqueInput[]
  }

  export type audit_access_logsCreateNestedManyWithoutPatientInput = {
    create?: XOR<audit_access_logsCreateWithoutPatientInput, audit_access_logsUncheckedCreateWithoutPatientInput> | audit_access_logsCreateWithoutPatientInput[] | audit_access_logsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: audit_access_logsCreateOrConnectWithoutPatientInput | audit_access_logsCreateOrConnectWithoutPatientInput[]
    createMany?: audit_access_logsCreateManyPatientInputEnvelope
    connect?: audit_access_logsWhereUniqueInput | audit_access_logsWhereUniqueInput[]
  }

  export type visitsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<visitsCreateWithoutPatientInput, visitsUncheckedCreateWithoutPatientInput> | visitsCreateWithoutPatientInput[] | visitsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutPatientInput | visitsCreateOrConnectWithoutPatientInput[]
    createMany?: visitsCreateManyPatientInputEnvelope
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
  }

  export type access_controlsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<access_controlsCreateWithoutPatientInput, access_controlsUncheckedCreateWithoutPatientInput> | access_controlsCreateWithoutPatientInput[] | access_controlsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: access_controlsCreateOrConnectWithoutPatientInput | access_controlsCreateOrConnectWithoutPatientInput[]
    createMany?: access_controlsCreateManyPatientInputEnvelope
    connect?: access_controlsWhereUniqueInput | access_controlsWhereUniqueInput[]
  }

  export type audit_access_logsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<audit_access_logsCreateWithoutPatientInput, audit_access_logsUncheckedCreateWithoutPatientInput> | audit_access_logsCreateWithoutPatientInput[] | audit_access_logsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: audit_access_logsCreateOrConnectWithoutPatientInput | audit_access_logsCreateOrConnectWithoutPatientInput[]
    createMany?: audit_access_logsCreateManyPatientInputEnvelope
    connect?: audit_access_logsWhereUniqueInput | audit_access_logsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type visitsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<visitsCreateWithoutPatientInput, visitsUncheckedCreateWithoutPatientInput> | visitsCreateWithoutPatientInput[] | visitsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutPatientInput | visitsCreateOrConnectWithoutPatientInput[]
    upsert?: visitsUpsertWithWhereUniqueWithoutPatientInput | visitsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: visitsCreateManyPatientInputEnvelope
    set?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    disconnect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    delete?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    update?: visitsUpdateWithWhereUniqueWithoutPatientInput | visitsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: visitsUpdateManyWithWhereWithoutPatientInput | visitsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: visitsScalarWhereInput | visitsScalarWhereInput[]
  }

  export type access_controlsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<access_controlsCreateWithoutPatientInput, access_controlsUncheckedCreateWithoutPatientInput> | access_controlsCreateWithoutPatientInput[] | access_controlsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: access_controlsCreateOrConnectWithoutPatientInput | access_controlsCreateOrConnectWithoutPatientInput[]
    upsert?: access_controlsUpsertWithWhereUniqueWithoutPatientInput | access_controlsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: access_controlsCreateManyPatientInputEnvelope
    set?: access_controlsWhereUniqueInput | access_controlsWhereUniqueInput[]
    disconnect?: access_controlsWhereUniqueInput | access_controlsWhereUniqueInput[]
    delete?: access_controlsWhereUniqueInput | access_controlsWhereUniqueInput[]
    connect?: access_controlsWhereUniqueInput | access_controlsWhereUniqueInput[]
    update?: access_controlsUpdateWithWhereUniqueWithoutPatientInput | access_controlsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: access_controlsUpdateManyWithWhereWithoutPatientInput | access_controlsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: access_controlsScalarWhereInput | access_controlsScalarWhereInput[]
  }

  export type audit_access_logsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<audit_access_logsCreateWithoutPatientInput, audit_access_logsUncheckedCreateWithoutPatientInput> | audit_access_logsCreateWithoutPatientInput[] | audit_access_logsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: audit_access_logsCreateOrConnectWithoutPatientInput | audit_access_logsCreateOrConnectWithoutPatientInput[]
    upsert?: audit_access_logsUpsertWithWhereUniqueWithoutPatientInput | audit_access_logsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: audit_access_logsCreateManyPatientInputEnvelope
    set?: audit_access_logsWhereUniqueInput | audit_access_logsWhereUniqueInput[]
    disconnect?: audit_access_logsWhereUniqueInput | audit_access_logsWhereUniqueInput[]
    delete?: audit_access_logsWhereUniqueInput | audit_access_logsWhereUniqueInput[]
    connect?: audit_access_logsWhereUniqueInput | audit_access_logsWhereUniqueInput[]
    update?: audit_access_logsUpdateWithWhereUniqueWithoutPatientInput | audit_access_logsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: audit_access_logsUpdateManyWithWhereWithoutPatientInput | audit_access_logsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: audit_access_logsScalarWhereInput | audit_access_logsScalarWhereInput[]
  }

  export type visitsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<visitsCreateWithoutPatientInput, visitsUncheckedCreateWithoutPatientInput> | visitsCreateWithoutPatientInput[] | visitsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutPatientInput | visitsCreateOrConnectWithoutPatientInput[]
    upsert?: visitsUpsertWithWhereUniqueWithoutPatientInput | visitsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: visitsCreateManyPatientInputEnvelope
    set?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    disconnect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    delete?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    update?: visitsUpdateWithWhereUniqueWithoutPatientInput | visitsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: visitsUpdateManyWithWhereWithoutPatientInput | visitsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: visitsScalarWhereInput | visitsScalarWhereInput[]
  }

  export type access_controlsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<access_controlsCreateWithoutPatientInput, access_controlsUncheckedCreateWithoutPatientInput> | access_controlsCreateWithoutPatientInput[] | access_controlsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: access_controlsCreateOrConnectWithoutPatientInput | access_controlsCreateOrConnectWithoutPatientInput[]
    upsert?: access_controlsUpsertWithWhereUniqueWithoutPatientInput | access_controlsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: access_controlsCreateManyPatientInputEnvelope
    set?: access_controlsWhereUniqueInput | access_controlsWhereUniqueInput[]
    disconnect?: access_controlsWhereUniqueInput | access_controlsWhereUniqueInput[]
    delete?: access_controlsWhereUniqueInput | access_controlsWhereUniqueInput[]
    connect?: access_controlsWhereUniqueInput | access_controlsWhereUniqueInput[]
    update?: access_controlsUpdateWithWhereUniqueWithoutPatientInput | access_controlsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: access_controlsUpdateManyWithWhereWithoutPatientInput | access_controlsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: access_controlsScalarWhereInput | access_controlsScalarWhereInput[]
  }

  export type audit_access_logsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<audit_access_logsCreateWithoutPatientInput, audit_access_logsUncheckedCreateWithoutPatientInput> | audit_access_logsCreateWithoutPatientInput[] | audit_access_logsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: audit_access_logsCreateOrConnectWithoutPatientInput | audit_access_logsCreateOrConnectWithoutPatientInput[]
    upsert?: audit_access_logsUpsertWithWhereUniqueWithoutPatientInput | audit_access_logsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: audit_access_logsCreateManyPatientInputEnvelope
    set?: audit_access_logsWhereUniqueInput | audit_access_logsWhereUniqueInput[]
    disconnect?: audit_access_logsWhereUniqueInput | audit_access_logsWhereUniqueInput[]
    delete?: audit_access_logsWhereUniqueInput | audit_access_logsWhereUniqueInput[]
    connect?: audit_access_logsWhereUniqueInput | audit_access_logsWhereUniqueInput[]
    update?: audit_access_logsUpdateWithWhereUniqueWithoutPatientInput | audit_access_logsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: audit_access_logsUpdateManyWithWhereWithoutPatientInput | audit_access_logsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: audit_access_logsScalarWhereInput | audit_access_logsScalarWhereInput[]
  }

  export type doctorsCreateNestedManyWithoutProviderInput = {
    create?: XOR<doctorsCreateWithoutProviderInput, doctorsUncheckedCreateWithoutProviderInput> | doctorsCreateWithoutProviderInput[] | doctorsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: doctorsCreateOrConnectWithoutProviderInput | doctorsCreateOrConnectWithoutProviderInput[]
    createMany?: doctorsCreateManyProviderInputEnvelope
    connect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
  }

  export type visitsCreateNestedManyWithoutProviderInput = {
    create?: XOR<visitsCreateWithoutProviderInput, visitsUncheckedCreateWithoutProviderInput> | visitsCreateWithoutProviderInput[] | visitsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutProviderInput | visitsCreateOrConnectWithoutProviderInput[]
    createMany?: visitsCreateManyProviderInputEnvelope
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
  }

  export type doctorsUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<doctorsCreateWithoutProviderInput, doctorsUncheckedCreateWithoutProviderInput> | doctorsCreateWithoutProviderInput[] | doctorsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: doctorsCreateOrConnectWithoutProviderInput | doctorsCreateOrConnectWithoutProviderInput[]
    createMany?: doctorsCreateManyProviderInputEnvelope
    connect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
  }

  export type visitsUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<visitsCreateWithoutProviderInput, visitsUncheckedCreateWithoutProviderInput> | visitsCreateWithoutProviderInput[] | visitsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutProviderInput | visitsCreateOrConnectWithoutProviderInput[]
    createMany?: visitsCreateManyProviderInputEnvelope
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
  }

  export type doctorsUpdateManyWithoutProviderNestedInput = {
    create?: XOR<doctorsCreateWithoutProviderInput, doctorsUncheckedCreateWithoutProviderInput> | doctorsCreateWithoutProviderInput[] | doctorsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: doctorsCreateOrConnectWithoutProviderInput | doctorsCreateOrConnectWithoutProviderInput[]
    upsert?: doctorsUpsertWithWhereUniqueWithoutProviderInput | doctorsUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: doctorsCreateManyProviderInputEnvelope
    set?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    disconnect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    delete?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    connect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    update?: doctorsUpdateWithWhereUniqueWithoutProviderInput | doctorsUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: doctorsUpdateManyWithWhereWithoutProviderInput | doctorsUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: doctorsScalarWhereInput | doctorsScalarWhereInput[]
  }

  export type visitsUpdateManyWithoutProviderNestedInput = {
    create?: XOR<visitsCreateWithoutProviderInput, visitsUncheckedCreateWithoutProviderInput> | visitsCreateWithoutProviderInput[] | visitsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutProviderInput | visitsCreateOrConnectWithoutProviderInput[]
    upsert?: visitsUpsertWithWhereUniqueWithoutProviderInput | visitsUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: visitsCreateManyProviderInputEnvelope
    set?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    disconnect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    delete?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    update?: visitsUpdateWithWhereUniqueWithoutProviderInput | visitsUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: visitsUpdateManyWithWhereWithoutProviderInput | visitsUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: visitsScalarWhereInput | visitsScalarWhereInput[]
  }

  export type doctorsUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<doctorsCreateWithoutProviderInput, doctorsUncheckedCreateWithoutProviderInput> | doctorsCreateWithoutProviderInput[] | doctorsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: doctorsCreateOrConnectWithoutProviderInput | doctorsCreateOrConnectWithoutProviderInput[]
    upsert?: doctorsUpsertWithWhereUniqueWithoutProviderInput | doctorsUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: doctorsCreateManyProviderInputEnvelope
    set?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    disconnect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    delete?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    connect?: doctorsWhereUniqueInput | doctorsWhereUniqueInput[]
    update?: doctorsUpdateWithWhereUniqueWithoutProviderInput | doctorsUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: doctorsUpdateManyWithWhereWithoutProviderInput | doctorsUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: doctorsScalarWhereInput | doctorsScalarWhereInput[]
  }

  export type visitsUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<visitsCreateWithoutProviderInput, visitsUncheckedCreateWithoutProviderInput> | visitsCreateWithoutProviderInput[] | visitsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutProviderInput | visitsCreateOrConnectWithoutProviderInput[]
    upsert?: visitsUpsertWithWhereUniqueWithoutProviderInput | visitsUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: visitsCreateManyProviderInputEnvelope
    set?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    disconnect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    delete?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    update?: visitsUpdateWithWhereUniqueWithoutProviderInput | visitsUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: visitsUpdateManyWithWhereWithoutProviderInput | visitsUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: visitsScalarWhereInput | visitsScalarWhereInput[]
  }

  export type providersCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<providersCreateWithoutDoctorsInput, providersUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: providersCreateOrConnectWithoutDoctorsInput
    connect?: providersWhereUniqueInput
  }

  export type visitsCreateNestedManyWithoutDoctorInput = {
    create?: XOR<visitsCreateWithoutDoctorInput, visitsUncheckedCreateWithoutDoctorInput> | visitsCreateWithoutDoctorInput[] | visitsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutDoctorInput | visitsCreateOrConnectWithoutDoctorInput[]
    createMany?: visitsCreateManyDoctorInputEnvelope
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
  }

  export type prescriptionsCreateNestedManyWithoutDoctorInput = {
    create?: XOR<prescriptionsCreateWithoutDoctorInput, prescriptionsUncheckedCreateWithoutDoctorInput> | prescriptionsCreateWithoutDoctorInput[] | prescriptionsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: prescriptionsCreateOrConnectWithoutDoctorInput | prescriptionsCreateOrConnectWithoutDoctorInput[]
    createMany?: prescriptionsCreateManyDoctorInputEnvelope
    connect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
  }

  export type visitsUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<visitsCreateWithoutDoctorInput, visitsUncheckedCreateWithoutDoctorInput> | visitsCreateWithoutDoctorInput[] | visitsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutDoctorInput | visitsCreateOrConnectWithoutDoctorInput[]
    createMany?: visitsCreateManyDoctorInputEnvelope
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
  }

  export type prescriptionsUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<prescriptionsCreateWithoutDoctorInput, prescriptionsUncheckedCreateWithoutDoctorInput> | prescriptionsCreateWithoutDoctorInput[] | prescriptionsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: prescriptionsCreateOrConnectWithoutDoctorInput | prescriptionsCreateOrConnectWithoutDoctorInput[]
    createMany?: prescriptionsCreateManyDoctorInputEnvelope
    connect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
  }

  export type providersUpdateOneWithoutDoctorsNestedInput = {
    create?: XOR<providersCreateWithoutDoctorsInput, providersUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: providersCreateOrConnectWithoutDoctorsInput
    upsert?: providersUpsertWithoutDoctorsInput
    disconnect?: providersWhereInput | boolean
    delete?: providersWhereInput | boolean
    connect?: providersWhereUniqueInput
    update?: XOR<XOR<providersUpdateToOneWithWhereWithoutDoctorsInput, providersUpdateWithoutDoctorsInput>, providersUncheckedUpdateWithoutDoctorsInput>
  }

  export type visitsUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<visitsCreateWithoutDoctorInput, visitsUncheckedCreateWithoutDoctorInput> | visitsCreateWithoutDoctorInput[] | visitsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutDoctorInput | visitsCreateOrConnectWithoutDoctorInput[]
    upsert?: visitsUpsertWithWhereUniqueWithoutDoctorInput | visitsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: visitsCreateManyDoctorInputEnvelope
    set?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    disconnect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    delete?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    update?: visitsUpdateWithWhereUniqueWithoutDoctorInput | visitsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: visitsUpdateManyWithWhereWithoutDoctorInput | visitsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: visitsScalarWhereInput | visitsScalarWhereInput[]
  }

  export type prescriptionsUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<prescriptionsCreateWithoutDoctorInput, prescriptionsUncheckedCreateWithoutDoctorInput> | prescriptionsCreateWithoutDoctorInput[] | prescriptionsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: prescriptionsCreateOrConnectWithoutDoctorInput | prescriptionsCreateOrConnectWithoutDoctorInput[]
    upsert?: prescriptionsUpsertWithWhereUniqueWithoutDoctorInput | prescriptionsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: prescriptionsCreateManyDoctorInputEnvelope
    set?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    disconnect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    delete?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    connect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    update?: prescriptionsUpdateWithWhereUniqueWithoutDoctorInput | prescriptionsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: prescriptionsUpdateManyWithWhereWithoutDoctorInput | prescriptionsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: prescriptionsScalarWhereInput | prescriptionsScalarWhereInput[]
  }

  export type visitsUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<visitsCreateWithoutDoctorInput, visitsUncheckedCreateWithoutDoctorInput> | visitsCreateWithoutDoctorInput[] | visitsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: visitsCreateOrConnectWithoutDoctorInput | visitsCreateOrConnectWithoutDoctorInput[]
    upsert?: visitsUpsertWithWhereUniqueWithoutDoctorInput | visitsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: visitsCreateManyDoctorInputEnvelope
    set?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    disconnect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    delete?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    connect?: visitsWhereUniqueInput | visitsWhereUniqueInput[]
    update?: visitsUpdateWithWhereUniqueWithoutDoctorInput | visitsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: visitsUpdateManyWithWhereWithoutDoctorInput | visitsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: visitsScalarWhereInput | visitsScalarWhereInput[]
  }

  export type prescriptionsUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<prescriptionsCreateWithoutDoctorInput, prescriptionsUncheckedCreateWithoutDoctorInput> | prescriptionsCreateWithoutDoctorInput[] | prescriptionsUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: prescriptionsCreateOrConnectWithoutDoctorInput | prescriptionsCreateOrConnectWithoutDoctorInput[]
    upsert?: prescriptionsUpsertWithWhereUniqueWithoutDoctorInput | prescriptionsUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: prescriptionsCreateManyDoctorInputEnvelope
    set?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    disconnect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    delete?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    connect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    update?: prescriptionsUpdateWithWhereUniqueWithoutDoctorInput | prescriptionsUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: prescriptionsUpdateManyWithWhereWithoutDoctorInput | prescriptionsUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: prescriptionsScalarWhereInput | prescriptionsScalarWhereInput[]
  }

  export type patientsCreateNestedOneWithoutVisitsInput = {
    create?: XOR<patientsCreateWithoutVisitsInput, patientsUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: patientsCreateOrConnectWithoutVisitsInput
    connect?: patientsWhereUniqueInput
  }

  export type providersCreateNestedOneWithoutVisitsInput = {
    create?: XOR<providersCreateWithoutVisitsInput, providersUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: providersCreateOrConnectWithoutVisitsInput
    connect?: providersWhereUniqueInput
  }

  export type doctorsCreateNestedOneWithoutVisitsInput = {
    create?: XOR<doctorsCreateWithoutVisitsInput, doctorsUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: doctorsCreateOrConnectWithoutVisitsInput
    connect?: doctorsWhereUniqueInput
  }

  export type diagnosesCreateNestedManyWithoutVisitInput = {
    create?: XOR<diagnosesCreateWithoutVisitInput, diagnosesUncheckedCreateWithoutVisitInput> | diagnosesCreateWithoutVisitInput[] | diagnosesUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: diagnosesCreateOrConnectWithoutVisitInput | diagnosesCreateOrConnectWithoutVisitInput[]
    createMany?: diagnosesCreateManyVisitInputEnvelope
    connect?: diagnosesWhereUniqueInput | diagnosesWhereUniqueInput[]
  }

  export type prescriptionsCreateNestedManyWithoutVisitInput = {
    create?: XOR<prescriptionsCreateWithoutVisitInput, prescriptionsUncheckedCreateWithoutVisitInput> | prescriptionsCreateWithoutVisitInput[] | prescriptionsUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: prescriptionsCreateOrConnectWithoutVisitInput | prescriptionsCreateOrConnectWithoutVisitInput[]
    createMany?: prescriptionsCreateManyVisitInputEnvelope
    connect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
  }

  export type labsCreateNestedManyWithoutVisitInput = {
    create?: XOR<labsCreateWithoutVisitInput, labsUncheckedCreateWithoutVisitInput> | labsCreateWithoutVisitInput[] | labsUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: labsCreateOrConnectWithoutVisitInput | labsCreateOrConnectWithoutVisitInput[]
    createMany?: labsCreateManyVisitInputEnvelope
    connect?: labsWhereUniqueInput | labsWhereUniqueInput[]
  }

  export type filesCreateNestedManyWithoutVisitInput = {
    create?: XOR<filesCreateWithoutVisitInput, filesUncheckedCreateWithoutVisitInput> | filesCreateWithoutVisitInput[] | filesUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: filesCreateOrConnectWithoutVisitInput | filesCreateOrConnectWithoutVisitInput[]
    createMany?: filesCreateManyVisitInputEnvelope
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
  }

  export type diagnosesUncheckedCreateNestedManyWithoutVisitInput = {
    create?: XOR<diagnosesCreateWithoutVisitInput, diagnosesUncheckedCreateWithoutVisitInput> | diagnosesCreateWithoutVisitInput[] | diagnosesUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: diagnosesCreateOrConnectWithoutVisitInput | diagnosesCreateOrConnectWithoutVisitInput[]
    createMany?: diagnosesCreateManyVisitInputEnvelope
    connect?: diagnosesWhereUniqueInput | diagnosesWhereUniqueInput[]
  }

  export type prescriptionsUncheckedCreateNestedManyWithoutVisitInput = {
    create?: XOR<prescriptionsCreateWithoutVisitInput, prescriptionsUncheckedCreateWithoutVisitInput> | prescriptionsCreateWithoutVisitInput[] | prescriptionsUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: prescriptionsCreateOrConnectWithoutVisitInput | prescriptionsCreateOrConnectWithoutVisitInput[]
    createMany?: prescriptionsCreateManyVisitInputEnvelope
    connect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
  }

  export type labsUncheckedCreateNestedManyWithoutVisitInput = {
    create?: XOR<labsCreateWithoutVisitInput, labsUncheckedCreateWithoutVisitInput> | labsCreateWithoutVisitInput[] | labsUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: labsCreateOrConnectWithoutVisitInput | labsCreateOrConnectWithoutVisitInput[]
    createMany?: labsCreateManyVisitInputEnvelope
    connect?: labsWhereUniqueInput | labsWhereUniqueInput[]
  }

  export type filesUncheckedCreateNestedManyWithoutVisitInput = {
    create?: XOR<filesCreateWithoutVisitInput, filesUncheckedCreateWithoutVisitInput> | filesCreateWithoutVisitInput[] | filesUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: filesCreateOrConnectWithoutVisitInput | filesCreateOrConnectWithoutVisitInput[]
    createMany?: filesCreateManyVisitInputEnvelope
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
  }

  export type patientsUpdateOneWithoutVisitsNestedInput = {
    create?: XOR<patientsCreateWithoutVisitsInput, patientsUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: patientsCreateOrConnectWithoutVisitsInput
    upsert?: patientsUpsertWithoutVisitsInput
    disconnect?: patientsWhereInput | boolean
    delete?: patientsWhereInput | boolean
    connect?: patientsWhereUniqueInput
    update?: XOR<XOR<patientsUpdateToOneWithWhereWithoutVisitsInput, patientsUpdateWithoutVisitsInput>, patientsUncheckedUpdateWithoutVisitsInput>
  }

  export type providersUpdateOneWithoutVisitsNestedInput = {
    create?: XOR<providersCreateWithoutVisitsInput, providersUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: providersCreateOrConnectWithoutVisitsInput
    upsert?: providersUpsertWithoutVisitsInput
    disconnect?: providersWhereInput | boolean
    delete?: providersWhereInput | boolean
    connect?: providersWhereUniqueInput
    update?: XOR<XOR<providersUpdateToOneWithWhereWithoutVisitsInput, providersUpdateWithoutVisitsInput>, providersUncheckedUpdateWithoutVisitsInput>
  }

  export type doctorsUpdateOneWithoutVisitsNestedInput = {
    create?: XOR<doctorsCreateWithoutVisitsInput, doctorsUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: doctorsCreateOrConnectWithoutVisitsInput
    upsert?: doctorsUpsertWithoutVisitsInput
    disconnect?: doctorsWhereInput | boolean
    delete?: doctorsWhereInput | boolean
    connect?: doctorsWhereUniqueInput
    update?: XOR<XOR<doctorsUpdateToOneWithWhereWithoutVisitsInput, doctorsUpdateWithoutVisitsInput>, doctorsUncheckedUpdateWithoutVisitsInput>
  }

  export type diagnosesUpdateManyWithoutVisitNestedInput = {
    create?: XOR<diagnosesCreateWithoutVisitInput, diagnosesUncheckedCreateWithoutVisitInput> | diagnosesCreateWithoutVisitInput[] | diagnosesUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: diagnosesCreateOrConnectWithoutVisitInput | diagnosesCreateOrConnectWithoutVisitInput[]
    upsert?: diagnosesUpsertWithWhereUniqueWithoutVisitInput | diagnosesUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: diagnosesCreateManyVisitInputEnvelope
    set?: diagnosesWhereUniqueInput | diagnosesWhereUniqueInput[]
    disconnect?: diagnosesWhereUniqueInput | diagnosesWhereUniqueInput[]
    delete?: diagnosesWhereUniqueInput | diagnosesWhereUniqueInput[]
    connect?: diagnosesWhereUniqueInput | diagnosesWhereUniqueInput[]
    update?: diagnosesUpdateWithWhereUniqueWithoutVisitInput | diagnosesUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: diagnosesUpdateManyWithWhereWithoutVisitInput | diagnosesUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: diagnosesScalarWhereInput | diagnosesScalarWhereInput[]
  }

  export type prescriptionsUpdateManyWithoutVisitNestedInput = {
    create?: XOR<prescriptionsCreateWithoutVisitInput, prescriptionsUncheckedCreateWithoutVisitInput> | prescriptionsCreateWithoutVisitInput[] | prescriptionsUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: prescriptionsCreateOrConnectWithoutVisitInput | prescriptionsCreateOrConnectWithoutVisitInput[]
    upsert?: prescriptionsUpsertWithWhereUniqueWithoutVisitInput | prescriptionsUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: prescriptionsCreateManyVisitInputEnvelope
    set?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    disconnect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    delete?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    connect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    update?: prescriptionsUpdateWithWhereUniqueWithoutVisitInput | prescriptionsUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: prescriptionsUpdateManyWithWhereWithoutVisitInput | prescriptionsUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: prescriptionsScalarWhereInput | prescriptionsScalarWhereInput[]
  }

  export type labsUpdateManyWithoutVisitNestedInput = {
    create?: XOR<labsCreateWithoutVisitInput, labsUncheckedCreateWithoutVisitInput> | labsCreateWithoutVisitInput[] | labsUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: labsCreateOrConnectWithoutVisitInput | labsCreateOrConnectWithoutVisitInput[]
    upsert?: labsUpsertWithWhereUniqueWithoutVisitInput | labsUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: labsCreateManyVisitInputEnvelope
    set?: labsWhereUniqueInput | labsWhereUniqueInput[]
    disconnect?: labsWhereUniqueInput | labsWhereUniqueInput[]
    delete?: labsWhereUniqueInput | labsWhereUniqueInput[]
    connect?: labsWhereUniqueInput | labsWhereUniqueInput[]
    update?: labsUpdateWithWhereUniqueWithoutVisitInput | labsUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: labsUpdateManyWithWhereWithoutVisitInput | labsUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: labsScalarWhereInput | labsScalarWhereInput[]
  }

  export type filesUpdateManyWithoutVisitNestedInput = {
    create?: XOR<filesCreateWithoutVisitInput, filesUncheckedCreateWithoutVisitInput> | filesCreateWithoutVisitInput[] | filesUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: filesCreateOrConnectWithoutVisitInput | filesCreateOrConnectWithoutVisitInput[]
    upsert?: filesUpsertWithWhereUniqueWithoutVisitInput | filesUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: filesCreateManyVisitInputEnvelope
    set?: filesWhereUniqueInput | filesWhereUniqueInput[]
    disconnect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    delete?: filesWhereUniqueInput | filesWhereUniqueInput[]
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    update?: filesUpdateWithWhereUniqueWithoutVisitInput | filesUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: filesUpdateManyWithWhereWithoutVisitInput | filesUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: filesScalarWhereInput | filesScalarWhereInput[]
  }

  export type diagnosesUncheckedUpdateManyWithoutVisitNestedInput = {
    create?: XOR<diagnosesCreateWithoutVisitInput, diagnosesUncheckedCreateWithoutVisitInput> | diagnosesCreateWithoutVisitInput[] | diagnosesUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: diagnosesCreateOrConnectWithoutVisitInput | diagnosesCreateOrConnectWithoutVisitInput[]
    upsert?: diagnosesUpsertWithWhereUniqueWithoutVisitInput | diagnosesUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: diagnosesCreateManyVisitInputEnvelope
    set?: diagnosesWhereUniqueInput | diagnosesWhereUniqueInput[]
    disconnect?: diagnosesWhereUniqueInput | diagnosesWhereUniqueInput[]
    delete?: diagnosesWhereUniqueInput | diagnosesWhereUniqueInput[]
    connect?: diagnosesWhereUniqueInput | diagnosesWhereUniqueInput[]
    update?: diagnosesUpdateWithWhereUniqueWithoutVisitInput | diagnosesUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: diagnosesUpdateManyWithWhereWithoutVisitInput | diagnosesUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: diagnosesScalarWhereInput | diagnosesScalarWhereInput[]
  }

  export type prescriptionsUncheckedUpdateManyWithoutVisitNestedInput = {
    create?: XOR<prescriptionsCreateWithoutVisitInput, prescriptionsUncheckedCreateWithoutVisitInput> | prescriptionsCreateWithoutVisitInput[] | prescriptionsUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: prescriptionsCreateOrConnectWithoutVisitInput | prescriptionsCreateOrConnectWithoutVisitInput[]
    upsert?: prescriptionsUpsertWithWhereUniqueWithoutVisitInput | prescriptionsUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: prescriptionsCreateManyVisitInputEnvelope
    set?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    disconnect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    delete?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    connect?: prescriptionsWhereUniqueInput | prescriptionsWhereUniqueInput[]
    update?: prescriptionsUpdateWithWhereUniqueWithoutVisitInput | prescriptionsUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: prescriptionsUpdateManyWithWhereWithoutVisitInput | prescriptionsUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: prescriptionsScalarWhereInput | prescriptionsScalarWhereInput[]
  }

  export type labsUncheckedUpdateManyWithoutVisitNestedInput = {
    create?: XOR<labsCreateWithoutVisitInput, labsUncheckedCreateWithoutVisitInput> | labsCreateWithoutVisitInput[] | labsUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: labsCreateOrConnectWithoutVisitInput | labsCreateOrConnectWithoutVisitInput[]
    upsert?: labsUpsertWithWhereUniqueWithoutVisitInput | labsUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: labsCreateManyVisitInputEnvelope
    set?: labsWhereUniqueInput | labsWhereUniqueInput[]
    disconnect?: labsWhereUniqueInput | labsWhereUniqueInput[]
    delete?: labsWhereUniqueInput | labsWhereUniqueInput[]
    connect?: labsWhereUniqueInput | labsWhereUniqueInput[]
    update?: labsUpdateWithWhereUniqueWithoutVisitInput | labsUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: labsUpdateManyWithWhereWithoutVisitInput | labsUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: labsScalarWhereInput | labsScalarWhereInput[]
  }

  export type filesUncheckedUpdateManyWithoutVisitNestedInput = {
    create?: XOR<filesCreateWithoutVisitInput, filesUncheckedCreateWithoutVisitInput> | filesCreateWithoutVisitInput[] | filesUncheckedCreateWithoutVisitInput[]
    connectOrCreate?: filesCreateOrConnectWithoutVisitInput | filesCreateOrConnectWithoutVisitInput[]
    upsert?: filesUpsertWithWhereUniqueWithoutVisitInput | filesUpsertWithWhereUniqueWithoutVisitInput[]
    createMany?: filesCreateManyVisitInputEnvelope
    set?: filesWhereUniqueInput | filesWhereUniqueInput[]
    disconnect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    delete?: filesWhereUniqueInput | filesWhereUniqueInput[]
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    update?: filesUpdateWithWhereUniqueWithoutVisitInput | filesUpdateWithWhereUniqueWithoutVisitInput[]
    updateMany?: filesUpdateManyWithWhereWithoutVisitInput | filesUpdateManyWithWhereWithoutVisitInput[]
    deleteMany?: filesScalarWhereInput | filesScalarWhereInput[]
  }

  export type visitsCreateNestedOneWithoutDiagnosesInput = {
    create?: XOR<visitsCreateWithoutDiagnosesInput, visitsUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: visitsCreateOrConnectWithoutDiagnosesInput
    connect?: visitsWhereUniqueInput
  }

  export type visitsUpdateOneWithoutDiagnosesNestedInput = {
    create?: XOR<visitsCreateWithoutDiagnosesInput, visitsUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: visitsCreateOrConnectWithoutDiagnosesInput
    upsert?: visitsUpsertWithoutDiagnosesInput
    disconnect?: visitsWhereInput | boolean
    delete?: visitsWhereInput | boolean
    connect?: visitsWhereUniqueInput
    update?: XOR<XOR<visitsUpdateToOneWithWhereWithoutDiagnosesInput, visitsUpdateWithoutDiagnosesInput>, visitsUncheckedUpdateWithoutDiagnosesInput>
  }

  export type visitsCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<visitsCreateWithoutPrescriptionsInput, visitsUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: visitsCreateOrConnectWithoutPrescriptionsInput
    connect?: visitsWhereUniqueInput
  }

  export type doctorsCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<doctorsCreateWithoutPrescriptionsInput, doctorsUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: doctorsCreateOrConnectWithoutPrescriptionsInput
    connect?: doctorsWhereUniqueInput
  }

  export type visitsUpdateOneWithoutPrescriptionsNestedInput = {
    create?: XOR<visitsCreateWithoutPrescriptionsInput, visitsUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: visitsCreateOrConnectWithoutPrescriptionsInput
    upsert?: visitsUpsertWithoutPrescriptionsInput
    disconnect?: visitsWhereInput | boolean
    delete?: visitsWhereInput | boolean
    connect?: visitsWhereUniqueInput
    update?: XOR<XOR<visitsUpdateToOneWithWhereWithoutPrescriptionsInput, visitsUpdateWithoutPrescriptionsInput>, visitsUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type doctorsUpdateOneWithoutPrescriptionsNestedInput = {
    create?: XOR<doctorsCreateWithoutPrescriptionsInput, doctorsUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: doctorsCreateOrConnectWithoutPrescriptionsInput
    upsert?: doctorsUpsertWithoutPrescriptionsInput
    disconnect?: doctorsWhereInput | boolean
    delete?: doctorsWhereInput | boolean
    connect?: doctorsWhereUniqueInput
    update?: XOR<XOR<doctorsUpdateToOneWithWhereWithoutPrescriptionsInput, doctorsUpdateWithoutPrescriptionsInput>, doctorsUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type visitsCreateNestedOneWithoutLabsInput = {
    create?: XOR<visitsCreateWithoutLabsInput, visitsUncheckedCreateWithoutLabsInput>
    connectOrCreate?: visitsCreateOrConnectWithoutLabsInput
    connect?: visitsWhereUniqueInput
  }

  export type visitsUpdateOneWithoutLabsNestedInput = {
    create?: XOR<visitsCreateWithoutLabsInput, visitsUncheckedCreateWithoutLabsInput>
    connectOrCreate?: visitsCreateOrConnectWithoutLabsInput
    upsert?: visitsUpsertWithoutLabsInput
    disconnect?: visitsWhereInput | boolean
    delete?: visitsWhereInput | boolean
    connect?: visitsWhereUniqueInput
    update?: XOR<XOR<visitsUpdateToOneWithWhereWithoutLabsInput, visitsUpdateWithoutLabsInput>, visitsUncheckedUpdateWithoutLabsInput>
  }

  export type visitsCreateNestedOneWithoutFilesInput = {
    create?: XOR<visitsCreateWithoutFilesInput, visitsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: visitsCreateOrConnectWithoutFilesInput
    connect?: visitsWhereUniqueInput
  }

  export type visitsUpdateOneWithoutFilesNestedInput = {
    create?: XOR<visitsCreateWithoutFilesInput, visitsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: visitsCreateOrConnectWithoutFilesInput
    upsert?: visitsUpsertWithoutFilesInput
    disconnect?: visitsWhereInput | boolean
    delete?: visitsWhereInput | boolean
    connect?: visitsWhereUniqueInput
    update?: XOR<XOR<visitsUpdateToOneWithWhereWithoutFilesInput, visitsUpdateWithoutFilesInput>, visitsUncheckedUpdateWithoutFilesInput>
  }

  export type patientsCreateNestedOneWithoutAccess_controlsInput = {
    create?: XOR<patientsCreateWithoutAccess_controlsInput, patientsUncheckedCreateWithoutAccess_controlsInput>
    connectOrCreate?: patientsCreateOrConnectWithoutAccess_controlsInput
    connect?: patientsWhereUniqueInput
  }

  export type patientsUpdateOneWithoutAccess_controlsNestedInput = {
    create?: XOR<patientsCreateWithoutAccess_controlsInput, patientsUncheckedCreateWithoutAccess_controlsInput>
    connectOrCreate?: patientsCreateOrConnectWithoutAccess_controlsInput
    upsert?: patientsUpsertWithoutAccess_controlsInput
    disconnect?: patientsWhereInput | boolean
    delete?: patientsWhereInput | boolean
    connect?: patientsWhereUniqueInput
    update?: XOR<XOR<patientsUpdateToOneWithWhereWithoutAccess_controlsInput, patientsUpdateWithoutAccess_controlsInput>, patientsUncheckedUpdateWithoutAccess_controlsInput>
  }

  export type patientsCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<patientsCreateWithoutAudit_logsInput, patientsUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: patientsCreateOrConnectWithoutAudit_logsInput
    connect?: patientsWhereUniqueInput
  }

  export type patientsUpdateOneWithoutAudit_logsNestedInput = {
    create?: XOR<patientsCreateWithoutAudit_logsInput, patientsUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: patientsCreateOrConnectWithoutAudit_logsInput
    upsert?: patientsUpsertWithoutAudit_logsInput
    disconnect?: patientsWhereInput | boolean
    delete?: patientsWhereInput | boolean
    connect?: patientsWhereUniqueInput
    update?: XOR<XOR<patientsUpdateToOneWithWhereWithoutAudit_logsInput, patientsUpdateWithoutAudit_logsInput>, patientsUncheckedUpdateWithoutAudit_logsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type visitsCreateWithoutPatientInput = {
    visit_id?: string
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    provider?: providersCreateNestedOneWithoutVisitsInput
    doctor?: doctorsCreateNestedOneWithoutVisitsInput
    diagnoses?: diagnosesCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsCreateNestedManyWithoutVisitInput
    labs?: labsCreateNestedManyWithoutVisitInput
    files?: filesCreateNestedManyWithoutVisitInput
  }

  export type visitsUncheckedCreateWithoutPatientInput = {
    visit_id?: string
    provider_id?: string | null
    doctor_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    diagnoses?: diagnosesUncheckedCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsUncheckedCreateNestedManyWithoutVisitInput
    labs?: labsUncheckedCreateNestedManyWithoutVisitInput
    files?: filesUncheckedCreateNestedManyWithoutVisitInput
  }

  export type visitsCreateOrConnectWithoutPatientInput = {
    where: visitsWhereUniqueInput
    create: XOR<visitsCreateWithoutPatientInput, visitsUncheckedCreateWithoutPatientInput>
  }

  export type visitsCreateManyPatientInputEnvelope = {
    data: visitsCreateManyPatientInput | visitsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type access_controlsCreateWithoutPatientInput = {
    ac_id?: string
    granted_to: string
    granted_by?: string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: Date | string | null
    valid_to?: Date | string | null
    on_chain_tx?: string | null
    created_at?: Date | string
  }

  export type access_controlsUncheckedCreateWithoutPatientInput = {
    ac_id?: string
    granted_to: string
    granted_by?: string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: Date | string | null
    valid_to?: Date | string | null
    on_chain_tx?: string | null
    created_at?: Date | string
  }

  export type access_controlsCreateOrConnectWithoutPatientInput = {
    where: access_controlsWhereUniqueInput
    create: XOR<access_controlsCreateWithoutPatientInput, access_controlsUncheckedCreateWithoutPatientInput>
  }

  export type access_controlsCreateManyPatientInputEnvelope = {
    data: access_controlsCreateManyPatientInput | access_controlsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type audit_access_logsCreateWithoutPatientInput = {
    log_id?: string
    accessed_by: string
    resource_type?: string | null
    resource_id?: string | null
    access_timestamp?: Date | string
    on_chain_anchor?: string | null
    created_at?: Date | string
  }

  export type audit_access_logsUncheckedCreateWithoutPatientInput = {
    log_id?: string
    accessed_by: string
    resource_type?: string | null
    resource_id?: string | null
    access_timestamp?: Date | string
    on_chain_anchor?: string | null
    created_at?: Date | string
  }

  export type audit_access_logsCreateOrConnectWithoutPatientInput = {
    where: audit_access_logsWhereUniqueInput
    create: XOR<audit_access_logsCreateWithoutPatientInput, audit_access_logsUncheckedCreateWithoutPatientInput>
  }

  export type audit_access_logsCreateManyPatientInputEnvelope = {
    data: audit_access_logsCreateManyPatientInput | audit_access_logsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type visitsUpsertWithWhereUniqueWithoutPatientInput = {
    where: visitsWhereUniqueInput
    update: XOR<visitsUpdateWithoutPatientInput, visitsUncheckedUpdateWithoutPatientInput>
    create: XOR<visitsCreateWithoutPatientInput, visitsUncheckedCreateWithoutPatientInput>
  }

  export type visitsUpdateWithWhereUniqueWithoutPatientInput = {
    where: visitsWhereUniqueInput
    data: XOR<visitsUpdateWithoutPatientInput, visitsUncheckedUpdateWithoutPatientInput>
  }

  export type visitsUpdateManyWithWhereWithoutPatientInput = {
    where: visitsScalarWhereInput
    data: XOR<visitsUpdateManyMutationInput, visitsUncheckedUpdateManyWithoutPatientInput>
  }

  export type visitsScalarWhereInput = {
    AND?: visitsScalarWhereInput | visitsScalarWhereInput[]
    OR?: visitsScalarWhereInput[]
    NOT?: visitsScalarWhereInput | visitsScalarWhereInput[]
    visit_id?: StringFilter<"visits"> | string
    patient_id?: StringNullableFilter<"visits"> | string | null
    provider_id?: StringNullableFilter<"visits"> | string | null
    doctor_id?: StringNullableFilter<"visits"> | string | null
    visit_timestamp?: DateTimeFilter<"visits"> | Date | string
    visit_type?: StringNullableFilter<"visits"> | string | null
    chief_complaint?: StringNullableFilter<"visits"> | string | null
    clinical_notes_hash?: StringNullableFilter<"visits"> | string | null
    clinical_notes_enc?: StringNullableFilter<"visits"> | string | null
    billing_id?: StringNullableFilter<"visits"> | string | null
    created_at?: DateTimeFilter<"visits"> | Date | string
  }

  export type access_controlsUpsertWithWhereUniqueWithoutPatientInput = {
    where: access_controlsWhereUniqueInput
    update: XOR<access_controlsUpdateWithoutPatientInput, access_controlsUncheckedUpdateWithoutPatientInput>
    create: XOR<access_controlsCreateWithoutPatientInput, access_controlsUncheckedCreateWithoutPatientInput>
  }

  export type access_controlsUpdateWithWhereUniqueWithoutPatientInput = {
    where: access_controlsWhereUniqueInput
    data: XOR<access_controlsUpdateWithoutPatientInput, access_controlsUncheckedUpdateWithoutPatientInput>
  }

  export type access_controlsUpdateManyWithWhereWithoutPatientInput = {
    where: access_controlsScalarWhereInput
    data: XOR<access_controlsUpdateManyMutationInput, access_controlsUncheckedUpdateManyWithoutPatientInput>
  }

  export type access_controlsScalarWhereInput = {
    AND?: access_controlsScalarWhereInput | access_controlsScalarWhereInput[]
    OR?: access_controlsScalarWhereInput[]
    NOT?: access_controlsScalarWhereInput | access_controlsScalarWhereInput[]
    ac_id?: StringFilter<"access_controls"> | string
    patient_id?: StringNullableFilter<"access_controls"> | string | null
    granted_to?: StringFilter<"access_controls"> | string
    granted_by?: StringNullableFilter<"access_controls"> | string | null
    scope?: JsonNullableFilter<"access_controls">
    valid_from?: DateTimeNullableFilter<"access_controls"> | Date | string | null
    valid_to?: DateTimeNullableFilter<"access_controls"> | Date | string | null
    on_chain_tx?: StringNullableFilter<"access_controls"> | string | null
    created_at?: DateTimeFilter<"access_controls"> | Date | string
  }

  export type audit_access_logsUpsertWithWhereUniqueWithoutPatientInput = {
    where: audit_access_logsWhereUniqueInput
    update: XOR<audit_access_logsUpdateWithoutPatientInput, audit_access_logsUncheckedUpdateWithoutPatientInput>
    create: XOR<audit_access_logsCreateWithoutPatientInput, audit_access_logsUncheckedCreateWithoutPatientInput>
  }

  export type audit_access_logsUpdateWithWhereUniqueWithoutPatientInput = {
    where: audit_access_logsWhereUniqueInput
    data: XOR<audit_access_logsUpdateWithoutPatientInput, audit_access_logsUncheckedUpdateWithoutPatientInput>
  }

  export type audit_access_logsUpdateManyWithWhereWithoutPatientInput = {
    where: audit_access_logsScalarWhereInput
    data: XOR<audit_access_logsUpdateManyMutationInput, audit_access_logsUncheckedUpdateManyWithoutPatientInput>
  }

  export type audit_access_logsScalarWhereInput = {
    AND?: audit_access_logsScalarWhereInput | audit_access_logsScalarWhereInput[]
    OR?: audit_access_logsScalarWhereInput[]
    NOT?: audit_access_logsScalarWhereInput | audit_access_logsScalarWhereInput[]
    log_id?: StringFilter<"audit_access_logs"> | string
    patient_id?: StringNullableFilter<"audit_access_logs"> | string | null
    accessed_by?: StringFilter<"audit_access_logs"> | string
    resource_type?: StringNullableFilter<"audit_access_logs"> | string | null
    resource_id?: StringNullableFilter<"audit_access_logs"> | string | null
    access_timestamp?: DateTimeFilter<"audit_access_logs"> | Date | string
    on_chain_anchor?: StringNullableFilter<"audit_access_logs"> | string | null
    created_at?: DateTimeFilter<"audit_access_logs"> | Date | string
  }

  export type doctorsCreateWithoutProviderInput = {
    doctor_id?: string
    full_name: string
    specialty?: string | null
    license_no?: string | null
    contact?: string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    visits?: visitsCreateNestedManyWithoutDoctorInput
    prescriptions?: prescriptionsCreateNestedManyWithoutDoctorInput
  }

  export type doctorsUncheckedCreateWithoutProviderInput = {
    doctor_id?: string
    full_name: string
    specialty?: string | null
    license_no?: string | null
    contact?: string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    visits?: visitsUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: prescriptionsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorsCreateOrConnectWithoutProviderInput = {
    where: doctorsWhereUniqueInput
    create: XOR<doctorsCreateWithoutProviderInput, doctorsUncheckedCreateWithoutProviderInput>
  }

  export type doctorsCreateManyProviderInputEnvelope = {
    data: doctorsCreateManyProviderInput | doctorsCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type visitsCreateWithoutProviderInput = {
    visit_id?: string
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    patient?: patientsCreateNestedOneWithoutVisitsInput
    doctor?: doctorsCreateNestedOneWithoutVisitsInput
    diagnoses?: diagnosesCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsCreateNestedManyWithoutVisitInput
    labs?: labsCreateNestedManyWithoutVisitInput
    files?: filesCreateNestedManyWithoutVisitInput
  }

  export type visitsUncheckedCreateWithoutProviderInput = {
    visit_id?: string
    patient_id?: string | null
    doctor_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    diagnoses?: diagnosesUncheckedCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsUncheckedCreateNestedManyWithoutVisitInput
    labs?: labsUncheckedCreateNestedManyWithoutVisitInput
    files?: filesUncheckedCreateNestedManyWithoutVisitInput
  }

  export type visitsCreateOrConnectWithoutProviderInput = {
    where: visitsWhereUniqueInput
    create: XOR<visitsCreateWithoutProviderInput, visitsUncheckedCreateWithoutProviderInput>
  }

  export type visitsCreateManyProviderInputEnvelope = {
    data: visitsCreateManyProviderInput | visitsCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type doctorsUpsertWithWhereUniqueWithoutProviderInput = {
    where: doctorsWhereUniqueInput
    update: XOR<doctorsUpdateWithoutProviderInput, doctorsUncheckedUpdateWithoutProviderInput>
    create: XOR<doctorsCreateWithoutProviderInput, doctorsUncheckedCreateWithoutProviderInput>
  }

  export type doctorsUpdateWithWhereUniqueWithoutProviderInput = {
    where: doctorsWhereUniqueInput
    data: XOR<doctorsUpdateWithoutProviderInput, doctorsUncheckedUpdateWithoutProviderInput>
  }

  export type doctorsUpdateManyWithWhereWithoutProviderInput = {
    where: doctorsScalarWhereInput
    data: XOR<doctorsUpdateManyMutationInput, doctorsUncheckedUpdateManyWithoutProviderInput>
  }

  export type doctorsScalarWhereInput = {
    AND?: doctorsScalarWhereInput | doctorsScalarWhereInput[]
    OR?: doctorsScalarWhereInput[]
    NOT?: doctorsScalarWhereInput | doctorsScalarWhereInput[]
    doctor_id?: StringFilter<"doctors"> | string
    provider_id?: StringNullableFilter<"doctors"> | string | null
    full_name?: StringFilter<"doctors"> | string
    specialty?: StringNullableFilter<"doctors"> | string | null
    license_no?: StringNullableFilter<"doctors"> | string | null
    contact?: StringNullableFilter<"doctors"> | string | null
    profile_meta?: JsonNullableFilter<"doctors">
    created_at?: DateTimeFilter<"doctors"> | Date | string
  }

  export type visitsUpsertWithWhereUniqueWithoutProviderInput = {
    where: visitsWhereUniqueInput
    update: XOR<visitsUpdateWithoutProviderInput, visitsUncheckedUpdateWithoutProviderInput>
    create: XOR<visitsCreateWithoutProviderInput, visitsUncheckedCreateWithoutProviderInput>
  }

  export type visitsUpdateWithWhereUniqueWithoutProviderInput = {
    where: visitsWhereUniqueInput
    data: XOR<visitsUpdateWithoutProviderInput, visitsUncheckedUpdateWithoutProviderInput>
  }

  export type visitsUpdateManyWithWhereWithoutProviderInput = {
    where: visitsScalarWhereInput
    data: XOR<visitsUpdateManyMutationInput, visitsUncheckedUpdateManyWithoutProviderInput>
  }

  export type providersCreateWithoutDoctorsInput = {
    provider_id?: string
    name: string
    address?: string | null
    contact_phone?: string | null
    type?: string | null
    license_number?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    visits?: visitsCreateNestedManyWithoutProviderInput
  }

  export type providersUncheckedCreateWithoutDoctorsInput = {
    provider_id?: string
    name: string
    address?: string | null
    contact_phone?: string | null
    type?: string | null
    license_number?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    visits?: visitsUncheckedCreateNestedManyWithoutProviderInput
  }

  export type providersCreateOrConnectWithoutDoctorsInput = {
    where: providersWhereUniqueInput
    create: XOR<providersCreateWithoutDoctorsInput, providersUncheckedCreateWithoutDoctorsInput>
  }

  export type visitsCreateWithoutDoctorInput = {
    visit_id?: string
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    patient?: patientsCreateNestedOneWithoutVisitsInput
    provider?: providersCreateNestedOneWithoutVisitsInput
    diagnoses?: diagnosesCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsCreateNestedManyWithoutVisitInput
    labs?: labsCreateNestedManyWithoutVisitInput
    files?: filesCreateNestedManyWithoutVisitInput
  }

  export type visitsUncheckedCreateWithoutDoctorInput = {
    visit_id?: string
    patient_id?: string | null
    provider_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    diagnoses?: diagnosesUncheckedCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsUncheckedCreateNestedManyWithoutVisitInput
    labs?: labsUncheckedCreateNestedManyWithoutVisitInput
    files?: filesUncheckedCreateNestedManyWithoutVisitInput
  }

  export type visitsCreateOrConnectWithoutDoctorInput = {
    where: visitsWhereUniqueInput
    create: XOR<visitsCreateWithoutDoctorInput, visitsUncheckedCreateWithoutDoctorInput>
  }

  export type visitsCreateManyDoctorInputEnvelope = {
    data: visitsCreateManyDoctorInput | visitsCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type prescriptionsCreateWithoutDoctorInput = {
    presc_id?: string
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_hash?: string | null
    created_at?: Date | string
    visit?: visitsCreateNestedOneWithoutPrescriptionsInput
  }

  export type prescriptionsUncheckedCreateWithoutDoctorInput = {
    presc_id?: string
    visit_id?: string | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_hash?: string | null
    created_at?: Date | string
  }

  export type prescriptionsCreateOrConnectWithoutDoctorInput = {
    where: prescriptionsWhereUniqueInput
    create: XOR<prescriptionsCreateWithoutDoctorInput, prescriptionsUncheckedCreateWithoutDoctorInput>
  }

  export type prescriptionsCreateManyDoctorInputEnvelope = {
    data: prescriptionsCreateManyDoctorInput | prescriptionsCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type providersUpsertWithoutDoctorsInput = {
    update: XOR<providersUpdateWithoutDoctorsInput, providersUncheckedUpdateWithoutDoctorsInput>
    create: XOR<providersCreateWithoutDoctorsInput, providersUncheckedCreateWithoutDoctorsInput>
    where?: providersWhereInput
  }

  export type providersUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: providersWhereInput
    data: XOR<providersUpdateWithoutDoctorsInput, providersUncheckedUpdateWithoutDoctorsInput>
  }

  export type providersUpdateWithoutDoctorsInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUpdateManyWithoutProviderNestedInput
  }

  export type providersUncheckedUpdateWithoutDoctorsInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type visitsUpsertWithWhereUniqueWithoutDoctorInput = {
    where: visitsWhereUniqueInput
    update: XOR<visitsUpdateWithoutDoctorInput, visitsUncheckedUpdateWithoutDoctorInput>
    create: XOR<visitsCreateWithoutDoctorInput, visitsUncheckedCreateWithoutDoctorInput>
  }

  export type visitsUpdateWithWhereUniqueWithoutDoctorInput = {
    where: visitsWhereUniqueInput
    data: XOR<visitsUpdateWithoutDoctorInput, visitsUncheckedUpdateWithoutDoctorInput>
  }

  export type visitsUpdateManyWithWhereWithoutDoctorInput = {
    where: visitsScalarWhereInput
    data: XOR<visitsUpdateManyMutationInput, visitsUncheckedUpdateManyWithoutDoctorInput>
  }

  export type prescriptionsUpsertWithWhereUniqueWithoutDoctorInput = {
    where: prescriptionsWhereUniqueInput
    update: XOR<prescriptionsUpdateWithoutDoctorInput, prescriptionsUncheckedUpdateWithoutDoctorInput>
    create: XOR<prescriptionsCreateWithoutDoctorInput, prescriptionsUncheckedCreateWithoutDoctorInput>
  }

  export type prescriptionsUpdateWithWhereUniqueWithoutDoctorInput = {
    where: prescriptionsWhereUniqueInput
    data: XOR<prescriptionsUpdateWithoutDoctorInput, prescriptionsUncheckedUpdateWithoutDoctorInput>
  }

  export type prescriptionsUpdateManyWithWhereWithoutDoctorInput = {
    where: prescriptionsScalarWhereInput
    data: XOR<prescriptionsUpdateManyMutationInput, prescriptionsUncheckedUpdateManyWithoutDoctorInput>
  }

  export type prescriptionsScalarWhereInput = {
    AND?: prescriptionsScalarWhereInput | prescriptionsScalarWhereInput[]
    OR?: prescriptionsScalarWhereInput[]
    NOT?: prescriptionsScalarWhereInput | prescriptionsScalarWhereInput[]
    presc_id?: StringFilter<"prescriptions"> | string
    visit_id?: StringNullableFilter<"prescriptions"> | string | null
    medications?: JsonNullableFilter<"prescriptions">
    presc_issued_by?: StringNullableFilter<"prescriptions"> | string | null
    presc_hash?: StringNullableFilter<"prescriptions"> | string | null
    created_at?: DateTimeFilter<"prescriptions"> | Date | string
  }

  export type patientsCreateWithoutVisitsInput = {
    patient_id?: string
    wallet_did?: string | null
    full_name: string
    birth_date?: Date | string | null
    gender?: string | null
    blood_type?: string | null
    contact_phone?: string | null
    address?: string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    access_controls?: access_controlsCreateNestedManyWithoutPatientInput
    audit_logs?: audit_access_logsCreateNestedManyWithoutPatientInput
  }

  export type patientsUncheckedCreateWithoutVisitsInput = {
    patient_id?: string
    wallet_did?: string | null
    full_name: string
    birth_date?: Date | string | null
    gender?: string | null
    blood_type?: string | null
    contact_phone?: string | null
    address?: string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    access_controls?: access_controlsUncheckedCreateNestedManyWithoutPatientInput
    audit_logs?: audit_access_logsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientsCreateOrConnectWithoutVisitsInput = {
    where: patientsWhereUniqueInput
    create: XOR<patientsCreateWithoutVisitsInput, patientsUncheckedCreateWithoutVisitsInput>
  }

  export type providersCreateWithoutVisitsInput = {
    provider_id?: string
    name: string
    address?: string | null
    contact_phone?: string | null
    type?: string | null
    license_number?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    doctors?: doctorsCreateNestedManyWithoutProviderInput
  }

  export type providersUncheckedCreateWithoutVisitsInput = {
    provider_id?: string
    name: string
    address?: string | null
    contact_phone?: string | null
    type?: string | null
    license_number?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    doctors?: doctorsUncheckedCreateNestedManyWithoutProviderInput
  }

  export type providersCreateOrConnectWithoutVisitsInput = {
    where: providersWhereUniqueInput
    create: XOR<providersCreateWithoutVisitsInput, providersUncheckedCreateWithoutVisitsInput>
  }

  export type doctorsCreateWithoutVisitsInput = {
    doctor_id?: string
    full_name: string
    specialty?: string | null
    license_no?: string | null
    contact?: string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    provider?: providersCreateNestedOneWithoutDoctorsInput
    prescriptions?: prescriptionsCreateNestedManyWithoutDoctorInput
  }

  export type doctorsUncheckedCreateWithoutVisitsInput = {
    doctor_id?: string
    provider_id?: string | null
    full_name: string
    specialty?: string | null
    license_no?: string | null
    contact?: string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    prescriptions?: prescriptionsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorsCreateOrConnectWithoutVisitsInput = {
    where: doctorsWhereUniqueInput
    create: XOR<doctorsCreateWithoutVisitsInput, doctorsUncheckedCreateWithoutVisitsInput>
  }

  export type diagnosesCreateWithoutVisitInput = {
    dx_id?: string
    code_icd10?: string | null
    description?: string | null
    severity?: string | null
    created_at?: Date | string
  }

  export type diagnosesUncheckedCreateWithoutVisitInput = {
    dx_id?: string
    code_icd10?: string | null
    description?: string | null
    severity?: string | null
    created_at?: Date | string
  }

  export type diagnosesCreateOrConnectWithoutVisitInput = {
    where: diagnosesWhereUniqueInput
    create: XOR<diagnosesCreateWithoutVisitInput, diagnosesUncheckedCreateWithoutVisitInput>
  }

  export type diagnosesCreateManyVisitInputEnvelope = {
    data: diagnosesCreateManyVisitInput | diagnosesCreateManyVisitInput[]
    skipDuplicates?: boolean
  }

  export type prescriptionsCreateWithoutVisitInput = {
    presc_id?: string
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_hash?: string | null
    created_at?: Date | string
    doctor?: doctorsCreateNestedOneWithoutPrescriptionsInput
  }

  export type prescriptionsUncheckedCreateWithoutVisitInput = {
    presc_id?: string
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_issued_by?: string | null
    presc_hash?: string | null
    created_at?: Date | string
  }

  export type prescriptionsCreateOrConnectWithoutVisitInput = {
    where: prescriptionsWhereUniqueInput
    create: XOR<prescriptionsCreateWithoutVisitInput, prescriptionsUncheckedCreateWithoutVisitInput>
  }

  export type prescriptionsCreateManyVisitInputEnvelope = {
    data: prescriptionsCreateManyVisitInput | prescriptionsCreateManyVisitInput[]
    skipDuplicates?: boolean
  }

  export type labsCreateWithoutVisitInput = {
    lab_id?: string
    lab_type?: string | null
    results_enc?: string | null
    results_hash?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type labsUncheckedCreateWithoutVisitInput = {
    lab_id?: string
    lab_type?: string | null
    results_enc?: string | null
    results_hash?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type labsCreateOrConnectWithoutVisitInput = {
    where: labsWhereUniqueInput
    create: XOR<labsCreateWithoutVisitInput, labsUncheckedCreateWithoutVisitInput>
  }

  export type labsCreateManyVisitInputEnvelope = {
    data: labsCreateManyVisitInput | labsCreateManyVisitInput[]
    skipDuplicates?: boolean
  }

  export type filesCreateWithoutVisitInput = {
    file_id?: string
    owner_id: string
    file_type?: string | null
    storage_path?: string | null
    file_hash?: string | null
    created_at?: Date | string
  }

  export type filesUncheckedCreateWithoutVisitInput = {
    file_id?: string
    owner_id: string
    file_type?: string | null
    storage_path?: string | null
    file_hash?: string | null
    created_at?: Date | string
  }

  export type filesCreateOrConnectWithoutVisitInput = {
    where: filesWhereUniqueInput
    create: XOR<filesCreateWithoutVisitInput, filesUncheckedCreateWithoutVisitInput>
  }

  export type filesCreateManyVisitInputEnvelope = {
    data: filesCreateManyVisitInput | filesCreateManyVisitInput[]
    skipDuplicates?: boolean
  }

  export type patientsUpsertWithoutVisitsInput = {
    update: XOR<patientsUpdateWithoutVisitsInput, patientsUncheckedUpdateWithoutVisitsInput>
    create: XOR<patientsCreateWithoutVisitsInput, patientsUncheckedCreateWithoutVisitsInput>
    where?: patientsWhereInput
  }

  export type patientsUpdateToOneWithWhereWithoutVisitsInput = {
    where?: patientsWhereInput
    data: XOR<patientsUpdateWithoutVisitsInput, patientsUncheckedUpdateWithoutVisitsInput>
  }

  export type patientsUpdateWithoutVisitsInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    wallet_did?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_controls?: access_controlsUpdateManyWithoutPatientNestedInput
    audit_logs?: audit_access_logsUpdateManyWithoutPatientNestedInput
  }

  export type patientsUncheckedUpdateWithoutVisitsInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    wallet_did?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    access_controls?: access_controlsUncheckedUpdateManyWithoutPatientNestedInput
    audit_logs?: audit_access_logsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type providersUpsertWithoutVisitsInput = {
    update: XOR<providersUpdateWithoutVisitsInput, providersUncheckedUpdateWithoutVisitsInput>
    create: XOR<providersCreateWithoutVisitsInput, providersUncheckedCreateWithoutVisitsInput>
    where?: providersWhereInput
  }

  export type providersUpdateToOneWithWhereWithoutVisitsInput = {
    where?: providersWhereInput
    data: XOR<providersUpdateWithoutVisitsInput, providersUncheckedUpdateWithoutVisitsInput>
  }

  export type providersUpdateWithoutVisitsInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: doctorsUpdateManyWithoutProviderNestedInput
  }

  export type providersUncheckedUpdateWithoutVisitsInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctors?: doctorsUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type doctorsUpsertWithoutVisitsInput = {
    update: XOR<doctorsUpdateWithoutVisitsInput, doctorsUncheckedUpdateWithoutVisitsInput>
    create: XOR<doctorsCreateWithoutVisitsInput, doctorsUncheckedCreateWithoutVisitsInput>
    where?: doctorsWhereInput
  }

  export type doctorsUpdateToOneWithWhereWithoutVisitsInput = {
    where?: doctorsWhereInput
    data: XOR<doctorsUpdateWithoutVisitsInput, doctorsUncheckedUpdateWithoutVisitsInput>
  }

  export type doctorsUpdateWithoutVisitsInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    license_no?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: providersUpdateOneWithoutDoctorsNestedInput
    prescriptions?: prescriptionsUpdateManyWithoutDoctorNestedInput
  }

  export type doctorsUncheckedUpdateWithoutVisitsInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    license_no?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: prescriptionsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type diagnosesUpsertWithWhereUniqueWithoutVisitInput = {
    where: diagnosesWhereUniqueInput
    update: XOR<diagnosesUpdateWithoutVisitInput, diagnosesUncheckedUpdateWithoutVisitInput>
    create: XOR<diagnosesCreateWithoutVisitInput, diagnosesUncheckedCreateWithoutVisitInput>
  }

  export type diagnosesUpdateWithWhereUniqueWithoutVisitInput = {
    where: diagnosesWhereUniqueInput
    data: XOR<diagnosesUpdateWithoutVisitInput, diagnosesUncheckedUpdateWithoutVisitInput>
  }

  export type diagnosesUpdateManyWithWhereWithoutVisitInput = {
    where: diagnosesScalarWhereInput
    data: XOR<diagnosesUpdateManyMutationInput, diagnosesUncheckedUpdateManyWithoutVisitInput>
  }

  export type diagnosesScalarWhereInput = {
    AND?: diagnosesScalarWhereInput | diagnosesScalarWhereInput[]
    OR?: diagnosesScalarWhereInput[]
    NOT?: diagnosesScalarWhereInput | diagnosesScalarWhereInput[]
    dx_id?: StringFilter<"diagnoses"> | string
    visit_id?: StringNullableFilter<"diagnoses"> | string | null
    code_icd10?: StringNullableFilter<"diagnoses"> | string | null
    description?: StringNullableFilter<"diagnoses"> | string | null
    severity?: StringNullableFilter<"diagnoses"> | string | null
    created_at?: DateTimeFilter<"diagnoses"> | Date | string
  }

  export type prescriptionsUpsertWithWhereUniqueWithoutVisitInput = {
    where: prescriptionsWhereUniqueInput
    update: XOR<prescriptionsUpdateWithoutVisitInput, prescriptionsUncheckedUpdateWithoutVisitInput>
    create: XOR<prescriptionsCreateWithoutVisitInput, prescriptionsUncheckedCreateWithoutVisitInput>
  }

  export type prescriptionsUpdateWithWhereUniqueWithoutVisitInput = {
    where: prescriptionsWhereUniqueInput
    data: XOR<prescriptionsUpdateWithoutVisitInput, prescriptionsUncheckedUpdateWithoutVisitInput>
  }

  export type prescriptionsUpdateManyWithWhereWithoutVisitInput = {
    where: prescriptionsScalarWhereInput
    data: XOR<prescriptionsUpdateManyMutationInput, prescriptionsUncheckedUpdateManyWithoutVisitInput>
  }

  export type labsUpsertWithWhereUniqueWithoutVisitInput = {
    where: labsWhereUniqueInput
    update: XOR<labsUpdateWithoutVisitInput, labsUncheckedUpdateWithoutVisitInput>
    create: XOR<labsCreateWithoutVisitInput, labsUncheckedCreateWithoutVisitInput>
  }

  export type labsUpdateWithWhereUniqueWithoutVisitInput = {
    where: labsWhereUniqueInput
    data: XOR<labsUpdateWithoutVisitInput, labsUncheckedUpdateWithoutVisitInput>
  }

  export type labsUpdateManyWithWhereWithoutVisitInput = {
    where: labsScalarWhereInput
    data: XOR<labsUpdateManyMutationInput, labsUncheckedUpdateManyWithoutVisitInput>
  }

  export type labsScalarWhereInput = {
    AND?: labsScalarWhereInput | labsScalarWhereInput[]
    OR?: labsScalarWhereInput[]
    NOT?: labsScalarWhereInput | labsScalarWhereInput[]
    lab_id?: StringFilter<"labs"> | string
    visit_id?: StringNullableFilter<"labs"> | string | null
    lab_type?: StringNullableFilter<"labs"> | string | null
    results_enc?: StringNullableFilter<"labs"> | string | null
    results_hash?: StringNullableFilter<"labs"> | string | null
    attachments?: JsonNullableFilter<"labs">
    created_at?: DateTimeFilter<"labs"> | Date | string
  }

  export type filesUpsertWithWhereUniqueWithoutVisitInput = {
    where: filesWhereUniqueInput
    update: XOR<filesUpdateWithoutVisitInput, filesUncheckedUpdateWithoutVisitInput>
    create: XOR<filesCreateWithoutVisitInput, filesUncheckedCreateWithoutVisitInput>
  }

  export type filesUpdateWithWhereUniqueWithoutVisitInput = {
    where: filesWhereUniqueInput
    data: XOR<filesUpdateWithoutVisitInput, filesUncheckedUpdateWithoutVisitInput>
  }

  export type filesUpdateManyWithWhereWithoutVisitInput = {
    where: filesScalarWhereInput
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyWithoutVisitInput>
  }

  export type filesScalarWhereInput = {
    AND?: filesScalarWhereInput | filesScalarWhereInput[]
    OR?: filesScalarWhereInput[]
    NOT?: filesScalarWhereInput | filesScalarWhereInput[]
    file_id?: StringFilter<"files"> | string
    owner_id?: StringFilter<"files"> | string
    visit_id?: StringNullableFilter<"files"> | string | null
    file_type?: StringNullableFilter<"files"> | string | null
    storage_path?: StringNullableFilter<"files"> | string | null
    file_hash?: StringNullableFilter<"files"> | string | null
    created_at?: DateTimeFilter<"files"> | Date | string
  }

  export type visitsCreateWithoutDiagnosesInput = {
    visit_id?: string
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    patient?: patientsCreateNestedOneWithoutVisitsInput
    provider?: providersCreateNestedOneWithoutVisitsInput
    doctor?: doctorsCreateNestedOneWithoutVisitsInput
    prescriptions?: prescriptionsCreateNestedManyWithoutVisitInput
    labs?: labsCreateNestedManyWithoutVisitInput
    files?: filesCreateNestedManyWithoutVisitInput
  }

  export type visitsUncheckedCreateWithoutDiagnosesInput = {
    visit_id?: string
    patient_id?: string | null
    provider_id?: string | null
    doctor_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    prescriptions?: prescriptionsUncheckedCreateNestedManyWithoutVisitInput
    labs?: labsUncheckedCreateNestedManyWithoutVisitInput
    files?: filesUncheckedCreateNestedManyWithoutVisitInput
  }

  export type visitsCreateOrConnectWithoutDiagnosesInput = {
    where: visitsWhereUniqueInput
    create: XOR<visitsCreateWithoutDiagnosesInput, visitsUncheckedCreateWithoutDiagnosesInput>
  }

  export type visitsUpsertWithoutDiagnosesInput = {
    update: XOR<visitsUpdateWithoutDiagnosesInput, visitsUncheckedUpdateWithoutDiagnosesInput>
    create: XOR<visitsCreateWithoutDiagnosesInput, visitsUncheckedCreateWithoutDiagnosesInput>
    where?: visitsWhereInput
  }

  export type visitsUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: visitsWhereInput
    data: XOR<visitsUpdateWithoutDiagnosesInput, visitsUncheckedUpdateWithoutDiagnosesInput>
  }

  export type visitsUpdateWithoutDiagnosesInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneWithoutVisitsNestedInput
    provider?: providersUpdateOneWithoutVisitsNestedInput
    doctor?: doctorsUpdateOneWithoutVisitsNestedInput
    prescriptions?: prescriptionsUpdateManyWithoutVisitNestedInput
    labs?: labsUpdateManyWithoutVisitNestedInput
    files?: filesUpdateManyWithoutVisitNestedInput
  }

  export type visitsUncheckedUpdateWithoutDiagnosesInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: prescriptionsUncheckedUpdateManyWithoutVisitNestedInput
    labs?: labsUncheckedUpdateManyWithoutVisitNestedInput
    files?: filesUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type visitsCreateWithoutPrescriptionsInput = {
    visit_id?: string
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    patient?: patientsCreateNestedOneWithoutVisitsInput
    provider?: providersCreateNestedOneWithoutVisitsInput
    doctor?: doctorsCreateNestedOneWithoutVisitsInput
    diagnoses?: diagnosesCreateNestedManyWithoutVisitInput
    labs?: labsCreateNestedManyWithoutVisitInput
    files?: filesCreateNestedManyWithoutVisitInput
  }

  export type visitsUncheckedCreateWithoutPrescriptionsInput = {
    visit_id?: string
    patient_id?: string | null
    provider_id?: string | null
    doctor_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    diagnoses?: diagnosesUncheckedCreateNestedManyWithoutVisitInput
    labs?: labsUncheckedCreateNestedManyWithoutVisitInput
    files?: filesUncheckedCreateNestedManyWithoutVisitInput
  }

  export type visitsCreateOrConnectWithoutPrescriptionsInput = {
    where: visitsWhereUniqueInput
    create: XOR<visitsCreateWithoutPrescriptionsInput, visitsUncheckedCreateWithoutPrescriptionsInput>
  }

  export type doctorsCreateWithoutPrescriptionsInput = {
    doctor_id?: string
    full_name: string
    specialty?: string | null
    license_no?: string | null
    contact?: string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    provider?: providersCreateNestedOneWithoutDoctorsInput
    visits?: visitsCreateNestedManyWithoutDoctorInput
  }

  export type doctorsUncheckedCreateWithoutPrescriptionsInput = {
    doctor_id?: string
    provider_id?: string | null
    full_name: string
    specialty?: string | null
    license_no?: string | null
    contact?: string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    visits?: visitsUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type doctorsCreateOrConnectWithoutPrescriptionsInput = {
    where: doctorsWhereUniqueInput
    create: XOR<doctorsCreateWithoutPrescriptionsInput, doctorsUncheckedCreateWithoutPrescriptionsInput>
  }

  export type visitsUpsertWithoutPrescriptionsInput = {
    update: XOR<visitsUpdateWithoutPrescriptionsInput, visitsUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<visitsCreateWithoutPrescriptionsInput, visitsUncheckedCreateWithoutPrescriptionsInput>
    where?: visitsWhereInput
  }

  export type visitsUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: visitsWhereInput
    data: XOR<visitsUpdateWithoutPrescriptionsInput, visitsUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type visitsUpdateWithoutPrescriptionsInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneWithoutVisitsNestedInput
    provider?: providersUpdateOneWithoutVisitsNestedInput
    doctor?: doctorsUpdateOneWithoutVisitsNestedInput
    diagnoses?: diagnosesUpdateManyWithoutVisitNestedInput
    labs?: labsUpdateManyWithoutVisitNestedInput
    files?: filesUpdateManyWithoutVisitNestedInput
  }

  export type visitsUncheckedUpdateWithoutPrescriptionsInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: diagnosesUncheckedUpdateManyWithoutVisitNestedInput
    labs?: labsUncheckedUpdateManyWithoutVisitNestedInput
    files?: filesUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type doctorsUpsertWithoutPrescriptionsInput = {
    update: XOR<doctorsUpdateWithoutPrescriptionsInput, doctorsUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<doctorsCreateWithoutPrescriptionsInput, doctorsUncheckedCreateWithoutPrescriptionsInput>
    where?: doctorsWhereInput
  }

  export type doctorsUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: doctorsWhereInput
    data: XOR<doctorsUpdateWithoutPrescriptionsInput, doctorsUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type doctorsUpdateWithoutPrescriptionsInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    license_no?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: providersUpdateOneWithoutDoctorsNestedInput
    visits?: visitsUpdateManyWithoutDoctorNestedInput
  }

  export type doctorsUncheckedUpdateWithoutPrescriptionsInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    license_no?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type visitsCreateWithoutLabsInput = {
    visit_id?: string
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    patient?: patientsCreateNestedOneWithoutVisitsInput
    provider?: providersCreateNestedOneWithoutVisitsInput
    doctor?: doctorsCreateNestedOneWithoutVisitsInput
    diagnoses?: diagnosesCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsCreateNestedManyWithoutVisitInput
    files?: filesCreateNestedManyWithoutVisitInput
  }

  export type visitsUncheckedCreateWithoutLabsInput = {
    visit_id?: string
    patient_id?: string | null
    provider_id?: string | null
    doctor_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    diagnoses?: diagnosesUncheckedCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsUncheckedCreateNestedManyWithoutVisitInput
    files?: filesUncheckedCreateNestedManyWithoutVisitInput
  }

  export type visitsCreateOrConnectWithoutLabsInput = {
    where: visitsWhereUniqueInput
    create: XOR<visitsCreateWithoutLabsInput, visitsUncheckedCreateWithoutLabsInput>
  }

  export type visitsUpsertWithoutLabsInput = {
    update: XOR<visitsUpdateWithoutLabsInput, visitsUncheckedUpdateWithoutLabsInput>
    create: XOR<visitsCreateWithoutLabsInput, visitsUncheckedCreateWithoutLabsInput>
    where?: visitsWhereInput
  }

  export type visitsUpdateToOneWithWhereWithoutLabsInput = {
    where?: visitsWhereInput
    data: XOR<visitsUpdateWithoutLabsInput, visitsUncheckedUpdateWithoutLabsInput>
  }

  export type visitsUpdateWithoutLabsInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneWithoutVisitsNestedInput
    provider?: providersUpdateOneWithoutVisitsNestedInput
    doctor?: doctorsUpdateOneWithoutVisitsNestedInput
    diagnoses?: diagnosesUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUpdateManyWithoutVisitNestedInput
    files?: filesUpdateManyWithoutVisitNestedInput
  }

  export type visitsUncheckedUpdateWithoutLabsInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: diagnosesUncheckedUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUncheckedUpdateManyWithoutVisitNestedInput
    files?: filesUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type visitsCreateWithoutFilesInput = {
    visit_id?: string
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    patient?: patientsCreateNestedOneWithoutVisitsInput
    provider?: providersCreateNestedOneWithoutVisitsInput
    doctor?: doctorsCreateNestedOneWithoutVisitsInput
    diagnoses?: diagnosesCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsCreateNestedManyWithoutVisitInput
    labs?: labsCreateNestedManyWithoutVisitInput
  }

  export type visitsUncheckedCreateWithoutFilesInput = {
    visit_id?: string
    patient_id?: string | null
    provider_id?: string | null
    doctor_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
    diagnoses?: diagnosesUncheckedCreateNestedManyWithoutVisitInput
    prescriptions?: prescriptionsUncheckedCreateNestedManyWithoutVisitInput
    labs?: labsUncheckedCreateNestedManyWithoutVisitInput
  }

  export type visitsCreateOrConnectWithoutFilesInput = {
    where: visitsWhereUniqueInput
    create: XOR<visitsCreateWithoutFilesInput, visitsUncheckedCreateWithoutFilesInput>
  }

  export type visitsUpsertWithoutFilesInput = {
    update: XOR<visitsUpdateWithoutFilesInput, visitsUncheckedUpdateWithoutFilesInput>
    create: XOR<visitsCreateWithoutFilesInput, visitsUncheckedCreateWithoutFilesInput>
    where?: visitsWhereInput
  }

  export type visitsUpdateToOneWithWhereWithoutFilesInput = {
    where?: visitsWhereInput
    data: XOR<visitsUpdateWithoutFilesInput, visitsUncheckedUpdateWithoutFilesInput>
  }

  export type visitsUpdateWithoutFilesInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneWithoutVisitsNestedInput
    provider?: providersUpdateOneWithoutVisitsNestedInput
    doctor?: doctorsUpdateOneWithoutVisitsNestedInput
    diagnoses?: diagnosesUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUpdateManyWithoutVisitNestedInput
    labs?: labsUpdateManyWithoutVisitNestedInput
  }

  export type visitsUncheckedUpdateWithoutFilesInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: diagnosesUncheckedUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUncheckedUpdateManyWithoutVisitNestedInput
    labs?: labsUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type patientsCreateWithoutAccess_controlsInput = {
    patient_id?: string
    wallet_did?: string | null
    full_name: string
    birth_date?: Date | string | null
    gender?: string | null
    blood_type?: string | null
    contact_phone?: string | null
    address?: string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    visits?: visitsCreateNestedManyWithoutPatientInput
    audit_logs?: audit_access_logsCreateNestedManyWithoutPatientInput
  }

  export type patientsUncheckedCreateWithoutAccess_controlsInput = {
    patient_id?: string
    wallet_did?: string | null
    full_name: string
    birth_date?: Date | string | null
    gender?: string | null
    blood_type?: string | null
    contact_phone?: string | null
    address?: string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    visits?: visitsUncheckedCreateNestedManyWithoutPatientInput
    audit_logs?: audit_access_logsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientsCreateOrConnectWithoutAccess_controlsInput = {
    where: patientsWhereUniqueInput
    create: XOR<patientsCreateWithoutAccess_controlsInput, patientsUncheckedCreateWithoutAccess_controlsInput>
  }

  export type patientsUpsertWithoutAccess_controlsInput = {
    update: XOR<patientsUpdateWithoutAccess_controlsInput, patientsUncheckedUpdateWithoutAccess_controlsInput>
    create: XOR<patientsCreateWithoutAccess_controlsInput, patientsUncheckedCreateWithoutAccess_controlsInput>
    where?: patientsWhereInput
  }

  export type patientsUpdateToOneWithWhereWithoutAccess_controlsInput = {
    where?: patientsWhereInput
    data: XOR<patientsUpdateWithoutAccess_controlsInput, patientsUncheckedUpdateWithoutAccess_controlsInput>
  }

  export type patientsUpdateWithoutAccess_controlsInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    wallet_did?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUpdateManyWithoutPatientNestedInput
    audit_logs?: audit_access_logsUpdateManyWithoutPatientNestedInput
  }

  export type patientsUncheckedUpdateWithoutAccess_controlsInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    wallet_did?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUncheckedUpdateManyWithoutPatientNestedInput
    audit_logs?: audit_access_logsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type patientsCreateWithoutAudit_logsInput = {
    patient_id?: string
    wallet_did?: string | null
    full_name: string
    birth_date?: Date | string | null
    gender?: string | null
    blood_type?: string | null
    contact_phone?: string | null
    address?: string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    visits?: visitsCreateNestedManyWithoutPatientInput
    access_controls?: access_controlsCreateNestedManyWithoutPatientInput
  }

  export type patientsUncheckedCreateWithoutAudit_logsInput = {
    patient_id?: string
    wallet_did?: string | null
    full_name: string
    birth_date?: Date | string | null
    gender?: string | null
    blood_type?: string | null
    contact_phone?: string | null
    address?: string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    visits?: visitsUncheckedCreateNestedManyWithoutPatientInput
    access_controls?: access_controlsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientsCreateOrConnectWithoutAudit_logsInput = {
    where: patientsWhereUniqueInput
    create: XOR<patientsCreateWithoutAudit_logsInput, patientsUncheckedCreateWithoutAudit_logsInput>
  }

  export type patientsUpsertWithoutAudit_logsInput = {
    update: XOR<patientsUpdateWithoutAudit_logsInput, patientsUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<patientsCreateWithoutAudit_logsInput, patientsUncheckedCreateWithoutAudit_logsInput>
    where?: patientsWhereInput
  }

  export type patientsUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: patientsWhereInput
    data: XOR<patientsUpdateWithoutAudit_logsInput, patientsUncheckedUpdateWithoutAudit_logsInput>
  }

  export type patientsUpdateWithoutAudit_logsInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    wallet_did?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUpdateManyWithoutPatientNestedInput
    access_controls?: access_controlsUpdateManyWithoutPatientNestedInput
  }

  export type patientsUncheckedUpdateWithoutAudit_logsInput = {
    patient_id?: StringFieldUpdateOperationsInput | string
    wallet_did?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: StringFieldUpdateOperationsInput | string
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    blood_type?: NullableStringFieldUpdateOperationsInput | string | null
    contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact?: NullableJsonNullValueInput | InputJsonValue
    insurance?: NullableJsonNullValueInput | InputJsonValue
    allergies?: NullableJsonNullValueInput | InputJsonValue
    chronic_conditions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUncheckedUpdateManyWithoutPatientNestedInput
    access_controls?: access_controlsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type visitsCreateManyPatientInput = {
    visit_id?: string
    provider_id?: string | null
    doctor_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
  }

  export type access_controlsCreateManyPatientInput = {
    ac_id?: string
    granted_to: string
    granted_by?: string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: Date | string | null
    valid_to?: Date | string | null
    on_chain_tx?: string | null
    created_at?: Date | string
  }

  export type audit_access_logsCreateManyPatientInput = {
    log_id?: string
    accessed_by: string
    resource_type?: string | null
    resource_id?: string | null
    access_timestamp?: Date | string
    on_chain_anchor?: string | null
    created_at?: Date | string
  }

  export type visitsUpdateWithoutPatientInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: providersUpdateOneWithoutVisitsNestedInput
    doctor?: doctorsUpdateOneWithoutVisitsNestedInput
    diagnoses?: diagnosesUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUpdateManyWithoutVisitNestedInput
    labs?: labsUpdateManyWithoutVisitNestedInput
    files?: filesUpdateManyWithoutVisitNestedInput
  }

  export type visitsUncheckedUpdateWithoutPatientInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: diagnosesUncheckedUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUncheckedUpdateManyWithoutVisitNestedInput
    labs?: labsUncheckedUpdateManyWithoutVisitNestedInput
    files?: filesUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type visitsUncheckedUpdateManyWithoutPatientInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type access_controlsUpdateWithoutPatientInput = {
    ac_id?: StringFieldUpdateOperationsInput | string
    granted_to?: StringFieldUpdateOperationsInput | string
    granted_by?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    on_chain_tx?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type access_controlsUncheckedUpdateWithoutPatientInput = {
    ac_id?: StringFieldUpdateOperationsInput | string
    granted_to?: StringFieldUpdateOperationsInput | string
    granted_by?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    on_chain_tx?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type access_controlsUncheckedUpdateManyWithoutPatientInput = {
    ac_id?: StringFieldUpdateOperationsInput | string
    granted_to?: StringFieldUpdateOperationsInput | string
    granted_by?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableJsonNullValueInput | InputJsonValue
    valid_from?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valid_to?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    on_chain_tx?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_access_logsUpdateWithoutPatientInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    accessed_by?: StringFieldUpdateOperationsInput | string
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    on_chain_anchor?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_access_logsUncheckedUpdateWithoutPatientInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    accessed_by?: StringFieldUpdateOperationsInput | string
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    on_chain_anchor?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type audit_access_logsUncheckedUpdateManyWithoutPatientInput = {
    log_id?: StringFieldUpdateOperationsInput | string
    accessed_by?: StringFieldUpdateOperationsInput | string
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    access_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    on_chain_anchor?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type doctorsCreateManyProviderInput = {
    doctor_id?: string
    full_name: string
    specialty?: string | null
    license_no?: string | null
    contact?: string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type visitsCreateManyProviderInput = {
    visit_id?: string
    patient_id?: string | null
    doctor_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
  }

  export type doctorsUpdateWithoutProviderInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    license_no?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUpdateManyWithoutDoctorNestedInput
    prescriptions?: prescriptionsUpdateManyWithoutDoctorNestedInput
  }

  export type doctorsUncheckedUpdateWithoutProviderInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    license_no?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: visitsUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: prescriptionsUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type doctorsUncheckedUpdateManyWithoutProviderInput = {
    doctor_id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    license_no?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    profile_meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type visitsUpdateWithoutProviderInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneWithoutVisitsNestedInput
    doctor?: doctorsUpdateOneWithoutVisitsNestedInput
    diagnoses?: diagnosesUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUpdateManyWithoutVisitNestedInput
    labs?: labsUpdateManyWithoutVisitNestedInput
    files?: filesUpdateManyWithoutVisitNestedInput
  }

  export type visitsUncheckedUpdateWithoutProviderInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: diagnosesUncheckedUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUncheckedUpdateManyWithoutVisitNestedInput
    labs?: labsUncheckedUpdateManyWithoutVisitNestedInput
    files?: filesUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type visitsUncheckedUpdateManyWithoutProviderInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    doctor_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type visitsCreateManyDoctorInput = {
    visit_id?: string
    patient_id?: string | null
    provider_id?: string | null
    visit_timestamp?: Date | string
    visit_type?: string | null
    chief_complaint?: string | null
    clinical_notes_hash?: string | null
    clinical_notes_enc?: string | null
    billing_id?: string | null
    created_at?: Date | string
  }

  export type prescriptionsCreateManyDoctorInput = {
    presc_id?: string
    visit_id?: string | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_hash?: string | null
    created_at?: Date | string
  }

  export type visitsUpdateWithoutDoctorInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientsUpdateOneWithoutVisitsNestedInput
    provider?: providersUpdateOneWithoutVisitsNestedInput
    diagnoses?: diagnosesUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUpdateManyWithoutVisitNestedInput
    labs?: labsUpdateManyWithoutVisitNestedInput
    files?: filesUpdateManyWithoutVisitNestedInput
  }

  export type visitsUncheckedUpdateWithoutDoctorInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnoses?: diagnosesUncheckedUpdateManyWithoutVisitNestedInput
    prescriptions?: prescriptionsUncheckedUpdateManyWithoutVisitNestedInput
    labs?: labsUncheckedUpdateManyWithoutVisitNestedInput
    files?: filesUncheckedUpdateManyWithoutVisitNestedInput
  }

  export type visitsUncheckedUpdateManyWithoutDoctorInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    patient_id?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    visit_timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    visit_type?: NullableStringFieldUpdateOperationsInput | string | null
    chief_complaint?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_hash?: NullableStringFieldUpdateOperationsInput | string | null
    clinical_notes_enc?: NullableStringFieldUpdateOperationsInput | string | null
    billing_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionsUpdateWithoutDoctorInput = {
    presc_id?: StringFieldUpdateOperationsInput | string
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    visit?: visitsUpdateOneWithoutPrescriptionsNestedInput
  }

  export type prescriptionsUncheckedUpdateWithoutDoctorInput = {
    presc_id?: StringFieldUpdateOperationsInput | string
    visit_id?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionsUncheckedUpdateManyWithoutDoctorInput = {
    presc_id?: StringFieldUpdateOperationsInput | string
    visit_id?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diagnosesCreateManyVisitInput = {
    dx_id?: string
    code_icd10?: string | null
    description?: string | null
    severity?: string | null
    created_at?: Date | string
  }

  export type prescriptionsCreateManyVisitInput = {
    presc_id?: string
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_issued_by?: string | null
    presc_hash?: string | null
    created_at?: Date | string
  }

  export type labsCreateManyVisitInput = {
    lab_id?: string
    lab_type?: string | null
    results_enc?: string | null
    results_hash?: string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type filesCreateManyVisitInput = {
    file_id?: string
    owner_id: string
    file_type?: string | null
    storage_path?: string | null
    file_hash?: string | null
    created_at?: Date | string
  }

  export type diagnosesUpdateWithoutVisitInput = {
    dx_id?: StringFieldUpdateOperationsInput | string
    code_icd10?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diagnosesUncheckedUpdateWithoutVisitInput = {
    dx_id?: StringFieldUpdateOperationsInput | string
    code_icd10?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diagnosesUncheckedUpdateManyWithoutVisitInput = {
    dx_id?: StringFieldUpdateOperationsInput | string
    code_icd10?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionsUpdateWithoutVisitInput = {
    presc_id?: StringFieldUpdateOperationsInput | string
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: doctorsUpdateOneWithoutPrescriptionsNestedInput
  }

  export type prescriptionsUncheckedUpdateWithoutVisitInput = {
    presc_id?: StringFieldUpdateOperationsInput | string
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_issued_by?: NullableStringFieldUpdateOperationsInput | string | null
    presc_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionsUncheckedUpdateManyWithoutVisitInput = {
    presc_id?: StringFieldUpdateOperationsInput | string
    medications?: NullableJsonNullValueInput | InputJsonValue
    presc_issued_by?: NullableStringFieldUpdateOperationsInput | string | null
    presc_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type labsUpdateWithoutVisitInput = {
    lab_id?: StringFieldUpdateOperationsInput | string
    lab_type?: NullableStringFieldUpdateOperationsInput | string | null
    results_enc?: NullableStringFieldUpdateOperationsInput | string | null
    results_hash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type labsUncheckedUpdateWithoutVisitInput = {
    lab_id?: StringFieldUpdateOperationsInput | string
    lab_type?: NullableStringFieldUpdateOperationsInput | string | null
    results_enc?: NullableStringFieldUpdateOperationsInput | string | null
    results_hash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type labsUncheckedUpdateManyWithoutVisitInput = {
    lab_id?: StringFieldUpdateOperationsInput | string
    lab_type?: NullableStringFieldUpdateOperationsInput | string | null
    results_enc?: NullableStringFieldUpdateOperationsInput | string | null
    results_hash?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filesUpdateWithoutVisitInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    file_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filesUncheckedUpdateWithoutVisitInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    file_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type filesUncheckedUpdateManyWithoutVisitInput = {
    file_id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    file_hash?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
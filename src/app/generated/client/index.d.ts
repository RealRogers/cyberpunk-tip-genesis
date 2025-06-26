
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model ActivityFeedItem
 * 
 */
export type ActivityFeedItem = $Result.DefaultSelection<Prisma.$ActivityFeedItemPayload>
/**
 * Model DailyMission
 * 
 */
export type DailyMission = $Result.DefaultSelection<Prisma.$DailyMissionPayload>
/**
 * Model NFTReward
 * 
 */
export type NFTReward = $Result.DefaultSelection<Prisma.$NFTRewardPayload>
/**
 * Model Season
 * 
 */
export type Season = $Result.DefaultSelection<Prisma.$SeasonPayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model TemporaryEvent
 * 
 */
export type TemporaryEvent = $Result.DefaultSelection<Prisma.$TemporaryEventPayload>
/**
 * Model Reputation
 * 
 */
export type Reputation = $Result.DefaultSelection<Prisma.$ReputationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserTier: {
  CYBER_NOVICE: 'CYBER_NOVICE',
  DIGITAL_REBEL: 'DIGITAL_REBEL',
  CYBER_PATRON: 'CYBER_PATRON',
  NEURAL_LEGEND: 'NEURAL_LEGEND'
};

export type UserTier = (typeof UserTier)[keyof typeof UserTier]


export const FeedType: {
  tip: 'tip',
  comment: 'comment',
  follow: 'follow',
  achievement: 'achievement',
  mission: 'mission'
};

export type FeedType = (typeof FeedType)[keyof typeof FeedType]


export const Rarity: {
  common: 'common',
  rare: 'rare',
  epic: 'epic',
  legendary: 'legendary'
};

export type Rarity = (typeof Rarity)[keyof typeof Rarity]


export const AchievementCategory: {
  social: 'social',
  tipping: 'tipping',
  engagement: 'engagement',
  milestone: 'milestone'
};

export type AchievementCategory = (typeof AchievementCategory)[keyof typeof AchievementCategory]


export const RewardType: {
  xp: 'xp',
  sp: 'sp',
  badge: 'badge',
  nft: 'nft'
};

export type RewardType = (typeof RewardType)[keyof typeof RewardType]


export const MissionType: {
  tip: 'tip',
  comment: 'comment',
  follow: 'follow',
  login: 'login'
};

export type MissionType = (typeof MissionType)[keyof typeof MissionType]

}

export type UserTier = $Enums.UserTier

export const UserTier: typeof $Enums.UserTier

export type FeedType = $Enums.FeedType

export const FeedType: typeof $Enums.FeedType

export type Rarity = $Enums.Rarity

export const Rarity: typeof $Enums.Rarity

export type AchievementCategory = $Enums.AchievementCategory

export const AchievementCategory: typeof $Enums.AchievementCategory

export type RewardType = $Enums.RewardType

export const RewardType: typeof $Enums.RewardType

export type MissionType = $Enums.MissionType

export const MissionType: typeof $Enums.MissionType

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
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityFeedItem`: Exposes CRUD operations for the **ActivityFeedItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityFeedItems
    * const activityFeedItems = await prisma.activityFeedItem.findMany()
    * ```
    */
  get activityFeedItem(): Prisma.ActivityFeedItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyMission`: Exposes CRUD operations for the **DailyMission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyMissions
    * const dailyMissions = await prisma.dailyMission.findMany()
    * ```
    */
  get dailyMission(): Prisma.DailyMissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nFTReward`: Exposes CRUD operations for the **NFTReward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NFTRewards
    * const nFTRewards = await prisma.nFTReward.findMany()
    * ```
    */
  get nFTReward(): Prisma.NFTRewardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.season`: Exposes CRUD operations for the **Season** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.season.findMany()
    * ```
    */
  get season(): Prisma.SeasonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temporaryEvent`: Exposes CRUD operations for the **TemporaryEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemporaryEvents
    * const temporaryEvents = await prisma.temporaryEvent.findMany()
    * ```
    */
  get temporaryEvent(): Prisma.TemporaryEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reputation`: Exposes CRUD operations for the **Reputation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reputations
    * const reputations = await prisma.reputation.findMany()
    * ```
    */
  get reputation(): Prisma.ReputationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Artist: 'Artist',
    Donation: 'Donation',
    Comment: 'Comment',
    ActivityFeedItem: 'ActivityFeedItem',
    DailyMission: 'DailyMission',
    NFTReward: 'NFTReward',
    Season: 'Season',
    Badge: 'Badge',
    Achievement: 'Achievement',
    TemporaryEvent: 'TemporaryEvent',
    Reputation: 'Reputation'
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
      modelProps: "user" | "artist" | "donation" | "comment" | "activityFeedItem" | "dailyMission" | "nFTReward" | "season" | "badge" | "achievement" | "temporaryEvent" | "reputation"
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
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      ActivityFeedItem: {
        payload: Prisma.$ActivityFeedItemPayload<ExtArgs>
        fields: Prisma.ActivityFeedItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFeedItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityFeedItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFeedItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityFeedItemPayload>
          }
          findFirst: {
            args: Prisma.ActivityFeedItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityFeedItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFeedItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityFeedItemPayload>
          }
          findMany: {
            args: Prisma.ActivityFeedItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityFeedItemPayload>[]
          }
          create: {
            args: Prisma.ActivityFeedItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityFeedItemPayload>
          }
          createMany: {
            args: Prisma.ActivityFeedItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityFeedItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityFeedItemPayload>[]
          }
          delete: {
            args: Prisma.ActivityFeedItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityFeedItemPayload>
          }
          update: {
            args: Prisma.ActivityFeedItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityFeedItemPayload>
          }
          deleteMany: {
            args: Prisma.ActivityFeedItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityFeedItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityFeedItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityFeedItemPayload>[]
          }
          upsert: {
            args: Prisma.ActivityFeedItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityFeedItemPayload>
          }
          aggregate: {
            args: Prisma.ActivityFeedItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityFeedItem>
          }
          groupBy: {
            args: Prisma.ActivityFeedItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityFeedItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityFeedItemCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityFeedItemCountAggregateOutputType> | number
          }
        }
      }
      DailyMission: {
        payload: Prisma.$DailyMissionPayload<ExtArgs>
        fields: Prisma.DailyMissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyMissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyMissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMissionPayload>
          }
          findFirst: {
            args: Prisma.DailyMissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyMissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMissionPayload>
          }
          findMany: {
            args: Prisma.DailyMissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMissionPayload>[]
          }
          create: {
            args: Prisma.DailyMissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMissionPayload>
          }
          createMany: {
            args: Prisma.DailyMissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyMissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMissionPayload>[]
          }
          delete: {
            args: Prisma.DailyMissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMissionPayload>
          }
          update: {
            args: Prisma.DailyMissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMissionPayload>
          }
          deleteMany: {
            args: Prisma.DailyMissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyMissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyMissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMissionPayload>[]
          }
          upsert: {
            args: Prisma.DailyMissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMissionPayload>
          }
          aggregate: {
            args: Prisma.DailyMissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyMission>
          }
          groupBy: {
            args: Prisma.DailyMissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyMissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyMissionCountArgs<ExtArgs>
            result: $Utils.Optional<DailyMissionCountAggregateOutputType> | number
          }
        }
      }
      NFTReward: {
        payload: Prisma.$NFTRewardPayload<ExtArgs>
        fields: Prisma.NFTRewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NFTRewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTRewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NFTRewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTRewardPayload>
          }
          findFirst: {
            args: Prisma.NFTRewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTRewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NFTRewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTRewardPayload>
          }
          findMany: {
            args: Prisma.NFTRewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTRewardPayload>[]
          }
          create: {
            args: Prisma.NFTRewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTRewardPayload>
          }
          createMany: {
            args: Prisma.NFTRewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NFTRewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTRewardPayload>[]
          }
          delete: {
            args: Prisma.NFTRewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTRewardPayload>
          }
          update: {
            args: Prisma.NFTRewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTRewardPayload>
          }
          deleteMany: {
            args: Prisma.NFTRewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NFTRewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NFTRewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTRewardPayload>[]
          }
          upsert: {
            args: Prisma.NFTRewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFTRewardPayload>
          }
          aggregate: {
            args: Prisma.NFTRewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNFTReward>
          }
          groupBy: {
            args: Prisma.NFTRewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<NFTRewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.NFTRewardCountArgs<ExtArgs>
            result: $Utils.Optional<NFTRewardCountAggregateOutputType> | number
          }
        }
      }
      Season: {
        payload: Prisma.$SeasonPayload<ExtArgs>
        fields: Prisma.SeasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findFirst: {
            args: Prisma.SeasonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findMany: {
            args: Prisma.SeasonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          create: {
            args: Prisma.SeasonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          createMany: {
            args: Prisma.SeasonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeasonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          delete: {
            args: Prisma.SeasonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          update: {
            args: Prisma.SeasonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          deleteMany: {
            args: Prisma.SeasonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeasonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          upsert: {
            args: Prisma.SeasonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          aggregate: {
            args: Prisma.SeasonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeason>
          }
          groupBy: {
            args: Prisma.SeasonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonCountArgs<ExtArgs>
            result: $Utils.Optional<SeasonCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchievementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      TemporaryEvent: {
        payload: Prisma.$TemporaryEventPayload<ExtArgs>
        fields: Prisma.TemporaryEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemporaryEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemporaryEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryEventPayload>
          }
          findFirst: {
            args: Prisma.TemporaryEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemporaryEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryEventPayload>
          }
          findMany: {
            args: Prisma.TemporaryEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryEventPayload>[]
          }
          create: {
            args: Prisma.TemporaryEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryEventPayload>
          }
          createMany: {
            args: Prisma.TemporaryEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemporaryEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryEventPayload>[]
          }
          delete: {
            args: Prisma.TemporaryEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryEventPayload>
          }
          update: {
            args: Prisma.TemporaryEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryEventPayload>
          }
          deleteMany: {
            args: Prisma.TemporaryEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemporaryEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemporaryEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryEventPayload>[]
          }
          upsert: {
            args: Prisma.TemporaryEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemporaryEventPayload>
          }
          aggregate: {
            args: Prisma.TemporaryEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemporaryEvent>
          }
          groupBy: {
            args: Prisma.TemporaryEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemporaryEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemporaryEventCountArgs<ExtArgs>
            result: $Utils.Optional<TemporaryEventCountAggregateOutputType> | number
          }
        }
      }
      Reputation: {
        payload: Prisma.$ReputationPayload<ExtArgs>
        fields: Prisma.ReputationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReputationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReputationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationPayload>
          }
          findFirst: {
            args: Prisma.ReputationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReputationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationPayload>
          }
          findMany: {
            args: Prisma.ReputationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationPayload>[]
          }
          create: {
            args: Prisma.ReputationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationPayload>
          }
          createMany: {
            args: Prisma.ReputationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReputationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationPayload>[]
          }
          delete: {
            args: Prisma.ReputationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationPayload>
          }
          update: {
            args: Prisma.ReputationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationPayload>
          }
          deleteMany: {
            args: Prisma.ReputationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReputationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReputationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationPayload>[]
          }
          upsert: {
            args: Prisma.ReputationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationPayload>
          }
          aggregate: {
            args: Prisma.ReputationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReputation>
          }
          groupBy: {
            args: Prisma.ReputationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReputationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReputationCountArgs<ExtArgs>
            result: $Utils.Optional<ReputationCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    artist?: ArtistOmit
    donation?: DonationOmit
    comment?: CommentOmit
    activityFeedItem?: ActivityFeedItemOmit
    dailyMission?: DailyMissionOmit
    nFTReward?: NFTRewardOmit
    season?: SeasonOmit
    badge?: BadgeOmit
    achievement?: AchievementOmit
    temporaryEvent?: TemporaryEventOmit
    reputation?: ReputationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    nftRewards: number
    comments: number
    donations: number
    activityFeedItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nftRewards?: boolean | UserCountOutputTypeCountNftRewardsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    donations?: boolean | UserCountOutputTypeCountDonationsArgs
    activityFeedItems?: boolean | UserCountOutputTypeCountActivityFeedItemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNftRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NFTRewardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityFeedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityFeedItemWhereInput
  }


  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    comments: number
    donations: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ArtistCountOutputTypeCountCommentsArgs
    donations?: boolean | ArtistCountOutputTypeCountDonationsArgs
  }

  // Custom InputTypes
  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }


  /**
   * Count Type SeasonCountOutputType
   */

  export type SeasonCountOutputType = {
    rewards: number
  }

  export type SeasonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rewards?: boolean | SeasonCountOutputTypeCountRewardsArgs
  }

  // Custom InputTypes
  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonCountOutputType
     */
    select?: SeasonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NFTRewardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    stakingPower: number | null
    reputation: number | null
    following: number | null
    totalTipsGiven: number | null
    totalCommentsPosted: number | null
    dailyMissionsCompleted: number | null
    streakDays: number | null
  }

  export type UserSumAggregateOutputType = {
    stakingPower: number | null
    reputation: number | null
    following: number[]
    totalTipsGiven: number | null
    totalCommentsPosted: number | null
    dailyMissionsCompleted: number | null
    streakDays: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    avatar: string | null
    stakingPower: number | null
    reputation: number | null
    tier: $Enums.UserTier | null
    totalTipsGiven: number | null
    totalCommentsPosted: number | null
    dailyMissionsCompleted: number | null
    streakDays: number | null
    wallet: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    avatar: string | null
    stakingPower: number | null
    reputation: number | null
    tier: $Enums.UserTier | null
    totalTipsGiven: number | null
    totalCommentsPosted: number | null
    dailyMissionsCompleted: number | null
    streakDays: number | null
    wallet: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    avatar: number
    stakingPower: number
    reputation: number
    tier: number
    following: number
    followers: number
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    stakingPower?: true
    reputation?: true
    following?: true
    totalTipsGiven?: true
    totalCommentsPosted?: true
    dailyMissionsCompleted?: true
    streakDays?: true
  }

  export type UserSumAggregateInputType = {
    stakingPower?: true
    reputation?: true
    following?: true
    totalTipsGiven?: true
    totalCommentsPosted?: true
    dailyMissionsCompleted?: true
    streakDays?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    stakingPower?: true
    reputation?: true
    tier?: true
    totalTipsGiven?: true
    totalCommentsPosted?: true
    dailyMissionsCompleted?: true
    streakDays?: true
    wallet?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    stakingPower?: true
    reputation?: true
    tier?: true
    totalTipsGiven?: true
    totalCommentsPosted?: true
    dailyMissionsCompleted?: true
    streakDays?: true
    wallet?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    stakingPower?: true
    reputation?: true
    tier?: true
    following?: true
    followers?: true
    totalTipsGiven?: true
    totalCommentsPosted?: true
    dailyMissionsCompleted?: true
    streakDays?: true
    wallet?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    avatar: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following: number[]
    followers: string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    avatar?: boolean
    stakingPower?: boolean
    reputation?: boolean
    tier?: boolean
    following?: boolean
    followers?: boolean
    totalTipsGiven?: boolean
    totalCommentsPosted?: boolean
    dailyMissionsCompleted?: boolean
    streakDays?: boolean
    wallet?: boolean
    nftRewards?: boolean | User$nftRewardsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    activityFeedItems?: boolean | User$activityFeedItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    avatar?: boolean
    stakingPower?: boolean
    reputation?: boolean
    tier?: boolean
    following?: boolean
    followers?: boolean
    totalTipsGiven?: boolean
    totalCommentsPosted?: boolean
    dailyMissionsCompleted?: boolean
    streakDays?: boolean
    wallet?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    avatar?: boolean
    stakingPower?: boolean
    reputation?: boolean
    tier?: boolean
    following?: boolean
    followers?: boolean
    totalTipsGiven?: boolean
    totalCommentsPosted?: boolean
    dailyMissionsCompleted?: boolean
    streakDays?: boolean
    wallet?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    avatar?: boolean
    stakingPower?: boolean
    reputation?: boolean
    tier?: boolean
    following?: boolean
    followers?: boolean
    totalTipsGiven?: boolean
    totalCommentsPosted?: boolean
    dailyMissionsCompleted?: boolean
    streakDays?: boolean
    wallet?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "avatar" | "stakingPower" | "reputation" | "tier" | "following" | "followers" | "totalTipsGiven" | "totalCommentsPosted" | "dailyMissionsCompleted" | "streakDays" | "wallet", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nftRewards?: boolean | User$nftRewardsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    activityFeedItems?: boolean | User$activityFeedItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      nftRewards: Prisma.$NFTRewardPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      donations: Prisma.$DonationPayload<ExtArgs>[]
      activityFeedItems: Prisma.$ActivityFeedItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      avatar: string | null
      stakingPower: number
      reputation: number
      tier: $Enums.UserTier
      following: number[]
      followers: string[]
      totalTipsGiven: number
      totalCommentsPosted: number
      dailyMissionsCompleted: number
      streakDays: number
      wallet: string | null
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
    nftRewards<T extends User$nftRewardsArgs<ExtArgs> = {}>(args?: Subset<T, User$nftRewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donations<T extends User$donationsArgs<ExtArgs> = {}>(args?: Subset<T, User$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityFeedItems<T extends User$activityFeedItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityFeedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly stakingPower: FieldRef<"User", 'Int'>
    readonly reputation: FieldRef<"User", 'Int'>
    readonly tier: FieldRef<"User", 'UserTier'>
    readonly following: FieldRef<"User", 'Int[]'>
    readonly followers: FieldRef<"User", 'String[]'>
    readonly totalTipsGiven: FieldRef<"User", 'Int'>
    readonly totalCommentsPosted: FieldRef<"User", 'Int'>
    readonly dailyMissionsCompleted: FieldRef<"User", 'Int'>
    readonly streakDays: FieldRef<"User", 'Int'>
    readonly wallet: FieldRef<"User", 'String'>
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
   * User.nftRewards
   */
  export type User$nftRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
    where?: NFTRewardWhereInput
    orderBy?: NFTRewardOrderByWithRelationInput | NFTRewardOrderByWithRelationInput[]
    cursor?: NFTRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NFTRewardScalarFieldEnum | NFTRewardScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.donations
   */
  export type User$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * User.activityFeedItems
   */
  export type User$activityFeedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemInclude<ExtArgs> | null
    where?: ActivityFeedItemWhereInput
    orderBy?: ActivityFeedItemOrderByWithRelationInput | ActivityFeedItemOrderByWithRelationInput[]
    cursor?: ActivityFeedItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityFeedItemScalarFieldEnum | ActivityFeedItemScalarFieldEnum[]
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
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    id: number | null
    stakingPower: number | null
    totalTips: number | null
    rank: number | null
  }

  export type ArtistSumAggregateOutputType = {
    id: number | null
    stakingPower: number | null
    totalTips: number | null
    rank: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: number | null
    name: string | null
    bio: string | null
    image: string | null
    stakingPower: number | null
    totalTips: number | null
    rank: number | null
    genre: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    bio: string | null
    image: string | null
    stakingPower: number | null
    totalTips: number | null
    rank: number | null
    genre: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    bio: number
    image: number
    stakingPower: number
    totalTips: number
    rank: number
    genre: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    id?: true
    stakingPower?: true
    totalTips?: true
    rank?: true
  }

  export type ArtistSumAggregateInputType = {
    id?: true
    stakingPower?: true
    totalTips?: true
    rank?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    image?: true
    stakingPower?: true
    totalTips?: true
    rank?: true
    genre?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    image?: true
    stakingPower?: true
    totalTips?: true
    rank?: true
    genre?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    image?: true
    stakingPower?: true
    totalTips?: true
    rank?: true
    genre?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: number
    name: string
    bio: string
    image: string
    stakingPower: number
    totalTips: number
    rank: number
    genre: string
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    stakingPower?: boolean
    totalTips?: boolean
    rank?: boolean
    genre?: boolean
    comments?: boolean | Artist$commentsArgs<ExtArgs>
    donations?: boolean | Artist$donationsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    stakingPower?: boolean
    totalTips?: boolean
    rank?: boolean
    genre?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    stakingPower?: boolean
    totalTips?: boolean
    rank?: boolean
    genre?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    bio?: boolean
    image?: boolean
    stakingPower?: boolean
    totalTips?: boolean
    rank?: boolean
    genre?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bio" | "image" | "stakingPower" | "totalTips" | "rank" | "genre", ExtArgs["result"]["artist"]>
  export type ArtistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Artist$commentsArgs<ExtArgs>
    donations?: boolean | Artist$donationsArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      donations: Prisma.$DonationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      bio: string
      image: string
      stakingPower: number
      totalTips: number
      rank: number
      genre: string
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Artist$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donations<T extends Artist$donationsArgs<ExtArgs> = {}>(args?: Subset<T, Artist$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'Int'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly bio: FieldRef<"Artist", 'String'>
    readonly image: FieldRef<"Artist", 'String'>
    readonly stakingPower: FieldRef<"Artist", 'Int'>
    readonly totalTips: FieldRef<"Artist", 'Int'>
    readonly rank: FieldRef<"Artist", 'Int'>
    readonly genre: FieldRef<"Artist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist.comments
   */
  export type Artist$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Artist.donations
   */
  export type Artist$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistInclude<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    id: number | null
    artistId: number | null
    stakingPower: number | null
  }

  export type DonationSumAggregateOutputType = {
    id: number | null
    artistId: number | null
    stakingPower: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: number | null
    artistId: number | null
    donorId: string | null
    amount: string | null
    message: string | null
    timestamp: string | null
    stakingPower: number | null
  }

  export type DonationMaxAggregateOutputType = {
    id: number | null
    artistId: number | null
    donorId: string | null
    amount: string | null
    message: string | null
    timestamp: string | null
    stakingPower: number | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    artistId: number
    donorId: number
    amount: number
    message: number
    timestamp: number
    stakingPower: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    id?: true
    artistId?: true
    stakingPower?: true
  }

  export type DonationSumAggregateInputType = {
    id?: true
    artistId?: true
    stakingPower?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    artistId?: true
    donorId?: true
    amount?: true
    message?: true
    timestamp?: true
    stakingPower?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    artistId?: true
    donorId?: true
    amount?: true
    message?: true
    timestamp?: true
    stakingPower?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    artistId?: true
    donorId?: true
    amount?: true
    message?: true
    timestamp?: true
    stakingPower?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: number
    artistId: number
    donorId: string
    amount: string
    message: string
    timestamp: string
    stakingPower: number
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistId?: boolean
    donorId?: boolean
    amount?: boolean
    message?: boolean
    timestamp?: boolean
    stakingPower?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistId?: boolean
    donorId?: boolean
    amount?: boolean
    message?: boolean
    timestamp?: boolean
    stakingPower?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistId?: boolean
    donorId?: boolean
    amount?: boolean
    message?: boolean
    timestamp?: boolean
    stakingPower?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    artistId?: boolean
    donorId?: boolean
    amount?: boolean
    message?: boolean
    timestamp?: boolean
    stakingPower?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "artistId" | "donorId" | "amount" | "message" | "timestamp" | "stakingPower", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    donor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      artist: Prisma.$ArtistPayload<ExtArgs>
      donor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      artistId: number
      donorId: string
      amount: string
      message: string
      timestamp: string
      stakingPower: number
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {DonationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {DonationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
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
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
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
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    donor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'Int'>
    readonly artistId: FieldRef<"Donation", 'Int'>
    readonly donorId: FieldRef<"Donation", 'String'>
    readonly amount: FieldRef<"Donation", 'String'>
    readonly message: FieldRef<"Donation", 'String'>
    readonly timestamp: FieldRef<"Donation", 'String'>
    readonly stakingPower: FieldRef<"Donation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation createManyAndReturn
   */
  export type DonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation updateManyAndReturn
   */
  export type DonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    artistId: number | null
    likes: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    artistId: number | null
    likes: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    artistId: number | null
    userId: string | null
    username: string | null
    message: string | null
    timestamp: string | null
    likes: number | null
    avatar: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    artistId: number | null
    userId: string | null
    username: string | null
    message: string | null
    timestamp: string | null
    likes: number | null
    avatar: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    artistId: number
    userId: number
    username: number
    message: number
    timestamp: number
    likes: number
    avatar: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    artistId?: true
    likes?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    artistId?: true
    likes?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    artistId?: true
    userId?: true
    username?: true
    message?: true
    timestamp?: true
    likes?: true
    avatar?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    artistId?: true
    userId?: true
    username?: true
    message?: true
    timestamp?: true
    likes?: true
    avatar?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    artistId?: true
    userId?: true
    username?: true
    message?: true
    timestamp?: true
    likes?: true
    avatar?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    artistId: number
    userId: string
    username: string
    message: string
    timestamp: string
    likes: number
    avatar: string | null
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistId?: boolean
    userId?: boolean
    username?: boolean
    message?: boolean
    timestamp?: boolean
    likes?: boolean
    avatar?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistId?: boolean
    userId?: boolean
    username?: boolean
    message?: boolean
    timestamp?: boolean
    likes?: boolean
    avatar?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistId?: boolean
    userId?: boolean
    username?: boolean
    message?: boolean
    timestamp?: boolean
    likes?: boolean
    avatar?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    artistId?: boolean
    userId?: boolean
    username?: boolean
    message?: boolean
    timestamp?: boolean
    likes?: boolean
    avatar?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "artistId" | "userId" | "username" | "message" | "timestamp" | "likes" | "avatar", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      artist: Prisma.$ArtistPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      artistId: number
      userId: string
      username: string
      message: string
      timestamp: string
      likes: number
      avatar: string | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly artistId: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly username: FieldRef<"Comment", 'String'>
    readonly message: FieldRef<"Comment", 'String'>
    readonly timestamp: FieldRef<"Comment", 'String'>
    readonly likes: FieldRef<"Comment", 'Int'>
    readonly avatar: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model ActivityFeedItem
   */

  export type AggregateActivityFeedItem = {
    _count: ActivityFeedItemCountAggregateOutputType | null
    _avg: ActivityFeedItemAvgAggregateOutputType | null
    _sum: ActivityFeedItemSumAggregateOutputType | null
    _min: ActivityFeedItemMinAggregateOutputType | null
    _max: ActivityFeedItemMaxAggregateOutputType | null
  }

  export type ActivityFeedItemAvgAggregateOutputType = {
    id: number | null
    artistId: number | null
  }

  export type ActivityFeedItemSumAggregateOutputType = {
    id: number | null
    artistId: number | null
  }

  export type ActivityFeedItemMinAggregateOutputType = {
    id: number | null
    type: $Enums.FeedType | null
    userId: string | null
    artistId: number | null
    artistName: string | null
    amount: string | null
    message: string | null
    timestamp: string | null
    icon: string | null
  }

  export type ActivityFeedItemMaxAggregateOutputType = {
    id: number | null
    type: $Enums.FeedType | null
    userId: string | null
    artistId: number | null
    artistName: string | null
    amount: string | null
    message: string | null
    timestamp: string | null
    icon: string | null
  }

  export type ActivityFeedItemCountAggregateOutputType = {
    id: number
    type: number
    userId: number
    artistId: number
    artistName: number
    amount: number
    message: number
    timestamp: number
    icon: number
    _all: number
  }


  export type ActivityFeedItemAvgAggregateInputType = {
    id?: true
    artistId?: true
  }

  export type ActivityFeedItemSumAggregateInputType = {
    id?: true
    artistId?: true
  }

  export type ActivityFeedItemMinAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    artistId?: true
    artistName?: true
    amount?: true
    message?: true
    timestamp?: true
    icon?: true
  }

  export type ActivityFeedItemMaxAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    artistId?: true
    artistName?: true
    amount?: true
    message?: true
    timestamp?: true
    icon?: true
  }

  export type ActivityFeedItemCountAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    artistId?: true
    artistName?: true
    amount?: true
    message?: true
    timestamp?: true
    icon?: true
    _all?: true
  }

  export type ActivityFeedItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityFeedItem to aggregate.
     */
    where?: ActivityFeedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityFeedItems to fetch.
     */
    orderBy?: ActivityFeedItemOrderByWithRelationInput | ActivityFeedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityFeedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityFeedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityFeedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityFeedItems
    **/
    _count?: true | ActivityFeedItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityFeedItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityFeedItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityFeedItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityFeedItemMaxAggregateInputType
  }

  export type GetActivityFeedItemAggregateType<T extends ActivityFeedItemAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityFeedItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityFeedItem[P]>
      : GetScalarType<T[P], AggregateActivityFeedItem[P]>
  }




  export type ActivityFeedItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityFeedItemWhereInput
    orderBy?: ActivityFeedItemOrderByWithAggregationInput | ActivityFeedItemOrderByWithAggregationInput[]
    by: ActivityFeedItemScalarFieldEnum[] | ActivityFeedItemScalarFieldEnum
    having?: ActivityFeedItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityFeedItemCountAggregateInputType | true
    _avg?: ActivityFeedItemAvgAggregateInputType
    _sum?: ActivityFeedItemSumAggregateInputType
    _min?: ActivityFeedItemMinAggregateInputType
    _max?: ActivityFeedItemMaxAggregateInputType
  }

  export type ActivityFeedItemGroupByOutputType = {
    id: number
    type: $Enums.FeedType
    userId: string
    artistId: number | null
    artistName: string | null
    amount: string | null
    message: string | null
    timestamp: string
    icon: string | null
    _count: ActivityFeedItemCountAggregateOutputType | null
    _avg: ActivityFeedItemAvgAggregateOutputType | null
    _sum: ActivityFeedItemSumAggregateOutputType | null
    _min: ActivityFeedItemMinAggregateOutputType | null
    _max: ActivityFeedItemMaxAggregateOutputType | null
  }

  type GetActivityFeedItemGroupByPayload<T extends ActivityFeedItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityFeedItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityFeedItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityFeedItemGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityFeedItemGroupByOutputType[P]>
        }
      >
    >


  export type ActivityFeedItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    artistId?: boolean
    artistName?: boolean
    amount?: boolean
    message?: boolean
    timestamp?: boolean
    icon?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityFeedItem"]>

  export type ActivityFeedItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    artistId?: boolean
    artistName?: boolean
    amount?: boolean
    message?: boolean
    timestamp?: boolean
    icon?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityFeedItem"]>

  export type ActivityFeedItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    artistId?: boolean
    artistName?: boolean
    amount?: boolean
    message?: boolean
    timestamp?: boolean
    icon?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityFeedItem"]>

  export type ActivityFeedItemSelectScalar = {
    id?: boolean
    type?: boolean
    userId?: boolean
    artistId?: boolean
    artistName?: boolean
    amount?: boolean
    message?: boolean
    timestamp?: boolean
    icon?: boolean
  }

  export type ActivityFeedItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "userId" | "artistId" | "artistName" | "amount" | "message" | "timestamp" | "icon", ExtArgs["result"]["activityFeedItem"]>
  export type ActivityFeedItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityFeedItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityFeedItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityFeedItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityFeedItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.FeedType
      userId: string
      artistId: number | null
      artistName: string | null
      amount: string | null
      message: string | null
      timestamp: string
      icon: string | null
    }, ExtArgs["result"]["activityFeedItem"]>
    composites: {}
  }

  type ActivityFeedItemGetPayload<S extends boolean | null | undefined | ActivityFeedItemDefaultArgs> = $Result.GetResult<Prisma.$ActivityFeedItemPayload, S>

  type ActivityFeedItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFeedItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityFeedItemCountAggregateInputType | true
    }

  export interface ActivityFeedItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityFeedItem'], meta: { name: 'ActivityFeedItem' } }
    /**
     * Find zero or one ActivityFeedItem that matches the filter.
     * @param {ActivityFeedItemFindUniqueArgs} args - Arguments to find a ActivityFeedItem
     * @example
     * // Get one ActivityFeedItem
     * const activityFeedItem = await prisma.activityFeedItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFeedItemFindUniqueArgs>(args: SelectSubset<T, ActivityFeedItemFindUniqueArgs<ExtArgs>>): Prisma__ActivityFeedItemClient<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityFeedItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFeedItemFindUniqueOrThrowArgs} args - Arguments to find a ActivityFeedItem
     * @example
     * // Get one ActivityFeedItem
     * const activityFeedItem = await prisma.activityFeedItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFeedItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFeedItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityFeedItemClient<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityFeedItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFeedItemFindFirstArgs} args - Arguments to find a ActivityFeedItem
     * @example
     * // Get one ActivityFeedItem
     * const activityFeedItem = await prisma.activityFeedItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFeedItemFindFirstArgs>(args?: SelectSubset<T, ActivityFeedItemFindFirstArgs<ExtArgs>>): Prisma__ActivityFeedItemClient<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityFeedItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFeedItemFindFirstOrThrowArgs} args - Arguments to find a ActivityFeedItem
     * @example
     * // Get one ActivityFeedItem
     * const activityFeedItem = await prisma.activityFeedItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFeedItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFeedItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityFeedItemClient<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityFeedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFeedItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityFeedItems
     * const activityFeedItems = await prisma.activityFeedItem.findMany()
     * 
     * // Get first 10 ActivityFeedItems
     * const activityFeedItems = await prisma.activityFeedItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityFeedItemWithIdOnly = await prisma.activityFeedItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFeedItemFindManyArgs>(args?: SelectSubset<T, ActivityFeedItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityFeedItem.
     * @param {ActivityFeedItemCreateArgs} args - Arguments to create a ActivityFeedItem.
     * @example
     * // Create one ActivityFeedItem
     * const ActivityFeedItem = await prisma.activityFeedItem.create({
     *   data: {
     *     // ... data to create a ActivityFeedItem
     *   }
     * })
     * 
     */
    create<T extends ActivityFeedItemCreateArgs>(args: SelectSubset<T, ActivityFeedItemCreateArgs<ExtArgs>>): Prisma__ActivityFeedItemClient<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityFeedItems.
     * @param {ActivityFeedItemCreateManyArgs} args - Arguments to create many ActivityFeedItems.
     * @example
     * // Create many ActivityFeedItems
     * const activityFeedItem = await prisma.activityFeedItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityFeedItemCreateManyArgs>(args?: SelectSubset<T, ActivityFeedItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityFeedItems and returns the data saved in the database.
     * @param {ActivityFeedItemCreateManyAndReturnArgs} args - Arguments to create many ActivityFeedItems.
     * @example
     * // Create many ActivityFeedItems
     * const activityFeedItem = await prisma.activityFeedItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityFeedItems and only return the `id`
     * const activityFeedItemWithIdOnly = await prisma.activityFeedItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityFeedItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityFeedItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityFeedItem.
     * @param {ActivityFeedItemDeleteArgs} args - Arguments to delete one ActivityFeedItem.
     * @example
     * // Delete one ActivityFeedItem
     * const ActivityFeedItem = await prisma.activityFeedItem.delete({
     *   where: {
     *     // ... filter to delete one ActivityFeedItem
     *   }
     * })
     * 
     */
    delete<T extends ActivityFeedItemDeleteArgs>(args: SelectSubset<T, ActivityFeedItemDeleteArgs<ExtArgs>>): Prisma__ActivityFeedItemClient<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityFeedItem.
     * @param {ActivityFeedItemUpdateArgs} args - Arguments to update one ActivityFeedItem.
     * @example
     * // Update one ActivityFeedItem
     * const activityFeedItem = await prisma.activityFeedItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityFeedItemUpdateArgs>(args: SelectSubset<T, ActivityFeedItemUpdateArgs<ExtArgs>>): Prisma__ActivityFeedItemClient<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityFeedItems.
     * @param {ActivityFeedItemDeleteManyArgs} args - Arguments to filter ActivityFeedItems to delete.
     * @example
     * // Delete a few ActivityFeedItems
     * const { count } = await prisma.activityFeedItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityFeedItemDeleteManyArgs>(args?: SelectSubset<T, ActivityFeedItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityFeedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFeedItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityFeedItems
     * const activityFeedItem = await prisma.activityFeedItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityFeedItemUpdateManyArgs>(args: SelectSubset<T, ActivityFeedItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityFeedItems and returns the data updated in the database.
     * @param {ActivityFeedItemUpdateManyAndReturnArgs} args - Arguments to update many ActivityFeedItems.
     * @example
     * // Update many ActivityFeedItems
     * const activityFeedItem = await prisma.activityFeedItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityFeedItems and only return the `id`
     * const activityFeedItemWithIdOnly = await prisma.activityFeedItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityFeedItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityFeedItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityFeedItem.
     * @param {ActivityFeedItemUpsertArgs} args - Arguments to update or create a ActivityFeedItem.
     * @example
     * // Update or create a ActivityFeedItem
     * const activityFeedItem = await prisma.activityFeedItem.upsert({
     *   create: {
     *     // ... data to create a ActivityFeedItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityFeedItem we want to update
     *   }
     * })
     */
    upsert<T extends ActivityFeedItemUpsertArgs>(args: SelectSubset<T, ActivityFeedItemUpsertArgs<ExtArgs>>): Prisma__ActivityFeedItemClient<$Result.GetResult<Prisma.$ActivityFeedItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityFeedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFeedItemCountArgs} args - Arguments to filter ActivityFeedItems to count.
     * @example
     * // Count the number of ActivityFeedItems
     * const count = await prisma.activityFeedItem.count({
     *   where: {
     *     // ... the filter for the ActivityFeedItems we want to count
     *   }
     * })
    **/
    count<T extends ActivityFeedItemCountArgs>(
      args?: Subset<T, ActivityFeedItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityFeedItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityFeedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFeedItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityFeedItemAggregateArgs>(args: Subset<T, ActivityFeedItemAggregateArgs>): Prisma.PrismaPromise<GetActivityFeedItemAggregateType<T>>

    /**
     * Group by ActivityFeedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFeedItemGroupByArgs} args - Group by arguments.
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
      T extends ActivityFeedItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityFeedItemGroupByArgs['orderBy'] }
        : { orderBy?: ActivityFeedItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityFeedItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityFeedItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityFeedItem model
   */
  readonly fields: ActivityFeedItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityFeedItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityFeedItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityFeedItem model
   */
  interface ActivityFeedItemFieldRefs {
    readonly id: FieldRef<"ActivityFeedItem", 'Int'>
    readonly type: FieldRef<"ActivityFeedItem", 'FeedType'>
    readonly userId: FieldRef<"ActivityFeedItem", 'String'>
    readonly artistId: FieldRef<"ActivityFeedItem", 'Int'>
    readonly artistName: FieldRef<"ActivityFeedItem", 'String'>
    readonly amount: FieldRef<"ActivityFeedItem", 'String'>
    readonly message: FieldRef<"ActivityFeedItem", 'String'>
    readonly timestamp: FieldRef<"ActivityFeedItem", 'String'>
    readonly icon: FieldRef<"ActivityFeedItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActivityFeedItem findUnique
   */
  export type ActivityFeedItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemInclude<ExtArgs> | null
    /**
     * Filter, which ActivityFeedItem to fetch.
     */
    where: ActivityFeedItemWhereUniqueInput
  }

  /**
   * ActivityFeedItem findUniqueOrThrow
   */
  export type ActivityFeedItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemInclude<ExtArgs> | null
    /**
     * Filter, which ActivityFeedItem to fetch.
     */
    where: ActivityFeedItemWhereUniqueInput
  }

  /**
   * ActivityFeedItem findFirst
   */
  export type ActivityFeedItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemInclude<ExtArgs> | null
    /**
     * Filter, which ActivityFeedItem to fetch.
     */
    where?: ActivityFeedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityFeedItems to fetch.
     */
    orderBy?: ActivityFeedItemOrderByWithRelationInput | ActivityFeedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityFeedItems.
     */
    cursor?: ActivityFeedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityFeedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityFeedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityFeedItems.
     */
    distinct?: ActivityFeedItemScalarFieldEnum | ActivityFeedItemScalarFieldEnum[]
  }

  /**
   * ActivityFeedItem findFirstOrThrow
   */
  export type ActivityFeedItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemInclude<ExtArgs> | null
    /**
     * Filter, which ActivityFeedItem to fetch.
     */
    where?: ActivityFeedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityFeedItems to fetch.
     */
    orderBy?: ActivityFeedItemOrderByWithRelationInput | ActivityFeedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityFeedItems.
     */
    cursor?: ActivityFeedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityFeedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityFeedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityFeedItems.
     */
    distinct?: ActivityFeedItemScalarFieldEnum | ActivityFeedItemScalarFieldEnum[]
  }

  /**
   * ActivityFeedItem findMany
   */
  export type ActivityFeedItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemInclude<ExtArgs> | null
    /**
     * Filter, which ActivityFeedItems to fetch.
     */
    where?: ActivityFeedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityFeedItems to fetch.
     */
    orderBy?: ActivityFeedItemOrderByWithRelationInput | ActivityFeedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityFeedItems.
     */
    cursor?: ActivityFeedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityFeedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityFeedItems.
     */
    skip?: number
    distinct?: ActivityFeedItemScalarFieldEnum | ActivityFeedItemScalarFieldEnum[]
  }

  /**
   * ActivityFeedItem create
   */
  export type ActivityFeedItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityFeedItem.
     */
    data: XOR<ActivityFeedItemCreateInput, ActivityFeedItemUncheckedCreateInput>
  }

  /**
   * ActivityFeedItem createMany
   */
  export type ActivityFeedItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityFeedItems.
     */
    data: ActivityFeedItemCreateManyInput | ActivityFeedItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityFeedItem createManyAndReturn
   */
  export type ActivityFeedItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityFeedItems.
     */
    data: ActivityFeedItemCreateManyInput | ActivityFeedItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityFeedItem update
   */
  export type ActivityFeedItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityFeedItem.
     */
    data: XOR<ActivityFeedItemUpdateInput, ActivityFeedItemUncheckedUpdateInput>
    /**
     * Choose, which ActivityFeedItem to update.
     */
    where: ActivityFeedItemWhereUniqueInput
  }

  /**
   * ActivityFeedItem updateMany
   */
  export type ActivityFeedItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityFeedItems.
     */
    data: XOR<ActivityFeedItemUpdateManyMutationInput, ActivityFeedItemUncheckedUpdateManyInput>
    /**
     * Filter which ActivityFeedItems to update
     */
    where?: ActivityFeedItemWhereInput
    /**
     * Limit how many ActivityFeedItems to update.
     */
    limit?: number
  }

  /**
   * ActivityFeedItem updateManyAndReturn
   */
  export type ActivityFeedItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * The data used to update ActivityFeedItems.
     */
    data: XOR<ActivityFeedItemUpdateManyMutationInput, ActivityFeedItemUncheckedUpdateManyInput>
    /**
     * Filter which ActivityFeedItems to update
     */
    where?: ActivityFeedItemWhereInput
    /**
     * Limit how many ActivityFeedItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityFeedItem upsert
   */
  export type ActivityFeedItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityFeedItem to update in case it exists.
     */
    where: ActivityFeedItemWhereUniqueInput
    /**
     * In case the ActivityFeedItem found by the `where` argument doesn't exist, create a new ActivityFeedItem with this data.
     */
    create: XOR<ActivityFeedItemCreateInput, ActivityFeedItemUncheckedCreateInput>
    /**
     * In case the ActivityFeedItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityFeedItemUpdateInput, ActivityFeedItemUncheckedUpdateInput>
  }

  /**
   * ActivityFeedItem delete
   */
  export type ActivityFeedItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemInclude<ExtArgs> | null
    /**
     * Filter which ActivityFeedItem to delete.
     */
    where: ActivityFeedItemWhereUniqueInput
  }

  /**
   * ActivityFeedItem deleteMany
   */
  export type ActivityFeedItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityFeedItems to delete
     */
    where?: ActivityFeedItemWhereInput
    /**
     * Limit how many ActivityFeedItems to delete.
     */
    limit?: number
  }

  /**
   * ActivityFeedItem without action
   */
  export type ActivityFeedItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityFeedItem
     */
    select?: ActivityFeedItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityFeedItem
     */
    omit?: ActivityFeedItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityFeedItemInclude<ExtArgs> | null
  }


  /**
   * Model DailyMission
   */

  export type AggregateDailyMission = {
    _count: DailyMissionCountAggregateOutputType | null
    _avg: DailyMissionAvgAggregateOutputType | null
    _sum: DailyMissionSumAggregateOutputType | null
    _min: DailyMissionMinAggregateOutputType | null
    _max: DailyMissionMaxAggregateOutputType | null
  }

  export type DailyMissionAvgAggregateOutputType = {
    id: number | null
    reward: number | null
    target: number | null
    progress: number | null
  }

  export type DailyMissionSumAggregateOutputType = {
    id: number | null
    reward: number | null
    target: number | null
    progress: number | null
  }

  export type DailyMissionMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    reward: number | null
    type: $Enums.MissionType | null
    target: number | null
    progress: number | null
    completed: boolean | null
    icon: string | null
  }

  export type DailyMissionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    reward: number | null
    type: $Enums.MissionType | null
    target: number | null
    progress: number | null
    completed: boolean | null
    icon: string | null
  }

  export type DailyMissionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    reward: number
    type: number
    target: number
    progress: number
    completed: number
    icon: number
    _all: number
  }


  export type DailyMissionAvgAggregateInputType = {
    id?: true
    reward?: true
    target?: true
    progress?: true
  }

  export type DailyMissionSumAggregateInputType = {
    id?: true
    reward?: true
    target?: true
    progress?: true
  }

  export type DailyMissionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    reward?: true
    type?: true
    target?: true
    progress?: true
    completed?: true
    icon?: true
  }

  export type DailyMissionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    reward?: true
    type?: true
    target?: true
    progress?: true
    completed?: true
    icon?: true
  }

  export type DailyMissionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    reward?: true
    type?: true
    target?: true
    progress?: true
    completed?: true
    icon?: true
    _all?: true
  }

  export type DailyMissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMission to aggregate.
     */
    where?: DailyMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMissions to fetch.
     */
    orderBy?: DailyMissionOrderByWithRelationInput | DailyMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyMissions
    **/
    _count?: true | DailyMissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyMissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyMissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyMissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyMissionMaxAggregateInputType
  }

  export type GetDailyMissionAggregateType<T extends DailyMissionAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyMission[P]>
      : GetScalarType<T[P], AggregateDailyMission[P]>
  }




  export type DailyMissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMissionWhereInput
    orderBy?: DailyMissionOrderByWithAggregationInput | DailyMissionOrderByWithAggregationInput[]
    by: DailyMissionScalarFieldEnum[] | DailyMissionScalarFieldEnum
    having?: DailyMissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyMissionCountAggregateInputType | true
    _avg?: DailyMissionAvgAggregateInputType
    _sum?: DailyMissionSumAggregateInputType
    _min?: DailyMissionMinAggregateInputType
    _max?: DailyMissionMaxAggregateInputType
  }

  export type DailyMissionGroupByOutputType = {
    id: number
    title: string
    description: string
    reward: number
    type: $Enums.MissionType
    target: number
    progress: number
    completed: boolean
    icon: string
    _count: DailyMissionCountAggregateOutputType | null
    _avg: DailyMissionAvgAggregateOutputType | null
    _sum: DailyMissionSumAggregateOutputType | null
    _min: DailyMissionMinAggregateOutputType | null
    _max: DailyMissionMaxAggregateOutputType | null
  }

  type GetDailyMissionGroupByPayload<T extends DailyMissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyMissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyMissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyMissionGroupByOutputType[P]>
            : GetScalarType<T[P], DailyMissionGroupByOutputType[P]>
        }
      >
    >


  export type DailyMissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    reward?: boolean
    type?: boolean
    target?: boolean
    progress?: boolean
    completed?: boolean
    icon?: boolean
  }, ExtArgs["result"]["dailyMission"]>

  export type DailyMissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    reward?: boolean
    type?: boolean
    target?: boolean
    progress?: boolean
    completed?: boolean
    icon?: boolean
  }, ExtArgs["result"]["dailyMission"]>

  export type DailyMissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    reward?: boolean
    type?: boolean
    target?: boolean
    progress?: boolean
    completed?: boolean
    icon?: boolean
  }, ExtArgs["result"]["dailyMission"]>

  export type DailyMissionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    reward?: boolean
    type?: boolean
    target?: boolean
    progress?: boolean
    completed?: boolean
    icon?: boolean
  }

  export type DailyMissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "reward" | "type" | "target" | "progress" | "completed" | "icon", ExtArgs["result"]["dailyMission"]>

  export type $DailyMissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyMission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      reward: number
      type: $Enums.MissionType
      target: number
      progress: number
      completed: boolean
      icon: string
    }, ExtArgs["result"]["dailyMission"]>
    composites: {}
  }

  type DailyMissionGetPayload<S extends boolean | null | undefined | DailyMissionDefaultArgs> = $Result.GetResult<Prisma.$DailyMissionPayload, S>

  type DailyMissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyMissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyMissionCountAggregateInputType | true
    }

  export interface DailyMissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyMission'], meta: { name: 'DailyMission' } }
    /**
     * Find zero or one DailyMission that matches the filter.
     * @param {DailyMissionFindUniqueArgs} args - Arguments to find a DailyMission
     * @example
     * // Get one DailyMission
     * const dailyMission = await prisma.dailyMission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyMissionFindUniqueArgs>(args: SelectSubset<T, DailyMissionFindUniqueArgs<ExtArgs>>): Prisma__DailyMissionClient<$Result.GetResult<Prisma.$DailyMissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyMission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyMissionFindUniqueOrThrowArgs} args - Arguments to find a DailyMission
     * @example
     * // Get one DailyMission
     * const dailyMission = await prisma.dailyMission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyMissionFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyMissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyMissionClient<$Result.GetResult<Prisma.$DailyMissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyMission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMissionFindFirstArgs} args - Arguments to find a DailyMission
     * @example
     * // Get one DailyMission
     * const dailyMission = await prisma.dailyMission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyMissionFindFirstArgs>(args?: SelectSubset<T, DailyMissionFindFirstArgs<ExtArgs>>): Prisma__DailyMissionClient<$Result.GetResult<Prisma.$DailyMissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyMission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMissionFindFirstOrThrowArgs} args - Arguments to find a DailyMission
     * @example
     * // Get one DailyMission
     * const dailyMission = await prisma.dailyMission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyMissionFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyMissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyMissionClient<$Result.GetResult<Prisma.$DailyMissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyMissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyMissions
     * const dailyMissions = await prisma.dailyMission.findMany()
     * 
     * // Get first 10 DailyMissions
     * const dailyMissions = await prisma.dailyMission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyMissionWithIdOnly = await prisma.dailyMission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyMissionFindManyArgs>(args?: SelectSubset<T, DailyMissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyMission.
     * @param {DailyMissionCreateArgs} args - Arguments to create a DailyMission.
     * @example
     * // Create one DailyMission
     * const DailyMission = await prisma.dailyMission.create({
     *   data: {
     *     // ... data to create a DailyMission
     *   }
     * })
     * 
     */
    create<T extends DailyMissionCreateArgs>(args: SelectSubset<T, DailyMissionCreateArgs<ExtArgs>>): Prisma__DailyMissionClient<$Result.GetResult<Prisma.$DailyMissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyMissions.
     * @param {DailyMissionCreateManyArgs} args - Arguments to create many DailyMissions.
     * @example
     * // Create many DailyMissions
     * const dailyMission = await prisma.dailyMission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyMissionCreateManyArgs>(args?: SelectSubset<T, DailyMissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyMissions and returns the data saved in the database.
     * @param {DailyMissionCreateManyAndReturnArgs} args - Arguments to create many DailyMissions.
     * @example
     * // Create many DailyMissions
     * const dailyMission = await prisma.dailyMission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyMissions and only return the `id`
     * const dailyMissionWithIdOnly = await prisma.dailyMission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyMissionCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyMissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyMission.
     * @param {DailyMissionDeleteArgs} args - Arguments to delete one DailyMission.
     * @example
     * // Delete one DailyMission
     * const DailyMission = await prisma.dailyMission.delete({
     *   where: {
     *     // ... filter to delete one DailyMission
     *   }
     * })
     * 
     */
    delete<T extends DailyMissionDeleteArgs>(args: SelectSubset<T, DailyMissionDeleteArgs<ExtArgs>>): Prisma__DailyMissionClient<$Result.GetResult<Prisma.$DailyMissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyMission.
     * @param {DailyMissionUpdateArgs} args - Arguments to update one DailyMission.
     * @example
     * // Update one DailyMission
     * const dailyMission = await prisma.dailyMission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyMissionUpdateArgs>(args: SelectSubset<T, DailyMissionUpdateArgs<ExtArgs>>): Prisma__DailyMissionClient<$Result.GetResult<Prisma.$DailyMissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyMissions.
     * @param {DailyMissionDeleteManyArgs} args - Arguments to filter DailyMissions to delete.
     * @example
     * // Delete a few DailyMissions
     * const { count } = await prisma.dailyMission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyMissionDeleteManyArgs>(args?: SelectSubset<T, DailyMissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyMissions
     * const dailyMission = await prisma.dailyMission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyMissionUpdateManyArgs>(args: SelectSubset<T, DailyMissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyMissions and returns the data updated in the database.
     * @param {DailyMissionUpdateManyAndReturnArgs} args - Arguments to update many DailyMissions.
     * @example
     * // Update many DailyMissions
     * const dailyMission = await prisma.dailyMission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyMissions and only return the `id`
     * const dailyMissionWithIdOnly = await prisma.dailyMission.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyMissionUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyMissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyMission.
     * @param {DailyMissionUpsertArgs} args - Arguments to update or create a DailyMission.
     * @example
     * // Update or create a DailyMission
     * const dailyMission = await prisma.dailyMission.upsert({
     *   create: {
     *     // ... data to create a DailyMission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyMission we want to update
     *   }
     * })
     */
    upsert<T extends DailyMissionUpsertArgs>(args: SelectSubset<T, DailyMissionUpsertArgs<ExtArgs>>): Prisma__DailyMissionClient<$Result.GetResult<Prisma.$DailyMissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMissionCountArgs} args - Arguments to filter DailyMissions to count.
     * @example
     * // Count the number of DailyMissions
     * const count = await prisma.dailyMission.count({
     *   where: {
     *     // ... the filter for the DailyMissions we want to count
     *   }
     * })
    **/
    count<T extends DailyMissionCountArgs>(
      args?: Subset<T, DailyMissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyMissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyMissionAggregateArgs>(args: Subset<T, DailyMissionAggregateArgs>): Prisma.PrismaPromise<GetDailyMissionAggregateType<T>>

    /**
     * Group by DailyMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMissionGroupByArgs} args - Group by arguments.
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
      T extends DailyMissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyMissionGroupByArgs['orderBy'] }
        : { orderBy?: DailyMissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyMissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyMission model
   */
  readonly fields: DailyMissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyMission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyMissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the DailyMission model
   */
  interface DailyMissionFieldRefs {
    readonly id: FieldRef<"DailyMission", 'Int'>
    readonly title: FieldRef<"DailyMission", 'String'>
    readonly description: FieldRef<"DailyMission", 'String'>
    readonly reward: FieldRef<"DailyMission", 'Int'>
    readonly type: FieldRef<"DailyMission", 'MissionType'>
    readonly target: FieldRef<"DailyMission", 'Int'>
    readonly progress: FieldRef<"DailyMission", 'Int'>
    readonly completed: FieldRef<"DailyMission", 'Boolean'>
    readonly icon: FieldRef<"DailyMission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyMission findUnique
   */
  export type DailyMissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
    /**
     * Filter, which DailyMission to fetch.
     */
    where: DailyMissionWhereUniqueInput
  }

  /**
   * DailyMission findUniqueOrThrow
   */
  export type DailyMissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
    /**
     * Filter, which DailyMission to fetch.
     */
    where: DailyMissionWhereUniqueInput
  }

  /**
   * DailyMission findFirst
   */
  export type DailyMissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
    /**
     * Filter, which DailyMission to fetch.
     */
    where?: DailyMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMissions to fetch.
     */
    orderBy?: DailyMissionOrderByWithRelationInput | DailyMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMissions.
     */
    cursor?: DailyMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMissions.
     */
    distinct?: DailyMissionScalarFieldEnum | DailyMissionScalarFieldEnum[]
  }

  /**
   * DailyMission findFirstOrThrow
   */
  export type DailyMissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
    /**
     * Filter, which DailyMission to fetch.
     */
    where?: DailyMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMissions to fetch.
     */
    orderBy?: DailyMissionOrderByWithRelationInput | DailyMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMissions.
     */
    cursor?: DailyMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMissions.
     */
    distinct?: DailyMissionScalarFieldEnum | DailyMissionScalarFieldEnum[]
  }

  /**
   * DailyMission findMany
   */
  export type DailyMissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
    /**
     * Filter, which DailyMissions to fetch.
     */
    where?: DailyMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMissions to fetch.
     */
    orderBy?: DailyMissionOrderByWithRelationInput | DailyMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyMissions.
     */
    cursor?: DailyMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMissions.
     */
    skip?: number
    distinct?: DailyMissionScalarFieldEnum | DailyMissionScalarFieldEnum[]
  }

  /**
   * DailyMission create
   */
  export type DailyMissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
    /**
     * The data needed to create a DailyMission.
     */
    data: XOR<DailyMissionCreateInput, DailyMissionUncheckedCreateInput>
  }

  /**
   * DailyMission createMany
   */
  export type DailyMissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyMissions.
     */
    data: DailyMissionCreateManyInput | DailyMissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyMission createManyAndReturn
   */
  export type DailyMissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
    /**
     * The data used to create many DailyMissions.
     */
    data: DailyMissionCreateManyInput | DailyMissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyMission update
   */
  export type DailyMissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
    /**
     * The data needed to update a DailyMission.
     */
    data: XOR<DailyMissionUpdateInput, DailyMissionUncheckedUpdateInput>
    /**
     * Choose, which DailyMission to update.
     */
    where: DailyMissionWhereUniqueInput
  }

  /**
   * DailyMission updateMany
   */
  export type DailyMissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyMissions.
     */
    data: XOR<DailyMissionUpdateManyMutationInput, DailyMissionUncheckedUpdateManyInput>
    /**
     * Filter which DailyMissions to update
     */
    where?: DailyMissionWhereInput
    /**
     * Limit how many DailyMissions to update.
     */
    limit?: number
  }

  /**
   * DailyMission updateManyAndReturn
   */
  export type DailyMissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
    /**
     * The data used to update DailyMissions.
     */
    data: XOR<DailyMissionUpdateManyMutationInput, DailyMissionUncheckedUpdateManyInput>
    /**
     * Filter which DailyMissions to update
     */
    where?: DailyMissionWhereInput
    /**
     * Limit how many DailyMissions to update.
     */
    limit?: number
  }

  /**
   * DailyMission upsert
   */
  export type DailyMissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
    /**
     * The filter to search for the DailyMission to update in case it exists.
     */
    where: DailyMissionWhereUniqueInput
    /**
     * In case the DailyMission found by the `where` argument doesn't exist, create a new DailyMission with this data.
     */
    create: XOR<DailyMissionCreateInput, DailyMissionUncheckedCreateInput>
    /**
     * In case the DailyMission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyMissionUpdateInput, DailyMissionUncheckedUpdateInput>
  }

  /**
   * DailyMission delete
   */
  export type DailyMissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
    /**
     * Filter which DailyMission to delete.
     */
    where: DailyMissionWhereUniqueInput
  }

  /**
   * DailyMission deleteMany
   */
  export type DailyMissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMissions to delete
     */
    where?: DailyMissionWhereInput
    /**
     * Limit how many DailyMissions to delete.
     */
    limit?: number
  }

  /**
   * DailyMission without action
   */
  export type DailyMissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMission
     */
    select?: DailyMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyMission
     */
    omit?: DailyMissionOmit<ExtArgs> | null
  }


  /**
   * Model NFTReward
   */

  export type AggregateNFTReward = {
    _count: NFTRewardCountAggregateOutputType | null
    _avg: NFTRewardAvgAggregateOutputType | null
    _sum: NFTRewardSumAggregateOutputType | null
    _min: NFTRewardMinAggregateOutputType | null
    _max: NFTRewardMaxAggregateOutputType | null
  }

  export type NFTRewardAvgAggregateOutputType = {
    id: number | null
    seasonId: number | null
  }

  export type NFTRewardSumAggregateOutputType = {
    id: number | null
    seasonId: number | null
  }

  export type NFTRewardMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    rarity: $Enums.Rarity | null
    image: string | null
    earnedAt: string | null
    userId: string | null
    seasonId: number | null
  }

  export type NFTRewardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    rarity: $Enums.Rarity | null
    image: string | null
    earnedAt: string | null
    userId: string | null
    seasonId: number | null
  }

  export type NFTRewardCountAggregateOutputType = {
    id: number
    name: number
    description: number
    rarity: number
    image: number
    earnedAt: number
    userId: number
    seasonId: number
    _all: number
  }


  export type NFTRewardAvgAggregateInputType = {
    id?: true
    seasonId?: true
  }

  export type NFTRewardSumAggregateInputType = {
    id?: true
    seasonId?: true
  }

  export type NFTRewardMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rarity?: true
    image?: true
    earnedAt?: true
    userId?: true
    seasonId?: true
  }

  export type NFTRewardMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rarity?: true
    image?: true
    earnedAt?: true
    userId?: true
    seasonId?: true
  }

  export type NFTRewardCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rarity?: true
    image?: true
    earnedAt?: true
    userId?: true
    seasonId?: true
    _all?: true
  }

  export type NFTRewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NFTReward to aggregate.
     */
    where?: NFTRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFTRewards to fetch.
     */
    orderBy?: NFTRewardOrderByWithRelationInput | NFTRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NFTRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFTRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFTRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NFTRewards
    **/
    _count?: true | NFTRewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NFTRewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NFTRewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NFTRewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NFTRewardMaxAggregateInputType
  }

  export type GetNFTRewardAggregateType<T extends NFTRewardAggregateArgs> = {
        [P in keyof T & keyof AggregateNFTReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNFTReward[P]>
      : GetScalarType<T[P], AggregateNFTReward[P]>
  }




  export type NFTRewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NFTRewardWhereInput
    orderBy?: NFTRewardOrderByWithAggregationInput | NFTRewardOrderByWithAggregationInput[]
    by: NFTRewardScalarFieldEnum[] | NFTRewardScalarFieldEnum
    having?: NFTRewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NFTRewardCountAggregateInputType | true
    _avg?: NFTRewardAvgAggregateInputType
    _sum?: NFTRewardSumAggregateInputType
    _min?: NFTRewardMinAggregateInputType
    _max?: NFTRewardMaxAggregateInputType
  }

  export type NFTRewardGroupByOutputType = {
    id: number
    name: string
    description: string
    rarity: $Enums.Rarity
    image: string
    earnedAt: string
    userId: string | null
    seasonId: number | null
    _count: NFTRewardCountAggregateOutputType | null
    _avg: NFTRewardAvgAggregateOutputType | null
    _sum: NFTRewardSumAggregateOutputType | null
    _min: NFTRewardMinAggregateOutputType | null
    _max: NFTRewardMaxAggregateOutputType | null
  }

  type GetNFTRewardGroupByPayload<T extends NFTRewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NFTRewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NFTRewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NFTRewardGroupByOutputType[P]>
            : GetScalarType<T[P], NFTRewardGroupByOutputType[P]>
        }
      >
    >


  export type NFTRewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rarity?: boolean
    image?: boolean
    earnedAt?: boolean
    userId?: boolean
    seasonId?: boolean
    user?: boolean | NFTReward$userArgs<ExtArgs>
    season?: boolean | NFTReward$seasonArgs<ExtArgs>
  }, ExtArgs["result"]["nFTReward"]>

  export type NFTRewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rarity?: boolean
    image?: boolean
    earnedAt?: boolean
    userId?: boolean
    seasonId?: boolean
    user?: boolean | NFTReward$userArgs<ExtArgs>
    season?: boolean | NFTReward$seasonArgs<ExtArgs>
  }, ExtArgs["result"]["nFTReward"]>

  export type NFTRewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rarity?: boolean
    image?: boolean
    earnedAt?: boolean
    userId?: boolean
    seasonId?: boolean
    user?: boolean | NFTReward$userArgs<ExtArgs>
    season?: boolean | NFTReward$seasonArgs<ExtArgs>
  }, ExtArgs["result"]["nFTReward"]>

  export type NFTRewardSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    rarity?: boolean
    image?: boolean
    earnedAt?: boolean
    userId?: boolean
    seasonId?: boolean
  }

  export type NFTRewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "rarity" | "image" | "earnedAt" | "userId" | "seasonId", ExtArgs["result"]["nFTReward"]>
  export type NFTRewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | NFTReward$userArgs<ExtArgs>
    season?: boolean | NFTReward$seasonArgs<ExtArgs>
  }
  export type NFTRewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | NFTReward$userArgs<ExtArgs>
    season?: boolean | NFTReward$seasonArgs<ExtArgs>
  }
  export type NFTRewardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | NFTReward$userArgs<ExtArgs>
    season?: boolean | NFTReward$seasonArgs<ExtArgs>
  }

  export type $NFTRewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NFTReward"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      season: Prisma.$SeasonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      rarity: $Enums.Rarity
      image: string
      earnedAt: string
      userId: string | null
      seasonId: number | null
    }, ExtArgs["result"]["nFTReward"]>
    composites: {}
  }

  type NFTRewardGetPayload<S extends boolean | null | undefined | NFTRewardDefaultArgs> = $Result.GetResult<Prisma.$NFTRewardPayload, S>

  type NFTRewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NFTRewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NFTRewardCountAggregateInputType | true
    }

  export interface NFTRewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NFTReward'], meta: { name: 'NFTReward' } }
    /**
     * Find zero or one NFTReward that matches the filter.
     * @param {NFTRewardFindUniqueArgs} args - Arguments to find a NFTReward
     * @example
     * // Get one NFTReward
     * const nFTReward = await prisma.nFTReward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NFTRewardFindUniqueArgs>(args: SelectSubset<T, NFTRewardFindUniqueArgs<ExtArgs>>): Prisma__NFTRewardClient<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NFTReward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NFTRewardFindUniqueOrThrowArgs} args - Arguments to find a NFTReward
     * @example
     * // Get one NFTReward
     * const nFTReward = await prisma.nFTReward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NFTRewardFindUniqueOrThrowArgs>(args: SelectSubset<T, NFTRewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NFTRewardClient<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NFTReward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTRewardFindFirstArgs} args - Arguments to find a NFTReward
     * @example
     * // Get one NFTReward
     * const nFTReward = await prisma.nFTReward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NFTRewardFindFirstArgs>(args?: SelectSubset<T, NFTRewardFindFirstArgs<ExtArgs>>): Prisma__NFTRewardClient<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NFTReward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTRewardFindFirstOrThrowArgs} args - Arguments to find a NFTReward
     * @example
     * // Get one NFTReward
     * const nFTReward = await prisma.nFTReward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NFTRewardFindFirstOrThrowArgs>(args?: SelectSubset<T, NFTRewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__NFTRewardClient<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NFTRewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTRewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NFTRewards
     * const nFTRewards = await prisma.nFTReward.findMany()
     * 
     * // Get first 10 NFTRewards
     * const nFTRewards = await prisma.nFTReward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nFTRewardWithIdOnly = await prisma.nFTReward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NFTRewardFindManyArgs>(args?: SelectSubset<T, NFTRewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NFTReward.
     * @param {NFTRewardCreateArgs} args - Arguments to create a NFTReward.
     * @example
     * // Create one NFTReward
     * const NFTReward = await prisma.nFTReward.create({
     *   data: {
     *     // ... data to create a NFTReward
     *   }
     * })
     * 
     */
    create<T extends NFTRewardCreateArgs>(args: SelectSubset<T, NFTRewardCreateArgs<ExtArgs>>): Prisma__NFTRewardClient<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NFTRewards.
     * @param {NFTRewardCreateManyArgs} args - Arguments to create many NFTRewards.
     * @example
     * // Create many NFTRewards
     * const nFTReward = await prisma.nFTReward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NFTRewardCreateManyArgs>(args?: SelectSubset<T, NFTRewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NFTRewards and returns the data saved in the database.
     * @param {NFTRewardCreateManyAndReturnArgs} args - Arguments to create many NFTRewards.
     * @example
     * // Create many NFTRewards
     * const nFTReward = await prisma.nFTReward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NFTRewards and only return the `id`
     * const nFTRewardWithIdOnly = await prisma.nFTReward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NFTRewardCreateManyAndReturnArgs>(args?: SelectSubset<T, NFTRewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NFTReward.
     * @param {NFTRewardDeleteArgs} args - Arguments to delete one NFTReward.
     * @example
     * // Delete one NFTReward
     * const NFTReward = await prisma.nFTReward.delete({
     *   where: {
     *     // ... filter to delete one NFTReward
     *   }
     * })
     * 
     */
    delete<T extends NFTRewardDeleteArgs>(args: SelectSubset<T, NFTRewardDeleteArgs<ExtArgs>>): Prisma__NFTRewardClient<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NFTReward.
     * @param {NFTRewardUpdateArgs} args - Arguments to update one NFTReward.
     * @example
     * // Update one NFTReward
     * const nFTReward = await prisma.nFTReward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NFTRewardUpdateArgs>(args: SelectSubset<T, NFTRewardUpdateArgs<ExtArgs>>): Prisma__NFTRewardClient<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NFTRewards.
     * @param {NFTRewardDeleteManyArgs} args - Arguments to filter NFTRewards to delete.
     * @example
     * // Delete a few NFTRewards
     * const { count } = await prisma.nFTReward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NFTRewardDeleteManyArgs>(args?: SelectSubset<T, NFTRewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NFTRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTRewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NFTRewards
     * const nFTReward = await prisma.nFTReward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NFTRewardUpdateManyArgs>(args: SelectSubset<T, NFTRewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NFTRewards and returns the data updated in the database.
     * @param {NFTRewardUpdateManyAndReturnArgs} args - Arguments to update many NFTRewards.
     * @example
     * // Update many NFTRewards
     * const nFTReward = await prisma.nFTReward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NFTRewards and only return the `id`
     * const nFTRewardWithIdOnly = await prisma.nFTReward.updateManyAndReturn({
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
    updateManyAndReturn<T extends NFTRewardUpdateManyAndReturnArgs>(args: SelectSubset<T, NFTRewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NFTReward.
     * @param {NFTRewardUpsertArgs} args - Arguments to update or create a NFTReward.
     * @example
     * // Update or create a NFTReward
     * const nFTReward = await prisma.nFTReward.upsert({
     *   create: {
     *     // ... data to create a NFTReward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NFTReward we want to update
     *   }
     * })
     */
    upsert<T extends NFTRewardUpsertArgs>(args: SelectSubset<T, NFTRewardUpsertArgs<ExtArgs>>): Prisma__NFTRewardClient<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NFTRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTRewardCountArgs} args - Arguments to filter NFTRewards to count.
     * @example
     * // Count the number of NFTRewards
     * const count = await prisma.nFTReward.count({
     *   where: {
     *     // ... the filter for the NFTRewards we want to count
     *   }
     * })
    **/
    count<T extends NFTRewardCountArgs>(
      args?: Subset<T, NFTRewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NFTRewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NFTReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTRewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NFTRewardAggregateArgs>(args: Subset<T, NFTRewardAggregateArgs>): Prisma.PrismaPromise<GetNFTRewardAggregateType<T>>

    /**
     * Group by NFTReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFTRewardGroupByArgs} args - Group by arguments.
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
      T extends NFTRewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NFTRewardGroupByArgs['orderBy'] }
        : { orderBy?: NFTRewardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NFTRewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNFTRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NFTReward model
   */
  readonly fields: NFTRewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NFTReward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NFTRewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends NFTReward$userArgs<ExtArgs> = {}>(args?: Subset<T, NFTReward$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    season<T extends NFTReward$seasonArgs<ExtArgs> = {}>(args?: Subset<T, NFTReward$seasonArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NFTReward model
   */
  interface NFTRewardFieldRefs {
    readonly id: FieldRef<"NFTReward", 'Int'>
    readonly name: FieldRef<"NFTReward", 'String'>
    readonly description: FieldRef<"NFTReward", 'String'>
    readonly rarity: FieldRef<"NFTReward", 'Rarity'>
    readonly image: FieldRef<"NFTReward", 'String'>
    readonly earnedAt: FieldRef<"NFTReward", 'String'>
    readonly userId: FieldRef<"NFTReward", 'String'>
    readonly seasonId: FieldRef<"NFTReward", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NFTReward findUnique
   */
  export type NFTRewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
    /**
     * Filter, which NFTReward to fetch.
     */
    where: NFTRewardWhereUniqueInput
  }

  /**
   * NFTReward findUniqueOrThrow
   */
  export type NFTRewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
    /**
     * Filter, which NFTReward to fetch.
     */
    where: NFTRewardWhereUniqueInput
  }

  /**
   * NFTReward findFirst
   */
  export type NFTRewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
    /**
     * Filter, which NFTReward to fetch.
     */
    where?: NFTRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFTRewards to fetch.
     */
    orderBy?: NFTRewardOrderByWithRelationInput | NFTRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NFTRewards.
     */
    cursor?: NFTRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFTRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFTRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NFTRewards.
     */
    distinct?: NFTRewardScalarFieldEnum | NFTRewardScalarFieldEnum[]
  }

  /**
   * NFTReward findFirstOrThrow
   */
  export type NFTRewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
    /**
     * Filter, which NFTReward to fetch.
     */
    where?: NFTRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFTRewards to fetch.
     */
    orderBy?: NFTRewardOrderByWithRelationInput | NFTRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NFTRewards.
     */
    cursor?: NFTRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFTRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFTRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NFTRewards.
     */
    distinct?: NFTRewardScalarFieldEnum | NFTRewardScalarFieldEnum[]
  }

  /**
   * NFTReward findMany
   */
  export type NFTRewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
    /**
     * Filter, which NFTRewards to fetch.
     */
    where?: NFTRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFTRewards to fetch.
     */
    orderBy?: NFTRewardOrderByWithRelationInput | NFTRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NFTRewards.
     */
    cursor?: NFTRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFTRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFTRewards.
     */
    skip?: number
    distinct?: NFTRewardScalarFieldEnum | NFTRewardScalarFieldEnum[]
  }

  /**
   * NFTReward create
   */
  export type NFTRewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
    /**
     * The data needed to create a NFTReward.
     */
    data: XOR<NFTRewardCreateInput, NFTRewardUncheckedCreateInput>
  }

  /**
   * NFTReward createMany
   */
  export type NFTRewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NFTRewards.
     */
    data: NFTRewardCreateManyInput | NFTRewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NFTReward createManyAndReturn
   */
  export type NFTRewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * The data used to create many NFTRewards.
     */
    data: NFTRewardCreateManyInput | NFTRewardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NFTReward update
   */
  export type NFTRewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
    /**
     * The data needed to update a NFTReward.
     */
    data: XOR<NFTRewardUpdateInput, NFTRewardUncheckedUpdateInput>
    /**
     * Choose, which NFTReward to update.
     */
    where: NFTRewardWhereUniqueInput
  }

  /**
   * NFTReward updateMany
   */
  export type NFTRewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NFTRewards.
     */
    data: XOR<NFTRewardUpdateManyMutationInput, NFTRewardUncheckedUpdateManyInput>
    /**
     * Filter which NFTRewards to update
     */
    where?: NFTRewardWhereInput
    /**
     * Limit how many NFTRewards to update.
     */
    limit?: number
  }

  /**
   * NFTReward updateManyAndReturn
   */
  export type NFTRewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * The data used to update NFTRewards.
     */
    data: XOR<NFTRewardUpdateManyMutationInput, NFTRewardUncheckedUpdateManyInput>
    /**
     * Filter which NFTRewards to update
     */
    where?: NFTRewardWhereInput
    /**
     * Limit how many NFTRewards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NFTReward upsert
   */
  export type NFTRewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
    /**
     * The filter to search for the NFTReward to update in case it exists.
     */
    where: NFTRewardWhereUniqueInput
    /**
     * In case the NFTReward found by the `where` argument doesn't exist, create a new NFTReward with this data.
     */
    create: XOR<NFTRewardCreateInput, NFTRewardUncheckedCreateInput>
    /**
     * In case the NFTReward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NFTRewardUpdateInput, NFTRewardUncheckedUpdateInput>
  }

  /**
   * NFTReward delete
   */
  export type NFTRewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
    /**
     * Filter which NFTReward to delete.
     */
    where: NFTRewardWhereUniqueInput
  }

  /**
   * NFTReward deleteMany
   */
  export type NFTRewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NFTRewards to delete
     */
    where?: NFTRewardWhereInput
    /**
     * Limit how many NFTRewards to delete.
     */
    limit?: number
  }

  /**
   * NFTReward.user
   */
  export type NFTReward$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * NFTReward.season
   */
  export type NFTReward$seasonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    where?: SeasonWhereInput
  }

  /**
   * NFTReward without action
   */
  export type NFTRewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
  }


  /**
   * Model Season
   */

  export type AggregateSeason = {
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  export type SeasonAvgAggregateOutputType = {
    id: number | null
    tipMultiplier: number | null
  }

  export type SeasonSumAggregateOutputType = {
    id: number | null
    tipMultiplier: number | null
  }

  export type SeasonMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: string | null
    endDate: string | null
    tipMultiplier: number | null
    isActive: boolean | null
  }

  export type SeasonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: string | null
    endDate: string | null
    tipMultiplier: number | null
    isActive: boolean | null
  }

  export type SeasonCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    endDate: number
    tipMultiplier: number
    isActive: number
    _all: number
  }


  export type SeasonAvgAggregateInputType = {
    id?: true
    tipMultiplier?: true
  }

  export type SeasonSumAggregateInputType = {
    id?: true
    tipMultiplier?: true
  }

  export type SeasonMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    tipMultiplier?: true
    isActive?: true
  }

  export type SeasonMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    tipMultiplier?: true
    isActive?: true
  }

  export type SeasonCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    tipMultiplier?: true
    isActive?: true
    _all?: true
  }

  export type SeasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Season to aggregate.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seasons
    **/
    _count?: true | SeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonMaxAggregateInputType
  }

  export type GetSeasonAggregateType<T extends SeasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason[P]>
      : GetScalarType<T[P], AggregateSeason[P]>
  }




  export type SeasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonWhereInput
    orderBy?: SeasonOrderByWithAggregationInput | SeasonOrderByWithAggregationInput[]
    by: SeasonScalarFieldEnum[] | SeasonScalarFieldEnum
    having?: SeasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonCountAggregateInputType | true
    _avg?: SeasonAvgAggregateInputType
    _sum?: SeasonSumAggregateInputType
    _min?: SeasonMinAggregateInputType
    _max?: SeasonMaxAggregateInputType
  }

  export type SeasonGroupByOutputType = {
    id: number
    name: string
    description: string
    startDate: string
    endDate: string
    tipMultiplier: number
    isActive: boolean
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  type GetSeasonGroupByPayload<T extends SeasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonGroupByOutputType[P]>
        }
      >
    >


  export type SeasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    tipMultiplier?: boolean
    isActive?: boolean
    rewards?: boolean | Season$rewardsArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    tipMultiplier?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    tipMultiplier?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    tipMultiplier?: boolean
    isActive?: boolean
  }

  export type SeasonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "endDate" | "tipMultiplier" | "isActive", ExtArgs["result"]["season"]>
  export type SeasonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rewards?: boolean | Season$rewardsArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeasonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SeasonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SeasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Season"
    objects: {
      rewards: Prisma.$NFTRewardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      startDate: string
      endDate: string
      tipMultiplier: number
      isActive: boolean
    }, ExtArgs["result"]["season"]>
    composites: {}
  }

  type SeasonGetPayload<S extends boolean | null | undefined | SeasonDefaultArgs> = $Result.GetResult<Prisma.$SeasonPayload, S>

  type SeasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeasonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeasonCountAggregateInputType | true
    }

  export interface SeasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Season'], meta: { name: 'Season' } }
    /**
     * Find zero or one Season that matches the filter.
     * @param {SeasonFindUniqueArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeasonFindUniqueArgs>(args: SelectSubset<T, SeasonFindUniqueArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Season that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeasonFindUniqueOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeasonFindUniqueOrThrowArgs>(args: SelectSubset<T, SeasonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Season that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeasonFindFirstArgs>(args?: SelectSubset<T, SeasonFindFirstArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Season that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeasonFindFirstOrThrowArgs>(args?: SelectSubset<T, SeasonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.season.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.season.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonWithIdOnly = await prisma.season.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeasonFindManyArgs>(args?: SelectSubset<T, SeasonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Season.
     * @param {SeasonCreateArgs} args - Arguments to create a Season.
     * @example
     * // Create one Season
     * const Season = await prisma.season.create({
     *   data: {
     *     // ... data to create a Season
     *   }
     * })
     * 
     */
    create<T extends SeasonCreateArgs>(args: SelectSubset<T, SeasonCreateArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seasons.
     * @param {SeasonCreateManyArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeasonCreateManyArgs>(args?: SelectSubset<T, SeasonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seasons and returns the data saved in the database.
     * @param {SeasonCreateManyAndReturnArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seasons and only return the `id`
     * const seasonWithIdOnly = await prisma.season.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeasonCreateManyAndReturnArgs>(args?: SelectSubset<T, SeasonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Season.
     * @param {SeasonDeleteArgs} args - Arguments to delete one Season.
     * @example
     * // Delete one Season
     * const Season = await prisma.season.delete({
     *   where: {
     *     // ... filter to delete one Season
     *   }
     * })
     * 
     */
    delete<T extends SeasonDeleteArgs>(args: SelectSubset<T, SeasonDeleteArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Season.
     * @param {SeasonUpdateArgs} args - Arguments to update one Season.
     * @example
     * // Update one Season
     * const season = await prisma.season.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeasonUpdateArgs>(args: SelectSubset<T, SeasonUpdateArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seasons.
     * @param {SeasonDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.season.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeasonDeleteManyArgs>(args?: SelectSubset<T, SeasonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeasonUpdateManyArgs>(args: SelectSubset<T, SeasonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons and returns the data updated in the database.
     * @param {SeasonUpdateManyAndReturnArgs} args - Arguments to update many Seasons.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seasons and only return the `id`
     * const seasonWithIdOnly = await prisma.season.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeasonUpdateManyAndReturnArgs>(args: SelectSubset<T, SeasonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Season.
     * @param {SeasonUpsertArgs} args - Arguments to update or create a Season.
     * @example
     * // Update or create a Season
     * const season = await prisma.season.upsert({
     *   create: {
     *     // ... data to create a Season
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season we want to update
     *   }
     * })
     */
    upsert<T extends SeasonUpsertArgs>(args: SelectSubset<T, SeasonUpsertArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.season.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends SeasonCountArgs>(
      args?: Subset<T, SeasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeasonAggregateArgs>(args: Subset<T, SeasonAggregateArgs>): Prisma.PrismaPromise<GetSeasonAggregateType<T>>

    /**
     * Group by Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonGroupByArgs} args - Group by arguments.
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
      T extends SeasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonGroupByArgs['orderBy'] }
        : { orderBy?: SeasonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Season model
   */
  readonly fields: SeasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Season.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rewards<T extends Season$rewardsArgs<ExtArgs> = {}>(args?: Subset<T, Season$rewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFTRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Season model
   */
  interface SeasonFieldRefs {
    readonly id: FieldRef<"Season", 'Int'>
    readonly name: FieldRef<"Season", 'String'>
    readonly description: FieldRef<"Season", 'String'>
    readonly startDate: FieldRef<"Season", 'String'>
    readonly endDate: FieldRef<"Season", 'String'>
    readonly tipMultiplier: FieldRef<"Season", 'Float'>
    readonly isActive: FieldRef<"Season", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Season findUnique
   */
  export type SeasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season findUniqueOrThrow
   */
  export type SeasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season findFirst
   */
  export type SeasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season findFirstOrThrow
   */
  export type SeasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season findMany
   */
  export type SeasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season create
   */
  export type SeasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to create a Season.
     */
    data: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
  }

  /**
   * Season createMany
   */
  export type SeasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seasons.
     */
    data: SeasonCreateManyInput | SeasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Season createManyAndReturn
   */
  export type SeasonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * The data used to create many Seasons.
     */
    data: SeasonCreateManyInput | SeasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Season update
   */
  export type SeasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to update a Season.
     */
    data: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
    /**
     * Choose, which Season to update.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season updateMany
   */
  export type SeasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to update.
     */
    limit?: number
  }

  /**
   * Season updateManyAndReturn
   */
  export type SeasonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to update.
     */
    limit?: number
  }

  /**
   * Season upsert
   */
  export type SeasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The filter to search for the Season to update in case it exists.
     */
    where: SeasonWhereUniqueInput
    /**
     * In case the Season found by the `where` argument doesn't exist, create a new Season with this data.
     */
    create: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
    /**
     * In case the Season was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
  }

  /**
   * Season delete
   */
  export type SeasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter which Season to delete.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season deleteMany
   */
  export type SeasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seasons to delete
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to delete.
     */
    limit?: number
  }

  /**
   * Season.rewards
   */
  export type Season$rewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFTReward
     */
    select?: NFTRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFTReward
     */
    omit?: NFTRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFTRewardInclude<ExtArgs> | null
    where?: NFTRewardWhereInput
    orderBy?: NFTRewardOrderByWithRelationInput | NFTRewardOrderByWithRelationInput[]
    cursor?: NFTRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NFTRewardScalarFieldEnum | NFTRewardScalarFieldEnum[]
  }

  /**
   * Season without action
   */
  export type SeasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    xpReward: number | null
  }

  export type BadgeSumAggregateOutputType = {
    xpReward: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    rarity: $Enums.Rarity | null
    unlocked: boolean | null
    unlockDate: string | null
    unlockCondition: string | null
    xpReward: number | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    rarity: $Enums.Rarity | null
    unlocked: boolean | null
    unlockDate: string | null
    unlockCondition: string | null
    xpReward: number | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    rarity: number
    unlocked: number
    unlockDate: number
    unlockCondition: number
    xpReward: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    xpReward?: true
  }

  export type BadgeSumAggregateInputType = {
    xpReward?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    rarity?: true
    unlocked?: true
    unlockDate?: true
    unlockCondition?: true
    xpReward?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    rarity?: true
    unlocked?: true
    unlockDate?: true
    unlockCondition?: true
    xpReward?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    rarity?: true
    unlocked?: true
    unlockDate?: true
    unlockCondition?: true
    xpReward?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: string
    name: string
    description: string
    icon: string
    rarity: $Enums.Rarity
    unlocked: boolean
    unlockDate: string | null
    unlockCondition: string
    xpReward: number
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    rarity?: boolean
    unlocked?: boolean
    unlockDate?: boolean
    unlockCondition?: boolean
    xpReward?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    rarity?: boolean
    unlocked?: boolean
    unlockDate?: boolean
    unlockCondition?: boolean
    xpReward?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    rarity?: boolean
    unlocked?: boolean
    unlockDate?: boolean
    unlockCondition?: boolean
    xpReward?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    rarity?: boolean
    unlocked?: boolean
    unlockDate?: boolean
    unlockCondition?: boolean
    xpReward?: boolean
  }

  export type BadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon" | "rarity" | "unlocked" | "unlockDate" | "unlockCondition" | "xpReward", ExtArgs["result"]["badge"]>

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      icon: string
      rarity: $Enums.Rarity
      unlocked: boolean
      unlockDate: string | null
      unlockCondition: string
      xpReward: number
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Badges and returns the data saved in the database.
     * @param {BadgeCreateManyAndReturnArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges and returns the data updated in the database.
     * @param {BadgeUpdateManyAndReturnArgs} args - Arguments to update many Badges.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.updateManyAndReturn({
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
    updateManyAndReturn<T extends BadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, BadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
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
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Badge model
   */
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'String'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly description: FieldRef<"Badge", 'String'>
    readonly icon: FieldRef<"Badge", 'String'>
    readonly rarity: FieldRef<"Badge", 'Rarity'>
    readonly unlocked: FieldRef<"Badge", 'Boolean'>
    readonly unlockDate: FieldRef<"Badge", 'String'>
    readonly unlockCondition: FieldRef<"Badge", 'String'>
    readonly xpReward: FieldRef<"Badge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge createManyAndReturn
   */
  export type BadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge updateManyAndReturn
   */
  export type BadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to delete.
     */
    limit?: number
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
  }


  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementAvgAggregateOutputType = {
    xpReward: number | null
    progress: number | null
    target: number | null
  }

  export type AchievementSumAggregateOutputType = {
    xpReward: number | null
    progress: number | null
    target: number | null
  }

  export type AchievementMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    rarity: $Enums.Rarity | null
    unlocked: boolean | null
    unlockDate: string | null
    unlockCondition: string | null
    xpReward: number | null
    category: $Enums.AchievementCategory | null
    progress: number | null
    target: number | null
    rewardType: $Enums.RewardType | null
  }

  export type AchievementMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    rarity: $Enums.Rarity | null
    unlocked: boolean | null
    unlockDate: string | null
    unlockCondition: string | null
    xpReward: number | null
    category: $Enums.AchievementCategory | null
    progress: number | null
    target: number | null
    rewardType: $Enums.RewardType | null
  }

  export type AchievementCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    rarity: number
    unlocked: number
    unlockDate: number
    unlockCondition: number
    xpReward: number
    category: number
    progress: number
    target: number
    rewardType: number
    _all: number
  }


  export type AchievementAvgAggregateInputType = {
    xpReward?: true
    progress?: true
    target?: true
  }

  export type AchievementSumAggregateInputType = {
    xpReward?: true
    progress?: true
    target?: true
  }

  export type AchievementMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    rarity?: true
    unlocked?: true
    unlockDate?: true
    unlockCondition?: true
    xpReward?: true
    category?: true
    progress?: true
    target?: true
    rewardType?: true
  }

  export type AchievementMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    rarity?: true
    unlocked?: true
    unlockDate?: true
    unlockCondition?: true
    xpReward?: true
    category?: true
    progress?: true
    target?: true
    rewardType?: true
  }

  export type AchievementCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    rarity?: true
    unlocked?: true
    unlockDate?: true
    unlockCondition?: true
    xpReward?: true
    category?: true
    progress?: true
    target?: true
    rewardType?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _avg?: AchievementAvgAggregateInputType
    _sum?: AchievementSumAggregateInputType
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
    id: string
    name: string
    description: string
    icon: string
    rarity: $Enums.Rarity
    unlocked: boolean
    unlockDate: string | null
    unlockCondition: string
    xpReward: number
    category: $Enums.AchievementCategory
    progress: number
    target: number
    rewardType: $Enums.RewardType
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    rarity?: boolean
    unlocked?: boolean
    unlockDate?: boolean
    unlockCondition?: boolean
    xpReward?: boolean
    category?: boolean
    progress?: boolean
    target?: boolean
    rewardType?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    rarity?: boolean
    unlocked?: boolean
    unlockDate?: boolean
    unlockCondition?: boolean
    xpReward?: boolean
    category?: boolean
    progress?: boolean
    target?: boolean
    rewardType?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    rarity?: boolean
    unlocked?: boolean
    unlockDate?: boolean
    unlockCondition?: boolean
    xpReward?: boolean
    category?: boolean
    progress?: boolean
    target?: boolean
    rewardType?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    rarity?: boolean
    unlocked?: boolean
    unlockDate?: boolean
    unlockCondition?: boolean
    xpReward?: boolean
    category?: boolean
    progress?: boolean
    target?: boolean
    rewardType?: boolean
  }

  export type AchievementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon" | "rarity" | "unlocked" | "unlockDate" | "unlockCondition" | "xpReward" | "category" | "progress" | "target" | "rewardType", ExtArgs["result"]["achievement"]>

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      icon: string
      rarity: $Enums.Rarity
      unlocked: boolean
      unlockDate: string | null
      unlockCondition: string
      xpReward: number
      category: $Enums.AchievementCategory
      progress: number
      target: number
      rewardType: $Enums.RewardType
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {AchievementUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AchievementUpdateManyAndReturnArgs>(args: SelectSubset<T, AchievementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
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
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Achievement model
   */
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly name: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly icon: FieldRef<"Achievement", 'String'>
    readonly rarity: FieldRef<"Achievement", 'Rarity'>
    readonly unlocked: FieldRef<"Achievement", 'Boolean'>
    readonly unlockDate: FieldRef<"Achievement", 'String'>
    readonly unlockCondition: FieldRef<"Achievement", 'String'>
    readonly xpReward: FieldRef<"Achievement", 'Int'>
    readonly category: FieldRef<"Achievement", 'AchievementCategory'>
    readonly progress: FieldRef<"Achievement", 'Int'>
    readonly target: FieldRef<"Achievement", 'Int'>
    readonly rewardType: FieldRef<"Achievement", 'RewardType'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement updateManyAndReturn
   */
  export type AchievementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to update.
     */
    limit?: number
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
    /**
     * Limit how many Achievements to delete.
     */
    limit?: number
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achievement
     */
    omit?: AchievementOmit<ExtArgs> | null
  }


  /**
   * Model TemporaryEvent
   */

  export type AggregateTemporaryEvent = {
    _count: TemporaryEventCountAggregateOutputType | null
    _min: TemporaryEventMinAggregateOutputType | null
    _max: TemporaryEventMaxAggregateOutputType | null
  }

  export type TemporaryEventMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startDate: string | null
    endDate: string | null
    isActive: boolean | null
  }

  export type TemporaryEventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    startDate: string | null
    endDate: string | null
    isActive: boolean | null
  }

  export type TemporaryEventCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    endDate: number
    isActive: number
    rewards: number
    missions: number
    leaderboard: number
    _all: number
  }


  export type TemporaryEventMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isActive?: true
  }

  export type TemporaryEventMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isActive?: true
  }

  export type TemporaryEventCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    isActive?: true
    rewards?: true
    missions?: true
    leaderboard?: true
    _all?: true
  }

  export type TemporaryEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemporaryEvent to aggregate.
     */
    where?: TemporaryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryEvents to fetch.
     */
    orderBy?: TemporaryEventOrderByWithRelationInput | TemporaryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemporaryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemporaryEvents
    **/
    _count?: true | TemporaryEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemporaryEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemporaryEventMaxAggregateInputType
  }

  export type GetTemporaryEventAggregateType<T extends TemporaryEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTemporaryEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemporaryEvent[P]>
      : GetScalarType<T[P], AggregateTemporaryEvent[P]>
  }




  export type TemporaryEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemporaryEventWhereInput
    orderBy?: TemporaryEventOrderByWithAggregationInput | TemporaryEventOrderByWithAggregationInput[]
    by: TemporaryEventScalarFieldEnum[] | TemporaryEventScalarFieldEnum
    having?: TemporaryEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemporaryEventCountAggregateInputType | true
    _min?: TemporaryEventMinAggregateInputType
    _max?: TemporaryEventMaxAggregateInputType
  }

  export type TemporaryEventGroupByOutputType = {
    id: string
    name: string
    description: string
    startDate: string
    endDate: string
    isActive: boolean
    rewards: JsonValue
    missions: JsonValue
    leaderboard: JsonValue
    _count: TemporaryEventCountAggregateOutputType | null
    _min: TemporaryEventMinAggregateOutputType | null
    _max: TemporaryEventMaxAggregateOutputType | null
  }

  type GetTemporaryEventGroupByPayload<T extends TemporaryEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemporaryEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemporaryEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemporaryEventGroupByOutputType[P]>
            : GetScalarType<T[P], TemporaryEventGroupByOutputType[P]>
        }
      >
    >


  export type TemporaryEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    rewards?: boolean
    missions?: boolean
    leaderboard?: boolean
  }, ExtArgs["result"]["temporaryEvent"]>

  export type TemporaryEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    rewards?: boolean
    missions?: boolean
    leaderboard?: boolean
  }, ExtArgs["result"]["temporaryEvent"]>

  export type TemporaryEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    rewards?: boolean
    missions?: boolean
    leaderboard?: boolean
  }, ExtArgs["result"]["temporaryEvent"]>

  export type TemporaryEventSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    rewards?: boolean
    missions?: boolean
    leaderboard?: boolean
  }

  export type TemporaryEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "endDate" | "isActive" | "rewards" | "missions" | "leaderboard", ExtArgs["result"]["temporaryEvent"]>

  export type $TemporaryEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemporaryEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      startDate: string
      endDate: string
      isActive: boolean
      rewards: Prisma.JsonValue
      missions: Prisma.JsonValue
      leaderboard: Prisma.JsonValue
    }, ExtArgs["result"]["temporaryEvent"]>
    composites: {}
  }

  type TemporaryEventGetPayload<S extends boolean | null | undefined | TemporaryEventDefaultArgs> = $Result.GetResult<Prisma.$TemporaryEventPayload, S>

  type TemporaryEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemporaryEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemporaryEventCountAggregateInputType | true
    }

  export interface TemporaryEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemporaryEvent'], meta: { name: 'TemporaryEvent' } }
    /**
     * Find zero or one TemporaryEvent that matches the filter.
     * @param {TemporaryEventFindUniqueArgs} args - Arguments to find a TemporaryEvent
     * @example
     * // Get one TemporaryEvent
     * const temporaryEvent = await prisma.temporaryEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemporaryEventFindUniqueArgs>(args: SelectSubset<T, TemporaryEventFindUniqueArgs<ExtArgs>>): Prisma__TemporaryEventClient<$Result.GetResult<Prisma.$TemporaryEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemporaryEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemporaryEventFindUniqueOrThrowArgs} args - Arguments to find a TemporaryEvent
     * @example
     * // Get one TemporaryEvent
     * const temporaryEvent = await prisma.temporaryEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemporaryEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TemporaryEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemporaryEventClient<$Result.GetResult<Prisma.$TemporaryEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemporaryEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryEventFindFirstArgs} args - Arguments to find a TemporaryEvent
     * @example
     * // Get one TemporaryEvent
     * const temporaryEvent = await prisma.temporaryEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemporaryEventFindFirstArgs>(args?: SelectSubset<T, TemporaryEventFindFirstArgs<ExtArgs>>): Prisma__TemporaryEventClient<$Result.GetResult<Prisma.$TemporaryEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemporaryEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryEventFindFirstOrThrowArgs} args - Arguments to find a TemporaryEvent
     * @example
     * // Get one TemporaryEvent
     * const temporaryEvent = await prisma.temporaryEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemporaryEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TemporaryEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemporaryEventClient<$Result.GetResult<Prisma.$TemporaryEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemporaryEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemporaryEvents
     * const temporaryEvents = await prisma.temporaryEvent.findMany()
     * 
     * // Get first 10 TemporaryEvents
     * const temporaryEvents = await prisma.temporaryEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const temporaryEventWithIdOnly = await prisma.temporaryEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemporaryEventFindManyArgs>(args?: SelectSubset<T, TemporaryEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemporaryEvent.
     * @param {TemporaryEventCreateArgs} args - Arguments to create a TemporaryEvent.
     * @example
     * // Create one TemporaryEvent
     * const TemporaryEvent = await prisma.temporaryEvent.create({
     *   data: {
     *     // ... data to create a TemporaryEvent
     *   }
     * })
     * 
     */
    create<T extends TemporaryEventCreateArgs>(args: SelectSubset<T, TemporaryEventCreateArgs<ExtArgs>>): Prisma__TemporaryEventClient<$Result.GetResult<Prisma.$TemporaryEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemporaryEvents.
     * @param {TemporaryEventCreateManyArgs} args - Arguments to create many TemporaryEvents.
     * @example
     * // Create many TemporaryEvents
     * const temporaryEvent = await prisma.temporaryEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemporaryEventCreateManyArgs>(args?: SelectSubset<T, TemporaryEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemporaryEvents and returns the data saved in the database.
     * @param {TemporaryEventCreateManyAndReturnArgs} args - Arguments to create many TemporaryEvents.
     * @example
     * // Create many TemporaryEvents
     * const temporaryEvent = await prisma.temporaryEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemporaryEvents and only return the `id`
     * const temporaryEventWithIdOnly = await prisma.temporaryEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemporaryEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TemporaryEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemporaryEvent.
     * @param {TemporaryEventDeleteArgs} args - Arguments to delete one TemporaryEvent.
     * @example
     * // Delete one TemporaryEvent
     * const TemporaryEvent = await prisma.temporaryEvent.delete({
     *   where: {
     *     // ... filter to delete one TemporaryEvent
     *   }
     * })
     * 
     */
    delete<T extends TemporaryEventDeleteArgs>(args: SelectSubset<T, TemporaryEventDeleteArgs<ExtArgs>>): Prisma__TemporaryEventClient<$Result.GetResult<Prisma.$TemporaryEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemporaryEvent.
     * @param {TemporaryEventUpdateArgs} args - Arguments to update one TemporaryEvent.
     * @example
     * // Update one TemporaryEvent
     * const temporaryEvent = await prisma.temporaryEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemporaryEventUpdateArgs>(args: SelectSubset<T, TemporaryEventUpdateArgs<ExtArgs>>): Prisma__TemporaryEventClient<$Result.GetResult<Prisma.$TemporaryEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemporaryEvents.
     * @param {TemporaryEventDeleteManyArgs} args - Arguments to filter TemporaryEvents to delete.
     * @example
     * // Delete a few TemporaryEvents
     * const { count } = await prisma.temporaryEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemporaryEventDeleteManyArgs>(args?: SelectSubset<T, TemporaryEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemporaryEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemporaryEvents
     * const temporaryEvent = await prisma.temporaryEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemporaryEventUpdateManyArgs>(args: SelectSubset<T, TemporaryEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemporaryEvents and returns the data updated in the database.
     * @param {TemporaryEventUpdateManyAndReturnArgs} args - Arguments to update many TemporaryEvents.
     * @example
     * // Update many TemporaryEvents
     * const temporaryEvent = await prisma.temporaryEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemporaryEvents and only return the `id`
     * const temporaryEventWithIdOnly = await prisma.temporaryEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemporaryEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TemporaryEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemporaryEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemporaryEvent.
     * @param {TemporaryEventUpsertArgs} args - Arguments to update or create a TemporaryEvent.
     * @example
     * // Update or create a TemporaryEvent
     * const temporaryEvent = await prisma.temporaryEvent.upsert({
     *   create: {
     *     // ... data to create a TemporaryEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemporaryEvent we want to update
     *   }
     * })
     */
    upsert<T extends TemporaryEventUpsertArgs>(args: SelectSubset<T, TemporaryEventUpsertArgs<ExtArgs>>): Prisma__TemporaryEventClient<$Result.GetResult<Prisma.$TemporaryEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemporaryEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryEventCountArgs} args - Arguments to filter TemporaryEvents to count.
     * @example
     * // Count the number of TemporaryEvents
     * const count = await prisma.temporaryEvent.count({
     *   where: {
     *     // ... the filter for the TemporaryEvents we want to count
     *   }
     * })
    **/
    count<T extends TemporaryEventCountArgs>(
      args?: Subset<T, TemporaryEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemporaryEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemporaryEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemporaryEventAggregateArgs>(args: Subset<T, TemporaryEventAggregateArgs>): Prisma.PrismaPromise<GetTemporaryEventAggregateType<T>>

    /**
     * Group by TemporaryEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemporaryEventGroupByArgs} args - Group by arguments.
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
      T extends TemporaryEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemporaryEventGroupByArgs['orderBy'] }
        : { orderBy?: TemporaryEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemporaryEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemporaryEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemporaryEvent model
   */
  readonly fields: TemporaryEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemporaryEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemporaryEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TemporaryEvent model
   */
  interface TemporaryEventFieldRefs {
    readonly id: FieldRef<"TemporaryEvent", 'String'>
    readonly name: FieldRef<"TemporaryEvent", 'String'>
    readonly description: FieldRef<"TemporaryEvent", 'String'>
    readonly startDate: FieldRef<"TemporaryEvent", 'String'>
    readonly endDate: FieldRef<"TemporaryEvent", 'String'>
    readonly isActive: FieldRef<"TemporaryEvent", 'Boolean'>
    readonly rewards: FieldRef<"TemporaryEvent", 'Json'>
    readonly missions: FieldRef<"TemporaryEvent", 'Json'>
    readonly leaderboard: FieldRef<"TemporaryEvent", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * TemporaryEvent findUnique
   */
  export type TemporaryEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
    /**
     * Filter, which TemporaryEvent to fetch.
     */
    where: TemporaryEventWhereUniqueInput
  }

  /**
   * TemporaryEvent findUniqueOrThrow
   */
  export type TemporaryEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
    /**
     * Filter, which TemporaryEvent to fetch.
     */
    where: TemporaryEventWhereUniqueInput
  }

  /**
   * TemporaryEvent findFirst
   */
  export type TemporaryEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
    /**
     * Filter, which TemporaryEvent to fetch.
     */
    where?: TemporaryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryEvents to fetch.
     */
    orderBy?: TemporaryEventOrderByWithRelationInput | TemporaryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemporaryEvents.
     */
    cursor?: TemporaryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemporaryEvents.
     */
    distinct?: TemporaryEventScalarFieldEnum | TemporaryEventScalarFieldEnum[]
  }

  /**
   * TemporaryEvent findFirstOrThrow
   */
  export type TemporaryEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
    /**
     * Filter, which TemporaryEvent to fetch.
     */
    where?: TemporaryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryEvents to fetch.
     */
    orderBy?: TemporaryEventOrderByWithRelationInput | TemporaryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemporaryEvents.
     */
    cursor?: TemporaryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemporaryEvents.
     */
    distinct?: TemporaryEventScalarFieldEnum | TemporaryEventScalarFieldEnum[]
  }

  /**
   * TemporaryEvent findMany
   */
  export type TemporaryEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
    /**
     * Filter, which TemporaryEvents to fetch.
     */
    where?: TemporaryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemporaryEvents to fetch.
     */
    orderBy?: TemporaryEventOrderByWithRelationInput | TemporaryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemporaryEvents.
     */
    cursor?: TemporaryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemporaryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemporaryEvents.
     */
    skip?: number
    distinct?: TemporaryEventScalarFieldEnum | TemporaryEventScalarFieldEnum[]
  }

  /**
   * TemporaryEvent create
   */
  export type TemporaryEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
    /**
     * The data needed to create a TemporaryEvent.
     */
    data: XOR<TemporaryEventCreateInput, TemporaryEventUncheckedCreateInput>
  }

  /**
   * TemporaryEvent createMany
   */
  export type TemporaryEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemporaryEvents.
     */
    data: TemporaryEventCreateManyInput | TemporaryEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemporaryEvent createManyAndReturn
   */
  export type TemporaryEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
    /**
     * The data used to create many TemporaryEvents.
     */
    data: TemporaryEventCreateManyInput | TemporaryEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemporaryEvent update
   */
  export type TemporaryEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
    /**
     * The data needed to update a TemporaryEvent.
     */
    data: XOR<TemporaryEventUpdateInput, TemporaryEventUncheckedUpdateInput>
    /**
     * Choose, which TemporaryEvent to update.
     */
    where: TemporaryEventWhereUniqueInput
  }

  /**
   * TemporaryEvent updateMany
   */
  export type TemporaryEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemporaryEvents.
     */
    data: XOR<TemporaryEventUpdateManyMutationInput, TemporaryEventUncheckedUpdateManyInput>
    /**
     * Filter which TemporaryEvents to update
     */
    where?: TemporaryEventWhereInput
    /**
     * Limit how many TemporaryEvents to update.
     */
    limit?: number
  }

  /**
   * TemporaryEvent updateManyAndReturn
   */
  export type TemporaryEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
    /**
     * The data used to update TemporaryEvents.
     */
    data: XOR<TemporaryEventUpdateManyMutationInput, TemporaryEventUncheckedUpdateManyInput>
    /**
     * Filter which TemporaryEvents to update
     */
    where?: TemporaryEventWhereInput
    /**
     * Limit how many TemporaryEvents to update.
     */
    limit?: number
  }

  /**
   * TemporaryEvent upsert
   */
  export type TemporaryEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
    /**
     * The filter to search for the TemporaryEvent to update in case it exists.
     */
    where: TemporaryEventWhereUniqueInput
    /**
     * In case the TemporaryEvent found by the `where` argument doesn't exist, create a new TemporaryEvent with this data.
     */
    create: XOR<TemporaryEventCreateInput, TemporaryEventUncheckedCreateInput>
    /**
     * In case the TemporaryEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemporaryEventUpdateInput, TemporaryEventUncheckedUpdateInput>
  }

  /**
   * TemporaryEvent delete
   */
  export type TemporaryEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
    /**
     * Filter which TemporaryEvent to delete.
     */
    where: TemporaryEventWhereUniqueInput
  }

  /**
   * TemporaryEvent deleteMany
   */
  export type TemporaryEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemporaryEvents to delete
     */
    where?: TemporaryEventWhereInput
    /**
     * Limit how many TemporaryEvents to delete.
     */
    limit?: number
  }

  /**
   * TemporaryEvent without action
   */
  export type TemporaryEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemporaryEvent
     */
    select?: TemporaryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemporaryEvent
     */
    omit?: TemporaryEventOmit<ExtArgs> | null
  }


  /**
   * Model Reputation
   */

  export type AggregateReputation = {
    _count: ReputationCountAggregateOutputType | null
    _avg: ReputationAvgAggregateOutputType | null
    _sum: ReputationSumAggregateOutputType | null
    _min: ReputationMinAggregateOutputType | null
    _max: ReputationMaxAggregateOutputType | null
  }

  export type ReputationAvgAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    xpToNextLevel: number | null
  }

  export type ReputationSumAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    xpToNextLevel: number | null
  }

  export type ReputationMinAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    xpToNextLevel: number | null
    title: string | null
    badge: string | null
  }

  export type ReputationMaxAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    xpToNextLevel: number | null
    title: string | null
    badge: string | null
  }

  export type ReputationCountAggregateOutputType = {
    id: number
    level: number
    xp: number
    xpToNextLevel: number
    title: number
    badge: number
    benefits: number
    _all: number
  }


  export type ReputationAvgAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    xpToNextLevel?: true
  }

  export type ReputationSumAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    xpToNextLevel?: true
  }

  export type ReputationMinAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    xpToNextLevel?: true
    title?: true
    badge?: true
  }

  export type ReputationMaxAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    xpToNextLevel?: true
    title?: true
    badge?: true
  }

  export type ReputationCountAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    xpToNextLevel?: true
    title?: true
    badge?: true
    benefits?: true
    _all?: true
  }

  export type ReputationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reputation to aggregate.
     */
    where?: ReputationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reputations to fetch.
     */
    orderBy?: ReputationOrderByWithRelationInput | ReputationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReputationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reputations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reputations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reputations
    **/
    _count?: true | ReputationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReputationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReputationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReputationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReputationMaxAggregateInputType
  }

  export type GetReputationAggregateType<T extends ReputationAggregateArgs> = {
        [P in keyof T & keyof AggregateReputation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReputation[P]>
      : GetScalarType<T[P], AggregateReputation[P]>
  }




  export type ReputationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReputationWhereInput
    orderBy?: ReputationOrderByWithAggregationInput | ReputationOrderByWithAggregationInput[]
    by: ReputationScalarFieldEnum[] | ReputationScalarFieldEnum
    having?: ReputationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReputationCountAggregateInputType | true
    _avg?: ReputationAvgAggregateInputType
    _sum?: ReputationSumAggregateInputType
    _min?: ReputationMinAggregateInputType
    _max?: ReputationMaxAggregateInputType
  }

  export type ReputationGroupByOutputType = {
    id: number
    level: number
    xp: number
    xpToNextLevel: number
    title: string
    badge: string
    benefits: string[]
    _count: ReputationCountAggregateOutputType | null
    _avg: ReputationAvgAggregateOutputType | null
    _sum: ReputationSumAggregateOutputType | null
    _min: ReputationMinAggregateOutputType | null
    _max: ReputationMaxAggregateOutputType | null
  }

  type GetReputationGroupByPayload<T extends ReputationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReputationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReputationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReputationGroupByOutputType[P]>
            : GetScalarType<T[P], ReputationGroupByOutputType[P]>
        }
      >
    >


  export type ReputationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    xp?: boolean
    xpToNextLevel?: boolean
    title?: boolean
    badge?: boolean
    benefits?: boolean
  }, ExtArgs["result"]["reputation"]>

  export type ReputationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    xp?: boolean
    xpToNextLevel?: boolean
    title?: boolean
    badge?: boolean
    benefits?: boolean
  }, ExtArgs["result"]["reputation"]>

  export type ReputationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    xp?: boolean
    xpToNextLevel?: boolean
    title?: boolean
    badge?: boolean
    benefits?: boolean
  }, ExtArgs["result"]["reputation"]>

  export type ReputationSelectScalar = {
    id?: boolean
    level?: boolean
    xp?: boolean
    xpToNextLevel?: boolean
    title?: boolean
    badge?: boolean
    benefits?: boolean
  }

  export type ReputationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "level" | "xp" | "xpToNextLevel" | "title" | "badge" | "benefits", ExtArgs["result"]["reputation"]>

  export type $ReputationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reputation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      level: number
      xp: number
      xpToNextLevel: number
      title: string
      badge: string
      benefits: string[]
    }, ExtArgs["result"]["reputation"]>
    composites: {}
  }

  type ReputationGetPayload<S extends boolean | null | undefined | ReputationDefaultArgs> = $Result.GetResult<Prisma.$ReputationPayload, S>

  type ReputationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReputationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReputationCountAggregateInputType | true
    }

  export interface ReputationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reputation'], meta: { name: 'Reputation' } }
    /**
     * Find zero or one Reputation that matches the filter.
     * @param {ReputationFindUniqueArgs} args - Arguments to find a Reputation
     * @example
     * // Get one Reputation
     * const reputation = await prisma.reputation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReputationFindUniqueArgs>(args: SelectSubset<T, ReputationFindUniqueArgs<ExtArgs>>): Prisma__ReputationClient<$Result.GetResult<Prisma.$ReputationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reputation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReputationFindUniqueOrThrowArgs} args - Arguments to find a Reputation
     * @example
     * // Get one Reputation
     * const reputation = await prisma.reputation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReputationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReputationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReputationClient<$Result.GetResult<Prisma.$ReputationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reputation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationFindFirstArgs} args - Arguments to find a Reputation
     * @example
     * // Get one Reputation
     * const reputation = await prisma.reputation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReputationFindFirstArgs>(args?: SelectSubset<T, ReputationFindFirstArgs<ExtArgs>>): Prisma__ReputationClient<$Result.GetResult<Prisma.$ReputationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reputation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationFindFirstOrThrowArgs} args - Arguments to find a Reputation
     * @example
     * // Get one Reputation
     * const reputation = await prisma.reputation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReputationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReputationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReputationClient<$Result.GetResult<Prisma.$ReputationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reputations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reputations
     * const reputations = await prisma.reputation.findMany()
     * 
     * // Get first 10 Reputations
     * const reputations = await prisma.reputation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reputationWithIdOnly = await prisma.reputation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReputationFindManyArgs>(args?: SelectSubset<T, ReputationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReputationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reputation.
     * @param {ReputationCreateArgs} args - Arguments to create a Reputation.
     * @example
     * // Create one Reputation
     * const Reputation = await prisma.reputation.create({
     *   data: {
     *     // ... data to create a Reputation
     *   }
     * })
     * 
     */
    create<T extends ReputationCreateArgs>(args: SelectSubset<T, ReputationCreateArgs<ExtArgs>>): Prisma__ReputationClient<$Result.GetResult<Prisma.$ReputationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reputations.
     * @param {ReputationCreateManyArgs} args - Arguments to create many Reputations.
     * @example
     * // Create many Reputations
     * const reputation = await prisma.reputation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReputationCreateManyArgs>(args?: SelectSubset<T, ReputationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reputations and returns the data saved in the database.
     * @param {ReputationCreateManyAndReturnArgs} args - Arguments to create many Reputations.
     * @example
     * // Create many Reputations
     * const reputation = await prisma.reputation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reputations and only return the `id`
     * const reputationWithIdOnly = await prisma.reputation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReputationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReputationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReputationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reputation.
     * @param {ReputationDeleteArgs} args - Arguments to delete one Reputation.
     * @example
     * // Delete one Reputation
     * const Reputation = await prisma.reputation.delete({
     *   where: {
     *     // ... filter to delete one Reputation
     *   }
     * })
     * 
     */
    delete<T extends ReputationDeleteArgs>(args: SelectSubset<T, ReputationDeleteArgs<ExtArgs>>): Prisma__ReputationClient<$Result.GetResult<Prisma.$ReputationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reputation.
     * @param {ReputationUpdateArgs} args - Arguments to update one Reputation.
     * @example
     * // Update one Reputation
     * const reputation = await prisma.reputation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReputationUpdateArgs>(args: SelectSubset<T, ReputationUpdateArgs<ExtArgs>>): Prisma__ReputationClient<$Result.GetResult<Prisma.$ReputationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reputations.
     * @param {ReputationDeleteManyArgs} args - Arguments to filter Reputations to delete.
     * @example
     * // Delete a few Reputations
     * const { count } = await prisma.reputation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReputationDeleteManyArgs>(args?: SelectSubset<T, ReputationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reputations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reputations
     * const reputation = await prisma.reputation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReputationUpdateManyArgs>(args: SelectSubset<T, ReputationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reputations and returns the data updated in the database.
     * @param {ReputationUpdateManyAndReturnArgs} args - Arguments to update many Reputations.
     * @example
     * // Update many Reputations
     * const reputation = await prisma.reputation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reputations and only return the `id`
     * const reputationWithIdOnly = await prisma.reputation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReputationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReputationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReputationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reputation.
     * @param {ReputationUpsertArgs} args - Arguments to update or create a Reputation.
     * @example
     * // Update or create a Reputation
     * const reputation = await prisma.reputation.upsert({
     *   create: {
     *     // ... data to create a Reputation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reputation we want to update
     *   }
     * })
     */
    upsert<T extends ReputationUpsertArgs>(args: SelectSubset<T, ReputationUpsertArgs<ExtArgs>>): Prisma__ReputationClient<$Result.GetResult<Prisma.$ReputationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reputations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationCountArgs} args - Arguments to filter Reputations to count.
     * @example
     * // Count the number of Reputations
     * const count = await prisma.reputation.count({
     *   where: {
     *     // ... the filter for the Reputations we want to count
     *   }
     * })
    **/
    count<T extends ReputationCountArgs>(
      args?: Subset<T, ReputationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReputationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reputation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReputationAggregateArgs>(args: Subset<T, ReputationAggregateArgs>): Prisma.PrismaPromise<GetReputationAggregateType<T>>

    /**
     * Group by Reputation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationGroupByArgs} args - Group by arguments.
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
      T extends ReputationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReputationGroupByArgs['orderBy'] }
        : { orderBy?: ReputationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReputationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReputationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reputation model
   */
  readonly fields: ReputationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reputation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReputationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Reputation model
   */
  interface ReputationFieldRefs {
    readonly id: FieldRef<"Reputation", 'Int'>
    readonly level: FieldRef<"Reputation", 'Int'>
    readonly xp: FieldRef<"Reputation", 'Int'>
    readonly xpToNextLevel: FieldRef<"Reputation", 'Int'>
    readonly title: FieldRef<"Reputation", 'String'>
    readonly badge: FieldRef<"Reputation", 'String'>
    readonly benefits: FieldRef<"Reputation", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Reputation findUnique
   */
  export type ReputationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
    /**
     * Filter, which Reputation to fetch.
     */
    where: ReputationWhereUniqueInput
  }

  /**
   * Reputation findUniqueOrThrow
   */
  export type ReputationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
    /**
     * Filter, which Reputation to fetch.
     */
    where: ReputationWhereUniqueInput
  }

  /**
   * Reputation findFirst
   */
  export type ReputationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
    /**
     * Filter, which Reputation to fetch.
     */
    where?: ReputationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reputations to fetch.
     */
    orderBy?: ReputationOrderByWithRelationInput | ReputationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reputations.
     */
    cursor?: ReputationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reputations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reputations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reputations.
     */
    distinct?: ReputationScalarFieldEnum | ReputationScalarFieldEnum[]
  }

  /**
   * Reputation findFirstOrThrow
   */
  export type ReputationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
    /**
     * Filter, which Reputation to fetch.
     */
    where?: ReputationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reputations to fetch.
     */
    orderBy?: ReputationOrderByWithRelationInput | ReputationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reputations.
     */
    cursor?: ReputationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reputations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reputations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reputations.
     */
    distinct?: ReputationScalarFieldEnum | ReputationScalarFieldEnum[]
  }

  /**
   * Reputation findMany
   */
  export type ReputationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
    /**
     * Filter, which Reputations to fetch.
     */
    where?: ReputationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reputations to fetch.
     */
    orderBy?: ReputationOrderByWithRelationInput | ReputationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reputations.
     */
    cursor?: ReputationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reputations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reputations.
     */
    skip?: number
    distinct?: ReputationScalarFieldEnum | ReputationScalarFieldEnum[]
  }

  /**
   * Reputation create
   */
  export type ReputationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
    /**
     * The data needed to create a Reputation.
     */
    data: XOR<ReputationCreateInput, ReputationUncheckedCreateInput>
  }

  /**
   * Reputation createMany
   */
  export type ReputationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reputations.
     */
    data: ReputationCreateManyInput | ReputationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reputation createManyAndReturn
   */
  export type ReputationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
    /**
     * The data used to create many Reputations.
     */
    data: ReputationCreateManyInput | ReputationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reputation update
   */
  export type ReputationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
    /**
     * The data needed to update a Reputation.
     */
    data: XOR<ReputationUpdateInput, ReputationUncheckedUpdateInput>
    /**
     * Choose, which Reputation to update.
     */
    where: ReputationWhereUniqueInput
  }

  /**
   * Reputation updateMany
   */
  export type ReputationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reputations.
     */
    data: XOR<ReputationUpdateManyMutationInput, ReputationUncheckedUpdateManyInput>
    /**
     * Filter which Reputations to update
     */
    where?: ReputationWhereInput
    /**
     * Limit how many Reputations to update.
     */
    limit?: number
  }

  /**
   * Reputation updateManyAndReturn
   */
  export type ReputationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
    /**
     * The data used to update Reputations.
     */
    data: XOR<ReputationUpdateManyMutationInput, ReputationUncheckedUpdateManyInput>
    /**
     * Filter which Reputations to update
     */
    where?: ReputationWhereInput
    /**
     * Limit how many Reputations to update.
     */
    limit?: number
  }

  /**
   * Reputation upsert
   */
  export type ReputationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
    /**
     * The filter to search for the Reputation to update in case it exists.
     */
    where: ReputationWhereUniqueInput
    /**
     * In case the Reputation found by the `where` argument doesn't exist, create a new Reputation with this data.
     */
    create: XOR<ReputationCreateInput, ReputationUncheckedCreateInput>
    /**
     * In case the Reputation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReputationUpdateInput, ReputationUncheckedUpdateInput>
  }

  /**
   * Reputation delete
   */
  export type ReputationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
    /**
     * Filter which Reputation to delete.
     */
    where: ReputationWhereUniqueInput
  }

  /**
   * Reputation deleteMany
   */
  export type ReputationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reputations to delete
     */
    where?: ReputationWhereInput
    /**
     * Limit how many Reputations to delete.
     */
    limit?: number
  }

  /**
   * Reputation without action
   */
  export type ReputationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reputation
     */
    select?: ReputationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reputation
     */
    omit?: ReputationOmit<ExtArgs> | null
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
    username: 'username',
    avatar: 'avatar',
    stakingPower: 'stakingPower',
    reputation: 'reputation',
    tier: 'tier',
    following: 'following',
    followers: 'followers',
    totalTipsGiven: 'totalTipsGiven',
    totalCommentsPosted: 'totalCommentsPosted',
    dailyMissionsCompleted: 'dailyMissionsCompleted',
    streakDays: 'streakDays',
    wallet: 'wallet'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bio: 'bio',
    image: 'image',
    stakingPower: 'stakingPower',
    totalTips: 'totalTips',
    rank: 'rank',
    genre: 'genre'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    artistId: 'artistId',
    donorId: 'donorId',
    amount: 'amount',
    message: 'message',
    timestamp: 'timestamp',
    stakingPower: 'stakingPower'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    artistId: 'artistId',
    userId: 'userId',
    username: 'username',
    message: 'message',
    timestamp: 'timestamp',
    likes: 'likes',
    avatar: 'avatar'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ActivityFeedItemScalarFieldEnum: {
    id: 'id',
    type: 'type',
    userId: 'userId',
    artistId: 'artistId',
    artistName: 'artistName',
    amount: 'amount',
    message: 'message',
    timestamp: 'timestamp',
    icon: 'icon'
  };

  export type ActivityFeedItemScalarFieldEnum = (typeof ActivityFeedItemScalarFieldEnum)[keyof typeof ActivityFeedItemScalarFieldEnum]


  export const DailyMissionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    reward: 'reward',
    type: 'type',
    target: 'target',
    progress: 'progress',
    completed: 'completed',
    icon: 'icon'
  };

  export type DailyMissionScalarFieldEnum = (typeof DailyMissionScalarFieldEnum)[keyof typeof DailyMissionScalarFieldEnum]


  export const NFTRewardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    rarity: 'rarity',
    image: 'image',
    earnedAt: 'earnedAt',
    userId: 'userId',
    seasonId: 'seasonId'
  };

  export type NFTRewardScalarFieldEnum = (typeof NFTRewardScalarFieldEnum)[keyof typeof NFTRewardScalarFieldEnum]


  export const SeasonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    tipMultiplier: 'tipMultiplier',
    isActive: 'isActive'
  };

  export type SeasonScalarFieldEnum = (typeof SeasonScalarFieldEnum)[keyof typeof SeasonScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    rarity: 'rarity',
    unlocked: 'unlocked',
    unlockDate: 'unlockDate',
    unlockCondition: 'unlockCondition',
    xpReward: 'xpReward'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const AchievementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    rarity: 'rarity',
    unlocked: 'unlocked',
    unlockDate: 'unlockDate',
    unlockCondition: 'unlockCondition',
    xpReward: 'xpReward',
    category: 'category',
    progress: 'progress',
    target: 'target',
    rewardType: 'rewardType'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const TemporaryEventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    rewards: 'rewards',
    missions: 'missions',
    leaderboard: 'leaderboard'
  };

  export type TemporaryEventScalarFieldEnum = (typeof TemporaryEventScalarFieldEnum)[keyof typeof TemporaryEventScalarFieldEnum]


  export const ReputationScalarFieldEnum: {
    id: 'id',
    level: 'level',
    xp: 'xp',
    xpToNextLevel: 'xpToNextLevel',
    title: 'title',
    badge: 'badge',
    benefits: 'benefits'
  };

  export type ReputationScalarFieldEnum = (typeof ReputationScalarFieldEnum)[keyof typeof ReputationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'UserTier'
   */
  export type EnumUserTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserTier'>
    


  /**
   * Reference to a field of type 'UserTier[]'
   */
  export type ListEnumUserTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserTier[]'>
    


  /**
   * Reference to a field of type 'FeedType'
   */
  export type EnumFeedTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedType'>
    


  /**
   * Reference to a field of type 'FeedType[]'
   */
  export type ListEnumFeedTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedType[]'>
    


  /**
   * Reference to a field of type 'MissionType'
   */
  export type EnumMissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionType'>
    


  /**
   * Reference to a field of type 'MissionType[]'
   */
  export type ListEnumMissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MissionType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Rarity'
   */
  export type EnumRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rarity'>
    


  /**
   * Reference to a field of type 'Rarity[]'
   */
  export type ListEnumRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rarity[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AchievementCategory'
   */
  export type EnumAchievementCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementCategory'>
    


  /**
   * Reference to a field of type 'AchievementCategory[]'
   */
  export type ListEnumAchievementCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementCategory[]'>
    


  /**
   * Reference to a field of type 'RewardType'
   */
  export type EnumRewardTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardType'>
    


  /**
   * Reference to a field of type 'RewardType[]'
   */
  export type ListEnumRewardTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    stakingPower?: IntFilter<"User"> | number
    reputation?: IntFilter<"User"> | number
    tier?: EnumUserTierFilter<"User"> | $Enums.UserTier
    following?: IntNullableListFilter<"User">
    followers?: StringNullableListFilter<"User">
    totalTipsGiven?: IntFilter<"User"> | number
    totalCommentsPosted?: IntFilter<"User"> | number
    dailyMissionsCompleted?: IntFilter<"User"> | number
    streakDays?: IntFilter<"User"> | number
    wallet?: StringNullableFilter<"User"> | string | null
    nftRewards?: NFTRewardListRelationFilter
    comments?: CommentListRelationFilter
    donations?: DonationListRelationFilter
    activityFeedItems?: ActivityFeedItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    stakingPower?: SortOrder
    reputation?: SortOrder
    tier?: SortOrder
    following?: SortOrder
    followers?: SortOrder
    totalTipsGiven?: SortOrder
    totalCommentsPosted?: SortOrder
    dailyMissionsCompleted?: SortOrder
    streakDays?: SortOrder
    wallet?: SortOrderInput | SortOrder
    nftRewards?: NFTRewardOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    donations?: DonationOrderByRelationAggregateInput
    activityFeedItems?: ActivityFeedItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    wallet?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    stakingPower?: IntFilter<"User"> | number
    reputation?: IntFilter<"User"> | number
    tier?: EnumUserTierFilter<"User"> | $Enums.UserTier
    following?: IntNullableListFilter<"User">
    followers?: StringNullableListFilter<"User">
    totalTipsGiven?: IntFilter<"User"> | number
    totalCommentsPosted?: IntFilter<"User"> | number
    dailyMissionsCompleted?: IntFilter<"User"> | number
    streakDays?: IntFilter<"User"> | number
    nftRewards?: NFTRewardListRelationFilter
    comments?: CommentListRelationFilter
    donations?: DonationListRelationFilter
    activityFeedItems?: ActivityFeedItemListRelationFilter
  }, "id" | "wallet">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    stakingPower?: SortOrder
    reputation?: SortOrder
    tier?: SortOrder
    following?: SortOrder
    followers?: SortOrder
    totalTipsGiven?: SortOrder
    totalCommentsPosted?: SortOrder
    dailyMissionsCompleted?: SortOrder
    streakDays?: SortOrder
    wallet?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    stakingPower?: IntWithAggregatesFilter<"User"> | number
    reputation?: IntWithAggregatesFilter<"User"> | number
    tier?: EnumUserTierWithAggregatesFilter<"User"> | $Enums.UserTier
    following?: IntNullableListFilter<"User">
    followers?: StringNullableListFilter<"User">
    totalTipsGiven?: IntWithAggregatesFilter<"User"> | number
    totalCommentsPosted?: IntWithAggregatesFilter<"User"> | number
    dailyMissionsCompleted?: IntWithAggregatesFilter<"User"> | number
    streakDays?: IntWithAggregatesFilter<"User"> | number
    wallet?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: IntFilter<"Artist"> | number
    name?: StringFilter<"Artist"> | string
    bio?: StringFilter<"Artist"> | string
    image?: StringFilter<"Artist"> | string
    stakingPower?: IntFilter<"Artist"> | number
    totalTips?: IntFilter<"Artist"> | number
    rank?: IntFilter<"Artist"> | number
    genre?: StringFilter<"Artist"> | string
    comments?: CommentListRelationFilter
    donations?: DonationListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    stakingPower?: SortOrder
    totalTips?: SortOrder
    rank?: SortOrder
    genre?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    donations?: DonationOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringFilter<"Artist"> | string
    bio?: StringFilter<"Artist"> | string
    image?: StringFilter<"Artist"> | string
    stakingPower?: IntFilter<"Artist"> | number
    totalTips?: IntFilter<"Artist"> | number
    rank?: IntFilter<"Artist"> | number
    genre?: StringFilter<"Artist"> | string
    comments?: CommentListRelationFilter
    donations?: DonationListRelationFilter
  }, "id">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    stakingPower?: SortOrder
    totalTips?: SortOrder
    rank?: SortOrder
    genre?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Artist"> | number
    name?: StringWithAggregatesFilter<"Artist"> | string
    bio?: StringWithAggregatesFilter<"Artist"> | string
    image?: StringWithAggregatesFilter<"Artist"> | string
    stakingPower?: IntWithAggregatesFilter<"Artist"> | number
    totalTips?: IntWithAggregatesFilter<"Artist"> | number
    rank?: IntWithAggregatesFilter<"Artist"> | number
    genre?: StringWithAggregatesFilter<"Artist"> | string
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: IntFilter<"Donation"> | number
    artistId?: IntFilter<"Donation"> | number
    donorId?: StringFilter<"Donation"> | string
    amount?: StringFilter<"Donation"> | string
    message?: StringFilter<"Donation"> | string
    timestamp?: StringFilter<"Donation"> | string
    stakingPower?: IntFilter<"Donation"> | number
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    artistId?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    stakingPower?: SortOrder
    artist?: ArtistOrderByWithRelationInput
    donor?: UserOrderByWithRelationInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    artistId?: IntFilter<"Donation"> | number
    donorId?: StringFilter<"Donation"> | string
    amount?: StringFilter<"Donation"> | string
    message?: StringFilter<"Donation"> | string
    timestamp?: StringFilter<"Donation"> | string
    stakingPower?: IntFilter<"Donation"> | number
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    artistId?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    stakingPower?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Donation"> | number
    artistId?: IntWithAggregatesFilter<"Donation"> | number
    donorId?: StringWithAggregatesFilter<"Donation"> | string
    amount?: StringWithAggregatesFilter<"Donation"> | string
    message?: StringWithAggregatesFilter<"Donation"> | string
    timestamp?: StringWithAggregatesFilter<"Donation"> | string
    stakingPower?: IntWithAggregatesFilter<"Donation"> | number
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    artistId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    username?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    timestamp?: StringFilter<"Comment"> | string
    likes?: IntFilter<"Comment"> | number
    avatar?: StringNullableFilter<"Comment"> | string | null
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    artistId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    likes?: SortOrder
    avatar?: SortOrderInput | SortOrder
    artist?: ArtistOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    artistId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    username?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    timestamp?: StringFilter<"Comment"> | string
    likes?: IntFilter<"Comment"> | number
    avatar?: StringNullableFilter<"Comment"> | string | null
    artist?: XOR<ArtistScalarRelationFilter, ArtistWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    artistId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    likes?: SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    artistId?: IntWithAggregatesFilter<"Comment"> | number
    userId?: StringWithAggregatesFilter<"Comment"> | string
    username?: StringWithAggregatesFilter<"Comment"> | string
    message?: StringWithAggregatesFilter<"Comment"> | string
    timestamp?: StringWithAggregatesFilter<"Comment"> | string
    likes?: IntWithAggregatesFilter<"Comment"> | number
    avatar?: StringNullableWithAggregatesFilter<"Comment"> | string | null
  }

  export type ActivityFeedItemWhereInput = {
    AND?: ActivityFeedItemWhereInput | ActivityFeedItemWhereInput[]
    OR?: ActivityFeedItemWhereInput[]
    NOT?: ActivityFeedItemWhereInput | ActivityFeedItemWhereInput[]
    id?: IntFilter<"ActivityFeedItem"> | number
    type?: EnumFeedTypeFilter<"ActivityFeedItem"> | $Enums.FeedType
    userId?: StringFilter<"ActivityFeedItem"> | string
    artistId?: IntNullableFilter<"ActivityFeedItem"> | number | null
    artistName?: StringNullableFilter<"ActivityFeedItem"> | string | null
    amount?: StringNullableFilter<"ActivityFeedItem"> | string | null
    message?: StringNullableFilter<"ActivityFeedItem"> | string | null
    timestamp?: StringFilter<"ActivityFeedItem"> | string
    icon?: StringNullableFilter<"ActivityFeedItem"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityFeedItemOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    artistId?: SortOrderInput | SortOrder
    artistName?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    icon?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityFeedItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityFeedItemWhereInput | ActivityFeedItemWhereInput[]
    OR?: ActivityFeedItemWhereInput[]
    NOT?: ActivityFeedItemWhereInput | ActivityFeedItemWhereInput[]
    type?: EnumFeedTypeFilter<"ActivityFeedItem"> | $Enums.FeedType
    userId?: StringFilter<"ActivityFeedItem"> | string
    artistId?: IntNullableFilter<"ActivityFeedItem"> | number | null
    artistName?: StringNullableFilter<"ActivityFeedItem"> | string | null
    amount?: StringNullableFilter<"ActivityFeedItem"> | string | null
    message?: StringNullableFilter<"ActivityFeedItem"> | string | null
    timestamp?: StringFilter<"ActivityFeedItem"> | string
    icon?: StringNullableFilter<"ActivityFeedItem"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityFeedItemOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    artistId?: SortOrderInput | SortOrder
    artistName?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    icon?: SortOrderInput | SortOrder
    _count?: ActivityFeedItemCountOrderByAggregateInput
    _avg?: ActivityFeedItemAvgOrderByAggregateInput
    _max?: ActivityFeedItemMaxOrderByAggregateInput
    _min?: ActivityFeedItemMinOrderByAggregateInput
    _sum?: ActivityFeedItemSumOrderByAggregateInput
  }

  export type ActivityFeedItemScalarWhereWithAggregatesInput = {
    AND?: ActivityFeedItemScalarWhereWithAggregatesInput | ActivityFeedItemScalarWhereWithAggregatesInput[]
    OR?: ActivityFeedItemScalarWhereWithAggregatesInput[]
    NOT?: ActivityFeedItemScalarWhereWithAggregatesInput | ActivityFeedItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityFeedItem"> | number
    type?: EnumFeedTypeWithAggregatesFilter<"ActivityFeedItem"> | $Enums.FeedType
    userId?: StringWithAggregatesFilter<"ActivityFeedItem"> | string
    artistId?: IntNullableWithAggregatesFilter<"ActivityFeedItem"> | number | null
    artistName?: StringNullableWithAggregatesFilter<"ActivityFeedItem"> | string | null
    amount?: StringNullableWithAggregatesFilter<"ActivityFeedItem"> | string | null
    message?: StringNullableWithAggregatesFilter<"ActivityFeedItem"> | string | null
    timestamp?: StringWithAggregatesFilter<"ActivityFeedItem"> | string
    icon?: StringNullableWithAggregatesFilter<"ActivityFeedItem"> | string | null
  }

  export type DailyMissionWhereInput = {
    AND?: DailyMissionWhereInput | DailyMissionWhereInput[]
    OR?: DailyMissionWhereInput[]
    NOT?: DailyMissionWhereInput | DailyMissionWhereInput[]
    id?: IntFilter<"DailyMission"> | number
    title?: StringFilter<"DailyMission"> | string
    description?: StringFilter<"DailyMission"> | string
    reward?: IntFilter<"DailyMission"> | number
    type?: EnumMissionTypeFilter<"DailyMission"> | $Enums.MissionType
    target?: IntFilter<"DailyMission"> | number
    progress?: IntFilter<"DailyMission"> | number
    completed?: BoolFilter<"DailyMission"> | boolean
    icon?: StringFilter<"DailyMission"> | string
  }

  export type DailyMissionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reward?: SortOrder
    type?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    icon?: SortOrder
  }

  export type DailyMissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyMissionWhereInput | DailyMissionWhereInput[]
    OR?: DailyMissionWhereInput[]
    NOT?: DailyMissionWhereInput | DailyMissionWhereInput[]
    title?: StringFilter<"DailyMission"> | string
    description?: StringFilter<"DailyMission"> | string
    reward?: IntFilter<"DailyMission"> | number
    type?: EnumMissionTypeFilter<"DailyMission"> | $Enums.MissionType
    target?: IntFilter<"DailyMission"> | number
    progress?: IntFilter<"DailyMission"> | number
    completed?: BoolFilter<"DailyMission"> | boolean
    icon?: StringFilter<"DailyMission"> | string
  }, "id">

  export type DailyMissionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reward?: SortOrder
    type?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    icon?: SortOrder
    _count?: DailyMissionCountOrderByAggregateInput
    _avg?: DailyMissionAvgOrderByAggregateInput
    _max?: DailyMissionMaxOrderByAggregateInput
    _min?: DailyMissionMinOrderByAggregateInput
    _sum?: DailyMissionSumOrderByAggregateInput
  }

  export type DailyMissionScalarWhereWithAggregatesInput = {
    AND?: DailyMissionScalarWhereWithAggregatesInput | DailyMissionScalarWhereWithAggregatesInput[]
    OR?: DailyMissionScalarWhereWithAggregatesInput[]
    NOT?: DailyMissionScalarWhereWithAggregatesInput | DailyMissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyMission"> | number
    title?: StringWithAggregatesFilter<"DailyMission"> | string
    description?: StringWithAggregatesFilter<"DailyMission"> | string
    reward?: IntWithAggregatesFilter<"DailyMission"> | number
    type?: EnumMissionTypeWithAggregatesFilter<"DailyMission"> | $Enums.MissionType
    target?: IntWithAggregatesFilter<"DailyMission"> | number
    progress?: IntWithAggregatesFilter<"DailyMission"> | number
    completed?: BoolWithAggregatesFilter<"DailyMission"> | boolean
    icon?: StringWithAggregatesFilter<"DailyMission"> | string
  }

  export type NFTRewardWhereInput = {
    AND?: NFTRewardWhereInput | NFTRewardWhereInput[]
    OR?: NFTRewardWhereInput[]
    NOT?: NFTRewardWhereInput | NFTRewardWhereInput[]
    id?: IntFilter<"NFTReward"> | number
    name?: StringFilter<"NFTReward"> | string
    description?: StringFilter<"NFTReward"> | string
    rarity?: EnumRarityFilter<"NFTReward"> | $Enums.Rarity
    image?: StringFilter<"NFTReward"> | string
    earnedAt?: StringFilter<"NFTReward"> | string
    userId?: StringNullableFilter<"NFTReward"> | string | null
    seasonId?: IntNullableFilter<"NFTReward"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    season?: XOR<SeasonNullableScalarRelationFilter, SeasonWhereInput> | null
  }

  export type NFTRewardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rarity?: SortOrder
    image?: SortOrder
    earnedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    seasonId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    season?: SeasonOrderByWithRelationInput
  }

  export type NFTRewardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NFTRewardWhereInput | NFTRewardWhereInput[]
    OR?: NFTRewardWhereInput[]
    NOT?: NFTRewardWhereInput | NFTRewardWhereInput[]
    name?: StringFilter<"NFTReward"> | string
    description?: StringFilter<"NFTReward"> | string
    rarity?: EnumRarityFilter<"NFTReward"> | $Enums.Rarity
    image?: StringFilter<"NFTReward"> | string
    earnedAt?: StringFilter<"NFTReward"> | string
    userId?: StringNullableFilter<"NFTReward"> | string | null
    seasonId?: IntNullableFilter<"NFTReward"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    season?: XOR<SeasonNullableScalarRelationFilter, SeasonWhereInput> | null
  }, "id">

  export type NFTRewardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rarity?: SortOrder
    image?: SortOrder
    earnedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    seasonId?: SortOrderInput | SortOrder
    _count?: NFTRewardCountOrderByAggregateInput
    _avg?: NFTRewardAvgOrderByAggregateInput
    _max?: NFTRewardMaxOrderByAggregateInput
    _min?: NFTRewardMinOrderByAggregateInput
    _sum?: NFTRewardSumOrderByAggregateInput
  }

  export type NFTRewardScalarWhereWithAggregatesInput = {
    AND?: NFTRewardScalarWhereWithAggregatesInput | NFTRewardScalarWhereWithAggregatesInput[]
    OR?: NFTRewardScalarWhereWithAggregatesInput[]
    NOT?: NFTRewardScalarWhereWithAggregatesInput | NFTRewardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NFTReward"> | number
    name?: StringWithAggregatesFilter<"NFTReward"> | string
    description?: StringWithAggregatesFilter<"NFTReward"> | string
    rarity?: EnumRarityWithAggregatesFilter<"NFTReward"> | $Enums.Rarity
    image?: StringWithAggregatesFilter<"NFTReward"> | string
    earnedAt?: StringWithAggregatesFilter<"NFTReward"> | string
    userId?: StringNullableWithAggregatesFilter<"NFTReward"> | string | null
    seasonId?: IntNullableWithAggregatesFilter<"NFTReward"> | number | null
  }

  export type SeasonWhereInput = {
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    id?: IntFilter<"Season"> | number
    name?: StringFilter<"Season"> | string
    description?: StringFilter<"Season"> | string
    startDate?: StringFilter<"Season"> | string
    endDate?: StringFilter<"Season"> | string
    tipMultiplier?: FloatFilter<"Season"> | number
    isActive?: BoolFilter<"Season"> | boolean
    rewards?: NFTRewardListRelationFilter
  }

  export type SeasonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    tipMultiplier?: SortOrder
    isActive?: SortOrder
    rewards?: NFTRewardOrderByRelationAggregateInput
  }

  export type SeasonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    name?: StringFilter<"Season"> | string
    description?: StringFilter<"Season"> | string
    startDate?: StringFilter<"Season"> | string
    endDate?: StringFilter<"Season"> | string
    tipMultiplier?: FloatFilter<"Season"> | number
    isActive?: BoolFilter<"Season"> | boolean
    rewards?: NFTRewardListRelationFilter
  }, "id">

  export type SeasonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    tipMultiplier?: SortOrder
    isActive?: SortOrder
    _count?: SeasonCountOrderByAggregateInput
    _avg?: SeasonAvgOrderByAggregateInput
    _max?: SeasonMaxOrderByAggregateInput
    _min?: SeasonMinOrderByAggregateInput
    _sum?: SeasonSumOrderByAggregateInput
  }

  export type SeasonScalarWhereWithAggregatesInput = {
    AND?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    OR?: SeasonScalarWhereWithAggregatesInput[]
    NOT?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Season"> | number
    name?: StringWithAggregatesFilter<"Season"> | string
    description?: StringWithAggregatesFilter<"Season"> | string
    startDate?: StringWithAggregatesFilter<"Season"> | string
    endDate?: StringWithAggregatesFilter<"Season"> | string
    tipMultiplier?: FloatWithAggregatesFilter<"Season"> | number
    isActive?: BoolWithAggregatesFilter<"Season"> | boolean
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: StringFilter<"Badge"> | string
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    icon?: StringFilter<"Badge"> | string
    rarity?: EnumRarityFilter<"Badge"> | $Enums.Rarity
    unlocked?: BoolFilter<"Badge"> | boolean
    unlockDate?: StringNullableFilter<"Badge"> | string | null
    unlockCondition?: StringFilter<"Badge"> | string
    xpReward?: IntFilter<"Badge"> | number
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    unlocked?: SortOrder
    unlockDate?: SortOrderInput | SortOrder
    unlockCondition?: SortOrder
    xpReward?: SortOrder
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    name?: StringFilter<"Badge"> | string
    description?: StringFilter<"Badge"> | string
    icon?: StringFilter<"Badge"> | string
    rarity?: EnumRarityFilter<"Badge"> | $Enums.Rarity
    unlocked?: BoolFilter<"Badge"> | boolean
    unlockDate?: StringNullableFilter<"Badge"> | string | null
    unlockCondition?: StringFilter<"Badge"> | string
    xpReward?: IntFilter<"Badge"> | number
  }, "id">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    unlocked?: SortOrder
    unlockDate?: SortOrderInput | SortOrder
    unlockCondition?: SortOrder
    xpReward?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Badge"> | string
    name?: StringWithAggregatesFilter<"Badge"> | string
    description?: StringWithAggregatesFilter<"Badge"> | string
    icon?: StringWithAggregatesFilter<"Badge"> | string
    rarity?: EnumRarityWithAggregatesFilter<"Badge"> | $Enums.Rarity
    unlocked?: BoolWithAggregatesFilter<"Badge"> | boolean
    unlockDate?: StringNullableWithAggregatesFilter<"Badge"> | string | null
    unlockCondition?: StringWithAggregatesFilter<"Badge"> | string
    xpReward?: IntWithAggregatesFilter<"Badge"> | number
  }

  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    icon?: StringFilter<"Achievement"> | string
    rarity?: EnumRarityFilter<"Achievement"> | $Enums.Rarity
    unlocked?: BoolFilter<"Achievement"> | boolean
    unlockDate?: StringNullableFilter<"Achievement"> | string | null
    unlockCondition?: StringFilter<"Achievement"> | string
    xpReward?: IntFilter<"Achievement"> | number
    category?: EnumAchievementCategoryFilter<"Achievement"> | $Enums.AchievementCategory
    progress?: IntFilter<"Achievement"> | number
    target?: IntFilter<"Achievement"> | number
    rewardType?: EnumRewardTypeFilter<"Achievement"> | $Enums.RewardType
  }

  export type AchievementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    unlocked?: SortOrder
    unlockDate?: SortOrderInput | SortOrder
    unlockCondition?: SortOrder
    xpReward?: SortOrder
    category?: SortOrder
    progress?: SortOrder
    target?: SortOrder
    rewardType?: SortOrder
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    name?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    icon?: StringFilter<"Achievement"> | string
    rarity?: EnumRarityFilter<"Achievement"> | $Enums.Rarity
    unlocked?: BoolFilter<"Achievement"> | boolean
    unlockDate?: StringNullableFilter<"Achievement"> | string | null
    unlockCondition?: StringFilter<"Achievement"> | string
    xpReward?: IntFilter<"Achievement"> | number
    category?: EnumAchievementCategoryFilter<"Achievement"> | $Enums.AchievementCategory
    progress?: IntFilter<"Achievement"> | number
    target?: IntFilter<"Achievement"> | number
    rewardType?: EnumRewardTypeFilter<"Achievement"> | $Enums.RewardType
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    unlocked?: SortOrder
    unlockDate?: SortOrderInput | SortOrder
    unlockCondition?: SortOrder
    xpReward?: SortOrder
    category?: SortOrder
    progress?: SortOrder
    target?: SortOrder
    rewardType?: SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _avg?: AchievementAvgOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
    _sum?: AchievementSumOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    name?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringWithAggregatesFilter<"Achievement"> | string
    icon?: StringWithAggregatesFilter<"Achievement"> | string
    rarity?: EnumRarityWithAggregatesFilter<"Achievement"> | $Enums.Rarity
    unlocked?: BoolWithAggregatesFilter<"Achievement"> | boolean
    unlockDate?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    unlockCondition?: StringWithAggregatesFilter<"Achievement"> | string
    xpReward?: IntWithAggregatesFilter<"Achievement"> | number
    category?: EnumAchievementCategoryWithAggregatesFilter<"Achievement"> | $Enums.AchievementCategory
    progress?: IntWithAggregatesFilter<"Achievement"> | number
    target?: IntWithAggregatesFilter<"Achievement"> | number
    rewardType?: EnumRewardTypeWithAggregatesFilter<"Achievement"> | $Enums.RewardType
  }

  export type TemporaryEventWhereInput = {
    AND?: TemporaryEventWhereInput | TemporaryEventWhereInput[]
    OR?: TemporaryEventWhereInput[]
    NOT?: TemporaryEventWhereInput | TemporaryEventWhereInput[]
    id?: StringFilter<"TemporaryEvent"> | string
    name?: StringFilter<"TemporaryEvent"> | string
    description?: StringFilter<"TemporaryEvent"> | string
    startDate?: StringFilter<"TemporaryEvent"> | string
    endDate?: StringFilter<"TemporaryEvent"> | string
    isActive?: BoolFilter<"TemporaryEvent"> | boolean
    rewards?: JsonFilter<"TemporaryEvent">
    missions?: JsonFilter<"TemporaryEvent">
    leaderboard?: JsonFilter<"TemporaryEvent">
  }

  export type TemporaryEventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    rewards?: SortOrder
    missions?: SortOrder
    leaderboard?: SortOrder
  }

  export type TemporaryEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemporaryEventWhereInput | TemporaryEventWhereInput[]
    OR?: TemporaryEventWhereInput[]
    NOT?: TemporaryEventWhereInput | TemporaryEventWhereInput[]
    name?: StringFilter<"TemporaryEvent"> | string
    description?: StringFilter<"TemporaryEvent"> | string
    startDate?: StringFilter<"TemporaryEvent"> | string
    endDate?: StringFilter<"TemporaryEvent"> | string
    isActive?: BoolFilter<"TemporaryEvent"> | boolean
    rewards?: JsonFilter<"TemporaryEvent">
    missions?: JsonFilter<"TemporaryEvent">
    leaderboard?: JsonFilter<"TemporaryEvent">
  }, "id">

  export type TemporaryEventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    rewards?: SortOrder
    missions?: SortOrder
    leaderboard?: SortOrder
    _count?: TemporaryEventCountOrderByAggregateInput
    _max?: TemporaryEventMaxOrderByAggregateInput
    _min?: TemporaryEventMinOrderByAggregateInput
  }

  export type TemporaryEventScalarWhereWithAggregatesInput = {
    AND?: TemporaryEventScalarWhereWithAggregatesInput | TemporaryEventScalarWhereWithAggregatesInput[]
    OR?: TemporaryEventScalarWhereWithAggregatesInput[]
    NOT?: TemporaryEventScalarWhereWithAggregatesInput | TemporaryEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemporaryEvent"> | string
    name?: StringWithAggregatesFilter<"TemporaryEvent"> | string
    description?: StringWithAggregatesFilter<"TemporaryEvent"> | string
    startDate?: StringWithAggregatesFilter<"TemporaryEvent"> | string
    endDate?: StringWithAggregatesFilter<"TemporaryEvent"> | string
    isActive?: BoolWithAggregatesFilter<"TemporaryEvent"> | boolean
    rewards?: JsonWithAggregatesFilter<"TemporaryEvent">
    missions?: JsonWithAggregatesFilter<"TemporaryEvent">
    leaderboard?: JsonWithAggregatesFilter<"TemporaryEvent">
  }

  export type ReputationWhereInput = {
    AND?: ReputationWhereInput | ReputationWhereInput[]
    OR?: ReputationWhereInput[]
    NOT?: ReputationWhereInput | ReputationWhereInput[]
    id?: IntFilter<"Reputation"> | number
    level?: IntFilter<"Reputation"> | number
    xp?: IntFilter<"Reputation"> | number
    xpToNextLevel?: IntFilter<"Reputation"> | number
    title?: StringFilter<"Reputation"> | string
    badge?: StringFilter<"Reputation"> | string
    benefits?: StringNullableListFilter<"Reputation">
  }

  export type ReputationOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    xpToNextLevel?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    benefits?: SortOrder
  }

  export type ReputationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReputationWhereInput | ReputationWhereInput[]
    OR?: ReputationWhereInput[]
    NOT?: ReputationWhereInput | ReputationWhereInput[]
    level?: IntFilter<"Reputation"> | number
    xp?: IntFilter<"Reputation"> | number
    xpToNextLevel?: IntFilter<"Reputation"> | number
    title?: StringFilter<"Reputation"> | string
    badge?: StringFilter<"Reputation"> | string
    benefits?: StringNullableListFilter<"Reputation">
  }, "id">

  export type ReputationOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    xpToNextLevel?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    benefits?: SortOrder
    _count?: ReputationCountOrderByAggregateInput
    _avg?: ReputationAvgOrderByAggregateInput
    _max?: ReputationMaxOrderByAggregateInput
    _min?: ReputationMinOrderByAggregateInput
    _sum?: ReputationSumOrderByAggregateInput
  }

  export type ReputationScalarWhereWithAggregatesInput = {
    AND?: ReputationScalarWhereWithAggregatesInput | ReputationScalarWhereWithAggregatesInput[]
    OR?: ReputationScalarWhereWithAggregatesInput[]
    NOT?: ReputationScalarWhereWithAggregatesInput | ReputationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reputation"> | number
    level?: IntWithAggregatesFilter<"Reputation"> | number
    xp?: IntWithAggregatesFilter<"Reputation"> | number
    xpToNextLevel?: IntWithAggregatesFilter<"Reputation"> | number
    title?: StringWithAggregatesFilter<"Reputation"> | string
    badge?: StringWithAggregatesFilter<"Reputation"> | string
    benefits?: StringNullableListFilter<"Reputation">
  }

  export type UserCreateInput = {
    id: string
    username: string
    avatar?: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following?: UserCreatefollowingInput | number[]
    followers?: UserCreatefollowersInput | string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet?: string | null
    nftRewards?: NFTRewardCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    activityFeedItems?: ActivityFeedItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    username: string
    avatar?: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following?: UserCreatefollowingInput | number[]
    followers?: UserCreatefollowersInput | string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet?: string | null
    nftRewards?: NFTRewardUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    activityFeedItems?: ActivityFeedItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    nftRewards?: NFTRewardUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    activityFeedItems?: ActivityFeedItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    nftRewards?: NFTRewardUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    activityFeedItems?: ActivityFeedItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    username: string
    avatar?: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following?: UserCreatefollowingInput | number[]
    followers?: UserCreatefollowersInput | string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistCreateInput = {
    name: string
    bio: string
    image: string
    stakingPower: number
    totalTips: number
    rank: number
    genre: string
    comments?: CommentCreateNestedManyWithoutArtistInput
    donations?: DonationCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: number
    name: string
    bio: string
    image: string
    stakingPower: number
    totalTips: number
    rank: number
    genre: string
    comments?: CommentUncheckedCreateNestedManyWithoutArtistInput
    donations?: DonationUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
    totalTips?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutArtistNestedInput
    donations?: DonationUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
    totalTips?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutArtistNestedInput
    donations?: DonationUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: number
    name: string
    bio: string
    image: string
    stakingPower: number
    totalTips: number
    rank: number
    genre: string
  }

  export type ArtistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
    totalTips?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
    totalTips?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
  }

  export type DonationCreateInput = {
    amount: string
    message: string
    timestamp: string
    stakingPower: number
    artist: ArtistCreateNestedOneWithoutDonationsInput
    donor: UserCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateInput = {
    id?: number
    artistId: number
    donorId: string
    amount: string
    message: string
    timestamp: string
    stakingPower: number
  }

  export type DonationUpdateInput = {
    amount?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
    artist?: ArtistUpdateOneRequiredWithoutDonationsNestedInput
    donor?: UserUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    donorId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
  }

  export type DonationCreateManyInput = {
    id?: number
    artistId: number
    donorId: string
    amount: string
    message: string
    timestamp: string
    stakingPower: number
  }

  export type DonationUpdateManyMutationInput = {
    amount?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    donorId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    username: string
    message: string
    timestamp: string
    likes: number
    avatar?: string | null
    artist: ArtistCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    artistId: number
    userId: string
    username: string
    message: string
    timestamp: string
    likes: number
    avatar?: string | null
  }

  export type CommentUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: ArtistUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyInput = {
    id?: number
    artistId: number
    userId: string
    username: string
    message: string
    timestamp: string
    likes: number
    avatar?: string | null
  }

  export type CommentUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityFeedItemCreateInput = {
    type: $Enums.FeedType
    artistId?: number | null
    artistName?: string | null
    amount?: string | null
    message?: string | null
    timestamp: string
    icon?: string | null
    user: UserCreateNestedOneWithoutActivityFeedItemsInput
  }

  export type ActivityFeedItemUncheckedCreateInput = {
    id?: number
    type: $Enums.FeedType
    userId: string
    artistId?: number | null
    artistName?: string | null
    amount?: string | null
    message?: string | null
    timestamp: string
    icon?: string | null
  }

  export type ActivityFeedItemUpdateInput = {
    type?: EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutActivityFeedItemsNestedInput
  }

  export type ActivityFeedItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType
    userId?: StringFieldUpdateOperationsInput | string
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityFeedItemCreateManyInput = {
    id?: number
    type: $Enums.FeedType
    userId: string
    artistId?: number | null
    artistName?: string | null
    amount?: string | null
    message?: string | null
    timestamp: string
    icon?: string | null
  }

  export type ActivityFeedItemUpdateManyMutationInput = {
    type?: EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityFeedItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType
    userId?: StringFieldUpdateOperationsInput | string
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyMissionCreateInput = {
    title: string
    description: string
    reward: number
    type: $Enums.MissionType
    target: number
    progress: number
    completed: boolean
    icon: string
  }

  export type DailyMissionUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    reward: number
    type: $Enums.MissionType
    target: number
    progress: number
    completed: boolean
    icon: string
  }

  export type DailyMissionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reward?: IntFieldUpdateOperationsInput | number
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DailyMissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reward?: IntFieldUpdateOperationsInput | number
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DailyMissionCreateManyInput = {
    id?: number
    title: string
    description: string
    reward: number
    type: $Enums.MissionType
    target: number
    progress: number
    completed: boolean
    icon: string
  }

  export type DailyMissionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reward?: IntFieldUpdateOperationsInput | number
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DailyMissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reward?: IntFieldUpdateOperationsInput | number
    type?: EnumMissionTypeFieldUpdateOperationsInput | $Enums.MissionType
    target?: IntFieldUpdateOperationsInput | number
    progress?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type NFTRewardCreateInput = {
    name: string
    description: string
    rarity: $Enums.Rarity
    image: string
    earnedAt: string
    user?: UserCreateNestedOneWithoutNftRewardsInput
    season?: SeasonCreateNestedOneWithoutRewardsInput
  }

  export type NFTRewardUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    rarity: $Enums.Rarity
    image: string
    earnedAt: string
    userId?: string | null
    seasonId?: number | null
  }

  export type NFTRewardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    image?: StringFieldUpdateOperationsInput | string
    earnedAt?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutNftRewardsNestedInput
    season?: SeasonUpdateOneWithoutRewardsNestedInput
  }

  export type NFTRewardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    image?: StringFieldUpdateOperationsInput | string
    earnedAt?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    seasonId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NFTRewardCreateManyInput = {
    id?: number
    name: string
    description: string
    rarity: $Enums.Rarity
    image: string
    earnedAt: string
    userId?: string | null
    seasonId?: number | null
  }

  export type NFTRewardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    image?: StringFieldUpdateOperationsInput | string
    earnedAt?: StringFieldUpdateOperationsInput | string
  }

  export type NFTRewardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    image?: StringFieldUpdateOperationsInput | string
    earnedAt?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    seasonId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SeasonCreateInput = {
    name: string
    description: string
    startDate: string
    endDate: string
    tipMultiplier: number
    isActive: boolean
    rewards?: NFTRewardCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    startDate: string
    endDate: string
    tipMultiplier: number
    isActive: boolean
    rewards?: NFTRewardUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    tipMultiplier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rewards?: NFTRewardUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    tipMultiplier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rewards?: NFTRewardUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonCreateManyInput = {
    id?: number
    name: string
    description: string
    startDate: string
    endDate: string
    tipMultiplier: number
    isActive: boolean
  }

  export type SeasonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    tipMultiplier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeasonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    tipMultiplier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BadgeCreateInput = {
    id: string
    name: string
    description: string
    icon: string
    rarity: $Enums.Rarity
    unlocked: boolean
    unlockDate?: string | null
    unlockCondition: string
    xpReward: number
  }

  export type BadgeUncheckedCreateInput = {
    id: string
    name: string
    description: string
    icon: string
    rarity: $Enums.Rarity
    unlocked: boolean
    unlockDate?: string | null
    unlockCondition: string
    xpReward: number
  }

  export type BadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockDate?: NullableStringFieldUpdateOperationsInput | string | null
    unlockCondition?: StringFieldUpdateOperationsInput | string
    xpReward?: IntFieldUpdateOperationsInput | number
  }

  export type BadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockDate?: NullableStringFieldUpdateOperationsInput | string | null
    unlockCondition?: StringFieldUpdateOperationsInput | string
    xpReward?: IntFieldUpdateOperationsInput | number
  }

  export type BadgeCreateManyInput = {
    id: string
    name: string
    description: string
    icon: string
    rarity: $Enums.Rarity
    unlocked: boolean
    unlockDate?: string | null
    unlockCondition: string
    xpReward: number
  }

  export type BadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockDate?: NullableStringFieldUpdateOperationsInput | string | null
    unlockCondition?: StringFieldUpdateOperationsInput | string
    xpReward?: IntFieldUpdateOperationsInput | number
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockDate?: NullableStringFieldUpdateOperationsInput | string | null
    unlockCondition?: StringFieldUpdateOperationsInput | string
    xpReward?: IntFieldUpdateOperationsInput | number
  }

  export type AchievementCreateInput = {
    id: string
    name: string
    description: string
    icon: string
    rarity: $Enums.Rarity
    unlocked: boolean
    unlockDate?: string | null
    unlockCondition: string
    xpReward: number
    category: $Enums.AchievementCategory
    progress: number
    target: number
    rewardType: $Enums.RewardType
  }

  export type AchievementUncheckedCreateInput = {
    id: string
    name: string
    description: string
    icon: string
    rarity: $Enums.Rarity
    unlocked: boolean
    unlockDate?: string | null
    unlockCondition: string
    xpReward: number
    category: $Enums.AchievementCategory
    progress: number
    target: number
    rewardType: $Enums.RewardType
  }

  export type AchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockDate?: NullableStringFieldUpdateOperationsInput | string | null
    unlockCondition?: StringFieldUpdateOperationsInput | string
    xpReward?: IntFieldUpdateOperationsInput | number
    category?: EnumAchievementCategoryFieldUpdateOperationsInput | $Enums.AchievementCategory
    progress?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    rewardType?: EnumRewardTypeFieldUpdateOperationsInput | $Enums.RewardType
  }

  export type AchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockDate?: NullableStringFieldUpdateOperationsInput | string | null
    unlockCondition?: StringFieldUpdateOperationsInput | string
    xpReward?: IntFieldUpdateOperationsInput | number
    category?: EnumAchievementCategoryFieldUpdateOperationsInput | $Enums.AchievementCategory
    progress?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    rewardType?: EnumRewardTypeFieldUpdateOperationsInput | $Enums.RewardType
  }

  export type AchievementCreateManyInput = {
    id: string
    name: string
    description: string
    icon: string
    rarity: $Enums.Rarity
    unlocked: boolean
    unlockDate?: string | null
    unlockCondition: string
    xpReward: number
    category: $Enums.AchievementCategory
    progress: number
    target: number
    rewardType: $Enums.RewardType
  }

  export type AchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockDate?: NullableStringFieldUpdateOperationsInput | string | null
    unlockCondition?: StringFieldUpdateOperationsInput | string
    xpReward?: IntFieldUpdateOperationsInput | number
    category?: EnumAchievementCategoryFieldUpdateOperationsInput | $Enums.AchievementCategory
    progress?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    rewardType?: EnumRewardTypeFieldUpdateOperationsInput | $Enums.RewardType
  }

  export type AchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockDate?: NullableStringFieldUpdateOperationsInput | string | null
    unlockCondition?: StringFieldUpdateOperationsInput | string
    xpReward?: IntFieldUpdateOperationsInput | number
    category?: EnumAchievementCategoryFieldUpdateOperationsInput | $Enums.AchievementCategory
    progress?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    rewardType?: EnumRewardTypeFieldUpdateOperationsInput | $Enums.RewardType
  }

  export type TemporaryEventCreateInput = {
    id: string
    name: string
    description: string
    startDate: string
    endDate: string
    isActive: boolean
    rewards: JsonNullValueInput | InputJsonValue
    missions: JsonNullValueInput | InputJsonValue
    leaderboard: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryEventUncheckedCreateInput = {
    id: string
    name: string
    description: string
    startDate: string
    endDate: string
    isActive: boolean
    rewards: JsonNullValueInput | InputJsonValue
    missions: JsonNullValueInput | InputJsonValue
    leaderboard: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rewards?: JsonNullValueInput | InputJsonValue
    missions?: JsonNullValueInput | InputJsonValue
    leaderboard?: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rewards?: JsonNullValueInput | InputJsonValue
    missions?: JsonNullValueInput | InputJsonValue
    leaderboard?: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryEventCreateManyInput = {
    id: string
    name: string
    description: string
    startDate: string
    endDate: string
    isActive: boolean
    rewards: JsonNullValueInput | InputJsonValue
    missions: JsonNullValueInput | InputJsonValue
    leaderboard: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rewards?: JsonNullValueInput | InputJsonValue
    missions?: JsonNullValueInput | InputJsonValue
    leaderboard?: JsonNullValueInput | InputJsonValue
  }

  export type TemporaryEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rewards?: JsonNullValueInput | InputJsonValue
    missions?: JsonNullValueInput | InputJsonValue
    leaderboard?: JsonNullValueInput | InputJsonValue
  }

  export type ReputationCreateInput = {
    id?: number
    level: number
    xp: number
    xpToNextLevel: number
    title: string
    badge: string
    benefits?: ReputationCreatebenefitsInput | string[]
  }

  export type ReputationUncheckedCreateInput = {
    id?: number
    level: number
    xp: number
    xpToNextLevel: number
    title: string
    badge: string
    benefits?: ReputationCreatebenefitsInput | string[]
  }

  export type ReputationUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    xpToNextLevel?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    benefits?: ReputationUpdatebenefitsInput | string[]
  }

  export type ReputationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    xpToNextLevel?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    benefits?: ReputationUpdatebenefitsInput | string[]
  }

  export type ReputationCreateManyInput = {
    id?: number
    level: number
    xp: number
    xpToNextLevel: number
    title: string
    badge: string
    benefits?: ReputationCreatebenefitsInput | string[]
  }

  export type ReputationUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    xpToNextLevel?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    benefits?: ReputationUpdatebenefitsInput | string[]
  }

  export type ReputationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    xpToNextLevel?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    badge?: StringFieldUpdateOperationsInput | string
    benefits?: ReputationUpdatebenefitsInput | string[]
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumUserTierFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTier | EnumUserTierFieldRefInput<$PrismaModel>
    in?: $Enums.UserTier[] | ListEnumUserTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTier[] | ListEnumUserTierFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTierFilter<$PrismaModel> | $Enums.UserTier
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type NFTRewardListRelationFilter = {
    every?: NFTRewardWhereInput
    some?: NFTRewardWhereInput
    none?: NFTRewardWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type DonationListRelationFilter = {
    every?: DonationWhereInput
    some?: DonationWhereInput
    none?: DonationWhereInput
  }

  export type ActivityFeedItemListRelationFilter = {
    every?: ActivityFeedItemWhereInput
    some?: ActivityFeedItemWhereInput
    none?: ActivityFeedItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NFTRewardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityFeedItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    stakingPower?: SortOrder
    reputation?: SortOrder
    tier?: SortOrder
    following?: SortOrder
    followers?: SortOrder
    totalTipsGiven?: SortOrder
    totalCommentsPosted?: SortOrder
    dailyMissionsCompleted?: SortOrder
    streakDays?: SortOrder
    wallet?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    stakingPower?: SortOrder
    reputation?: SortOrder
    following?: SortOrder
    totalTipsGiven?: SortOrder
    totalCommentsPosted?: SortOrder
    dailyMissionsCompleted?: SortOrder
    streakDays?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    stakingPower?: SortOrder
    reputation?: SortOrder
    tier?: SortOrder
    totalTipsGiven?: SortOrder
    totalCommentsPosted?: SortOrder
    dailyMissionsCompleted?: SortOrder
    streakDays?: SortOrder
    wallet?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    stakingPower?: SortOrder
    reputation?: SortOrder
    tier?: SortOrder
    totalTipsGiven?: SortOrder
    totalCommentsPosted?: SortOrder
    dailyMissionsCompleted?: SortOrder
    streakDays?: SortOrder
    wallet?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    stakingPower?: SortOrder
    reputation?: SortOrder
    following?: SortOrder
    totalTipsGiven?: SortOrder
    totalCommentsPosted?: SortOrder
    dailyMissionsCompleted?: SortOrder
    streakDays?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumUserTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTier | EnumUserTierFieldRefInput<$PrismaModel>
    in?: $Enums.UserTier[] | ListEnumUserTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTier[] | ListEnumUserTierFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTierWithAggregatesFilter<$PrismaModel> | $Enums.UserTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTierFilter<$PrismaModel>
    _max?: NestedEnumUserTierFilter<$PrismaModel>
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    stakingPower?: SortOrder
    totalTips?: SortOrder
    rank?: SortOrder
    genre?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    id?: SortOrder
    stakingPower?: SortOrder
    totalTips?: SortOrder
    rank?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    stakingPower?: SortOrder
    totalTips?: SortOrder
    rank?: SortOrder
    genre?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    image?: SortOrder
    stakingPower?: SortOrder
    totalTips?: SortOrder
    rank?: SortOrder
    genre?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    id?: SortOrder
    stakingPower?: SortOrder
    totalTips?: SortOrder
    rank?: SortOrder
  }

  export type ArtistScalarRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    stakingPower?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    stakingPower?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    stakingPower?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    donorId?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    stakingPower?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    stakingPower?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    likes?: SortOrder
    avatar?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    likes?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    likes?: SortOrder
    avatar?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    likes?: SortOrder
    avatar?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
    likes?: SortOrder
  }

  export type EnumFeedTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedType | EnumFeedTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedType[] | ListEnumFeedTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedType[] | ListEnumFeedTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedTypeFilter<$PrismaModel> | $Enums.FeedType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ActivityFeedItemCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    artistName?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    icon?: SortOrder
  }

  export type ActivityFeedItemAvgOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
  }

  export type ActivityFeedItemMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    artistName?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    icon?: SortOrder
  }

  export type ActivityFeedItemMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    artistName?: SortOrder
    amount?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    icon?: SortOrder
  }

  export type ActivityFeedItemSumOrderByAggregateInput = {
    id?: SortOrder
    artistId?: SortOrder
  }

  export type EnumFeedTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedType | EnumFeedTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedType[] | ListEnumFeedTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedType[] | ListEnumFeedTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedTypeWithAggregatesFilter<$PrismaModel> | $Enums.FeedType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedTypeFilter<$PrismaModel>
    _max?: NestedEnumFeedTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumMissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeFilter<$PrismaModel> | $Enums.MissionType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DailyMissionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reward?: SortOrder
    type?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    icon?: SortOrder
  }

  export type DailyMissionAvgOrderByAggregateInput = {
    id?: SortOrder
    reward?: SortOrder
    target?: SortOrder
    progress?: SortOrder
  }

  export type DailyMissionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reward?: SortOrder
    type?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    icon?: SortOrder
  }

  export type DailyMissionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    reward?: SortOrder
    type?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    completed?: SortOrder
    icon?: SortOrder
  }

  export type DailyMissionSumOrderByAggregateInput = {
    id?: SortOrder
    reward?: SortOrder
    target?: SortOrder
    progress?: SortOrder
  }

  export type EnumMissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionTypeFilter<$PrismaModel>
    _max?: NestedEnumMissionTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SeasonNullableScalarRelationFilter = {
    is?: SeasonWhereInput | null
    isNot?: SeasonWhereInput | null
  }

  export type NFTRewardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rarity?: SortOrder
    image?: SortOrder
    earnedAt?: SortOrder
    userId?: SortOrder
    seasonId?: SortOrder
  }

  export type NFTRewardAvgOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
  }

  export type NFTRewardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rarity?: SortOrder
    image?: SortOrder
    earnedAt?: SortOrder
    userId?: SortOrder
    seasonId?: SortOrder
  }

  export type NFTRewardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rarity?: SortOrder
    image?: SortOrder
    earnedAt?: SortOrder
    userId?: SortOrder
    seasonId?: SortOrder
  }

  export type NFTRewardSumOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
  }

  export type EnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
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

  export type SeasonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    tipMultiplier?: SortOrder
    isActive?: SortOrder
  }

  export type SeasonAvgOrderByAggregateInput = {
    id?: SortOrder
    tipMultiplier?: SortOrder
  }

  export type SeasonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    tipMultiplier?: SortOrder
    isActive?: SortOrder
  }

  export type SeasonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    tipMultiplier?: SortOrder
    isActive?: SortOrder
  }

  export type SeasonSumOrderByAggregateInput = {
    id?: SortOrder
    tipMultiplier?: SortOrder
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

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    unlocked?: SortOrder
    unlockDate?: SortOrder
    unlockCondition?: SortOrder
    xpReward?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    xpReward?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    unlocked?: SortOrder
    unlockDate?: SortOrder
    unlockCondition?: SortOrder
    xpReward?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    unlocked?: SortOrder
    unlockDate?: SortOrder
    unlockCondition?: SortOrder
    xpReward?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    xpReward?: SortOrder
  }

  export type EnumAchievementCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementCategory | EnumAchievementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementCategoryFilter<$PrismaModel> | $Enums.AchievementCategory
  }

  export type EnumRewardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardType | EnumRewardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RewardType[] | ListEnumRewardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardType[] | ListEnumRewardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardTypeFilter<$PrismaModel> | $Enums.RewardType
  }

  export type AchievementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    unlocked?: SortOrder
    unlockDate?: SortOrder
    unlockCondition?: SortOrder
    xpReward?: SortOrder
    category?: SortOrder
    progress?: SortOrder
    target?: SortOrder
    rewardType?: SortOrder
  }

  export type AchievementAvgOrderByAggregateInput = {
    xpReward?: SortOrder
    progress?: SortOrder
    target?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    unlocked?: SortOrder
    unlockDate?: SortOrder
    unlockCondition?: SortOrder
    xpReward?: SortOrder
    category?: SortOrder
    progress?: SortOrder
    target?: SortOrder
    rewardType?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    rarity?: SortOrder
    unlocked?: SortOrder
    unlockDate?: SortOrder
    unlockCondition?: SortOrder
    xpReward?: SortOrder
    category?: SortOrder
    progress?: SortOrder
    target?: SortOrder
    rewardType?: SortOrder
  }

  export type AchievementSumOrderByAggregateInput = {
    xpReward?: SortOrder
    progress?: SortOrder
    target?: SortOrder
  }

  export type EnumAchievementCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementCategory | EnumAchievementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AchievementCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementCategoryFilter<$PrismaModel>
    _max?: NestedEnumAchievementCategoryFilter<$PrismaModel>
  }

  export type EnumRewardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardType | EnumRewardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RewardType[] | ListEnumRewardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardType[] | ListEnumRewardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardTypeWithAggregatesFilter<$PrismaModel> | $Enums.RewardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardTypeFilter<$PrismaModel>
    _max?: NestedEnumRewardTypeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type TemporaryEventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    rewards?: SortOrder
    missions?: SortOrder
    leaderboard?: SortOrder
  }

  export type TemporaryEventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
  }

  export type TemporaryEventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ReputationCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    xpToNextLevel?: SortOrder
    title?: SortOrder
    badge?: SortOrder
    benefits?: SortOrder
  }

  export type ReputationAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    xpToNextLevel?: SortOrder
  }

  export type ReputationMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    xpToNextLevel?: SortOrder
    title?: SortOrder
    badge?: SortOrder
  }

  export type ReputationMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    xpToNextLevel?: SortOrder
    title?: SortOrder
    badge?: SortOrder
  }

  export type ReputationSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    xpToNextLevel?: SortOrder
  }

  export type UserCreatefollowingInput = {
    set: number[]
  }

  export type UserCreatefollowersInput = {
    set: string[]
  }

  export type NFTRewardCreateNestedManyWithoutUserInput = {
    create?: XOR<NFTRewardCreateWithoutUserInput, NFTRewardUncheckedCreateWithoutUserInput> | NFTRewardCreateWithoutUserInput[] | NFTRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NFTRewardCreateOrConnectWithoutUserInput | NFTRewardCreateOrConnectWithoutUserInput[]
    createMany?: NFTRewardCreateManyUserInputEnvelope
    connect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type ActivityFeedItemCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityFeedItemCreateWithoutUserInput, ActivityFeedItemUncheckedCreateWithoutUserInput> | ActivityFeedItemCreateWithoutUserInput[] | ActivityFeedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityFeedItemCreateOrConnectWithoutUserInput | ActivityFeedItemCreateOrConnectWithoutUserInput[]
    createMany?: ActivityFeedItemCreateManyUserInputEnvelope
    connect?: ActivityFeedItemWhereUniqueInput | ActivityFeedItemWhereUniqueInput[]
  }

  export type NFTRewardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NFTRewardCreateWithoutUserInput, NFTRewardUncheckedCreateWithoutUserInput> | NFTRewardCreateWithoutUserInput[] | NFTRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NFTRewardCreateOrConnectWithoutUserInput | NFTRewardCreateOrConnectWithoutUserInput[]
    createMany?: NFTRewardCreateManyUserInputEnvelope
    connect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type ActivityFeedItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityFeedItemCreateWithoutUserInput, ActivityFeedItemUncheckedCreateWithoutUserInput> | ActivityFeedItemCreateWithoutUserInput[] | ActivityFeedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityFeedItemCreateOrConnectWithoutUserInput | ActivityFeedItemCreateOrConnectWithoutUserInput[]
    createMany?: ActivityFeedItemCreateManyUserInputEnvelope
    connect?: ActivityFeedItemWhereUniqueInput | ActivityFeedItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUserTierFieldUpdateOperationsInput = {
    set?: $Enums.UserTier
  }

  export type UserUpdatefollowingInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdatefollowersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NFTRewardUpdateManyWithoutUserNestedInput = {
    create?: XOR<NFTRewardCreateWithoutUserInput, NFTRewardUncheckedCreateWithoutUserInput> | NFTRewardCreateWithoutUserInput[] | NFTRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NFTRewardCreateOrConnectWithoutUserInput | NFTRewardCreateOrConnectWithoutUserInput[]
    upsert?: NFTRewardUpsertWithWhereUniqueWithoutUserInput | NFTRewardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NFTRewardCreateManyUserInputEnvelope
    set?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    disconnect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    delete?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    connect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    update?: NFTRewardUpdateWithWhereUniqueWithoutUserInput | NFTRewardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NFTRewardUpdateManyWithWhereWithoutUserInput | NFTRewardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NFTRewardScalarWhereInput | NFTRewardScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type ActivityFeedItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityFeedItemCreateWithoutUserInput, ActivityFeedItemUncheckedCreateWithoutUserInput> | ActivityFeedItemCreateWithoutUserInput[] | ActivityFeedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityFeedItemCreateOrConnectWithoutUserInput | ActivityFeedItemCreateOrConnectWithoutUserInput[]
    upsert?: ActivityFeedItemUpsertWithWhereUniqueWithoutUserInput | ActivityFeedItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityFeedItemCreateManyUserInputEnvelope
    set?: ActivityFeedItemWhereUniqueInput | ActivityFeedItemWhereUniqueInput[]
    disconnect?: ActivityFeedItemWhereUniqueInput | ActivityFeedItemWhereUniqueInput[]
    delete?: ActivityFeedItemWhereUniqueInput | ActivityFeedItemWhereUniqueInput[]
    connect?: ActivityFeedItemWhereUniqueInput | ActivityFeedItemWhereUniqueInput[]
    update?: ActivityFeedItemUpdateWithWhereUniqueWithoutUserInput | ActivityFeedItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityFeedItemUpdateManyWithWhereWithoutUserInput | ActivityFeedItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityFeedItemScalarWhereInput | ActivityFeedItemScalarWhereInput[]
  }

  export type NFTRewardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NFTRewardCreateWithoutUserInput, NFTRewardUncheckedCreateWithoutUserInput> | NFTRewardCreateWithoutUserInput[] | NFTRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NFTRewardCreateOrConnectWithoutUserInput | NFTRewardCreateOrConnectWithoutUserInput[]
    upsert?: NFTRewardUpsertWithWhereUniqueWithoutUserInput | NFTRewardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NFTRewardCreateManyUserInputEnvelope
    set?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    disconnect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    delete?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    connect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    update?: NFTRewardUpdateWithWhereUniqueWithoutUserInput | NFTRewardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NFTRewardUpdateManyWithWhereWithoutUserInput | NFTRewardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NFTRewardScalarWhereInput | NFTRewardScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type ActivityFeedItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityFeedItemCreateWithoutUserInput, ActivityFeedItemUncheckedCreateWithoutUserInput> | ActivityFeedItemCreateWithoutUserInput[] | ActivityFeedItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityFeedItemCreateOrConnectWithoutUserInput | ActivityFeedItemCreateOrConnectWithoutUserInput[]
    upsert?: ActivityFeedItemUpsertWithWhereUniqueWithoutUserInput | ActivityFeedItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityFeedItemCreateManyUserInputEnvelope
    set?: ActivityFeedItemWhereUniqueInput | ActivityFeedItemWhereUniqueInput[]
    disconnect?: ActivityFeedItemWhereUniqueInput | ActivityFeedItemWhereUniqueInput[]
    delete?: ActivityFeedItemWhereUniqueInput | ActivityFeedItemWhereUniqueInput[]
    connect?: ActivityFeedItemWhereUniqueInput | ActivityFeedItemWhereUniqueInput[]
    update?: ActivityFeedItemUpdateWithWhereUniqueWithoutUserInput | ActivityFeedItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityFeedItemUpdateManyWithWhereWithoutUserInput | ActivityFeedItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityFeedItemScalarWhereInput | ActivityFeedItemScalarWhereInput[]
  }

  export type CommentCreateNestedManyWithoutArtistInput = {
    create?: XOR<CommentCreateWithoutArtistInput, CommentUncheckedCreateWithoutArtistInput> | CommentCreateWithoutArtistInput[] | CommentUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArtistInput | CommentCreateOrConnectWithoutArtistInput[]
    createMany?: CommentCreateManyArtistInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutArtistInput = {
    create?: XOR<DonationCreateWithoutArtistInput, DonationUncheckedCreateWithoutArtistInput> | DonationCreateWithoutArtistInput[] | DonationUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutArtistInput | DonationCreateOrConnectWithoutArtistInput[]
    createMany?: DonationCreateManyArtistInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<CommentCreateWithoutArtistInput, CommentUncheckedCreateWithoutArtistInput> | CommentCreateWithoutArtistInput[] | CommentUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArtistInput | CommentCreateOrConnectWithoutArtistInput[]
    createMany?: CommentCreateManyArtistInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<DonationCreateWithoutArtistInput, DonationUncheckedCreateWithoutArtistInput> | DonationCreateWithoutArtistInput[] | DonationUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutArtistInput | DonationCreateOrConnectWithoutArtistInput[]
    createMany?: DonationCreateManyArtistInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type CommentUpdateManyWithoutArtistNestedInput = {
    create?: XOR<CommentCreateWithoutArtistInput, CommentUncheckedCreateWithoutArtistInput> | CommentCreateWithoutArtistInput[] | CommentUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArtistInput | CommentCreateOrConnectWithoutArtistInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArtistInput | CommentUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: CommentCreateManyArtistInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArtistInput | CommentUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArtistInput | CommentUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutArtistNestedInput = {
    create?: XOR<DonationCreateWithoutArtistInput, DonationUncheckedCreateWithoutArtistInput> | DonationCreateWithoutArtistInput[] | DonationUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutArtistInput | DonationCreateOrConnectWithoutArtistInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutArtistInput | DonationUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: DonationCreateManyArtistInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutArtistInput | DonationUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutArtistInput | DonationUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<CommentCreateWithoutArtistInput, CommentUncheckedCreateWithoutArtistInput> | CommentCreateWithoutArtistInput[] | CommentUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutArtistInput | CommentCreateOrConnectWithoutArtistInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutArtistInput | CommentUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: CommentCreateManyArtistInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutArtistInput | CommentUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutArtistInput | CommentUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<DonationCreateWithoutArtistInput, DonationUncheckedCreateWithoutArtistInput> | DonationCreateWithoutArtistInput[] | DonationUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutArtistInput | DonationCreateOrConnectWithoutArtistInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutArtistInput | DonationUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: DonationCreateManyArtistInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutArtistInput | DonationUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutArtistInput | DonationUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type ArtistCreateNestedOneWithoutDonationsInput = {
    create?: XOR<ArtistCreateWithoutDonationsInput, ArtistUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutDonationsInput
    connect?: ArtistWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDonationsInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    connect?: UserWhereUniqueInput
  }

  export type ArtistUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<ArtistCreateWithoutDonationsInput, ArtistUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutDonationsInput
    upsert?: ArtistUpsertWithoutDonationsInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutDonationsInput, ArtistUpdateWithoutDonationsInput>, ArtistUncheckedUpdateWithoutDonationsInput>
  }

  export type UserUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    upsert?: UserUpsertWithoutDonationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationsInput, UserUpdateWithoutDonationsInput>, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type ArtistCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ArtistCreateWithoutCommentsInput, ArtistUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutCommentsInput
    connect?: ArtistWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ArtistUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ArtistCreateWithoutCommentsInput, ArtistUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutCommentsInput
    upsert?: ArtistUpsertWithoutCommentsInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutCommentsInput, ArtistUpdateWithoutCommentsInput>, ArtistUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutActivityFeedItemsInput = {
    create?: XOR<UserCreateWithoutActivityFeedItemsInput, UserUncheckedCreateWithoutActivityFeedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityFeedItemsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFeedTypeFieldUpdateOperationsInput = {
    set?: $Enums.FeedType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutActivityFeedItemsNestedInput = {
    create?: XOR<UserCreateWithoutActivityFeedItemsInput, UserUncheckedCreateWithoutActivityFeedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityFeedItemsInput
    upsert?: UserUpsertWithoutActivityFeedItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityFeedItemsInput, UserUpdateWithoutActivityFeedItemsInput>, UserUncheckedUpdateWithoutActivityFeedItemsInput>
  }

  export type EnumMissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.MissionType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserCreateNestedOneWithoutNftRewardsInput = {
    create?: XOR<UserCreateWithoutNftRewardsInput, UserUncheckedCreateWithoutNftRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNftRewardsInput
    connect?: UserWhereUniqueInput
  }

  export type SeasonCreateNestedOneWithoutRewardsInput = {
    create?: XOR<SeasonCreateWithoutRewardsInput, SeasonUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutRewardsInput
    connect?: SeasonWhereUniqueInput
  }

  export type EnumRarityFieldUpdateOperationsInput = {
    set?: $Enums.Rarity
  }

  export type UserUpdateOneWithoutNftRewardsNestedInput = {
    create?: XOR<UserCreateWithoutNftRewardsInput, UserUncheckedCreateWithoutNftRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNftRewardsInput
    upsert?: UserUpsertWithoutNftRewardsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNftRewardsInput, UserUpdateWithoutNftRewardsInput>, UserUncheckedUpdateWithoutNftRewardsInput>
  }

  export type SeasonUpdateOneWithoutRewardsNestedInput = {
    create?: XOR<SeasonCreateWithoutRewardsInput, SeasonUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutRewardsInput
    upsert?: SeasonUpsertWithoutRewardsInput
    disconnect?: SeasonWhereInput | boolean
    delete?: SeasonWhereInput | boolean
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutRewardsInput, SeasonUpdateWithoutRewardsInput>, SeasonUncheckedUpdateWithoutRewardsInput>
  }

  export type NFTRewardCreateNestedManyWithoutSeasonInput = {
    create?: XOR<NFTRewardCreateWithoutSeasonInput, NFTRewardUncheckedCreateWithoutSeasonInput> | NFTRewardCreateWithoutSeasonInput[] | NFTRewardUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: NFTRewardCreateOrConnectWithoutSeasonInput | NFTRewardCreateOrConnectWithoutSeasonInput[]
    createMany?: NFTRewardCreateManySeasonInputEnvelope
    connect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
  }

  export type NFTRewardUncheckedCreateNestedManyWithoutSeasonInput = {
    create?: XOR<NFTRewardCreateWithoutSeasonInput, NFTRewardUncheckedCreateWithoutSeasonInput> | NFTRewardCreateWithoutSeasonInput[] | NFTRewardUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: NFTRewardCreateOrConnectWithoutSeasonInput | NFTRewardCreateOrConnectWithoutSeasonInput[]
    createMany?: NFTRewardCreateManySeasonInputEnvelope
    connect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NFTRewardUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<NFTRewardCreateWithoutSeasonInput, NFTRewardUncheckedCreateWithoutSeasonInput> | NFTRewardCreateWithoutSeasonInput[] | NFTRewardUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: NFTRewardCreateOrConnectWithoutSeasonInput | NFTRewardCreateOrConnectWithoutSeasonInput[]
    upsert?: NFTRewardUpsertWithWhereUniqueWithoutSeasonInput | NFTRewardUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: NFTRewardCreateManySeasonInputEnvelope
    set?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    disconnect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    delete?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    connect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    update?: NFTRewardUpdateWithWhereUniqueWithoutSeasonInput | NFTRewardUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: NFTRewardUpdateManyWithWhereWithoutSeasonInput | NFTRewardUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: NFTRewardScalarWhereInput | NFTRewardScalarWhereInput[]
  }

  export type NFTRewardUncheckedUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<NFTRewardCreateWithoutSeasonInput, NFTRewardUncheckedCreateWithoutSeasonInput> | NFTRewardCreateWithoutSeasonInput[] | NFTRewardUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: NFTRewardCreateOrConnectWithoutSeasonInput | NFTRewardCreateOrConnectWithoutSeasonInput[]
    upsert?: NFTRewardUpsertWithWhereUniqueWithoutSeasonInput | NFTRewardUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: NFTRewardCreateManySeasonInputEnvelope
    set?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    disconnect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    delete?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    connect?: NFTRewardWhereUniqueInput | NFTRewardWhereUniqueInput[]
    update?: NFTRewardUpdateWithWhereUniqueWithoutSeasonInput | NFTRewardUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: NFTRewardUpdateManyWithWhereWithoutSeasonInput | NFTRewardUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: NFTRewardScalarWhereInput | NFTRewardScalarWhereInput[]
  }

  export type EnumAchievementCategoryFieldUpdateOperationsInput = {
    set?: $Enums.AchievementCategory
  }

  export type EnumRewardTypeFieldUpdateOperationsInput = {
    set?: $Enums.RewardType
  }

  export type ReputationCreatebenefitsInput = {
    set: string[]
  }

  export type ReputationUpdatebenefitsInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedEnumUserTierFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTier | EnumUserTierFieldRefInput<$PrismaModel>
    in?: $Enums.UserTier[] | ListEnumUserTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTier[] | ListEnumUserTierFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTierFilter<$PrismaModel> | $Enums.UserTier
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedEnumUserTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserTier | EnumUserTierFieldRefInput<$PrismaModel>
    in?: $Enums.UserTier[] | ListEnumUserTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserTier[] | ListEnumUserTierFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTierWithAggregatesFilter<$PrismaModel> | $Enums.UserTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTierFilter<$PrismaModel>
    _max?: NestedEnumUserTierFilter<$PrismaModel>
  }

  export type NestedEnumFeedTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedType | EnumFeedTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedType[] | ListEnumFeedTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedType[] | ListEnumFeedTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedTypeFilter<$PrismaModel> | $Enums.FeedType
  }

  export type NestedEnumFeedTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedType | EnumFeedTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedType[] | ListEnumFeedTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedType[] | ListEnumFeedTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedTypeWithAggregatesFilter<$PrismaModel> | $Enums.FeedType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedTypeFilter<$PrismaModel>
    _max?: NestedEnumFeedTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumMissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeFilter<$PrismaModel> | $Enums.MissionType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MissionType | EnumMissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MissionType[] | ListEnumMissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.MissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMissionTypeFilter<$PrismaModel>
    _max?: NestedEnumMissionTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type NestedEnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
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

  export type NestedEnumAchievementCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementCategory | EnumAchievementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementCategoryFilter<$PrismaModel> | $Enums.AchievementCategory
  }

  export type NestedEnumRewardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardType | EnumRewardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RewardType[] | ListEnumRewardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardType[] | ListEnumRewardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardTypeFilter<$PrismaModel> | $Enums.RewardType
  }

  export type NestedEnumAchievementCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementCategory | EnumAchievementCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementCategory[] | ListEnumAchievementCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AchievementCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementCategoryFilter<$PrismaModel>
    _max?: NestedEnumAchievementCategoryFilter<$PrismaModel>
  }

  export type NestedEnumRewardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardType | EnumRewardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RewardType[] | ListEnumRewardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardType[] | ListEnumRewardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardTypeWithAggregatesFilter<$PrismaModel> | $Enums.RewardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardTypeFilter<$PrismaModel>
    _max?: NestedEnumRewardTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type NFTRewardCreateWithoutUserInput = {
    name: string
    description: string
    rarity: $Enums.Rarity
    image: string
    earnedAt: string
    season?: SeasonCreateNestedOneWithoutRewardsInput
  }

  export type NFTRewardUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description: string
    rarity: $Enums.Rarity
    image: string
    earnedAt: string
    seasonId?: number | null
  }

  export type NFTRewardCreateOrConnectWithoutUserInput = {
    where: NFTRewardWhereUniqueInput
    create: XOR<NFTRewardCreateWithoutUserInput, NFTRewardUncheckedCreateWithoutUserInput>
  }

  export type NFTRewardCreateManyUserInputEnvelope = {
    data: NFTRewardCreateManyUserInput | NFTRewardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    username: string
    message: string
    timestamp: string
    likes: number
    avatar?: string | null
    artist: ArtistCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    artistId: number
    username: string
    message: string
    timestamp: string
    likes: number
    avatar?: string | null
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DonationCreateWithoutDonorInput = {
    amount: string
    message: string
    timestamp: string
    stakingPower: number
    artist: ArtistCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateWithoutDonorInput = {
    id?: number
    artistId: number
    amount: string
    message: string
    timestamp: string
    stakingPower: number
  }

  export type DonationCreateOrConnectWithoutDonorInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationCreateManyDonorInputEnvelope = {
    data: DonationCreateManyDonorInput | DonationCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type ActivityFeedItemCreateWithoutUserInput = {
    type: $Enums.FeedType
    artistId?: number | null
    artistName?: string | null
    amount?: string | null
    message?: string | null
    timestamp: string
    icon?: string | null
  }

  export type ActivityFeedItemUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.FeedType
    artistId?: number | null
    artistName?: string | null
    amount?: string | null
    message?: string | null
    timestamp: string
    icon?: string | null
  }

  export type ActivityFeedItemCreateOrConnectWithoutUserInput = {
    where: ActivityFeedItemWhereUniqueInput
    create: XOR<ActivityFeedItemCreateWithoutUserInput, ActivityFeedItemUncheckedCreateWithoutUserInput>
  }

  export type ActivityFeedItemCreateManyUserInputEnvelope = {
    data: ActivityFeedItemCreateManyUserInput | ActivityFeedItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NFTRewardUpsertWithWhereUniqueWithoutUserInput = {
    where: NFTRewardWhereUniqueInput
    update: XOR<NFTRewardUpdateWithoutUserInput, NFTRewardUncheckedUpdateWithoutUserInput>
    create: XOR<NFTRewardCreateWithoutUserInput, NFTRewardUncheckedCreateWithoutUserInput>
  }

  export type NFTRewardUpdateWithWhereUniqueWithoutUserInput = {
    where: NFTRewardWhereUniqueInput
    data: XOR<NFTRewardUpdateWithoutUserInput, NFTRewardUncheckedUpdateWithoutUserInput>
  }

  export type NFTRewardUpdateManyWithWhereWithoutUserInput = {
    where: NFTRewardScalarWhereInput
    data: XOR<NFTRewardUpdateManyMutationInput, NFTRewardUncheckedUpdateManyWithoutUserInput>
  }

  export type NFTRewardScalarWhereInput = {
    AND?: NFTRewardScalarWhereInput | NFTRewardScalarWhereInput[]
    OR?: NFTRewardScalarWhereInput[]
    NOT?: NFTRewardScalarWhereInput | NFTRewardScalarWhereInput[]
    id?: IntFilter<"NFTReward"> | number
    name?: StringFilter<"NFTReward"> | string
    description?: StringFilter<"NFTReward"> | string
    rarity?: EnumRarityFilter<"NFTReward"> | $Enums.Rarity
    image?: StringFilter<"NFTReward"> | string
    earnedAt?: StringFilter<"NFTReward"> | string
    userId?: StringNullableFilter<"NFTReward"> | string | null
    seasonId?: IntNullableFilter<"NFTReward"> | number | null
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    artistId?: IntFilter<"Comment"> | number
    userId?: StringFilter<"Comment"> | string
    username?: StringFilter<"Comment"> | string
    message?: StringFilter<"Comment"> | string
    timestamp?: StringFilter<"Comment"> | string
    likes?: IntFilter<"Comment"> | number
    avatar?: StringNullableFilter<"Comment"> | string | null
  }

  export type DonationUpsertWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
  }

  export type DonationUpdateManyWithWhereWithoutDonorInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutDonorInput>
  }

  export type DonationScalarWhereInput = {
    AND?: DonationScalarWhereInput | DonationScalarWhereInput[]
    OR?: DonationScalarWhereInput[]
    NOT?: DonationScalarWhereInput | DonationScalarWhereInput[]
    id?: IntFilter<"Donation"> | number
    artistId?: IntFilter<"Donation"> | number
    donorId?: StringFilter<"Donation"> | string
    amount?: StringFilter<"Donation"> | string
    message?: StringFilter<"Donation"> | string
    timestamp?: StringFilter<"Donation"> | string
    stakingPower?: IntFilter<"Donation"> | number
  }

  export type ActivityFeedItemUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityFeedItemWhereUniqueInput
    update: XOR<ActivityFeedItemUpdateWithoutUserInput, ActivityFeedItemUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityFeedItemCreateWithoutUserInput, ActivityFeedItemUncheckedCreateWithoutUserInput>
  }

  export type ActivityFeedItemUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityFeedItemWhereUniqueInput
    data: XOR<ActivityFeedItemUpdateWithoutUserInput, ActivityFeedItemUncheckedUpdateWithoutUserInput>
  }

  export type ActivityFeedItemUpdateManyWithWhereWithoutUserInput = {
    where: ActivityFeedItemScalarWhereInput
    data: XOR<ActivityFeedItemUpdateManyMutationInput, ActivityFeedItemUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityFeedItemScalarWhereInput = {
    AND?: ActivityFeedItemScalarWhereInput | ActivityFeedItemScalarWhereInput[]
    OR?: ActivityFeedItemScalarWhereInput[]
    NOT?: ActivityFeedItemScalarWhereInput | ActivityFeedItemScalarWhereInput[]
    id?: IntFilter<"ActivityFeedItem"> | number
    type?: EnumFeedTypeFilter<"ActivityFeedItem"> | $Enums.FeedType
    userId?: StringFilter<"ActivityFeedItem"> | string
    artistId?: IntNullableFilter<"ActivityFeedItem"> | number | null
    artistName?: StringNullableFilter<"ActivityFeedItem"> | string | null
    amount?: StringNullableFilter<"ActivityFeedItem"> | string | null
    message?: StringNullableFilter<"ActivityFeedItem"> | string | null
    timestamp?: StringFilter<"ActivityFeedItem"> | string
    icon?: StringNullableFilter<"ActivityFeedItem"> | string | null
  }

  export type CommentCreateWithoutArtistInput = {
    username: string
    message: string
    timestamp: string
    likes: number
    avatar?: string | null
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutArtistInput = {
    id?: number
    userId: string
    username: string
    message: string
    timestamp: string
    likes: number
    avatar?: string | null
  }

  export type CommentCreateOrConnectWithoutArtistInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutArtistInput, CommentUncheckedCreateWithoutArtistInput>
  }

  export type CommentCreateManyArtistInputEnvelope = {
    data: CommentCreateManyArtistInput | CommentCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type DonationCreateWithoutArtistInput = {
    amount: string
    message: string
    timestamp: string
    stakingPower: number
    donor: UserCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateWithoutArtistInput = {
    id?: number
    donorId: string
    amount: string
    message: string
    timestamp: string
    stakingPower: number
  }

  export type DonationCreateOrConnectWithoutArtistInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutArtistInput, DonationUncheckedCreateWithoutArtistInput>
  }

  export type DonationCreateManyArtistInputEnvelope = {
    data: DonationCreateManyArtistInput | DonationCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutArtistInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutArtistInput, CommentUncheckedUpdateWithoutArtistInput>
    create: XOR<CommentCreateWithoutArtistInput, CommentUncheckedCreateWithoutArtistInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutArtistInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutArtistInput, CommentUncheckedUpdateWithoutArtistInput>
  }

  export type CommentUpdateManyWithWhereWithoutArtistInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutArtistInput>
  }

  export type DonationUpsertWithWhereUniqueWithoutArtistInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutArtistInput, DonationUncheckedUpdateWithoutArtistInput>
    create: XOR<DonationCreateWithoutArtistInput, DonationUncheckedCreateWithoutArtistInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutArtistInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutArtistInput, DonationUncheckedUpdateWithoutArtistInput>
  }

  export type DonationUpdateManyWithWhereWithoutArtistInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutArtistInput>
  }

  export type ArtistCreateWithoutDonationsInput = {
    name: string
    bio: string
    image: string
    stakingPower: number
    totalTips: number
    rank: number
    genre: string
    comments?: CommentCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutDonationsInput = {
    id?: number
    name: string
    bio: string
    image: string
    stakingPower: number
    totalTips: number
    rank: number
    genre: string
    comments?: CommentUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutDonationsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutDonationsInput, ArtistUncheckedCreateWithoutDonationsInput>
  }

  export type UserCreateWithoutDonationsInput = {
    id: string
    username: string
    avatar?: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following?: UserCreatefollowingInput | number[]
    followers?: UserCreatefollowersInput | string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet?: string | null
    nftRewards?: NFTRewardCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    activityFeedItems?: ActivityFeedItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDonationsInput = {
    id: string
    username: string
    avatar?: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following?: UserCreatefollowingInput | number[]
    followers?: UserCreatefollowersInput | string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet?: string | null
    nftRewards?: NFTRewardUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    activityFeedItems?: ActivityFeedItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDonationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
  }

  export type ArtistUpsertWithoutDonationsInput = {
    update: XOR<ArtistUpdateWithoutDonationsInput, ArtistUncheckedUpdateWithoutDonationsInput>
    create: XOR<ArtistCreateWithoutDonationsInput, ArtistUncheckedCreateWithoutDonationsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutDonationsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutDonationsInput, ArtistUncheckedUpdateWithoutDonationsInput>
  }

  export type ArtistUpdateWithoutDonationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
    totalTips?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    comments?: CommentUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutDonationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
    totalTips?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type UserUpsertWithoutDonationsInput = {
    update: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type UserUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    nftRewards?: NFTRewardUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    activityFeedItems?: ActivityFeedItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    nftRewards?: NFTRewardUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    activityFeedItems?: ActivityFeedItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArtistCreateWithoutCommentsInput = {
    name: string
    bio: string
    image: string
    stakingPower: number
    totalTips: number
    rank: number
    genre: string
    donations?: DonationCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutCommentsInput = {
    id?: number
    name: string
    bio: string
    image: string
    stakingPower: number
    totalTips: number
    rank: number
    genre: string
    donations?: DonationUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutCommentsInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutCommentsInput, ArtistUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id: string
    username: string
    avatar?: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following?: UserCreatefollowingInput | number[]
    followers?: UserCreatefollowersInput | string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet?: string | null
    nftRewards?: NFTRewardCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    activityFeedItems?: ActivityFeedItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id: string
    username: string
    avatar?: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following?: UserCreatefollowingInput | number[]
    followers?: UserCreatefollowersInput | string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet?: string | null
    nftRewards?: NFTRewardUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    activityFeedItems?: ActivityFeedItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type ArtistUpsertWithoutCommentsInput = {
    update: XOR<ArtistUpdateWithoutCommentsInput, ArtistUncheckedUpdateWithoutCommentsInput>
    create: XOR<ArtistCreateWithoutCommentsInput, ArtistUncheckedCreateWithoutCommentsInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutCommentsInput, ArtistUncheckedUpdateWithoutCommentsInput>
  }

  export type ArtistUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
    totalTips?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    donations?: DonationUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
    totalTips?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    genre?: StringFieldUpdateOperationsInput | string
    donations?: DonationUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    nftRewards?: NFTRewardUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    activityFeedItems?: ActivityFeedItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    nftRewards?: NFTRewardUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    activityFeedItems?: ActivityFeedItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutActivityFeedItemsInput = {
    id: string
    username: string
    avatar?: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following?: UserCreatefollowingInput | number[]
    followers?: UserCreatefollowersInput | string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet?: string | null
    nftRewards?: NFTRewardCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateWithoutActivityFeedItemsInput = {
    id: string
    username: string
    avatar?: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following?: UserCreatefollowingInput | number[]
    followers?: UserCreatefollowersInput | string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet?: string | null
    nftRewards?: NFTRewardUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserCreateOrConnectWithoutActivityFeedItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityFeedItemsInput, UserUncheckedCreateWithoutActivityFeedItemsInput>
  }

  export type UserUpsertWithoutActivityFeedItemsInput = {
    update: XOR<UserUpdateWithoutActivityFeedItemsInput, UserUncheckedUpdateWithoutActivityFeedItemsInput>
    create: XOR<UserCreateWithoutActivityFeedItemsInput, UserUncheckedCreateWithoutActivityFeedItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityFeedItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityFeedItemsInput, UserUncheckedUpdateWithoutActivityFeedItemsInput>
  }

  export type UserUpdateWithoutActivityFeedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    nftRewards?: NFTRewardUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityFeedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    nftRewards?: NFTRewardUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type UserCreateWithoutNftRewardsInput = {
    id: string
    username: string
    avatar?: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following?: UserCreatefollowingInput | number[]
    followers?: UserCreatefollowersInput | string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet?: string | null
    comments?: CommentCreateNestedManyWithoutUserInput
    donations?: DonationCreateNestedManyWithoutDonorInput
    activityFeedItems?: ActivityFeedItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNftRewardsInput = {
    id: string
    username: string
    avatar?: string | null
    stakingPower: number
    reputation: number
    tier: $Enums.UserTier
    following?: UserCreatefollowingInput | number[]
    followers?: UserCreatefollowersInput | string[]
    totalTipsGiven: number
    totalCommentsPosted: number
    dailyMissionsCompleted: number
    streakDays: number
    wallet?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    donations?: DonationUncheckedCreateNestedManyWithoutDonorInput
    activityFeedItems?: ActivityFeedItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNftRewardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNftRewardsInput, UserUncheckedCreateWithoutNftRewardsInput>
  }

  export type SeasonCreateWithoutRewardsInput = {
    name: string
    description: string
    startDate: string
    endDate: string
    tipMultiplier: number
    isActive: boolean
  }

  export type SeasonUncheckedCreateWithoutRewardsInput = {
    id?: number
    name: string
    description: string
    startDate: string
    endDate: string
    tipMultiplier: number
    isActive: boolean
  }

  export type SeasonCreateOrConnectWithoutRewardsInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutRewardsInput, SeasonUncheckedCreateWithoutRewardsInput>
  }

  export type UserUpsertWithoutNftRewardsInput = {
    update: XOR<UserUpdateWithoutNftRewardsInput, UserUncheckedUpdateWithoutNftRewardsInput>
    create: XOR<UserCreateWithoutNftRewardsInput, UserUncheckedCreateWithoutNftRewardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNftRewardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNftRewardsInput, UserUncheckedUpdateWithoutNftRewardsInput>
  }

  export type UserUpdateWithoutNftRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUpdateManyWithoutUserNestedInput
    donations?: DonationUpdateManyWithoutDonorNestedInput
    activityFeedItems?: ActivityFeedItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNftRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    stakingPower?: IntFieldUpdateOperationsInput | number
    reputation?: IntFieldUpdateOperationsInput | number
    tier?: EnumUserTierFieldUpdateOperationsInput | $Enums.UserTier
    following?: UserUpdatefollowingInput | number[]
    followers?: UserUpdatefollowersInput | string[]
    totalTipsGiven?: IntFieldUpdateOperationsInput | number
    totalCommentsPosted?: IntFieldUpdateOperationsInput | number
    dailyMissionsCompleted?: IntFieldUpdateOperationsInput | number
    streakDays?: IntFieldUpdateOperationsInput | number
    wallet?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    donations?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    activityFeedItems?: ActivityFeedItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SeasonUpsertWithoutRewardsInput = {
    update: XOR<SeasonUpdateWithoutRewardsInput, SeasonUncheckedUpdateWithoutRewardsInput>
    create: XOR<SeasonCreateWithoutRewardsInput, SeasonUncheckedCreateWithoutRewardsInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutRewardsInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutRewardsInput, SeasonUncheckedUpdateWithoutRewardsInput>
  }

  export type SeasonUpdateWithoutRewardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    tipMultiplier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeasonUncheckedUpdateWithoutRewardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    tipMultiplier?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NFTRewardCreateWithoutSeasonInput = {
    name: string
    description: string
    rarity: $Enums.Rarity
    image: string
    earnedAt: string
    user?: UserCreateNestedOneWithoutNftRewardsInput
  }

  export type NFTRewardUncheckedCreateWithoutSeasonInput = {
    id?: number
    name: string
    description: string
    rarity: $Enums.Rarity
    image: string
    earnedAt: string
    userId?: string | null
  }

  export type NFTRewardCreateOrConnectWithoutSeasonInput = {
    where: NFTRewardWhereUniqueInput
    create: XOR<NFTRewardCreateWithoutSeasonInput, NFTRewardUncheckedCreateWithoutSeasonInput>
  }

  export type NFTRewardCreateManySeasonInputEnvelope = {
    data: NFTRewardCreateManySeasonInput | NFTRewardCreateManySeasonInput[]
    skipDuplicates?: boolean
  }

  export type NFTRewardUpsertWithWhereUniqueWithoutSeasonInput = {
    where: NFTRewardWhereUniqueInput
    update: XOR<NFTRewardUpdateWithoutSeasonInput, NFTRewardUncheckedUpdateWithoutSeasonInput>
    create: XOR<NFTRewardCreateWithoutSeasonInput, NFTRewardUncheckedCreateWithoutSeasonInput>
  }

  export type NFTRewardUpdateWithWhereUniqueWithoutSeasonInput = {
    where: NFTRewardWhereUniqueInput
    data: XOR<NFTRewardUpdateWithoutSeasonInput, NFTRewardUncheckedUpdateWithoutSeasonInput>
  }

  export type NFTRewardUpdateManyWithWhereWithoutSeasonInput = {
    where: NFTRewardScalarWhereInput
    data: XOR<NFTRewardUpdateManyMutationInput, NFTRewardUncheckedUpdateManyWithoutSeasonInput>
  }

  export type NFTRewardCreateManyUserInput = {
    id?: number
    name: string
    description: string
    rarity: $Enums.Rarity
    image: string
    earnedAt: string
    seasonId?: number | null
  }

  export type CommentCreateManyUserInput = {
    id?: number
    artistId: number
    username: string
    message: string
    timestamp: string
    likes: number
    avatar?: string | null
  }

  export type DonationCreateManyDonorInput = {
    id?: number
    artistId: number
    amount: string
    message: string
    timestamp: string
    stakingPower: number
  }

  export type ActivityFeedItemCreateManyUserInput = {
    id?: number
    type: $Enums.FeedType
    artistId?: number | null
    artistName?: string | null
    amount?: string | null
    message?: string | null
    timestamp: string
    icon?: string | null
  }

  export type NFTRewardUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    image?: StringFieldUpdateOperationsInput | string
    earnedAt?: StringFieldUpdateOperationsInput | string
    season?: SeasonUpdateOneWithoutRewardsNestedInput
  }

  export type NFTRewardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    image?: StringFieldUpdateOperationsInput | string
    earnedAt?: StringFieldUpdateOperationsInput | string
    seasonId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NFTRewardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    image?: StringFieldUpdateOperationsInput | string
    earnedAt?: StringFieldUpdateOperationsInput | string
    seasonId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentUpdateWithoutUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    artist?: ArtistUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonationUpdateWithoutDonorInput = {
    amount?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
    artist?: ArtistUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
  }

  export type DonationUncheckedUpdateManyWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    amount?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityFeedItemUpdateWithoutUserInput = {
    type?: EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityFeedItemUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityFeedItemUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumFeedTypeFieldUpdateOperationsInput | $Enums.FeedType
    artistId?: NullableIntFieldUpdateOperationsInput | number | null
    artistName?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyArtistInput = {
    id?: number
    userId: string
    username: string
    message: string
    timestamp: string
    likes: number
    avatar?: string | null
  }

  export type DonationCreateManyArtistInput = {
    id?: number
    donorId: string
    amount: string
    message: string
    timestamp: string
    stakingPower: number
  }

  export type CommentUpdateWithoutArtistInput = {
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonationUpdateWithoutArtistInput = {
    amount?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
    donor?: UserUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
  }

  export type DonationUncheckedUpdateManyWithoutArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    donorId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    stakingPower?: IntFieldUpdateOperationsInput | number
  }

  export type NFTRewardCreateManySeasonInput = {
    id?: number
    name: string
    description: string
    rarity: $Enums.Rarity
    image: string
    earnedAt: string
    userId?: string | null
  }

  export type NFTRewardUpdateWithoutSeasonInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    image?: StringFieldUpdateOperationsInput | string
    earnedAt?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutNftRewardsNestedInput
  }

  export type NFTRewardUncheckedUpdateWithoutSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    image?: StringFieldUpdateOperationsInput | string
    earnedAt?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NFTRewardUncheckedUpdateManyWithoutSeasonInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    image?: StringFieldUpdateOperationsInput | string
    earnedAt?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
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
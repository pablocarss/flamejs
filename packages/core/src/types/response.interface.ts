export type FlameCommonErrorCode =
  | "ERR_UNKNOWN_ERROR"
  | "ERR_BAD_REQUEST"
  | "ERR_UNAUTHORIZED"
  | "ERR_FORBIDDEN"
  | "ERR_NOT_FOUND"
  | "ERR_REDIRECT";

export type FlameResponseSuccess<TData = unknown> = {
  data: TData;
};

export type FlameResponseBadRequest<TBadRequestData = unknown> =
  FlameResponseError<"ERR_BAD_REQUEST", TBadRequestData>;

export type FlameResponseRedirect = FlameResponseError<
  "ERR_REDIRECT",
  {
    destination: string;
    type: "replace" | "push";
  }
>;

export type FlameResponseNotFound<TNotFoundData = unknown> =
  FlameResponseError<"ERR_NOT_FOUND", TNotFoundData>;

export type FlameResponseUnauthorized<TUnauthorizedData = unknown> =
  FlameResponseError<"ERR_UNAUTHORIZED", TUnauthorizedData>;

export type FlameResponseForbidden<TForbiddenData = unknown> =
  FlameResponseError<"ERR_FORBIDDEN", TForbiddenData>;


  export type FlameResponse<TData = unknown, TError = unknown> =
    | {
        data: TData;
        error: null;
      }
    | {
        data: null;
        error: TError;
      };

  /**
   * Represents an error response within the Flame system.
   * This class encapsulates error details including a code, an optional message, and optional data.
   * It is designed to be thrown or returned to indicate a specific problem.
   *
   * @template TCode The specific error code type, defaulting to "ERR_UNKNOWN_ERROR".
   * @template TData The type of additional data associated with the error, defaulting to `unknown`.
   */
  export class FlameResponseError<
    TCode extends FlameCommonErrorCode = "ERR_UNKNOWN_ERROR",
    TData = unknown,
  > {
    public code: TCode;
    public message?: string;
    public data?: TData;

    /**
     * Creates an instance of FlameResponseError.
     *
     * @param error An object containing the error details.
     * @param error.code The unique error code.
     * @param error.message An optional human-readable message describing the error.
     * @param error.data Optional additional data related to the error.
     */
    constructor(public error: {
      code: TCode;
      message?: string;
      data?: TData;
    }) {
      this.code = error.code;
      this.message = error.message;
      this.data = error.data;
    }

    /**
     * Returns a plain object representation of the error, useful for serialization.
     *
     * @returns An object containing the error code, message, and data.
     */
    toJSON() {
      return this.error;
    }

    /**
     * Returns the error code.
     * @returns The error code.
     */
    getCode(): TCode {
      return this.error.code;
    }

    /**
     * Returns the optional error message.
     * @returns The error message, or `undefined` if not set.
     */
    getMessage(): string | undefined {
      return this.error.message;
    }

    /**
     * Returns the optional error data.
     * @returns The error data, or `undefined` if not set.
     */
    getData(): TData | undefined {
      return this.error.data;
    }

    /**
     * Returns a string representation of the error.
     * @returns A string combining the error code and message.
     */
    toString(): string {
      const messagePart = this.error.message ? `: ${this.error.message}` : '';
      return `FlameResponseError [${this.error.code}]${messagePart}`;
    }
}






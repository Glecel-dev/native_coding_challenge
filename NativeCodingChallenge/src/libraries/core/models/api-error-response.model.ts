import { ErrorObject } from '@core/interfaces/error-object.interface';
import { ClientViewDataAdapter } from '@core/interfaces/adapter.interface';

/**
 * Frontend model for API error responses
 */
export class ApiErrorResponse {
  readonly status: string;
  readonly error: ErrorObject;

  constructor(object: ApiErrorResponse) {
    this.status = object.status;
    this.error = object.error;
  }
}

/**
 * Adapter for API error responses
 */
export const apiErrorResponseAdapter: ClientViewDataAdapter<ApiErrorResponse> = {
  clientAdapt(object: any): ApiErrorResponse {
    return new ApiErrorResponse(object);
  },
};

import { HttpError } from 'common/models/httpErrorModels';

export const mockedWrongRequestError = new HttpError('Error message', 400);
export const mockedBackendError = new HttpError('Error message', 500);

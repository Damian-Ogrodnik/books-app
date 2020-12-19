import { SearchPayload } from './SearchPayload';

export interface NextPagePayload extends SearchPayload {
  nextBookIndex: number;
}

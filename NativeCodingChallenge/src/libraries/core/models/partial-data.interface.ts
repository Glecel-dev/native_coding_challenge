import { ProductState, ProductName } from '@core/interfaces/products.interface';

/**
 * Interface for an item with partial data
 */
export interface PartialDataItem {
  readonly company: string;
  readonly name: string;
  readonly _id: string;
  readonly productState: ProductState;
}

/**
 * Partial data state
 */
export type PartialData = {
  [productName in ProductName]?: PartialDataItem[];
};

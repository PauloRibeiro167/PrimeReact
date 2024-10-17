import { getAdminProducts } from '@helpersAdmin/ProductsHelpers';
import { ProductsModel } from '@models/ProductsModel';

export class ProductsController {
  fetchgetAdminProducts() {
    return getAdminProducts();
  }
}
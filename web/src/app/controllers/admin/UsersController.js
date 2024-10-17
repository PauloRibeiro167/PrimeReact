import { getAdminUsers } from '@HelpersAdmin/UsersHelper';
import { ProductsModel } from '@models/ProductsModel';

export class ProductsController {

  fetchgetAdminUsers() {
    return getAdminUsers();
  }

}
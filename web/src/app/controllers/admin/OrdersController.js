import { getAdminOrders } from '@helpersAdmin/OrdersHelper';
import { ProductsModel } from '@models/ProductsModel';

export class DashboardController {
  
  fetchgetAdminOrders() {
    return getAdminOrders();
  }
}
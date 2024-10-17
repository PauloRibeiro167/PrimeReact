import { getDashboardData } from '@helpersAdmin/DashboardHelper';
import { ProductsModel } from '@models/ProductsModel';

export class DashboardController {
  // Método que acessa o getDashboardData
  fetchDashboardData() {
    return getDashboardData();
  }
}
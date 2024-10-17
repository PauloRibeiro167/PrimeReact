import { getCurrentUser } from '@helpersPublic/AuthHelpers';
import { OrdersModel } from '@models/OrdersModel';

export class OrdersController {
  // Método que cria um novo pedido
  createOrder(orderData) {
    const user = getCurrentUser();
    if (!user) {
      throw new Error('Usuário não autenticado. Por favor, faça login para continuar.');
    }

    // Lógica para criar um novo pedido
    const order = new OrdersModel(orderData);
    order.userId = user.id;
    return order.save();
  }
}
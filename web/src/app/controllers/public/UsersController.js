import { someHelperFunction } from '@helpersPublic/Usershelpers';
import { UsersModel } from '@models/UsersModel';
import { InteractionsModel } from '@models/InteractionsModel';

export class UsersController {
  // Método que busca itens de usuários
  fetchUsersItems() {
    return someHelperFunction();
  }

  // Método que registra a interação do usuário
  logUserInteraction(userId, interactionType, interactionData) {
    const interaction = new InteractionsModel({
      userId,
      interactionType,
      interactionData,
      timestamp: new Date()
    });
    return interaction.save();
  }
}
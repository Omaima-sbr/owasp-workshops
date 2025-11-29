import { UserModel } from '../models/user';  // modèle correct
import { sequelize } from '../models/index'; // connexion Sequelize

async function showPasswords() {
  await sequelize.authenticate();

  // Typage explicite : tableau de UserModel
  const users: UserModel[] = await UserModel.findAll();

  // Affichage des hashes
  users.forEach((u: UserModel) => {
    console.log(`User: ${u.email}, Hash: ${u.password}`);
  });
}

showPasswords()
  .then(() => process.exit())
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

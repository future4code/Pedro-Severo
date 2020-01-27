import { AddressInfo } from "net";
import app from "./presentation";
import { DatabaseManager } from "./helpers/databaseManager";

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const main = async () => {
  const dbm = new DatabaseManager();
  // await dbm.dropTableF4Users();
  // await dbm.createF4UsersTable();
};

main();
console.clear();

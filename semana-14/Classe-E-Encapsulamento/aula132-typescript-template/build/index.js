"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const JSONFileManager_1 = require("./JSONFileManager");
const bank_1 = require("./bank");
const accountUserFileManager = new JSONFileManager_1.JSONFileManager('accountUser.json');
const user1 = new users_1.UserAccount("Pedro", "120.438.916-00", 25);
const user2 = new users_1.UserAccount("Severo", "120.438.916-01", 23);
const bank = new bank_1.Bank(accountUserFileManager);
const createAccount = () => {
    bank.createAccount(user1);
    bank.createAccount(user2);
    accountUserFileManager.saveToJSON(bank.accounts);
};
const getAccounts = () => {
    const accountsFromJSON = accountUserFileManager.getObjectFromFile();
    bank.getAccountsFromJSON(accountsFromJSON);
};
const getAccountsByCpf = () => {
    const accountsFromJSON = accountUserFileManager.getObjectFromFile();
    bank.getAccountByCpf(user1.cpf, user1.name, accountsFromJSON);
};
const saveAccount = () => {
    const newTransaction = new users_1.Transaction("120.438.916-00", 10, "depósito");
    const accountsFromJSON = accountUserFileManager.getObjectFromFile();
    accountUserFileManager.saveToJSON(bank.saveAccounts(newTransaction, user1, accountsFromJSON));
};
saveAccount();
//# sourceMappingURL=index.js.map
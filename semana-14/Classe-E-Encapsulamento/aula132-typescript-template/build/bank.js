"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    constructor(fileManager) {
        this.accounts = [];
        this.fileManager = fileManager;
    }
    ;
    createAccount(UserAccount) {
        this.accounts.push(UserAccount);
    }
    ;
    getAccountsFromJSON(accountsJSON) {
        console.log(accountsJSON);
    }
    ;
    getAccountByCpf(cpf, name, accountsJSON) {
        for (let user of accountsJSON) {
            if (user.name === name && user.cpf === cpf) {
                console.log(user);
            }
            else {
                console.log("Algum dado foi informado incorretamente.");
                return user;
            }
            ;
        }
        ;
    }
    ;
    saveAccounts(transaction, userAccount, accountsJSON) {
        for (let user of accountsJSON) {
            if (userAccount.name === user.name && userAccount.cpf === user.cpf) {
                user.transactions.push(transaction);
                return accountsJSON;
            }
            ;
        }
        ;
    }
    ;
}
exports.Bank = Bank;
;
//# sourceMappingURL=bank.js.map
import { JSONFileManager } from './JSONFileManager';
import { UserAccount, Transaction } from './users';

export class Bank {
    accounts: UserAccount[];
    fileManager: JSONFileManager;

    constructor(fileManager: JSONFileManager) {
        this.accounts = [];
        this.fileManager = fileManager;
    };

    createAccount(UserAccount: UserAccount) {
        this.accounts.push(UserAccount);
    };

    getAccountsFromJSON(accountsJSON: any) {
        console.log(accountsJSON);
    };

    getAccountByCpf(cpf: string, name: string, accountsJSON: any) {
        for(let user of accountsJSON) {
            if (user.name === name && user.cpf === cpf) {
                console.log(user);
            } else {
                console.log("Algum dado foi informado incorretamente.");
                return user;
            };
        };
    };

    saveAccounts(transaction: Transaction, userAccount: UserAccount, accountsJSON: any) {
        for (let user of accountsJSON) {
            if(userAccount.name === user.name && userAccount.cpf === user.cpf) {
                user.transactions.push(transaction);
                return accountsJSON;
            };
        };
    };

};
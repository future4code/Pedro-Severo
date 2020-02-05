import { writeFile, readFile } from 'fs';
import { Transaction, UserAccount} from './users';
import { JSONFileManager } from './JSONFileManager';
import { Bank } from './bank';

const accountUserFileManager = new JSONFileManager('accountUser.json');

const user1: UserAccount = new UserAccount("Pedro", "120.438.916-00", 25);
const user2: UserAccount = new UserAccount("Severo", "120.438.916-01", 23);

const bank: Bank = new Bank(accountUserFileManager);


const createAccount = (): void => {

    bank.createAccount(user1);
    bank.createAccount(user2);

    accountUserFileManager.saveToJSON(bank.accounts)
};

const getAccounts = (): void => {
    const accountsFromJSON = accountUserFileManager.getObjectFromFile();
    bank.getAccountsFromJSON(accountsFromJSON);
};

const getAccountsByCpf = (): void => {
    const accountsFromJSON: any = accountUserFileManager.getObjectFromFile();
    bank.getAccountByCpf(user1.cpf, user1.name, accountsFromJSON);
};

const saveAccount = (): void => {
    const newTransaction: Transaction = new Transaction("120.438.916-00", 10, "depósito");
    const accountsFromJSON: any = accountUserFileManager.getObjectFromFile();
    accountUserFileManager.saveToJSON(bank.saveAccounts(newTransaction, user1, accountsFromJSON));
};

saveAccount()




import { JSONFileManager } from './JSONFileManager';
import { UserAccount } from './users';

export class Bank {
    accounts: UserAccount[];
    fileManager: JSONFileManager;

    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
        this.accounts = accounts;
        this.fileManager = fileManager;
    };

    
};
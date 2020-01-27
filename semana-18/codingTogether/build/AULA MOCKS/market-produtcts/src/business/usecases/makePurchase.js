"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const missingInformationError_1 = require("../entities/erros/missingInformationError");
const invalidBalance_1 = require("../entities/erros/invalidBalance");
const purchase_1 = require("../entities/purchase");
class MakePurchaseUC {
    constructor(userGateway, purchaseGateway) {
        this.userGateway = userGateway;
        this.purchaseGateway = purchaseGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.userId) {
                throw new missingInformationError_1.MissingInformationError();
            }
            if (!input.products.length) {
                throw new missingInformationError_1.MissingInformationError();
            }
            let totalAmount = 0;
            input.products.forEach(product => {
                if (product.quantity <= 0 ||
                    !product.id ||
                    !product.name ||
                    product.price <= 0) {
                    throw new missingInformationError_1.MissingInformationError();
                }
                totalAmount += product.quantity * product.price;
            });
            const user = yield this.userGateway.getUser(input.userId);
            if (user.getBalance() < totalAmount) {
                throw new invalidBalance_1.InvalidBalanceError();
            }
            yield this.purchaseGateway.makePurchase(input.userId, input.products.map(product => {
                return new purchase_1.PurchaseProduct(product.id, product.name, product.price, product.quantity);
            }));
            return `Purchase created successfully! Total amount: R$${totalAmount},00`;
        });
    }
}
exports.MakePurchaseUC = MakePurchaseUC;

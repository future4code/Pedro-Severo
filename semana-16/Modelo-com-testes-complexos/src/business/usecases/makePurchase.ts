import { UserGateway } from "../gateways/userGateway";
import { PurchaseGateway } from "../gateways/purchaseGateway";
import { MissingInformationError } from "../entities/erros/missingInformationError";
import { InvalidBalanceError } from "../entities/erros/invalidBalance";
import { PurchaseProduct } from "../entities/purchase";

export class MakePurchaseUC {
  constructor(
    private userGateway: UserGateway,
    private purchaseGateway: PurchaseGateway
  ) {}
  public async execute(input: MakePurhcaseUCInput): Promise<string> {
    if (!input.userId) {
      throw new MissingInformationError();
    }

    if (!input.products.length) {
      throw new MissingInformationError();
    }

    let totalAmount: number = 0;

    input.products.forEach(product => {
      if (
        product.quantity <= 0 ||
        !product.id ||
        !product.name ||
        product.price <= 0
      ) {
        throw new MissingInformationError();
      }
      totalAmount += product.quantity * product.price;
    });

    const user = await this.userGateway.getUser(input.userId);

    if (user.getBalance() < totalAmount) {
      throw new InvalidBalanceError();
    }

    await this.purchaseGateway.makePurchase(
      input.userId,
      input.products.map(product => {
        return new PurchaseProduct(
          product.id,
          product.name,
          product.price,
          product.quantity
        );
      })
    );

    return `Purchase created successfully! Total amount: R$${totalAmount},00`;
  }
}

export interface MakePurhcaseUCInput {
  userId: string;
  products: MakePurhcaseUCProductInput[];
}

export interface MakePurhcaseUCProductInput {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

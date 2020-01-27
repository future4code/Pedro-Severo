import { PurchaseProduct } from "../entities/purchase";

export interface PurchaseGateway {
  makePurchase(userId: string, products: PurchaseProduct[]): Promise<void>;
}

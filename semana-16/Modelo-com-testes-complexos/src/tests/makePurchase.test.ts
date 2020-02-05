import {
  MakePurchaseUC,
  MakePurhcaseUCInput,
  MakePurhcaseUCProductInput
} from "../business/usecases/makePurchase";
import { PurchaseProduct } from "../business/entities/purchase";
import { UserGateway } from "../business/gateways/userGateway";
import { PurchaseGateway } from "../business/gateways/purchaseGateway";
import { MissingInformationError } from "../business/entities/erros/missingInformationError";
import { InvalidBalanceError } from "../business/entities/erros/invalidBalance";
import { User } from "../business/entities/user";

const userGatewayMock: UserGateway = {
  getUser: jest.fn()
};

const purchaseGateway: PurchaseGateway = {
  makePurchase: jest.fn()
};

const buildMakePurchaseUC = () => {
  return new MakePurchaseUC(userGatewayMock, purchaseGateway);
};

describe("Testing Make Purchase Use Case", () => {
  it("Should throw an error if userId is missing", async () => {
    const makePurchaseUC = buildMakePurchaseUC();
    const productInput: MakePurhcaseUCProductInput = {
      id: "123",
      name: "leite",
      price: 5.5,
      quantity: 3
    };

    const input: MakePurhcaseUCInput = {
      userId: "",
      products: [productInput]
    };
    expect(makePurchaseUC.execute(input)).rejects.toThrow(
      new MissingInformationError()
    );
  });

  it("Should throw an error if products are empty", async () => {
    const makePurchaseUC = buildMakePurchaseUC();

    const input: MakePurhcaseUCInput = {
      userId: "123",
      products: []
    };

    expect(makePurchaseUC.execute(input)).rejects.toThrow(
      new MissingInformationError()
    );
  });

  it("Should throw an error if quantity is in wrong format", async () => {
    const makePurchaseUC = buildMakePurchaseUC();

    const productInput: MakePurhcaseUCProductInput = {
      id: "123",
      name: "leite",
      price: 5.5,
      quantity: -1
    };

    const input: MakePurhcaseUCInput = {
      userId: "123",
      products: [productInput]
    };

    expect(makePurchaseUC.execute(input)).rejects.toThrow(
      new MissingInformationError()
    );
  });

  it("Should throw an error if id is missing", async () => {
    const makePurchaseUC = buildMakePurchaseUC();

    const productInput: MakePurhcaseUCProductInput = {
      id: "",
      name: "leite",
      price: 5.5,
      quantity: 120
    };

    const input: MakePurhcaseUCInput = {
      userId: "123",
      products: [productInput]
    };

    expect(makePurchaseUC.execute(input)).rejects.toThrow(
      new MissingInformationError()
    );
  });

  it("Should throw an error if name is missing", async () => {
    const makePurchaseUC = buildMakePurchaseUC();

    const productInput: MakePurhcaseUCProductInput = {
      id: "123",
      name: "",
      price: 5.5,
      quantity: 120
    };

    const input: MakePurhcaseUCInput = {
      userId: "123",
      products: [productInput]
    };

    expect(makePurchaseUC.execute(input)).rejects.toThrow(
      new MissingInformationError()
    );
  });

  it("Should throw an error if price is in wrong format", async () => {
    const makePurchaseUC = buildMakePurchaseUC();

    const productInput: MakePurhcaseUCProductInput = {
      id: "123",
      name: "leite",
      price: -1,
      quantity: 120
    };

    const input: MakePurhcaseUCInput = {
      userId: "123",
      products: [productInput]
    };

    expect(makePurchaseUC.execute(input)).rejects.toThrow(
      new MissingInformationError()
    );
  });

  it("Should throw an error if total amount is bigger than user's balance", async () => {
    const makePurchaseUC = buildMakePurchaseUC();

    userGatewayMock.getUser = jest
      .fn()
      .mockReturnValueOnce(new User("123", "Goli", 10));

    const productInput: MakePurhcaseUCProductInput = {
      id: "123",
      name: "leite",
      price: 12,
      quantity: 2
    };

    const input: MakePurhcaseUCInput = {
      userId: "123",
      products: [productInput]
    };

    expect(makePurchaseUC.execute(input)).rejects.toThrow(
      new InvalidBalanceError()
    );
    expect(purchaseGateway.makePurchase).toHaveBeenCalledTimes(0);
  });

  it("Should create a purchase and return a success message", async () => {
    const makePurchaseUC = buildMakePurchaseUC();

    userGatewayMock.getUser = jest
      .fn()
      .mockReturnValueOnce(new User("123", "Goli", 100));

    const productInput: MakePurhcaseUCProductInput = {
      id: "123",
      name: "leite",
      price: 12,
      quantity: 2
    };

    const input: MakePurhcaseUCInput = {
      userId: "123",
      products: [productInput]
    };

    const result = await makePurchaseUC.execute(input);
    expect(result).toEqual(
      "Purchase created successfully! Total amount: R$24,00"
    );
    expect(purchaseGateway.makePurchase).toHaveBeenCalled();
  });
});

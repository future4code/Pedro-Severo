import express, { Request, Response } from "express";
import { CreateF4UserUC } from "../business/usecases/createF4UserUC";
import { F4UserDatabase } from "../data/f4User/f4UserDatabase";
import { BcryptService } from "../services/cryptography/bcryptService";
import { V4UuidGenerator } from "../services/idGenerator/v4UuidGenertor";
import { GetAllF4UsersUC } from "../business/usecases/getAllF4UsersUC";
import { GetUsersByTypeUC } from "../business/usecases/getUsersByTypeUC";
import { GetOrderedUsersUC } from "../business/usecases/getOrderedUsers";
import { GetPagintatedUsersByTypeUC } from "../business/usecases/getPaginatedUsersByType";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
  return (headers["auth"] as string) || "";
};

app.post("/getUsers", async (req: Request, res: Response) => {
  try {
    const getOrderedUsersUC = new GetOrderedUsersUC(new F4UserDatabase());
    const input = {
      orderBy: req.body.orderBy,
      orderType: req.body.orderType
    };
    const result = await getOrderedUsersUC.execute(input);
    res.status(200).send(result);
  } catch (err) {
    res.status(409).send({
      ...err,
      errorMessage: err.message
    });
  }
});

app.get("/getUsers", async (req: Request, res: Response) => {
  try {
    const getUsersByTypeUC = new GetUsersByTypeUC(new F4UserDatabase());
    const input = {
      type: req.query.type
    };
    const result = await getUsersByTypeUC.execute(input);
    res.status(200).send(result);
  } catch (err) {
    res.status(409).send({
      ...err,
      errorMessage: err.message
    });
  }
});

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const createF4UserUC = new CreateF4UserUC(
      new F4UserDatabase(),
      new BcryptService(),
      new V4UuidGenerator()
    );
    const result = await createF4UserUC.execute({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      type: req.body.type
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({
      ...err
    });
  }
});

app.post("/getPaginatedUsers", async (req: Request, res: Response) => {
  try {
    const getPaginatedUsersByTypeUC = new GetPagintatedUsersByTypeUC(
      new F4UserDatabase()
    );
    const input = {
      type: req.body.type,
      page: req.body.page
    };
    const result = await getPaginatedUsersByTypeUC.execute(input);
    res.status(200).send(result);
  } catch (err) {
    res.status(431).send({
      ...err,
      errorMessage: err.message
    });
  }
});

app.get("/getAllUsers", async (req: Request, res: Response) => {
  try {
    const createF4UserUC = new GetAllF4UsersUC(new F4UserDatabase());
    const result = await createF4UserUC.execute();
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({
      ...err
    });
  }
});

export default app;

import express, {Request, Response} from 'express'

import { LoginUC } from "../business/usecases/auth/login";
import { GetLoggedUserInformationUC } from "../business/usecases/users/getLoggedUserInformation";
import { JwtAuthService } from "../services/auth/jwtAuthService";
import { UserDatabase } from "../data/userDatabase";
import { BcryptService } from "../services/cryptography/bcryptService";
import { CreateUserUC } from "../business/usecases/users/createUser";
import { ChangeUserPasswordUC } from "../business/usecases/auth/changeUserPassword";
import { GetAllUsersUC } from "../business/usecases/users/getAllUsers";
import {V4IdGenerator} from '../services/auth/v4IdGenerator'
import {CreateRecipeInput, CreateRecipeUseCase} from '../business/usecases/recipes/createRecipe'
import {RecipeDatabase} from '../data/recipeDatabase'
import {FollowUserInput, FollowUserUseCase} from '../business/usecases/users/followUser'
import {GetFeedInput, GetFeedUseCase} from '../business/usecases/feed/getFeed'
import {FeedDatabase} from '../data/feedDatabase'

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
  return (headers["auth"] as string) || "";
};

app.post("/login", async (req: Request, res: Response) => {
  try {
    const uc = new LoginUC(
      new JwtAuthService(),
      new UserDatabase(),
      new BcryptService()
    );
    const result = await uc.execute(req.body.email, req.body.password);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.get("/getMyInformation", async (req: Request, res: Response) => {
  try {
    const uc = new GetLoggedUserInformationUC(
      new JwtAuthService(),
      new UserDatabase()
    );
    const result = await uc.execute(getTokenFromHeaders(req.headers));
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const createUserUC = new CreateUserUC(
      new UserDatabase(),
      new BcryptService(),
      new V4IdGenerator()
    );
    const result = await createUserUC.execute({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      password: req.body.password
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.post("/changePassword", async (req: Request, res: Response) => {
  try {
    const changePasswordUC = new ChangeUserPasswordUC(
      new JwtAuthService(),
      new UserDatabase(),
      new BcryptService()
    );
    const result = await changePasswordUC.execute({
      token: getTokenFromHeaders(req.headers),
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.get("/getAllUsers", async (req: Request, res: Response) => {
  try {
    const getAllUsersUC = new GetAllUsersUC(new UserDatabase());
    const result = await getAllUsersUC.execute();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

function authenticate(req: Request) {
  const authService = new JwtAuthService()
  return authService.getUserIdFromToken(getTokenFromHeaders(req.headers))
}

app.post("/recipes", async (req: Request, res: Response) => {
  try {
    const userId = authenticate(req)

    const useCase = new CreateRecipeUseCase(
      new UserDatabase(),
      new RecipeDatabase()
    )

    const input: CreateRecipeInput = {
      description: req.body.description,
      title: req.body.title,
      userId
    }

    const result = await useCase.execute(input)
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.post("/users/follow", async (req: Request, res: Response) => {
  try {
    const userId = authenticate(req)

    const useCase = new FollowUserUseCase(
      new UserDatabase()
    )

    const input: FollowUserInput = {
      followerId: userId,
      followedId: req.body.userToFollow
    }

    await useCase.execute(input)
    res.status(200).send({
      message: "Usuários seguido com sucesso"
    });
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

app.get("/feed", async (req: Request, res: Response) => {
  try {
    const userId = authenticate(req)

    const useCase = new GetFeedUseCase(
      new FeedDatabase()
    )

    const input: GetFeedInput = {
      userId
    }

    const result = await useCase.execute(input)
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      errorMessage: err.message
    });
  }
});

export default app

import {CreateRecipeUseCase} from './createRecipe'
import {UserGateway} from '../../gateways/user/userGateway'
import {RecipeGateway} from '../../gateways/recipes/recipeGateway'
import {Recipe} from '../../entities/Recipe'



describe('Tests createRecipe useCase', () => {
  it('Should create a recipe', async () => {
    const userGateway: UserGateway = {
      createUser: jest.fn(),
      getAllUsers: jest.fn(),
      getUserByEmail: jest.fn(),
      getUserById:jest.fn(),
      updatePassword: jest.fn(),
      verifyUserExists: jest.fn().mockReturnValue(true)
    }

    const input = {description: "Teste descricao", title: "Teste titulo", userId: "1"}

    const recipeGateway: RecipeGateway = {
      createRecipe: jest.fn().mockReturnValue(new Recipe(input.title, input.description, input.userId))
    }

    const usecase = new CreateRecipeUseCase(userGateway, recipeGateway)

    const response = await usecase.execute(input)

    expect(response.userId).toBe('1')
    expect(response.title).toBe('Teste titulo')
  })

  it('Should throw error if input is incomplete', async () => {
    const userGateway: UserGateway = {
      createUser: jest.fn(),
      getAllUsers: jest.fn(),
      getUserByEmail: jest.fn(),
      getUserById: jest.fn(),
      updatePassword: jest.fn(),
      verifyUserExists: jest.fn().mockReturnValue(true)
    }

    const input = {description: "Teste descricao", title: "", userId: "1"}

    const recipeGateway: RecipeGateway = {
      createRecipe: jest.fn().mockReturnValue(new Recipe(input.title, input.description, input.userId))
    }

    const usecase = new CreateRecipeUseCase(userGateway, recipeGateway)

    await expect(usecase.execute(input)).rejects.toThrowError('Alguma informação faltando')
  })
})

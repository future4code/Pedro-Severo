"use strict";
// // PARÂMETROS PADRÃO
// class User {}
// function getUserByType(type: string = "NORMAL"): User {
//   // Verifica se o tipo é indefinido
//   if (type === undefined) {
//   }
//   return new User();
// }
// getUserByType("ADMIN");
// getUserByType();
// // USANDO CLASSES AO INVES DE ARGUMENTOS
// enum ThumbnailSize {
//   BIG = 100,
//   SMALL = 0,
//   MEDIUM = 10
// }
// class ThumbnailGenerationConfig {
//   constructor(
//     private file?: string,
//     size: ThumbnailSize = ThumbnailSize.BIG,
//     time?: number,
//     quantity?: number
//   ) {}
// }
// function generateThumbnail(config: ThumbnailGenerationConfig) {}
// generateThumbnail(new ThumbnailGenerationConfig("url-file"));
// // ENCADEAMENTO
// class Drink {
//   private name: string;
//   private price: number;
//   public setName(name: string): Drink {
//     this.name = name;
//     return this;
//   }
//   public setPrice(price: number): Drink {
//     this.price = price;
//     return this;
//   }
// }
// const lemonDrink = new Drink();
// lemonDrink.setName("Caipirnha").setPrice(8);
// // ERROS
// abstract class CustomError extends Error {
//   public code: number;
//   constructor(message: string, code: number) {
//     super(message);
//     this.code = code;
//   }
// }
// class UserAlreadyExistsError extends CustomError {
//   constructor() {
//     super("User already exists", 402);
//   }
// }
// throw new UserAlreadyExistsError();

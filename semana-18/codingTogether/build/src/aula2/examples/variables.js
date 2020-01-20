"use strict";
// const user = {
//   name: "Golias",
//   age: 23
// };
// // EVITAR
// let aux;
// let a, b, c;
// const allProductsSoldYesterday = [
//   {
//     name: "Café",
//     quantity: 500
//   },
//   {
//     name: "Chá",
//     quantity: 100
//   }
// ];
// // EVITAR
// const allProdSoldYest = [
//   {
//     name: "Café",
//     qtt: 500
//   },
//   {
//     name: "Chá",
//     qtt: 100
//   }
// ];
// let isActive: boolean;
// let countryName: string = "Brazil";
// let totalAmount: number = 10.5;
// // EVITAR
// let booleanIsActive;
// let sCountryName = "Brazil";
// let numTotalAmount = 10.5;
// // let products = [];
// // EVITAR
// let products = [];
// let clothes = [];
// let goods = [];
// // const car = {
// //   name: "fusca",
// //   price: 100,
// //   color: "blue"
// // };
// // EVITAR
// const car = {
//   carName: "fusca",
//   carPrice: 100,
//   carColor: "blue"
// };
// const doRequest = (a: string) => {};
// const value = 10;
// const API_KEY: string = "AJKSONMLZKKCX";
// doRequest(API_KEY);
// const INTEREST: number = 0.15;
// // const finalValue = 100 * INTEREST;
// // EVITAR
// doRequest("AJKSONMLZKKCX");
// const finalValue = 100 * 0.15;
// class PostCreator {
//   public create(): void {}
// }
// //EVITAR
// class CreatePost {
//   public execute(): void {}
// }
// // function createUser(): void {
// //   // Verifica se o usuário existe e cria-o
// //   // caso não exista
// // }
// function verifyIfUserExists(): boolean {
//   return false;
// }
// if (!verifyIfUserExists()) {
//   // createUser();
// }
// //EVITAR
// function verifyIfUserExistsAndCreate() {
//   // Verifica se o usuário existe e cria-o
//   // caso não exista
// }
// // function getUsersByType(type: string = "ADMIN") {
// //   // Pega todos os usuários pelo tipo
// // }
// // EVITAR
// function getUsersByType(type: string) {
//   const userType = type || "ADMIN";
//   // Pega todos os usuários pelo tipo
// }
// // EVITAR
// function createUser(name: string, age: number, type: string, gender: string) {}
// interface User {
//   name: string;
//   age: number;
//   type: string;
//   gender: string;
//   isActive: boolean;
// }
// // function createUser(user: User) {}
// // function createPost(lastId: number) {
// //   const newId = lastId + 1;
// //   // Usamos o parâmetro "lastId"
// //   // para determinar o novo id
// //   // que é sequencial
// // }
// // EVITAR
// let lastId: number;
// function createPost() {
//   const newId = lastId + 1;
//   lastId++;
// }
// // function activeUser(user: User): User {
// //   const newUser = {
// //     ...user,
// //     isActive: true
// //   };
// //   return newUser;
// // }
// //EVITAR
// function activeUser(user: User): void {
//   user.isActive = true;
// }
// //EVITAR
// class Product {
//   private name: string;
//   private price: number;
//   public setName(newName: string): void {
//     this.name = newName;
//   }
//   public setPrice(newPrice: number): void {
//     this.price = newPrice;
//   }
// }
// const pencil = new Product();
// pencil.setName("Lápis");
// pencil.setPrice(1.0);
// // class Product {
// //   private name: string;
// //   private price: number;
// //   public setName(newName: string): Product {
// //     this.name = newName;
// //     return this;
// //   }
// //   public setPrice(newPrice: number): Product {
// //     this.price = newPrice;
// //     return this;
// //   }
// // }
// //EVITAR
// /**
//  * Diário de bordo
//  *
//  * 25/08/2020 - Terminei de pegar todos os números
//  *
//  */
// // const luckyNumbers = [];
// // const luckyNumbersQuantity = luckyNumbers.length;
// // // Essa linha vê o tamanho do array
// // for (let i = 0; i < luckyNumbersQuantity; i++) {
// //   // Essa linha percorre cada elemento do array
// //   console.log(i);
// //   // Aqui, imprimimos no console
// // }
// // Esse trecho pega todos os números da sorte
// // e os imprime no console
// const luckyNumbers = [];
// const luckyNumbersQuantity = luckyNumbers.length;
// for (let i = 0; i < luckyNumbersQuantity; i++) {
//   console.log(i);
// }
// // ToDo: Imprimir os números com cores
// abstract class CustomError extends Error {
//   public abstract code: number;
//   constructor(message: string) {
//     super(message);
//   }
// }
// class InvalidUser extends Error {
//   public code: number = 405;
// }
// class InvalidEmail extends Error {
//   public code: number = 408;
// }
// class PermissionNotGranted extends Error {
//   public code: number = 430;
// }
// const performRequest = () => {};
// const logError = (err: Error) => {};
// // const main = async () => {
// //   try {
// //     await performRequest();
// //   } catch (err) {
// //     logError(err);
// //   }
// // };
// //EVITAR
// const main = async () => {
//   try {
//     await performRequest();
//   } catch (err) {
//     console.log(err);
//   }
// };
// if (!name) {
//   throw new Error("Please, provide a name to create a user");
// }
// //EVITAR
// if (!name) {
//   throw new Error("Invalid name");
// }


import * as cartService from "./services/cart.js";
import creatItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee cart!");

const item1 = await creatItem("hotwheels ferrari", 20.99, 1);
const item2 = await creatItem("hotwheel lamborghini", 39.99, 3);
const item3 = await creatItem("Mochila Assault", 299.99 , 1);
const item4 = await creatItem("Trijicon ACOG", 326.25 , 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myWhishList, item3)
await cartService.addItem(myWhishList, item4)

await cartService.removeItem1(myCart, item2);
await cartService.removeItem1(myCart, item2);

//await cartService.removeItem(myCart, 2)

console.log("\n Shopee Cart List: ")
await cartService.displayCart(myCart);

console.log("\n Shopee cart TOTAL IS:");

await cartService.calculeteTotal(myCart);

console.log("\n Shopee Whish List: ")
await cartService.displayCart(myWhishList);

await cartService.deletItem(myCart, item2.name);

console.log("\n Shopee Whish List TOTAL IS:");

await cartService.calculeteTotal(myWhishList);

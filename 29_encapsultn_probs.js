// class Cart{
//     #items
//     constructor(prod_name){
//         this.prod_name= prod_name;
//         // this.prod_category= prod.category;
//         // this.MRP = MRP;
//         this.#items=[];
//     }
//     get items(){
//         return this.#items;
//     }
//     set items(newItems){
//         // this.#items= newItems;
//         // newItems.push(this.prod_name)
//         this.#items.push(newItems)
//         console.log(`Items in Cart : ${this.#items.join(",")}`)
//     }
// }
// const cart= new Cart ("Mens Wear");
// cart.items= "Shirt";
// cart.items= "Shoes";
// console.log(cart.items);

//level 2.1
class ShoppingCart {
  #items;
  //private field to store cart items
  constructor(prod_id, prod_name, prod_category) {
    this.prod_id = prod_id;
    this.prod_name = prod_name;
    this.prod_category = prod_category;
    this.#items = [];
  }
  //getters to read items
  get addItems() {
    return this.#items;
  }
  //validation
  set addItems(newItems) {
    if (this.isValid(newItems)) {
      this.#items.push(newItems);
      console.log(`${this.#items.join(",")}`);
    }
  }
  isValid(prod) {
    //prod->placeholder
    return typeof prod === "string" && prod.trim().length > 0;
  }
  get removeItems() {
    return this.#items;
  }
  set removeItems(newItems) {
    //if newItems mein pushed items items [] ke andar milta hai toh remove ho sakta hai
    // for(newItems in this.#items){
    //     return newItems;
    // }
    //this is only returning products from items array not removing it
    const prev_items = this.#items.length;
    this.#items = this.#items.filter((item) => item !== newItems);
    if (this.#items.length < prev_items) {
      console.log(`${newItems}`);
    } else {
      console.log(`Item not found: ${newItems}`);
    }
  }
}
const products = new ShoppingCart(
  12234,
  "Bluetooth Wireless Earphone",
  "Electronics & Gadgets"
);
// console.log(products.addItems = ["Xiaomi Mobile Phone"]);

// console.log(products.addItems= ["Electeric Pan"]);
products.addItems = "Xiaomi Mobile Phone";
products.addItems = "Electeric Oven";
console.log(`Items within Cart : `, products.addItems);
products.removeItems = "Electeric Oven";
console.log(`Items wihtin cart:`,products.removeItems);

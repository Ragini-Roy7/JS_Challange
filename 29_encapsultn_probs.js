class Cart{
    #items
    constructor(prod_name){
        this.prod_name= prod_name;
        // this.prod_category= prod.category;
        // this.MRP = MRP;
        this.#items=[];
    }
    get items(){
        return this.#items;
    }
    set items(newItems){
        // this.#items= newItems;
        // newItems.push(this.prod_name)
        this.#items.push(newItems)
        console.log(`Items in Cart : ${this.#items.join(",")}`)
    }
}
const cart= new Cart ("Mens Wear");
cart.items= "Shirt";
cart.items= "Shoes";
console.log(cart.items);
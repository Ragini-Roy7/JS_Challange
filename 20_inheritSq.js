class Rectangle{
    constructor(w,h){
        this.w=w;
        this.h=h;
    }
}
Rectangle.prototype.area = function(){
    //before es6
    return this.w*this.h;
}
class Square extends Rectangle{
    constructor(side){
        super(side,side)
    }
}
let rect= new Rectangle (3,5)
console.log(rect.area());
let sq= new Square(5,5);
console.log(sq.area());
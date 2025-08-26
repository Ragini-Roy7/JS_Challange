
// function calcrectangle(a,b){
// const area= a.length*b.width;
// const perimeter= 2*a.length+b.width;

// return{
//     area:area,
//     perimeter:perimeter
// };
// }
// const rectangle= {length:22,width:9};
// const result = calcrectangle(rectangle);
// console.log(result.area)
// console.log(result.perimeter)

// function Rectangle(l,b){
//     this.l=l;
//     this.b=b;
//     this.perimeter= 2*(l+b);
//     this.area=this.l*this.b;
// }
// const rec= new Rectangle(5,2); //obj instantied 
// // console.log(rec.l);
// // console.log(rec.b);
// console.log(rec.perimeter);
// console.log(rec.area);


function Rectangle(a, b) {
   this.a=a;
   this.b=b;
   this.perimeter= 2*(a+b);
   this.area=this.a*this.b;
    
}


function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(5, 4);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}

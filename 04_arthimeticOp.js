
function getArea(length,width){
    let area;
    //perimeter of rect 2*(l+b)
    area= 2*(length+width);
    return parseFloat(area);
}
console.log(getArea(3,4.5));

function getPerimeter(length,width){
    let perimeter;
    perimeter= length*width;
    return parseFloat(perimeter)
}
console.log(getPerimeter(3,4.5));
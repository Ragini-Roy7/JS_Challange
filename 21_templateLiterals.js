// s1 = (P-math.sqrt(p*p - 16*a))
// s2 = (P+ math.sqrt(p*p-16*))
function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];
    
    let root = Math.sqrt(perimeter * perimeter - 16 * area);
    let s1 = (perimeter - root) / 4;
    let s2 = (perimeter + root) / 4;
    
    return [s1, s2];
}
function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}

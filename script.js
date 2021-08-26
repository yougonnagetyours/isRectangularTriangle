


function isRectangularTriangle(x1, x2, x3) {
  
  const nrs = [x1, x2, x3];
 
  const minimum = Math.min(...nrs);

  const nrs2 = nrs.filter(word => word !== minimum);

  const minimum2 = Math.min(...nrs2);

  console.log(minimum)
  console.log(minimum2)

  minimum
  //Math.pow(liczba1, liczba2)
}

isRectangularTriangle(8,7,6);

/*const cond1 = isRectangularTriangle(3, 4, 5);
const cond2 = isRectangularTriangle(4, 3, 5);
// cond1 i cond2 to true

const cond3 = isRectangularTriangle(4, 3, 2);
const cond4 = isRectangularTriangle(4, 4, 4);
// cond3 i cond4 to false*/





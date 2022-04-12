console.log(typeof "test");

arr = [1, 2, 3, "a", "b"];

console.log(arr);

for (let i of arr) {
  console.log(i);
}

var myHonda = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2,
  },
};

console.log(myHonda);

const int = 10;
const str = "15";
console.log(Number(str) + int);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(Math.ceil(getRandomArbitrary(100000, 999999)));

// for (const i in [...Array(10).keys()]) {
//   r = Math.ceil(getRandomArbitrary(100000, 999999));
//   console.log(i + " => " + r);
// }

let count = 0;
const int1 = setInterval(() => {
  if (count === 10) {
    clearInterval(int);
  } else {
    console.log(
      `${++count} => ${Math.ceil(getRandomArbitrary(100000, 999999))}`
    );
  }
}, 500);

let arrNum = [1, 2, 3, 4];
console.log(arrNum.pop());
console.log(arrNum.pop());
console.log(arrNum.pop());
console.log(arrNum.pop());


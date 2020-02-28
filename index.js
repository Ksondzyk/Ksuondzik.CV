//1
function getMin(arr) {
  const res = Math.min(...arr);
  return res;
}
console.log(getMin([2, 4, 5, 7, 9, 4, 1, 16]));
//2

let arr1 = [2, 4, 5, 7, 9, 4, 1, 16];

const res1 = arr1.filter(item => item % 2 === 0);

console.log(res1);
//3
const arr3 = [
  { name: "Jonny Walker", birthDate: "1995-12-17" },
  { name: "Andrew", birthDate: "2001-10-29" },
  { name: "Viktor", birthDate: "1998-11-09" }
].filter(item => item.name === "Andrew");
console.log(arr3);

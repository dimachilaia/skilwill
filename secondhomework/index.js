// 11
const array = [
  {
    name: "Temo",
    age: 25,
  },
  {
    name: "Lasha",
    age: 21,
  },
  {
    name: "Ana",
    age: 28,
  },
];

const FirstFunc = (param)=>{
  const newArray = param.filter((item)=>item.age < 22).map((item)=>item.name)
  console.log(newArray)
}
FirstFunc(array)

// 3

// const ThirdFunction = () => {
//   while (true) {
//     const FirstPlayerNumb = Math.trunc(Math.random() * 6) + 1;
//     const SecondPlayerNumb = Math.trunc(Math.random() * 6) + 1;
//     console.log(
//       "First Player Number is" + ` ${FirstPlayerNumb}`,
//       "And Second Player Number is" + ` ${ SecondPlayerNumb}`
//     );
//     if (FirstPlayerNumb === 3) {
//       console.log("A is Winner!");
//       console.log(FirstPlayerNumb);
//     } else if (SecondPlayerNumb === 3) {
//       console.log("B is winner!");
//       console.log(SecondPlayerNumb);
//     } else {
//       console.log("Draw!");
//     }
//     break;
//   }
// };

// ThirdFunction();

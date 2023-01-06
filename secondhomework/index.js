// 11
const array = [
  {
    name: "dato",
    age: 225,
  },
  {
    name: "Lasha",
    age: 22,
  },
  {
    name: "Ana",
    age: 22,
  },
];

const FirstFunc = (param) => {
  const newName = param.reduce((acc, curr) =>
    curr.age < acc.age ? curr.name : acc
  );
  console.log(newName);
};
FirstFunc(array);

//2

const info = {
  name: "Dima",
  lastName: "Tchilaia",
  age: 25,
  about: "Senior Full Stack Developer",
};

const secondInfo = {
  ...info,
};
console.log(secondInfo);

// 3
const ThirdFunction = () => {
  while (true) {
    const FirstPlayerNumb = Math.trunc(Math.random() * 6) + 1;
    const SecondPlayerNumb = Math.trunc(Math.random() * 6) + 1;
    console.log(
      "First Player Number is" + ` ${FirstPlayerNumb}`,
      "And Second Player Number is" + ` ${SecondPlayerNumb}`
    );
    if (FirstPlayerNumb === 3) {
      console.log("A is Winner!");
      console.log(FirstPlayerNumb);
    } else if (SecondPlayerNumb === 3) {
      console.log("B is winner!");
      console.log(SecondPlayerNumb);
    } else {
      console.log("Draw!");
    }
    break;
  }
};

ThirdFunction();

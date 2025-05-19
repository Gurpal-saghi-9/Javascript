const code = ["CPP", "C", "Python", "Java", "JavaScript"];

code.forEach(function (element) {
  // console.log(element);
});

code.forEach((element) => {
  // console.log(element);
});

// code.push("Flutter")

function printMe(item) {
  console.log(item);
}

// code.forEach(printMe)

code.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

const intr = [
  {
    langName: "JavaScript",
    langFileName: ".js",
  },
  {
    langName: "Python",
    langFileName: ".py",
  },
  {
    langName: "Java",
    langFileName: ".java",
  },
];

intr.forEach((item) => {
  console.log(item.langName, ":", item.langFileName);
});

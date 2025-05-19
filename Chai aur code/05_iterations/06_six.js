const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  // console.log(item);
  return item; // for reach cant return any value
});

// console.log(values); // undefined because for each can't return any value

const series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newSeries1 = series.filter((num) => num > 5);
// console.log(newSeries1);

const newSeries2 = series.filter((num) => {
  return num > 5;
});
// console.log(newSeries2);

const newSeries3 = [];
series.forEach((num) => {
  if (num > 5) {
    newSeries3.push(num);
  }
});
// console.log(newSeries3);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 2000, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userbooks = books.filter((bk) => bk.genre === "Fiction");

const userBooks = books.filter((bk) => {
  return bk.genre === "History" && bk.publish >= 2000
})

console.log(userBooks);

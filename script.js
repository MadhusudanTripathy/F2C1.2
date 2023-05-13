/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((e)=>{
    console.log(e);
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element)=>{
        console.log(element);
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr= arr.filter((e)=>{
    return e.marks>50
  })
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let mrr = [
    { id: 5, name: "MST", age: "19", marks: 62 },
    { id: 6, name: "GST", age: "21", marks: 74 },
    { id: 7, name: "LST", age: "18", marks: 37 },
  ];
  arr=arr.concat(mrr);
  console.log(arr);
}

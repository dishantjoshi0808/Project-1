
import React from "react";

const Array = () =>{
    //1] Find area of circle,rectangle & triangle using arrow function....

    // i)Circle---

   const Circle = (pi = 3.14, r = 20) => {
     return pi * r * 2;
  };

   // ii)Rectangle---

   const rectangle = (l = 100, w = 100) => l * w;


     // iii)Triangle---

  const Triangle = (l=25, b=85, h=35) => {
    return l * b * h;
  };

 
 
  // 2] let a = [1,2,3,4,5] find square & cube of array element.

    //i)find square---- 

  let Num = [1, 2, 3, 4, 5];
  let Square = Num.map((number) => {
    return number * number;
  });

   //ii Find cubes

  let Cube = Num.map((number) => {
    return number * number * number;
  });


  // 3] let b = [11,22,33,44,55] how to display records?

  let a = [11, 22, 33, 44, 55];
  let number = a;
  a.forEach((number) => {
    console.log(number);  
  });

  // 4] find 44 element is include in array or not? if element is found return "No is found" else "No is not found" print message.

  let array = [11, 22, 33, 44, 55];

  // Number to search for
  let Find = 44;
  if (array.includes(Find)) {
    console.log("Number is found");
  } else {
    console.log("Number is not found");
  }

  // 5] let D = [10,20,30,40,50] find sum of array elements.

  let D = [10, 20, 30, 40, 50];
  const sum = D.reduce((a, b) => a + b);

  // 6] let arr = [11,22,33,44,55] find even & odd elements.

  let arr = [11, 22, 33, 44, 55];
  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  // 7] Find year is leap year or not?

  function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  const year = 2024;
  if (LeapYear(year)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }

  // 8] Merge above two array a & arr.

  let num = [1, 3, 5, 7, 9];
  let arrays = [2, 4, 6, 8, 10];
  let Merge = [...num, ...arrays];

  //9] create student object & display students' information.
  const student = [
    {
      Roll_No: 101,
      Name: "Dishant Joshi",
      Age: "22",   
    },
  ];
 
  return (
  <>
      <div>
        <h4>Q - 1</h4>
        <h5>Area of Circle is {Circle()} </h5>
        <h5>Area of Rectangle is {rectangle()} </h5>
        <h5>Area of Triangle is {Triangle()} </h5>
      </div><hr /><hr />


      <div>
      <h4>Q - 2</h4>
        <h5>Square is {Square + " "}</h5>
        <h5>Cube is {Cube + " "}</h5>
      </div><hr /><hr />


      <div>
      <h4>Q - 3</h4>
        <h5>Record is {number + " "}</h5>
      </div><hr /><hr />

  
      <div>
      <h4>Q - 4</h4>
        <h5>Find the Number in array {Find}</h5>
      </div><hr /><hr />

      
      <div>
      <h4>Q - 5</h4>
        <h5>Sum of Array Elements {sum}</h5>
      </div><hr /><hr />

    
      <div>
      <h4>Q - 6</h4>
        <h5>Even Number is {even + " "}</h5>
        <h5>Odd Number is {odd + " "}</h5>
      </div><hr /><hr />

    
        <div>
        <h4>Q -  7</h4>
            <h5>Leap Year or Not {LeapYear()}</h5>
        </div><hr /><hr />
     
    
      <div>
      <h4>Q - 8</h4>
        <h5>Merge Number is {Merge + " "}</h5>
      </div><hr /><hr />

     
      <div>
      <h4>Q - 9</h4>
      <h2> Student Information is</h2>
      {student.map((i) => {
        return (
          <div>
            <h5>Roll_No : {i.Roll_No}</h5>
            <h5>Name : {i.Name}</h5>
            <h5>Age : {i.Age}</h5>
           
          </div>
        );
      })}
    </div>
     
    </>
  );
}
export default Array;



import React, { useState } from "react";
import "./Hooks.css";
export const Hooks = () => {
  let [color, setColor] = useState("black");
  return (
    <div>
      <p>color is {color}</p>
      <button onClick={() => setColor("black")}>black</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("white")}>white</button>
    </div>
  );
};

export const Car = () => {
  const [brand, setBrand] = useState("ford");
  const [color, setColor] = useState("red");
  const [year, setYear] = useState("2024");
  const [model, setModal] = useState("twoSeater");
  return (
    <>
      <p>
        Car Brand is {brand} and color is {color} , manufacture year is {year}{" "}
        and modal is {model}
      </p>
    </>
  );
};
export const Name = () => {
  const [nameChnage, setNameChange] = useState("Bhagyashree");
  const namechange = () => {
    nameChnage === "Bhagyashree"
      ? setNameChange("Yashvi")
      : setNameChange("Bhagyashree");

    // if (nameChnage === "Bhagyashree") setNameChange("Yashvi");
    // else setNameChange("Bhagyashree");
  };

  return (
    <>
      <h1>My betu name is {nameChnage} </h1>
      <button onClick={namechange}>Betu Another Name</button>
    </>
  );
};

export const ArrayName = () => {
  const namelist = [
    { neme: "Rahul", age: 25, degree: "B.Tech" },
    { neme: "Rohit", age: 24, degree: "b.com" },
  ];
  console.log(ArrayName);
  const [name, setName] = useState(namelist);
  return (
    <>
      <h1>Another Array component</h1>
      {namelist.map((curele) => {
        return (
          <h1>
            name:{curele.neme}, age: {curele.age}, degree: {curele.degree}{" "}
          </h1>
        );
      })}
    </>
  );
};
export const SpredObject = () => {
  const [myObjeect, setMyObject] = useState({
    Name: "Rahul",
    companyName: "Agrex",
    Age: 25,
  });
  const udatename = () => {
    return setMyObject({ ...myObjeect, Name: "Rohit" });
  };
  return (
    <>
      <div className="bodycontent">
        <h1 className="h1style">
          Name:{myObjeect.Name}, companyName:{myObjeect.companyName}, Age:
          {myObjeect.Age}
        </h1>
        <button className="btn" onClick={udatename}>
          Update
        </button>
      </div>
    </>
  );
};

export const CarDetails = () => {
  const [carDet, setCarDet] = useState({
    color: "blue",
    moddel: "Mustang",
    year: 1964,
  });
  const changecolor = () => {
    return setCarDet({ ...carDet, color: "red" });
  };
  return (
    <>
      <h1>Cars Details</h1>
      <p>It is a {carDet.color} Mustang from 1964</p>
      <button onClick={changecolor}>update</button>
    </>
  );
};
export const InputField = () => {
  const [value, setValue] = useState("Rahul");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h2>Input Field</h2>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {value}</p>
    </div>
  );
};
export const MyNum = () => {
  const arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("in below line we using map ");
  const newnummap = arrnum.map((props) => {
    return props + 20;
  });

  console.log(newnummap);
  console.log("in below line we using filter");
  const newarr = arrnum.filter((num) => num > 4);

  const books = [
    {
      title: "1",
      bookname: "maths",
      pages: 300,
      year: "1997",
    },
    {
      title: "2",
      bookname: "physics",
      pages: 350,
      year: "1787",
    },
    {
      title: "3",
      bookname: "programmiing",
      pages: 400,
      year: "2007",
    },
  ];
  console.log(books);

  const booklist = books.filter(
    (bk) => bk.pages === 400 // Use '===' for comparison
  );
  console.log(booklist);
  return (
    <>
      <h1>new arr </h1>
    </>
  );
};
// export const MyNum = () => {
//   const arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const newarr = arrnum.filter((num) => {
//     return num > 5; // Add 'return' statement here
//   });
//   console.log(newarr);
//   return (
//     <>
//       <h1>hello new arr </h1> {/* Corrected spelling of 'hello' */}
//     </>
//   );
// };

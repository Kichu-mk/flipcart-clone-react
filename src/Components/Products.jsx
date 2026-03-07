import React from "react";

import p10 from "../assets/Products/10.jpg";
import p11 from "../assets/Products/11.webp";
import p12 from "../assets/Products/12.webp";
import p13 from "../assets/Products/13.jpg";
import p14 from "../assets/Products/14.webp";
import p15 from "../assets/Products/15.jpg";
import p16 from "../assets/Products/16.webp";
import p17 from "../assets/Products/17.webp";
import p18 from "../assets/Products/18.webp";

const Products = ({ title }) => {
  let offerArr = [
    {
      id: 1,
      name: "Medium Tote Bag",
      price: "399",
      img: p10,
    },
    {
      id: 2,
      name: "Godrej 7 Kg ",
      price: "9,999",
      img: p11,
    },
    {
      id: 3,
      name: "Godrej 1 Ton AC",
      price: "28,990",
      img: p12,
    },
    {
      id: 4,
      name: "DOCTOR EXTRA SOFT",
      price: "398",
      img: p13,
    },
    {
      id: 5,
      name: "Sonata Watch",
      price: "749",
      img: p14,
    },
    {
      id: 6,
      name: "Fastrack Limitless Fs2 Pro",
      price: "3,800",
      img: p15,
    },
    {
      id: 7,
      name: "Presto Naphthalene Balls",
      price: "380",
      img: p16,
    },
    {
      id: 8,
      name: "Solimo 12-Inch Clock",
      price: "599",
      img: p17,
    },
    {
      id: 9,
      name: "FUNTEREST Wall Decor",
      price: "699",
      img: p18,
    },
  ];
  return (
    <div className="w-full h-full p-2.5">
      <h1 className="pl-5 pt-5 text-2xl font-semibold">{title || "NO title"} </h1>
      <div className="mt-2 w-[160px] h-[170px] flex items-center mt-5 p-5">
      {offerArr.map((obj) => {
        return (
            <div className="w-[200px] h-[350px] m-2 flex flex-col items-center justify-end rounded p-2">
                <div className="w-[130px] h-[200px] bg-white flex items-center justify-center">
                    <img src={obj.img} alt="" />
                </div>
                <h1 className="me-2">{obj.name}</h1>
                
            </div>
        );
      })}
      </div>
    </div>
  );
};

export default Products;

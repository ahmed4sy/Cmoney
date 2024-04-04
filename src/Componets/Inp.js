import { useState } from "react";
import "./../Styles/App.css";
let dxy = {
  USD: 1,
  SDG: 0.0017,
  EGP: 0.021,
  SAR: 0.27,
  OMR: 2.6,
};
export default function Inp({ opM }) {
  const [Inp_1, setInp_1] = useState("0");
  const [Inp_2, setInp_2] = useState("0");
  let opS = "SAR";
  function getVal(num, opt) {
    return num * dxy[opt];
  }
  function getVal2(num, opt) {
    return num / dxy[opt];
  }
  return (
    <>
      <div className="Input">
        <input
          type="number"
          value={Inp_1}
          onChange={(ele) => {
            setInp_1(ele.target.value);
            setInp_2(getVal(Number(ele.target.value), opS).toFixed(2));
          }}
        />
        <select value={"SAR"}>{opM}</select>
      </div>
      <div className="Input">
        <input
          type="number"
          value={Inp_2}
          onChange={(ele) => {
            setInp_2(ele.target.value);
            setInp_1(getVal2(Number(ele.target.value), opS).toFixed(2));
          }}
        />
        <select value={"USD"}>{opM}</select>
      </div>
    </>
  );
}
// function I2({ opM }) {

//   function ChangaNum(ele) {
//     setInp_(ele.target.value);
//   }
//   return (

//   );
// <div className="Input">
//          <input
//         type="number"
//          className="inp2"
//        />
//        <select>
//          <option>USD</option>
//        </select>
//      </div> */}

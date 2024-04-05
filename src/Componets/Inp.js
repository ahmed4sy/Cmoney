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
  const [Inp, setInp] = useState({ last: "0.00", next: "0.00" });
  const [Coin, setCoin] = useState("");
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
          value={Inp.last}
          onChange={(ele) => {
            setInp({
              last: ele.target.value,
              next: getVal(Number(ele.target.value), Coin).toFixed(2),
            });
          }}
        />
        <select
          value={Coin}
          onChange={(eve) => {
            setCoin(eve.target.value);
          }}
        >
          {opM}
        </select>
      </div>
      <div className="Input">
        <input
          type="number"
          value={Inp.next}
          onChange={(ele) => {
            setInp({
              next: ele.target.value,
              last: getVal2(Number(ele.target.value), Coin).toFixed(2),
            });
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

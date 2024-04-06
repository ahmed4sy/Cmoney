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
  const [Inp, setInp] = useState({ last: "0", next: "0" });
  const [Coin, setCoin] = useState({ last: "SDG", next: "USD" });

  function focusSel(params) {
    setInp({ last: "", next: "0" });
  }
  return (
    <>
      <div className="Input">
        <input
          type="number"
          value={Inp.last}
          onFocus={focusSel}
          onChange={(ele) => {
            setInp({
              last: ele.target.value,
              next: Ecl(Number(ele.target.value), Coin.last, Coin.next).toFixed(
                2
              ),
            });
          }}
        />
        <select
          value={Coin.last}
          onChange={(eve) => {
            setCoin({ next: Coin.next, last: eve.target.value });
            setInp({
              last: Inp.last,
              next: Ecl(Number(Inp.last), eve.target.value, Coin.next).toFixed(
                2
              ),
            });
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
              ...setInp,
              last: Ecl(ele.target.value, Coin.next, Coin.last).toFixed(2),
            });
          }}
        />
        <select
          value={Coin.next}
          onChange={(eve) => {
            setCoin({ last: Coin.last, next: eve.target.value });
            setInp({
              last: Inp.last,
              next: Ecl(Number(Inp.last), Coin.last, eve.target.value).toFixed(
                2
              ),
            });
          }}
        >
          {opM}
        </select>
      </div>
    </>
  );
}
function Ecl(num, opt, opt2) {
  return (dxy[opt] * num) / dxy[opt2];
}

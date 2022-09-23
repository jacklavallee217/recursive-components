import React, { useState } from "react";
import DropDown from "./DropDown";

export default function DropDownItem({ item, order, setOrder, clicks, setClicks, parent, setParent }) {
  const [checked, setChecked] = useState(/*props.selectAll*/ false);

  function removeItem(index) {
    const orderArray = order;
    orderArray.splice(orderArray.indexOf(index), 1);

    setOrder(orderArray);
  }

  return (
    <li>
      <input
        type="checkbox"
        value={item[0]}
        checked={checked}
        onClick={(evt) => {
          setChecked(evt.target.checked);

          if (!item[1].children) {
            console.log("parent", item[1].parent())
            setClicks(clicks + 1)
            if (order.includes(item[0])) {
              removeItem(item[0]);
            } else {
              setOrder((order) => [
                ...order,
                item[0]
              ]);
            }
          }
        }}
      />

      <label for={item[0]}>{item[0]}</label>

      {item[1].children && checked ? (
        <DropDown
          mockdata={item[1].children} order={order} setOrder={setOrder} clicks={clicks} setClicks={setClicks} parent={parent} setParent={setParent}/*selectAll={checked}*/
        ></DropDown>
      ) : null}
    </li>
  );
}

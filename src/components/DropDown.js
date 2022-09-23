import React, { useEffect, useState } from "react";
import DropDownItem from "./DropDownItem";

export default function DropDown({mockdata, order, setOrder, clicks, setClicks, parent, setParent}) {

  return (
    <ul>
      {Object.entries(mockdata).map((item) => {
        return <DropDownItem /*selectAll={props.selectAll}*/ item={item} order={order} setOrder={setOrder} clicks={clicks} setClicks={setClicks} parent={parent} setParent={setParent}/>;
      })}
    </ul>
  )
}

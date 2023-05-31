import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [iceCreamQuantity, setIceCreamQuantity] = useState(0);
  const dispatch = useDispatch();
  const numOfIceCreams = useSelector((state) => {
    return state.iceCream.numOfIceCreams;
  });
  return (
    <div>
      <h2>Number of Icecreams remaining in Store - {numOfIceCreams} </h2>
      <input
        name='orderIceCreamQuantity'
        placeholder='Ice Cream Quantity'
        value={iceCreamQuantity}
        onChange={(e) => {
          setIceCreamQuantity(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(ordered(iceCreamQuantity));
        }}
      >
        Order Icecream
      </button>
      <button
        onClick={() => {
          dispatch(restocked(iceCreamQuantity));
        }}
      >
        Restock Icecream
      </button>
    </div>
  );
};

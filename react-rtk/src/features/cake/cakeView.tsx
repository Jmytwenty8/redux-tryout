import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useState } from "react";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const [cakeQuantity, setCakeQuantity] = useState(0);
  const dispatch = useAppDispatch();
  const numOfCakes = useAppSelector((state) => {
    return state.cake.numOfCakes;
  });
  return (
    <div>
      <h2>Number of Cakes remaining in Store - {numOfCakes} </h2>
      <input
        name='orderCakeQuantity'
        placeholder='Cake Quantity'
        value={cakeQuantity}
        onChange={(e) => {
          setCakeQuantity(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(ordered(cakeQuantity));
        }}
      >
        Order Cake
      </button>
      <button
        onClick={() => {
          dispatch(restocked(cakeQuantity));
        }}
      >
        Restock Cake
      </button>
    </div>
  );
};

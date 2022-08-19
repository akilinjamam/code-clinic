import React from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../../../redux/actions";

const TextFieldComp = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value));
  };
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          label="Amount of Question"
          type="number"
        />
      </form>
    </div>
  );
};

export default TextFieldComp;

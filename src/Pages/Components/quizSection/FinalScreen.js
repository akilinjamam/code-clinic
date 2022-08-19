import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../../../redux/actions";

const FinalScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);
  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/settings");
  };
  return (
    <div>
      <h1>Final Score {score}</h1>
      <button onClick={handleBackToSettings}>Back To Settings</button>
    </div>
  );
};

export default FinalScreen;

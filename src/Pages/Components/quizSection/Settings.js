import React from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import SelectFields from "./SelectFields";
import TextFieldComp from "./TextFieldComp";

const Settings = () => {
  const navigate = useNavigate();
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  if (loading) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }
  if (error) {
    return <h2>Something went wrong</h2>;
  }
  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  };
  return (
    <div>
      <h2>Quiz App</h2>
      <form onSubmit={handleSubmit}>
        <SelectFields options={response.trivia_categories} label="Category" />
        <SelectFields options={difficultyOptions} label="Difficulty" />
        <SelectFields options={typeOptions} label="Type" />
        <TextFieldComp />
        <div>
          <button type="submit">Get Started</button>
        </div>
      </form>
    </div>
  );
};

export default Settings;

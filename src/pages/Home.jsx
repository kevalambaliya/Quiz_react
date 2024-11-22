import React, { useContext } from "react";
import { dataContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, isCorrect, correct } = useContext(dataContext);

  const checkAns = (index, ans) => {
    isCorrect(index, ans);
    console.log(index, ans);
    console.log(correct);
  };

  let navigate = useNavigate();
  const handleSubmit = () => {
    // Check if all questions have been answered
    if (correct.length < data.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    navigate("/Product");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ padding: "10px" }}>
        {data.map((ele, i) => (
          <div>
            <h3>
              {i + 1}:{ele.question}
            </h3>
            <div style={{ padding: "10px" }}>
              {ele.options.map((options) => (
                <button
                  onClick={() => checkAns(i, options)}
                  style={{
                    padding: "10px",
                    marginLeft: "10px",
                    width: "200px",
                    alignItems: "center",
                  }}
                >
                  {options}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;

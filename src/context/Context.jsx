  import React, { createContext, useState } from "react";

  export const dataContext = createContext();

  const Context = ({ children }) => {
    let [userData, setUserData] = useState();

    let [correct, setCorrect] = useState([]);

    let [score, setScore] = useState(0);

    const updateUserData = (user) => {
      setUserData(user);
    };

    const data = [
      {
        question: "What does 'this' refer to in JavaScript?",
        options: [
          "The global object",
          "The function that called it",
          "The current object",
          "None of the above",
        ],
        correct: "The current object",
      },
      {
        question:
          "Which method is used to convert a JSON string into a JavaScript object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.toObject()",
          "JSON.convert()",
        ],
        correct: "JSON.parse()",
      },
      {
        question: "What is the output of `console.log(typeof null)`?",
        options: ["'object'", "'null'", "'undefined'", "'number'"],
        correct: "'object'",
      },
      {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Django", "Ruby on Rails", "Flask"],
        correct: "React",
      },
      {
        question: "In React, what is the purpose of useState?",
        options: [
          "To manage local component state",
          "To fetch data from an API",
          "To handle side effects",
          "To optimize performance",
        ],
        correct: "To manage local component state",
      },
      {
        question: "What is the correct way to import React in a component?",
        options: [
          "import React from 'react'",
          "import { React } from 'react'",
          "import * as React from 'react'",
          "All of the above",
        ],
        correct: "import React from 'react'",
      },
      {
        question: "What does the `render` method do in React?",
        options: [
          "Renders the component to the DOM",
          "Handles state changes",
          "Fetches data from an API",
          "None of the above",
        ],
        correct: "Renders the component to the DOM",
      },
      {
        question: "How do you create a functional component in React?",
        options: [
          "function MyComponent() {}",
          "const MyComponent = () => {}",
          "class MyComponent extends React.Component {}",
          "Both A and B",
        ],
        correct: "Both A and B",
      },
      {
        question: "What is a key in React?",
        options: [
          "A unique identifier for elements in a list",
          "A property for styling components",
          "A method for optimizing performance",
          "None of the above",
        ],
        correct: "A unique identifier for elements in a list",
      },
      {
        question: "What is the purpose of `useEffect` in React?",
        options: [
          "To manage state",
          "To handle side effects in functional components",
          "To fetch data",
          "To create components",
        ],
        correct: "To handle side effects in functional components",
      },
      {
        question: "Which operator is used to spread an array in JavaScript?",
        options: ["[]", "{}", "...", "||"],
        correct: "...",
      },
      {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Character", "Number"],
        correct: "Character",
      },
      {
        question: "What is JSX?",
        options: [
          "A syntax extension for JavaScript",
          "A JavaScript library",
          "A type of data structure",
          "None of the above",
        ],
        correct: "A syntax extension for JavaScript",
      },
      {
        question: "What is the default export in a module?",
        options: [
          "Only one export from a module",
          "Multiple exports from a module",
          "Named exports only",
          "None of the above",
        ],
        correct: "Only one export from a module",
      },
      {
        question:
          "Which lifecycle method is called after a component is mounted?",
        options: [
          "componentWillMount",
          "componentDidMount",
          "componentWillUpdate",
          "componentDidUpdate",
        ],
        correct: "componentDidMount",
      },
      {
        question: "What does 'async' keyword do in JavaScript?",
        options: [
          "Makes a function synchronous",
          "Makes a function return a promise",
          "Pauses execution of a function",
          "None of the above",
        ],
        correct: "Makes a function return a promise",
      },
      {
        question: "Which hook is used to handle state in React?",
        options: ["useReducer", "useEffect", "useState", "useContext"],
        correct: "useState",
      },
      {
        question: "What is the purpose of props in React?",
        options: [
          "To pass data from parent to child components",
          "To manage state",
          "To create components",
          "To handle events",
        ],
        correct: "To pass data from parent to child components",
      },
    ];

    // const isCorrect = (index,ans)=>{
    //   if(data[index].correct == ans){
    //     setCorrect([
    //       ...correct,{
    //         question: data[index].question,
    //         correctans : data[index].correct,
    //         selectedans : ans,
    //         setCorrection : true,
    //       }
    //     ])
    //   }else{
    //     setCorrect([
    //       ...correct,{
    //         question: data[index].question,
    //         correctans : data[index].correct,
    //         selectedans : ans,
    //         setCorrection : false,
    //       }
    //     ])
    //   }
    // }

    const isCorrect = (index, ans) => {
      const isAnswerCorrect = data[index].correct === ans;

      setCorrect([
        ...correct,
        {
          question: data[index].question,
          correctans: data[index].correct,
          selectedans: ans,
          setCorrection: isAnswerCorrect,
        },
      ]);

      if (isAnswerCorrect) {
        setScore((prevScore) => prevScore + 1); // Increment score if correct
      }
    };

    return (
      <dataContext.Provider
        value={{ userData, updateUserData, data, isCorrect, correct, score }}
      >
        {children}
      </dataContext.Provider>
    );
  };

  export default Context;

  // const { userData, updateUserData } = useContext(dataContext);

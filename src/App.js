import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

const App = (props) => {
  const [questions, setQuestions] = useState(data);

  const toggleButtonHandler = (event) => {};

  return (
    <main>
      <div className="container">
        <h3>Q & A for login</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion
              title={question.title}
              info={question.info}
              key={question.id}
              onClick={toggleButtonHandler}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default App;

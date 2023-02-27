import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quizsmall">
        <form className="setup-form">
          <div className="form-control">
            <label htmlFor="amount">number of fetchQuestions</label>
            <input
              className="form-input"
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              value={quiz.category}
              onChange={handleChange}
              className="form-input"
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
              className="form-input"
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              can't generatev questions, please try different opsion
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn ">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;

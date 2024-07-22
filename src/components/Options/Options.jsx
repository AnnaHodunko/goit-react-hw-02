import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={s.wrapper}>
      <button
        onClick={() => updateFeedback("good")}
        className={`${s.btn} ${s.btnGood}`}
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        className={`${s.btn} ${s.btnNeutral}`}
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback("bad")}
        className={`${s.btn} ${s.btnBad}`}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={`${s.btn} ${s.btnReset}`}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

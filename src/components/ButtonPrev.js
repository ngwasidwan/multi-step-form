function ButtonPrev({ step, dispatch }) {
  const minStep = 0;
  return (
    <button
      className="prev-btn"
      onClick={() =>
        dispatch({ type: "step", payload: step < minStep ? step : step - 1 })
      }
    >
      Go back
    </button>
  );
}

export default ButtonPrev;

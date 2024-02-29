function ConfirmBtn({ dispatch }) {
  return (
    <button
      className="next-btn"
      onClick={() => dispatch({ type: "completeSubscription", payload: true })}
    >
      Confirm
    </button>
  );
}

export default ConfirmBtn;

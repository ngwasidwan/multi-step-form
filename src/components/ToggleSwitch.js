function ToggleSwitch({ dispatch, yearlyPlan }) {
  const container = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    position: "absolute",
    bottom: "100px",
    right: "200px",
  };
  const toggleBox = {
    boxSizing: "border-box",
    margin: "20px",
    width: "40px",
    height: "20px",
    backgroundColor: "hsl(213, 96%, 18%)",
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    transition: "background-color 0.5s",
  };

  const toggleSwitch = {
    width: "16px",
    height: "16px",
    backgroundColor: "#fff",
    display: "inline-block",
    borderRadius: "20px",
    marginLeft: "2px",
    transition: "transform  0.5s ",
    transform: yearlyPlan ? "translateX(20px)" : "translateX(0)",
  };

  return (
    <div style={container}>
      <p>Monthly</p>
      <div
        style={toggleBox}
        onClick={() => dispatch({ type: "selectPlan", payload: !yearlyPlan })}
      >
        <span style={toggleSwitch}></span>
      </div>
      <p>yearly</p>{" "}
    </div>
  );
}

export default ToggleSwitch;

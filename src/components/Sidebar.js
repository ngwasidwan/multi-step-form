import backgroundImage from "./images/bg-sidebar-desktop.svg";

const arr = ["Your info", "select plan", "add-ons", "summary"];

function Sidebar({ step, dispatch }) {
  return (
    <div className="sidebar-container">
      <img src={backgroundImage} alt="background" />

      <div className="sidebar">
        {arr.map((el, i) => (
          <div key={i} className="side-button-container">
            <button
              className={`side-button  ${step === i && "active"}`}
              // onClick={() => dispatch({ type: "step", payload: i })}
            >
              {1 + i}
            </button>

            <div className="step-container">
              <span>step {i + 1}</span>
              <p className="step">{el}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

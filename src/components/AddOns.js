import { useState } from "react";

const addOnsData = [
  {
    type: "Online service",
    text: "Access to multiplayer games",
    amount: 1,
    checked: false,
  },
  {
    type: "Large storage",
    text: "Extra 1TB of cloud storage",
    amount: 2,
    checked: false,
  },
  {
    type: "Customizable profile",
    text: "Custom theme on your profile",
    amount: 2,
    checked: false,
  },
];

const PLAN_PER_YEAR = 10;

function AddOns({ step, yearlyPlan, dispatch }) {
  const addStats = step === 2 ? "active-section" : "inactive-section";

  return (
    <div className={`${addStats}`}>
      <AddOnsHeading />
      <AddOnsText />

      {addOnsData.map((data, i) => (
        <AddOnsType
          key={i}
          data={data}
          yearlyPlan={yearlyPlan}
          index={i}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

function AddOnsHeading() {
  return <h1 className="title">Pick add-ons</h1>;
}

function AddOnsText() {
  return <p className="add-ons">Add-ons help embrace your gaming experience</p>;
}

function AddOnsType({ data, yearlyPlan, index, dispatch }) {
  const [activeOns, setActiveOns] = useState(false);

  function handleCheck(e) {
    setActiveOns(e.target.checked);

    const newData = [...addOnsData];
    newData[index].checked = e.target["checked"];

    const filteredData = newData.filter((data) => data.checked === true);

    dispatch({ type: "summary", payload: filteredData });
  }

  const { type, text, amount } = data;

  return (
    <div className={`checkbox ${activeOns ? "active-ons" : ""}`}>
      <input type="checkbox" className="checkbox-input" onClick={handleCheck} />
      <span>
        <span className="checkbox-heading">{type}</span>

        <span className="checkbox-text-container">
          <span className="checkbox-text">{text}</span>{" "}
          <span className="monthly-bill">
            {" "}
            {yearlyPlan
              ? `+$${amount * PLAN_PER_YEAR}/yr`
              : `+$${amount}/mo`}{" "}
          </span>
        </span>
      </span>
    </div>
  );
}

export default AddOns;

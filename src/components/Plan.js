import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";

import ToggleSwitch from "./ToggleSwitch";

const plans = [
  { curPlan: "Arcade", bill: 9, icon: arcade, id: 0 },
  { curPlan: "Advanced", bill: 12, icon: advanced, id: 1 },
  { curPlan: "Pro", bill: 15, icon: pro, id: 2 },
];

function Plan({ step, dispatch, yearlyPlan, activePlan }) {
  const planStats = step === 1 ? "active-section" : "inactive-section";

  return (
    <div className={`plan-box ${planStats}`}>
      <PlanHeading />
      <PlanText />

      <div className="bill-container">
        {plans.map((planEl, i) => (
          <PlanBill
            planEl={planEl}
            key={i}
            yearlyPlan={yearlyPlan}
            dispatch={dispatch}
            index={i}
            activePlan={activePlan}
          />
        ))}
      </div>
      <ToggleSwitch dispatch={dispatch} yearlyPlan={yearlyPlan} />
    </div>
  );
}

function PlanHeading() {
  return <h1 className="plan-heading title">Select your plan</h1>;
}

function PlanText() {
  return (
    <p className="plan-text">
      You have the option of monthly or yearly billing
    </p>
  );
}

function PlanBill({ planEl, yearlyPlan, activePlan, dispatch, index }) {
  const { curPlan, bill, icon } = planEl;

  return (
    <div
      id={index}
      className={`bill-box ${activePlan === index && "active-plan"}`}
      onClick={() => {
        const summaryArr = plans.filter((el) => el.id === index);

        dispatch({
          type: "planType",
          payload: { selectedIndex: index, summaryData: summaryArr },
        });
      }}
    >
      <img src={icon} alt="arcade" />
      <h3 className="cur-plan">{curPlan}</h3>
      <p className="bill-val">
        ${yearlyPlan ? `${bill * 10}/yr` : `${bill}/mo`}
      </p>
      {yearlyPlan && <p>2 months free</p>}
    </div>
  );
}

export default Plan;

const YEARLY_AMOUNT = 10;

function Summary({ step, addOnsSummary, planData, yearlyPlan, dispatch }) {
  const summaryStats = step === 3 ? "active-section" : "inactive-section";
  const data = planData?.[0];
  const curPlanVal = data?.curPlan;
  const billValue = data?.bill;
  const onlineTotal = addOnsSummary.reduce((acc, cur) => acc + cur?.amount, 0);

  const value = billValue ? billValue : 0;

  const total = billValue ? billValue + onlineTotal : onlineTotal;

  const currentPlan = yearlyPlan ? "year" : "month";

  return (
    <div className={`summary-container ${summaryStats}`}>
      <h1 className="title">Finishing up</h1>
      <p className="summary-text">
        Double-check everything looks OK before confirming
      </p>

      <div className="summary-box">
        <div className="summary summary-one">
          <span className="arcade-summary">
            {curPlanVal} ({`${yearlyPlan ? "Yearly" : "Monthly"}`})
          </span>
          <span className="arcade-bill">
            ${yearlyPlan ? value * YEARLY_AMOUNT : value}/{currentPlan}
          </span>
          <ChangeBtn dispatch={dispatch} yearlyPlan={yearlyPlan} />
        </div>

        {addOnsSummary.map((summary, i) => (
          <OnlineSummary key={i} summary={summary} yearlyPlan={yearlyPlan} />
        ))}
      </div>

      <div className="total-box">
        <span className="total">Total per {currentPlan}</span>
        <span className="total-bill">
          ${yearlyPlan ? total * YEARLY_AMOUNT : total}/{currentPlan}
        </span>
      </div>
    </div>
  );
}

export default Summary;

function OnlineSummary({ summary, yearlyPlan }) {
  const { type, amount } = summary;
  return (
    <div className="summary">
      <span className="online-summary">{type}</span>
      <span className="online-bill">
        ${yearlyPlan ? amount * YEARLY_AMOUNT : amount}/
        {yearlyPlan ? "year" : "month"}
      </span>
    </div>
  );
}

function ChangeBtn({ dispatch, yearlyPlan }) {
  return (
    <button
      className="change"
      onClick={() => dispatch({ type: "selectPlan", payload: !yearlyPlan })}
    >
      {" "}
      change
    </button>
  );
}

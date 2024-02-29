function Info({
  step,
  name,
  email,
  number,
  dispatch,
  activePlan,
  addOnsSummary,
}) {
  const myPlans = [
    {
      value: name,
      type: "text",
      textLabel: "Name",
      id: "name",
      placeholder: "sabi-pikin",
      dispatchType: "name",
    },
    {
      value: email,
      type: "email",
      textLabel: "Email Address",
      id: "address",
      placeholder: "sidwanche@gmail.com",
      dispatchType: "email",
    },
    {
      value: number,
      type: "text",
      textLabel: "Phone Number",
      id: "number",
      placeholder: "e.g +237 675 970 381",
      dispatchType: "number",
    },
  ];

  const nextStep =
    (step === 1 && activePlan === null) ||
    (step === 2 && !addOnsSummary.length);

  const maxStep = 3;
  const infoStats = step === 0 ? "active-section" : "inactive-section";

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "step",
      payload: nextStep ? step : step + 1,
    });
  }
  return (
    <form onSubmit={handleSubmit} method="post">
      <div className={`info-container ${infoStats}`}>
        <h1
          className="title
        "
        >
          Personal info
        </h1>
        <p className="info">
          Please provide your name,email address, and phone number
        </p>

        {myPlans.map((myPlan, i) => (
          <div key={i} className="input-box">
            <label htmlFor="name">{myPlan.textLabel}</label>
            <input
              value={myPlan.value}
              type={myPlan.type}
              id={myPlan.id}
              required
              placeholder={myPlan.placeholder}
              className="input"
              onChange={(e) =>
                dispatch({ type: myPlan.dispatchType, payload: e.target.value })
              }
            />
          </div>
        ))}
      </div>
      {step < maxStep && <button className="next-btn">Next step</button>}
    </form>
  );
}

export default Info;

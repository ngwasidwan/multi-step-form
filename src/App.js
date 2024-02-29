import { useReducer } from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import ButtonPrev from "./components/ButtonPrev";
import Info from "./components/Info";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import ConfirmSubscription from "./components/ConfirmSubscription";
import ConfirmBtn from "./components/ConfirmBtn";

const initialState = {
  step: 0,
  name: "",
  email: "",
  number: "",
  yearlyPlan: false,
  activePlan: null,
  planData: [],
  addOnsSummary: [],
  complete: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "step":
      return { ...state, step: action.payload };
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "number":
      return { ...state, number: action.payload };
    case "selectPlan":
      return {
        ...state,
        yearlyPlan: action.payload,
      };
    case "planType":
      return {
        ...state,
        activePlan: action.payload.selectedIndex,
        planData: action.payload.summaryData,
      };
    case "summary":
      return { ...state, addOnsSummary: action.payload };
    case "completeSubscription":
      return { ...state, complete: action.payload };

    case "closeSubscription":
      return initialState;

    default:
      throw new Error("no case found");
  }
}

function App() {
  const [
    {
      step,
      name,
      email,
      number,
      yearlyPlan,
      activePlan,
      planData,
      addOnsSummary,
      complete,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <Sidebar step={step} dispatch={dispatch} />

      {complete ? (
        <ConfirmSubscription dispatch={dispatch} />
      ) : (
        <>
          <Main>
            <Info
              step={step}
              name={name}
              email={email}
              number={number}
              dispatch={dispatch}
              activePlan={activePlan}
              addOnsSummary={addOnsSummary}
            />
            <Plan
              step={step}
              dispatch={dispatch}
              yearlyPlan={yearlyPlan}
              activePlan={activePlan}
            />
            {<AddOns step={step} yearlyPlan={yearlyPlan} dispatch={dispatch} />}
            <Summary
              step={step}
              planData={planData}
              addOnsSummary={addOnsSummary}
              yearlyPlan={yearlyPlan}
              dispatch={dispatch}
            />
          </Main>

          {step > 0 && <ButtonPrev step={step} dispatch={dispatch} />}
          {step === 3 && <ConfirmBtn dispatch={dispatch} />}
        </>
      )}
    </div>
  );
}

export default App;

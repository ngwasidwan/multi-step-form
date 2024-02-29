import iconSubscribe from "./images/icon-thank-you.svg";

function ConfirmSubscription({ dispatch }) {
  return (
    <div className="subscribe">
      <img src={iconSubscribe} alt="thank you icon" />
      <h1 className="subscribe-heading">Thank you!</h1>
      <p className="subscribe-text">
        Thanks for confirming your subscription! We hope you have fun using or
        platform.If you ever need support please fell free to email us at
        support@loremgaming.com
      </p>
      <span
        className="close"
        role="button"
        onClick={() => dispatch({ type: "closeSubscription" })}
      >
        close{" "}
      </span>
    </div>
  );
}

export default ConfirmSubscription;

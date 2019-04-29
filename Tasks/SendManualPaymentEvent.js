const { Task, Workflow } = require("zenaton");

module.exports = Task("SendManualPaymentEvent", async function() {
  // random error
  var is_error = Math.random() >= 0.5;
  // tell parent workflow
  Workflow("PaymentProcess").whereId(this.order.id).send("ManualPaymentResult", {error: is_error})

  if (is_error) {
    console.log("Manual Payment failed");
  } else {
    console.log("Manual Payment succeeded");
  }
});

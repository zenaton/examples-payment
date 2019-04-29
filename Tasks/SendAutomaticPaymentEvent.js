const { Task, Workflow } = require("zenaton");


module.exports = Task("SendAutomaticPaymentEvent", async function() {
  // random error
  var is_error = Math.random() >= 0.5;
  // tell parent workflow
  const PaymentProcess = Workflow("PaymentProcess");
  
  PaymentProcess.whereId(this.order.id).send("AutomaticPaymentResult", {error: is_error})

  if (is_error) {
    console.log("Automatic Payment failed");
  } else {
    console.log("Automatic Payment succeeded");
  }
});

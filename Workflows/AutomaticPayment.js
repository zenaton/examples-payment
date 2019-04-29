const { Workflow, Wait } = require("zenaton");
const SendAutomaticPaymentEvent = require("../Tasks/SendAutomaticPaymentEvent");

module.exports = Workflow("AutomaticPayment", async function() {
  // .. automatic payment workflow implementation emaulated by this wait
  await new Wait().seconds(5).execute();

  await new SendAutomaticPaymentEvent(this).execute();
});

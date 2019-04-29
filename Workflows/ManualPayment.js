const { Workflow, Wait } = require("zenaton");
const SendManualPaymentEvent = require("../Tasks/SendManualPaymentEvent");

module.exports = Workflow("ManualPayment", async function() {
  // .. manual payment workflow implementation emaulated by this wait
  await new Wait().seconds(5).execute();

  await new SendManualPaymentEvent(this).execute();
});

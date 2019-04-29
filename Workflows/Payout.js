const { Workflow, Wait } = require("zenaton");
const SendPayoutEvent = require("../Tasks/SendPayoutEvent");

module.exports = Workflow("Payout", async function() {
  // ... Payout workflow implementation emaulated by this wait
  await new Wait().seconds(10).execute();

  await new SendPayoutEvent(this).execute();
});

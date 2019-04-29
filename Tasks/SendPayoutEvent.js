const { Task, Workflow } = require("zenaton");
const PaymentProcess = Workflow("PaymentProcess");

module.exports = Task("SendPayoutEvent", async function() {
  // tell parent workflow
  PaymentProcess.whereId(this.order.id).send("PayoutResult");
});

const { Workflow, Wait} = require("zenaton");
const CheckValidityOfPayment = require("../Tasks/CheckValidityOfPayment");
const LaunchAutomaticPayment = require("../Tasks/LaunchAutomaticPayment");
const LaunchManualPayment = require("../Tasks/LaunchManualPayment");
const LaunchPayout = require("../Tasks/LaunchPayout");

module.exports = Workflow("PaymentProcess", {
  init(order) {
    this.order = order;
  },
  handle: async function () {
    let event;
    let valid = await new CheckValidityOfPayment(this.order).execute();

    if (valid) {
      // launch automatic payment sub process
      await new LaunchAutomaticPayment(this).dispatch();
      // wait end of this Sub Workflow
      event = await new Wait('AutomaticPaymentResult').execute();
    }

    // retry manual payment up to success
    if (!valid || event.data.error) {
      do {
        // launch manual payment sub process
        await new LaunchManualPayment(this).dispatch();
        // wait end of this Sub Workflow
        event = await new Wait('ManualPaymentResult').execute();
      } while (event.data.error);
    }

    // launch payout sub process
    await new LaunchPayout(this).dispatch();
    // wait end of this Sub Workflow
    await new Wait('PayoutResult').execute();
  },
  id() {
    return this.order.id;
  }
});

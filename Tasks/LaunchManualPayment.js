const { Task, Workflow } = require("zenaton");
const ManualPayment = Workflow("ManualPayment");

module.exports = Task("LaunchManualPayment", async function() {
  console.log("LaunchManualPayment starts");

  new ManualPayment(this).dispatch(); 

  console.log("LaunchManualPayment A ends");
});

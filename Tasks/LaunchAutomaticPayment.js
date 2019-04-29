const { Task, Workflow } = require("zenaton");
const AutomaticPayment = Workflow("AutomaticPayment");

module.exports = Task("LaunchAutomaticPayment", async function() {
  console.log("LaunchAutomaticPayment starts");

  new AutomaticPayment(this).dispatch(); 

  console.log("LaunchAutomaticPayment A ends");
});

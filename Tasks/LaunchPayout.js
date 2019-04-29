const { Task, Workflow } = require("zenaton");

module.exports = Task("LaunchPayout", async function() {
  console.log("LaunchPayout starts");

  new (Workflow("Payout"))(this).dispatch(); 

  console.log("LaunchPayout A ends");
});

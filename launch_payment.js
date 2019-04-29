require("./client");
const uniqid = require("uniqid");
const PaymentProcess = require("./Workflows/PaymentProcess");

let order = {id: uniqid()};
new PaymentProcess(order).dispatch();

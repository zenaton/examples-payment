const { Task } = require("zenaton");

module.exports = Task("CheckValidityOfPayment", async function() {
   // random result
   var is_valid = Math.random() >= 0.5;

   if (is_valid) {
     console.log("Payment Valid");
   } else {
     console.log("Payment Invalid");
   }

   return is_valid;
});

const file = require("fs");

const input = process.argv;

if (input[2] === 'add') {
  file.writeFileSync(input[3],input[4]);
} else if (input[2] === 'remove') {
  file.unlinkSync(input[3]);
} else {
  console.log("Invalid Input !");
}

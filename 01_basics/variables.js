const accountId = 144553
let accountEmail = "usman@google.com"
var accountPassword = "12345usman"
accountCity = "Lahore" // not recommended this method
let accountState;  // if there is no value assigned to a variable this will consider undefined

//keywords alredy defined in language compiler. they know them
// accountId = 2  // Not allowed constant value
console.log(accountId);

// to declare variables we can use let and var. In initial stage JS didn't have control on socpes
// {} this curley braces called scope
// Preffer not to use var just use let. because the issue of block scope and functional scope


accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Faisalabad"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

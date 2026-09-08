
const accountId = 2;
let accountEmail = "harrry@grc.com";
let accountName = "Hariom";
var accountPassword = "1234";
accountCity = "Jaipur";

//accountId = 2 // not allowed to change
console.log(accountId);

accountEmail = "harry@google.com";
accountPassword = "3747";
accountCity = "Jabalpur";

console.table([accountEmail, accountId, accountName, accountPassword]);

/*
Prefer not to use var in large level projects because it's is confusing when the topic is scope either block or funcational
*/
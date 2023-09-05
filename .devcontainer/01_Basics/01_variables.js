const accountID=1445533;
let accountEmail="preeti@ok.com" //we use let to decalre variable
var accountpsw="12345" //var also but scope problm
accountCity="blr"
let accountstate; //undefined

//accountID=1; //not allowed

accountEmail="hc@hc.com"
accountpsw="21215"
accountCity="hyd"


/*
Prefer not to use var
bcoz of issue in block in block and functional scope

*/

console.table([accountEmail,accountID,accountpsw,accountCity])
console.log(accountID);
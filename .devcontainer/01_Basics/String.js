const name="preeti"
const repocount=4

//console.log(name + repocount + " value") 

//String interpulation
console.log(`hello my name is ${name} and my repo count is ${repocount}`) //back inveted

const gamename=new String('preeti_sd')

// console.log(gamename[0])
// console.log(gamename.__proto__)

// console.log(gamename.length)

// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(5));
// console.log(gamename.indexOf('t'))

 const newstring=gamename.substring(0,4)
 console.log(newstring)

 const anotherstring=gamename.slice(-6,4)

 const newstring1="    preeti     "
 console.log(newstring1);
 console.log(newstring1.trim())

 const url="https://preeti.com/preeti%46diggi"
console.log(url.replace('%46','-'))
console.log(url.includes('punit'))

console.log(gamename.split('_'))



const users = require('./users');


// method to change an obj to an array for the reduce fn
const toArray = (obj) => {
  const keys = Object.keys(obj);
  let newArray = [];
  for (let key of keys) {
    newArray.push(obj[key]);
  }
  return newArray;
}

// prepare the users obj for use with reduce
const usersArray = toArray(users);

// returns an object with users stored in arrays which are assigned to keys by country code
 const groupByCountry = (arr) => usersArray.reduce((newObj, oldObj) => {
  const country = oldObj.company.countryCode;
  if (!newObj[country]) {
    newObj[country] = [oldObj]
  } else {
    newObj[country].push(oldObj)
  }
  return newObj;
}, {})

// make the function accessible to other libs
exports.groupByCountry = groupByCountry;

console.log(groupByCountry(usersArray));

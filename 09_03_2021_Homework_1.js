// Ex.1 
// Variant A,  what You ask to do
let cat = 'cat';
let dog = 'dog';
let temp;
temp = cat;
cat = dog;
dog = temp;
console.log(cat); // Should equal 'dog'
console.log(dog); // Should equal 'cat'

// Variant B,  without 3rd variable - more interesting as for me)
let cat1 = 'cat';
let dog1 = 'dog';
[cat1, dog1] = [dog1, cat1];
console.log(cat); // Should equal 'dog'
console.log(dog); // Should equal 'cat' 

// Ex.2 
// Variables and output them to console
let company = 'MGID ';
let position = 'QA Engineer';
console.log(company);
console.log(position);

//OR
console.log(position + ' at ' + company);

// Ex.3
//
let isProductCompany = true;
let productName;
console.log(typeof(isProductCompany));
console.log(typeof(company));
console.log(typeof(position));

// Ex.4
//
productName = 'My name is Legion, for we are many)'
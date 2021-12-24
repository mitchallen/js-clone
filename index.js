// Author: Mitch Allen
// Project: js-clone
// File: index.js

// 1. Define a nicer log function
let stringify = (obj) => console.log(JSON.stringify(obj,null,2));

// 2. Define a source object
let alpha = { name: "Alpha", value: 100 };

// 3. Attempt to clone a target object using assignment
let beta = alpha;

// 4. Try to change the name of the target object
beta.name = "Beta";

// 5. Log the result
stringify([ alpha, beta ]);

// Notice that alpha.name is now the same as beta;
// Both the target and the source point to the same object

// 6. Define a new source object
let gamma = { name: "Gamma", value: 200 };

// 7. Clone a new target object from the new source object using the spread operator
let delta = { ...gamma };

// 8.  Change the name of the new target object 
delta.name = "Delta";

// 9. Log the result
stringify([ gamma, delta ]);

// Note that changes to the target (delta) do not change the source
// They are independent objects


var iDiv = document.createElement("div");
iDiv.id = "block";
iDiv.className = "block";

// Create the inner div before appending to the body
var innerDiv = document.createElement("div");
innerDiv.className = "block-2";

// The variable iDiv is still good... Just append to it.
iDiv.appendChild(innerDiv);

// Then append the whole thing onto the body
document.getElementsByTagName("body")[0].appendChild(iDiv);

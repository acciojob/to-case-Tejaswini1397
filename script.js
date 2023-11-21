function toCase(text) {
  // write your code here
	let str=text.toLowerCase();
	let str1=text.toUpperCase();
	
	return (str+"-"+str1);
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

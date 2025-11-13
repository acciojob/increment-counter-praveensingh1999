//your JS code here. If required.
let count=0;
const para = document.querySelector("p");
para.innerText = count;

function incrementbtn() {
	alert(count);
	count++;
	para.innerText = count;
	
}
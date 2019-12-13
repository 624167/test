
function myFunction() {
  let a1= parseInt(prompt("Enter first angle"));
 
  let a2=parseInt(prompt("Enter second angle"));
  let a3 = 180 - (a1 + a2);
  alert("angle 3 is"+ " "+ a3);
}
function century(){
let year1= parseInt(prompt("Enter a year"));
let century=parseInt((year1 - 1) / 100)+ 1;
alert("The century is"+" " + century);


}
 function integers(){
  alert("Check your console!")

  for(let i = 1; i < 101; i++){

		if (i % 4 == 0) {
		console.log("Four");
		}

		else if(i % 10 == 0){
		console.log("Ten");
		}

		else if(i % 10 && 4 == 0 ){
		console.log("TenFour");
		}
	
		else {
		console.log(i);
		}
	}

}

function cheers(){
	let team= prompt(' who are we cheering for?');
	let repeats=prompt ('How many cheers for?');
	for(i=0;i<repeats; i++){
		console.log("Go"+ team+"!")
	}
}

function Encrypt(){
	let letter={"a":"7","b":"8","c":"17","d":"19","e":"16","f":"3","g":"4","h":"5","i":"6","j":"13","k":"15","l":"14","m":"15","n":"19","o":"20","p":"1","q":"9","r":"10","s":"11","t":"18","u":"25","v":"2","w":"26","x":"4","y":"0","z":"15"};
	let alert=prompt('write your message');
	text=alert.replace(/[abcdefghijklmnopqrstuvwxyz]/g,m=>chars[m]);
 document.getElementById("true").value = "alert";



		



	

	


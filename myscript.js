
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




  



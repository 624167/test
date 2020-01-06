
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
	let letter={'a':'7','b':'8','c':'17','d':'19','e':'16','f':'3','g':'4','h':'5','i':'6','j':'13','k':'15','l':'14','m':'25','n':'19','o':'20','p':'1','q':'9','r':'10','s':'11','t':'18','u':'25','v':'2','w':'26','x':'4','y':'30','z':'15'};
	let message=prompt('write your message here in lowercase letters.');
	text=message.replace(/[abcdefghijklmnopqrstuvwxyz]/g,m=>letter[m]);
 document.getElementById("true").innerHTML = text;

}
//Got help from Raneem and Amatulhadi//


function Decrypt(){
let letter={'7':'a','8':'b','17':'c','19':'d','16':'e','3':'f','4':'g','5':'h','6':'i','13':'j','15':'k','14':'l','9':'q','10':'r','11':'s','18':'t','25':'u','2':'v','26':'w','4':'x','30':'y','15':'z'};
let message=prompt('copy the message from above and paste it here');
text=message.replace(/[78171916345613151425191011182522643015]/g,m=>letter[m]);
document.getElementById("okay").innerHTML=text;

}
//Got help from Raneem and Amatulhadi//



	

	


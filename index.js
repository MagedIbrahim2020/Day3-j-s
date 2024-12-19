// **************************Task 1***************************
let i=0;
let sum=0;
do{
  let value=parseFloat(prompt("Enter the number:"));
  if(isNaN(value)){
    alert("Enter valid number");
    continue;
  }
  if(value===0 || value+sum > 100){
    break;
  }
  sum+=value;
  i++;
}
while(true)
alert(`the total sum of the enterd values is : ${sum}`)

// **************************Task 2***************************
let h1=document.getElementById("name");
let h2=document.getElementById("h2")
alert('Welcome to my site')
let name=prompt("Enter your name")
let color= prompt(" choose either (red, green or blue color)").toLowerCase();
let validColor=["red","green","blue"]
h1.textContent=`Hello,${name} !`
if(validColor.includes(color)){
    h2.textContent=`you choose the  ${color} color `; 
}else{
    alert("Your color choice is invalid");
    let color= prompt("please choose either (red, green or blue color)").toLowerCase();
}

// ************************** Task 3 ***************************
function displayMsg(){
    console.log("clicked")
let message=document.getElementById("message").value.trim();
console.log(message);
let message_div=document.getElementById("output");
message_div.innerHTML=" ";

for(let i = 1 ; i <= 6 ; i++){
   let heading=document.createElement('h' + i);
   heading.textContent=message;
   message_div.appendChild(heading)
}
}
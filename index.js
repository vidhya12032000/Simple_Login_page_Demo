let uName="vidhya.m5";
let passWord="123@";

let btn= document.getElementById("btn");
btn.addEventListener("click",function(){

let Entername=document.getElementById("username").value;
let Enterpw=document.getElementById("pw").value;

if(Entername=="" || Enterpw==""){
 document.getElementById("errormsg").innerText="Enter the Valid Username and Password";
 return ;
}

if(Entername==uName && Enterpw==passWord){
    let loginPage=document.querySelector("body");
    loginPage.innerHTML=`<h1>Welcome ${uName}</h1>`;
    loginPage.style.backgroundImage="url(bg.jpg)";

}
else{
    document.getElementById("errormsg").innerText="Invalid UserName or Password"
}
})
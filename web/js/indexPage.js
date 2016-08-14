/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var x;
var interval;
//loads login page
function load(){
    document.getElementsByClassName("LoginForm")[0].style.top="50px";
    //document.getElementsByClassName("LoginForm")[0].style.position="static";
    var a=document.getElementsByClassName("Registrationform")[0];
    var b=document.getElementsByClassName("info")[0];
    
    b.style.marginLeft="1500px";
    a.style.marginTop="700px";
}


//loads register
function unload(){
    document.getElementsByClassName("LoginForm")[0].style.top="700px";
    
    var a=document.getElementsByClassName("Registrationform")[0];
    var b=document.getElementsByClassName("info")[0];
    
    b.style.marginLeft="500px";
    a.style.marginTop="40px";
}
//sets blank values on input fields

function setBlank(x){
    
    window.x=x;
    x.value="";
    
    x.onkeydown=function(){x.style.color="black";};
    
}
//keeps checking for user input
function dirtyCheck(){
    
    var h=document.activeElement;
    
    if(h!=null)document.getElementById(h.name).innerHTML=h.value;
    
}
//
function hide() {
    var p = document.getElementById('pass2');
    p.setAttribute('type', 'password');
}

//switches password types
function setVisible(hide, visible){
    hide.style.display="none";
    visible.style.display="inline";
    
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*Object Declaration*/
var XRS=false;//XMLHttpRequest Object
var user;
var xhr;

if(window.XMLHttpRequest){
    XRS=new XMLHttpRequest();
}
else if(window.ActiveXObject){
    XRS=new ActiveXObject("Microsoft.XMLHTTP");
}


/* Process Registration 
 * Sending data in the form of a json
 * Json can be used for mapping to an object directly
 * */

function setData(){
    if(XRS){
         var json={
             name:document.getElementsByName("fname")[0].value+" "+document.getElementsByName("lname")[0].value,
             email:document.getElementsByName("email")[0].value,
             password:document.getElementsByName("pass2")[0].value,
             age:document.getElementsByName("Age")[0].value,
             username:document.getElementsByName("username")[0].value
         };
         
                       
        
        XRS.onreadystatechange=function(){
            if(XRS.readyState==4 && XRS.status==200)showdata(XRS);
            
            if(XRS.readyState==4 && XRS.status==400)showdata(XRS);
        };
        XRS.open("Post","jsp/register.jsp",true);
        XRS.setRequestHeader("Content-Type", "application/json;charset=UTF-8");     
        XRS.send(JSON.stringify(json));
        
    }
                
}
function getData(){
    var json={
        username:document.getElementById("username2").value,
        id:document.getElementById("id").value,
        email:document.getElementById("email2").value,
        password:document.getElementById("password2").value
        
    }
    XRS.onreadystatechange=function(){
            if(XRS.readyState==4 && XRS.status==200){
               
               var current=JSON.parse(XRS.responseText);
               
               sessionStorage.setItem("loggedIn", JSON.stringify(current));
               window.setUserData(current);
               
               window.location.href="http://localhost:8084/Messenger/#/commonboard";
               
                
            }
            if(XRS.readyState==4 && XRS.status==400){
                showdata(window.XRS);
                document.getElementsByName("username")[0].style.borderColor="red";
                document.getElementsByName("username")[0].style.borderWidth="5px";
            } 
            
        };
        
        XRS.open("Post","jsp/LoginCall.jsp",true);
        XRS.setRequestHeader("Content-Type", "application/json;charset=UTF-8");     
        XRS.send(JSON.stringify(json));
}
function hide(data){
    document.getElementById("notification").style.visibility="hidden";
    document.getElementById("but").style.visibility="hidden";
    //document.body.style.opacity="1.0";
}
function showdata(XRS){
    window.xhr=XRS.responseText;
    XRS.responseText="";
    var p=document.getElementById("notification");
    var button=document.getElementById("but");
   // document.body.style.opacity="0.2";
    p.style.visibility="visible";
    p.style.width="300px";
    p.style.height="150px";
    
    button.style.visibility="visible";
    button.style.left="50px";
    button.style.width="100px";
    button.style.height="50px";
    button.style.fontSize="12px";
    //p.style.opacity="1.0";
    p.innerHTML=window.xhr+"<br/>"+p.innerHTML;
            
    
}

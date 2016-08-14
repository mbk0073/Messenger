/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/*
 * Set Method for current User
 * XML request for all the online users
 * XML request for 
 */
var XRSresponse;
var conversationRequest;
var userRequest;
var users=[];

function sort(x){
    if(x.src.length>3)x.src=x.src.substring(0,x.src.lastIndexOf('.'))+window.extension[++window.extensionindex%1];

}
            var current="assets/Profiles"+JSON.parse(sessionStorage.getItem("loggedIn"));
            var interval;
            var x;
            var h;
            if(window.XMLHttpRequest){
                x=new XMLHttpRequest();
                h=new XMLHttpRequest();
            }
            else if(window.ActiveXObject){
                x=new ActiveXObject("Microsoft.HTTP");
                h=new ActiveXObject("Microsoft.HTTP");
            }
           window.getMessages=function(){
                if(h){
                    var c=document.getElementById("com");
                    var message=c.getElementsByTagName("p").length;
                    h.open("GET","jsp/load.jsp?n="+message,true);
                    h.onreadystatechange=function(){
                        if(h.readyState===4)c.innerHTML+=h.responseText;
                    };
                }
                h.send(null);
            };
    window.insertComment=function(){
        var x;
        if(window.XMLHttpRequest)x=new XMLHttpRequest();
        else x=new ActiveXObject("Microsoft.HTTP");
         if(x){
             var c=document.getElementById("comments").value;
             var cur=JSON.parse(sessionStorage.getItem("loggedIn"));
             var url="jsp/process.jsp?comment="+c+"&sentby="+cur.username;
             x.open("GET",url,true);
             x.onreadystatechange=function(){
            if(x.readyState===4)document.getElementById("com").innerHTML+=x.responseText;
             };
           }
         x.send(null);
        comments.value="";
    };
window.Logout=function(x){
    x.action="jsp/Logout.jsp?username="+window.XRSresponse.username; 
};

var setUserData=function(data){
    XRSresponse=data;
};
if(window.XMLHttpRequest){
    conversationRequest=new XMLHttpRequest();
    userRequest=new XMLHttpRequest();
}
else if(window.ActiveXObject){
    conversationRequest=new ActiveXObject("Microsoft.XMLHTTP");
    userRequest=new ActiveXObject("Microsoft.XMLHTTP");
}

function getAllUsers(){
    
    if(userRequest){
        userRequest.onreadystatechange=function(){
            if(userRequest.readyState==4 && userRequest.status==200)
                window.users=JSON.parse(userRequest.responseText);
        };
        userRequest.open("GET","jsp/AllUsers.jsp",true);
        userRequest.send();
        
    }
}

   function getOnlineUsers(){
    var newInfo=[];
    if(userRequest){
        var len=window.users.length;
        userRequest.responseText="";
        
        userRequest.onreadystatechange=function(){
            if(userRequest.readyState==4 && userRequest.status==200){
                newInfo=JSON.parse(userRequest.responseText);
                console.log(newInfo.length);
                if(newInfo.length>len){
                    for(var i=length; i<newInfo.length; ++i){
                        window.users.push(newInfo[i]);
                    }
                }
                for(var i=0; i<window.users.length; ++i){
                    if(window.users[i].active!=newInfo[i].active)window.users[i].active=newInfo[i].active;
                }
                
            }
            
                 
            
        };
        userRequest.open("Get", "jsp/AllUsers.jsp",true);
        userRequest.send();
        
    }
    
   }
   
   function setDisplay(){
       var length=window.users.length;
       
       for(var i=0; i<length; ++i){
           var search=window.users[i].username;
           var element =document.getElementById(search); 
           if((typeof(element)!=undefined && element!=null )){
               if(window.users[i].active==0)element.parentNode.removeChild(element);
           }
           else{
               if(window.users[i].active==0)continue;
               else{
                   var usersList = document.getElementById('ActiveUsers');
                   var newdiv=document.createElement("div");
                   newdiv.id=search;
                   newdiv.class="users";
                   
// Loop through each of the comments and add them to the comments list.
                    
                    var tmpl = document.getElementById('user-template').content.cloneNode(true);
                    tmpl.querySelector('.profile').src="assets/Profiles/"+window.users[i].username+window.extension[++window.extensionindex%6];
                    tmpl.querySelector('.profile').alt="assets/Profiles/1.jpg"
                    
                    tmpl.querySelector('.user-name').innerText = window.users[i].name;
                    tmpl.querySelector('.user-username').innerText=window.users[i].username;
                    tmpl.querySelector('.user-email').innerText=window.users[i].email;
                    tmpl.querySelector('.user-age').innerText = window.users[i].age;
                    
                    newdiv.appendChild(tmpl);
                    usersList.appendChild(newdiv);
                    }
               }
           }
   } 
   
   
   
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var extensionindex=0;
var count=1;
var extension=[".jpg",".jpeg",".JPG", ".png", ".bmp",".PNG",".BMP",".JPEG"];
/*function source(x){
    if(x.src.length>3)x.src=x.src.substring(0,x.src.lastIndexOf('.'))+window.extension[++window.extensionindex%6];
}

function setSource(){
    var current="assets/Profiles"+JSON.parse(sessionStorage.getItem("loggedIn"));
    
    if(count==1)document.getElementById("preview").src=current+window.extension[++window.extensionindex%6];
    ++count;
}*/

function setImage(){
    var ImageXml;


if(window.XMLHttpRequest){
    ImageXml=new XMLHttpRequest();
}
else if(window.ActiveXObject){
    ImageXml=new ActiveXObject("Microsoft.XMLHTTP");
}
    if(ImageXml){
        var formdata=new FormData();
        var pics=document.getElementById("photo").files[0];
        var picsrc=document.getElementById("preview");
        formdata.append("file",pics);
        ImageXml.onreadystatechange=function(){
            if(ImageXml.readyState==4 && ImageXml.status==200)picsrc.src=ImageXml.responseText;
            else if(ImageXml.status==400)alert("Error");
        };
        ImageXml.open("POST","DownloadImage?username="+window.XRSresponse.username,true);
        ImageXml.send(formdata);
        return false;
    }
    else alert("Error");
}

            
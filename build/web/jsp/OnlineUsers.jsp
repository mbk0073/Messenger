<%-- 
    Document   : OnlineUsers
    Created on : Jul 24, 2016, 10:54:53 PM
    Author     : Ambikeya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="connections.jsp"%>
<%@page import="java.util.Map, java.util.Queue, java.util.HashMap, java.util.Iterator" %>
<%@page import="in.Messenger.Databse.ActiveUser, in.Messenger.Databse.UserInformation, java.util.Stack" %>
<%@page import="com.google.gson.*"%>
<%! 
    long size=0;
    long count=0;
    Map<Integer, UserInformation> activeuser;
    Stack<Integer> LoggedIn;
%>
<%
response.setContentType("application/json");
String sql="select * from onlineuser";
stmt=con.prepareStatement(sql);
rs=stmt.executeQuery();
while(rs.next()){
    
}
/*count=(Long)(application.getAttribute("count"));
if((size=Long.parseLong(request.getParameter("number").trim()))==count){
    //response.setStatus(400);
    return;
}
else if(application.getAttribute("ActiveUsers")==null || application.getAttribute("Id")==null){
    //response.setStatus(400);
    return;
}

else{
   if(count>size){
       
       activeuser=(HashMap<Integer, UserInformation>)application.getAttribute("ActiveUsers");
       LoggedIn=(Stack<Integer>)application.getAttribute("Id");
       while(count>size){
           int temp=LoggedIn.pop();
           out.write(new Gson().toJson(activeuser.get(temp)));
           ++size;
               
       }
    }
}
  */ 

%>

<%-- 
    Document   : AllUsers
    Created on : Jul 31, 2016, 1:12:05 AM
    Author     : Ambikeya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="connections.jsp" %>
<%@page import="in.Messenger.Databse.UserInformation, com.google.gson.*, java.util.List, java.util.LinkedList"%>

<%
response.setContentType("application/json");
String sql="SELECT * FROM onlineuser";
stmt=con.prepareStatement(sql);
rs=stmt.executeQuery();
UserInformation info;
List<UserInformation> res=new LinkedList<>();
while(rs.next()){
    info=new UserInformation(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getInt(4),rs.getInt(5),rs.getString(6));
   /* info.setEmail(rs.getString(1));
    info.setUsername(rs.getString(2));
    info.setActive(rs.getInt(3));
    info.setAge(rs.getInt(4));
    info.setName(rs.getString(5));
    id email age active username name
    */
    res.add(info);
}
out.write(new Gson().toJson(res));
%>
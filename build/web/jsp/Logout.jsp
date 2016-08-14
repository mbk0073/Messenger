<%-- 
    Document   : Logout
    Created on : Jul 25, 2016, 12:02:26 PM
    Author     : Ambikeya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.Stack, java.util.Map, java.util.HashMap, in.Messenger.Databse.UserInformation" %>
<%@include file="connections.jsp"%>
<%!
    //Map<Integer, UserInformation> activeusers;
    //Stack<Integer> loggedOut;
%>
<%
    String user=request.getParameter("username").trim();
    String sql="UPDATE ONLINEUSER SET ACTIVE=? WHERE USERNAME=?";
    stmt=con.prepareStatement(sql);
    stmt.setInt(1, 0);
    stmt.setString(2, user);
    int x=stmt.executeUpdate();
    con.close();
    response.sendRedirect("http://localhost:8084/Messenger/");
      /*activeusers=(HashMap<Integer, UserInformation>)application.getAttribute("ActiveUsers");
      int id=Integer.parseInt(request.getParameter("id").trim());
      activeusers.remove(id);
      application.setAttribute("ActiveUsers", activeusers);
      loggedOut.add(id);
      application.setAttribute("LoggedOut", loggedOut);
      int n=(Integer)(application.getAttribute("count"));
      application.setAttribute("count", --n);
      out.write("Logout Successful");*/
     
%>
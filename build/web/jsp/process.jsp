<%-- 
    Document   : process
    Created on : Jul 7, 2016, 12:58:03 PM
    Author     : Ambikeya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="connections.jsp"%>

        <%
            String message=request.getParameter("comment").trim();
            String sentby=request.getParameter("sentby").trim();
            String sql="insert into messages(message,sentBy) values(?,?)";
            stmt=con.prepareStatement(sql);
            stmt.setString(1, message);
            stmt.setString(2, sentby);
            int execute=stmt.executeUpdate();
            out.print("<br/><p><Strong>"+sentby+"</Strong>:"+message+"</p>");
        %>
   
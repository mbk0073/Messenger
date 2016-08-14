<%-- 
    Document   : load
    Created on : Jul 7, 2016, 1:56:01 PM
    Author     : Ambikeya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="connections.jsp"%>

        <%
            int n=Integer.parseInt(request.getParameter("n").trim());
            String sql="Select * from messages where id>?";
            stmt=con.prepareStatement(sql);
            stmt.setInt(1, n);
            ResultSet rs=stmt.executeQuery();
            if(!rs.next()){
                return;
            }
            while(rs.next())out.print("<br/><p><Strong>"+rs.getString(3)+"</Strong>:"+rs.getString(2)+"</p>");
            con.close();
        %>
    
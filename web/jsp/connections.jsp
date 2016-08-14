<%-- 
    Document   : connections
    Created on : Jul 12, 2016, 2:54:01 AM
    Author     : Ambikeya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>



        <%!static final String driver="com.mysql.jdbc.Driver";
           static final String url="jdbc:mysql://localhost:3306/emp" ;
           static final String user="root";
           static final String password="nature786";
           Connection con=null;
           PreparedStatement stmt=null;
           ResultSet rs=null;
        %>
        <%
            
         Class.forName(driver);
         con=DriverManager.getConnection(url, user, password);
         
        %>
            
        
        


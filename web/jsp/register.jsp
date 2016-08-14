<%-- 
    Document   : register
    Created on : Jul 10, 2016, 4:14:10 AM
    Author     : Ambikeya
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@page import="in.Messenger.Databse.*"%>
<%@page import="com.google.gson.*" %>
<%@page import="controller.UserManager, controller.InformationManager"%>
<%@page import="javax.persistence.Persistence, javax.persistence.EntityManager, javax.persistence.EntityManagerFactory"%>
<%//@include file="connections.jsp" %>
<%@page import="java.util.Map, java.util.HashMap" %>

        <%!
        static long count=0;
        EntityManager em;
        EntityManagerFactory emf;
        UserManager um;
        //private String sql="";
        //Map<Integer, UserInformation> active;
        UserInformation info=new UserInformation();
        User newuser=new User();
        User flag;
        InformationManager information;
        
        %>
      <%   
      emf=Persistence.createEntityManagerFactory("MessengerPU");
      em=emf.createEntityManager();
      um=new UserManager(em);
      information=new InformationManager(em);
      //if(request.getParameter("process").equals("register")){
          newuser=new Gson().fromJson(request.getReader(), User.class);
          info.setAge(newuser.getAge());
          info.setEmail(newuser.getEmail());
          info.setName(newuser.getName());
          info.setUsername(newuser.getUsername());
          info.setActive(0);
          /*sql="Select * from messengeruser where username=?";
          
          stmt=con.prepareStatement(sql);
          stmt.setString(1, user.getUsername());
          if(rs.next()){
              out.write("Please change your username");
              response.setStatus(400);
              con.close();
              return;
          }
          con.close();*/
          
          try{
          em.getTransaction().begin();
          flag=um.createUser(newuser);
          information.createUser(info);
          em.getTransaction().commit();
          em.close();
          emf.close();
          }
          catch(Exception e){
              out.write("Change entry fields");
              return;
          }
          if(flag==null){
          out.write("Some error has occured. Please contact the administrator");
          response.setStatus(400);
          }
          
        else{
            
            out.write("Please note your unique id:"+flag.getId());
        }
      %>
    
<%-- 
    Document   : LoginCall
    Created on : Jul 26, 2016, 10:33:19 PM
    Author     : Ambikeya
--%>

<%@page import="java.lang.Integer"%>
<%@page import="in.Messenger.Databse.*"%>
<%@page import="com.google.gson.*" %>
<%@page import="controller.UserManager"%>
<%@page import="javax.persistence.Persistence, javax.persistence.EntityManager, javax.persistence.EntityManagerFactory"%>
<%@include file="connections.jsp" %>
<%@page import="java.util.Map, java.util.HashMap, java.util.Stack, java.util.List" %>
        <%!
        static long count=0;
        EntityManager em;
        EntityManagerFactory emf;
        UserManager um;
        String sql="UPDATE ONLINEUSER SET ACTIVE=? WHERE USERNAME=?";
        
        //Map<Integer, UserInformation> active;
        UserInformation info=new UserInformation();
        //Stack<Integer> stack;
        User NewUser;
        
        %>
        

<%     try{
           
         emf=Persistence.createEntityManagerFactory("MessengerPU");
         em=emf.createEntityManager();
         um=new UserManager(em);
         UserId userid=new Gson().fromJson(request.getReader(), UserId.class);
         NewUser=um.findUser(userid);
        
         response.setContentType("application/json");
         if(user!=null){
             stmt=con.prepareStatement(sql);
             stmt.setInt(1, 1);
             stmt.setString(2, NewUser.getUsername());
             int x=stmt.executeUpdate();
             con.close();
             //info.setId(0);
             info.setAge(NewUser.getAge());
             info.setEmail(NewUser.getEmail());
             info.setName(NewUser.getName());
             info.setUsername(NewUser.getUsername());
             info.setActive(1);
              out.write(new Gson().toJson(info));
            /*
              if(application.getAttribute("ActiveUsers")==null){
                 application.setAttribute("ActiveUsers", new HashMap<Integer, UserInformation>());
                 application.setAttribute("LoggedIn", new Stack<Integer>());
             }
            
                 active=(HashMap<Integer,UserInformation>)application.getAttribute("ActiveUsers");
                 active.put(NewUser.getId(),info);
                 application.setAttribute("ActiveUsers",active);
              stack=(Stack<Integer>)application.getAttribute("LoggedIn");
              stack.push(NewUser.getId());
              
              application.setAttribute("LoggedIn",stack);
                
            */ 
         }
         else{
             response.setStatus(400);
             out.write("Invalid Username");
         }
         }
        catch(Exception e){
            response.setContentType("text/html");
            response.setStatus(500);
            out.write(e.toString());
        }
      
      %>
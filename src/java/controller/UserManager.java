/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

/**
 *
 * @author Ambikeya
 */

import javax.persistence.EntityManager;
import in.Messenger.Databse.*;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.util.List;

public class UserManager {
    EntityManager em;
    
    public UserManager(EntityManager em){
    this.em=em;
    }
    public User createUser(User newuser){
        
    em.persist(newuser);
    return newuser;
    
   
    }
    public User findUser(UserId userid){
       return em.find(User.class,userid);
    }
    public long findusers(String username){
        long x=(Long)(em.createQuery("Select e from messengeruser where e.username :username", Long.class).getSingleResult());
        return x;
    }
    public User finduser(String username){
         Query query = em.createQuery("SELECT u FROM User u WHERE u.username = 'username'");
         User user = (User)query.getSingleResult();
         return user;
    }
    
  
}

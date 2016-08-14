/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;


import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.EntityManager;
import in.Messenger.Databse.UserInformation;
/**
 *
 * @author Ambikeya
 */
public class InformationManager {
    private EntityManager em;
    
    public InformationManager(EntityManager em){
        this.em=em;
    }
    
    public void createUser(UserInformation userinfo){
        em.persist(userinfo);
    }
}

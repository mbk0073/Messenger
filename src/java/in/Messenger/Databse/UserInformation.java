/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package in.Messenger.Databse;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;

/**
 *
 * @author Ambikeya
 */
@Entity
@Table(name="onlineuser")
public class UserInformation implements Serializable {

    private static long serialVersionUID = 1L;

    /**
     * @return the serialVersionUID
     */
    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    /**
     * @param aSerialVersionUID the serialVersionUID to set
     */
    public static void setSerialVersionUID(long aSerialVersionUID) {
        serialVersionUID = aSerialVersionUID;
    }
    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    
    @Id
    @Column(name="username", unique=true)
    private String username;
    
    @Id
    @Column(name="email")
    private String email;
    
    @Column(name="name")
    private String name;
    
    @Column(name="age")
    private int age;
    
    @Column(name="active")
    private int active;
    
    
    
    public String getUsername() {
        return username;
    }

    public void setUsername(String id) {
        this.username = id;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (getUsername() != null ? getUsername().hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof UserInformation)) {
            return false;
        }
        UserInformation other = (UserInformation) object;
        if ((this.getUsername() == null && other.getUsername() != null) || (this.getUsername() != null && !this.username.equals(other.username))) {
            return false;
        }
        return true;
    }
    public UserInformation(){
        
    }
    
    public UserInformation(int id, String email,String username, int active, int age, String name){
        this.id=id;
        this.name=name;
        this.email=email;
        this.age=age;
        this.active=active;
        this.username=username;
    }

    @Override
    public String toString() {
        return "in.Messenger.Databse.UserInformation[ id=" + getUsername() + " ]";
    }

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the age
     */
    public int getAge() {
        return age;
    }

    /**
     * @param age the age to set
     */
    public void setAge(int age) {
        this.age = age;
    }

    /**
     * @return the active
     */
    public int getActive() {
        return active;
    }

    /**
     * @param active the active to set
     */
    public void setActive(int active) {
        this.active = active;
    }

    /**
     * @return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }
    
}

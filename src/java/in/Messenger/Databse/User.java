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
import javax.persistence.Table;
import javax.persistence.Column;
import com.google.gson.annotations.SerializedName;
import com.google.gson.annotations.Expose;
import javax.persistence.IdClass;

/**
 *
 * @author Ambikeya
 */
@Entity 
@IdClass(UserId.class)
@Table(name="messengeruser")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Id
    @SerializedName("username")
    @Column(name="username", unique=true)
    public String username;
    
    @Id
    @SerializedName("email")
    @Column(name="email",unique=true)
    public String email;
    
    @SerializedName("age")
    @Column(name="age")
    public int age;
    @Id
    @SerializedName("password")
    @Column(name="password", unique=true)
    public String password;
    
    @SerializedName("name")
    @Column(name="name")
    public String name;
    
    public User(){}
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) getId();
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof User)) {
            return false;
        }
        User other = (User) object;
        if (this.getId() != other.getId()) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "in.Messenger.Databse.User[ id=" + getId() + " ]";
    }

    /**
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
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
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
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
    
}

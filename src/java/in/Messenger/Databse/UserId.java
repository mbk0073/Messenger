/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package in.Messenger.Databse;
import java.io.Serializable;
import com.google.gson.annotations.SerializedName;
/**
 *
 * @author Ambikeya
 */

public class UserId implements Serializable {
    
    @SerializedName("id")
    private int id;
    
    @SerializedName("email")
    private String email;
    
    @SerializedName("username")
    private String username;
    
    @SerializedName("password")
    private String password;
    
    public UserId(){
        
    }
    
    

    @Override
    public boolean equals(Object obj) {
        if(obj instanceof UserId){
            UserId userid = (UserId)obj;
 
            if(!(userid.getId()==id)){
                return false;
            }
 
            if(!userid.getUsername().equals(username)){
                return false;
            }
            if(!userid.getEmail().equals(email)){
                return false;
            }
            if(!userid.getPassword().equals(password)){
                return false;
            }
            return true;
        }
 
        return false;
    }
    @Override
    public int hashCode() {
        return id + username.hashCode()+password.hashCode()+email.hashCode();
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
    
    
    
}

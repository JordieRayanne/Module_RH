/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import dbaccess.PGSQLConnection;

/**
 *
 * @author Alex Razakatoanina
 */
public class Profil {
    
     int id;
     int idservice;
     String nom;
     String description;
     
    public Profil() {
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getIdservice() {
        return idservice;
    }
    public void setIdservice(int idservice) {
        this.idservice = idservice;
    }
    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    
    public static List<Profil> getProfilByIdService(int idservice) throws Exception{
        List<Profil> profils=new ArrayList<>();   
        Connection connection=PGSQLConnection.getConnection();
        String sql="SELECT * FROM profil where idservice=?";
        PreparedStatement preparedStatement=connection.prepareStatement(sql);
        preparedStatement.setInt(1,idservice);
        ResultSet resultSet=preparedStatement.executeQuery();
        while (resultSet.next()) {
            Profil profil=new Profil();
            profil.setId(resultSet.getInt("id"));
            profil.setIdservice(resultSet.getInt("idservice"));
            profil.setNom(resultSet.getString("nom"));
            profil.setDescription(resultSet.getString("description"));
            profils.add(profil);
        }        
        return profils;
    } 
    
}

package model;

import com.google.gson.annotations.SerializedName;
import java.sql.Connection;
import java.sql.PreparedStatement;

import dbaccess.PGSQLConnection;

public class Profilage{
    @SerializedName("optionId")
    int idprofil;
    @SerializedName("numberOfProfiles")
    int nombre;
    
    public Profilage(int idprofil, int nombre) {
        this.idprofil = idprofil;
        this.nombre = nombre;
    }

    public Profilage() {
    }

    public int getIdprofil() {
        return idprofil;
    }
    public void setIdprofil(int idprofil) {
        this.idprofil = idprofil;
    }
    public int getNombre() {
        return nombre;
    }
    public void setNombre(int nombre) {
        this.nombre = nombre;
    }

    public void addProfilNumber() {
    try (Connection connection = PGSQLConnection.getConnection()) {
        String sql = "INSERT INTO profilage(idprofil, nombre) VALUES(?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, this.getIdprofil()); // ID du profil
            preparedStatement.setInt(2, this.getNombre()); // Nombre
            preparedStatement.executeUpdate(); // Exécutez la requête
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
}

}
package model;

import com.google.gson.annotations.SerializedName;
import java.sql.Connection;
import java.sql.PreparedStatement;

import dbaccess.PGSQLConnection;

public class ReponseVraies {
    int id;
    @SerializedName("question")
    int idquestion;
    @SerializedName("reponse")
    String reponse;
    
    public ReponseVraies() {
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getIdquestion() {
        return idquestion;
    }
    public void setIdquestion(int idquestion) {
        this.idquestion = idquestion;
    }
    public String getReponse() {
        return reponse;
    }
    public void setReponse(String reponse) {
        this.reponse = reponse;
    }

    public void addReponseVraies() {
        try (Connection connection = PGSQLConnection.getConnection()) {
            String sql = "INSERT INTO reponse_vraies(idquestion,reponse) VALUES(?, ?)";
            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
                preparedStatement.setInt(1, this.getIdquestion()); 
                preparedStatement.setString(2, this.getReponse()); 
                preparedStatement.executeUpdate(); 
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}

package model;

import com.google.gson.annotations.SerializedName;
import java.sql.Connection;
import java.sql.PreparedStatement;

import dbaccess.PGSQLConnection;

public class OptionReponse {
    int id;
    @SerializedName("question")
    int idquestion;
    @SerializedName("reponse")
    String optionReponse;
    
    public OptionReponse() {
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
    public String getOptionReponse() {
        return optionReponse;
    }
    public void setOptionReponse(String optionReponse) {
        this.optionReponse = optionReponse;
    }

    public void addOptionReponse() {
    try (Connection connection = PGSQLConnection.getConnection()) {
        String sql = "INSERT INTO options_reponse(idquestion,option_text) VALUES(?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, this.getIdquestion()); 
            preparedStatement.setString(2, this.getOptionReponse()); 
            preparedStatement.executeUpdate(); 
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
    }
}

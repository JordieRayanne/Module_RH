package model;

import com.google.gson.annotations.SerializedName;
import com.mysql.cj.protocol.Resultset;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import dbaccess.PGSQLConnection;

public class Questionnaire {
    int id;
    @SerializedName("idprofil")
    int idprofil;
    @SerializedName("question")
    String question;
    @SerializedName("point")
    double point;

    public Questionnaire() {
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getIdprofil() {
        return idprofil;
    }
    public void setIdprofil(int idprofil) {
        this.idprofil = idprofil;
    }
    public String getQuestion() {
        return question;
    }
    public void setQuestion(String question) {
        this.question = question;
    }
    public double getPoint() {
        return point;
    }

    public void setPoint(double point) {
        this.point = point;
    }   


    public int addQuestionnaireAndGetId() {
        int id=0;
        try (Connection connection = PGSQLConnection.getConnection()) {
            String sql = "INSERT INTO Questionnaire(idprofil, question, point) VALUES(?, ?,?) RETURNING id";
            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
                preparedStatement.setInt(1, this.getIdprofil()); // ID du profil
                preparedStatement.setString(2, this.getQuestion());
                preparedStatement.setDouble(3, this.getPoint());

                ResultSet generatedKeys = preparedStatement.executeQuery();
                if (generatedKeys.next()) {
                        id = generatedKeys.getInt("id");
                    System.out.println("ID inséré : " + id);
                }
                
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return id;
    }

    // public int getIdquestion(int idprofil, String question) {
    //     int id = 0;
    //     try (Connection connection = PGSQLConnection.getConnection();
    //         PreparedStatement preparedStatement = connection.prepareStatement("SELECT id FROM questionnaire WHERE idprofil=? AND question=?")) {
            
    //         preparedStatement.setInt(1, idprofil);
    //         preparedStatement.setString(2, question);
            
    //         System.out.println("Requête SQL : " + preparedStatement.toString());
            
    //         try (ResultSet resultSet = preparedStatement.executeQuery()) {
    //             if (resultSet.next()) {
    //                 id = resultSet.getInt("id");
    //             }
    //         }
    //     } catch (SQLException e) {
    //         // Afficher les erreurs SQL
    //         System.err.println("Erreur SQL : " + e.getMessage());
    //         e.printStackTrace();
    //     }
    //     return id;
    // }


}
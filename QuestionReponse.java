package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import dbaccess.PGSQLConnection;

public class QuestionReponse {
    int id;
    String question;
    double point;
    int idProfil;
    String typeReponse;
    // String optionReponse;
    List<String> options;

    public static List<QuestionReponse> getQuestionReponse() throws Exception{
    List<QuestionReponse> questionReponses = new ArrayList<>();   
    Connection connection = PGSQLConnection.getConnection();
    String sql = "SELECT q.id_question, q.question, q.point, q.id_profil, q.type_reponse, q.option_reponse " +
                 "FROM question_reponse_view q " +
                 "LEFT JOIN reponse_vraie r ON q.id_question = r.id_question";
    PreparedStatement preparedStatement = connection.prepareStatement(sql);
    ResultSet resultSet = preparedStatement.executeQuery();
    Map<Integer, QuestionReponse> questionMap = new HashMap<>();

    while (resultSet.next()) {
        int questionId = resultSet.getInt("id_question");
        if (!questionMap.containsKey(questionId)) {
            QuestionReponse questionReponse = new QuestionReponse();
            questionReponse.setId(questionId);
            questionReponse.setQuestion(resultSet.getString("question"));
            questionReponse.setPoint(resultSet.getDouble("point"));
            questionReponse.setIdProfil(resultSet.getInt("id_profil"));
            questionReponse.setTypeReponse(resultSet.getString("type_reponse"));
            questionReponse.setOptions(new ArrayList<>());
            questionMap.put(questionId, questionReponse);
            questionReponses.add(questionReponse);
        }

        String optionReponse = resultSet.getString("option_reponse");
        if (optionReponse != null) {
            questionMap.get(questionId).getOptions().add(optionReponse);
        }
    }        

    return questionReponses;
}


    // public static List<QuestionReponse> getQuestionReponse() throws Exception{
    //     List<QuestionReponse> questionReponse=new ArrayList<>();   
    //     Connection connection=PGSQLConnection.getConnection();
    //     String sql="SELECT * FROM question_reponse_view";
    //     PreparedStatement preparedStatement=connection.prepareStatement(sql);
    //     System.out.println(preparedStatement.toString());
    //     ResultSet resultSet=preparedStatement.executeQuery();
    //     while (resultSet.next()) {
    //         QuestionReponse questionr=new QuestionReponse();
    //         questionr.setId(resultSet.getInt("id_question"));
    //         questionr.setQuestion(resultSet.getString("question"));
    //         questionr.setPoint(resultSet.getDouble("point"));
    //         questionr.setIdProfil(resultSet.getInt("id_profil"));
    //         questionr.setTypeReponse(resultSet.getString("type_reponse"));

    //         // questionr.setOptionReponse(resultSet.getString("option_reponse"));
    //         List<String> options = getOptionsForQuestion(questionr.getId());
    //         questionr.setOptions(options);
    //         questionReponse.add(questionr);
    //     }        
    //     return questionReponse;
    // }
    
    public static List<String> getOptionsForQuestion(int questionId)throws Exception{
        List<String> optionsList=new ArrayList<>();
        Connection connection=PGSQLConnection.getConnection();
        String sql="SELECT * FROM question_reponse_view where id_question=?";
        PreparedStatement preparedStatement=connection.prepareStatement(sql);
        preparedStatement.setInt(1, questionId);
        System.out.println(preparedStatement.toString());
        ResultSet resultSet=preparedStatement.executeQuery();
        while (resultSet.next()) {
            String opt=new String();
            opt=resultSet.getString("option_reponse"); 
            
            optionsList.add(opt);
        }
        return optionsList;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
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
    public int getIdProfil() {
        return idProfil;
    }
    public void setIdProfil(int idProfil) {
        this.idProfil = idProfil;
    }
    public String getTypeReponse() {
        return typeReponse;
    }
    public void setTypeReponse(String typeReponse) {
        this.typeReponse = typeReponse;
    }
    public List<String> getOptions() {
        return options;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }

    public QuestionReponse() {
    }
    // public String getOptionReponse() {
    //     return optionReponse;
    // }
    // public void setOptionReponse(String optionReponse) {
    //     this.optionReponse = optionReponse;
    // }
}

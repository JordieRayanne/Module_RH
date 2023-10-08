package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import model.Questionnaire;

public class QuestionnaireController extends HttpServlet{
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        try {
            // Votre traitement ici, si nécessaire
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        BufferedReader reader = request.getReader();
        Gson gson = new Gson();
        Questionnaire questionnaire = gson.fromJson(reader, Questionnaire.class);
        
        int id=questionnaire.addQuestionnaireAndGetId();
        questionnaire.setId(id);

//--------- renvoyer id en format json à travers un url--------------
        // JsonObject jsonResponse = new JsonObject();
        // jsonResponse.addProperty("id", id);
        // String json = new Gson().toJson(jsonResponse);
    
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print(gson.toJson(questionnaire));
        out.flush();
// --------------------------end--------------------------------------

        // int id=questionnaire.getIdquestion(questionnaire.getIdprofil(),questionnaire.getQuestion());
        // System.out.println("ID :"+id);

        System.out.println("Données reçues depuis React :");
        System.out.println("profil : " + questionnaire.getIdprofil());
        System.out.println("question : " + questionnaire.getQuestion());

        // Créez une réponse JSON
        // response.setContentType("application/json");
        // out.print("{\"status\": \"success\"}");
        // out.flush();

        // Répondez à la requête avec un statut OK
        response.setStatus(HttpServletResponse.SC_OK);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    public String getServletInfo() {
        return "Short description";
    }
    
}

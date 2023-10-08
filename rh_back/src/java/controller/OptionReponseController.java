package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

import model.OptionReponse;
import model.ReponseVraies;

public class OptionReponseController extends HttpServlet{
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        try {

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        BufferedReader reader=request.getReader();
        Gson gson=new Gson();
        String jsonData = reader.readLine();

        // Transformez la chaîne JSON en une liste d'objets ReponseVraies
        List<OptionReponse> reponses = gson.fromJson(jsonData, new TypeToken<List<OptionReponse>>() {}.getType());

        for (OptionReponse reponse : reponses) {

            // Créez un nouvel objet OptionReponse avec l'idquestion et la réponse
            OptionReponse optionReponse = new OptionReponse();
            optionReponse.setIdquestion(reponse.getIdquestion());
            optionReponse.setOptionReponse(reponse.getOptionReponse());
            optionReponse.addOptionReponse();

        }
    }

    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    
}

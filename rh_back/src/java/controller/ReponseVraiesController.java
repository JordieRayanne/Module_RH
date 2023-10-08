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
import java.io.PrintWriter;
import java.nio.Buffer;
import java.util.List;

import model.Profil;
import model.ReponseVraies;

public class ReponseVraiesController extends HttpServlet{

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
    
    @Override
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
        List<ReponseVraies> reponses = gson.fromJson(jsonData, new TypeToken<List<ReponseVraies>>() {}.getType());

        for (ReponseVraies reponse : reponses) {

            // Créez un nouvel objet ReponseVraies avec l'idquestion et la réponse
            ReponseVraies reponseVraies = new ReponseVraies();
            reponseVraies.setIdquestion(reponse.getIdquestion());
            reponseVraies.setReponse(reponse.getReponse());
            reponseVraies.addReponseVraies();

        }
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
   

}

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

import model.Profilage;

public class ProfilageController extends HttpServlet {

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
        Profilage profilData = gson.fromJson(reader, Profilage.class);

        //profilData.addProfilNumber();
    
        System.out.println("Données reçues depuis React :");
        System.out.println("Option ID : " + profilData.getIdprofil());
        System.out.println("Nombre de profils : " + profilData.getNombre());

        // Créez une réponse JSON
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print("{\"status\": \"success\"}");
        out.flush();

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

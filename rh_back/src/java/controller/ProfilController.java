package controller;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.List;
import model.Profil;
import com.google.gson.Gson;
import java.io.PrintWriter;

public class ProfilController extends HttpServlet{

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        try {
        List<Profil> profils = Profil.getProfilByIdService(1); // Implement this method to fetch services
        Gson gson = new Gson();
        String profilsJson = gson.toJson(profils);

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print(profilsJson);
        out.flush();
    } catch (Exception e) {
        e.printStackTrace();
        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
    }
    }
    
    private String convertServicesToJson(List<Profil> profils) {
            try {
                // Initialize the Gson instance
                Gson gson = new Gson();

                // Convert the list of services to JSON string
                String json = gson.toJson(profils);

                return json;
            } catch (Exception e) {
                e.printStackTrace();
                return e.getMessage(); // Handle the exception or return an error message
            }
        }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    
}

package controller;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import model.Personnels;
import model.QuestionReponse;

public class QuestionReponseController extends HttpServlet{

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

            try {
                List<QuestionReponse> questionReponses = QuestionReponse.getQuestionReponse();
                Gson gson = new Gson();
                String questionReponsesJson = gson.toJson(questionReponses);

                response.setContentType("application/json");
                PrintWriter out = response.getWriter();
                out.print(questionReponsesJson);
                out.flush();
            } catch (Exception e) {
                e.printStackTrace();
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            }
}

    
    private String convertServicesToJson(List<Personnels> personnels) {
            try {
                // Initialize the Gson instance
                Gson gson = new Gson();

                // Convert the list of services to JSON string
                String json = gson.toJson(personnels);

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
    }

    
}

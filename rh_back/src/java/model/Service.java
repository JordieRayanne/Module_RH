package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import dbaccess.PGSQLConnection;

public class Service {

    private int id;
    private String nom;

    public Service() {
        // Default constructor
    }

    public Service(String nom) {
        this.nom = nom;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    // Create a new service record
    public void createService() {
        try (Connection connection = PGSQLConnection.getConnection()) {
            String sql = "INSERT INTO service (nom) VALUES (?)";
            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
                preparedStatement.setString(1, this.nom);
                preparedStatement.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Read all service records
    public static List<Service> getAllServices() throws Exception{
        List<Service> services = new ArrayList<>();
        Connection connection = PGSQLConnection.getConnection();
        String sql = "SELECT id, nom FROM service";
        PreparedStatement preparedStatement = connection.prepareStatement(sql);
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()) {
            Service service = new Service();
            service.setId(resultSet.getInt("id"));
            service.setNom(resultSet.getString("nom"));
            services.add(service);
        }
        return services;
    }

    // Update a service record by ID
    public void updateService() {
        try (Connection connection = PGSQLConnection.getConnection()) {
            String sql = "UPDATE service SET nom = ? WHERE id = ?";
            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
                preparedStatement.setString(1, this.nom);
                preparedStatement.setInt(2, this.id);
                preparedStatement.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Delete a service record by ID
    public void deleteService() {
        try (Connection connection = PGSQLConnection.getConnection()) {
            String sql = "DELETE FROM service WHERE id = ?";
            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
                preparedStatement.setInt(1, this.id);
                preparedStatement.executeUpdate();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

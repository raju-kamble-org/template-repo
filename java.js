import java.sql.*;

public class SQLInjection {
    public static void main(String[] args) {
        String username = args[0];
        String password = args[1];
        
        String query = "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'";
        
        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase", "root", "password");
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            
            // Process the result set
            while (resultSet.next()) {
                // Do something
            }
            
            resultSet.close();
            statement.close();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

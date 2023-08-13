package app.model.Users;

public interface Association{
    String extractCode(String mail);
    boolean checkRole();
}

package app.service;


import app.model.Users.User;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

public interface UserService {
    User create(User user);
    User update(String code, User user);
    void delete(String name);
    List<User> findAll();
    List<User> findByName(String userName);


}
package app.service;


import app.model.Users.User;

public interface UserService {
    User create(User user);
    User update(Long id, User user);
    void delete(Long id);
    Iterable<User> findAll();
    User findById(Long id);

}
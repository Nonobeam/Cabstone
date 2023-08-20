package app.service;


//import app.model.Users.Role;
import app.model.Users.User;
//import app.repository.RoleRepository;
import app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.List;


@Service
public class UserServiceInterface implements UserService{

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private RoleRepository roleRepository;


    @Override
    public User create(User user) {
        return userRepository.save(user);
    }

    @Override
    public User update(String code, User user) {
        return null;
    }

    @Override
    public void delete(String name) {

    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public List<User> findByName(String userName) {
        return userRepository.findByName(userName);
    }

}
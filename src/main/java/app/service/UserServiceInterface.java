package app.service;


import app.model.Users.User;
import app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceInterface implements UserService{
    @Autowired
    private UserRepository userRepository;
//
//    @Autowired
//    public void LoginService(StudentRepository userRepository) {
//        this.userRepository = userRepository;
//    }

//    public boolean isValidUser(String username, String password) {
//        Student user = userRepository.findByStudentname(username);
//        return user != null && user.getPassword().equals(password);
//    }

    @Override
    public User create(User user) {
        if (user.getMail() == null || user.getMail().isEmpty()) {
            return null;
        }
        if (user.getName() == null || user.getName().isEmpty()) {
            return null;
        }
        return userRepository.save(user);
    }

    @Override
    public User update(Long id, User user) {
        User UpdateDB = userRepository.findById(id).orElse(null);
        if (UpdateDB == null){
            return null;
        }

        UpdateDB.setName(user.getName());
        UpdateDB.setAge(user.getAge());
        UpdateDB.setMail(user.getMail());

        return userRepository.save(UpdateDB);
    }

    @Override
    public void delete(Long id){
        userRepository.deleteById(id);
    }

    @Override
    public Iterable<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }


}
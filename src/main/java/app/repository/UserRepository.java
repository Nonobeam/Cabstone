package app.repository;

//import app.model.Users.Role;
import app.model.Users.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
    List<User> findByName(String userName);

//    @Query("{name:'?0'}")
//    User findUserByUsername(String username);
}
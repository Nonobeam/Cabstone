package app.controller.userController;


import app.model.Users.User;
import app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class PathController {

	@Autowired
	private UserService userService;

	@GetMapping
	public List<User> getAllUsers(){
		return (List<User>) userService.findAll();
	}

//	@DeleteMapping
//	public void delete(String name){
//		userService.delete(user.getName());
//	}
//
//	@PutMapping("/{id}")
//	public User update(@RequestBody User user) {
//		return userService.update(user.getName(), user);
//	}
//
//	@GetMapping("/allAlumni")
//	public Iterable<User> findAll(){
//		return userService.findAll();
//	}
//
//	@GetMapping("/{id}")
//	public User findById (@PathVariable Long id) {
//		return userService.findById(id);
//	}
}
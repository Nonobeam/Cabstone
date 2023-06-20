package app.controller.userController;


import app.model.User;
import app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class PathController {

	@Autowired
	private UserService userService;

	@PostMapping
	public User create(@RequestBody User user){
		return userService.create(user);
	}

	@DeleteMapping
	public void delete(Long id){
		userService.delete(id);
	}

	@PutMapping("/{id}")
	public User update(@PathVariable Long id, @RequestBody User user) {
		return userService.update(id, user);
	}

	@GetMapping("/allAlumni")
	public Iterable<User> findAll(){
		return userService.findAll();
	}

	@GetMapping("/{id}")
	public User findById (@PathVariable Long id) {
		return userService.findById(id);
	}
}
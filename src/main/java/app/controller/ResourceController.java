package app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourceController {

    @GetMapping("/dev/home")
    public String home(){
        return "Hello, Home!";
    }

    @GetMapping("/dev/secured")
    public String secured(){
        return "Hello, Secured!";
    }

}

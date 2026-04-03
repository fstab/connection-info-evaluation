package com.example.demo;

import jakarta.servlet.Filter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collections;

@SpringBootApplication
@RestController
public class HelloWorldService {

    @GetMapping(path = "/", produces = "text/plain")
    public String sayHello() {
        return "Hello, World!\n";
    }

    @Bean
    public Filter loggingFilter() {
        return (request, response, chain) -> {
            var req = (HttpServletRequest) request;
            var res = (HttpServletResponse) response;
            System.out.println("> " + req.getMethod() + " " + req.getRequestURI());
            Collections.list(req.getHeaderNames()).forEach(name ->
                System.out.println("> " + name + ": " + req.getHeader(name)));
            chain.doFilter(request, response);
            res.getHeaderNames().forEach(name ->
                System.out.println("< " + name + ": " + res.getHeader(name)));
            System.out.println();
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldService.class, args);
    }
}

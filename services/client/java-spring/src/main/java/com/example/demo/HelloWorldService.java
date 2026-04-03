package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@SpringBootApplication
@RestController
public class HelloWorldService {

    private final RestClient restClient = RestClient.builder()
        .requestInterceptor((req, body, execution) -> {
            System.out.println("> " + req.getMethod() + " " + req.getURI());
            req.getHeaders().forEach((name, values) ->
                System.out.println("> " + name + ": " + String.join(", ", values)));
            var response = execution.execute(req, body);
            response.getHeaders().forEach((name, values) ->
                System.out.println("< " + name + ": " + String.join(", ", values)));
            System.out.println();
            return response;
        })
        .build();

    @GetMapping(path = "/", produces = "text/plain")
    public String call(@RequestParam("target_url") String targetUrl) {
        try {
            restClient.get().uri(targetUrl).retrieve().toBodilessEntity();
            return "Success\n";
        } catch (Exception e) {
            return "Error\n";
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldService.class, args);
    }
}

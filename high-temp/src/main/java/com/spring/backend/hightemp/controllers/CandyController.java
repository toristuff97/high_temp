package com.spring.backend.hightemp.controllers;

import org.springframework.web.bind.annotation.*;
import com.spring.backend.hightemp.models.Candy;
import com.spring.backend.hightemp.service.CandyService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;

@RestController
@CrossOrigin
@RequestMapping(value = "/candy")
public class CandyController {
    @Autowired
    private CandyService candyService;

    @GetMapping
    public Iterable<Candy> listCandy() {
        return candyService.listCandy();
    }

    @PostMapping("/candy")
    public Candy createCandy(@RequestBody Candy newCandy){
        return candyService.createCandy(newCandy);
    }

//    @DeleteMapping("candy/{id}")
//    public HttpStatus deleteCandyById(@PathVariable Long id) {
//        return candyService.deleteCandyById(id);
//    }
}

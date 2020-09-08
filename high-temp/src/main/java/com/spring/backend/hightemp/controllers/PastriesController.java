package com.spring.backend.hightemp.controllers;

import org.springframework.web.bind.annotation.*;
import com.spring.backend.hightemp.models.Pastries;
import com.spring.backend.hightemp.service.PastriesService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;

@RestController
@CrossOrigin
@RequestMapping(value = "/pastries")
public class PastriesController {
    @Autowired
    private PastriesService pastriesService;

    @GetMapping
    public Iterable<Pastries> listPastries() {
        return pastriesService.listPastries();
    }

    @PostMapping
    public Pastries createPastries(@RequestBody Pastries Pastries){
        return pastriesService.createPastries(Pastries);
    }

//    @DeleteMapping("pastries/{id}")
//    public HttpStatus deletePastriesById(@PathVariable Long id) {
//        return pastriesService.deletePastriesById(id);
//    }
}

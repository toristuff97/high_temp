package com.spring.backend.hightemp.controllers;

import org.springframework.web.bind.annotation.*;
import com.spring.backend.hightemp.models.Kits;
import com.spring.backend.hightemp.service.KitsService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;

@RestController
@CrossOrigin
@RequestMapping(value = "/kits")
public class KitsController {
    @Autowired
    private KitsService kitsService;

    @GetMapping
    public Iterable<Kits> listKits() {
        return kitsService.listKits();
    }

    @PostMapping
    public Kits createKits(@RequestBody Kits Kits){
        return kitsService.createKits(Kits);
    }

//    @DeleteMapping("kits/{id}")
//    public HttpStatus deleteKitsById(@PathVariable Long id) {
//        return kitsService.deleteKitsById(id);
//    }
}


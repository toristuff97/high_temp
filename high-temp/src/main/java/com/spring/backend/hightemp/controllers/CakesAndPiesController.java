package com.spring.backend.hightemp.controllers;

import com.spring.backend.hightemp.models.CakesAndPies;
import com.spring.backend.hightemp.service.CakesAndPiesService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/cakes_and_pies")
public class CakesAndPiesController {
    @Autowired
    private CakesAndPiesService cakesAndPiesService;

    @GetMapping
    public Iterable<CakesAndPies> listCakesAndPies() {
        return cakesAndPiesService.listCakesAndPies();
    }
// @GetMapping("/hightemp/cakes_and_pies")

    @PostMapping
    public CakesAndPies createCakesAndPies(@RequestBody CakesAndPies CakesAndPies){
        return cakesAndPiesService.createCakesAndPies(CakesAndPies);
    }

//    @DeleteMapping("cakes_and_pies/{id}")
//    public HttpStatus deleteCakesAndPiesById(@PathVariable Long id) {
//        return cakesAndPiesService.deleteCakesAndPiesById(id);
//    }

}

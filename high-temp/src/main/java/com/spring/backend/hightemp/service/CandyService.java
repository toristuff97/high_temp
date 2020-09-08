package com.spring.backend.hightemp.service;

import com.spring.backend.hightemp.models.Candy;
import com.spring.backend.hightemp.respositories.CandyRepo;
//import org.springframework.http.HttpStatus;

public interface CandyService {
    public Iterable<Candy> listCandy();
    public Candy createCandy(Candy candy);
//    public HttpStatus deleteCandyById(Long id);
}

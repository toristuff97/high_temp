package com.spring.backend.hightemp.service;

import com.spring.backend.hightemp.models.Candy;
import com.spring.backend.hightemp.respositories.CandyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;

@Service
public class CandyImpl implements CandyService{
    @Autowired
    CandyRepo candyRepo;

    @Override
    public Iterable<Candy> listCandy() {
        return candyRepo.findAll();
    }

        @Override
    public Candy createCandy(Candy candy){
        return candyRepo.save(candy);
    }

        @Override
    public HttpStatus deleteCandyById(Long id) {
        candyRepo.deleteById(id);
        return HttpStatus.OK;
    }
}

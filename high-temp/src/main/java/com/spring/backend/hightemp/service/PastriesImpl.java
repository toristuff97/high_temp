package com.spring.backend.hightemp.service;

import com.spring.backend.hightemp.models.Pastries;
import com.spring.backend.hightemp.respositories.PastriesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.http.HttpStatus;

@Service
public class PastriesImpl implements PastriesService{
    @Autowired
    PastriesRepo pastriesRepo;

    @Override
    public Iterable<Pastries> listPastries() {
        return pastriesRepo.findAll();
    }

    @Override
    public Pastries createPastries(Pastries pastries){
        return pastriesRepo.save(pastries);
    }

//    @Override
//    public HttpStatus deletePastriesById(Long id) {
//        pastriesRepo.deleteById(id);
//        return HttpStatus.OK;
//    }
}

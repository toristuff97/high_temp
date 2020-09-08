package com.spring.backend.hightemp.service;

import com.spring.backend.hightemp.models.Pastries;
import com.spring.backend.hightemp.respositories.PastriesRepo;
//import org.springframework.http.HttpStatus;

public interface PastriesService {
    public Iterable<Pastries> listPastries();
    public Pastries createPastries(Pastries pastries);
//    public HttpStatus deletePastriesById(Long id);
}

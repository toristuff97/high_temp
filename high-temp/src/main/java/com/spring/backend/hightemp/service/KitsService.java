package com.spring.backend.hightemp.service;

import com.spring.backend.hightemp.models.Kits;
import com.spring.backend.hightemp.respositories.KitsRepo;
//import org.springframework.http.HttpStatus;

public interface KitsService {
    public Iterable<Kits> listKits();
    public Kits createKits(Kits kits);
//    public HttpStatus deleteKitsById(Long id);
}

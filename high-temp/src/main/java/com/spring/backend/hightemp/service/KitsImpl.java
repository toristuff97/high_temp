package com.spring.backend.hightemp.service;

import com.spring.backend.hightemp.models.Kits;
import com.spring.backend.hightemp.respositories.KitsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.http.HttpStatus;

@Service
public class KitsImpl implements KitsService{
    @Autowired
    KitsRepo kitsRepo;

    @Override
    public Iterable<Kits> listKits() {
        return kitsRepo.findAll();
    }

    @Override
    public Kits createKits(Kits kits){
        return kitsRepo.save(kits);
    }

//    @Override
//    public HttpStatus deleteKitsById(Long id) {
//        kitsRepo.deleteById(id);
//        return HttpStatus.OK;
//    }
}

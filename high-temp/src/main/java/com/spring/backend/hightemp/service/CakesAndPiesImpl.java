package com.spring.backend.hightemp.service;

import com.spring.backend.hightemp.models.CakesAndPies;
import com.spring.backend.hightemp.respositories.CakesAndPiesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;

@Service
public class CakesAndPiesImpl implements CakesAndPiesService{

    @Autowired
    CakesAndPiesRepo cakesAndPiesRepo;

    @Override
    public Iterable<CakesAndPies> listCakesAndPies() {
        return cakesAndPiesRepo.findAll();
    }

    @Override
    public CakesAndPies createCakesAndPies(CakesAndPies cakesAndPies){
        return cakesAndPiesRepo.save(cakesAndPies);
    }

    @Override
    public HttpStatus deleteCakesAndPiesById(Long id) {
        cakesAndPiesRepo.deleteById(id);
        return HttpStatus.OK;
    }

}

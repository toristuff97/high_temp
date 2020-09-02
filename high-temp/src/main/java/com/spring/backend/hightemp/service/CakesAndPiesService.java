package com.spring.backend.hightemp.service;

import com.spring.backend.hightemp.models.CakesAndPies;
import com.spring.backend.hightemp.respositories.CakesAndPiesRepo;
import org.springframework.http.HttpStatus;

public interface CakesAndPiesService {
    public Iterable<CakesAndPies> listCakesAndPies();
    public CakesAndPies createCakesAndPies(CakesAndPies cakesAndPies);
    public HttpStatus deleteCakesAndPiesById(Long id);
}

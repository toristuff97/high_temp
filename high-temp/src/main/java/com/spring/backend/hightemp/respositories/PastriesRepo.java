package com.spring.backend.hightemp.respositories;

import com.spring.backend.hightemp.models.Pastries;
import org.springframework.data.repository.CrudRepository;

public interface PastriesRepo extends CrudRepository<Pastries, Long> {

}

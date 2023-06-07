package com.quest.ValidationSpring.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.quest.ValidationSpring.model.Student;

@Repository
public interface StudentRepository extends MongoRepository<Student, Integer>
{

	List<Student> findAllByName(String name);

}

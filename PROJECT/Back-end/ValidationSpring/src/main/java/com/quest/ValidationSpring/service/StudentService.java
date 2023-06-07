package com.quest.ValidationSpring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quest.ValidationSpring.model.Student;
import com.quest.ValidationSpring.repository.StudentRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class StudentService implements IStudentRepo
{

	@Autowired
	private StudentRepository repository;
	
	
	@Override
	public Student create(Student stud) {
//		stud.setId(SequenceGeneratorService.generateSequence(Student.SEQUENCE_NAME));
		return repository.save(stud);
	}

	@Override
	public List<Student> findAllByName(String name) {
        List<Student> studList = repository.findAllByName(name);
		return studList;
	}

	@Override
	public List<Student> findAll() {
	
		return repository.findAll();
	}

}

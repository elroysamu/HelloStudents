package com.quest.ValidationSpring.controller;

import java.util.List;


import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quest.ValidationSpring.model.SequenceGenerator;
import com.quest.ValidationSpring.model.Student;
import com.quest.ValidationSpring.service.AdmissionNumberGenerator;
import com.quest.ValidationSpring.service.IStudentRepo;

@RestController
@CrossOrigin
public class StudentController 
{

	@Autowired
	private IStudentRepo service;
	
	@Autowired
	private AdmissionNumberGenerator service1;
	
	 @PostMapping("/create")
	    public Student create(@Valid @RequestBody Student stud)
	 {
		 String admissionNumber = service1.generateAdmissionNumber();
		 stud.setId(UUID.randomUUID().toString());
		 stud.setAdmn(admissionNumber);
	        return service.create(stud);
	
	    }
	 
	   @GetMapping("/all")
	    public List<Student> getAllStudent(){
	        return service.findAll();
	    }
}

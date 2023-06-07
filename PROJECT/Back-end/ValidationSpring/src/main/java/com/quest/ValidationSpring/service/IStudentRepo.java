package com.quest.ValidationSpring.service;

import java.util.List;



import com.quest.ValidationSpring.model.Student;

public interface IStudentRepo 
{
	Student create(Student stud);

    List<Student> findAllByName(String name);

    List<Student> findAll();

//    void delete(String id);
//
//    Task update(Task task);
//
//    Task findById(String id);
}

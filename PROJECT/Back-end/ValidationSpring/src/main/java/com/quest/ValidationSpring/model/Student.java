package com.quest.ValidationSpring.model;


import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "student_details")
public class Student 
{

	@Transient
	public static final String SEQUENCE_NAME="seq";
	@Id
	private String id;
	
//	@NotNull
//	@NotEmpty
//	@Size(min = 2, max = 20)
//	@Pattern(regexp = "[a-zA]+",message = "Name should be contain Alphabets")
	@NotNull
	@NotEmpty
	@Size(min = 3, max = 45)
	@Pattern(regexp = "[a-zA-Z]+")
	private String name;
	
	
//	@NotNull(message = "Date of birth is required")
	@NotEmpty
	@NotNull
	private String dob;
	
//	@Pattern(regexp = "[a-zA-Z0-9]+",message = "Invalid Format for Class")
	@Pattern(regexp = "[a-zA-Z1-9]+")
	@NotNull
	@NotEmpty
	private String cls;
	
	
	@NotNull
	@NotEmpty
	@Pattern(regexp = "[a-zA-Z]+")
	private String division;

	private String admn;
	
//	@Size(min = 4, max = 6)
//	@Pattern(regexp = "[a-zA]+",message = "Invalid Format for Gender")
	@NotNull
	@NotEmpty
	private String gender;
	
	
	
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getCls() {
		return cls;
	}
	public void setCls(String cls) {
		this.cls = cls;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	public String getAdmn() {
		return admn;
	}
	public void setAdmn(String admn) {
		this.admn = admn;
	}
	

}

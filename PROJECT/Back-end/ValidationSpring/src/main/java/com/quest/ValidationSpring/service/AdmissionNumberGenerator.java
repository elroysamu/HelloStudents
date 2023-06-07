package com.quest.ValidationSpring.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import com.quest.ValidationSpring.model.SequenceGenerator;

@Service
public class AdmissionNumberGenerator 
{
	private static final String ADMISSION_NUMBER_PREFIX = "R-";
    private static final String ADMISSION_NUMBER_SEQUENCE_KEY = "admissionNumberSequence";

    @Autowired
    private MongoOperations mongoOperations;

    public String generateAdmissionNumber() {
    	SequenceGenerator sequence = mongoOperations.findAndModify(
                query(where("_id").is(ADMISSION_NUMBER_SEQUENCE_KEY)),
                new Update().inc("sequence", 1),
                options().returnNew(true).upsert(true),
                SequenceGenerator.class
        );
        
        String admissionNumberSuffix = String.format("%03d", sequence.getSequence());
        return ADMISSION_NUMBER_PREFIX + admissionNumberSuffix;
    }
}

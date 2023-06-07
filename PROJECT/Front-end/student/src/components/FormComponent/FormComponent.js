import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const FormComponent = ({setDataChanged, dataChanged}) =>{
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [selectedClass, setselectedClass] = useState('');
    const [selectedDivision, setSelectedDivision] = useState('');
    const [gender, setGender] = useState('');
    const [validName, setValidName] = useState('');
    const [validClass, setValidClass] = useState('');
    const [validGender, setValidGender] = useState('');
    const [validDate, setValidDate] = useState('');
    const [validDivision, setValidDivision] = useState('');

    const handleNameChange = (e) =>{
        e.preventDefault();
        setValidName(true)
        setName(e.target.value)

    };
    const handleDOBChange = (e) =>{
        e.preventDefault();
        setValidDate(true)
        setDateOfBirth(e.target.value)
    };
    const handleClassChange = (e) =>{
        e.preventDefault();
        setValidClass(true)
        setselectedClass(e.target.value)
    };
    const handleDivisionChange = (e) =>{
        e.preventDefault();
        setValidDivision(true)
        setSelectedDivision(e.target.value)
    };
    const handleGenderChange = (e) =>{
        e.preventDefault();
        setValidGender(true)
        setGender(e.target.value)
    };


    const handleSubmit = (e) =>{
        e.preventDefault ();//preventing page from refreshing 

        const regex = /^[a-zA-Z\s]+$/;
        if(!regex.test(name) || name ===  '' || name.length < 3){
            setValidName(false)
            return
        }
        else{
            setValidName(true)
        }
        if (dateOfBirth ===""){
            setValidDate(false)
            return
        }
        else {
            setValidClass(true)
        }
        if(selectedDivision === ""){
            setValidDivision(false)
            return
        }
        else {
            setValidDivision(true)
        }
        if(gender === "") {
            setValidGender(false)
            return
        }
        else {
            setValidGender(true)
        }

        const data = {
            'name': name,
            'dob': dateOfBirth,
            'cls': selectedClass,
            'division': selectedDivision,
            'gender': gender.toLowerCase()
        }
        console.log(data)
        const url = "http://localhost:8080/create"
        axios.post(url,data)
        .then((res) =>{
            setName("")
            setDateOfBirth("")
            setGender("")
            setselectedClass("")
            setSelectedDivision("")
            toast.success('User Added Successfully',{
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setDataChanged(!dataChanged)
        })
        .catch((err)=>{
            console.log(err);
            toast.error('Failed user registration',{
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHower: false,
                graggable: true,
                progress: undefined,
                theme: "light",
            })
        })
    };
    return (
        <div className = 'form_wrapper col-md-6 col-sm-12'>
            <ToastContainer/>
            <form>
                <div className = "mb-3">
                    <label htmlFor = "name" className = "form-label">Name</label>
                    <input type = "text" className = "form-control" id = "name" value={name} onChange={handleNameChange} placeholder='Name e.g: "john'/>
                    {
                        validName? "": <span className='danger_text'><p>Enter a valid name</p></span>
                    }
                </div>
                <div className='mb-3'>
                    <label htmlFor = "date" className="form-label">Date of Birth</label>
                    <input type="date" value = {dateOfBirth} onChange = {handleDOBChange} className = "form-control" id="date"/>
                    {
                        validDate? "": <span className = 'danger_text'><p>select a valid date</p></span>
                    }
                </div>
                <div className = "mb-3">
                    <label htmlFor = "class" className = "form-label">Class</label>
                    <select id = "class" value={selectedClass} onChange = {handleClassChange}>
                        <option value = "">Select Class</option>
                        <option value = "I">I</option>
                        <option value = "II">II</option>
                        <option value = "III">III</option>
                        <option value = "IV">IV</option>
                        <option value = "V">V</option>
                        <option value = "VI">VI</option>
                        <option value = "VII">VII</option>
                        <option value = "VIII">VIII</option>
                        <option value = "IX">IX</option>
                        <option value = "X">X</option>
                        <option value = "XI">XI</option>
                        <option value = "XII">XII</option>
                    </select>
                    {
                        validClass ? "": <span className = 'danger_text'><p>Select a valid class</p></span>
                    }
                </div>
                <div className= "mb-3">
                    <label htmlFor = "division" className = "form-label">Division</label>
                    <select id = "division" className = "form-select" value = {selectedDivision} onChange={handleDivisionChange}>
                        <option value = "">Select Division</option>
                        <option value = "A">A</option>
                        <option value = "B">B</option>
                        <option value = "C">C</option>
                    </select>
                    {
                        validDivision ? "": <span className = "danger_text"><p>select a valid division</p></span>
                    }
                </div>
                <div className = 'mb-5'>
                    <label htmlFor = "gender" className='form-label'>Gender</label>
                    <div className = 'd-flex align-items-center'>
                        <div className = 'radio_btn'>
                            <input
                                className = 'radio_input'
                                type = "radio"
                                id = "male"
                                value = "Male"
                                checked = {gender === 'Male'}
                                onChange = {handleGenderChange}
                                required
                            />
                            <label htmlFor = "male">Male</label>
                        </div>
                        <div>
                            <input
                                className = 'radio_input'
                                type = "radio"
                                id = "female"
                                value = "Female"
                                checked = {gender === 'Female'}
                                onChange = {handleGenderChange}
                                required
                            />
                            <label htmlFor = "female">Female</label>
                        </div>
                    </div>
                    {
                        validGender ? "":<span className = "danger_text"><p>select a valid gender</p></span>
                    }
                </div>
                <div className = 'mb-3 d-flex justify-content-center'>
                    <button onClick={handleSubmit} className = 'btn btn-success lg'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent




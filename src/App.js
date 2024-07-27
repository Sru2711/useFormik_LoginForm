import React, {useState} from 'react';
import Location from "./Component/Location";
import "./App.css";
import { Formik, Field,ErrorMessage, Form, FieldArray, useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Col, Input, Row } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import "./Component/sweetalert.css"

function App() {
  const [newDiv, setNewDiv]=useState(false);
  const [gender,setGender]=useState(
    [
      {id:1, gender: "Female"},
      {id:2, gender:"Male"},
      {id:3,gender:"Other"}
    ]
  )
  const initialValues = {
    fname: '',
    lname: "",
    uname: "",
    email: '',
    password: '',
    confirmpassword: "",
    phno: "",
    gender:"",
    location: []
  }
  const validationSchema = Yup.object({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    uname: Yup.string().required("User name is required"),
    email: Yup.string().required("Email is required"),
    gender: Yup.string().required("Mention Gender , it is required"),
    password: Yup.string().required("Password is required").min(8, "Password should have 8 characters"),
    confirmpassword: Yup.string().required("Confirm your Password").oneOf([Yup.ref('password')], "Password does not match"),
    phno: Yup.number().required("Number is required").min(9, "Phone Number should have 10 digits"),
  
    
    
  })  
  const onSubmit = (values) => {
    localStorage.setItem('fname', values.fname)
    localStorage.setItem('lname', values.lname)
    localStorage.setItem('uname', values.uname)
    localStorage.setItem('password', values.password)
    localStorage.setItem('confirmpassword', values.confirmpassword)
    localStorage.setItem('phno', values.phno)
    localStorage.setItem('email', values.email);
    localStorage.setItem('gender', values.gender);
    localStorage.setItem('location',values.location.country,values.location.city,values.location.address1,values.location.pincode)
    Swal.fire({title:"Form Succesfully Submitted",
    confirmButtonColor:"#163146",});
  }
  const alertPopUp =(values) => {
    if(newDiv) {
      const emptyKey=Object.entries(values);
      const keyValues = Object.entries(values);
           keyValues.map((fvalue)=> {
            if(fvalue[1]==="") {
  
              Swal.fire({title:"Please Fill all the input fields",
              icon: "error",
              iconColor:"#76a98c",
              confirmButtonText: "Ok",
              confirmButtonColor: "#163146",
              customClass: {
                popup: "custom-popup-class", 
              },
             });
              setNewDiv(false);
            }
            });
    }
    
 
  }
  //console.log(useFormik);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validate={(values)=>{console.log(values) ; alertPopUp(values)}}
    > 
    
      <Form >
      <link rel="stylesheet" href="sweetalert.css"></link>
        <div className="outer-div">
          <div className="primary-div"></div>
          {
            newDiv ? 
            <Location 
            FieldArray={FieldArray}
            newDiv={newDiv}
            setNewDiv={setNewDiv}
            /> 
            :
            <div className="secondary-div">
            <h1>SignUp Form</h1>
            <Row className="mb-3 inputRow fixed-botton">
              <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
                <Field
                  className="input"
                  name="fname"
                  placeholder="First Name"
                  type="text"
                />
                <span className='errors'>
                  <ErrorMessage
                    name="fname"
                    className='errors'
                  />
                </span>
              </Col>
              <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
                <Field
                  className="input"
                  name="lname"
                  placeholder="Last Name"
                  type="text"

                />
                <span className='errors'>
                <ErrorMessage
                  name="lname"
                 
                />
                </span>
              </Col>
            </Row>
            <Row className="mb-3 inputRow ">
              <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
                <Field
                  className="input"
                  name="uname"
                  placeholder="User Name"
                  type="text"

                />
                <span className='errors'>
                <ErrorMessage
                  name="uname"
                 
                />
                </span>
              </Col>
              <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
                <Field
                  className="input"
                  name="email"
                  placeholder="Email"
                  type="email"

                />
               <span className='errors'>
                <ErrorMessage
                  name="email"
                 
                />
                </span>
              </Col>
            </Row>
            <Row className="mb-3 inputRow">
            <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
                <Field
                  as="select"
                  name="gender"
                  placeholder="Gender"
                  className="input"
                >
                <option className="select" value={""}>Select Gender</option>

                { 
                    gender.map(genders => (
                    <option key={genders.id} value={genders.value}>
                      {genders.gender}
                    </option>
                ))}
                
                </Field>
                <span className='errors'>
                <ErrorMessage
                  name="gender"
                />
                </span>
              </Col>
              <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
                <Field
                  className="input"
                  name="phno"
                  placeholder="Phone Number"
                  type="number"

                />
                <span className='errors'>
                <ErrorMessage
                  name="phno"
                 
                />
                </span>
              </Col>
            </Row>
                {/* <Row className="mb-3 inputRow">
                  <Col>
                  <Field
                    type="checkbox"
                    name="checkbox"
                  />
                  </Col> 
                </Row> */}
              <Row className="mb-3 inputRow">
              <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
                <Field
                  className="input"
                  name="password"
                  placeholder="Password"
                  type="password"

                />
                <span className='errors'>
                <ErrorMessage
                  name="password"
                 
                />
                </span>
              </Col> 
              <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
                <Field
                  className="input"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  type="password"

                />
                <span className='errors'>
                <ErrorMessage
                  name="confirmpassword"
                 
                />
                </span>
              </Col>
            </Row>
            <Row className="mb-3 fullWidth button">
              
            <FontAwesomeIcon icon={faArrowRight} className="fontawesome"
             onClick={() => 
              {
                 setNewDiv(true);
              }}/>

            </Row>
            
          </div>
          }
          
          
          <div className="inner-div"></div>
         
        </div>
      </Form>
      
    </Formik>
  );
}

export default App;

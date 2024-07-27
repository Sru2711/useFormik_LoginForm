import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import { Button,Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Location = ({ setNewDiv }) => {
  return (
    <div className="secondary-div">
      <h1> Location</h1>
      <p className='p'>Add Location if you want to add!!! 😊</p>
      <FieldArray
        name="location"
        render={(props) => {
          const prop= props.form.values.location;
          return (
            <>
            {
              prop.map((location,index)=> {
                console.log(location)
                return (
                  <>

                  <Row className="mb-3 inputRow">
                  <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
                <Field
                  type="select"
                  name={`location[${0}].country`}
                  placeholder="Country"
                  className="input"
                />

                <span className='errors'>
                <ErrorMessage
                  name={`location[${index}.country]`}
                />
                </span>
              </Col>
                      <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
                        <Field
                          className="input"
                          name={`location[${index}].city`}
                          placeholder="City"
                          type="text"

                        />
                        <span className='errors'>
                          <ErrorMessage
                            name={`location[${index}].city`}

                          />
                        </span>
                      </Col>
              
            </Row>
            <Row className="mb-3 inputRow">
            <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
              <Field
                className="input"
                name={`location[${0}].address1`}
                placeholder="Address1"
                type="text"

              />
              <span className='errors'>
              <ErrorMessage
                name={`location[${index}.address1]`}
               
              />
              </span>
            </Col>
            <Col sm={6} md={6} lg={6} className="inpuCol d-flex flex-column">
              <Field
                type="text"
                name={`location[${0}].pincode`}
                placeholder="Pin Code"
                className="input"
              />

              <span className='errors'>
              <ErrorMessage
                name={`location[${index}.pincode]`}
              />
              </span>
            </Col>
          </Row>
          </>
                )
              })
            }
            { 
               
              (props.form.values.location.length<=0) ? (
              <button
                className="addLocation"
                  type="button"
                  onClick={() =>
                    props.push({ country: '', city: '', address1: '', pincode: '' })
                  }
                >
                  <span className="span">Add</span>
                </button>) :<button
                className="addLocation"
                  type="button"
                  onClick={() =>
                    props.pop({ country: '', city: '', address1: '', pincode: '' })
                  }
                >
                 Remove
                </button>
            }
              
            
            </>
          );
        }}
      />

      <Row className="mb-3 fullWidth buttonLeft">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="fontawesomeLeft"
          onClick={() => {
            setNewDiv(false);
          }}
        />
      </Row>
      <Row className="fullWidth">
              <Button type="submit" className="LoginButton">Sign Up</Button>
      </Row>
    </div>
  );
};

export default Location;

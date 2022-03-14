import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { BiPlus, BiMinus } from "react-icons/bi";
import { useParams } from 'react-router-dom';

function Honors({ formData, setFormData }) {

  const { templateNum } = useParams();
  // console.log(formData)
  const [honourFields, setHonourField] = useState(formData.authorityOfCertification, formData.certificationTitle, formData.date)
  // const [honourFields, setHonourField] = useState(formData.honor[{honor:''}])

  async function handleSubmit(event) {
    event.preventDefault();
    const isadmin = false;
    const date = formData.date;
    const certificationTitle = formData.certificationTitle;
    const authorityOfCertification = formData.authorityOfCertification;

    const response = await fetch(`/api/user/resume/${templateNum}`, {
      method: 'post',
      body: JSON.stringify({ date, certificationTitle, authorityOfCertification }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const body = await response.json();
    alert(body.msg)
  }



  const handleChangeInput = (index, event) => {
    const values = [...honourFields];
    values[index][event.target.name] = event.target.value;
    setHonourField(values);
    const newObj = { ...formData, [event.target.name]: honourFields };
    setFormData(newObj)
  }

  const handleAddFields = () => {
    setHonourField([...honourFields, { certificationTitle: '', authorityOfCertification: '' }])
  }

  const handleRemoveFields = (index) => {
    const values = [...honourFields];
    // At postion index(1) remove 1
    values.splice(index, 1);
    setHonourField(values);
  }
  return (
    <>
      <Container>
        <section className="h-100 bg-dark">
          <BiPlus onClick={() => handleAddFields()} style={{ "color": "black" }} />
          {/* <BiMinus onClick={() => handleRemoveFields()} style={{ "color": "black" }} /> */}

          <div className="col-xl-6">
            <div className="card-body p-md-5 text-black">
              <form method="post" onSubmit={handleSubmit}>
                {honourFields.map((inputField, index) => (
                  <div key={index}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="form-label" htmlFor="form3Example1m">Date of Issued Certification</label>
                        <input type="text" id="date" name="date" className='date' value={inputField.date} onChange={event => handleChangeInput(index, event)}  ></input>
                      </div>

                      <div className="col-md-6 mb-4">
                        <BiPlus onClick={() => handleAddFields()} style={{ "color": "black" }} />
                        <BiMinus onClick={() => handleRemoveFields(index)} style={{ "color": "black" }} />
                      </div>

                    </div>

                    <label className="form-label" htmlFor="form3Example1m">Cerification Title</label>
                    <Form.Control type="text" placeholder="Cerification Title" name="certificationTitle" value={inputField.certificationTitle} onChange={event => handleChangeInput(index, event)} />


                    <label className="form-label" htmlFor="form3Example1m">Authority of Certification</label>
                    <Form.Control type="text" placeholder="Authority Of Cerification" name="authorityOfCertification" value={inputField.authorityOfCertification} onChange={event => handleChangeInput(index, event)} />

                  </div>
                ))}
                <button style={{ "color": "blue", "backgroundColor": "grey" }} type='submit'>Save Your data</button>
              </form>

            </div>
          </div>

        </section>

      </Container>
    </>
  );
}

export default Honors;
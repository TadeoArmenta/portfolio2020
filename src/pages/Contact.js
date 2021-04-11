import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import * as emailjs from 'emailjs-com'

function Contact(){
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");


  const submitHandler = (event) =>{
    event.preventDefault();
    if( !formdata.name ){
      setError(true);
      alert('Please enter your name');
    } else if( !formdata.email ){
      setError(true);
      alert('Please include an email address');
    } else if( !formdata.subject ){
      setError(true);
      alert('Please give your message a subject title');
    } else if( !formdata.message ){
      setError(true);
      alert('Please include a message in your submission');
      // setMessage('Please include a message in your submission');
    } else{
      setError(false);
      let templateParams = {
        from_name: formdata.email,
        to_name: 'cgtarmenta@gmail.com',
        subject: formdata.subject,
        message_html: formdata.message,
       }
       emailjs.init("user_y6yn6rbAFs2iZ4EUApguN");
       emailjs.send(
        'service_2shm32s',
        'template_ky5i4px',
         templateParams,
        'user_y6yn6rbAFs2iZ4EUApguN'
       ).then(result=>{
          form.reset();
          window.location.reload();
          setError(false);
          setMessage('You message has been sent!');
       }).catch(e=>{
        setError(true);
        setMessage("There's been an error! " + e.text);
       })
      // alert('You message has been sent!');
      // setMessage('You message has been sent!');
      const form = event.target;
      // const data = new FormData(form);
      // const xhr = new XMLHttpRequest();
      // xhr.open(form.method, form.action);
      // xhr.setRequestHeader("Accept", "application/json");
      // xhr.onreadystatechange = () => {
      //   if (xhr.readyState !== XMLHttpRequest.DONE) return;
      //   if (xhr.status === 200) {
          // form.reset();
          // window.location.reload();
          // setError(false);
          // setMessage('You message has been sent!');
      // //   } else {
      //     setError(true);
      //     setMessage("There's been an error!");
      //   }
      // };
      // xhr.send(data);
    }
  }
  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name] : event.currentTarget.value
    })
  }
  const numberFormatter = (number) =>{
    const phnNumber = number;
    return phnNumber;
  }

  const handleAlerts = () => {
    if(error && message){
      return (
        <div className="alert alert-danger mt-4">
          {message}
        </div>
      )
    } else if(!error && message){
      return (
        <div className="alert alert-success mt-4">
          {message}
        </div>
      )
    } else{
      return null;
    }
  }

  useEffect(() => {
    axios.get('/api/contactinfo')
      .then(response =>{
        setPhoneNumbers(response.data.phoneNumbers);
        setEmailAddress(response.data.emailAddress);
        setAddress(response.data.address);
      })
  }, [])

  return (
    <Layout>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Contact Me"/>
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Get In Touch</h4>
                <form action="" method="POST" className="mi-form mi-contact-form" onSubmit={submitHandler}>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Enter your name*</label>
                    <input onChange={handleChange} type="text" name="name" id="contact-form-name" value={formdata.name}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">Enter your email*</label>
                    <input onChange={handleChange} type="email" name="email" id="contact-form-email" value={formdata.email}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">Enter your subject*</label>
                    <input onChange={handleChange} type="text" name="subject" id="contact-form-subject" value={formdata.subject}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">Enter your Message*</label>
                    <textarea onChange={handleChange} name="message" id="contact-form-message" cols="30" rows="6" value={formdata.message}></textarea>
                  </div>
                  <div className="mi-form-field">
                    {/* {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>} */}
                    <button className="mi-button" type="submit" value="Send">Send Mail</button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Phone/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Phone</h6>
                      {phoneNumbers.map(phoneNumber =>(
                        <p key={phoneNumber}><a href={numberFormatter(phoneNumber)}>{phoneNumber}</a></p>
                      ))}
                    </div>
                  </div>
                )}
                {!emailAddress ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Mail/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Email</h6>
                      {emailAddress.map(email => (
                        <p key={email}><a href={`mailto:${email}`}>{email}</a></p>
                      ))}
                    </div>
                  </div>
                )}
                {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.MapPin/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Address</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

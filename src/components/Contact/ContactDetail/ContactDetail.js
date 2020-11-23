import React from 'react';
import emailjs from 'emailjs-com';

const ContactDetail = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_djl8c1f', e.target, 'user_WovdxbrWdNZ9zguEgQF92')
          .then((result) => {
              if(result){
                  e.target.reset();
                  alert("Your Message Send Successfully");
                  console.log(result.text);
              }
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <div className="row mt-4">
            <form className="form-group col-md-6 pt-5 mx-auto" onSubmit={sendEmail}>
            <h1>Get in Touch</h1>
                <div className="row mt-5">
                    <div className="col-6 form-group pt-2">
                        <input type="text" className="form-control" placeholder="Full Name" name="name" />
                    </div>
                    <div className="col-6 form-group pt-2">
                        <input type="email" className="form-control" placeholder="Email" name="email" required />
                    </div>
                    <div className="col-12 form-group pt-2">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" required />
                    </div>
                    <div className="col-12 form-group pt-2">
                        <textarea rows="5" type="text" className="form-control" placeholder="Message" name="message" required />
                    </div>
                    <div className="col-3 form-group pt-2">
                        {/* <button  type="submit">Submit</button> */}
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactDetail;
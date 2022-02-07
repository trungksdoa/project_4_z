import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ReviewAPI from '../../api/ReviewAPI';
const ContactUs = () => {
  const form = useRef();
  const [formvalue, setFormValue] = useState({ to_name: "", from_name: "Shop", message: "", to_email: "" });
  const [reviewContent, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formvalue, [name]: value });
  }
  function fullname(review) {
    return review.data.userid.firstName + "" + review.data.userid.lastName;
  }
  async function fetchData(id) {
    await ReviewAPI.Findone(id).then(response => {
      setFormValue({ ...formvalue, "to_name": fullname(response), "to_email": response.data.userid.useremail });
      setContent(response.data.reviewcontent);
    }).catch(error => {
      navigate('/notfound')
    });
  }
  useEffect(() => {
    fetchData(id)
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formvalue)
    emailjs.send("service_j4mrk0g", "template_gq3eifs", {
      to_name: formvalue.to_name,
      from_name: formvalue.from_name,
      message: formvalue.message,
      to_email: formvalue.to_email,
    }, 'user_vIW7ZVHXfJOIHf3MzglMW').then(response => {
      console.log(response)
    }).catch(error => {
      alert(error)
    });
  };
  const backToList = () => {
    navigate("/admin/Reviews");
  }
  return (
    <div className="container">
      <div className="col-12">
        <a style={{ cursor: 'pointer' }} onClick={backToList}>Back</a>
        <div className="container">
          <div className="admin_card" style={{ width: "50%", margin: "auto" }}>
            <h3 className="text-center">Send email</h3>
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="to_name"
                    disabled
                    fullWidth
                    id="to_name"
                    label="To"
                    value={formvalue.to_name}
                    // value={formvalue.adminemail}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="to_email"
                    disabled
                    fullWidth
                    id="to_email"
                    label="To email"
                    value={formvalue.to_email}
                    // value={formvalue.adminemail}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="from_name"
                    fullWidth
                    disabled
                    id="from_name"
                    label="From"
                    value={formvalue.from_name}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <label>Review content</label>
                  <p>{reviewContent}</p>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="message"
                    fullWidth
                    id="message"
                    label="Reply"
                    autoFocus
                    multiline
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <input type="submit" value="Send" />
                </Grid>

              </Grid>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs
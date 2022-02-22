import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ReviewAPI from '../../api/ReviewAPI';
import { toast } from 'react-toastify'
const ContactUs = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [formvalue, setFormValue] = useState({ to_name: "", from_name: "Shop", message: "", to_email: "", subject: "" });
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
  const sendEmail =async (e) => {
    e.preventDefault();

    const data = {
      subjectl: formvalue.subject,
      to: formvalue.to_name,
      toEmail: formvalue.to_email,
      oldreview: reviewContent,
      message: formvalue.message,
    }
    // console.log(data)
    await ReviewAPI.SendEmail(id,data)
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
                    name="subject"
                    fullWidth
                    required
                    id="subject"
                    label="Subject"
                    value={formvalue.subject}
                    onChange={handleChange}
                    // value={formvalue.adminemail}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="to_name"
                    disabled
                    fullWidth
                    required
                    id="to_name"
                    label="To"
                    value={formvalue.to_name}
                    onChange={handleChange}
                    // value={formvalue.adminemail}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="to_email"
                    disabled
                    fullWidth
                    required
                    id="to_email"
                    label="To email"
                    value={formvalue.to_email}
                    onChange={handleChange}
                    // value={formvalue.adminemail}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="from_name"
                    fullWidth
                    disabled
                    required
                    id="from_name"
                    label="From"
                    value={formvalue.from_name}
                    onChange={handleChange}
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
                    required
                    label="Reply"
                    autoFocus
                    value={formvalue.message}
                    onChange={handleChange}
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
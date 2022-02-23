import React, { useState, useEffect } from 'react';
import settingAPi from '../../api/SettingAPI';

const Contacts = () => {
  const [setting, setSetting] = useState({ address: "", email: "", id: "", phonenum: "", timeservice: "", logo_name_path: "" });
  useEffect(() => {
    const getSetting = async () => {
      await settingAPi.getSetting().then((setting) => {
        setSetting(setting.data)
      }).catch((error) => {
        alert(error.msg);
      });
    }
    getSetting();
  }, [])
  return (
    <>
      <div className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index={-100} data-appear-top-offset={600} data-parallax="scroll" data-image-src="images/parallax/bgparallax-07.jpg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="tg-innerbannercontent">
                <h1>Contact Us</h1>
                <ol className="tg-breadcrumb">
                  <li><a href="/">home</a></li>
                  <li className="tg-active">Contact Us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*************************************
                  Inner Banner End
          **************************************/}
      {/*************************************
                  Main Start
          **************************************/}
      <main id="tg-main" className="tg-main tg-haslayout">
        {/*************************************
                      Contact Us Start
              **************************************/}
        <div className="tg-sectionspace tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="tg-contactus">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="tg-sectionhead">
                    <h2><span>Say Hello!</span>Get In Touch With Us</h2>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.8777577523906!2d106.66522760271698!3d10.785928515592083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed2182afb2b%3A0xec96c3592c1c2aa5!2zODc1IEPDoWNoIE3huqFuZyBUaMOhbmcgVMOhbQ!5e0!3m2!1sen!2s!4v1645632429505!5m2!1sen!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="tg-contactdetail">
                    <div className="tg-sectionhead">
                      <h2>Get In Touch With Us</h2>
                    </div>
                    <ul className="tg-contactinfo">
                      <li>
                        <i className="icon-apartment" />
                        <address>{setting.address}</address>
                      </li>
                      <li>
                        <i className="icon-phone-handset" />
                        <span>
                          <em>{setting.phonenum}</em>
                        </span>
                      </li>
                      <li>
                        <i className="icon-clock" />
                        <span>{setting.timeservice}</span>
                      </li>
                      <li>
                        <i className="icon-envelope" />
                        <span>
                          <em><a href={"mailto:" + setting.email}>{setting.email}</a></em>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*************************************
                      Contact Us End
              **************************************/}
      </main>
    </>
  );
}

export default Contacts;
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
                  <li><a href="javascript:void(0);">home</a></li>
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
                  <div id="tg-locationmap" className="tg-locationmap tg-map" />
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
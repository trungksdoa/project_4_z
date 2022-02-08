import React, { useState, useEffect } from 'react';
import settingAPi from '../../api/SettingAPI';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const Footer = () => {
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
        <footer id="tg-footer" className="tg-footer tg-haslayout">
            <div className="tg-footerarea">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <ul className="tg-clientservices">
                                <li className="tg-devlivery">
                                    <span className="tg-clientserviceicon"><i className="icon-rocket" /></span>
                                    <div className="tg-titlesubtitle">
                                        <h3>Fast Delivery</h3>
                                        <p>Shipping Worldwide</p>
                                    </div>
                                </li>
                                <li className="tg-discount">
                                    <span className="tg-clientserviceicon"><i className="icon-tag" /></span>
                                    <div className="tg-titlesubtitle">
                                        <h3>Open Discount</h3>
                                        <p>Offering Open Discount</p>
                                    </div>
                                </li>
                                <li className="tg-quality">
                                    <span className="tg-clientserviceicon"><i className="icon-leaf" /></span>
                                    <div className="tg-titlesubtitle">
                                        <h3>Eyes On Quality</h3>
                                        <p>Publishing Quality Work</p>
                                    </div>
                                </li>
                                <li className="tg-support">
                                    <span className="tg-clientserviceicon"><i className="icon-heart" /></span>
                                    <div className="tg-titlesubtitle">
                                        <h3>24/7 Support</h3>
                                        <p>Serving Every Moments</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="tg-threecolumns">
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <div className="tg-footercol">
                                    <strong className="tg-logo"><a href="#!"><img src="images/flogo.png" alt="image description" /></a></strong>
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
                                    <ul className="tg-socialicons">
                                        <li className="tg-facebook"><a href="#!"><i className="fa fa-facebook" /></a></li>
                                        <li className="tg-twitter"><a href="#!"><i className="fa fa-twitter" /></a></li>
                                        <li className="tg-linkedin"><a href="#!"><i className="fa fa-linkedin" /></a></li>
                                        <li className="tg-googleplus"><a href="#!"><i className="fa fa-google-plus" /></a></li>
                                        <li className="tg-rss"><a href="#!"><i className="fa fa-rss" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5">
                                <div className="tg-footercol tg-widget tg-widgettopsellingauthors">
                                    <div className="tg-widgettitle">
                                        <h3>Team</h3>
                                    </div>
                                    <div className="tg-widgetcontent">
                                        <ImageList sx={{ width: 500, height: 450,fontSize:30 }}>
                                            {itemData.map((item) => (
                                                <ImageListItem key={item.img}>
                                                    <img
                                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                        alt={item.title}
                                                        loading="lazy"
                                                    />
                                                    <ImageListItemBar
                                                        title={item.title}
                                                        style={{fontSize:60}}
                                                        subtitle={item.work}
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tg-newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <h4>Signup Newsletter!</h4>
                            <h5>Consectetur adipisicing elit sed do eiusmod tempor incididunt.</h5>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <form className="tg-formtheme tg-formnewsletter">
                                <fieldset>
                                    <input type="email" name="email" className="form-control" placeholder="Enter Your Email ID" />
                                    <button type="button"><i className="icon-envelope" /></button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tg-footerbar">
                <a id="tg-btnbacktotop" className="tg-btnbacktotop" href="#!"><i className="icon-chevron-up" /></a>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <span className="tg-paymenttype"><img src="images/paymenticon.png" alt="image description" /></span>
                            <span className="tg-copyright">2017 All Rights Reserved By © Book Library</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Nguyễn Khắc Quang',
        work: '@Leader',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Võ Hoàng Trung',
        work: '@member',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Nguyễn Khắc Toàn',
        work: '@member',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Nguyễn Văn Đại',
        work: '@member',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Lê Thanh Ân',
        work: '@member',
        cols: 2,
    }
];
export default Footer;
import React from "react";
import { useEffect, useState, useContext } from "react";
import BannerAPI from '../../api/BannerAPI.js';
import { useCookies } from 'react-cookie';

const Banners = () => {
    const [banner_list, setBanner_list] = useState([]);

    async function Fetch() {
        await BannerAPI.getBanner().then((banner) => {
            setBanner_list(banner.data)
        }).catch((error) => {
            alert(error.msg);
        })
    }
    useEffect(() => {
        Fetch();
    }, [])
    return (
        <section className="tg-sectionspace tg-haslayout" style={{
            padding: "0 0 0 0"
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div id="my-pics" className="carousel slide" data-ride="carousel" style={{
                            width: "100%",
                            height: "auto",
                            margin: "1% auto"
                        }}>
                            {/* Indicators */}
                            <ol className="carousel-indicators">
                                <li data-target="#my-pics" data-slide-to={0} className="active" />
                                <li data-target="#my-pics" data-slide-to={1} />
                                <li data-target="#my-pics" data-slide-to={2} />
                            </ol>
                            {/* Content */}
                            <div className="carousel-inner" role="listbox">
                                {/* Slide 1 */}
                                {banner_list.map((banner, index) => {
                                    if (index === 0) {
                                        return (
                                            <div className="item active" key={index}>
                                                <img src={"http://localhost:9999/image/" + banner.banner_Image + "?v=" + new Date().getTime()} alt="Sunset over beach" />
                                                <div className="carousel-caption"
                                                    style={{
                                                        color: "white",
                                                        fontWeight: "bold",
                                                        border: "3px solid rgb(241, 241, 241)",
                                                        boxShadow: "rgb(216 207 207) 0px 4px 8px 0px",
                                                        background: "rgb(0 0 0 / 60%)",
                                                    }}
                                                >
                                                    <h3 style={{ color: "white" }} >{banner.banner_title}</h3>
                                                    <p>{banner.banner_content}</p>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="item" key={index}>
                                                <img src={"http://localhost:9999/image/" + banner.banner_Image + "?v=" + new Date().getTime()} alt="Sunset over beach" />
                                                <div className="carousel-caption"
                                                    style={{
                                                        color: "white",
                                                        fontWeight: "bold",
                                                        border: "3px solid rgb(241, 241, 241)",
                                                        boxShadow: "rgb(216 207 207) 0px 4px 8px 0px",
                                                        background: "rgb(0 0 0 / 60%)",
                                                    }}
                                                >
                                                    <h3 style={{ color: "white" }}>{banner.banner_title}</h3>
                                                    <p>{banner.banner_content}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            {/* Previous/Next controls */}
                            <a className="left carousel-control" href="#my-pics" role="button" data-slide="prev">
                                <span className="icon-prev" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#my-pics" role="button" data-slide="next">
                                <span className="icon-next" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banners
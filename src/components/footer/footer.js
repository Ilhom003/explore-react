import React from "react";
import './footer.css'
import logo from '../../assets/imgs/logo (3).png'
import twitter from '../../assets/icons/Twiter.png'
import behance from '../../assets/icons/Behance.png'
import instagram from '../../assets/icons/instagram.png'
import vimeo from '../../assets/icons/vimeo.png'
import linkedin from '../../assets/icons/linkedin.png'
import footer_tel from '../../assets/icons/footer_tel.png'
import footer_time from '../../assets/icons/footer_time.png'
import footer_location from '../../assets/icons/footer_location.png'
import datas from '../mock/mock'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__about">
                    <img style={{background:'white'}} src={logo} alt='logo' />
                    <p className="paragraph footer_paragraph">Continually productize compelling dome packed with all Elated utilize website and creating  supply next-generation</p>
                    <h4 className="heading-4">Follow Us On:</h4>
                    <div className="footer__icons">
                        <img src={twitter} alt='twitter' />
                        <img src={behance} alt='behance' />
                        <img src={instagram} alt='instagram' />
                        <img src={vimeo} alt='vimeo' />
                        <img src={linkedin} alt='linkedin' />
                    </div>
                </div>

                <div className="footer__type">
                    <h4 className="heading-4">Tour Type</h4>
                    <div className="footer__type__paragraph ">
                        <p className="paragraph">Adventure Tours</p>
                        <p className="paragraph">Grouo Tour</p>
                        <p className="paragraph">Seasonal Tours</p>
                        <p className="paragraph">Relaxtion Tours</p>
                        <p className="paragraph">Family Friendly Tour</p>
                    </div>
                </div>

                <div className="footer__contact">
                    <h4 className="heading-4">Contact info</h4>
                    <div className="footer__contact__datas">
                        <div className="footer__contact__tel">
                            <img src={footer_tel} alt='footer_tel' />
                            <div>
                                <p className="paragraph">88130-589-745-6987</p>
                                <p className="paragraph">+1655-456-523</p>
                            </div>
                        </div>
                        <div className="footer__contact__time">
                            <img src={footer_time} alt='footer_time' />
                            <div>
                                <p className="paragraph">Mon-Fri 09:00-18:00</p>
                                <p className="paragraph">(except public holidays)</p>
                            </div>
                        </div>
                        <div className="footer__contact__location">
                            <img src={footer_location} alt='footer_location' />
                            <div>
                                <p className="paragraph">25/2 Vokte Street Building</p>
                                <p className="paragraph">Melborn City</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__gallery">
                    <h4 className="heading-4">Gallery</h4>
                    <div className="footer__gallery_imgs">
                        {
                            datas.map((value) => {
                                return (
                                    <img className="footer__gallery__img" src={value.img} alt='img' />
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
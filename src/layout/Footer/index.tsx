import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PhoneIcon from '../../assets/icons/phone.png';
import MailIcon from '../../assets/icons/mail.png';
import WhatsappIcon from '../../assets/icons/whatsapp.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import InstagramIcon from '../../assets/icons/instagram.png';
import TiktokIcon from '../../assets/icons/tiktok.png';


const Footer:React.FC  = () => {
    return(
        <FooterApp>
            <FooterContainer>
                <FooterInfoSection>
                    <ContactSection>
                        <FooterTitle>Contacto</FooterTitle>
                        <PrimaryInfo>
                            <LogoImageRef src={PhoneIcon} alt="Phone" />
                            <LogoText>+591 76999830</LogoText>
                        </PrimaryInfo>

                        <PrimaryInfo>
                            <LogoImageRef src={MailIcon} alt="Mail" />
                            <LogoText>Amideleite@gmail.com</LogoText>
                        </PrimaryInfo>

                        <ContactSocialGroup>
                            <a href="https://wa.me/59176999830" target="_blank">
                                <LogoImage src={WhatsappIcon} alt="Whatsapp" />
                            </a>
                            <a href="https://www.facebook.com/Amideleite" target="_blank">
                                <LogoImage src={FacebookIcon} alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/ami.deleite" target="_blank">
                                <LogoImage src={InstagramIcon} alt="Instagram" />
                            </a>
                            <a href="https://www.tiktok.com/@amideleite" target="_blank">
                                <LogoImage src={TiktokIcon} alt="Tiktok" />
                            </a>
                        </ContactSocialGroup>
                    </ContactSection>

                    <TermsSection>
                        <NavLink to="/Terms">
                            <FooterTitle>Términos y condiciones</FooterTitle>
                        </NavLink>
                        <NavLink to="/Specials">
                            <FooterTitle>Pedidos Especiales</FooterTitle>
                        </NavLink>
                    </TermsSection>
                </FooterInfoSection>

                <Copyright>©2023 Amideleite - Diseño y programacion Damian Cortez Candia, Cochabamba - Bolivia </Copyright>
            </FooterContainer>

        </FooterApp>
    );
}


export default Footer;

const FooterApp = styled.div`
`

const FooterContainer = styled.div`
    position: relative;
    width: 100%;
    bottom: 0;
    background: linear-gradient(180deg, #54342A 0%, #2F1107 100%);
    border-top: 5px solid #C9A66B;
`

const FooterInfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 30px 50px;

    @media (max-width: 480px){
        flex-direction: column;
        align-items: center;
        gap: 40px;
        padding: 30px 10px;
    }
`

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    height: 100%;
    gap: 10px;
`
const PrimaryInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
const LogoImage = styled.img`
    width: 30px;
    height: 30px;
`

const LogoImageRef = styled.img`
    width: 30px;
    height: 30px;
    @media(max-width: 200px){
        display: none;
    }
`

const LogoText = styled.p`
    margin: 0;
    font-family: 'Alatsi';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;

    @media(max-width: 200px){
        font-size: 11px;
    }
`
const ContactSocialGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 14px;
`


const TermsSection = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;

    & a{
        text-decoration: none;
    }

    @media (max-width: 480px){
        align-items: center;
    }
`

const Copyright = styled.p`
    position: relative;
    text-align: center;
    font-family: 'Alatsi';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #FFFFFF;
    bottom: 0;
    width: 100%;

    @media (max-width: 480px){
        font-size: 8px;
    }
`

const FooterTitle = styled.h3`
    font-family: 'Alatsi';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
    @media (max-width: 300px){
        font-size: 12px;
        text-align: center;
    }
`
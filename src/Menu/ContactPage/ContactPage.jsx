import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaDribbble,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaBehance,
  FaTiktok,
} from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Gəlin Birlikdə İşləyək</h1>
        <p>
          Hər zaman əlaqə saxlamağa açığam — yeni layihələr, əməkdaşlıqlar və
          yaradıcı müzakirələr üçün mənə yazın.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-form hover-box">
          <h2>Mesaj Göndər</h2>
          <form
            action="mailto:tural.design@example.com"
            method="POST"
            encType="text/plain"
          >
            <input type="text" name="Name" placeholder="Adınız" required />
            <input type="email" name="Email" placeholder="Emailiniz" required />
            <input type="text" name="Subject" placeholder="Mövzu" />
            <textarea name="Message" rows="5" placeholder="Mesajınız"></textarea>
            <button type="submit">Göndər</button>
          </form>
        </div>

        <div className="contact-info hover-box">
          <h2>Əlaqə Məlumatı</h2>
          <div className="info-item">
            <FaEnvelope />
            <a href="mailto:tural.design@example.com">tural.design@example.com</a>
          </div>
          <div className="info-item">
            <FaPhone />
            <a href="tel:+994501234567">+994 50 123 45 67</a>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt /> <span>Bakı, Azərbaycan</span>
          </div>

          <div className="social-links-expanded">
            <a className="icon facebook" href="#"><FaFacebookF /><span>Facebook</span></a>
            <a className="icon twitter" href="#"><FaTwitter /><span>Twitter</span></a>
            <a className="icon instagram" href="#"><FaInstagram /><span>Instagram</span></a>
            <a className="icon linkedin" href="#"><FaLinkedin /><span>LinkedIn</span></a>
            <a className="icon youtube" href="#"><FaYoutube /><span>YouTube</span></a>
            <a className="icon tiktok" href="#"><FaTiktok /><span>TikTok</span></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

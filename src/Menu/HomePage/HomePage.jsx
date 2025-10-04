// HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Sol hissə - Məlumatlar */}
      <div className="left-section">
        <h1 className="name">Salam, mən Tural</h1>
        <h2 className="title">UX/UI Dizayneri</h2>
        <p className="description">
          Mən müasir və funksional interfeyslər yaradıram. İstifadəçi təcrübəsinə önəm verirəm və
          hər layihədə detala diqqət edirəm.
        </p>

        <div className="skills">
          <h3>Bacarıqlar</h3>
          <ul>
            <li>UX Research</li>
            <li>UI Design</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Figma, Adobe XD</li>
          </ul>
        </div>
      </div>

      {/* Sağ hissə - Şəkil və statistika */}
      <div className="right-section">
        <div className="image-container">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGKDQrp9WoyDw/profile-displayphoto-scale_400_400/B4DZiaYtWkGsAk-/0/1754936827096?e=2147483647&v=beta&t=vFbyRiJ7dtrvYJMRZaCBhJC5dcgCzyyF_nnLgbupLHQ" alt="Edward" className="profile-img" />
        </div>

        <div className="stats">
          <div className="stat-box">
            <h3>6+</h3>
            <p>İllik Təcrübə</p>
          </div>
          <div className="stat-box">
            <h3>250+</h3>
            <p>Tamamlanmış Layihə</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Müştəri Məmnuniyyəti</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

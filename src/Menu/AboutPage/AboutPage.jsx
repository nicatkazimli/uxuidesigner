import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">

      <section className="intro-section">
        <div className="photo-box">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGKDQrp9WoyDw/profile-displayphoto-scale_400_400/B4DZiaYtWkGsAk-/0/1754936827096?e=2147483647&v=beta&t=vFbyRiJ7dtrvYJMRZaCBhJC5dcgCzyyF_nnLgbupLHQ" alt="Tural Məmmədli" />
        </div>
        <div className="intro-text">
          <h1>Salam, mən Tural Məmmədli</h1>
          <blockquote>“Dizayn yalnız gözəl görünmək deyil — istifadəçi təcrübəsinin kodlaşdırılmasıdır.”</blockquote>
          <p>
            Mən məhsul dizayneriyəm, insanların rəqəmsal məhsullarla rahat və effektiv şəkildə qarşılıqlı əlaqə qurmaları üçün çalışıram.
            Missiyam — funksional, istifadəçi yönümlü və estetik interfeyslər yaratmaqdır.
          </p>
        </div>
      </section>

      <section className="timeline-section">
        <h2>Karyera Yolu</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span>2018</span>
            <p>Junior UI/UX Designer - Local Agency</p>
          </div>
          <div className="timeline-item">
            <span>2020</span>
            <p>Lead Designer - Tech Startup</p>
          </div>
          <div className="timeline-item">
            <span>2022</span>
            <p>Freelancer - 250+ layihə</p>
          </div>
        </div>
      </section>

      <section className="fun-facts-grid">
        <div className="fact-card">🌍 4 ölkədə müştəri</div>
        <div className="fact-card">🎨 200+ vizual dizayn</div>
        <div className="fact-card">📚 3 dizayn masterclass</div>
      </section>
    </div>
  );
};

export default AboutPage;

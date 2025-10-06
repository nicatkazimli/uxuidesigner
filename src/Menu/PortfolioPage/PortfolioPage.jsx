import React, { useState } from 'react';
import Slider from 'react-slick';
import './PortfolioPage.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projectsData = [
  // === Web Design ===
  {
    id: 1,
    title: 'Luxury Jewellery Website',
    category: 'Web Design',
    image:
      'https://cdn.dribbble.com/userupload/43906954/file/original-1357e732d25877450781922a33774e13.jpg?format=webp&resize=400x300&vertical=center',
  },
  {
    id: 2,
    title: 'Minimal Fashion Store',
    category: 'Web Design',
    image:
      'https://cdn.dribbble.com/userupload/44843149/file/c72b3f6502e815c2ab256672697ace32.png?format=webp&resize=400x300&vertical=center',
  },
  {
    id: 3,
    title: 'Real Estate Landing Page',
    category: 'Web Design',
    image:
      'https://img.freepik.com/premium-photo/modern-user-interface-design-template-mockups-ui-ux-design-website-design-mockups_343960-966.jpg?w=360',
  },

  // === UI/UX ===
  {
    id: 4,
    title: 'Creative UI Dashboard',
    category: 'UI/UX',
    image:
      'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/257886416/original/6341cc154ee8b78b00777749948b1010aa23f38d/do-modern-website-ui-ux-design-7c69.png',
  },
  {
    id: 5,
    title: 'Mobile App UI Flow',
    category: 'UI/UX',
    image:
      'https://img.freepik.com/premium-photo/ui-ux-designs_1197721-77107.jpg',
  },
  {
    id: 6,
    title: 'Finance Dashboard UX',
    category: 'UI/UX',
    image:
      'https://img.freepik.com/premium-photo/ui-ux-designs_1197721-77398.jpg?w=360',
  },

  // === Frontend ===
  {
    id: 7,
    title: 'Modern Portfolio Website',
    category: 'Frontend',
    image:
      'https://img.freepik.com/premium-photo/ui-ux-designs_1197721-77785.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    id: 8,
    title: 'Crypto Dashboard',
    category: 'Frontend',
    image:
      'https://binarapps.com/wp-content/uploads/2021/01/Drylab.png',
  },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Design', 'UI/UX', 'Frontend'];

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    adaptiveHeight: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          adaptiveHeight: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          dots: true,
          arrows: true,
          adaptiveHeight: false,
        },
      },
    ],
  };

  return (
    <div className="portfolio-page">
      <h1 className="portfolio-title">My Portfolio</h1>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <Slider  {...settings}>
        {filteredProjects.map((project) => (
          <div key={project.id}  className="portfolio-item">
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PortfolioPage;

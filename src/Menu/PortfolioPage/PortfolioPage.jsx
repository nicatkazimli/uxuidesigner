import React, { useState } from 'react';
import './PortfolioPage.css';

const projectsData = [
  // === Web Design ===
  {
    id: 1,
    title: 'Luxury Jewellery Website',
    category: 'Web Design',
    image:
      'https://cdn.dribbble.com/userupload/44803392/file/337158934d9892c816c76f4383a5cd1a.png?format=webp&resize=400x300&vertical=center',
  },
  {
    id: 2,
    title: 'Minimal Fashion Store',
    category: 'Web Design',
    image:
      'https://mir-s3-cdn-cf.behance.net/projects/404/562b58235256135.Y3JvcCwxMzQzLDEwNTEsNjksMA.jpg',
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

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;

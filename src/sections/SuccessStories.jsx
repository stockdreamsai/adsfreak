import { useState } from 'react';
import { SectionTitle } from '../components/Shared.jsx';

// PLACEHOLDER stories — replace with real, verifiable customer results
// (3 quotes per slide, like the original layout).
const SLIDES = [
  [
    { name: '[Customer Name]', role: '[Role / Company]', text: '[Real success story quote #1 goes here.]' },
    { name: '[Customer Name]', role: '[Role / Company]', text: '[Real success story quote #2 goes here.]' },
    { name: '[Customer Name]', role: '[Role / Company]', text: '[Real success story quote #3 goes here.]' },
  ],
  [
    { name: '[Customer Name]', role: '[Role / Company]', text: '[Real success story quote #4 goes here.]' },
    { name: '[Customer Name]', role: '[Role / Company]', text: '[Real success story quote #5 goes here.]' },
    { name: '[Customer Name]', role: '[Role / Company]', text: '[Real success story quote #6 goes here.]' },
  ],
];

export default function SuccessStories() {
  const [slide, setSlide] = useState(0);
  const prev = () => setSlide((slide - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setSlide((slide + 1) % SLIDES.length);

  return (
    <section className="success-stories">
      <div className="container narrow">
        <SectionTitle title="Success" highlight="Stories" />
        <div className="stories-carousel">
          <button className="carousel-arrow" onClick={prev} aria-label="Previous stories">‹</button>
          <div className="stories-track">
            {SLIDES[slide].map((s, i) => (
              <blockquote className="story" key={i}>
                <p className="story-text">“{s.text}”</p>
                <footer className="story-author">
                  <span className="avatar" aria-hidden="true">👤</span>
                  <div>
                    <strong>{s.name}</strong>
                    <span className="story-role">{s.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
          <button className="carousel-arrow" onClick={next} aria-label="Next stories">›</button>
        </div>
      </div>
    </section>
  );
}

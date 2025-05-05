import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    rating: 5,
    text: "The variety of organic herb seeds is amazing. I’ve created a beautiful kitchen garden with everything from basil to herbs I couldn’t find anywhere else.",
    name: "Emma Rodriguez",
    location: "Denver, CO",
    image: "https://via.placeholder.com/80"
  },
  {
    rating: 4,
    text: "Fast delivery and high-quality seeds. My tomatoes and peppers are thriving!",
    name: "Michael Chen",
    location: "Austin, TX",
    image: "https://via.placeholder.com/80"
  },
  {
    rating: 5,
    text: "This is my go-to place for seeds every season. Love the eco packaging too!",
    name: "Sophia Lee",
    location: "Seattle, WA",
    image: "https://via.placeholder.com/80"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What Our Customers Are Growing</h2>
      <p className="testimonials-subheading">
        Join thousands of happy gardeners who’ve transformed their spaces with our premium seeds.
      </p>

      <div className="carousel">
        {testimonials.map((t, index) => (
          <div key={index} className="carousel-item">
            <div className="testimonial-card">
              <div className="testimonial-stars">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-user">
                <img src={t.image} alt={t.name} className="testimonial-avatar" />
                <div>
                  <strong>{t.name}</strong>
                  <p className="testimonial-location">{t.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

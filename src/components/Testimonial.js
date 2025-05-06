import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Testimonial.css';

const testimonials = [
  {
    stars: 5,
    text: "I've been buying seeds from GrowWell for three years now, and I'm always impressed with the quality. My tomatoes from their heirloom seeds were the talk of our neighborhood last summer!",
    name: "Sarah Johnson",
    location: "Portland, OR",
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80'
  },
  {
    stars: 4,
    text: "The variety of organic herb seeds is amazing. I’ve created a beautiful kitchen garden with everything from basil to cilantro!",
    name: "Emma Rodriguez",
    location: "Denver, CO",
    image: 'https://images.unsplash.com/photo-1503264116251-35a269479413?fit=crop&w=800&q=80'
  },
  {
    stars: 5,
    text: "Great customer service and super fast shipping! Will be ordering again.",
    name: "Jake Thompson",
    location: "Austin, TX",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=800&q=80'
  }
];

const TestimonialCarousel = () => {
  return (
    <section className="testimonial-section">
      <h2>What Our Customers Are Growing</h2>
      <p className="subtext">
        Join thousands of happy gardeners who've transformed their spaces with our premium seeds.
      </p>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-text">
                <div className="stars">{'★'.repeat(item.stars)}</div>
                <p className="quote">"{item.text}"</p>
                <div className="user-info">
                  <img
                    src={`https://randomuser.me/api/portraits/women/${index + 20}.jpg`}
                    alt={item.name}
                    className="avatar"
                  />
                  <div>
                    <strong>{item.name}</strong>
                    <div>{item.location}</div>
                  </div>
                </div>
              </div>
              <img src={item.image} alt="testimonial" className="testimonial-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialCarousel;

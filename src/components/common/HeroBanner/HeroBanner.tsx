import React from "react";
import styled from "styled-components";

const HeroBanner: React.FC = () => {
  return (
    <HeroSection className="light hero" role="banner">
      <div className="hero-banner__inner">
        <span>
          <h1>hero section with button</h1>
          <button className="btn btn-light" role="button" aria-label="Explore Now">
            Explore Now
          </button>
        </span>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  color: #fafafc;
  .hero-banner__inner {
    display: flex;
    max-width: 120rem;
    margin: 0 auto;
  }
  span {
    max-width: 50%;
  }
  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(https://images.pexels.com/photos/133325/pexels-photo-133325.jpeg?auto=compress&cs=tinysrgb&w=800&h=750&dpr=1);
  background-position: center, bottom left;
  background-size: cover, cover;
  align-items: flex-start;
  padding: 7.5rem 3rem 6rem;
  height: 75vh;
  max-height: 72rem;
  
  @media (min-width: 577px) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
      url(https://images.pexels.com/photos/133325/pexels-photo-133325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600&dpr=1);
    background-position: center, bottom left;
    background-size: cover, cover;
    height: fit-content;
    padding: 15rem 3rem 6rem;
    max-height: 45rem;
  }
`;

export default HeroBanner;

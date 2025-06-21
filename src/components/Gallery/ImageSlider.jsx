import React from 'react';
import styled from 'styled-components';

// ✅ Image Array
const images = [
  'src/assets/gallery/9.png',
  'src/assets/gallery/8.png',
  'src/assets/gallery/7.jpg',
  'src/assets/p/p-12.png',
  'src/assets/p/p-11.png',
  'src/assets/gallery/2.png',
  'src/assets/gallery/3.png',
  'src/assets/gallery/6.jpg',
  
];

const Card = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="inner" style={{ '--quantity': images.length }}>
          {images.map((imgSrc, index) => (
            <div className="card" key={index} style={{ '--index': index }}>
              <img className="img" src={imgSrc} alt={`Card ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 4rem 0;
  margin: 0;

  .wrapper {
    width: 100vw;
    height: calc(100vh - 8rem); /* Adjust height based on padding */
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    overflow: visible;
  }

  .inner {
    --w: clamp(120px, 25vw, 300px);
    --h: clamp(160px, 35vw, 400px);
    --translateZ: clamp(250px, 40vw, 500px);
    --rotateX: -16deg;
    --perspective: 1000px;

    width: var(--w);
    height: var(--h);
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0deg);
    }
    100% {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(360deg);
    }
  }

  .card {
    position: absolute;
    inset: 0;
    transform: rotateY(calc(360deg / var(--quantity) * var(--index)))
      translateZ(var(--translateZ));
    border-radius: 16px;
    overflow: hidden;
    border: none;
    background: transparent;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 375px) {
    .inner {
      --w: 120px;
      --h: 160px;
      --translateZ: 220px;
    }
  }

  @media (max-width: 300px) {
    .inner {
      --w: 140px;
      --h: 40px;
      --translateZ: 200px;
    }
  }
    /* 📱 Padding for medium (md) devices (Tablets and small laptops) */
@media (min-width: 768px) and (max-width: 1024px) {
  .wrapper {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
/* 📱 Body padding for medium devices (Tablets and small laptops) */
@media (min-width: 768px) and (max-width: 1024px) {
  padding-top: 2rem;
  padding-bottom: 2rem;

  .wrapper {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

    /* ✅ Default (Desktop & Large screens) */
.inner {
  --w: clamp(140px, 30vw, 340px);
  --h: clamp(140px, 30vw, 340px);
  --translateZ: clamp(180px, 40vw, 400px);
  --rotateX: -16deg;
  --perspective: 1000px;
}
@media (min-width: 1440px) {
  .inner {
    --w: 300px;
    --h: 230px;
    --translateZ: 500px;
  }
}
/* 🖥️ Extra Large Screens */
@media (min-width: 1440px) {
  .inner {
    --w: 300px;
    --h: 240px;
    --translateZ: 500px;
  }
}

/* 💻 Laptops */
@media (max-width: 1024px) {
  .inner {
    --w: 250px;
    --h: 320px;
    --translateZ: 480px;
  }
}

/* 📱 Tablets */
@media (max-width: 768px) {
  .inner {
    --w: 200px;
    --h: 300px;
    --translateZ: 400px;
  }
}

/* 📱 Phones (large) */
@media (max-width: 600px) {
  .inner {
    --w: 160px;
    --h: 240px;
    --translateZ: 300px;
  }
}

/* 📱 Phones (medium) */
@media (max-width: 425px) {
  .inner {
    --w: 140px;
    --h: 200px;
    --translateZ: 260px;
  }
}

/* 📱 Phones (small) */
@media (max-width: 375px) {
  .inner {
    --w: 120px;
    --h: 160px;
    --translateZ: 220px;
  }
}

/* 📱 Extra Small Phones */
@media (max-width: 320px) {
  .inner {
    --w: 100px;
    --h: 140px;
    --translateZ: 200px;
  }
}

`;

export default Card;

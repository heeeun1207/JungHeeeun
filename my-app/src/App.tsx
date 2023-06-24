import React from 'react';
import './styles.css';

const LandingPage = () => {
  return (
    <div className="landing-page container">
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      
      <main>
        <h1>Welcome to Our always spring Bakery "늘봄"</h1>
        <p>Discover the delicious world of artisan breads</p>
        <button>Explore Now</button>
        
        <h2>About Us</h2>
        <p>정희은</p>

        <h2>Our Products</h2>
        <div className="product-card">
          <img src="/images/figs.jpg" alt="Fig" />
          <h3>Fig cake</h3>
          <p>오픈토스트 무화과 🥰</p>
        </div>
        <div className="product-card">
          <img src="/images/peanutbutter.jpg" alt="peanut" />
          <h3>Peanutbutter toast</h3>
          <p>🐈🐈🐈🐈‍</p>
        </div>
        <div className="product-card">
          <img src="/images/bagel.jpg" alt="Bread" />
          <h3>Strawberry bagel</h3>
          <p>🍓🍓🍓🍓</p>
        </div>
       
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
      </main>
      
      <footer>
        <p>&copy; 2023 "always spring" Bakery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

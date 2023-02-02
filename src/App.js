import logo from "./assets/Logo.svg";
import image from "./assets/restauranfood.jpg"
function App() {
  return (
    <div className="layout">
    <header>
      <nav>
        <ul className="nav">
          <li>
            <img src={logo} alt="logo" />
          </li>
          <li>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
      <main>
      <section className="hero">
      <div>
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <button>Reserve a table</button>
      </div>
        <img className="hero-image" src={image} alt="logo" />
      </section>
      <section className="highlights">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <section className="testimonials"></section>
      <section className="About">
        <div className="about-text"></div>
        <div className="about-images"></div>
      </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

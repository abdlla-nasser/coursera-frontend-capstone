import logo from "./assets/Logo.svg";
import image from "./assets/restauranfood.jpg"
function App() {
  return (
    <div className="grid">
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
        <card></card>
        <card></card>
        <card></card>
      </section>
    </div>
  );
}

export default App;

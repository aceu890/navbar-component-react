export default function Header(props) {
  return (
    
    <header className="header">
      <a href="home.html" className="logo">
        <i className={props.imgLogo}></i>{props.logoName}</a>

      <nav className="navbar">
        <a href="home.html">{props.navbar1}</a>
        <a href="shop.html">{props.navbar2}</a>
        <a href="about.html">{props.navbar3}</a>
        <a href="review.html">{props.navbar4}</a>
        <a href="blog.html">{props.navbar5}</a>
        <a href="contact.html">{props.navbar6}</a>
      </nav>

      <div className="icons">
        <div id="menu-btn" className="fas fa-bars"></div>
        <div id="search-btn" className="fas fa-search"></div>
        <div id="cart-btn" className="fas fa-shopping-cart"></div>
        <div id="login-btn" className="fas fa-user"></div>
      </div>

      <form action="" className="search-form">
        <input type="search" placeholder="busca aquí..." id="search-box" />
        <label for="search-box" className="fas fa-search"></label>
      </form>

      <div className="shopping-cart">
        <div className="box">
          <i className="fas fa-times"></i>
          <img src="image/cart-1.jpg" alt="" />
          <div className="content">
            <h3>Moby Dick</h3>
            <span className="quantity">1</span>
            <span className="multiply">x</span>
            <span className="price">18.99</span>
          </div>
        </div>

        <div className="box">
          <i className="fas fa-times"></i>
          <img src="image/cart-2.jpg" alt="" />
          <div className="content">
            <h3>White Widow</h3>
            <span className="quantity">1</span>
            <span className="multiply">x</span>
            <span className="price">18.99</span>
          </div>
        </div>

        <div className="box">
          <i className="fas fa-times"></i>
          <img src="image/cart-3.jpg" alt="" />
          <div className="content">
            <h3>Critical +</h3>
            <span className="quantity">1</span>
            <span className="multiply">x</span>
            <span className="price">18.99</span>
          </div>
        </div>
        <h3 className="total">
          {" "}
          total : <span>56.97</span>
        </h3>
        <a href="#" className="btn">
          checkout cart
        </a>
      </div>

      <form action="" className="login-form">
        <h3>
          <i className="fas fa-cannabis"></i> login form
        </h3>
        <input type="email" placeholder="enter your email" className="box" />
        <input
          type="password"
          placeholder="enter your password"
          className="box"
        />
        <div className="remember">
          <input type="checkbox" name="" id="remember-me" />
          <label for="remember-me">remember me</label>
        </div>

        <input type="submit" value="login now" className="btn" />
        <p>
          forget password? <a href="#">click here</a>
        </p>
        <p>
          don't have an account <a href="#">create one</a>
        </p>
      </form>
    </header>
  
  );
}

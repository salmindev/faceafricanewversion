import { LitElement, html, css } from 'https://cdn.skypack.dev/pin/lit@v2.3.1-xx2m8Ol8q0zpWqDkqruF/mode=imports,min/optimized/lit.js';

class FooterComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .top-bar {
      background-color: #f8f9fa;
      color: white;
      padding: 5px 0;
      font-size: 14px;
    }
    .top-bar a {
      color: white;
      margin-right: 15px;
      text-decoration: none;
    }
    .top-bar a:hover {
      text-decoration: underline;
    }
    .top-bar .social-icons {
      display: flex;
      justify-content: flex-end;
    }
    .navbar {
      background-color: black;
      padding: 0.5rem 1rem;
    }
    .box h5{
      color:white;
      width:200px;
      text-align:center;
    }
    .scrolled {
      background-color: rgba(255, 255, 255,1) !important;
      color: black !important;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }
    .scrolled a{
     color:black;
    }  
    .scrolled .box a{
      color:black;
    } 
    .fixed-top {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1030;
    }
   
   
    .nav-link {
      
      color:black;
      margin-right: 20px;
      font-size: 16px;
    }
    .nav-link.active {
      color: #f15d30;
    }
    .nav-link:hover {
      color: #f15d30;
    }
    .navbar-toggler {
      border-color: rgba(0, 0, 0, 0.1);
    }
    
    .btn-primary:hover {
      background-color: #e5551d;
      border-color: #e5551d;
    }
    .divider {
      margin: 0 10px;
      border-left: 1px solid #ccc;
      height: 15px;
    }
     .dropdown-menu {
      display: none;
      position: absolute;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
      z-index: 1000;
    }
    .dropdown.show .dropdown-menu {
      display: block;
    }
    .dropdown:hover .dropdown-menu {
      display: block;
      margin-top: 0; /* Optional: Adjust this value to control spacing between the dropdown and the nav item */
    }
    .box{
     display:flex;
     flex-direction: column;
     justify-content: center;
     align-items: space-around;
    }
    .sticky {
      position: sticky;
      top: 15%;
      z-index: 1;
      /* Ensure it's above other content */
      background-color: white;
      /* Adjust as needed */
      padding: 10px 0;
      /* Adjust as needed */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      /* Optional: Add a shadow */
    }
    
    .sticky button {
      border: 1px solid #f15d30;
    }
    
    .sticky button:active {
      background-color: #f15d30;
    }

    .mega-menu1 {
      width: 900px;
      margin-left: -180px;
    }
    
    .mega-menu1 a:hover {
      text-decoration: underline;
      color: rgb(255, 255, 255);
    }
    
    /* Adjust width for mobile devices */
    @media (max-width: 767px) {
      .mega-menu1 {
        max-width: 400px;
        margin-left: 5px;
      }
    
      /* Style for navbar when screen width is less than or equal to 767px */
      .navbar-nav {
        max-height: 80vh;
        /* Adjust max-height as needed */
        overflow-y: auto;
        /* Enable vertical scrolling */
      }
    }
    
    @media (max-width: 991.98px) {
      .dropdown-menu {
        position: static;
        float: none;
        box-shadow: none;
      }
      .dropdown:hover .dropdown-menu {
        display: none; /* Disable hover behavior on mobile */
      }
      .dropdown.show .dropdown-menu {
        display: block;
      }
    }

    body {
      padding-top: 120px; /* Adjust this value based on your navbar's height */
    }
     

    .mega-menu1 {
  width: 900px;
  margin-left: -180px;
  z-index: 1000;
  background-color:white;
}
 

.mega-menu1 a:hover {
  text-decoration: underline;
  color: rgb(255, 255, 255);
}

/* Adjust width for mobile devices */
@media (max-width: 767px) {
  .mega-menu1 {
    max-width: 100%;
    
  }


  /* Style for navbar when screen width is less than or equal to 767px */
  .navbar-nav {
    max-height: 80vh;
    /* Adjust max-height as needed */
    overflow-y: auto;
    /* Enable vertical scrolling */
  }
}
 
}
  `;

  constructor() {
    super();
    // Add the favicon to the document head
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.href = 'favicon/favicon.ico'; // Replace with the actual path to your favicon
    document.head.appendChild(faviconLink);

     // Add Google Analytics script
     const script = document.createElement('script');
     script.src = 'https://www.googletagmanager.com/gtag/js?id=G-EP6X0NYLM7';
     script.async = true;
     document.head.appendChild(script);
 
     script.onload = () => {
       const gaScript = document.createElement('script');
       gaScript.textContent = `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         
       `;
       document.head.appendChild(gaScript);
     };

    this.isCollapsed = true;  // State to track the collapse state
  }
  handleScroll() {
    const navbar = this.shadowRoot.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  toggleCollapse() {
    const collapseElement = this.shadowRoot.querySelector('#ftco-nav');
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      collapseElement.classList.remove('show');
    } else {
      collapseElement.classList.add('show');
    }
  }

  toggleDropdown(event) {
    const dropdown = event.currentTarget;
    dropdown.classList.toggle('show');
  }
  

  render() {
    return html`
    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600&family=Roboto&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">


    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
  
    <!-- Tour Booking Start -->
    <div class="container-fluid booking py-5">
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                    <h5 class="section-booking-title pe-3">Booking</h5>
                    <h1 class="text-white mb-4">Online Booking</h1>
                    <p class="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                        maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus
                        praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                    </p>
                    <p class="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                        maxime ullam esse fuga blanditiis accusantium pariatur quis sapiente, veniam doloribus
                        praesentium? Repudiandae iste voluptatem fugiat doloribus quasi quo iure officia.
                    </p>
                    <a href="#" class="btn btn-light text-primary rounded-pill py-3 px-5 mt-2">Read More</a>
                </div>
                <div class="col-lg-6">
                    <h1 class="text-white mb-3">Book A Tour Deals</h1>
                    <p class="text-white mb-4">Get <span class="text-warning">50% Off</span> On Your First Adventure
                        Trip With Travela. Get More Deal Offers Here.</p>
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control bg-white border-0" id="name"
                                        placeholder="Your Name">
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control bg-white border-0" id="email"
                                        placeholder="Your Email">
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating date" id="date3" data-target-input="nearest">
                                    <input type="text" class="form-control bg-white border-0" id="datetime"
                                        placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                    <label for="datetime">Date & Time</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <select class="form-select bg-white border-0" id="select1">
                                        <option value="1">Destination 1</option>
                                        <option value="2">Destination 2</option>
                                        <option value="3">Destination 3</option>
                                    </select>
                                    <label for="select1">Destination</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <select class="form-select bg-white border-0" id="SelectPerson">
                                        <option value="1">Persons 1</option>
                                        <option value="2">Persons 2</option>
                                        <option value="3">Persons 3</option>
                                    </select>
                                    <label for="SelectPerson">Persons</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <select class="form-select bg-white border-0" id="CategoriesSelect">
                                        <option value="1">Kids</option>
                                        <option value="2">1</option>
                                        <option value="3">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <label for="CategoriesSelect">Categories</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control bg-white border-0" placeholder="Special Request"
                                        id="message" style="height: 100px"></textarea>
                                    <label for="message">Special Request</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary text-white w-100 py-3" type="submit">Book Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Tour Booking End -->

    <!-- Subscribe Start -->
    <div class="container-fluid subscribe py-5">
        <div class="container text-center py-5">
            <div class="mx-auto text-center" style="max-width: 900px;">
                <h5 class="subscribe-title px-3">Subscribe</h5>
                <h1 class="text-white mb-4">Our Newsletter</h1>
                <p class="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam,
                    architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium
                    fugiat corrupti eum cum repellat a laborum quasi.
                </p>
                <div class="position-relative mx-auto">
                    <input class="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text"
                        placeholder="Your email">
                    <button type="button"
                        class="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Subscribe End -->
  
    <!-- Footer Start -->
    <div class="container-fluid footer py-5">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="mb-4 text-white">Get In Touch</h4>
                        <a href=""><i class="fas fa-home me-2"></i> Sakina Oil com</a>
                        <a href=""><i class="fas fa-envelope me-2"></i> info@faceafricaadventures.com</a>
                        <a href=""><i class="fas fa-phone me-2"></i> +255 784 162 038</a>
                        <a href="" class="mb-3"><i class="fas fa-print me-2"></i> +255 784 162 038</a>
                        <div class="d-flex align-items-center">
                            <i class="fas fa-share fa-2x text-white me-2"></i>
                            <a class="btn-square btn btn-primary rounded-circle mx-1" href=""><i
                                    class="fab fa-facebook-f"></i></a>
                            <a class="btn-square btn btn-primary rounded-circle mx-1" href=""><i
                                    class="fab fa-twitter"></i></a>
                            <a class="btn-square btn btn-primary rounded-circle mx-1" href=""><i
                                    class="fab fa-instagram"></i></a>
                            <a class="btn-square btn btn-primary rounded-circle mx-1" href=""><i
                                    class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="mb-4 text-white">Company</h4>
                        <a href=""><i class="fas fa-angle-right me-2"></i> About</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Careers</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Blog</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Press</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Gift Cards</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Magazine</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="mb-4 text-white">Support</h4>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Contact</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Legal Notice</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Privacy Policy</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Terms and Conditions</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Sitemap</a>
                        <a href=""><i class="fas fa-angle-right me-2"></i> Cookie policy</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item">
                        <div class="row gy-3 gx-2 mb-4">
                            <div class="col-xl-6">
                                <form>
                                    <div class="form-floating">
                                        <select class="form-select bg-dark border" id="select1">
                                            <option value="1">Arabic</option>
                                            <option value="2">German</option>
                                            <option value="3">Greek</option>
                                            <option value="3">New York</option>
                                        </select>
                                        <label for="select1">English</label>
                                    </div>
                                </form>
                            </div>
                            <div class="col-xl-6">
                                <form>
                                    <div class="form-floating">
                                        <select class="form-select bg-dark border" id="select1">
                                            <option value="1">USD</option>
                                            <option value="2">EUR</option>
                                            <option value="3">INR</option>
                                            <option value="3">GBP</option>
                                        </select>
                                        <label for="select1">$</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <h4 class="text-white mb-3">Payments</h4>
                        <div class="footer-bank-card">
                            <a href="#" class="text-white me-2"><i class="fab fa-cc-amex fa-2x"></i></a>
                            <a href="#" class="text-white me-2"><i class="fab fa-cc-visa fa-2x"></i></a>
                            <a href="#" class="text-white me-2"><i class="fas fa-credit-card fa-2x"></i></a>
                            <a href="#" class="text-white me-2"><i class="fab fa-cc-mastercard fa-2x"></i></a>
                            <a href="#" class="text-white me-2"><i class="fab fa-cc-paypal fa-2x"></i></a>
                            <a href="#" class="text-white"><i class="fab fa-cc-discover fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->

    <!-- Copyright Start -->
    <div class="container-fluid copyright text-body py-4">
        <div class="container">
            <div class="row g-4 align-items-center">
                <div class="col-md-6 text-center text-md-end mb-md-0">
                    <i class="fas fa-copyright me-2"></i><a class="text-white" href="#">Face of Africa Adventures</a>, All right
                    reserved.
                </div>
                
            </div>
        </div>
    </div>

    <!-- Copyright End -->
    
    `;
  }
}

customElements.define('footer-component', FooterComponent);

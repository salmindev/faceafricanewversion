import { LitElement, html, css } from 'https://cdn.skypack.dev/pin/lit@v2.3.1-xx2m8Ol8q0zpWqDkqruF/mode=imports,min/optimized/lit.js';



class NavbarComponent extends LitElement {
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
   <!-- Topbar Start -->
   <div class="container-fluid px-5 d-none d-lg-block" style="background-color: #E8AB03;">
       <div class="row gx-0">
           <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
               <div class="d-inline-flex align-items-center" style="height: 45px;">
                   <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                           class="fab fa-twitter fw-normal"></i></a>
                   <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                           class="fab fa-facebook-f fw-normal"></i></a>
                   <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                           class="fab fa-linkedin-in fw-normal"></i></a>
                   <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                           class="fab fa-instagram fw-normal"></i></a>
                   <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i
                           class="fab fa-youtube fw-normal"></i></a>
               </div>
           </div>
           <div class="col-lg-4 text-center text-lg-end">
               <div class="d-inline-flex align-items-center" style="height: 45px;">
                   <a href="#"><small class="me-3 text-light"><i class="fa fa-user me-2"></i>+255 784 162
                           038</small></a>
                   <a href="#"><small class="me-3 text-light"><i
                               class="fa fa-sign-in-alt me-2"></i>info@faceafricaadventurs.com</small></a>

               </div>
           </div>
       </div>
   </div>
   <!-- Topbar End -->

   <!-- Navbar & Hero Start -->
   <div class="container-fluid position-relative p-0">
       <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0 fixed-top" id="ftco-navbar">
           <a href="" class="navbar-brand p-0">
               <img src="images/logo.avif" style="height: 220px; background-color:white;" alt="Logo">
           </a>
           <button  class="navbar-toggler" type="button" @click="${this.toggleCollapse}" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="fa fa-bars"></span>
           </button>
           <div class="collapse navbar-collapse text-dark" id="ftco-nav">
               <div class="navbar-nav ms-auto py-0 text-dark">
                   <a href="index.html" class="nav-item nav-link">Safari</a>
                   <a href="about.html" class="nav-item nav-link text-white" style="color:black;">Kilimanjaro</a>
                   <a href="services.html" class="nav-item nav-link text-white">Zanzibar</a>
                   <a href="packages.html" class="nav-item nav-link text-white">Daytrips</a>
                   <a href="blog.html" class="nav-item nav-link">Blog</a>
                   <div class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About us</a>
                       <div class="dropdown-menu m-0">
                           <a href="destination.html" class="dropdown-item">Destination</a>
                           <a href="tour.html" class="dropdown-item">Explore Tour</a>
                           <a href="booking.html" class="dropdown-item">Travel Booking</a>
                           <a href="gallery.html" class="dropdown-item">Our Gallery</a>
                           <a href="guides.html" class="dropdown-item">Travel Guides</a>
                           <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                           <a href="404.html" class="dropdown-item">404 Page</a>
                       </div>
                   </div>
                   <a href="contact.html" class="nav-item nav-link">Contact</a>
               </div>
               <a href="" class="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Send a Request</a>
           </div>
       </nav>

      
   </div>
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);

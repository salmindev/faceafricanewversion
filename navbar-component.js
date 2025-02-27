import { LitElement, html, css } from 'https://cdn.skypack.dev/pin/lit@v2.3.1-xx2m8Ol8q0zpWqDkqruF/mode=imports,min/optimized/lit.js';

class NavbarComponent extends LitElement {
  static styles = css`
    #ftco-navbar{
      position:fixed;
      top:0;
    }
    .nav-link:hover{
      background-color:#E8AB03;
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

  firstUpdated() {
    // Initialize Bootstrap's offcanvas functionality
    const offcanvasElement = this.shadowRoot.querySelector('#offcanvasRight');
    this.offcanvas = new bootstrap.Offcanvas(offcanvasElement);

    // Add event listeners for offcanvas toggle
    const offcanvasToggle = this.shadowRoot.querySelector('[data-bs-toggle="offcanvas"]');
    offcanvasToggle.addEventListener('click', () => this.toggleOffcanvas());
  }

  toggleOffcanvas() {
    if (this.offcanvas) {
      this.offcanvas.toggle();
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
   

    <div class="navbar navbar-expand-lg navbar-light  text-dark  d-none d-md-block" id="ftco-navbar" style="margin-top:-10px;">
     <!-- Topbar Start -->
    <div class="container-fluid px-5 d-none d-lg-block border border-bottom border-1 border-warning" style="background-color: white;">
        <div class="row ">
          <div class="col-lg-4 text-center text-lg-end d-flex justify-content-center align-items-center">
            <div class="d-inline-flex align-items-center" style="height: 45px;">
            <a href="#"><small class="me-3 text-dark">info@faceafricaadventurs.com</small></a>
            <a href="#"><small class="me-3 text-dark">+255 784 162 038</small></a>
          </div>
        </div>
            <div class="col-lg-4 text-center text-lg-start mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                <img class="img-fluid rounded-circle border border-1 border-dark mx-1" src="images/united-states.avif" alt="american" style="width: 27px;height: 27px;">
              <img class="img-fluid rounded-circle border border-1 border-dark mx-1" src="images/france.avif" alt="france" style="width: 27px;height: 27px;">
               <img class="img-fluid rounded-circle border border-1 border-dark mx-1" src="images/flag.avif" alt="spain" style="width: 27px;height: 27px;">
               <img class="img-fluid rounded-circle border border-1 border-dark mx-1" src="images/italy(1).avif" alt="italy" style="width: 27px;height: 27px;">
              <img class="img-fluid rounded-circle border border-1 border-dark mx-1" src="images/germany.avif" alt="german" style="width: 27px;height: 27px;">
              <img class="img-fluid rounded-circle border border-1 border-dark mx-1" src="images/russia.webp" alt="russian" style="width: 27px;height: 27px;">
                </div>
            </div>
           
            <div class="col-lg-4 text-center text-lg-start mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                <div class="d-flex justify-content-between align-items-center " >
                    <a class="btn btn-sm btn-outline-light btn-sm-square border border-1 border-dark rounded-circle mx-1" href="" style="background-color:#4267B2;"><i
                            class="fab fa-facebook-f fw-normal text-white"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2  border border-1 border-dark mx-1" href="" style="background-color:#0077B5;"><i
                            class="fab fa-linkedin-in fw-normal text-white"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2  border border-1 border-dark mx-1" href="" style="background:linear-gradient(#f9ce34, #ee2a7b, #6228d7);"><i
                            class="fab fa-instagram fw-normal text-whit"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle  border border-1 border-dark mx-1" href=""><i
                            class="fab fa-youtube fw-normal text-danger"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle  border border-1 border-dark mx-1"style="background:#25D366;" href=""><i
                            class="fab fa-whatsapp fw-normal text-white"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->
    <div class="px-3 collapse navbar-expand-lg navbar-collapse text-dark  d-flex justify-content-between align-items-center bg-white"
        id="ftco-nav">
        <div class="navbar-nav d-flex align-items-center">
            <a href="" class="navbar-brand">
                <img src="images/logo.avif" style="height: 460px; " alt="Logo">
            </a>

            <a href="/" class="nav-item nav-link" style="color:black;">Home</a>
            <a href="/about-us" class="nav-item nav-link" style="color:black;">About us</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Destinations</a>
                <div class="dropdown-menu m-0">
                    <a href="/tanzania-destinations" class="dropdown-item">Tanzania</a>
                    <a href="/kenya-destinations" class="dropdown-item">Kenya</a>
                    <a href="/uganda-destinations" class="dropdown-item">Uganda</a>
                    <a href="/rwanda-destinations" class="dropdown-item">Rwanda</a>
                    <a href="/south-africa-destinations" class="dropdown-item">South Africa</a>

                </div>
            </div>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Safari</a>
                <div class="dropdown-menu m-0">
                    <a href="/tanzania-safari" class="dropdown-item">Tanzania</a>
                    <a href="/kenya-safari" class="dropdown-item">Kenya</a>
                    <a href="/uganda-safari" class="dropdown-item">Uganda</a>
                    <a href="/south-africa-safari" class="dropdown-item">South Africa</a>
                    <a href="/tanzania-national-park" class="dropdown-item">Tanzania National Parks</a>
                </div>
            </div>
            <a href="/climbing-kilimanjaro" class="nav-item nav-link text-white"
                style="color:black;">Kilimanjaro</a>
            <a href="/zanzibar-island" class="nav-item nav-link text-white">Zanzibar</a>
            <a href="/accommodation" class="nav-item nav-link" style="color:black;">Accommodations</a>
            <a href="/" class="nav-item nav-link">Blog</a>
            <a href="/contact.html" class="nav-item nav-link">Contact</a>
            <a href="/tailor-made-tour" class="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Send a Request</a>

        </div>
       
    </div>
</div>
<nav class="container py-3 d-md-none navbar" style="margin-top:-35px;width:100%;">
<div class="d-flex justify-content-between align-items-center py-4 w-100">
              <a href="<?php echo $base_url; ?>"><img src="images/logo.avif" alt="Face Of Africa adventure" title="Face Of Africa adventure" style="width:120px; height:70px;"></a>
               <h6>info@faceafricaadventures.com<br>
                   +255 784 162 038
               </h6>
       <div>
   
</nav>
<nav class="container-fluid hide-menu d-md-none  d-block  " style="background-color: #E8AB03; position:fixed; bottom:0px;width:100%;z-index:1000;">
<div class="row">
  <ul class="d-flex justify-content-between align-items-center w-100 py-3" style="list-style: none;">
    <li class="text-dark d-flex align-items-center flex-column fw-bold"><a href="/" class="text-dark fs-6"><i class="fas fa-home d-block fa-2x text-center"></i>Home</a></li>
    <li class="text-dark d-flex align-items-center flex-column fw-bold"><a href="african-safaris" class="text-dark fs-6"><i class='fas fa-hippo fa-2x d-block text-center text-dark'></i>Safari</a></li>
    <li class="text-dark d-flex align-items-center flex-column fw-bold"><a href="climbing-kilimanjaro" class="text-dark fs-6"><i class="fas fa-mountain fa-2x d-block text-center"></i>Kilimanjaro</a></li>
    <li class="text-dark d-flex align-items-center flex-column fw-bold"><a href="contact" class="text-dark fs-6"><i class="fas fa-phone-volume fa-2x d-block text-center"></i>Contact</a></li>
    <li class="text-dark d-flex align-items-center flex-column fw-bold"><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fas fa-stream fa-2x d-block fw-bold text-center "></i>Menu</a></li>
  </ul>
  </div>
   <div class="offcanvas offcanvas-end  pb-5" style="width:80%;" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <div class="logo pt-3" style="width: 120px; height: 70px; background-image: url('images/logo.avif');background-position: center;background-repeat: no-repeat;background-size: cover;"></div>
      <button type="button" class="btn-close fs-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>

    </div>
      
    <div class=" px-5 d-flex flex-column">
    <div class="nav-item dropdown py-3" @click="${this.toggleDropdown}">
     <a href="#safari" class="text-dark py-3 fs-2 fw-bold dropdown-toggle" role="button" aria-expanded="false" style="text-decoration: none;">SAFARIS<i class="bi bi-chevron-down ms-2"></i></a>
          <ul class="fs-3 dropdown-menu">
            <li class="py-2 dropdown-item" style="list-style: circle;"><a class="text-black" href="tanzania-safari">Tanzania</a></li>
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="kenya-safari">Kenya</a></li>
            <li class="py-2 dropdown-item" style="list-style: circle;"><a class="text-black" href="uganda-safari">Uganda</a></li>
            <li class="py-2 dropdown-item" style="list-style: circle;"><a class="text-black" href="rwanda-safari">Rwanda</a></li>
            <li class="py-2 dropdown-item" style="list-style: circle;"><a class="text-black" href="south-africa-safari">South Africa</a></li>
          </ul>
      </div> 
      <div class="nav-item dropdown py-3" @click="${this.toggleDropdown}">   
     <a href="#destinations" class="text-dark py-3 fs-2 fw-bold dropdown-toggle" role="button" aria-expanded="false" style="text-decoration: none;">DESTINATIONS<i class="bi bi-chevron-down ms-2"></i></a>
     
          <ul class="fs-3 dropdown-menu">
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="tanzania-destinations">Tanzania</a></li>
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="kenya-destinations">Kenya</a></li>
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="uganda-destinations">Uganda</a></li>
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="rwanda-destinations">Rwanda</a></li>
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="south-africa-destinations">South Africa</a></li>
          </ul>
     </div>
     <div class="nav-item dropdown py-3" @click="${this.toggleDropdown}">
     <a href="#trekking" class="text-dark py-3 fs-2 fw-bold dropdown-toggle" role="button" aria-expanded="false" style="text-decoration: none;">TREKKING<i class="bi bi-chevron-down ms-2"></i></a>
     
          <ul class="fs-3 dropdown-menu">
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="6-days-marangu-route">06 Days Marangu Route</a></li>
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="7-days-machame-route">07 Days Machame Route</a></li>
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="9-days-lemosho-route">09 Days Lemosho Route</a></li>
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="8-days-rongai-route">08 Days Rongai Route</a></li>
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="3-days-mount-meru-climbing">03 Days Mount Meru</a></li>
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="mount-kenya-climbing">Mount Kenya</a></li>
            <li class="py-2 dropdown-item"  style="list-style: circle;"><a class="text-black" href="mount-ol-doinyo-lengai-climbing">Mount Oldoinyo</a></li>
          </ul>
     </div>
     <a href="zanzibar-island" class="text-dark py-3 fs-2 fw-bold" data-bs-toggle="collapse" style="text-decoration: none;">ISLANDS</a>
      <a href="blog"  class="text-dark py-3 fs-2 fw-bold" >Blog</a>
     <a href="accommodation"  class="text-dark py-3 fs-2 fw-bold" >Accommodation</a>
     <a href="about-us"  class="text-dark py-3 fs-2 fw-bold" >About Us</a>
     <div class="row  justify-content-between align-items-center">
     <a href="/tailor-made-tour" class="btn btn-primary rounded-pill py-2 px-2 col-6">Plan a trip</a>
     <a href="https://api.whatsapp.com/send?phone=+255784162038" class="col-6 text-center"><button class="btn bg-success px-2 py-2 fs-5 text-white rounded-pill"><i class="bi bi-whatsapp pe-2 text-center"></i>Chat</button></a>
     </div> 
     <div class="container mt-4 d-flex justify-content-between align-items-center">
     <div class="d-flex justify-content-between align-items-center " >
                 
     <a class="btn btn-sm btn-outline-light btn-sm-square border border-1 border-dark rounded-circle mx-1" href="" style="background-color:#4267B2;"><i
             class="fab fa-facebook-f fw-normal text-white"></i></a>
     <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2  border border-1 border-dark mx-1" href="" style="background-color:#0077B5;"><i
             class="fab fa-linkedin-in fw-normal text-white"></i></a>
     <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2  border border-1 border-dark mx-1" href="" style="background:linear-gradient(#f9ce34, #ee2a7b, #6228d7);"><i
             class="fab fa-instagram fw-normal text-whit"></i></a>
     <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle  border border-1 border-dark mx-1" href=""><i
             class="fab fa-youtube fw-normal text-danger"></i></a>
    </div>
     </div>
    </div>

  </div>
</div>
</nav>

    `;
  }
}

customElements.define('navbar-component', NavbarComponent);
 
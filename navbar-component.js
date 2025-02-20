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
                <img class="img-fluid px-2" src="images/united-states.avif" alt="american" style="width: 36px;height: 27px;">
              <img class="img-fluid px-2" src="images/france.avif" alt="france" style="width: 36px;height: 27px;">
               <img class="img-fluid px-2" src="images/flag.avif" alt="spain" style="width: 36px;height: 27px;">
               <img class="img-fluid px-2" src="images/italy(1).avif" alt="italy" style="width: 36px;height: 27px;">
              <img class="img-fluid px-2" src="images/germany.avif" alt="german" style="width: 36px;height: 27px;">
              <img class="img-fluid px-2" src="images/russia.webp" alt="russian" style="width: 36px;height: 27px;">
                </div>
            </div>
           
            <div class="col-lg-4 text-center text-lg-start mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                  
                    <a class="btn btn-sm btn-outline-light btn-sm-square border border-1 border-dark rounded-circle me-2" href=""><i
                            class="fab fa-facebook-f fw-normal text-dark"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2  border border-1 border-dark" href=""><i
                            class="fab fa-linkedin-in fw-normal text-dark"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2  border border-1 border-dark" href=""><i
                            class="fab fa-instagram fw-normal text-dark"></i></a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle  border border-1 border-dark" href=""><i
                            class="fab fa-youtube fw-normal text-dark"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->
    <div class="px-3 collapse navbar-collapse text-dark  d-flex justify-content-between align-items-center bg-white"
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
            <a href="" class="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Send a Request</a>

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
    <li class="text-dark d-flex align-items-center flex-column fw-bold"><a href="<?php echo $base_url; ? >" class="text-dark fs-6"><i class="fas fa-home d-block fa-2x text-center"></i>Home</a></li>
    <li class="text-dark d-flex align-items-center flex-column fw-bold"><a href="<?php echo $base_url; ?>african-safaris" class="text-dark fs-6"><i class='fas fa-hippo fa-2x d-block text-center text-dark'></i>Safari</a></li>
    <li class="text-dark d-flex align-items-center flex-column fw-bold"><a href="<?php echo $base_url; ?>climbing-kilimanjaro" class="text-dark fs-6"><i class="fas fa-mountain fa-2x d-block text-center"></i>Kilimanjaro</a></li>
    <li class="text-dark d-flex align-items-center flex-column fw-bold"><a href="https://faceafricaadventures.com/contact-form" class="text-dark fs-6"><i class="fas fa-phone-volume fa-2x d-block text-center"></i>Contact</a></li>
    <li class="text-dark d-flex align-items-center flex-column fw-bold"><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fas fa-stream fa-2x d-block fw-bold text-center "></i>Menu</a></li>
  </ul>
  
   <div class="offcanvas offcanvas-end" style="width:80%;" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
    <div class="offcanvas-header">
      <div class="logo" style="width: 120px; height: 70px; background-image: url('<?php echo $base_url; ?>images/logo.avif');background-position: center;background-repeat: no-repeat;background-size: cover;"></div>
       <div id="google_translate_element"></div>
      <script type="text/javascript">
       function googleTranslateElementInit() {
       new google.translate.TranslateElement({ pageLanguage: 'en' ,includedLanguages: 'en,es,fr,de,it,ru'},'google_translate_element');
     }
</script>
<script type="text/javascript"
 src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      <!--<div class="container w-50">
<a href="#lang" class="text-dark py-3 fs-2 fw-bold d-block" data-bs-toggle="collapse" style="text-decoration: none;" aria-expanded="false" aria-controls="lang">Language<i class="bi bi-chevron-down ms-2"></i></a>
     <div id="lang" class="collapse d-block">
          <ul class="fs-3 d-flex flex-column align-items-center justify-content-around">
            <li> <a href="" class="flag_link eng dropdown-item" data-lang="en">EN<img class="img-fluid ps-2" src="<?php echo $base_url;?>images/american.png" alt="american" style="width: 20px;height: 20px;"></a></li>
            <li> <a href="" class="flag_link eng dropdown-item" data-lang="es">FR<img class="img-fluid ps-2" src="<?php echo $base_url;?>images/france.webp" alt="france" style="width: 20px;height: 20px;"></a></li>
            <li> <a href="" class="flag_link eng dropdown-item" data-lang="es">ES<img class="img-fluid ps-2" src="<?php echo $base_url;?>images/spain.png" alt="spain" style="width: 20px;height: 20px;"></a></li>
            <li> <a href="" class="flag_link eng dropdown-item" data-lang="it">IT<img class="img-fluid ps-2" src="<?php echo $base_url;?>images/italy.png" alt="italy" style="width: 20px;height: 20px;"></a></li>
            <li> <a href="" class="flag_link eng dropdown-item" data-lang="de">DE<img class="img-fluid ps-2" src="<?php echo $base_url;?>images/german.ico" alt="german" style="width: 20px;height: 20px;"></a></li>
            <li> <a href="" class="flag_link eng dropdown-item" data-lang="ru">RU<img class="img-fluid ps-2" src="<?php echo $base_url;?>images/russian.webp" alt="russian" style="width: 20px;height: 20px;"></a></li>
          </ul>
     </div>
     </div>
    <div class="offcanvas-body w-50">
      <a href="#lang" class="text-dark py-3 fs-2 fw-bold" style="text-decoration: none;" data-bs-toggle="collapse">Language<i class="bi bi-chevron-down ms-2"></i></a>
     <div id="lang" class="collapse ps-5 ">
           <ul class="fs-3">
            <li> <a href="#" class="flag_link eng " data-lang="en"><img class="img-fluid  py-1" src="<?php echo $base_url;?>images/united-states.png" alt="american" style="width: 21px;height: 22px;"></a></li>
            <li> <a href="#" class="flag_link eng " data-lang="es"><img class="img-fluid  py-1" src="<?php echo $base_url;?>images/france.png" alt="france" style="width: 21px;height: 22px;"></a></li>
            <li> <a href="#" class="flag_link eng " data-lang="es"><img class="img-fluid  py-1" src="<?php echo $base_url;?>images/flag.png" alt="spain" style="width: 21px;height: 22px;"></a></li>
            <li> <a href="#" class="flag_link eng" data-lang="it"><img class="img-fluid py-1" src="<?php echo $base_url;?>images/italy(1).png" alt="italy" style="width: 21px;height: 22px;"></a></li>
            <li> <a href="#" class="flag_link eng " data-lang="de"><img class="img-fluid  py-1" src="<?php echo $base_url;?>images/germany." alt="german" style="width: 21px;height: 22px;"></a></li>
            <li> <a href="#" class="flag_link eng " data-lang="ru"><img class="img-fluid  py-1" src="<?php echo $base_url;?>images/russia.png" alt="russian" style="width: 21px;height: 22px;"></a></li>
          </ul>
     </div>
     </div>
     <div class="dropdown">
          <button class="btn btn-success dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </button>
          <ul class="dropdown-menu">
           <li><a href="#" class="flag_link eng " data-lang="en"><img class="img-fluid  py-1" src="<?php echo $base_url;?>images/united-states.avif" alt="american" style="width: 21px;height: 22px;"><span class="ps-5">EN</span></a></li>
           <li> <a href="#" class="flag_link eng " data-lang="fr"><img class="img-fluid  py-1" src="<?php echo $base_url;?>images/france.avif" alt="france" style="width: 21px;height: 22px;"><span class="ps-5">FR</span></a></li>
           <li> <a href="#" class="flag_link eng " data-lang="es"><img class="img-fluid  py-1" src="<?php echo $base_url;?>images/flag.avif" alt="spain" style="width: 21px;height: 22px;"><span class="ps-5">ES</span></a></li>
           <li> <a href="#" class="flag_link eng" data-lang="it"><img class="img-fluid py-1" src="<?php echo $base_url;?>images/italy(1).avif" alt="italy" style="width: 21px;height: 22px;"><span class="ps-5">IT</span></a></li>
           <li> <a href="#" class="flag_link eng " data-lang="de"><img class="img-fluid  py-1" src="<?php echo $base_url;?>images/germany.avif" alt="german" style="width: 21px;height: 22px;"><span class="ps-5">DE</span></a></li>
           <li> <a href="#" class="flag_link eng " data-lang="ru"><img class="img-fluid  py-1" src="<?php echo $base_url;?>images/russia.webp" alt="russian" style="width: 21px;height: 22px;"><span class="ps-5">RU</span></a></li>
          </ul>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body px-5 d-flex flex-column">
     <a href="#safari" class="text-dark py-3 fs-2 fw-bold" data-bs-toggle="collapse" style="text-decoration: none;">SAFARIS<i class="bi bi-chevron-down ms-2"></i></a>
     <div id="safari" class="collapse ps-5">
          <ul class="fs-3">
            <li class="py-2" style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>9-days-lemosho-route">09 Days Kilimanjaro Lemosho Route</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url; ?>10-days-tanzania-honeymoon-safaris">10 Days Tanzania Honeymoon Safari</a></li>
            <li class="py-2" style="list-style: circle;"><a class="text-black" href="<?php echo $base_url; ?>8-days-tanzania-safari">08 days Tanzania Best Safari</a></li>
            <li class="py-2" style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>12-days-tanzania-private-family-wildlife-safari-and-zanzibar-beach-holiday">12 Days Tanzania Private Family Wildlife Safari</a></li>
            <li class="py-2" style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>5-days-uganda-gorilla-trekking">05 Days Uganda Gorilla Trekking</a></li>
            <li class="py-2" style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>tanzania-camping-safari">06 Days Tanzania Budget Camping Safari</a></li>
            <li class="py-2" style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>10-days-tanzania-private-serengeti-wildebeest-migration-safari">10 Days Tanzania Private Migration Safari</a></li>
            <li class="py-2" style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>12-days-kenya-and-tanzania-safari">12 Days Kenya & Tanzania Safari</a></li>
            <li class="py-2" style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>6-days-tanzania-flying-safari">6 Days Flying Journey Safari</a></li>
            <li class="py-2" style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>11-days-sketching-safari">11 Days Tanzania Sketching Safari</a></li>
            <li class="py-2 text-center" style="list-style: none;"><a class="btn btn-primary" href="<?php echo $base_url;?>african-safaris">View all</a></li>
          </ul>
     </div>

     <a href="#destinations" class="text-dark py-3 fs-2 fw-bold" data-bs-toggle="collapse" style="text-decoration: none;">DESTINATIONS<i class="bi bi-chevron-down ms-2"></i></a>
     <div id="destinations" class="collapse ps-5">
          <ul class="fs-3">
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>tanzania-safaris-destinations">Tanzania</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>kenya-destinations">Kenya</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>uganda-safari-destinations">Uganda</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>rwanda-destinations">Rwanda</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>south-africa-destinations">South Africa</a></li>
          </ul>
     </div>
     <a href="#trekking" class="text-dark py-3 fs-2 fw-bold" data-bs-toggle="collapse" style="text-decoration: none;">TREKKING<i class="bi bi-chevron-down ms-2"></i></a>
     <div id="trekking" class="collapse ps-5">
          <ul class="fs-3">
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>6-days-marangu-route">06 Days Marangu Route</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>7-days-machame-route">07 Days Machame Route</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>9-days-lemosho-route">09 Days Lemosho Route</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>8-days-rongai-route">08 Days Rongai Route</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>3-days-mount-meru-climbing">03 Days Mount Meru</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>mount-kenya-climbing">Mount Kenya</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>mount-ol-doinyo-lengai-climbing">Mount Oldoinyo</a></li>
          </ul>
     </div>
     <a href="#island" class="text-dark py-3 fs-2 fw-bold" data-bs-toggle="collapse" style="text-decoration: none;">ISLANDS<i class="bi bi-chevron-down ms-2"></i></a>
     <div id="island" class="collapse ps-5">
          <ul class="fs-3">
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>zanzibar-holiday">Zanzibar</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>mafia-island">Mafia Island</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>pemba-island">Pemba Island</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>bagamoyo">Bagamoyo</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>stone-town">Stone Town</a></li>
            <li class="py-2 text-center" style="list-style: none;"><a class="btn btn-primary" href="<?php echo $base_url;?>tanzania-beaches">View all</a></li>
          </ul>
     </div>
      <a href="#daytrips" class="text-dark py-3 fs-2 fw-bold" data-bs-toggle="collapse" style="text-decoration: none;">DAY TRIPS<i class="bi bi-chevron-down ms-2"></i></a>
      <div id="daytrips" class="collapse ps-5">
          <ul class="fs-3">
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>ngorongoro-crater-day-trip">Ngorogoro Crater</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>tarangire-day-trip">Tarangire Day Trip</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>lake-duluti-day-trip">Lake Duluti</a></li>
            <li class="py-2"  style="list-style: circle;"><a class="text-black" href="<?php echo $base_url;?>kikuletwa-hot-spring-day-tour">Hot Spring</a></li>
            <li class="py-2 text-center" style="list-style: none;"><a class="btn btn-primary" href="<?php echo $base_url;?>tanzania-day-trips">View all</a></li>
          </ul>
     </div>
      <a href="<?php echo $base_url;?>blog"  class="text-dark py-3 fs-2 fw-bold" >Blog</a>
     <a href="<?php echo $base_url;?>accommodations"  class="text-dark py-3 fs-2 fw-bold" >Accommodation</a>
     <a href="<?php echo $base_url;?>about-face-of-africa-adventures"  class="text-dark py-3 fs-2 fw-bold" >About Us</a>
     <a href="https://api.whatsapp.com/send?phone=+255784162038" class="text-center"><button class="btn bg-success px-4 py-2 fs-1 text-white"><i class="bi bi-whatsapp pe-2 text-center"></i>Whatsapp</button></a>
     <div class="container mt-4 d-flex justify-content-between align-items-center">
        <span><i class="bi bi-instagram fs-1"></i></span>
        <span><i class="bi bi-facebook fs-1"></i></span>
        <span><i class="bi bi-youtube fs-1"></i></span>
        <span><i class="bi bi-twitter-x fs-1"></i></span>
        <span><i class="bi bi-linkedin fs-1"></i></span>
     </div>
    </div>

  </div>
</div>
</nav>

    `;
  }
}

customElements.define('navbar-component', NavbarComponent);

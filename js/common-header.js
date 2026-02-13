document.addEventListener("DOMContentLoaded", function() {
    const header = `
    
    <!-- Header Section Starts -->
  <header class="position-relative z-3">
    <div class="header-nav-menu" id="header-nav-menu">
      <div class="container">
        <div class="header-nav-menu-inner py-4">
          <div class="row align-items-center justify-content-between">
            <div class="d-block d-xl-none col-lg-2 col-md-3 col-5">
              <div class="navbar-logo m-0">
                <a href="index.html"><img src="images/ev-logo-04.png" alt="Logo" class="w-100"></a>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="navbar-nav align-items-center justify-content-between flex-row" id="responsive-menu">
                  <li class="nav-item dropdown">
                    <a class="nav-link  px-3 white text-uppercase fw-medium active" href="index.html" role="button"
                      aria-expanded="false">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-3 py-0 white text-uppercase fw-medium" href="about.html">About US</a>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle px-3 white text-uppercase fw-medium" href="#" role="button"
                      data-bs-toggle="dropdown">
                      Products
                    </a>

                    <ul class="dropdown-menu dropdown-menu-end p-4 shadow border-0 product-dropdown">

                      <div class="row text-center g-4">

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="l5-cargo.html" class="text-decoration-none">
                            <img src="gems/banner.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">L5 Cargo</h6>
                          </a>
                        </div>

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="electric-bike.html" class="text-decoration-none">
                            <img src="gems/e2.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">Electric Bike</h6>
                          </a>
                        </div>

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="e3-wheeler.html" class="text-decoration-none">
                            <img src="gems/e3.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">Electric 3 Wheeler</h6>
                          </a>
                        </div>

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="#" class="text-decoration-none">
                            <img src="gems/banner.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">Electric Scooter</h6>
                          </a>
                        </div>

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="#" class="text-decoration-none">
                            <img src="gems/banner.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">Electric Scooter</h6>
                          </a>
                        </div>

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="#" class="text-decoration-none">
                            <img src="gems/banner.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">Electric Scooter</h6>
                          </a>
                        </div>

                        <!-- Continue same structure -->

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="l5-cargo.html" class="text-decoration-none">
                            <img src="gems/banner.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">L5 Cargo</h6>
                          </a>
                        </div>

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="electric-bike.html" class="text-decoration-none">
                            <img src="gems/e2.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">Electric Bike</h6>
                          </a>
                        </div>

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="e3-wheeler.html" class="text-decoration-none">
                            <img src="gems/e3.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">Electric 3 Wheeler</h6>
                          </a>
                        </div>

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="#" class="text-decoration-none">
                            <img src="gems/banner.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">Electric Scooter</h6>
                          </a>
                        </div>

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="#" class="text-decoration-none">
                            <img src="gems/banner.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">Electric Scooter</h6>
                          </a>
                        </div>

                        <div class="col-6 col-md-4 col-lg-2">
                          <a href="#" class="text-decoration-none">
                            <img src="gems/banner.png" class="product-img mb-2 img-fluid">
                            <h6 class="black">Electric Scooter</h6>
                          </a>
                        </div>


                      </div>

                    </ul>
                  </li>

                  <li class=" mx-2 text-center d-none d-xl-block">
                    <a class="px-3 py-0 text-uppercase fw-medium active text-center" aria-current="page"
                      href="index.html"><img src="gems/logo.png" alt="Logo" class="w-50"></a>
                  </li>


                  <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle px-3 white text-uppercase fw-medium" href="#" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      Products
                    </a>
                  </li> -->

                  <li class="nav-item">
                    <a class="nav-link px-3 py-0 white text-uppercase fw-medium" href="contact.html">News & Events</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link px-3 py-0 white text-uppercase fw-medium" href="contact.html">Blogs</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link px-3 py-0 white text-uppercase fw-medium" href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="slicknav-mobile"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header Section Ends -->

    `

    document.getElementById('header').innerHTML = header
})
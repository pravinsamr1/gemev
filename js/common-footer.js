document.addEventListener("DOMContentLoaded", function() {
    const footer = `
    
    <footer class="rounded3 rounded-bottom-0 mt-9 pb-6">
    <div class="container">
      <div class="footer-inner text-white text-center text-xl-start">
        <div class="footer-body my-7">
          <div class="row gx-md-5 gy-5">
            <div class="col-xl-4">
              <div class="footer-info">
                <div class="footer-logo">
                  <img src="gems/logo.png" alt="footer logo" class="w-60 mb-2">
                </div>
                <div class="footer-info-inner mb-4">
                  <p class="mb-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
                </div>
                <div class="footer-socials d-flex justify-content-center justify-content-xl-start">
                  <a href="" class="rounded-circle text-center me-1 bg-lightdark"><i class="fa fa-facebook"
                      aria-hidden="true"></i></a>
                  <a href="" class="rounded-circle text-center me-1 bg-lightdark"><i class="fa fa-twitter"
                      aria-hidden="true"></i></a>
                  <a href="" class="rounded-circle text-center me-1 bg-lightdark"><i class="fa fa-google-plus"
                      aria-hidden="true"></i></a>
                  <a href="" class="rounded-circle text-center bg-lightdark"><i class="fa fa-instagram"
                      aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-md-6">
              <div class="quick-links">
                <h3 class="text-white mb-2">Quick Link</h3>
                <div class="seperator w-25 border-bottom border-1 border-white mb-6 ms-xl-1 m-auto"></div>
                <ul class="list-unstyled">
                  <li class="mb-4"><a href="about.html">About Us</a></li>
                  <li class="mb-4"><a href="">Our EVs</a></li>
                  <li class="mb-4"><a href="blog-list.html">News & Articles</a></li>
                  <li class="mb-4"><a href="">Policies</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-md-6">
              <div class="quick-links">
                <h3 class="text-white mb-2">Features</h3>
                <div class="seperator w-25 border-bottom border-1 border-white mb-6 ms-xl-1 m-auto"></div>
                <ul class="list-unstyled">
                  <li class="mb-4"><a href="">Support Plans</a></li>
                  <li class="mb-4"><a href="">Benifits</a></li>
                  <li class="mb-4"><a href="">Subscriptions</a></li>
                  <li class="mb-4"><a href="">Payment Methods</a></li>
                  <li class="mb-4"><a href="">Onsite Payment</a></li>
                  <li><a href="">Merchant Refund</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="footer-contact">
                <h3 class="text-white mb-2">Contact Info</h3>
                <div class="seperator w-25 border-bottom border-1 border-white mb-6 ms-xl-1 m-auto"></div>
                <p class="mb-4">Duis aute henderit in asda as irure dolor in repre henderit in voluptat</p>
                <ul class="list-unstyled">
                  <li class="mb-2"><i class="fa fa-map-marker me-2" aria-hidden="true"></i> 256 Elizaberth Ave, CA,
                    90025</li>
                  <li class="mb-2"><a href="tel:+4733378901"><i class="fa fa-phone me-2" aria-hidden="true"></i> +569
                      2316 2156</a></li>
                  <li><a href="mailto:info@website.com"><i class="fa fa-envelope-o me-2" aria-hidden="true"></i>
                      info@evdrivex.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright px-6 py-4 rounded2 text-center position-relative">
          <div class="overlay bg-white rounded2"></div>
          <div class="copyright-inner position-relative">
            <div class="row gy-4">
              <div class="col-lg-6">
                <div class="copyright-links">
                  <ul class="list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-start">
                    <li class="me-4 small"><a href="">Terms of Conditions</a></li>
                    <li class="me-4 small"><a href="">Privacy Policy</a></li>
                    <li class="small"><a href="">Cookie Policy</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="copyright-info text-lg-end">
                  <p class="small">2026 GEMSev. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

    `

    document.getElementById('footer').innerHTML = footer
})
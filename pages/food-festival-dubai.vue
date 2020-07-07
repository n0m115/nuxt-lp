<template>
  <no-ssr>
    <div class="preview food-fest" style="background-image: url(img/foodfest-blurred@2x.png);" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="400">
    <!-- Slide Preview Content -->
      <div class="preview-content d-flex flex-column">
        <header class="preview-header">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex align-items-center">
                <div class="detail-logo">
                  <img src="img/foodfest-logo.png" alt="" data-aos="fade-in" data-aos-delay="600" data-aos-duration="400" class="img-fluid">
                </div>
                <ul class="nav">
                  <li data-aos="fade-right" data-aos-delay="400" data-aos-duration="400">
                    <a href="#">Travel</a>
                  </li>
                  <li class="active" data-aos="fade-right" data-aos-delay="500" data-aos-duration="400">
                    <a href="#">Food Fest</a>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="600" data-aos-duration="400">
                    <a href="#">Cheers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div class="container food-fest-desc">
          <div class="row">
            <div class="col-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <!-- Offers -->
        <div class="swiper-container-outer mt-auto">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex align-items-center showing-offer" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                <p class="m-0">Showing offers in</p>
                <div class="dropdown ml-2">
                  <a aria-expanded="false" aria-haspopup="true" role="button" data-toggle="dropdown" class="dropdown-toggle" href="#">
                    <span id="selected">Dubai & N. Emirates</span><span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Dubai & N. Emirates</a></li>
                      <li><a class="dropdown-item" href="#">Abu Dhabi & Al Ain</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="example-anchor" class="swiper-container main-slider-wrap swiper1" data-aos="fade-right" data-aos-delay="900" data-aos-duration="400">
              <div class="swiper-wrapper">
                <!-- Offer Card -->
                <div class="swiper-slide main-slide">
                  <div class="hero">
                    <img src="img/foodfest-waiter.png" alt="" class="img-fluid">
                  </div>
                  <div class="content-wrapper">
                    <div class="top-content">
                      <h3 class="hotel-name">
                        Mina Brasserie
                      </h3>
                      <p class="location">
                        Abu Dhabi
                      </p>
                    </div>
                    <!-- Price -->
                    <div class="menu-price d-flex">
                      <span class="menu-type col-4">3-course set menu</span>
                      <span class="menu-price col-auto"><span class="savings">AED 528</span>AED 369</span>
                    </div>
                    <div class="btm-content d-flex align-items-center flex-row">
                      <a href="#" class="swiper-btn-primary col-6 d-flex align-items-center justify-content-center">
                      View menu
                    </a>
                    <a href="#" class="swiper-btn-secondary col-6 d-flex align-items-center justify-content-center">
                      Book a table
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
        <div class="container mt-auto">
          <div class="row justify-content-center">
            <div class="col-12 d-flex justify-content-center align-items-center">
              <div class="preview-footer mr-auto" data-aos-anchor="#example-anchor" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="400">
                <a href="#">Privacy policy</a>
              </div>
              <div data-aos-anchor="#example-anchor2" class="d-flex justify-content-center app-store-links animation mr-auto" data-aos="fade-up" data-aos-delay="600" data-aos-duration="400">
                <div class="d-flex align-items-center text-left justify-content-center">
                  <p class="mb-0 mr-4">Not an ENTERTAINER member? <br> Download now</p>
                  <div class="app-store-links-inner d-flex align-items-center d-none d-md-flex">
                    <a href="https://apps.apple.com/us/app/pockiit/id1516439718?ls=1">
                      <img src="https://munchdelivery.com/munch/images/app_store_badge.svg" alt="Munch IOS">
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.theentertainerme.munch">
                      <img src="https://munchdelivery.com/munch/images/play_store_badge.svg" alt="Munch Android">
                    </a>
                  </div>
                  <div class="app-store-links-inner d-flex align-items-center d-md-none">
                    <a href="https://apps.apple.com/us/app/pockiit/id1516439718?ls=1">
                      <img src="https://munchdelivery.com/munch/images/app_store_badge.svg" alt="Munch IOS">
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.theentertainerme.munch">
                      <img src="https://munchdelivery.com/munch/images/play_store_badge.svg" alt="Munch Android">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<script>
export default {
  data () {
    return {
      title: 'Food Festival Dubai',
      description: 'Are you ready for the food festival happening in Dubai? Browse our page for numerous deals from different restaurants for you & the family.',
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { name: 'title', content: this.title },
        { name: 'description', content: this.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: '#' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: '#' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: '#' },
        { property: 'twitter:title', content: this.title },
        { property: 'twitter:description', content: this.description },
        { property: 'twitter:image', content: '#' },
      ]
    }
  }
}
</script>
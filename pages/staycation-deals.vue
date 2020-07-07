<template>
  <div class="preview" style="background-image: url(img/travel-blurred@2x.jpg);" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="400">
    <!-- Slide Preview Content -->
    <div class="preview-content h-100 d-flex">
      <header class="preview-header">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex align-items-center">
              <div class="detail-logo">
                <img src="img/destination.png" alt="" data-aos="fade-in" data-aos-delay="600" data-aos-duration="400" class="img-fluid">
              </div>
              <ul class="nav">
                <li class="active" data-aos="fade-right" data-aos-delay="400" data-aos-duration="400">
                  <a href="#">Travel</a>
                </li>
                <li data-aos="fade-right" data-aos-delay="500" data-aos-duration="400">
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
                  <img src="img/hotel-image@2x.jpg" alt="" class="img-fluid">
                </div>
                <div class="content-wrapper">
                  <div class="top-content">
                    <h3 class="hotel-name">
                      St. Regis Saadiyat Island Resort
                    </h3>
                    <p class="location">
                      Abu Dhabi
                    </p>
                  </div>
                  <!-- Price -->
                  <div class="inner-swiper swiper-container swiper2">
                    <div class="swiper-wrapper">
                      <!-- Price Card -->
                      <div class="swiper-slide">
                        <div class="swiper-content">
                          <p class="price">AED972: 3 club room nights + half board + drinks + 30% off spa & f&b</p>
                          <div class="d-flex align-items-center save-tag">
                            <span class="bk">
                              Save AED 117
                            </span>
                            <span class="limited-time">Limited time only</span>
                          </div>
                        </div>
                      </div>
                      <!-- Price Card -->
                      <div class="swiper-slide">
                        <div class="swiper-content">
                          <p class="price">AED972: 3 club room nights + half board + drinks + 30% off spa & f&b</p>
                          <div class="bk">
                            save aed 200
                          </div>
                        </div>
                      </div>
                      <!-- Price Card -->
                      <div class="swiper-slide">
                        <div class="swiper-content">
                          <p class="price">AED972: 3 club room nights + half board + drinks + 30% off spa & f&b</p>
                          <div class="bk">
                            save aed 200
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="arrows-wrap d-flex align-items-center justify-content-center">
                      <div class="swiper-button-prev2 arrow-btn">
                        <img src="img/arrow.svg" alt="">
                      </div>
                      <!-- Add Pagination -->
                      <div class="swiper-pagination2"></div>
                      <!-- Add Arrows -->
                      <div class="swiper-button-next2 arrow-btn">
                        <img src="img/arrow.svg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="btm-content d-flex align-items-center flex-row">
                    <a href="#" class="swiper-btn-primary col-6 d-flex align-items-center justify-content-center">
                      <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                          <g fill="#FFF">
                            <path d="M20.972 2.25L15 7.875l5.972 5.625c.016-.111.028-.225.028-.34V2.59c0-.116-.011-.229-.028-.34zM11.767 8.531L20.25.811C19.831.317 19.194 0 18.484 0H2.516C1.806 0 1.17.317.75.811l8.483 7.72c.687.625 1.847.625 2.534 0zM.028 2.25C.012 2.361 0 2.475 0 2.59v10.57c0 .115.012.229.028.34L6 7.875.028 2.25z" transform="translate(8 10)"/>
                            <path d="M12.55 10.345c-.565.483-1.308.725-2.05.725-.743 0-1.485-.242-2.05-.725L6.877 9 .75 14.238c.42.464 1.056.762 1.766.762h15.968c.71 0 1.347-.298 1.766-.762L14.123 9l-1.573 1.345z" transform="translate(8 10)"/>
                          </g>
                        </svg>                                                    
                      </span>
                      <span class="text">
                        Email now
                      </span>
                    </a>
                    <a href="#" class="swiper-btn-secondary col-6 d-flex align-items-center justify-content-center">
                      <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                          <path fill="#0CCAFF" d="M3.927 0c-.238 0-.554 0-.943.085-.38.085-.68.17-.901.255-.442.254-.912.763-1.407 1.697-.216.366-.378.752-.49 1.148l-.004.01c-.042.149-.068.3-.096.452-.012.068-.032.136-.041.204-.016.114-.018.229-.025.343-.006.095-.02.193-.02.287v.016c0 .255.013.423.04.678.035.254.093.51.172.764.08.283.141.494.186.636.04.099.13.328.217.552.025.067.032.094.061.169.133.34.212.594.239.68.17.465.362.899.566 1.313.166.35.34.687.534.998.448.727 1.016 1.464 1.675 2.218.365.432.75.871 1.179 1.324.805.79 1.59 1.456 2.36 2.02.387.292.77.566 1.15.8.395.248.834.472 1.295.684.194.09.393.173.598.248.149.06.285.127.44.182.08.027.282.106.636.239.132.05.174.063.278.1.106.043.198.077.273.097.05.018.157.055.19.068.05.016.157.045.225.065.123.054.226.11.407.164.133 0 .257.021.376.05l.063.016c.111.03.22.065.318.103h.706c.814 0 1.634-.212 2.466-.663.893-.496 1.431-.962 1.617-1.405.05-.114.096-.252.14-.41l.003-.004c.046-.149.09-.318.135-.487.089-.425.133-.679.133-.933 0-.17-.013-.255-.04-.34-.006-.01-.056-.045-.071-.06-.07-.082-.181-.176-.353-.285-.002.005-.007.01-.01.015-.157-.103-.326-.213-.575-.35-.168-.085-.406-.254-.715-.424-.31-.17-.593-.254-.849-.424-.248-.17-.483-.254-.704-.424-.036 0-.146-.084-.332-.254-.186-.085-.344-.17-.477-.255-.124-.085-.247-.084-.371-.084-.177 0-.399.085-.663.34-.266.254-.51.593-.731.848-.221.34-.455.594-.703.849-.247.254-.45.34-.61.34-.08 0-.182-.002-.306-.087-.115 0-.203-.085-.265-.085s-.168-.084-.318-.168c-.15-.085-.235-.171-.252-.171-1.212-.679-2.251-1.442-3.117-2.29-.867-.849-1.637-1.95-2.309-3.139-.009 0-.061-.085-.159-.255-.088-.17-.15-.255-.185-.34-.027 0-.062-.084-.106-.253-.044-.085-.066-.17-.066-.256 0-.17.123-.424.37-.679.257-.254.531-.423.823-.677.3-.17.576-.425.823-.68.257-.34.385-.508.385-.677 0-.17-.031-.255-.093-.425-.062-.085-.16-.254-.292-.424-.124-.254-.199-.34-.225-.34-.133-.254-.271-.509-.413-.763-.141-.255-.296-.51-.464-.849-.168-.254-.3-.51-.397-.68C4.598.425 4.364.086 4.205 0h-.278z"/>
                        </svg>                                                    
                      </span>
                      <span class="text">
                      Call now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div class="preview-footer" data-aos-anchor="#example-anchor" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="400">
        <a href="#">Privacy policy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Staycation in Dubai & Abu Dhabi',
      description: 'Are you in need of a staycation in Dubai or Abu Dhabi? We have the best deals you can find, so check out our travel page to find the most awesome deals.',
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
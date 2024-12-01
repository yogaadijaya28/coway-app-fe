import React, { useState } from "react";
import Slider from "react-slick";

const PageHomeContainer = () => {

    const settings = {
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    //faq scroll function
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    //cta

    const waMessage = "Hai kak, saya tertarik dengan produk coway.";

    const encodedMessage = encodeURIComponent(waMessage);

    return (
        <main className="main">
            {/* Hero Section */}
            <section id="hero" className="hero section">
                <div className="hero-bg">
                    <img src="assets/img/jumbotron.webp" alt="" />
                </div>
                <div className="container text-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h1 data-aos="fade-up"><span>Air Dingin, Panas, atau Suhu Ruang? Semua Hanya dengan Satu Sentuhan!</span></h1>
                        <p data-aos="fade-up" data-aos-delay={100}>
                            Coway memudahkan hidup Anda dengan pengaturan suhu yang dapat disesuaikan. Tidak perlu menunggu, tidak perlu merebus. Mulai dari air dingin menyegarkan hingga air panas untuk memasak mie instan, semuanya instan!
                            <br /></p>
                        <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                            <a
                                href={`https://wa.me/+6282116402355?text=${encodedMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-get-started">Pesan Sekarang dan Rasakan Bedanya!</a>
                            {/* <a href="" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Tonton Video</span></a> */}
                        </div>
                        {/* <img src="assets/img/coway-heart-service-by-cody-new.webp" class="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300"> */}
                    </div>
                </div>
            </section>{/* /Hero Section */}
            {/* Featured Services Section */}
            {/* <section id="featured-services" class="featured-services section light-background">
      
      <div class="container">
      
        <div class="row gy-4">
      
          <div class="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-briefcase"></i></div>
              <div>
                <h4 class="title"><a href="#" class="stretched-link">Lorem Ipsum</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>
          </div>
       
      
          <div class="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-card-checklist"></i></div>
              <div>
                <h4 class="title"><a href="#" class="stretched-link">Dolor Sitema</a></h4>
                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa</p>
              </div>
            </div>
          </div>
      
          <div class="col-xl-4 col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-bar-chart"></i></div>
              <div>
                <h4 class="title"><a href="#" class="stretched-link">Sed ut perspiciatis</a></h4>
                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
              </div>
            </div>
          </div>
      
        </div>
      
      </div>
      
          </section> */}
            {/* /Featured Services Section */}
            {/* About Section */}
            <section id="about" className="about section">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay={100}>
                            {/* <p class="who-we-are">Who We Are</p> */}
                            <h3>Kenapa Pilih Coway?</h3>
                            <p className="fst-italic">
                                Produk Coway tidak hanya dirancang untuk fungsi, tapi juga untuk kenyamanan Anda. Inilah yang menjadikan kami pemimpin pasar dalam solusi pemurnian air dan udara di Korea Selatan dan Indonesia.
                            </p>
                            <ul>
                                <li><i className="bi bi-check-circle" /> <span><b> Teknologi Braille:</b> Memudahkan pengguna tunanetra.</span></li>
                                <li><i className="bi bi-check-circle" /> <span><b>Child Lock: </b>Keamanan ekstra untuk keluarga dengan anak kecil.</span></li>
                                <li><i className="bi bi-check-circle" /> <span><b>One Touch Sensor:</b> Akses mudah hanya dengan satu sentuhan.</span></li>
                            </ul>
                            {/* <a href="#" className="read-more"><span>Nikmati Layanan Premium Tanpa Ribet!</span><i className="bi bi-arrow-right" /></a> */}
                        </div>
                        <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay={200}>
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="row gy-4">
                                        {/* <div className="col-lg-12">
                                            <img src="assets/img/heart_services_pemurni_air_5.webp" className="img-fluid" alt="" />
                                        </div> */}
                                        <div className="col-lg-12">
                                            <img src="assets/img/product-one.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row gy-4">
                                        {/* <div className="col-lg-12">
                                            <img src="assets/img/" className="img-fluid" alt="" />
                                        </div> */}
                                        <div className="col-lg-12">
                                            <img src="assets/img/product-two.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* /About Section */}

            {/* Features Section */}
            <section id="features" className="features section">
                {/* Section Title */}
                <div className="container section-title pb-4" data-aos="fade-up">
                    <h2>TRIPLE BENEFIT</h2>
                    <p>Produk Berkualitas, Keuntungan Berlipat</p>
                </div>{/* End Section Title */}
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 d-flex align-items-center">
                            <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay={100}>
                                <li className="nav-item">
                                    <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                                        <i className="bi bi-truck" />
                                        <div>
                                            <h4 className="d-none d-lg-block">GRATIS ONGKIR</h4>
                                            <p>
                                                Gratis ongkos kirim untuk daerah Jawa, Sumatera, Kalimantan Barat, & Kalimantan Tengah
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                                        <i className="bi bi-box-seam" />
                                        <div>
                                            <h4 className="d-none d-lg-block">GRATIS INSTALASI</h4>
                                            <p>
                                                Instalasi dilakukan oleh Coway Technician yang terlatih & bersertifikat.
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                                        <i className="bi bi-tools" />
                                        <div>
                                            <h4 className="d-none d-lg-block">GRATIS SERVICE</h4>
                                            <p>
                                                Gratis HEART Service secara berkala oleh Coway Lady setiap 2 bulan.
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>{/* End Tab Nav */}
                        </div>
                        <div className="col-lg-6">
                            <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
                                <div className="tab-pane fade active show" id="features-tab-1">
                                    <img src="assets/img/fam.webp" alt="" className="img-fluid" />
                                </div>{/* End Tab Content Item */}
                                <div className="tab-pane fade" id="features-tab-2">
                                    <img src="assets/img/heart_services_pemurni_air_5.webp" alt="" className="img-fluid" />
                                </div>{/* End Tab Content Item */}
                                <div className="tab-pane fade" id="features-tab-3">
                                    <img src="assets/img/tabs-3.jpg" alt="" className="img-fluid" />
                                </div>{/* End Tab Content Item */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* /Features Section */}

            <section id="testimonials" className="testimonials section light-background">
                <div className="container section-title pb-4" data-aos="fade-up">
                    <h2>TESTIMONIAL</h2>
                    <p>Teknologi Canggih yang Dicintai Pelanggan Kami</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <Slider {...settings}>
                        <div>
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                                </div>
                                <p>

                                    Yang nganterin air minum sultan ini bener-bener memperhatikan protokoler. Dan ini aku hadiahkan sebagai kado pernikahan kita yang ke-6 tahun supaya kita lebih sehat,lebih bahagia dan cepet punya anak.

                                </p>
                                <div className="profile mt-auto">
                                    <img src="assets/img/testimonials/raffi.webp" className="testimonial-img" alt="" />
                                    <h3>Raffi Ahmad</h3>
                                    <h4>@raffinagita1717 on Coway Ombak</h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                                </div>
                                <p>

                                    Air terasa bersih dan segar karena menggunakan sistem filter RON, dan saya bisa lebih hemat waktu dan tenaga.
                                </p>
                                <div className="profile mt-auto">
                                    <img src="assets/img/testimonials/baim.webp" className="testimonial-img" alt="" />
                                    <h3>Baim Wong</h3>
                                    <h4>
                                        @baimwong on Coway Neo Plus
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                                </div>
                                <p>

                                    Alhamdulillah aku sekarang jadi lebih tenang & nyaman dengan perlindungan Tornado di
                                    rumah.

                                </p>
                                <div className="profile mt-auto">
                                    <img src="assets/img/testimonials/shireen.webp" className="testimonial-img" alt="" />
                                    <h3>Shireen Sungkar</h3>
                                    <h4>
                                        @shireensungkar on Coway Tornado
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                                </div>
                                <p>

                                    Kamar Ibrahim jadi seger & sehat banget semenjak ada Storm Air Purifier. Dan berkat
                                    Coway Ombak Water Purifier juga air di rumah jadi bisa langsung diminum kayak di
                                    luar negeri. Salut sama Coway!

                                </p>
                                <div className="profile mt-auto">
                                    <img src="assets/img/testimonials/arief_muhammad.webp" className="testimonial-img" alt="" />
                                    <h3>Arief Muhammad</h3>
                                    <h4>
                                        @ariefmuhammad on Coway Ombak & Coway Storm
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                                </div>
                                <p>

                                    Gak perlu pusing & ribet nyari filternya sendiri. Maintenance & ganti filter setiap
                                    2 bulan cukup sama Cody Heart Service yang mengikuti protokol kesehatan. Jadi air
                                    yang aku minum jadi sehat dan bersih.

                                </p>
                                <div className="profile mt-auto">
                                    <img src="assets/img/testimonials/tyas.webp" className="testimonial-img" alt="" />
                                    <h3>Tyas Mirasih</h3>
                                    <h4>
                                        @tyasmirasih on Coway Villaem II
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                                </div>
                                <p>
                                    Pake Coway Air Purifier ini udara di dalam rumah jadi segar dan sejuk. Tidak itu
                                    aja, aku pake Coway Ombak juga karena temperaturnya bisa diset sesuai kebutuhan aku
                                    dan keluarga.
                                </p>
                                <div className="profile mt-auto">
                                    <img src="assets/img/testimonials/andien.png" className="testimonial-img" alt="" />
                                    <h3>Andien</h3>
                                    <h4>
                                        @andienaisyah on Coway Storm & Coway Ombak
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>



            {/* <section id="services" className="services section light-background">
               
                <div className="container section-title" data-aos="fade-up">
                    <h2>Services</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="service-item item-cyan position-relative">
                                <i className="bi bi-activity icon" />
                                <div>
                                    <h3>Nesciunt Mete</h3>
                                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                                    <a href="#" className="read-more stretched-link">Learn More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="service-item item-orange position-relative">
                                <i className="bi bi-broadcast icon" />
                                <div>
                                    <h3>Eosle Commodi</h3>
                                    <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                                    <a href="#" className="read-more stretched-link">Learn More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                            <div className="service-item item-teal position-relative">
                                <i className="bi bi-easel icon" />
                                <div>
                                    <h3>Ledo Markt</h3>
                                    <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                                    <a href="#" className="read-more stretched-link">Learn More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="service-item item-red position-relative">
                                <i className="bi bi-bounding-box-circles icon" />
                                <div>
                                    <h3>Asperiores Commodi</h3>
                                    <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                                    <a href="#" className="read-more stretched-link">Learn More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
                            <div className="service-item item-indigo position-relative">
                                <i className="bi bi-calendar4-week icon" />
                                <div>
                                    <h3>Velit Doloremque.</h3>
                                    <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                                    <a href="#" className="read-more stretched-link">Learn More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={600}>
                            <div className="service-item item-pink position-relative">
                                <i className="bi bi-chat-square-text icon" />
                                <div>
                                    <h3>Dolori Architecto</h3>
                                    <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                                    <a href="#" className="read-more stretched-link">Learn More <i className="bi bi-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section id="more-features" className="more-features section">
                <div className="container">
                    <div className="row justify-content-around gy-4">
                        <div className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay={100}>
                            <h3>Enim quis est voluptatibus aliquid consequatur</h3>
                            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>
                            <div className="row">
                                <div className="col-lg-6 icon-box d-flex">
                                    <i className="bi bi-easel flex-shrink-0" />
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 icon-box d-flex">
                                    <i className="bi bi-patch-check flex-shrink-0" />
                                    <div>
                                        <h4>Nemo Enim</h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 icon-box d-flex">
                                    <i className="bi bi-brightness-high flex-shrink-0" />
                                    <div>
                                        <h4>Dine Pad</h4>
                                        <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 icon-box d-flex">
                                    <i className="bi bi-brightness-high flex-shrink-0" />
                                    <div>
                                        <h4>Tride clov</h4>
                                        <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features-image col-lg-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay={200}>
                            <img src="assets/img/features-3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Pricing Section */}
            {/* <section id="pricing" className="pricing section">
              
                <div className="container section-title" data-aos="fade-up">
                    <h2>Pricing</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="pricing-item">
                                <h3>Free Plan</h3>
                                <p className="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                                <h4><sup>$</sup>0<span> / month</span></h4>
                                <a href="#" className="cta-btn">Start a free trial</a>
                                <p className="text-center small">No credit card required</p>
                                <ul>
                                    <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                                    <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                                    <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                                    <li className="na"><i className="bi bi-x" /> <span>Pharetra massa massa ultricies</span></li>
                                    <li className="na"><i className="bi bi-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
                                    <li className="na"><i className="bi bi-x" /> <span>Voluptate id voluptas qui sed aperiam rerum</span></li>
                                    <li className="na"><i className="bi bi-x" /> <span>Iure nihil dolores recusandae odit voluptatibus</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={200}>
                            <div className="pricing-item featured">
                                <p className="popular">Popular</p>
                                <h3>Business Plan</h3>
                                <p className="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                                <h4><sup>$</sup>29<span> / month</span></h4>
                                <a href="#" className="cta-btn">Start a free trial</a>
                                <p className="text-center small">No credit card required</p>
                                <ul>
                                    <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                                    <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                                    <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                                    <li><i className="bi bi-check" /> <span>Pharetra massa massa ultricies</span></li>
                                    <li><i className="bi bi-check" /> <span>Massa ultricies mi quis hendrerit</span></li>
                                    <li><i className="bi bi-check" /> <span>Voluptate id voluptas qui sed aperiam rerum</span></li>
                                    <li className="na"><i className="bi bi-x" /> <span>Iure nihil dolores recusandae odit voluptatibus</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={300}>
                            <div className="pricing-item">
                                <h3>Developer Plan</h3>
                                <p className="description">Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater</p>
                                <h4><sup>$</sup>49<span> / month</span></h4>
                                <a href="#" className="cta-btn">Start a free trial</a>
                                <p className="text-center small">No credit card required</p>
                                <ul>
                                    <li><i className="bi bi-check" /> <span>Quam adipiscing vitae proin</span></li>
                                    <li><i className="bi bi-check" /> <span>Nec feugiat nisl pretium</span></li>
                                    <li><i className="bi bi-check" /> <span>Nulla at volutpat diam uteera</span></li>
                                    <li><i className="bi bi-check" /> <span>Pharetra massa massa ultricies</span></li>
                                    <li><i className="bi bi-check" /> <span>Massa ultricies mi quis hendrerit</span></li>
                                    <li><i className="bi bi-check" /> <span>Voluptate id voluptas qui sed aperiam rerum</span></li>
                                    <li><i className="bi bi-check" /> <span>Iure nihil dolores recusandae odit voluptatibus</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* /Pricing Section */}
            {/* Faq Section */}

            {/* Clients Section */}
            <section id="clients" className="clients section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>KLIEN KAMI</h2>
                </div>
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4">
                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="assets/img/clients/who.webp" className="img-fluid" alt="" />
                        </div>{/* End Client Item */}
                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="assets/img/clients/aeon.webp" className="img-fluid" alt="" />
                        </div>{/* End Client Item */}
                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="assets/img/clients/bank_bca.webp" className="img-fluid" alt="" />
                        </div>{/* End Client Item */}
                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="assets/img/clients/hyundai.webp" className="img-fluid" alt="" />
                        </div>{/* End Client Item */}
                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="assets/img/clients/ifrc.webp" className="img-fluid" alt="" />
                        </div>{/* End Client Item */}
                        <div className="col-xl-2 col-md-3 col-6 client-logo">
                            <img src="assets/img/clients/pfizer.webp" className="img-fluid" alt="" />
                        </div>{/* End Client Item */}
                    </div>
                </div>
            </section>{/* /Clients Section */}

            <section id="features-details" className="features-details section">
                <div className="container">
                    <div className="row gy-4 justify-content-between features-item">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                            <img src="assets/img/konsultasi_pelanggan.webp" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay={200}>
                            <div className="content">
                                <h3>Waktunya Hidup Lebih Praktis dengan Teknologi Coway!</h3>
                                <p>
                                    Air berkualitas tinggi kini lebih mudah diakses, lebih aman, dan lebih nyaman. Dengan fitur-fitur inovatif dari Coway, Anda tidak hanya mendapatkan produk terbaik, tapi juga pengalaman hidup yang lebih baik.
                                </p>
                                <a
                                    href={`https://wa.me/+6282116402355?text=${encodedMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn more-btn">Pesan Sekarang dan Nikmati Hidup Tanpa Ribet! <i className="bi bi-arrow-right" /></a>


                            </div>
                        </div>
                    </div>
                    {/* <div className="row gy-4 justify-content-between features-item">
                        <div className="col-lg-5 d-flex align-items-center order-2 order-lg-1" data-aos="fade-up" data-aos-delay={100}>
                            <div className="content">
                                <h3>Neque ipsum omnis sapiente quod quia dicta</h3>
                                <p>
                                    Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares
                                </p>
                                <ul>
                                    <li><i className="bi bi-easel flex-shrink-0" /> Et corporis ea eveniet ducimus.</li>
                                    <li><i className="bi bi-patch-check flex-shrink-0" /> Exercitationem dolorem sapiente.</li>
                                    <li><i className="bi bi-brightness-high flex-shrink-0" /> Veniam quia modi magnam.</li>
                                </ul>
                                <p />
                                <a href="#" className="btn more-btn">Learn More</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay={200}>
                            <img src="assets/img/features-2.jpg" className="img-fluid" alt="" />
                        </div>
                    </div> */}
                </div>
            </section>

            <section id="faq" className="faq section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>TENTANG TEKNOLOGI COWAY</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
                            <div className="faq-container">
                                {/* FAQ Item 1 */}
                                <div
                                    className={`faq-item ${activeIndex === 0 ? "faq-active" : ""}`}
                                >
                                    <h3 onClick={() => handleToggle(0)}>
                                        Bagaimana sistem Reverse Osmosis (RO) bekerja?
                                    </h3>
                                    <div className="faq-content">
                                        <p>
                                            RO adalah teknologi filtrasi terbaik yang mampu menghilangkan
                                            kontaminan hingga 99,99%, memberikan Anda air yang aman dan
                                            bersih.
                                        </p>
                                    </div>
                                    <i
                                        className={`faq-toggle bi bi-chevron-right`}
                                        onClick={() => handleToggle(0)}
                                    />
                                </div>

                                {/* FAQ Item 2 */}
                                <div
                                    className={`faq-item ${activeIndex === 1 ? "faq-active" : ""}`}
                                >
                                    <h3 onClick={() => handleToggle(1)}>
                                        Apakah fitur Dual UV Sterilization otomatis?
                                    </h3>
                                    <div className="faq-content">
                                        <p>
                                            Ya, fitur ini bekerja secara otomatis setiap hari untuk
                                            menjaga kebersihan tangki dan faucet.
                                        </p>
                                    </div>
                                    <i
                                        className={`faq-toggle bi bi-chevron-right`}
                                        onClick={() => handleToggle(1)}
                                    />
                                </div>


                                <div
                                    className={`faq-item ${activeIndex === 2 ? "faq-active" : ""}`}
                                >
                                    <h3 onClick={() => handleToggle(2)}>
                                        Apakah Eco Mode benar-benar menghemat listrik?
                                    </h3>
                                    <div className="faq-content">
                                        <p>
                                            Ya, Eco Mode dapat mengurangi konsumsi listrik hingga 30% saat ruangan gelap.
                                        </p>
                                    </div>
                                    <i
                                        className={`faq-toggle bi bi-chevron-right`}
                                        onClick={() => handleToggle(1)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Contact Section */}
            <section id="contact" className="contact section">
                {/* Section Title */}
                <div className="container section-title pb-4" data-aos="fade-up">
                    <h2>Pesan Sekarang, Bebas Khawatir!</h2>
                    <p>Apapun kebutuhan Anda, tim Coway selalu ada untuk menjawab pertanyaan dan memberikan solusi terbaik. Hubungi kami sekarang!</p>
                </div>{/* End Section Title */}
                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row gy-4 justify-content-center">

                        <div className="col-lg-6 col-md-6">
                            <a
                                href={`https://wa.me/+6282116402355?text=${encodedMessage}`}
                                className="info-item d-flex flex-column justify-content-center align-items-center"
                                data-aos="fade-up"
                                data-aos-delay={300}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-telephone" />
                                <h3>WhatsApp</h3>
                                <p>+62 8211-6402-355 </p>
                            </a>
                        </div>
                        {/* <div className="col-lg col-md-6">
                            <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay={400}>
                                <i className="bi bi-envelope" />
                                <h3>Email Us</h3>
                                <p>info@example.com</p>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="row gy-4 mt-1">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameBorder={0} style={{ border: 0, width: '100%', height: '400px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                        <div className="col-lg-6">
                            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay={400}>
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 ">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> */}
                </div>
            </section>{/* /Contact Section */}
        </main>

    )
}

export default PageHomeContainer

// 3px 2px #000

// background : rgba(0,0,0,.2)
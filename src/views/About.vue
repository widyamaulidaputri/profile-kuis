<template>

  <section id = "sec-2" class = "py-5">
    <div class = "container my-4">
      <div class = "row gx-lg-5">
        <div class = "col-lg-6 mb-5">
          <img src = "../assets/deyacansbgt.jpg" class = "img-fluid">
        </div>
        <div class = "col-lg-6">
          <h3>Tentang Saya</h3>
          <p class = "text-muted fw-light lh-lg my-4">Nama Lengkap Saya Widya Maulida Putri dan Saya sekarang berumur 20 Tahun. Saya merupakan Mahasiswa Teknik Informatika di Universitas Islam Negeri Sultan Syarif Kasim Riau.
          Saya lahir di Bangkinang 23 April 2003. Saya suka mendengarkan musik dikala waktu luang dan saya suka hangout bersama teman-teman. </p>
        </div>
      </div>
    </div>
  </section>

  <section id = "sec-6" class = "py-5">
    <div class = "container my-4">
      <div class = "row mb-5">
        <div class = "col-12 text-center text-white">
          <h3 class = "mb-4">Sosial Mediaku!</h3>
          <p class = "lh-lg fw-light pt-2 w-75 mx-auto"> Berikut merupakan beberapa akun sosial media yang saya punya</p>
        </div>
      </div>
      <div class = "row text-uppercase text-center text-white">
        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://instagram.com/widyamaulidap?igshid=YmMyMTA2M2Y=" target="_blank">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
          <h6>Instagram</h6>
        </div>

        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://github.com/widyamaulidaputri" target="_blank">
              <i class="bi bi-github"></i>
            </a>
          </div>
          <h6>Github</h6>
        </div>

        <div class = "col-md-6 col-lg-3 mb-5">
          <div class = "circle-icon bg-white text-green d-flex align-items-center justify-content-center mx-auto mb-4 fs-2 fw-bold">
            <a href="https://www.tiktok.com/@hiipw3tty?_r=1" target="_blank">
              <i class="bi bi-tiktok"></i>
            </a>
          </div>
          <h6>Tiktok</h6>
        </div>
      </div>
    </div>
  </section>



</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#sec-6 {
  text-align: center;

}
:root{
  --green: #16db93;
  --green-dark: #13bc7e;
  --light-grey: #f1f4f6;
}

*{
  font-family: 'Roboto', sans-serif;
}

/* misc stylings */
ul li{
  list-style-type: none;
}
.container{
  max-width: 1200px;
}
.display-1{
  letter-spacing: 1px;
}
.bg-green{
  background-color: var(--green)!important;
}
.bg-grey{
  background-color: var(--light-grey);
}
.text-green{
  color: var(--green);
}
.btn{
  border: 2px solid #fff;
  border-radius: 1.5rem;
  padding: 0.6rem 0;
  width: 160px;
}
.btn-green{
  background-color: var(--green);
  color: #fff;
  padding: 0.55rem 0;
  width: 140px;
}
.btn-green:hover{
  color: var(--green);
  background: #fff;
  border-color: var(--green);
}
.lh-lg{
  line-height: 1.7!important;
}
.circle-icon{
  width:55px;
  height: 55px;
  border-radius: 50%;
  background-color: var(--green);
}



/* section 6 */
#sec-6{
  background: grey;
}
#sec-6 .circle-icon{
  width: 95px;
  height: 95px;
}

/* section 7 */
#sec-7 .card{
  border: none;
}

/* section 8 */
#sec-8 .carousel-item img{
  width: 180px!important;
}

/* section 9 */
.pricing-item{
  border-radius: 0.3rem;
  overflow: hidden;
  max-width: 340px;
}
.pricing-title{
  background-color: var(--green-dark);
}
.pricing-price, .pricing-item ul li{
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0.9rem 0;
}
.pricing-item .btn:hover{
  background: transparent!important;
  color: #fff;
}
</style>

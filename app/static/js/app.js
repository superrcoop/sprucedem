
Vue.component('app-header', {
    template: `
<nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
  <div class="container">
  <router-link class="navbar-brand js-scroll-trigger" to="/">Vuejs-Flask </router-link>
    <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i class="fa fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mx-0 mx-lg-1">
        <router-link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/">Home <span class="sr-only">(current)</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `
});

Vue.component('app-footer', {
    template: `
    <div class="container " id="footer">
    <div class="row border-top">
      <div class="col-md-4 mb-5 mb-lg-0">
        <h4 class="text-uppercase mb-4">About</h4>
        <p class="lead mb-0">Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions. And before you ask: It's BSD licensed!
      </div>
      <div class="col-md-4 mb-5 mb-lg-0">
        <h4 class="text-uppercase mb-4">Stay in Touch</h4>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
              <i class="fab fa-github-alt"></i>
            </a>
          </li>
          <li class="list-inline-item">
          </li>
          <li class="list-inline-item">
            <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li class="list-inline-item"> 
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <h4 class="text-uppercase mb-4">Learn More</h4>
        <p class="lead mb-0">Discover more at <a href="http://flask.pocoo.org">flask.pocoo.org</a></p>
      </div>
    </div>
    <div class="copyright py-4 text-center text-primary">
      <div class="container">
        <small>Copyright &copy; Your Website 2018. Template by <a class=" text-secondary" href="http://jordancooper.me">Jordan Cooper</a></small>
      </div>
    </div>
  </div>
  
    `
});
const Home = Vue.component('home',{
  template:`
      
      <div class="container">
    <h1 class="text-uppercase mb-0">Start Bootstrap Vuejs-Flask Template</h1>
    <h2 class="font-weight-light mb-0">Use this starter template for your Vue-js Flask apps as a way to quickly start any new project.<br>
All you get are these files and mostly barebones HTML/CSS and Vuejs files.</h2>
</div>

`,
  data: function(){
    return{
    }
  }
});


// Define Routes
const router = new VueRouter({
    routes: [
    { path: "/", component: Home }
    ]
});

// Instantiate our main Vue Instance
let app = new Vue({
    el: "#app",
    router
});
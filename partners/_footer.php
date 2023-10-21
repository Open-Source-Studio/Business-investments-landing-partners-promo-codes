<footer>
               <nav class="navbar navbar-light justify-content-between animated fadeInDown" data-wow-delay=".2s">
                   <div class="container">
                       <a href="/" class="navbar-brand text-light">
                           GUSEV<span>.</span>biz
                       </a>
                       <div class="ml-auto">
                           <a class="mr-2 mr-md-4" href="https://vk.com/gusevlive" target="blank"><i class="fab fa-vk"></i></a>
                           <a class="mr-2 mr-md-4" href="https://gotgm.ru/gusevself" target="blank"><i class="fab fa-telegram"></i></a>
                           <a class="mr-2 mr-md-4" href="https://medium.com/@mediaboss" target="blank"><i class="fab fa-medium-m"></i></a>
                           <a class="mr-2 mr-md-4" href="https://www.youtube.com/channel/UC0P5U9hZjOQ_jL0nNqK-rmw" target="blank"><i class="fab fa-youtube"></i></a>
                           <a href="https://twitter.com/gusevlife" target="blank"><i class="fab fa-twitter"></i></a>
                       </div>
                   </div>
               </nav>
           </footer>

           <!-- Background Spider -->
       		<canvas id="spider-background"></canvas>
       		<!-- End Background Spider -->
       		<div class="tv">
       			<div class="screen mute" id="tv"></div>
       		</div>
       		<!-- JS -->
       		<script src="/assets/js/jquery-1.11.1.min.js"></script>
       		<script src="/assets/js/canvas.js"></script>
       		<script src="/assets/js/Chart.bundle.js"></script>
       		<script src="/assets/vendor/bootstrap/bootstrap.min.js"></script>
       		<script src="assets/vendor/slick/slick.min.js"></script>
       		<script>
       			new WOW().init();
       		</script>
       		<script src="assets/js/main.js"></script>
        <script>
            $('.responsive, .responsive-2').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
            {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
            },
            {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
            }
            ]
            });
        </script>
        <script src="assets/vendor/bootstrap/bootstrap.min.js"></script>

        <script type="text/javascript">
          $(document).ready(function(){
$('.menu-category li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});
        </script>

        <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

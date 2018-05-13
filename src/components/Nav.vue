<template>
  <div id="nav">
    <!-- header -->
    <div class="header_bg">
      <div class="container">
        <div class="header">
          <div class="head-t">
            <div class="logo">
              <a href="index.html"><img src="../assets/images/fu.png" class="img-responsive" alt=""/> </a>
            </div>
            <div class="clearfix"> </div>
          </div>

          <!-- start header menu -->
          <div class="header-top">
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>

                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                    <router-link tag="li" to="./home" ><a href="">首页 </a></router-link>
                    <router-link tag="li" to="./product" ><a href="">使用说明 </a></router-link>

                    <router-link tag="li" to="./aboutus" ><a href="">症状介绍 </a></router-link>
                    <router-link tag="li" to="./contactus" ><a href="">联系我们 </a></router-link>
                  </ul>


                </div><!-- /.navbar-collapse -->
              </div><!-- /.container-fluid -->
            </nav>
          </div>
          <!-- start header menu -->
        </div>
      </div>
    </div>
  </div>
</template>

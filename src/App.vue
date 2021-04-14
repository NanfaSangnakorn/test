<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-md  fixed-top navbar-dark bg-dark mb-4">
        <b-navbar-brand>
          <img src="https://eila.psu.ac.th/wp-content/uploads/2019/10/logo_psu-white512.png"
                 width="20%" height="20%" class="d-inline-block align-left" >

           </b-navbar-brand>
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Home</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Data">ข้อมูลพืชพรรณ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/AddData">การจัดการข้อมูลพรรณพืช</a>
              </li>
            </ul>
            <form class="d-flex">

              <button class="btn btn-outline-success"  type="submit" align="center">Logout</button>
            </form>
          </div>
        </div>
      </nav>

      <br />
      <br />
      <br />
      <router-view />
    </div>
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'app',

};

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Sana:400,500,600,700,800");

* {
  box-sizing: border-box;
}

body {
  background-color: #c5a6c7;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: "Fira Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
label,
span {
  font-weight: 500;
  font-family: "Fira Sans", sans-serif;
}

body,
html,
#app,
#root,
.auth-wrapper {
  width: 100%;
  height: 100%;
}

#app {
  text-align: center;
}

.navbar-light {
  background-color: #c5a6c7;
  box-shadow: 0px 14px 80px #CCCCFF;
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: #c5a6c7;
  box-shadow: 0px 14px 80px #CCCCFF;
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}

.auth-wrapper .form-control :focus {
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label {
  font-weight: 400;
}

.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d77;
  margin: 0;
}

.forgot-password a {
  color: #167bff;
}
</style>

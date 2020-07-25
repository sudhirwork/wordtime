<template>
  <div id="app">
    <HelloWorld msg="World Time"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>


<style>
*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', sans-serif;
  color: #384047;
}

form {
  max-width: 300px;
  margin: 10px auto;
  padding: 10px 20px;
  background: #f4f7f8;
  border-radius: 8px;
}

h1 {
  font-size: 36pt;
  margin: 0 0 30px 0;
  text-align: center;
      color: #605582;
}

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
  background: rgba(255,255,255,0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  margin-bottom: 30px;
}

input[type="radio"],
input[type="checkbox"] {
  margin: 0 4px 8px 0;
}

select {
 padding: 15px;
    height: auto;
    border-radius: 2px;
    font-size: 21pt;
    color:#605582;
    border: 3px solid #8be4e1;
    background: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: 500;
}

button {
  padding: 19px 39px 18px 39px;
      width: 100%;
      text-align: center;
    margin: 16px 0;
    border: 0;
    background: #8be4e1;
    border-radius: 8px;
    font-size: 14pt;
    color: #605582;
    font-weight: 700;
}

fieldset {
  margin-bottom: 30px;
  border: none;
}

legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}

label {
  font-size: 12pt;
  color: #605582;
  font-weight: bolder;
  display: block;
  margin-bottom: 8px;
}

label.light {
  font-weight: 300;
  display: inline;
}

.number {
  background-color: #5fcf80;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255,255,255,0.2);
  border-radius: 100%;
}

.alert {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border-radius: .25rem;
    font-size: 14pt;
    text-align: center;
    font-weight: 700;
}

.alert-warning {
    color: #e56814;
    background-color: #ffefe5;
}

@media screen and (min-width: 480px) {

  form {
    max-width: 480px;
  }

}

#loading {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid #8be4e1;
  border-radius: 50%;
  border-top-color: #605582;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>
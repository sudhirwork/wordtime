<template>
  <div class="row">
    <div class="col-md-12">
      <form action="index.html" method="post" @submit.prevent>
        <h1>{{ msg }}</h1>
        <p class="alert alert-warning" v-show="error">{{errMsg}}</p>
        <label for>select a area</label>
        <br />
        <select v-model="selected" @change="getLocations()">
          <option value="0">select area</option>
          <option :key="index" v-for="(option, index) in areas" v-bind:value="option">{{ option }}</option>
        </select>
        <br />
        <br />
        <label for>select a location</label>
        <br />
        <select v-model="selectedLocation" @change="getTime()">
          <option value="0">select location</option>
          <option
            :key="index"
            v-for="(option, index) in locations"
            v-bind:value="option"
          >{{ option }}</option>
        </select>

        <br />
        <br />
        <label for="email">Time in this location:</label>
        <div style="text-align:center;">
          <div v-show="isLoading" id="loading"></div>
        </div>
        <h1 style="font-size:48pt">{{ time | moment('timezone', `${selected}/${selectedLocation}`, 'HH:mm') }}</h1>
        <div style="text-align:center;">
          <button type="button" @click="reesetForm()">reset the form</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      error: false,
      errMsg: "",
      selected: "0",
      selectedLocation: "0",
      time: "",
      areas: [],
      locations: [],
      isLoading: false
    };
  },
  created() {
    if (!navigator.onLine) {
      this.error = true;
      this.errMsg = "No Internet";
    } else {
      this.getAreas();
    }
  },
  methods: {
    reesetForm() {
      this.selected = this.selectedLocation = "0";
      this.time = '';
      this.locations = [];
      this.error = false;
    },
    getAreas() {
      this.isLoading = true;
      axios
        .get("http://worldtimeapi.org/api/timezone")
        .then(response => {
          response.data.forEach(element => {
            let tempElement = element.split("/");
            if ( tempElement.length > 1 && !this.areas.includes(tempElement[0])) {
              this.areas.push(tempElement[0]);
            }
          });
        })
        .catch(error => {
          console.log("error occuerd areas");
          this.error = true;
          this.errMsg = error.response.data.error;
          this.locations = [];
        })
        .finally(() => (this.isLoading = false));
    },
    getLocations() {
      if(this.selected == 0) return;
      this.locations = [];
      this.isLoading = true;
      if (!navigator.onLine) {
        this.error = true;
        this.errMsg = "No Internet";
      } else {
        axios
          .get(`http://worldtimeapi.org/api/timezone/${this.selected}`)
          .then(response => {
            response.data.forEach(element => {
              let tempElement = element.split("/")[1];
              this.locations.push(tempElement);
            });
          })
          .catch(error => {
            console.log("error occuerd locations");
            this.error = true;
            this.errMsg = error.response.data.error;
            if (!navigator.onLine) {
              this.error = true;
              this.errMsg = "No Internet";
            }
          })
          .finally(() => (this.isLoading = false));
      }
    },
    getTime() {
      if(this.selectedLocation == 0) return;
      this.isLoading = true;
      if (!navigator.onLine) {
        this.error = true;
        this.errMsg = "No Internet";
      } else {
        axios
          .get(
            `http://worldtimeapi.org/api/timezone/${this.selected}/${this.selectedLocation}`
          )
          .then(response => {
            this.time = response.data.unixtime;
          })
          .catch(error => {
            console.log("error occuerd");
            this.error = true;
            this.errMsg = error.response.data.error;
            console.log("connection = ", navigator.onLine);
          })
          .finally(() => (this.isLoading = false));
      }
    }
  }
};
</script>

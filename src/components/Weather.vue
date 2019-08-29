<template>
  <div>
    <h3>{{ city }}, {{ country }}</h3>

    <v-container fluid>
      <v-row>
        <v-col v-for="(weather, index) in weathers" :key="index" cols="12" sm="6" md="2" lg="2">
          <v-card>
            <v-card-title>
              <h4>{{weekDays[weather.date.getDay()] + ' ' + formatDate(weather.date)}}</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-item v-for="(temp, index) in weather.temps" :key="index">
                <v-list-item-content>{{ temp.date.getHours() }}:</v-list-item-content>
                <v-list-item-content class="align-end">{{ temp.temp }} °C</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      country: "Finland",
      weekDays: ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"]
    };
  },
  computed: {
    ...mapState(["city", "weathers"])
  },
  methods: {
    formatDate(date) {
      return date.getDate() + "." + (date.getMonth() + 1) + ".";
    },

    async getWeatherData() {
      let apikey = "51156b18ec42c8c3724b49fbb0018c05";
      const url =
        "https://api.openweathermap.org/data/2.5/forecast?q=Espoo,fi&units=metric&appid=" +
        apikey;

      try {
        axios.get(url).then(res => {
          if (res.status === 200) {
            let weatherData = res.data;
            this.$store.dispatch("setCity", weatherData.city.name);

            let temps = [];

            weatherData.list.map(w => {
              let date = new Date(w.dt * 1000);
              temps.push({
                date: date,
                temp: w.main.temp
              });
            });

            let days = [];
            let tempsOfOneDay = [];
            let date = null;
            let currentDate;

            temps.map(t => {
              if (date === t.date.getDate() || date === null) {
                date = t.date.getDate();
                currentDate = t.date;
                tempsOfOneDay.push(t);
              }

              if (date !== t.date.getDate()) {
                let newDay = {
                  date: currentDate,
                  temps: tempsOfOneDay
                };

                days.push(newDay);
                tempsOfOneDay = [];
                date = t.date.getDate();
                tempsOfOneDay.push(t);
              }
            });

            let newDay = {
              date: currentDate,
              temps: tempsOfOneDay
            };

            days.push(newDay);

            this.$store.dispatch("setWeatherData", days);
          } else {
            console.log("Api call was unsuccessfull!");
          }
        });
      } catch (e) {
        console.log("Error while making an http request: " + e);
      }
    }
  },
  mounted() {
    this.getWeatherData();
  }
};
</script>
<style lang="scss" scoped>
</style>
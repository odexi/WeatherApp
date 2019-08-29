<template>
  <div>
    <h3>{{ city }}, {{ country }}</h3>

    <v-container fluid>
      <v-row>
        <v-col v-for="(weather, index) in weathers" :key="index" cols="12" sm="6" md="3" lg="3">
          <v-card>
            <v-card-title>
              <h4>{{weekDays[weather.date.getDay()] + ' ' + formatDate(weather.date)}}</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <Temperature v-for="(temp, index) in weather.temps" :key="index" :temp="temp" />
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
import Temperature from './Temperature'

export default {
  data() {
    return {
      country: "Finland",
      weekDays: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"]
    };
  },
  components: {
    Temperature
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
            console.log(res);
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
              currentDate = t.date;
            });

            let newDay = {
              date: currentDate,
              temps: tempsOfOneDay
            };

            days.push(newDay);
            console.log(days);

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
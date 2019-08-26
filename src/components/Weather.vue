<template>
    <div>
        <!-- <input v-model="city"> -->
        <h3>{{ city }}, {{ country }}</h3>
    </div>
</template>
<script>
import axios from 'axios';
import { mapState } from "vuex";

export default {
    data () {
        return {
            country: 'Finland',
        }
    },
    computed: {
        ...mapState([
            "city",
            ]),
            // city: {
            //     get() {
            //         return this.$store.getters.getCity;
            //     },
            //     set(value) {
            //         this.$store.commit('SET_CITY', value);
            //     }
            // }

    },
    methods: {
        async getWeatherData() {
            let apikey = '51156b18ec42c8c3724b49fbb0018c05';
            const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Espoo,fi&units=metric&appid=' + apikey;

            try {
                axios.get(url)
                .then(res => {
                    if (res.status === 200) {
                    console.log(res.data);
                    let weatherData = res.data;
                    this.$store.dispatch('setCity', weatherData.city.name);

                    let temps = [];

                    weatherData.list.map(w => {
                        console.log(w)
                        let date = new Date(w.dt * 1000)
                        temps.push({
                            date: date,
                            temp: w.main.temp
                        })
                    })
                    console.log(temps);

                    }
                    else {
                    console.log("Api call was unsuccessfull!")
                    }

                })
            }
            catch (e) {
                console.log("Error while making an http request: " + e);
            }
            
        }
    },
    mounted() {
        this.getWeatherData();
    }
    
}
</script>
<style lang="scss" scoped>

</style>
<template>
<div>
  <v-list-item-content>
    {{ temp.date.getHours().toString().length == 1 ? 
    ('0' + temp.date.getHours()) : 
    temp.date.getHours() }}: {{ temp.temp }} °C
  </v-list-item-content>
</div>
</template>

<script>
export default {
  props: {
    temp: Object,
  }
}
</script>

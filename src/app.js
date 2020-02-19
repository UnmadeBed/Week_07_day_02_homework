import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currency:{},
      selectedCurrency: null,
      convertTo: null,
    },
    mounted(){
      this.fetchCurrency()
    },
    computed: {
      exchange: function() {
        return (this.selectedCurrency * this.convertTo).toFixed(2);
      },
    },
    methods:{
      fetchCurrency: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currency = data)
      }
    }
  }
)
});

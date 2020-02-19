import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currency:{},
      selectedCurrency:0,
      convertTo:0,
      currencyToEuros:0
    },
    mounted(){
      this.fetchCurrency()
    },
    computed: {
      exchange: function() {
        return (this.selectedCurrency * this.convertTo).toFixed(2);
      },
      euros: function(){
        return (this.currencyToEuros / this.convertTo).toFixed(2);
      }
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

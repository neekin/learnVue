import Vue from 'vue'

const color = Vue.directive('color', function(el, binding) {
    el.style = 'color:' + binding.value;
});

export { color }
import "babel-polyfill";
const jquery = require("jquery");
window.$ = window.jQuery = jquery;

const foo = () => {
  console.log("bar");
  $("a").addClass("myClass");
};

$(document).ready(function() {
  foo();
});

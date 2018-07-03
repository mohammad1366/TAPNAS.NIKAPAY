
var app = angular.module('app', [
  'appControllers',
  'ADM-dateTimePicker'
]);

app.config(['ADMdtpProvider',

  function(ADMdtp) {

      ADMdtp.setOptions({});

  }
]).run(function(ADMdtp) {

  console.info(ADMdtp.getOptions());

})



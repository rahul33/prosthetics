/* global angular */
(function() {
  'use strict';
  console.clear();

  

  var app = angular.module('configure', ['formly', 'formlyBootstrap', 'rzModule']);

  app.run(function(formlyConfig) {

    // single slider type
    formlyConfig.setType({
      name: 'slider',
      template: ['<rzslider rz-slider-model="model[options.key]"' +
                 ' rz-slider-options="to.sliderOptions"></rzslider>'].join(' '),
      wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    //range slider type
    formlyConfig.setType({
      name: 'range-slider',
      template: ['<rzslider rz-slider-model="model[options.key].low"' +
                 'rz-slider-high="model[options.key].high" ' +
                 'rz-slider-options="to.sliderOptions"></rzslider>'].join(' '),
      wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

  });

  app.controller('ConfigureCtrl', function ConfigureCtrl(formlyVersion) {

    var vm = this;
    // funcation assignment
    vm.onSubmit = onSubmit;


    // variable assignment
    vm.author = { // optionally fill in your info below :-)
      name: 'Rahul Prasad',
      url: 'https://twitter.com/ValentinHervieu'
    };
    vm.exampleTitle = 'angularjs-slider integration'; // add this
    vm.env = {
      angularVersion: angular.version.full,
      formlyVersion: formlyVersion
    };


    console.log("testing 3");


    vm.model = {
      slider: 5,
      rangeSlider: {low: 2, high: 8},
      rangeSliderTicks: {low: 2, high: 8}
    };
    vm.options = {};

    vm.fields = [
      {
        key: 'lowerextremitystrength',
        type: 'slider',
        templateOptions: {
          label: 'Lower Extremity Stength (%)',
          sliderOptions: {
            floor: 1,
            ceil: 100,
            showTicksValues: true,
            stepsArray: [
              {value: 1},
              {value: 20},
              {value: 40},
              {value: 60},
              {value: 80},
              {value: 100}
            ]
          }
        }
      },
      {
        key: 'painfreerangeofmotion',
        type: 'slider',
        templateOptions: {
          label: 'Pain Free Range of Motion (deg)',
          sliderOptions: {
            floor: 0,
            ceil: 20,
            showTicksValues: true,
            stepsArray: [
              {value: 0},
              {value: 2.5},
              {value: 5},
              {value: 7.5},
              {value: 10},
              {value: 12.5},
              {value: 15},
              {value: 17.5},
              {value: 20}
            ]
          }
        }
      },
      {
        key: 'activitylevel',
        type: 'slider',
        templateOptions: {
          label: 'Activity Level',
          sliderOptions: {
            floor: 0,
            ceil: 20,
            showTicksValues: true,
            stepsArray: [
              {legend:'Light'},
              {legend:'Normal'},
              {legend:'Heavy'},
              {legend:'Extreme'}
            ]
          }
        }
      }
    ];

    vm.originalFields = angular.copy(vm.fields);

    // function definition
    function onSubmit() {
      vm.options.updateInitialValue();
      alert(JSON.stringify(vm.model), null, 2);
    }
  });

})();
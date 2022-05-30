import angular from 'angular';

import './navbar.css';

function navbar() {
  return {
    restrict: 'AE',
    scope: {
      myLinks: '='
    },
    template: require('./navbar.html')
  }
}

export default angular.module('directives.navbar', [])
  .directive('navbar', navbar)
  .name;
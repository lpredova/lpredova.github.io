'use strict';

angular.module('portfolioApp.version', [
  'portfolioApp.version.interpolate-filter',
  'portfolioApp.version.version-directive'
])

.value('version', '0.1');

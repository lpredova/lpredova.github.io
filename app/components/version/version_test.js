'use strict';

describe('portfolioApp.version module', function() {
  beforeEach(module('portfolioApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});

(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('fg.uiRouterExtras.config', ['ui.router'])
  .value('fg.uiRouterExtras.config', { debug: true })
  .config(uiRouterExtraConfig);

  // Modules
  angular.module('fg.uiRouterExtras', [ 'fg.uiRouterExtras.config', 'ui.router']);
  
  /* @ngInject */
  uiRouterExtraConfig.$inject = ['$stateProvider'];
  function uiRouterExtraConfig($stateProvider){
  	$stateProvider.decorator('parent', function (stateObj, parentFn) {
  		stateObj.self.$$state = function() { 
  			return stateObj; 
  		};

  		return parentFn(stateObj); 
  	});
  }

})(angular);

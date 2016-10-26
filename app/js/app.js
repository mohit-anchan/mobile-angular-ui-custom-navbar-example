
var app = angular.module('CustomNavbarApp', [
		'ngRoute',
		'mobile-angular-ui',
    'CustomNavbarApp.Controllers'
	]);

/* Maintaining an array of urls, where the 'Back' must not be displayed */
var noBackButtonPages = ['/', '/home', '/login'];

/* Here, the 'secure:' part is custom value passed  to routeProvider json for each url, 
which will be later used to determine to show/hide the logout button on that page  */
app.config(function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'template/login.html', controller: 'MainCtrl', reloadOnSearch: false, secure: false});
  $routeProvider.when('/home', {templateUrl: 'template/dashboard.html', reloadOnSearch: false, secure: true});
  $routeProvider.when('/products', {templateUrl: 'template/products.html', reloadOnSearch: false, secure: true});
  $routeProvider.when('/mobile', {templateUrl: 'template/mobile.html', reloadOnSearch: false, secure: true});
  $routeProvider.when('/reports', {templateUrl: 'template/reports.html', reloadOnSearch: false, secure: true});
  $routeProvider.when('/feeds', {templateUrl: 'template/feeds.html', reloadOnSearch: false, secure: true});
  $routeProvider.when('/employees', {templateUrl: 'template/employees.html', reloadOnSearch: false, secure: true});
  $routeProvider.when('/careers', {templateUrl: 'template/careers.html', reloadOnSearch: false, secure: true});
  $routeProvider.when('/announcements', {templateUrl: 'template/announcements.html', reloadOnSearch: false, secure: true});
  $routeProvider.when('/about', {templateUrl: 'template/about.html', reloadOnSearch: false, secure: true});

  $routeProvider.otherwise('/login');
});


app.run(['$rootScope',  function($rootScope) {

      /* OnRouteChange Event, getting the next path and determining to show/hide
      the navbar icons */
  		$rootScope.$on('$routeChangeStart', function(event, next, current){
  			$rootScope.showHomeAndBackBtn = true;
  			$rootScope.isLoggedIn = false;
  			var newPath = undefined;

  			if (next != undefined && next.$$route != undefined){

  				if (next.$$route.originalPath != undefined){
            /* Getting the next path */
  					newPath = next.$$route.originalPath;
  				}

  				if (next.$$route.secure != undefined && next.$$route.secure){
  					$rootScope.isLoggedIn = true;
  				}
			}

			/* Hide/Show Home and Back buttons */
			if (newPath != undefined && checkValueInArray(noBackButtonPages, newPath)){
				$rootScope.showHomeAndBackBtn = false;
			}

		});
	}
]);


function checkValueInArray(arr, value){
	for (i=0; i<arr.length; i++){
		if(arr[i] == value) {
			return true
		};
	}
	return false;
}


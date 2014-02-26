/**
* app.js
*
*/

/**
* WHO'S THE HERO
*
*/
angular.module( 'whosthehero', ['ngRoute', 'ngCookies'] )
		.config([
			'$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
				$routeProvider
					.when( '/create-story', {
						metaTitle	: 'Create my own story | Who\'s the hero',
						templateUrl	: 'templates/create-story.html' 
					})
					.when( '/test-page', {
						metaTitle	: 'Test page | Who\'s the hero',
						templateUrl	: 'templates/test-page.html' 
					})
					.when( '/:lang', {
						templateUrl	: 'templates/index.html' 
					})
					
					.otherwise({
						redirectTo	: '/',
						metaTitle	: 'Who\'s the hero',
						templateUrl	: 'templates/index.html'
					});
			}
		])
		

	/***************************************
	* CONTROLLERS
	*
	*/
		/**
		* Create a story
		*
		*/
		.controller('createStoryCtrl', ['$scope', function($scope) {
			$scope.story 		= {};
			$scope.story.title	= 'La profondeur de la forêt';
			$scope.story.scenes	= [
					{
						'id' : 1,
						'text' : '<p>David avait dû s’asseoir lorsqu’il avait entendu le prénom Florence. Il était devenu blanc un instant. Il allait peut-être perdre Florence avant même de lui avoir avoué son amour. Il devait empêcher Prélude de continuer dans son délire. Mais comment pouvait-il stopper ce parasite créé par lui quelques années auparavant ? Ce n’était pas un adversaire ordinaire. David avait déjà détruit plus d’un virus, mais il s’agissait de virus installés sur des machines isolées. Aujourd’hui, c’est une sorte de virus qui a pris place sur tout les ordinateurs de la planète. Et en plus, ce virus, nommé Prélude, avait un soupçon, non négligeable, d’intelligence. </p><p>Désormais, tous les ordinateurs lui étaient accessible. Les centrales nucléaires, les services informatiques des grandes compagnies, de l’eau, du téléphone, la télévision, l’électricité, la défense, la bourse...</p>',
						'actions' : [
							{
								'text' 		: 'je ramasse le couteau',
								'fromScene' : 1,
								'toScene' 	: 2
							},
							{
								'text' 		: 'je sors de la maison',
								'fromScene' : 1,
								'toScene' 	: 3
							}
						]
					}
				
				];
			
			console.log($scope.story.scenes);
			
		}]);
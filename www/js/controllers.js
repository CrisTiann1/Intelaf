angular.module('starter.controllers', [])

.controller('CategoriesCtrl', function($scope) {
  //categories
  $scope.categoria = [
    'Telefonia',
    'Impresoras',
    'Gaming',
    'Computadoras',
    'Accesorios',
    'Componentes PC',
    'Mubles y Oficina',
    'Camaras'
  ];
  $scope.categories = [
  {
    nombre: 'Telefonia',
    icon: 'fa fa-mobile'
  }, {
    nombre: 'Impresoras',
    icon: 'fa fa-print'
  },{
    nombre: 'Gaming',
    icon: 'fa fa-gamepad'
  },{
    nombre: 'Computadoras',
    icon: 'fas fa-desktop'
  },{
    nombre: 'Accesorios',
    icon: 'fas fa-keyboard'
  },{
    nombre: 'ComponentesPC',
    icon: 'fab fa-steam'
  },{
    nombre: 'Mobiliario',
    icon: 'fas fa-couch'
  },{
    nombre: 'Camaras',
    icon: 'fas fa-camera'
  }]
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

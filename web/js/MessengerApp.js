/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var messenger=angular.module("Messenger",['ngRoute'
    //'Settings'
    ]);
    //'Chat']);
    //'ngAnimate'
    //'ngMessages'

//]);

messenger.config(["$routeProvider",function($routeProvider){
    $routeProvider
           .when("/chat",{
                templateUrl:'html/ChatRoom.html'
                //controller:'ChatCtrl',
                //controllerAs:'chatboard'
                   
    })
            .when("/",{
                templateUrl:'Register.html'
                    
    })
            .when("/AccountSettings",{
                templateUrl:'html/CommonBoard.html',
                //controller:'SettingsCtrl',
                //controllerAs:'settings'
                
    })
            .when("/commonboard",{
                templateUrl:'html/CommonBoard.html'
    })
            
            .otherwise({
                redirectTo:'Register.html'
    });
    
}]);//end of Config Service

//get messages
/*
messenger.service('getOnlineUsers',['$http','$log',function($http, $log){
        
}]);
*/
//get current user
/*messenger.service("currentUser",function(){
        var main=this;
        main.user={};
        main.setUser=function(data){
            main.user.id=data.id;
            main.user.username=data.username;
            main.user.email=data.email;
            main.user.age=data.age;
        };
        
        main.getUser=function(){
            return main.user;
        };
        
});

//get all the users who are currently active

messenger.service("OnlineUsers",function(
        ){
    var main=this;
    main.users=[];
    main.getUsers=function(){
        return users;
    };
    main.setUsers=function(user){
        main.users.push(user);
    };
    
});*/

  
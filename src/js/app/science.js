/**
 * Created by Erwin on 28/02/16.
 */
(function() {

    var app = angular.module('science', []);

    app.controller('CircleController', function(){

        return {

            'diameter' : 5 * 2,
            'omtrek' : 5 * Math.PI * 2,
            'oppervlakte' : Math.pow(5, 2) * Math.PI

        };
    });

    app.controller('SphereController', function(){

        return {

            'oppervlakte' : 4 * Math.pow(5, 2) * Math.PI,
            'volume' :   4 * Math.pow(5, 3) * Math.PI / 3
        };
    });

})();

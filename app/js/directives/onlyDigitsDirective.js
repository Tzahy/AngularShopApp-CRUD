//onlyDigitsDirective
animalsApp.directive('onlyNumbers', function () {
    return{
        restrict: 'A',
        link: function (scope, element, attrs, controller){
            element.on('keydown', function(e){
                return (isNumber(e.keyCode));
               /* if (isNumber(e.keyCode)){
                    return true;
                }
                return false;*/
            });
        }

    };

    function isNumber(key){

        return (key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key == 8);

    }

});


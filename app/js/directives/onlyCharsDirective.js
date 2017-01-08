//onlyDigitsDirective
animalsApp.directive('onlyChars', function () {
    return{
        restrict: 'A',
        link: function (scope, element, attrs, controller){
            element.on('keydown', function(e){
                // return true or false to the dom after checking inside the function.
                return (isChar(e.keyCode));
            });
        }

    };

    function isChar(key){
        // Check if the key is in range and return true or false.
        return (key >= 65 && key <= 90) ||  (key == 8) || (key==32);

    }

});



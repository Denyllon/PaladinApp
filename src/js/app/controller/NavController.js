var NavController = function($scope, $compile) {

    $scope.changeUserbarAppName = function(item) {
        let appName = document.querySelector('#app-name');
        appName.innerHTML = item;
    };

    $scope.loadHTML = function(site) {
        let contentSection = document.querySelector('#content');
        contentSection.setAttribute('ng-bind-html', `deliberatelyTrustDangerousSnippet(${site})`);
        $compile(contentSection)($scope);
    };
    
    $scope.setActive = function(item) {
        $scope.activeItem = item;
    };

};

export default NavController;
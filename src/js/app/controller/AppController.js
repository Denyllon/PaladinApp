import "../../../views/campaigns.html";
import "../../../views/insights.html";
import "../../../views/locator.html";
import "../../../views/network.html";
import "../../../views/rights.html";

var AppController = function($scope, $sce, $http) {

    $scope.menuItems = ["network", "campaigns", "locator", "rights", "insights"];
    for(let item of $scope.menuItems) {
        $http.get(`/views/${item}.html`).then(function(response) {
            $scope[item] = response.data;
        });
    }

    $scope.deliberatelyTrustDangerousSnippet = function(site) {
        return $sce.trustAsHtml(site);
    };

    
    

};

export default AppController;
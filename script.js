let x=angular.module("myList",[]);
x.controller("myController",function($scope){
    $scope.Item=[];
    $scope.completedTasks = [];
    $scope.newItem="";
    $scope.pushItem=function(){
        if($scope.newItem!=""){
            $scope.Item.push($scope.newItem);
            $scope.newItem="";

        }
        }
    $scope.delItem=function(index){
    $scope.Item.splice(index,1);
    }

    $scope.editItem=function(index){
        var editedTask=prompt('Edit Task:',$scope.Item[index]);
        if(editedTask!=null){
            $scope.Item[index]=editedTask;
        }

    };
    $scope.completeItem = function(index) {
        const completedTask = $scope.Item.splice(index, 1)[0]; 
        $scope.completedTasks.push({ name: completedTask }); 
    };

})


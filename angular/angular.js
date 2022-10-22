
var app = angular.module('myapp',["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "trangchu.html"
    })
    .when("/ao", {
        templateUrl : "ao.html" 
    })
    .when("/chitietao/:id", {
        templateUrl : "viewchitiet/chitietao1.html",
        controller : "chitietctrl"
    })
    .when('/thanhtoan',{
        templateUrl : 'viewdathang/dathang.html'
    })
    .when('/quan',{
        templateUrl : 'quan.html'
    })
    .when('/phukien',{
        templateUrl : 'phukien.html'
    })
});

app.controller('myctrl',($scope,$http,$routeParams)=>{

    $scope.arr = [] ;
    // connect data
    $http.get("/data/dataao.json").then((res)=>{
        $scope.arr = res.data ;
    },(res)=>{
        alert('Lỗi rồi bạn ơi');
    })
    // show product quantity ( trang áo )
    $scope.value = 9 ;
    $scope.begin = 0 ;
    $scope.next1 = () => {
        $scope.value = 9 ;
        $scope.begin = 0 ;
    }
    $scope.next2 = () => {
        $scope.value = 9 ;
        $scope.begin = 9 ;
    }
    $scope.next3 = () => {
        $scope.begin = 18 ;
        $scope.value = $scope.arr.length - $scope.value ; 
    }
    $scope.next = () => {
        // chưa làm
    }
    $scope.after = () => {
        // chưa làm 
    }
    // End show product quatity (trang áo)
    // code giỏ hàng 

    $scope.datagiohang = [];
    $scope.muasp = () =>{
       $scope.arr.forEach(element => {
           if(element.id == $routeParams.id){
                var chitietsanpham = {
                    'No' : $scope.datagiohang.length + 1 ,
                    'id' : element.id ,
                    'tensp' : element.name ,
                    'giasp' : element.price 
                }
                $scope.datagiohang[$scope.datagiohang.length] = chitietsanpham ;
           } 
        });
    }
    // hiệu ứng thêm vào giỏ hàng 
    // end

    // remove sản phẩm trong giỏ hàng 
    $scope.removesp = function(id) {
        var index = $scope.datagiohang.findIndex(value => $scope.datagiohang.id === id );
        $scope.datagiohang.splice(index,1);
    }
    // end

    // tổng tiền trong giỏ hàng 
    $scope.tongtien = ()=>{
        var S = 0 ;
        $scope.datagiohang.forEach(value => {
            S = S + value.giasp ;
        });
        return S ;
    }


    // khu vực 
    $scope.khuvucs = ['Miền Nam','Miền Bắc' ,"Miền Trung"];
    $scope.thanhphos = ['Hồ Chí Minh' , 'Bình Dương' , "Đồng Nai" , 'An Giang' , 'Tây Ninh' , 'Vũng Tàu'];
    $scope.quans = ['Quận 1', 'Quận 2' ,'Quận 3','Quận 4', 'Quận 5','Quận 6', 'Quận 7','Quận 8','Quận 9','Quận 10', 'Quận 11','Quận 12'];
})
app.controller("chitietctrl",function($scope,$routeParams){
        $scope.id = $routeParams.id ;
        $scope.random = Math.floor(Math.random() * 11);
        
});

app.filter('locsanpham',()=>{
    return (arr,id)=>{
        var arrnew = [] ;
        arr.forEach(element => {
           if(element.id == id ){
                arrnew.push(element);
           }
        });
        return arrnew ;
    }
})

app.filter('lochang',()=>{
    return(arr,id)=>{
        var arrnew = [] ;
        arr.map(element=>{
            if(element.id != id ){
                arrnew.push(element);
            }
        })
        return arrnew ;
    }
})
// app.filter('lochang',()=>{
//     var arrnew = [] ;
//     return(arr,id)=>{
//         for(var i = 0 ; i <= arr.length ; i++){
//             if(arr[i].id != id ){
//                 arrnew.push(arr[i]);
//             }  
//             return arrnew ;
//         }
//     }
// })


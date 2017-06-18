
angular.module("angularTable",['angularUtils.directives.dirPagination'])
    .controller("basicCtrl", ["$scope","dataService", function($scope, dataService) {

        $scope.data = dataService.database;
        $scope.currentPage = 1;
        $scope.defaultValue = 1;
        $scope.pageSize = 10;

        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        }
}])
    .factory('dataService',
        [function() {
            return {
                database: [
                    {
                        'id': 1,
                        'Date': '17/05/2017',
                        'Time': '01:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'aa'
                    },
                    {
                        'id': 2,
                        'Date': '18/05/2017',
                        'Time': '02:31:35',
                        'Company': 'Delu',
                        'Message': 'CC'
                    },
                    {
                        'id': 3,
                        'Date': '19/05/2017',
                        'Time': '00:32:35',
                        'Company': 'Pelu.',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 4,
                        'Date': '16/05/2017',
                        'Time': '00:32:35',
                        'Company': 'Compamy',
                        'Message': 'Message'
                    },
                    {
                        'id': 5,
                        'Date': '10/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'Success'
                    },
                    {
                        'id': 6,
                        'Date': '16/05/2017',
                        'Time': '02:32:45',
                        'Company': 'Yandex',
                        'Message': 'QQQ'
                    },
                    {
                        'id': 7,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'GF',
                        'Message': 'ielts'
                    },
                    {
                        'id': 8,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'Heli',
                        'Message': '41231'
                    },
                    {
                        'id': 9,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'Asrem',
                        'Message': 'zzzzz'
                    },
                    {
                        'id': 10,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'LEt',
                        'Message': 'xbcvb'
                    },
                    {
                        'id': 11,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'Iet',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 12,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'KUU',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 13,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'Micro',
                        'Message': 'This is a message'
                    },{
                        'id': 14,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'Delu',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 15,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 16,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 17,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    }, {
                        'id': 18,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    }, {
                        'id': 19,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    }, {
                        'id': 20,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    }, {
                        'id': 21,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    }, {
                        'id': 22,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    }, {
                        'id': 23,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 24,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 25,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 26,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 27,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 28,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 29,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    },
                    {
                        'id': 30,
                        'Date': '16/05/2017',
                        'Time': '02:32:35',
                        'Company': 'PTL Ltd.',
                        'Message': 'This is a message'
                    }
                ]
            };
        }]);

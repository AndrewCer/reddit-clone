var app = angular.module('redditClone', ['angularMoment']);

app.controller('subAndSearch', function ($scope) {
  $scope.message = {
   text: 'hello world!',
   time: new Date()
};
  $scope.posts = [{
    imgUrl: 'http://www.heartsandmindsbooks.com/Hiking-Shoes-588x391.jpg',
    title: 'Trees Man',
    likeCount: 2,
    author: 'Bob',
    description: "Umami vegan disrupt, butcher flannel fingerstache keytar normcore tousled before they sold out. 90's squid fanny pack, biodiesel chillwave fixie retro drinking vinegar before they sold out scenester. Fingerstache food truck cliche migas viral iPhone. Street art authentic dreamcatcher mlkshk Pinterest, small batch narwhal fap 3 wolf moon locavore",
    created: new Date()
  },
  {
    imgUrl: 'http://www.carolinacremation.com/versionone/wp-content/uploads/2011/06/the-great-outdoors-wallpapers_3680_16001.jpg',
    title: 'Holy Cow!',
    likeCount: -2,
    author: 'Mountain Man Jack',
    description: "Umami vegan disrupt, butcher flannel fingerstache keytar normcore tousled before they sold out. 90's squid fanny pack, biodiesel chillwave fixie retro drinking vinegar before they sold out scenester. Fingerstache food truck cliche migas viral iPhone. Street art authentic dreamcatcher mlkshk Pinterest, small batch narwhal fap 3 wolf moon locavore",
    created: new Date()
  },
  {
    imgUrl: 'https://oneadamtwelv.files.wordpress.com/2012/07/p8131124.jpg',
    title: 'Marshy Marsh',
    likeCount: 4,
    author: 'Marsh Man',
    description: "Umami vegan disrupt, butcher flannel fingerstache keytar normcore tousled before they sold out. 90's squid fanny pack, biodiesel chillwave fixie retro drinking vinegar before they sold out scenester. Fingerstache food truck cliche migas viral iPhone. Street art authentic dreamcatcher mlkshk Pinterest, small batch narwhal fap 3 wolf moon locavore",
    created: new Date()
  }];
  $scope.upVote = function (index) {
    console.log(this.post);
    this.post.likeCount += 1
  }
  $scope.downVote = function (index) {
    this.post.likeCount -= 1
  }
  $scope.initialSort = '-likeCount';
  $scope.filter = function (filterOption) {
    if (filterOption === 'vote') {
      $scope.sortByType = "-likeCount";
    }
    if (filterOption === 'date') {
      $scope.sortByType = "created";
    }
    if (filterOption === 'title') {
      $scope.sortByType = "title";
    }
  };
  $scope.submitForm = function (isValid, title, author, imgUrl, description) {
    if (isValid) {
      var schemaObj = {
        imgUrl: imgUrl,
        title: title,
        likeCount: 0,
        author: author,
        description: description,
        created: Date()
      };
      $scope.posts.push(schemaObj)
    }
    else {

    }
  }
});

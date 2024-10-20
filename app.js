var app = angular.module('myApp', []);

app.controller('MainController', function($scope) {
    $scope.user = {
        name: "Your Name",
        intro: "I am a passionate learner and an aspiring developer.",
        about: "I am a student at XYZ college, pursuing a degree in computer science. I love working on web development projects and learning new technologies.",
        hobbies: ["Reading", "Coding", "Playing Football", "Music"],
        town: "I come from [Your Town], a peaceful place known for its beautiful landscapes.",
        townImage: "image1.png",  // Replace with actual image URL if available
        family: [
            { name: "John Doe", relation: "Father" },
            { name: "Jane Doe", relation: "Mother" },
            { name: "Sara Doe", relation: "Sister" }
        ],
        education: "I have completed my schooling from XYZ School and currently pursuing my Bachelor's degree in Computer Science at XYZ College.",
        achievements: ["First Place in Coding Competition", "Top Scorer in College", "Scholarship Holder"],
        contributions: "I regularly volunteer at the local animal shelter and participate in coding bootcamps to help juniors learn programming."
    };
});

var app = angular.module('myApp', []);

app.controller('MainController', function($scope) {
    $scope.user = {
        name: "Montu Kumar",
        intro: "I am a passionate learner and an aspiring developer.",
        about: "I am currently pursuing a Bachelor of Computer Applications (BCA) from Assam Down Town University in Guwahati. I am passionate about technology and constantly working to enhance my skills in programming and development.",
        hobbies: ["Reading", "Coding", "Playing Football", "Music"],
        town: "I come from Golaghat, a beautiful town in Assam. It is a serene place known for its proximity to Kaziranga National Park and its rich culture. My hometown has shaped many of my values and my sense of community.",
        townImage: "image1.png",  // Replace with actual image URL if available
        family: [
            { name: "Maxh Jadh", relation: "Father" },
            { name: "Jane Than", relation: "Mother" },
            { name: "Dais Kahj", relation: "Sister" }
        ],
        education: "I completed my 10th grade from K.B.M English School, Golaghat, and my 12th grade from Ramanujan Junior College, Nagaon. These formative years played a significant role in shaping my academic journey, providing me with a strong foundation in both academics and extracurricular activities. Currently, I am in my final year of BCA at Assam Down Town University. My college life has been a blend of academic learning, project development, and participating in various tech-related activities and hackathons. The atmosphere in college has allowed me to collaborate with my peers on several exciting projects.",
        achievements: ["First Place in Coding Competition", "Top Scorer in College", "Scholarship Holder"],
        contributions: "I have been actively involved in my community through various initiatives. Since 2022, I’ve participated in community service projects, helping to clean parks and organize local events. I also volunteer weekly at a local shelter, providing meals and support to those in need. Since 2020, I’ve organized fundraising events to aid local charities and non-profits. Additionally, I’ve been sharing resources and offering guidance to help others succeed since 2021. Through these efforts, I strive to make a positive impact in my community."
    };
});

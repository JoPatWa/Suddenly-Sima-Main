var view = {
  firstPost: {
    title: "DIY - 100% Natural deodorant",
    date: "October 14th 2018",
    image: "./images/ss/870x400-Blog-Header-Images/natural_deodorant_2.png",
    alt: "how to make deodorant, homemade deodorant, natural deodorant",
    link: "./blog-posts/natural-deodorant-diy.html"
  },
  secondPost: {
    title:
      "12 Things to Remember When Visiting The United States as a Foreign Student",
    date: "August 6 2018",
    image:
      "./images/ss/870x400-Blog-Header-Images/12-tips-for-when-visiting-the-usa-as-a-forgeign-student-banner.jpg",
    alt:
      "Students at International School in Mozambique, International students, travel abroad, visit abroad",
    link:
      "./blog-posts/12-things-to-remember-when-visiting-the-usa-as-a-foreign-student.html"
  },
  thirdPost: {
    title: "Sleeping Tips For A Long Flight In Economy",
    date: "July 4th 2018",
    image:
      "./images/ss/870x400-Blog-Header-Images/sleeping-tips-for-a-long-flight-economy-banner.jpg",
    alt: "Economy Class Airline Seats",
    link: "./blog-posts/sleeping-tips-for-a-long-flight-in-economy.html"
  }
};

function loadRecentPostsLeftSideBar() {
  var output = Mustache.render(
    '<div class="sidebar-widget"><h6 class="mt-40 mb-20">Recent Posts </h6><div class="recent-post clearfix"><div class="recent-post-image"><img class="img-fluid" src={{firstPost.image}} alt="{{firstPost.alt}}">          </div>          <div class="recent-post-info">            <a href="{{firstPost.link}}">{{firstPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{firstPost.date}}</span>          </div>        </div>        <div class="recent-post clearfix">          <div class="recent-post-image">            <img class="img-fluid" src={{secondPost.image}} alt="{{secondPost.alt}}">          </div>          <div class="recent-post-info">            <a href="{{secondPost.link}}">{{secondPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{secondPost.date}}</span>          </div>        </div>        <div class="recent-post clearfix">          <div class="recent-post-image">            <img class="img-fluid" src={{thirdPost.image}} alt="{{thirdPost.alt}}">          </div>          <div class="recent-post-info">            <a href="{{thirdPost.link}}">{{thirdPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{thirdPost.date}}</span>          </div>        </div>      </div>',
    view
  );
  document.getElementById("recent-posts").innerHTML = output;
}

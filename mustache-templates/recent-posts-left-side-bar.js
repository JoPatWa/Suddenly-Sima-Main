var view = {
    firstPost: {
        title: "Sleeping Tips For A Long Flight In Economy",
        date: "July 4th 2018",
        image: "./images/ss/870x400-Blog-Header-Images/sleeping-tips-for-a-long-flight-economy-banner.jpg",
        alt: "Economy Class Airline Seats",
        link: "./blog-posts/sleeping-tips-for-a-long-flight-in-economy.html"
    },
    secondPost: {
        title: "Six Beauty Hacks That Will Change Your Life",
        date: "July 3rd 2018",
        image: "./images/ss/870x400-Blog-Header-Images/6-beauty-hacks-that-will-change-your-life-banner.jpg",
        alt: "black woman with red lipstick",
        link: "./blog-posts/6-beauty-hacks-that-will-change-your-life.html"
    },
    thirdPost: {
        title: "DIY Manicure",
        date: "January 8th 2018",
        image: "./images/ss/main_diy_manicure.jpg",
        alt: "do-it-yourself manicure",
        link: "./blog-posts/diy-manicure-post.html"
    }
};

function loadRecentPostsLeftSideBar() {
    var output = Mustache.render(
        '<div class="sidebar-widget"><h6 class="mt-40 mb-20">Recent Posts </h6><div class="recent-post clearfix"><div class="recent-post-image"><img class="img-fluid" src={{firstPost.image}} alt="{{firstPost.alt}}">          </div>          <div class="recent-post-info">            <a href="{{firstPost.link}}">{{firstPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{firstPost.date}}</span>          </div>        </div>        <div class="recent-post clearfix">          <div class="recent-post-image">            <img class="img-fluid" src={{secondPost.image}} alt="{{secondPost.alt}}">          </div>          <div class="recent-post-info">            <a href="{{secondPost.link}}">{{secondPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{secondPost.date}}</span>          </div>        </div>        <div class="recent-post clearfix">          <div class="recent-post-image">            <img class="img-fluid" src={{thirdPost.image}} alt="{{thirdPost.alt}}">          </div>          <div class="recent-post-info">            <a href="{{thirdPost.link}}">{{thirdPost.title}}</a>            <span>              <i class="fa fa-calendar-o"></i> {{thirdPost.date}}</span>          </div>        </div>      </div>',
        view
    );
    document.getElementById('recent-posts').innerHTML = output;
}


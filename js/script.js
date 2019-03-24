var marvel = {
    apiComics: function() {
        var url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a0f7499a748ecc9ccf5d6ba49f97f070&hash=579bc9130b862062da736eb1c261869b";
        var comics = document.querySelector("#marvelComics");

        var getComics = function(data) {
            var dtComics = "";
            var priceLabel = "Price: $";

            for(var i = 0; i<data.data.results.length; i++){
                var element = data.data.results[i];

                dtComics += "<div class='data-comics'>";
                dtComics += "<a class='space-comics' href='details-comics.html'target='_self'>";
                dtComics += "<img class='effect-comics' src='"+element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+"' />";
                dtComics += "<h3 class='comics-title'>" +element.title+ "</h3>";
                dtComics += "<p class='comics-price'>" + priceLabel +element.prices[0].price+ "</p>";
                dtComics += "</a>";
                dtComics += "</div>";
            }
            
            comics.innerHTML = dtComics;
        }

        var getError = function() {
            comics.innerHTML = "Sorry, something bad happened";

            if(getComics){
                comics.classList.add("error-getError");
            }
        }
        
        $.ajax({
            url: url, 
            type: "GET",
            success: getComics,
            error: getError
        });
    }
};

marvel.apiComics();

var menu = {
    menuMobile: function(){
        var mbMenu = document.querySelector("#menu-mb");
        var nav = document.querySelector("#nav"); //.classList.add("navigation") //.style.display = "none"
        var navClose = document.querySelector("#nav-close");
        var svgClose = document.querySelector("#icon-svg-close");
        var mainMenu = document.querySelectorAll(".style-mb-menu");
        var mainMenuSvg = document.querySelectorAll(".style-svg-mb-menu");

        function eventOpenMenu(e){
            e.preventDefault();

            nav.classList.add("navigation");
            nav.classList.add("mobile-nav");
            nav.classList.add("mobile-nav-container");
            nav.style.display = "block";

            navClose.classList.add("nav-close");
            navClose.style.display = "block";

            svgClose.classList.add("icon-svg-white-stroke");
            svgClose.classList.add("icon-svg");
            
            for(i=0; i<mainMenu.length; i++){
                mainMenu[i].classList.add("menu-nav-item");
            }

            for(i=0; i<mainMenuSvg.length; i++){
                mainMenuSvg[i].classList.add("icon-svg-red-stroke");
                mainMenuSvg[i].classList.add("icon-svg");
            }
        }

        function eventCloseMenu(e){
            e.preventDefault();

            nav.classList.remove("navigation");
            nav.classList.remove("mobile-nav");
            nav.classList.remove("mobile-nav-container");
            nav.style.display = "none";

            navClose.classList.remove("nav-close");
            navClose.style.display = "none";

            svgClose.classList.remove("icon-svg-white-stroke");
            svgClose.classList.remove("icon-svg");
        }

        mbMenu.addEventListener("click", eventOpenMenu);
        svgClose.addEventListener("click", eventCloseMenu);
    }
};

menu.menuMobile();


var slider = {
    sliderCarousel: function(){
        var imagesSlider = document.querySelector("#images-slider");
        var classesSlider, i;

        function init(){
            setInterval(changeSlider, 4000);
            i = 0;
            classesSlider = ["slider-image", "slider-image2", "slider-image3", "slider-image4", "slider-image5"];
        }
        init();

        function changeSlider(){
            imagesSlider.setAttribute("class", classesSlider[i]);
            i++;

            if( i>=classesSlider.length ) {
                i=0;
            }
        }
        
    }
};

slider.sliderCarousel();
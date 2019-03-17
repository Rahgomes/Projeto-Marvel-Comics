var marvelComics = {
    apiComicsDetails: function() {
        var url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a0f7499a748ecc9ccf5d6ba49f97f070&hash=579bc9130b862062da736eb1c261869b";
        var titleComics = document.querySelector("#titleApi");

        var getTitle = function(data) {
            var dtTitle = "";
            var dtThumb = "";
            var dtPublish = "";
            var dtPenciler = "";
            var dtPrice = "";

            var element = data.data.results[0];

            dtTitle += "<h3 class='title-comics-api'>" + data.data.results[0].title + "</h3>";

            dtThumb = " <img class='thumb' src='" + element.thumbnail.path + "/portrait_fantastic." + element.thumbnail.extension+"' />";
            
            dtPublish += "<p class='tt-comics'> Published: </p>";
            dtPublish += "<span class='content-comics'>" + element.dates[1].date + "</span>";

            dtPenciler += "<p class='tt-comics'> Penciler: </p>";
            dtPenciler += "<span class='content-comics'>" + element.creators.items[0].name + "</span>";

            dtPrice = "<p class='value-digital-comics'> Digital Issue: $" + element.prices[0].price + "</p>";
            
            //Apenas o Título criei variável através do querySelector, os demais campos puxei diretamente pelo ID.
            titleComics.innerHTML = dtTitle;
            thumbApi.innerHTML = dtThumb;
            publishApi.innerHTML = dtPublish;
            pencilerApi.innerHTML = dtPenciler;
            priceApi.innerHTML = dtPrice;
        }

        var getError = function() {
            titleComics.innerHTML = "Sorry, something bad happened";

            if(getComics){
                titleComics.classList.add("error-getError");
            }
        }
        
        $.ajax({
            url: url, 
            type: "GET",
            success: getTitle,
            error: getError
        });
    }
};

marvelComics.apiComicsDetails();

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
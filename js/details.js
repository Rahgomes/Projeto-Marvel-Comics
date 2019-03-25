var marvelComics = {
    apiComicsDetails: function() {
        var url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a0f7499a748ecc9ccf5d6ba49f97f070&hash=579bc9130b862062da736eb1c261869b";
        var titleComics = document.querySelector("#titleApi");

        var getTitle = function(data) {
            var dtTitle = "";
            var dtThumb = "";
            var dtPublish = "";
            var dtWriter = "";
            var dtPrice = "";
            var dtDesc = "";
            var dtPenciler = "";
            var dtEditor = "";

            var element = data.data.results[2];

            dtTitle += "<h3 class='title-comics-api'>" + element.title + "</h3>";

            dtThumb += " <img class='thumb' src='" + element.thumbnail.path + "/portrait_fantastic." + element.thumbnail.extension+"' />";
            
            dtPublish += "<p class='tt-comics'> Published: </p>";
            dtPublish += "<span class='content-comics'>" + element.dates[1].date + "</span>";

            dtWriter += "<p class='tt-comics'> Writer: </p>";
            dtWriter += "<span class='content-comics'>" + element.creators.items[0].name + "</span>";

            dtPenciler += "<p class='tt-comics'> Penciler: </p>";
            dtPenciler += "<span class='content-comics'>" + element.creators.items[2].name + "</span>";

            dtEditor += "<p class='tt-comics'> Editor: </p>";
            dtEditor += "<span class='content-comics'>" + element.creators.items[1].name + "</span>";

            dtPrice += "<p class='value-digital-comics'> Digital Issue: $" + element.prices[0].price + "</p>";

            dtDesc += element.description;
            
            //Apenas o Título criei variável através do querySelector, os demais campos puxei diretamente pelo ID.
            titleComics.innerHTML = dtTitle;
            thumbApi.innerHTML = dtThumb;
            publishApi.innerHTML = dtPublish;
            writerApi.innerHTML = dtWriter;
            priceApi.innerHTML = dtPrice;
            descriptionApi.innerHTML = dtDesc;
            pencilerApi.innerHTML = dtPenciler;
            editorApi.innerHTML = dtEditor;
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

var ComicsDetails = {
    apiMoreDetails: function() {
        var url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a0f7499a748ecc9ccf5d6ba49f97f070&hash=579bc9130b862062da736eb1c261869b";

        var getExtendedCredits = function(dataDetails) {
            var element = dataDetails.data.results[2];
            var format = "";
            var upc = "";
            var lang = "";
            var price = "";
        
            format = "<span class='str-details'>Format: </span>";
            format += "<span class='noStr-details'>" + element.format + "</span>";

            upc = "<span class='str-details'>UPC: </span>";
            upc += "<span class='noStr-details'>" + element.upc + "</span>";

            lang = "<span class='str-details'>Language: </span>";
            lang += "<span class='noStr-details'>" + element.textObjects[0].language + "</span>";

            price = "<span class='str-details'>Price: </span>";
            price += "<span class='noStr-details'>$" + element.prices[0].price + "</span>";
        
        
            mdFormat.innerHTML = format;
            mdUpc.innerHTML = upc;
            mdLang.innerHTML = lang;
            mdPrice.innerHTML = price;
        }

        var getStories = function(dataDetails) {
            var element = dataDetails.data.results[2];
            var writer = "";
            var penciler = "";
            var editor = "";

            writer = "<span class='str-details'>Writer: </span>";
            writer += "<span class='noStr-details'>" + element.creators.items[0].name + "</span>";

            penciler = "<span class='str-details'>Penciler: </span>";
            penciler += "<span class='noStr-details'>" + element.creators.items[2].name + "</span>";

            editor = "<span class='str-details'>Editor: </span>";
            editor += "<span class='noStr-details'>" + element.creators.items[1].name + "</span>";

            mdWriter.innerHTML = writer;
            mdPenciler.innerHTML = penciler;
            mdEditor.innerHTML = editor;
        }

        var getCoverInformation = function(dataDetails) {
            var element = dataDetails.data.results[2];
            var coverWriter = "";
            var coverPenciler = "";

            coverWriter = "<span class='str-details'>Writer (cover): </span>";
            coverWriter += "<span class='noStr-details'>" + element.creators.items[1].name + "</span>";

            coverPenciler = "<span class='str-details'>Penciler (cover): </span>";
            coverPenciler += "<span class='noStr-details'>" + element.creators.items[2].name + "</span>";

            mdWriterCover.innerHTML = coverWriter;
            mdPencilerCover.innerHTML = coverPenciler;
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
            success: getExtendedCredits,
            error: getError
        });

        $.ajax({
            url: url, 
            type: "GET",
            success: getStories,
            error: getError
        });

        $.ajax({
            url: url, 
            type: "GET",
            success: getCoverInformation,
            error: getError
        });
    }
};

ComicsDetails.apiMoreDetails();

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
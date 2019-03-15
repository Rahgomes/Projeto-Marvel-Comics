var marvel = {
    render: function() {
        var url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a0f7499a748ecc9ccf5d6ba49f97f070&hash=579bc9130b862062da736eb1c261869b";
        var comics = document.querySelector("#marvelComics");

        var getComics = function(data) {
            var dtComics = "";
            var priceLabel = "Price: $";

            console.log(data.data.results)

                dtComics += "<div class='data-comics'>";
                dtComics += "<a href='" +data.data.results[0].urls[0].url+"'target='_blank'>";
                dtComics += " <img src='"+data.data.results[0].thumbnail.path +"/portrait_fantastic."+data.data.results[0].thumbnail.extension+"' />";
                dtComics += "</a>";
                dtComics += "<h3 class='comics-title'>" +data.data.results[0].title+ "</h3>";
                dtComics += "<p class='comics-price'>" + priceLabel +data.data.results[0].prices[0].price+ "</p>";
                dtComics += "</div>";

                dtComics += "<div class='data-comics'>";
                dtComics += "<a href='" +data.data.results[8].urls[0].url+"'target='_blank'>";
                dtComics += " <img src='"+data.data.results[8].thumbnail.path +"/portrait_fantastic."+data.data.results[8].thumbnail.extension+"' />";
                dtComics += "</a>";
                dtComics += "<h3 class='comics-title'>" +data.data.results[8].title+ "</h3>";
                dtComics += "<p class='comics-price'>" + priceLabel +data.data.results[8].prices[0].price+ "</p>";
                dtComics += "</div>";

                dtComics += "<div class='data-comics'>";
                dtComics += "<a href='" +data.data.results[17].urls[0].url+"'target='_blank'>";
                dtComics += " <img src='"+data.data.results[17].thumbnail.path +"/portrait_fantastic."+data.data.results[17].thumbnail.extension+"' />";
                dtComics += "</a>";
                dtComics += "<h3 class='comics-title'>" +data.data.results[17].title+ "</h3>";
                dtComics += "<p class='comics-price'>" + priceLabel +data.data.results[17].prices[0].price+ "</p>";
                dtComics += "</div>";

            comics.innerHTML = dtComics;
        }

        var getError = function() {
            // No final estilizar a função
            comics.innerHTML = "Sorry, something bad happened";
        }
        
        $.ajax({
            url: url, 
            type: "GET",
            success: getComics,
            error: getError
        });
    }
};
marvel.render();
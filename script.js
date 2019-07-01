// API KEY: 5f899c40facb91346ceee6666e17b35d

var app = document.getElementById('app');

fetch('https://developers.zomato.com/api/v2.1/search', {
    headers: {
        'user-key': "5f899c40facb91346ceee6666e17b35d",
        'accept': 'application/json'
    }
}).then(data => {
    // console.log(data.json())
    data.json().then(res => {
        console.log(res);

        res.restaurants.map(e => {
            
            var card = document.createElement('div');
            var img = document.createElement('img');
            var cardBody = document.createElement('div');
            var heading = document.createElement('h5');
            var content = document.createElement('p');
            var button = document.createElement('button');
            
            img.src = e.restaurant.thumb;
            heading.innerHTML = e.restaurant.name;
            content.innerHTML = e.restaurant.cuisines;
            button.innerHTML = "details"

            card.className = "card";
            img.className = "card-img-top";
            cardBody.className = "card-body";
            heading.className = "card-title";
            content.className = "card-text";
            button.className = "btn btn-primary";
    
            cardBody.appendChild(heading);
            cardBody.appendChild(content);
            cardBody.appendChild(button);
    
            card.appendChild(img);
            card.appendChild(cardBody);
    
            app.appendChild(card);
        })

    })
})

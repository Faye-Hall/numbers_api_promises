let card_api = "http://deckofcardsapi.com/api/deck"
let deck_id = '6fvg0v1uhdb3'
let container = $(".card-container")




$("#draw-button").on("click", function (evt) {
    axios.get("http://deckofcardsapi.com/api/deck/6fvg0v1uhdb3/draw/?count=1")

        .then(data => {
            let cardimage = data.data.cards[0].image
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            container.append(
                $("<img>", {
                    id: 'cardz',
                    src: cardimage,
                    css: {
                        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`,

                    }

                })

            )
            console.log(`${data.data.remaining} cards left`)
        })

        .catch(error => {
            axios.get("http://deckofcardsapi.com/api/deck/6fvg0v1uhdb3/return")
            window.location.reload()
        })
});

// axios.get("http://deckofcardsapi.com/api/deck/6fvg0v1uhdb3/return")
//     .then(data => console.log(data.data.remaining))
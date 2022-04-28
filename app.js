let number = 12;
let url = `http://numbersapi.com/${number}`;
let ourFirstPromise = axios.get(url);

ourFirstPromise
    .then(data => {
        $(".container").append(`<p>${data.data}</p>`)
    })
    .catch(error => {
        console.log(error)
    })

let fourNumbers = []

for (let i = 0; i < 5; i++) {
    fourNumbers.push((axios.get(`${`http://numbersapi.com/${i}`}`)))
}


Promise.all(fourNumbers)
    .then(data => {
        data.forEach(num => {
            $(".container").append(`<p>${num.data}</p>`)
        })

    })
    .catch(error => {
        console.log(error)
    })
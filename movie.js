let api = 'https://www.omdbapi.com/?apikey=5c59e691&t='

let title = document.getElementById('title')
let ReleasedOn = document.getElementById('Released-on');
let director = document.getElementById('director');
let Actors = document.getElementById('Actors');
let Genre = document.getElementById('Genre');
let Desc = document.getElementById('Desc');
let BoxOfficeCollection = document.getElementById('BoxOfficeCollection');
let Awards = document.getElementById('Awards');
let Writer = document.getElementById('Writer');
let ratings = document.getElementById('ratings');
let poster = document.getElementById('img');


let movieContainer = document.getElementById('movie-container')

let loaderContainer = document.getElementById('loader-container')


let loader = document.getElementById('loader')

loader.classList.add('d-none')


movieContainer.classList.add('d-none')


loaderContainer.classList.add('margin')



function search() {

    movieContainer.classList.add('d-none')

    loaderContainer.classList.add('margin')
    loader.classList.remove('d-none')

    let moviename = document.getElementById('moviename').value
    let query = api + moviename;

    

    fetch(query).then((data) => {
        return data.json()
    }).then((finalData) => {
        console.log(finalData)


        
        loader.classList.remove('loader-container')
        movieContainer.classList.remove('d-none')



        loader.classList.add('d-none')
    
        loaderContainer.classList.remove('margin')


    

        title.innerText = finalData.Title;
        ReleasedOn.innerText = finalData.Released;
        director.innerText = finalData.Director;
        Actors.innerText = finalData.Actors;
        Genre.innerText = finalData.Genre;
        Desc.innerText = finalData.Plot;
        BoxOfficeCollection.innerText = finalData.BoxOffice;
        Awards.innerText = finalData.Awards;
        Writer.innerText = finalData.Writer;
        ratings.innerText = finalData.imdbRating;
        poster.src = finalData.Poster;
    })

   

}



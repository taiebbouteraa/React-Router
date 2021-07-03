import React from 'react'

const MovieDesc = ({ film, match }) => {

    let movie = film.filter(el => el.title === match.params.title)

    return (
        <div>
            {/* {movie.map((movie) => (movie.description))} */}
            {movie.map((el) => (
                <div className='trailer-cont'>
                    < iframe width="1280" height="720" src={el.trailer.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                    <div className='mov-desc'>
                        <h4>{el.description}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieDesc

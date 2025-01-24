import {fav, stop} from "../../assets/index.js";
import Button from "../../components/UI/Button.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import movieService from "../../service/movieService.js";

const MovieDetailePage = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})
    useEffect(() => {
        movieService.fetchMovieById(movieId).then( (data) => {
            console.log(data)
            setMovie(data)
        })
    }, []);
    if(Object.keys(movie).length === 0){
        return
    }

    let imgUrl = "https://image.tmdb.org/t/p/original"

    return (
        <div className={'bg-cover bg-center bg-no-repeat bg-gradient-to-b from-black to-[#131416]'} style={{
            backgroundImage: `url(${imgUrl+movie.backdrop_path})`,
        }}>
            <div className={'w-[993px] mx-auto pt-[165px]  pb-[105px] flex justify-between items-center'}>
                <div>
                    <img className={'w-[300px] h-[450px] rounded-[10px]'} src={imgUrl + movie.poster_path} alt=""/>
                </div>
                <div className={'movie-content w-[573px] text-center text-[white]'}>
                    <h3>Cinema</h3>
                    <div>
                        <span>2024</span>
                    </div>
                    <p>Movie</p>
                    <div className={'flex gap-[30px] '}>
                        <Button className={'py-[14px] px-[20px]'}>
                                    <span className={'flex items-center gap-[10px]'}>
                                        <span>Смотреть по подписке</span>
                                        <img className={'ml-[15px] py-[4px]'} src={stop} alt=""/>
                                    </span>
                        </Button>
                        <Button className={'py-[14px] px-[20px]'}>
                                    <span className={'flex items-center gap-[10px]'}>
                                        <span>В избранное</span>
                                        <img className={'ml-[15px] py-[4px]'} src={fav} alt=""/>
                                    </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailePage;

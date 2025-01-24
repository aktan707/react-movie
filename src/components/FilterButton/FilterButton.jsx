import movieApi from "../../service/movieService.js";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const filterBtn = [
    {
        name: 'Новинки',
        method: movieApi.fetchNewMovie
    },
    {
        name: 'Популярное',
        method: movieApi.fetchPopularMovies
    },
    {
        name: 'Смотрят сейчас',
        method: movieApi.fetchMovieNowWatching
    },
    {
        name: 'Рекомендации',
        method: movieApi.fetchMovieNowWatching
    },
    {
        name: 'Топ 10',
        method: movieApi.fetchMovieTopRated
    },
    {
        name: 'Скоро на Cinemax',
        method: movieApi.fetchMovieUpComing
    },
];

const FilterButton = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeButton, setActiveButton] = useState(filterBtn[0].name);

    const handleButtonClick = (item) => {
        setActiveButton(item.name);
        setLoading(true);
        item.method()
            .then((res) => setMovies(res.results))
            .finally(() => setLoading(false));
    };

    return (
        <div className={'app-container pt-[150px]'}>
            <div className={'app-container flex gap-[70px] mb-[80px] pl-[75px] rounded-[10px] bg-black text-white'}>
                {filterBtn.map((item) => (
                    <button
                        onClick={() => handleButtonClick(item)}
                        className={`py-[22px] ${
                            activeButton === item.name ? 'text-white border-b-2 transition duration-300 border-[#EF4234]' : 'text-white'
                        }`}
                        key={item.name}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="mySwiper"
                    modules={[Autoplay, Navigation, Pagination]}
                >
                    {loading ? (
                        <h2>Loading...</h2>
                    ) : (
                        movies.map((film) => {
                            let imgUrl = "https://image.tmdb.org/t/p/original";
                            return (
                                <SwiperSlide key={film.id}>
                                    <div key={film.id} className={''}>
                                        <div className={'flex flex-col items-center justify-center'}>
                                            <img
                                                className={'w-[230px] h-[300px] rounded-[10px] my-[30px]'}
                                                src={imgUrl + film.poster_path}
                                                alt=""
                                            />
                                            <h3 className={'text-[20px] leading-[40px] mb-[20px] '}>{film.title}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default FilterButton;
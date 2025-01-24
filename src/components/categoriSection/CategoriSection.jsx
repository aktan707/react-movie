import {useEffect, useState} from 'react';
import movieService from "../../service/movieService.js";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const CategoriSection = () => {
    const [category, setCotegory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        movieService.fetchMovieGenreList()
            .then(({genres}) => {
                setCotegory(genres);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div>
            <div className={'app-container'}>
                <h3 className={'text-[24px] mb-[15px]'}>Смотрите фильмы, которые вам нравятся</h3>
                <p className={'w-[385px] mb-[60px]'}>На нашем сайте собрано огромное количество фильмов и сериалов на
                    любой вкус</p>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper"
                    >
                        {category.map(item => {
                            return <SwiperSlide key={item.id}>
                                <div className={'w-[310px] text-white flex items-center justify-center flex-col h-[170px] rounded-[10px] bg-[#1A1A1A]'}>
                                    <h3>{item.name}</h3>
                                    <p className={'text-[#EF4234]'}>{item.id} k+ фильмов</p>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default CategoriSection;

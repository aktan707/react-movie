import React from 'react';
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import Search from "../../components/search/Search.jsx";
import CategoriSection from "../../components/categoriSection/CategoriSection.jsx";
import FilterButton from "../../components/FilterButton/FilterButton.jsx";

const MyComponent = () => {
    return (
        <div>
            <HeroSection/>
            <Search/>
            <CategoriSection/>
            <FilterButton/>
        </div>
    );
};

export default MyComponent;

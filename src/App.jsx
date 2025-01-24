import Layout from "./layout/Layout.jsx";
import {Route, Routes} from "react-router";
import HomePage from "./pages/home-page/HomePage.jsx";
import MovieDetailePage from "./pages/movie-detail-page/MovieDetailePage.jsx";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={ <HomePage/> }/>
                    <Route path={"movie-detail/:movieId"} element={ <MovieDetailePage/> }/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;

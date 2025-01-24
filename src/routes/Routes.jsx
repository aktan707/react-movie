import Layout from "../layout/Layout.jsx";
import HomePage from "../pages/home-page/HomePage.jsx";
import MovieDetailePage from "../pages/movie-detail-page/MovieDetailePage.jsx";


export const menu = [
    {
        name: 'Главная',
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/movie-detail/:movieId",
                element: <MovieDetailePage/>
            },
            {
                path: "/auth",
                element: null
            },
            {
                path: "/profile",
                element: null
            }
        ]
    }
]


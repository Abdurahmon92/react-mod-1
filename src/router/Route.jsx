
import Game from '../navigationPage/Game';
import MainPage from '../mainPages/MainPages';
import 

export const routes=[
    {path:"/game",  component: Game, exact: true},
    {path:"/posts", component: MainPage, exact: true},
    {path:"/login", component: Login, exact: true}
       
]


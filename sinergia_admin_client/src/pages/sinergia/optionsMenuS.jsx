import UserIcon from "../../icons/UserIcon";
import ConfigIcon from "../../icons/ConfigIcon";
import StatisticsIcon from "../../icons/StatisticsIcon";
import BlogIcon from "../../icons/BlogIcon";

export const optionsMenu= [
    {
        id : 0,
        first_color : '#045297',
        second_color : '#C1D4E5',
        text : 'Usuarios',
        route : '/panel/sinergia/users',
        icon : <UserIcon color={'#045297'}/>
    },
    {
        id : 3,
        first_color : '#045297',
        second_color : '#C1D4E5',
        text : 'Articulos',
        route : '/panel/sinergia/articles',
        icon : <BlogIcon color={'#045297'}/>
    },
    {
        id : 1,
        first_color : '#045297',
        second_color : '#C1D4E5',
        text : 'Configuración',
        route : '/panel/sinergia/config',
        icon : <ConfigIcon color={'#045297'}/>
    }, 
    {
        id : 2,
        first_color : '#045297',
        second_color : '#C1D4E5',
        text : 'Estadísticas',
        route : '/panel/sinergia/users',
        icon : <StatisticsIcon color={'#045297'}/>
    },
]
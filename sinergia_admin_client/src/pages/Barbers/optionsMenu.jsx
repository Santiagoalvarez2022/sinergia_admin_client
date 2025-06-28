import UserIcon from '../../icons/UserIcon.jsx'
import ConfigIcon from '../../icons/ConfigIcon.jsx'
import StatisticsIcon from '../../icons/StatisticsIcon.jsx'

export const optionsMenu= [
    {
        id : 0,
        first_color : '#045297',
        second_color : '#C1D4E5',
        text : 'Usuarios',
        route : '/panel/barber/users',
        icon : <UserIcon color={'#045297'}/>
    },
    {
        id : 1,
        first_color : '#045297',
        second_color : '#C1D4E5',
        text : 'Configuración',
        route : '/panel/barber/users',
        icon : <ConfigIcon color={'#045297'}/>
    }, {
        id : 2,
        first_color : '#045297',
        second_color : '#C1D4E5',
        text : 'Estadísticas',
        route : '/panel/barber/users',
        icon : <StatisticsIcon color={'#045297'}/>
    },
]
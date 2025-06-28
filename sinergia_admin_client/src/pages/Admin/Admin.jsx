import Menu from '../sinergia/Components/Menu.jsx'
import Statistics from '../../components/Statistics/Statistics.jsx'
import ButtonSquare from '../../components/MenuOptionsSquare/ButtonSquare.jsx'
import { buttonsOptions } from './optionsButtons.jsx'
import MenuOptionsSquare from '../../components/MenuOptionsSquare/MenuOptionsSquare.jsx'


export default function Admin() {
  return (
    <div className='bg-bg h-[100vh] pt-4'>
        <MenuOptionsSquare arrayOptions={buttonsOptions}/>
    </div>
  )
}

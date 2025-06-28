import HeaderSinergia from './components/HeaderSinergia'
import FooterSinergia from './components/FooterSinergia'
import { Outlet } from 'react-router-dom'

export default function SinergiaLayout() {
  return (
    <div>
        <HeaderSinergia />
        <main>
          <Outlet />
        </main>
        <FooterSinergia />
    </div>
  )
}

import React from 'react'
import HeaderBarber from './components/HeaderBarber'
import FooterBaber from './components/FooterBaber'
import { Outlet } from 'react-router-dom'

export default function BarbersLayout() {
  return (
    <div>
        <HeaderBarber />
        <main>
          <Outlet />
        </main>
        <FooterBaber />
    </div>
  )
}

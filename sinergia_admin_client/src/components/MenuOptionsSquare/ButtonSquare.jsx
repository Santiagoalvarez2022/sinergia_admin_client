import { Link } from 'react-router-dom'

export default function ButtonSquare( {data}) {
  const {first_color, second_color, text, route, icon, bg_color } = data;

  return (
    <Link to={route} >
      <div className={ `shadow-md flex items-center bg-[${second_color}] border-[${first_color}] border-2 h-16  px-4 justify-center gap-2 rounded-md  bg-[${bg_color}]`}>
        <div className='h-4 w-4 '>{icon}</div>
        <p className={`text-xs md:text-lg  font-bold text-[${first_color}] `}>{text}</p>
      </div>
    </Link>
  )
}

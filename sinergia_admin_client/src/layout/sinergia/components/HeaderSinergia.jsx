import logo from '../../../assets/logos/logoPng.svg'

export default function HeaderSinergia() {
  const styleLogo = {
    backgroundImage : `url(${logo})`
  } 

  return (
    <div className='bg-principal/90 flex items-center p-4 w-full'>
      <div style={styleLogo} className={` bg-center bg-no-repeat bg-contain h-[4vh] w-[4vh] mr-2`} ></div>
      <div className='mr-4'>
          <span className='font-medium text-white'>Sinerg</span>
            <span className='text-[#1CFBA6]'>IA</span>
      </div>
    </div>)
}

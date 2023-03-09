import Carousel from '../../Components/Carousel'
import Nav from '../../Components/Nav'

export default function App() {
  document.body.style.backgroundColor = '#F6F4F0'
  return (
    <div className='w-full overflow-hidden md:px-20'>
      <Carousel />
      <Nav />
    </div>
  )
}

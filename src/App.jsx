import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket'

function App() {
 

  return (
    <>
      <Ticket ticket={[0, 5, 8]} />
      <Ticket ticket={[1,8,5,4]} />
      <Ticket ticket={[9,8,5,6,8]} />
     
    </>
  )
}

export default App

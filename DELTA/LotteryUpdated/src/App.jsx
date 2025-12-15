import './App.css'
import Lottery from './Lottery'
import {Sum} from "./helper"
function App() {
  return(
    <>
    <Lottery n={3} winningFunc={Sum}/>
    </>
  )
}
export default App

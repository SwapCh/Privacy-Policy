
import './App.css'
//import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

import PrivacyPolicyPage from './components/PrivacyPolicyPage'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Link to = "/InfoCard">button</Link>
      <Routes>
        <Route path="/InfoCard" element={<InfoCard imageUrl=""/>}></Route>
      </Routes> */} 

      <Header/> 
      <PrivacyPolicyPage />
      {/* <InfoCard imageUrl='https://previews.123rf.com/images/zdenkam/zdenkam1512/zdenkam151200274/49698508-casual-young-black-family-on-white-isolated-background.jpg'/>
      <UseInfoItem imageUrl="https://previews.123rf.com/images/zdenkam/zdenkam1512/zdenkam151200274/49698508-casual-young-black-family-on-white-isolated-background.jpg" bubbleImageUrl="https://previews.123rf.com/images/zdenkam/zdenkam1512/zdenkam151200274/49698508-casual-young-black-family-on-white-isolated-background.jpg" text="lorem10" isLarge={true} />
      <DataSecurityItem title="hello" description="lorem ipsum john doe" />  */}
    </div>

  )
}

export default App

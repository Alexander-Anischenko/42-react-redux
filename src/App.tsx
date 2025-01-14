import { BrowserRouter, /* Route, Routes */ } from "react-router-dom"
//import Layout from "./pages/UsersApp/Layout/Layout"
//import Home from "./pages/UsersApp/Home/Home"
//import Users from "./pages/UsersApp/Users/Users"
import HomeWork16 from "./homeworks/HomeWork16/HomeWork16"
//import Consultation08 from "./components/consultations/Consultation08/Consultation08"
//import Lesson16 from "./lessons/Lesson16/Lesson16"
//lessons
//homeworks

const App = () => {
  return (
    <BrowserRouter>
      {/* <Consultation08/> */}
      {/* <Lesson16/> */}
      {/* UserApp - P */}
      <HomeWork16/>
      {/* <Layout>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout> */}
    </BrowserRouter>
  )
}
export default App

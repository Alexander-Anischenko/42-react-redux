import { BrowserRouter, /* Route, Routes */ } from "react-router-dom"
//import Layout from "./pages/UsersApp/Layout/Layout"
//import Home from "./pages/UsersApp/Home/Home"
//import Users from "./pages/UsersApp/Users/Users"
//import HomeWork16 from "./homeworks/HomeWork16/HomeWork16"
//import Lesson17 from "./lessons/Lesson17/Lesson17"
import Lesson18 from "./lessons/Lesson18/Lesson18"
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
      {/* <HomeWork16/> */}
      {/* <Lesson17/> */}
      <Lesson18/>
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

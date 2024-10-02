import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListStudentComponent from './components/ListStudentComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { StudentComponent } from './components/StudentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
           <Route path='/' element= { <ListStudentComponent/>}></Route>
           <Route path='/students' element= {<ListStudentComponent/>}></Route>
           <Route path='/add-student' element= {<StudentComponent/>}></Route>
           <Route path='/edit-student/:id' element=  {<StudentComponent/>}></Route>
          </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App

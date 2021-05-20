import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Welcome from './components/Welcome'
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route exact path="/">
          <Welcome/>
        </Route>
        <Route path="/menu">
          <Menu/>
        </Route>
        <Route path="/reservations" >
          <Reservations/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App


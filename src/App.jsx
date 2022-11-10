import './App.css'
import MovieList from './components/MovieList'
import NavBar from './components/NavBar'
import { MovieContext } from './context/MovieContext'
import AddMovie from './components/AddMovie'

function App() {
  return (
    <MovieContext>
      <div className="App">
        <NavBar />
        <AddMovie />
        <MovieList />
      </div>
    </MovieContext>
  )
}

export default App

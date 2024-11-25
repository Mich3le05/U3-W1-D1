import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent customButton="BOTTONE" />
        <ImageComponent
          src="https://www.vistanet.it/cagliari/wp-content/uploads/sites/2/2019/10/Barbagianni-Lipu-770x480.jpg"
          alt="barbagianni"
        />
      </header>
    </div>
  )
}

export default App

import Routers from './Routes/Routers.jsx';
import { TranslationProvider } from "./Context/TranslationContext";

function App() {

  return (
    <>
    <TranslationProvider>
      <div className='font-Montserrat'>
      <div id="google_translate_element" style={{ display: "none" }}></div>
        <Routers />
      </div>
    </TranslationProvider>
  </>
  )
}

export default App

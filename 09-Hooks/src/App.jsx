import Button from './Button';
import { theme } from './contextAPI';
const App = () => {

  return (
    <div>
      <theme.Provider value={"blue"}>
        <Button/>
      </theme.Provider>
    </div>
  )
}

export default App

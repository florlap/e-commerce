import "./App.css";
import { Route, Routes} from 'react-router-dom'
import NavBar from "./Components/layout/NavBar";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout><NavBar/></Layout>}/>
      </Routes>
    </div>
  )
}

export default App;

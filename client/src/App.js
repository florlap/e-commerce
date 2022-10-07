import "./App.css";
import { Route, Routes} from 'react-router-dom'
import Layout from "./Components/layout/Layout";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
      </Routes>
    </div>
  )
}

export default App;

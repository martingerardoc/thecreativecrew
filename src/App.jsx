import Nav from "./components/Nav";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

function App(){
  return (

    <div className="min-h-screen flex flex-col">
      <Nav/>
      <MainContainer/>
      <Footer/>
    </div>
  )
}

export default App;
  import Home from "./Components/Home"
  import Count from "./Components/Count"
import ThemeProvider from "./context/ThemeProvider"
import Homie from "./Components/Homie"
import Datas from "./Components/Datas"
import NavBar from "./Components/NavBar"
  const App=()=>{
    return(
        <>
        <div>
            {/* <Home/> */}
            {/* <Count/> */}
            <ThemeProvider>
                <Homie/>
                <Datas/>
                <NavBar/>
            </ThemeProvider>
        </div>
        </>
    )
}
export default App
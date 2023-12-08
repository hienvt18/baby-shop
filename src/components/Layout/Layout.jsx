import Header from "../Header/Header"
import Routers from "../../router/Routers"
import Footer from "../Footer/Footer"


const Layout = () => {
  return (
    <>
      <Header/>
      <main>
        <Routers/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout
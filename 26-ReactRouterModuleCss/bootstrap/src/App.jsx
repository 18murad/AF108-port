import Contact from "./components/contact/Contact"
import Customer from "./components/customer/Customer"
import Features from "./components/features/Features"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Pay from "./components/pay/Pay"
import Present from "./components/present/Present"


const App = () => {
  return (
    <div>
      
      <Header/>
      <Present/>
     <Features/> 
     <Pay/>
     <Customer/>
     <Contact/>
     <Footer/>
     
    </div>
  )
}

export default App

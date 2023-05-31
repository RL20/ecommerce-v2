import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import HomeScreen from "./screens/HomeScreen";
// import ProductScreen from "./screens/ProductScreen";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
    // <Router>
    //   <Header />
    //   <main className="py-3">
    //     <Container>
    //       <Routes>
    //         <Route path="/" element={<HomeScreen />}></Route>
    //         <Route path="/product/:id" element={<ProductScreen />}></Route>
    //       </Routes>
    //     </Container>
    //   </main>
    //   <Footer />
    // </Router>
  );
}

export default App;
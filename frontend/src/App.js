import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Wellcom to my Store</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

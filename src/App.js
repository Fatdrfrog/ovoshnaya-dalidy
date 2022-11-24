import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "50px 1fr 50px",
        height: "100vh",
      }}
    >
      <AppHeader />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;

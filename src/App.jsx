import "./App.css";
import { MainPage } from "./pages/MainPage";
import { MarketPage } from "./pages/MarketPage";
import { Footer } from "./modules/Footer";
import { Header } from "./modules/Header";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainPage /> */}
      <MarketPage />
      <Footer />
    </div>
  );
}

export default App;

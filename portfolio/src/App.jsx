import styles from "./App.module.scss";
import NavBar from "./components/navBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import HelloPage from "./pages/hello";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HelloPage />} />
        <Route path="/_hello" element={<HelloPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

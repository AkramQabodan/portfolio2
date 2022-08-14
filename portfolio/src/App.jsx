import styles from "./App.module.scss";
import NavBar from "./components/navBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import styles from "./App.module.scss";
import NavBar from "./components/navBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import HelloPage from "./pages/hello";
import AboutMePage from "./pages/aboutMe";
import Hobby from "./pages/aboutMe/hobby";
import Personal from "./pages/aboutMe/personal";
import Professional from "./pages/aboutMe/professional";
import ProjectsPage from "./pages/projects";
import ContactMePage from "./pages/contactMe";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HelloPage />} />
        <Route path="/_hello" element={<HelloPage />} />
        <Route path="/_projects" element={<ProjectsPage />} />
        <Route path="/_contact-me" element={<ContactMePage />} />
        <Route path="/_about-me" element={<AboutMePage />}>
          <Route path="hobby" element={<Hobby />} />
          <Route path="personal" element={<Personal />} />
          <Route path="professional" element={<Professional />} />
        </Route>
        <Route path="*" element={<HelloPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

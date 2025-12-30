import { Route,Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./login";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import AjouterMembre from "./Membres/AjouterMembre";
import AjouterMembreEquipe from "./EquipeBureau/AjouterMembreEquipe";
import AjouterEvenement from "./Events/AjouterEvenement";
import Equipe from "./EquipeBureau/Equipe";
import AjouterTransaction from "./Trasactions/AjouterTransaction";
import ListeTransaction from "./Trasactions/ListeTransaction";
import ModifierTransaction from "./Trasactions/ModifierTransaction";
import Evenement from "./Events/Evenement";
import ModifierEvent from "./Events/ModifierEvent";
import Parametre from "./Parametre";
import ModifierMembre from "./Membres/ModifierMembre";
import ModifierMembreEquipe from "./EquipeBureau/ModifierMembreEquipe";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/ajouterMembre" element={<AjouterMembre />} />
      <Route path="/modifierMembre/:id" element={<ModifierMembre />} />

      <Route path="/ajouterMembreEquipe" element={<AjouterMembreEquipe />} />
      <Route path="/modifierMembreEquipe/:id" element={<ModifierMembreEquipe />} />
      <Route path="/equipe" element={<Equipe />} />
      
      <Route path="/parametre" element={<Parametre />} />

      <Route path="/ajouteEvent" element={<AjouterEvenement />} />
      <Route path="/modifierEvent/:id" element={<ModifierEvent />} />
      <Route path="/evenement" element= {<Evenement/>}/>


      <Route path="/ajouterTransaction" element={<AjouterTransaction />} />
      <Route path="/modifierTransaction/:id" element={<ModifierTransaction />} />
      <Route path="/ListeTransaction" element={<ListeTransaction />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      
    </Routes>
    </>  
  );
}

export default App;

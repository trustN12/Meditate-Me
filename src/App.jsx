import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import ProtectedRoute from "./Components/Main/ProtectedRoute";
import HomePage from "./Pages/HomePage";
import MedPage1 from "./Pages/MedPage1";
import MedPage2 from "./Pages/MedPage2";
import MedPage3 from "./Pages/MedPage3";
import AppLayout from "./Components/Main/AppLayout"; // Import AppLayout
import MedPage4 from "./Pages/MedPage4";
import MedPage5 from "./Pages/MedPage5";
import MedPage6 from "./Pages/MedPage6";
import MedPage7 from "./Pages/MedPage7";
import MedPage8 from "./Pages/MedPage8";
import MedPage9 from "./Pages/MedPage9";
import MedPage10 from "./Pages/MedPage10";
import MedPage11 from "./Pages/MedPage11";
import BuyMeACoffee from "./Pages/BuyMeACoffee";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<AppLayout />}> {/* Wrap your routes in AppLayout */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shiva-meditation"
            element={
              <ProtectedRoute>
                <MedPage1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/krishna-meditation"
            element={
              <ProtectedRoute>
                <MedPage2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buddha-meditation"
            element={
              <ProtectedRoute>
                <MedPage3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sun-meditation"
            element={
              <ProtectedRoute>
                <MedPage4 />
              </ProtectedRoute>
            }
          />
           <Route
            path="/formless_shiva-meditation"
            element={
              <ProtectedRoute>
                <MedPage5 />
              </ProtectedRoute>
            }
          />
           <Route
            path="/cosmic-creation"
            element={
              <ProtectedRoute>
                <MedPage6 />
              </ProtectedRoute>
            }
          />
           <Route
            path="/ramaskandam-hanumantham"
            element={
              <ProtectedRoute>
                <MedPage7 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/7-sacred chants"
            element={
              <ProtectedRoute>
                <MedPage8 />
              </ProtectedRoute>
            }
          />
           <Route
            path="/guiding-lights"
            element={
              <ProtectedRoute>
                <MedPage9 />
              </ProtectedRoute>
            }
          />
           <Route
            path="/3:30am-brahma-muhurta-mantra"
            element={
              <ProtectedRoute>
                <MedPage10 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ludovico-einaudi-piano-10"
            element={
              <ProtectedRoute>
                <MedPage11 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buy-me-a-coffee-demo"
            element={
              <ProtectedRoute>
                <BuyMeACoffee />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

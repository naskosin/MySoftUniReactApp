import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import About from "./components/About/About";
import LoggedGuardedRoute from "./components/Common/LoggedGuardedRoute";
import BiggestFishes from "./components/BiggestFishes/BiggestFishes";
import GuardedRoute from "./components/Common/GuardedRoutes";
import MyBaits from "./components/MyBaits/MyBaits";
import  Home  from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import PostBait from "./components/PostBait/PostBait";
import AllBaits from "./components/Gallery/AllBaits";
import Contacts from "./components/Contacts/Contacts";
import Edit from "./components/Edit/Edit";
import Details from "./components/Details/Details";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthProvider } from "./contexts/AuthContext";
import { NotifyProvider } from "./contexts/NotifyContext";
import { Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <AuthProvider>
      <NotifyProvider>
        <div>
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/allbaits" element={<AllBaits />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/biggestfishes" element={<BiggestFishes />} />

              <Route element={<LoggedGuardedRoute />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>

              <Route element={<GuardedRoute />}>
                <Route path="/postbait" element={<PostBait />} />
                <Route path="/gallery/:baitId" element={<Details />} />
                <Route path="/mybaits" element={<MyBaits />} />
                <Route path="/gallery/edit/:baitId" element={<Edit />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </NotifyProvider>
    </AuthProvider>
  );
}

export default App;

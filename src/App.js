import { Navigate, Route, Routes } from "react-router-dom";
import UserAuth from "./component/auth/UserAuth";
import Footer from "./component/footer/Footer";
import CoursePage from "./page/CoursePage";
import FaqPage from "./page/FaqPage";
import HomePage from "./page/HomePage";
import InstactorPages from "./page/InstactorPages";

import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";



function App() {

  return (
    <div >
      <Routes>
        <Route path="/" element={<Navigate to='/home' />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/course" element={<CoursePage />}></Route>
        <Route path="/faq" element={<FaqPage />}></Route>
        <Route path="/instactor" element={<InstactorPages></InstactorPages>}></Route>
        <Route path="/sign-in" element={<UserAuth><SignInPage /></UserAuth>}></Route>
        <Route path="/sign-up" element={<UserAuth><SignUpPage /></UserAuth>}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;

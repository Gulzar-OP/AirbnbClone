import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import AuthContext from './Context/AuthContext.jsx'
// import userDataContext from './Context/UserContext.jsx'
// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <AuthContext>
//       <userDataContext>
//         <App />
//       </userDataContext>
//     </AuthContext>
//   </BrowserRouter>,
// )
import AuthContextProvider from "./Context/AuthContext.jsx";
import UserContextProvider from "./Context/UserContext.jsx";
import ListingContextProvider from "./Context/ListingContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ListingContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ListingContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
)

import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context";
import { Navigation } from "./routes";
//import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider className="App">
      <Navigation />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthProvider>
  );
}

export default App;

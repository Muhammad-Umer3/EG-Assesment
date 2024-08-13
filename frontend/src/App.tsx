import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
      <ToastContainer />
    </ReduxProvider>
  );
}

export default App;

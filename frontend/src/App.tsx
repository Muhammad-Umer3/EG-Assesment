import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ReduxProvider store={store}>
      <AppRoutes />
      <ToastContainer />
    </ReduxProvider>
  );
}

export default App;

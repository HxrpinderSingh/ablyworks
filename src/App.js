import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { LocaleProvider } from "@/contexts/LocaleContext";
import Landing from "@/pages/Landing";

function App() {
  return (
    <div className="App">
      <LocaleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          richColors
          position="top-right"
          toastOptions={{
            style: { fontFamily: "Manrope, sans-serif" },
          }}
        />
      </LocaleProvider>
    </div>
  );
}

export default App;

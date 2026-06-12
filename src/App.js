import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { LocaleProvider } from "@/contexts/LocaleContext";
import Landing from "@/pages/Landing";
import Compare from "@/pages/Compare";

function App() {
  return (
    <div className="App">
      <LocaleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/compare" element={<Compare />} />
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

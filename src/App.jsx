import { ArrowLeft } from "lucide-react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function NotFound() {
  return (
    <main className="min-h-[80vh] bg-cinema px-[8%] pt-[210px]">
      <div className="text-[10px] font-bold uppercase tracking-[.18em] text-accent">
        404 / Lost in the archive
      </div>
      <h1 className="my-5 text-[clamp(48px,8vw,88px)] font-bold leading-none tracking-[-.06em]">
        This page didn't
        <br />
        <em className="font-display font-semibold not-italic text-accent">
          make the cut.
        </em>
      </h1>
      <p className="mb-7 text-muted">
        The story you're looking for isn't in our library.
      </p>
      <Link
        className="inline-flex items-center gap-2 rounded bg-accent px-5 py-3.5 text-sm font-bold text-white"
        to="/"
      >
        <ArrowLeft size={17} /> Back home
      </Link>
    </main>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <>
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <NotFound />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

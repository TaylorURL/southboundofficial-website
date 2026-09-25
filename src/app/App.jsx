import { Route, Routes } from 'react-router-dom';
import Header from '@components/layout/Header.jsx';
import Footer from '@components/layout/Footer.jsx';
import Home from '@views/Home.jsx';
import NotFound from '@views/NotFound.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

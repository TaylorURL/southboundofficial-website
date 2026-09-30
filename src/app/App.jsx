import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '@components/layout/Header.jsx';
import Footer from '@components/layout/Footer.jsx';
import Home from '@views/Home.jsx';
import NotFound from '@views/NotFound.jsx';
import Rules from '@views/Rules.jsx';
import Privacy from '@views/Privacy.jsx';
import Terms from '@views/Terms.jsx';
import Contact from '@views/Contact.jsx';
import { useClickEffect } from '@app/hooks/useClickEffect.js';

// A new page opens at its top, or at the section its link names.
function ScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  useClickEffect();

  return (
    <>
      <ScrollOnNavigate />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

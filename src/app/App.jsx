import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '@components/layout/Header.jsx';
import Footer from '@components/layout/Footer.jsx';
import Home from '@views/Home.jsx';
import ShopPage from '@views/Shop.jsx';
import Category from '@views/Category.jsx';
import Giveaway from '@views/Giveaway.jsx';
import HowItWorks from '@views/HowItWorks.jsx';
import Winners from '@views/Winners.jsx';
import Faq from '@views/Faq.jsx';
import NotFound from '@views/NotFound.jsx';
import Rules from '@views/Rules.jsx';
import Privacy from '@views/Privacy.jsx';
import Terms from '@views/Terms.jsx';
import Contact from '@views/Contact.jsx';
import { useClickEffect } from '@app/hooks/useClickEffect.js';

// A new page opens at its top, or at the section its link names. It opens
// there at once: the page's smooth scrolling would otherwise slide the new page
// up from wherever the last one was left.
function ScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
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
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<Category />} />
          <Route path="/giveaway" element={<Giveaway />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/faq" element={<Faq />} />
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

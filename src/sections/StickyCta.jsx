import { useEffect, useState } from 'react';
import { CHECKOUT_URL } from '../components/Shared.jsx';

export default function StickyCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="sticky-cta">
      <div className="sticky-cta-info">
        <strong>Social Ads Freak</strong>
        <span><s>$197</s> Today $47</span>
      </div>
      <a className="cta-button" href={CHECKOUT_URL}>
        Get Social Ads Freak Now
      </a>
    </div>
  );
}

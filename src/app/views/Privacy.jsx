import { Link } from 'react-router-dom';
import { BRAND } from '@constants/brand.js';
import { SPONSOR } from '@constants/rules.js';
import { Clause, Fill, LegalPage } from '@components/ui/Legal.jsx';
import { usePageTitle } from '@app/hooks/usePageTitle.js';

export default function Privacy() {
  usePageTitle('Privacy | SouthBound Truck Merch');

  return (
    <LegalPage title="Privacy" updated="2026-09-30">
      <Clause title="What This Site Keeps">
        <p>
          When you visit, the site records which pages you open and how long each one stays on
          screen.
        </p>
        <p>
          It also records the page that sent you here, your browser language and your screen size.
        </p>
        <p>
          Visits are tied together by a random ID stored in your browser, not a cookie. The ID names
          nobody.
        </p>
        <p>The ID lasts until you clear your site data.</p>
        <p>
          If a page breaks, the site sends the error, the page address and your browser version so
          it can be fixed.
        </p>
        <p>The error report never includes anything you type.</p>
      </Clause>

      <Clause title="Giveaway Entries">
        <p>
          SouthBound uses the name and contact details on an entry to run the giveaway and to reach
          the winner.
        </p>
        <p>
          How that works is in the{' '}
          <Link
            to="/rules"
            className="tap underline underline-offset-2 hover:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
          >
            Official Rules
          </Link>
          .
        </p>
      </Clause>

      <Clause title="Who Sees It">
        <p>
          {BRAND.name} and the studio that builds and hosts this site. None of it is sold, and none
          of it is used for ads.
        </p>
      </Clause>

      <Clause title="Links Out">
        <p>
          The Instagram links open Instagram, which has its own privacy policy. Nothing here is
          shared with Instagram when you visit.
        </p>
      </Clause>

      <Clause title="Questions">
        <p>
          Message{' '}
          <a
            href={BRAND.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="tap underline underline-offset-2 hover:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
          >
            @{BRAND.instagram.handle}
          </a>{' '}
          on Instagram or email <Fill value={SPONSOR.email} missing="Contact email" />.
        </p>
      </Clause>
    </LegalPage>
  );
}

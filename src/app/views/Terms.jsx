import { Link } from 'react-router-dom';
import { BRAND } from '@constants/brand.js';
import { SPONSOR } from '@constants/rules.js';
import { Clause, LegalPage } from '@components/ui/Legal.jsx';
import { usePageTitle } from '@app/hooks/usePageTitle.js';

export default function Terms() {
  usePageTitle('Terms | SouthBound Truck Merch');

  return (
    <LegalPage title="Terms" updated="2026-09-30">
      <Clause title="Using This Site">
        <p>
          By using {BRAND.url.replace(/^https?:\/\//, '')} you agree to these terms. If you do not
          agree, please do not use the site.
        </p>
      </Clause>

      <Clause title="Giveaways">
        <p>
          Every giveaway runs under its{' '}
          <Link
            to="/rules"
            className="tap underline underline-offset-2 hover:text-bone-50 cursor-pointer active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500"
          >
            Official Rules
          </Link>
          . Where these terms and the rules differ, the rules win.
        </p>
      </Clause>

      <Clause title="Orders">
        <p>
          Products marked Drops Soon are not for sale yet. Once a product goes on sale, you see its
          price, shipping and returns before you pay.
        </p>
      </Clause>

      <Clause title="The Brand">
        <p>
          The SouthBound name, the SB mark and everything else on this site belong to {BRAND.name}.
          Do not copy or sell them without permission.
        </p>
      </Clause>

      <Clause title="No Promises">
        <p>
          The site is provided as it is. {BRAND.name} is not liable for losses that come from using
          it, as far as the law allows.
        </p>
      </Clause>

      <Clause title="Law">
        <p>These terms are governed by the law of the State of {SPONSOR.state}.</p>
      </Clause>
    </LegalPage>
  );
}

import { BRAND } from '@constants/brand.js';
import { GIVEAWAY } from '@constants/giveaway.js';
import { SPONSOR, RULES_UPDATED } from '@constants/rules.js';
import { Clause as Rule, Fill, LegalPage } from '@components/ui/Legal.jsx';
import { usePageTitle } from '@app/hooks/usePageTitle.js';

function when(iso) {
  const time = Date.parse(iso);
  if (Number.isNaN(time)) return '';
  return new Date(time).toLocaleString('en-US', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'America/Chicago',
    timeZoneName: 'short',
  });
}

export default function Rules() {
  usePageTitle('Official Rules | SouthBound Giveaways');

  const sponsor = <Fill value={SPONSOR.legalName} missing="Sponsor's legal business name" />;
  const address = <Fill value={SPONSOR.mailingAddress} missing="Sponsor's mailing address" />;
  const name = GIVEAWAY.number
    ? `SouthBound Giveaway No. ${GIVEAWAY.number}`
    : 'SouthBound Giveaway';

  return (
    <LegalPage title="Official Rules" updated={RULES_UPDATED}>
      <div className="border-2 border-signal-500 bg-signal-500/10 p-6 sm:p-8">
        <p className="font-semibold uppercase leading-relaxed">
          No purchase or payment of any kind is necessary to enter or win this sweepstakes.
        </p>
        <p className="mt-2 font-semibold uppercase leading-relaxed">
          A purchase or payment will not increase your chances of winning. Void where prohibited.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-bone-100">
          This sweepstakes is not sponsored, endorsed or administered by, or associated with,
          Instagram, Meta, TikTok, YouTube, X or any other social media platform.
        </p>
      </div>

      <div className="mt-10">
        <Rule title="The Sweepstakes">
          <p>
            The {name} (the “Sweepstakes”) is open only to legal residents of the United States.
          </p>
          <p>It is governed by United States law and the law of the State of {SPONSOR.state}.</p>
          <p>
            Do not enter if you are not eligible under these Official Rules at the time you enter.
          </p>
        </Rule>

        <Rule title="Sponsor">
          <p>
            The Sweepstakes is sponsored by {sponsor}, doing business as {BRAND.name}, {address}{' '}
            (the “Sponsor”).
          </p>
        </Rule>

        <Rule title="Eligibility">
          <p>Open to legal residents of the 50 United States and the District of Columbia.</p>
          <p>
            Entrants must be at least 18 years old at the time of entry, or the age of majority
            where they live if that is older.
          </p>
          <p>
            Employees of the Sponsor, and members of their immediate families and households, are
            not eligible.
          </p>
        </Rule>

        <Rule title="Entry Period">
          <p>
            The Sweepstakes starts at{' '}
            <Fill value={when(GIVEAWAY.startsAt)} missing="Start date and time" /> and ends at{' '}
            <Fill value={when(GIVEAWAY.endsAt)} missing="End date and time" /> (the “Entry Period”).
            The Sponsor’s clock is the official timekeeper.
          </p>
        </Rule>

        <Rule title="How to Enter">
          <p>There are two ways to enter, and both have the same chance of winning per entry.</p>
          <p>
            <strong className="text-bone-50">With an order.</strong> Each order placed on{' '}
            {BRAND.url.replace(/^https?:\/\//, '')} during the Entry Period earns{' '}
            <Fill value={GIVEAWAY.entriesPerOrder} missing="Number of entries" /> entries.
          </p>
          <p>
            <strong className="text-bone-50">Free, by mail.</strong> Hand print your full name,
            mailing address, email address, phone number and date of birth on a 3 by 5 inch card.
          </p>
          <p>
            Mail it in an envelope with enough postage to {sponsor}, Attn: SouthBound Giveaway,{' '}
            {address}.
          </p>
          <p>
            Each card earns{' '}
            <Fill value={GIVEAWAY.entriesPerFreeEntry} missing="Number of entries" /> entries. One
            card per envelope.
          </p>
          <p>
            Cards must be received by the end of the Entry Period. Mechanically reproduced,
            illegible or incomplete cards are void.
          </p>
          <p>
            Entries made by script, bot or any automated means are void. The Sponsor is not
            responsible for lost, late, misdirected or damaged mail or orders.
          </p>
        </Rule>

        <Rule title="Prize">
          <p>
            One winner receives <Fill value={GIVEAWAY.prize} missing="The prize" />, with an
            approximate retail value of $
            <Fill value={GIVEAWAY.prizeValue} missing="Retail value" />.
          </p>
          <p>The winner may not substitute, transfer or take cash for the prize.</p>
          <p>
            If the stated prize becomes unavailable, the Sponsor may substitute a prize of equal or
            greater value.
          </p>
          <p>
            The winner is responsible for all taxes, fees and costs not stated here, including
            title, registration and delivery where they apply.
          </p>
          <p>The Sponsor will issue an IRS Form 1099 where the law requires one.</p>
        </Rule>

        <Rule title="Odds">
          <p>
            The odds of winning depend on the total number of eligible entries received during the
            Entry Period.
          </p>
        </Rule>

        <Rule title="Winner Selection and Notification">
          <p>
            The winner is drawn at random from all eligible entries within seven days after the
            Entry Period ends.
          </p>
          <p>
            The potential winner is contacted by the email or phone number given with the entry and
            must respond within 72 hours.
          </p>
          <p>
            Before any award, the potential winner may have to sign an affidavit of eligibility and
            a liability and publicity release, and show photo ID.
          </p>
          <p>
            If the potential winner does not respond in time, is ineligible or does not comply with
            these rules, an alternate winner may be drawn.
          </p>
        </Rule>

        <Rule title="Publicity">
          <p>
            Except where prohibited, accepting the prize lets the Sponsor announce the winner here
            and on its social media with their name, city, state and likeness.
          </p>
          <p>No further payment is owed for that use.</p>
        </Rule>

        <Rule title="General Conditions">
          <p>
            By entering, you agree to these Official Rules and to the Sponsor’s decisions, which are
            final.
          </p>
          <p>
            The Sponsor may disqualify anyone who tampers with the entry process or breaks these
            rules.
          </p>
          <p>
            The Sponsor may cancel, change or suspend the Sweepstakes if fraud, a technical failure
            or anything else beyond its control affects its fairness.
          </p>
          <p>
            If it is cancelled, the prize may be awarded by random drawing from the eligible entries
            received before the cancellation.
          </p>
          <p>The Sponsor and its owners, employees and agents are the “Released Parties.”</p>
          <p>
            By entering, you release them from liability for any injury, loss or damage arising from
            taking part or from receiving or using the prize.
          </p>
        </Rule>

        <Rule title="Privacy">
          <p>
            Information given with an entry is used to run the Sweepstakes and to contact the
            winner. It is not sold.
          </p>
        </Rule>

        <Rule title="Winner’s Name">
          <p>The winner is posted on this site and on Instagram at @{BRAND.instagram.handle}.</p>
          <p>
            For the winner’s name by mail, send a self-addressed stamped envelope to {sponsor},
            Attn: SouthBound Winner, {address}.
          </p>
          <p>Send it within 30 days after the Entry Period ends.</p>
          <p>
            Questions: <Fill value={SPONSOR.email} missing="Sponsor's contact email" />.
          </p>
        </Rule>
      </div>
    </LegalPage>
  );
}

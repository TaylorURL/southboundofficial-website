// A drawing of the thing a block is about. Every plate shares one 160 grid and
// one handful of inks, and carries no ground of its own, so it sits on whatever
// card or tile draws it.
//
// A plate is drawn into the page, not fetched. Each one is a kilobyte of line
// art on a page that already costs more than that in markup, so shipping it
// inline is cheaper than four requests - and it removes the only way a plate
// could ever fail to appear. As four separate files they were the only images
// below the first screen the home page asked for while it parsed: the brand
// marks down there are lazy, so a reader who opened the page and left again
// inside the first moment cancelled the four plate requests and nothing else.
// Gecko fires an image's error event on a load it cancelled exactly as on one
// it could not fetch, which is why that departure arrived as four broken
// drawings on four paths that were serving perfectly. Nothing here is
// requested now, so there is nothing left to cancel, and the drawing is on
// screen the moment its section is.
const PLATES = {
  tee: (
    <>
      <path d="M52 30L24 46L36 72L52 65Z" fill="#e9e7e2" stroke="#0a0a0a" strokeWidth="3" />
      <path d="M108 30L136 46L124 72L108 65Z" fill="#b9b6ae" stroke="#0a0a0a" strokeWidth="3" />
      <path
        d="M52 30C62 38 98 38 108 30C109 44 110 56 110 66V134C90 138 70 138 50 134V66C50 56 51 44 52 30Z"
        fill="#f6f5f2"
        stroke="#0a0a0a"
        strokeWidth="3"
      />
      <path
        d="M96 38C100 36 104 34 108 30C109 44 110 56 110 66V134C104 135 100 136 96 136Z"
        fill="#e9e7e2"
      />
      <path d="M64 32C70 37 90 37 96 32C90 35 70 35 64 32Z" fill="#858278" />
      <path
        d="M58 30C64 48 96 48 102 30C94 40 66 40 58 30Z"
        fill="#b9b6ae"
        stroke="#0a0a0a"
        strokeWidth="2"
      />
      <path d="M33 66L46 60" stroke="#858278" strokeWidth="2" />
      <path d="M127 66L114 60" stroke="#858278" strokeWidth="2" />
      <path d="M64 64H96L92 84H60Z" fill="#2b2b2b" />
      <path d="M68 80L76 68" stroke="#f6f5f2" strokeWidth="3" />
      <path d="M78 80L86 68" stroke="#f6f5f2" strokeWidth="3" />
      <path d="M70 98C72 110 70 120 68 130" stroke="#b9b6ae" strokeWidth="1.5" />
      <path d="M52 127C70 131 90 131 108 127" stroke="#858278" strokeWidth="2" />
    </>
  ),
  hoodie: (
    <>
      <path d="M50 54L24 112L40 118L50 92Z" fill="#b9b6ae" stroke="#0a0a0a" strokeWidth="3" />
      <path d="M110 54L136 112L120 118L110 92Z" fill="#858278" stroke="#0a0a0a" strokeWidth="3" />
      <path
        d="M46 52C46 45 55 41 63 39C70 47 90 47 97 39C105 41 114 45 114 52L110 60V136C90 140 70 140 50 136V60Z"
        fill="#b9b6ae"
        stroke="#0a0a0a"
        strokeWidth="3"
      />
      <path d="M98 44C106 44 112 48 112 54L110 60V137C106 138 102 138 98 138Z" fill="#858278" />
      <path
        d="M60 41C57 18 103 18 100 41C94 53 66 53 60 41Z"
        fill="#b9b6ae"
        stroke="#0a0a0a"
        strokeWidth="3"
      />
      <path d="M90 22C98 26 101 33 100 41C97 46 94 48 90 49Z" fill="#858278" />
      <path d="M67 40C67 28 93 28 93 40C89 46 71 46 67 40Z" fill="#2b2b2b" />
      <path d="M74 47L72 68" stroke="#2b2b2b" strokeWidth="2.5" />
      <path d="M86 47L88 68" stroke="#2b2b2b" strokeWidth="2.5" />
      <circle cx="72" cy="70" r="2.5" fill="#f6f5f2" />
      <circle cx="88" cy="70" r="2.5" fill="#f6f5f2" />
      <path d="M62 104H98L104 124H56Z" fill="#858278" stroke="#2b2b2b" strokeWidth="2.5" />
      <path d="M28 106L42 112M132 106L118 112" stroke="#858278" strokeWidth="2" />
      <path d="M52 130C70 134 90 134 108 130" stroke="#858278" strokeWidth="2" />
      <path d="M64 82H96L94 92H62Z" fill="#2b2b2b" />
    </>
  ),
  cap: (
    <>
      <path
        d="M34 98C34 58 58 42 82 42C108 42 128 58 128 98Z"
        fill="#f6f5f2"
        stroke="#0a0a0a"
        strokeWidth="3"
      />
      <path d="M96 46C114 54 128 70 128 98H96C96 78 92 60 82 42Z" fill="#e9e7e2" />
      <path d="M110 58C118 68 124 82 124 98H112C112 84 110 70 106 58Z" fill="#b9b6ae" />
      <path d="M82 42C74 58 70 78 70 98" stroke="#858278" strokeWidth="2" />
      <path d="M82 42C92 58 96 78 96 98" stroke="#858278" strokeWidth="2" />
      <circle cx="58" cy="60" r="1.8" fill="#858278" />
      <circle cx="108" cy="62" r="1.8" fill="#858278" />
      <path
        d="M28 97C60 91 110 93 146 105C150 113 140 119 128 115C100 107 60 105 30 109C22 109 20 99 28 97Z"
        fill="#2b2b2b"
        stroke="#0a0a0a"
        strokeWidth="3"
      />
      <path d="M34 104C62 100 104 102 136 112" stroke="#858278" strokeWidth="1.5" />
      <path
        d="M40 100C64 97 104 98 140 108C136 102 104 94 60 94C48 95 42 97 40 100Z"
        fill="#141414"
      />
      <path d="M44 66H74L70 86H40Z" fill="#2b2b2b" />
      <path d="M48 82L56 70" stroke="#f6f5f2" strokeWidth="3" />
      <path d="M58 82L66 70" stroke="#f6f5f2" strokeWidth="3" />
      <circle cx="82" cy="42" r="4" fill="#2b2b2b" stroke="#0a0a0a" strokeWidth="2" />
    </>
  ),
  decal: (
    <>
      <path
        d="M34 66C34 46 50 38 68 42L122 50C138 52 144 66 140 82L132 118C128 134 114 138 100 134L46 120C32 116 28 102 32 88Z"
        fill="#141414"
      />
      <path
        d="M30 60C30 40 46 32 64 36L118 44C134 46 140 60 136 76L128 112C124 128 110 132 96 128L42 114C28 110 24 96 28 82Z"
        fill="#f6f5f2"
        stroke="#0a0a0a"
        strokeWidth="3"
      />
      <path
        d="M118 44C134 46 140 60 136 76L128 112C126 120 121 125 115 127L120 60C120 52 120 47 118 44Z"
        fill="#e9e7e2"
      />
      <path d="M46 62L124 72L116 104L38 94Z" fill="#2b2b2b" />
      <path d="M96 70L124 72L116 104L90 100Z" fill="#141414" />
      <path d="M56 90L64 70" stroke="#f6f5f2" strokeWidth="4" />
      <path d="M70 92L78 72" stroke="#f6f5f2" strokeWidth="4" />
      <path d="M84 94L92 74" stroke="#f6f5f2" strokeWidth="4" />
      <path d="M100 86H112" stroke="#b9b6ae" strokeWidth="3" />
      <path d="M44 54L60 50" stroke="#b9b6ae" strokeWidth="2" />
      <circle cx="40" cy="104" r="2" fill="#858278" />
      <path
        d="M110 126C116 118 124 116 131 112C128 124 121 130 110 126Z"
        fill="#b9b6ae"
        stroke="#0a0a0a"
        strokeWidth="2"
      />
      <path d="M114 124C118 120 122 118 127 116" stroke="#858278" strokeWidth="1.5" />
    </>
  ),
};

export default function Plate({ name, className = '' }) {
  const drawing = PLATES[name];
  if (!drawing) return null;
  return (
    <svg
      viewBox="0 0 160 160"
      width="160"
      height="160"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={`h-auto object-contain ${className}`}
    >
      {drawing}
    </svg>
  );
}

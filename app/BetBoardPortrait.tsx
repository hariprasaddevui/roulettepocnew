import React from 'react';
import BetBoardPortraitSrc from 'public\Images\BetBoardPortrait.svg';

export default function BetBoardPortrait({ className }: { className: string }) {
  return <div className={className} style={{display:"flex"}}>
    <img src="/Images/BetBoardPortrait.svg" alt="Bet Board Portrait" />
  </div>;
}

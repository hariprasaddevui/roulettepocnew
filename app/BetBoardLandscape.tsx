import React from 'react';
// import BetBoardLandscapeSrc from './public/Images/BetboardLandscape.svg';

type Props = {
    className?: string;
};

export default function BetBoardLandscape({ className }: Props) {
    return (
        <div className={className} style={{display:'flex'}}>
            <img src="/Images/BetboardLandscape.svg" alt="BetBoard Landscape" />
        </div>
    );
}

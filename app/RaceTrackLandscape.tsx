import React from 'react';
import LandscapeReceTrackSrc from 'public\Images\LandscapeReceTrack.svg'

type Props = {
    className?: string;
};

export default function RaceTrackLandscape({ className }: Props) {
    return (
        <div className={className} style={{display:'flex'}}>
        <img src="/Images/LandscapeReceTrack.svg" alt="Race Track Landscape" />
     
        </div>
    );
}

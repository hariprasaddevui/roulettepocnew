import React from 'react';

export default function Guidelines() {
    const onClose = () => {
        alert("Close button clicked!");
        // You can replace this with custom logic like closing a modal or updating state
    };

    return (
        <div>
            <div className="data">
                <div className="header">
                    <h1>
                        Roulette UI review &nbsp;&nbsp;&nbsp;
                        <small onClick={onClose} style={{ cursor: "pointer" }}>(PREVIEW)</small>
                    </h1>
                    <div>
                        <h4>
                            <small onClick={onClose} style={{ cursor: "pointer" }}>&#x2715;</small>
                        </h4>
                    </div>
                </div>

                <hr />

                <div className="dataBody">
                    <h2>Game UI elements (Racetrack + BetBoard + Widget/Statistic window)</h2>
                    <p>
                        Considering 1512x851 as a base screen<br />
                        Base components (Betboard, Racetrack, Stats) will scale up and down proportionally while browser resizing
                    </p>

                    <h2>Desktop Breakpoints</h2>
                    <h3>1512x851 - Base screen</h3>
                    <p>
                        On base screen Game UI components scale factor will be <b>1</b>, transform: scale(1); Gap=18px
                    </p>
                    <img src="/Images/1512GameUI.png" alt="1512 UI" width="50%" />

                    <h3>1800x1013</h3>
                    <p>
                        Game UI scale factor: <b>1.19452</b>, transform: scale(1.19452); Gap=21.5px
                    </p>
                    <img src="/Images/1800GameUI.png" alt="1800 UI" width="50%" />

                    <h3>1366x769</h3>
                    <p>
                        Game UI scale factor: <b>0.90675</b>, transform: scale(0.90675); Gap=16.32px
                    </p>
                    <img src="/Images/1366GameUI.png" alt="1366 UI" width="50%" />

                    <h3>1024x576</h3>
                    <p>
                        Game UI scale factor: <b>0.67566</b>, transform: scale(0.67566); Gap=12.16px
                    </p>
                    <img src="/Images/1024GameUI.png" alt="1024 UI" width="50%" />

                    <h3>1920x1080 &#62; FHD and 4K monitors</h3>
                    <p>
                        1800+ screens behave like 1800x1013, but side spacing increases.
                    </p>

                    <hr />

                    <h2>Portrait Breakpoints</h2>

                    <h4>375x667 - BetBoard Base screen</h4>
                    <p>
                        Scale factor: <b>1</b> (277x520)<br />
                        Scale down to 320x568 → 231.72x43, Scale: <b>0.83653</b><br />
                        Scale up to 628x1116 → 332.93x625, Scale: <b>1.20191</b>
                    </p>
                    <p>Once scale factor reaches 1.2, no further scaling in portrait view.</p>
                    <img src="/Images/PortraitBetboard.png" alt="Portrait Betboard" width="50%" />

                    <h4>375x667 - RaceTrack Base screen</h4>
                    <p>
                        Scale factor: <b>1</b> (164x566)<br />
                        Scale down to 320x568 → 135.95x461, Scale: <b>0.82896</b><br />
                        Scale up to 628x1116 → 196.8x667.2, Scale: <b>1.2</b>
                    </p>
                    <img src="/Images/PortraitRaceTrack.png" alt="Portrait RaceTrack" width="50%" />

                    <p className="secondary">
                        <small>Game UI components will use <code>transform-origin: bottom</code></small>
                    </p>

                    <hr />

                    <h2>Landscape Breakpoints</h2>

                    <h4>667x375 - Base screen</h4>
                    <p>
                        Scale factor: <b>1</b> (508x205)<br />
                        Scale down to 568x319 → 472x190.47, Scale: <b>0.93</b><br />
                        Scale up to 1023x676 → 508x205, Scale: <b>1</b>
                    </p>
                    <img src="/Images/LandscapeGameUI.png" alt="Landscape UI" width="50%" />

                    <p>
                        <small><b>* RaceTrack swaps with BetBoard using a shuffle button and takes the same dimensions.</b></small>
                    </p>
                </div>
            </div>
        </div>
    );
}

import { useState, useRef } from 'react';
import Vinyl from './components/Vinyl';
import Cover from './components/Cover';
import Welcome from './components/Welcome';
import { redirectToSpotifyAuth } from './spotifyAuth';

const mockStats = {
  short_term: {
    topTrack: { title: "Midnight City", artist: "M83" },
    topArtist: "M83",
    topTracks: [
      {
        title: "Midnight City",
        artist: "M83",
        preview: "https://p.scdn.co/mp3-preview/b1494e1a989dfea7c1d1a278f65e31b8ad8316e7?cid=dummy"
      },
      {
        title: "Electric Feel",
        artist: "MGMT",
        preview: "https://p.scdn.co/mp3-preview/9b8f4e8a8fdd5ef0e26560e94d77034a89d5e9d7?cid=dummy"
      },
      {
        title: "Time",
        artist: "Hans Zimmer",
        preview: "https://p.scdn.co/mp3-preview/e5f2716d3a785c5e7e1058ef6a0a7bc384fae651?cid=dummy"
      }
    ]
  },
  medium_term: {
    topTrack: { title: "Time", artist: "Hans Zimmer" },
    topArtist: "Hans Zimmer",
    topTracks: [
      {
        title: "Cornfield Chase",
        artist: "Hans Zimmer",
        preview: "https://p.scdn.co/mp3-preview/57d6e36a813a449c8331669910c1d6e2172a9735?cid=dummy"
      },
      {
        title: "Mountains",
        artist: "Hans Zimmer",
        preview: "https://p.scdn.co/mp3-preview/f444ba109fa739d7c1456813c17014d2ae7f4ef1?cid=dummy"
      },
      {
        title: "No Time for Caution",
        artist: "Hans Zimmer",
        preview: "https://p.scdn.co/mp3-preview/6e9fa9b8413c99264d03eb171dd2d1846a066981?cid=dummy"
      }
    ]
  }
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false); // temporary state for auth
  const [timeRange, setTimeRange] = useState("short_term");
  const stats = mockStats[timeRange];
  const moodStats = {
    "Indie Pop": 40,
    "Electronica": 25,
    "Cinematic": 20,
    "Synthwave": 15,
  };

  const audioRef = useRef(null);

  const playPreview = (url) => {
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play();
    }
  };

  if (!loggedIn) {
    return <Welcome onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div style={{ fontFamily: 'monospace', padding: '2rem', textAlign: 'center' }}>
      <h1>Spotify Mixtape</h1>

      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => setTimeRange("short_term")}>
          Last Month
        </button>
        <button onClick={() => setTimeRange("medium_term")} style={{ marginLeft: '1rem' }}>
          Last 6 Months
        </button>
      </div>

      <Cover topArtist={stats.topArtist} timeRange={timeRange} />
      <Vinyl topTrack={stats.topTrack} />

      <h2>Tracklist</h2>
      <ol className="tracklist">
        {stats.topTracks.map((track, index) => (
          <li key={index}>
            {track.title} – {track.artist}
            {track.preview && (
              <button
                className="play-button"
                onClick={() => playPreview(track.preview)}
              >
                ▶️
              </button>
            )}
          </li>
        ))}
      </ol>
      <audio ref={audioRef} style={{ display: 'none' }} />

      <h2>Genre Mood</h2>
      <div className="mood-bars">
        {Object.entries(moodStats).map(([genre, percent]) => (
          <div key={genre} className="mood-bar">
            <div className="mood-label">{genre}</div>
            <div className="mood-fill" style={{ width: `${percent}%` }}>{percent}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import Vinyl from './components/Vinyl';
import Cover from './components/Cover';

const mockStats = {
  short_term: {
    topTrack: { title: "Midnight City", artist: "M83" },
    topArtist: "M83",
    topTracks: [
      "Midnight City – M83",
      "Electric Feel – MGMT",
      "The Less I Know the Better – Tame Impala",
      "New Person, Same Old Mistakes – Tame Impala",
      "Let It Happen – Tame Impala"
    ]
  },
  medium_term: {
    topTrack: { title: "Time", artist: "Hans Zimmer" },
    topArtist: "Hans Zimmer",
    topTracks: [
      "Time – Hans Zimmer",
      "Cornfield Chase – Hans Zimmer",
      "Mountains – Hans Zimmer",
      "Day One – Hans Zimmer",
      "No Time for Caution – Hans Zimmer"
    ]
  }
};

export default function App() {
  const [timeRange, setTimeRange] = useState("short_term");
  const stats = mockStats[timeRange];

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
      <ol>
        {stats.topTracks.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ol>
    </div>
  );
}

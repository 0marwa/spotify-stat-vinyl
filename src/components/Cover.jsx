import './Cover.css';

export default function Cover({ topArtist, timeRange }) {
  return (
    <div className="cover">
      <div className="cover-title">🎧 {timeRange === 'short_term' ? 'Last Month' : 'Last 6 Months'} Mixtape</div>
      <div className="cover-artist">Top Artist: <strong>{topArtist}</strong></div>
      <div className="cover-sticker">LIMITED EDITION</div>
    </div>
  );
}

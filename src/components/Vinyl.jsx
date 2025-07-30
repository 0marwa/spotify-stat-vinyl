import './Vinyl.css';

export default function Vinyl({ topTrack }) {
  return (
    <div className="vinyl-wrapper">
      <div className="vinyl">
        <div className="label">
          <div className="label-text">
            <div className="title">{topTrack.title}</div>
            <div className="artist">{topTrack.artist}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

import TrackStack from "./trackStack";

export default function Tracks() {
  const details = [
    {
      image: 'https://picsum.photos/400/400?grayscale',
      title: 'Best Overall Hack',
      description: 'Full event access with exclusive perks',
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      title: 'Most creative solution',
      description: 'Standard entry to all main areas',
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      title: 'Best Use of AI',
      description: 'Special discount for early registration',
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      title: 'Vibe Code Track',
      description: 'Special discount for early registration',
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      title: 'Track prizes',
      description: 'Best FinTech Project, Healthcare Solution, Best Game (TBD)'
    }
  ];

  // Convert details to card content - remove the key prop here
  // eslint-disable-next-line no-unused-vars
  const trackCards = details.map((detail, index) => (
    <div className="track-card-content">
      <img 
        src={detail.image} 
        alt={detail.title}
        className="stack-card-image"
      />
      <div className="track-info">
        <h3>{detail.title}</h3>
        <p>{detail.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="tracks" >
      <h1>Tracks</h1>
        <TrackStack 
          cards={trackCards}
          sendToBackOnClick={true}
          mobileClickOnly={true}
        />
    </div>
  );
}
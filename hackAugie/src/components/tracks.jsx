import BounceCards from "./BounceCards";
import AnimatedContent from "./AnimatedContent";
export default function Tracks() {
 const ticketCards = [
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



  return (
    <div align="center">
      <h1>Tracks</h1>
      
      <BounceCards cards={ticketCards} />
    </div>
  );
}

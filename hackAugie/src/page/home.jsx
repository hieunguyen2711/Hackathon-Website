import AnimatedContent from "../components/AnimatedContent";
import ScrollStack, {ScrollStackItem} from "../components/ScrollStack";
export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
  <AnimatedContent delay={0}>
    <h1>Welcome to HackAugie 2026!</h1>
  </AnimatedContent>
  <AnimatedContent delay={0.2} distance={50}>
    <p>Where innovation meets creativity in a 48-hour coding adventure</p>
  </AnimatedContent>
</div>
      <div align="center">
       <ScrollStack >
        <ScrollStackItem>
          <h2>Card 1</h2>
          <p>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 2</h2>
          <p>This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
      </div>
       
    </div>
  );
}

import LeftSide from '../components/first page compo/LeftSide';
import RightSide from '../components/first page compo/RightSide';
// md:grid md:grid-cols-2
export default function Home() {
  return (
    <div className="h-full grid-Con">
      <LeftSide />
      <RightSide />
    </div>
  );
}

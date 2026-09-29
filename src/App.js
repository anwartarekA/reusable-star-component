import { StarRating } from './StarRating';
function App() {
  return (
    <>
      <StarRating maxRating={5} />
      <StarRating maxRating={7} />
      <StarRating maxRating={10} />
    </>
  );
}

export default App;

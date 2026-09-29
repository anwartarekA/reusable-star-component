import { StarRating, Test } from './StarRating';
function App() {
  return (
    <>
      <StarRating maxRating={5} color={10} messages={10} />
      <Test />
    </>
  );
}
export default App;

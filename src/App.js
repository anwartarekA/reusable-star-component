import { StarRating, Test } from './StarRating';
function App() {
  return (
    <>
      <StarRating
        maxRating={5}
        color='red'
        messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      />
      <StarRating maxRating={10} color='blue' />
      <StarRating maxRating={5} color='orange' />
      <StarRating maxRating={10} color='yellow' />

      <Test />
    </>
  );
}
export default App;

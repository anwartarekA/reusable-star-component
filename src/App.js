import { StarRating } from './StarRating';
function App() {
  return (
    <>
      <StarRating
        maxRating={5}
        color='yellow'
        messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      />
      <StarRating maxRating={7} size={30} color='blue' />
      <StarRating maxRating={10} size={35} color='brown' />
    </>
  );
}

export default App;

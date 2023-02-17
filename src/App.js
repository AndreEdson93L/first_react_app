import logo from "./logo.svg";
import "./App.css";
import Dog from "./Components/Dog";

function App() {
  const myFavorites = {
    color: "red",
    music: ["metal", "punk", "classic"],
    display: true,
    photos: ["photo1", "photo2", "photo3", "photo4"],
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App!!</h1>
        <p>Color: {myFavorites.color}</p>
        <ul>
          Music:
          {myFavorites.music.map((element) => {
            return <li key={element.toString()}>{element}</li>;
          })}
        </ul>

        <ol>
          Photos
          {myFavorites.photos.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
        <ul>
          ul photos
          {myFavorites.photos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {myFavorites.display ? (
          <p>Display is set to true</p>
        ) : (
          <p>Display is set to false</p>
        )}
        {myFavorites.display && <p>Still set to true</p>}
        
      </header>
      <Dog />
    </div>
  );
}

export default App;

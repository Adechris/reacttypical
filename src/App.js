import './App.css';
import Typical from 'react-typical'
function App() {
  return (
    <div>
      <h2>Hi, I am Chris</h2>
      <h1>I am a <Typical
        steps={[
          'Front-End Developer',
          2000,
          'Back-End Developer',
          2000,
          'Full-Stack Developer',
          2000,
          'Computer Scientist',
          2000
        ]}
        loop={Infinity}
        wrapper="b"
      /></h1>
      
    </div>
  );
}

export default App;


import './App.css';

function App() {
  return (
  <>
  <h1 className='titel'>Tic-Tac-Toe</h1>

  <div>
    
    <div className='box-row'>
      <div className='box b-1'></div>
      <div className='box b-2'></div>
      <div className='box b-3'></div>
    </div>

    <div className='box-row'>
      <div className='box -b-4'></div>
      <div className='box b-5 '></div>
      <div className='box b-6'></div>
    </div>

    <div className='box-row'>
      <div className='box b-7'></div>
      <div className='box b-8'></div>
      <div className='box b-9'></div>
    </div>

  </div>
  </>
  );
}

export default App;

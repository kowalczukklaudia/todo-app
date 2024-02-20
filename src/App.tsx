import './App.scss';
import Header from './shared/components/Header/Header';
import TodoWrapper from './shared/components/TodoComponents/TodoWrapper/TodoWrapper';

function App() {
  return (
    <div className="App" data-testid="app-wrapper">
      <Header />
      <TodoWrapper />
    </div>
  );
}

export default App;

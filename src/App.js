import MarkdownEditor from "./components/MarkdownEditor";
import './App.css';

function App() {
  return (
    <div className="App">
      <MarkdownEditor onContentChange={console.log} />
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
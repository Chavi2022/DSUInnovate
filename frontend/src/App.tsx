import './css/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Videos from './pages/Videos';
function App() {
  const testingMessages = true
  let testMessages = {}
  if (testingMessages) {
    testMessages = {
      message1: {
        text: "Hello",
        isSender: false
      },
      message2: {
        text: "How are you?",
        isSender: true
      },
      message3: {
        text: "I am good!",
        isSender: false
      },
      message4: {
        text: "I'm glad. I was considering going out to eat today, what do you want?",
        isSender: true
      }
    };
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat messages={testMessages} databaseLink='' />} />
          <Route path="/video" element={<Videos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

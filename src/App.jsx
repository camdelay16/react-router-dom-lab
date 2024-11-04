// src/App.jsx
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import MailboxDetails from "./components/MailboxDetails.jsx";
import MailboxForm from "./components/MailboxForm.jsx";
import MailboxList from "./components/MailboxList.jsx";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBox) => {
    newBox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<h2>Post Office!</h2>}
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        />
        <Route
          path="*"
          element={<h2>Nothing here...try again</h2>}
        />
      </Routes>
    </>
  );
};

export default App;

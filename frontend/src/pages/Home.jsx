import React from 'react'
import { NoteContext } from '../context/NoteContext.jsx';

function Home() {
  const {notes,loading} = React.useContext(NoteContext);
  console.log(notes)
  return (
    <div>Home</div>
  )
}

export default Home
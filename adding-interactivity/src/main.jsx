import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PlayMovieButton  from './PlayMovieButton.jsx'
import Arts from './Arts/Arts.jsx'
import ChatApp from './ChatApp/ChatApp.jsx'
import ArtForm from './ArtForm/ArtForm.jsx'
import BucketList from './BucketList/BucketList.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <PlayMovieButton /> */}
    {/* <Arts/> */}
    {/* <ChatApp></ChatApp> */}
    {/* <ArtForm></ArtForm>
     */}
    <BucketList></BucketList>
  </StrictMode>
)

import React from 'react';

import { BsSpotify } from 'react-icons/bs'

const Login: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-gray-900 flex justify-center items-center flex-col">
      <h1 className="font-bold text-white text-xl mb-5">SPOTIQUIZ</h1>
      <div className="p-5 max-w-xl w-80">
        <button 
          className="w-full bg-green-600 text-white rounded-lg px-5 py-2 font-bold hover:bg-green-700 flex items-center gap-3 justify-center">
          <BsSpotify className="text-xl"/>   
          Continuar com Spotify
        </button>
      </div>
    </div>
  );
}

export default Login;
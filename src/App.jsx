import { useState,useRef } from 'react'
import './App.css';


function App() {
  const [playerSpot, setPlayerSpot] = useState('ready');
  const [showModal, setShowModal] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [luck,setLuck] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 9) + 1);
  const [message,setMessage] = useState('');
  const popupMessage = {
      miss:'✨ So close! Luck is almost yours',
      success: '🎉 Wow! Luck is on your side!'
  };

  const handleGameAction = (type) =>{
    setPlayerSpot(type);
    setIsFinished(true);
  }
  const handleSubmit = () =>{
    setShowModal(true);
    setIsFinal(true);
    if(randomNumber == luck){
      setMessage(popupMessage.success);
    }else{
      setMessage(popupMessage.miss);
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-200 via-pink-300 to-orange-300 flex items-center justify-center ">
      <div className='min-w-[80%] min-h-[80vh]  bg-black/25 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-[0_0_35px_#rose-200] text-white' >
          {/* header section */}
          <div>
             <div className='text-center mt-5'>
                <h1 className='font-bold text-4xl'>Let's Find Your Luck</h1>
             </div>
             <div className='mx-20 mt-5'>
              <h5 className='font-bold text-xl p-2'>✨ How to Play ✨</h5>
                <ul className='px-6'>
                  <li>A hidden number will be displayed on the left side.</li>
                  <li>Guess the hidden number and enter it in the input box.</li>
                  <li>Click the Submit button to check your answer.</li>
                  <li>Find out if your guess is correct and test your luck!</li>
                </ul>
              <h6 className='mt-4 mx-2 font-extrabold animate-pulse text-[#F4B400]'>📢 Note: <span>The hidden number is between 0 and 10. Make your best guess!</span></h6>
             </div>
          </div> 
          {/* body section */}
          <div className={`w-[90%] m-auto h-[400px] mt-5 flex ${playerSpot == 'ready' ? 'items-center justify-center' : 'mt-10'}`}>
          {/* Game ready section */}
          {playerSpot == 'ready' && 
          (<div className='items-center justify-center flex flex-col'>
            <p className='text-2xl font-bold'>Trust Your Instincts! Let's See If Luck Is on Your Side!</p>
              <button className="animate-[gameBounce_1s_ease-in-out_infinite]
                  text-center mt-8 px-10 py-4 rounded-xl
                  text-white text-lg font-extrabold
                  bg-gradient-to-r from-rose-200 via-pink-300 to-orange-300
                  shadow-[0_0_20px_pink-300]
                  hover:scale-105 hover:animate-none hover:shadow-[0_0_35px_pink-300]
                  active:scale-95 transition-all duration-300 cursor-pointer"
                  onClick={() => handleGameAction('play')}>
               💖 Let's Play
              </button>
          </div>)}
          {/* Play section */}
          {playerSpot == 'play' && 
          (<div className='justify-around flex gap-30 flex-col  md:flex-row'>
            <div>
                <h1 className='text-2xl'>The generated number is shown below.⬇️  </h1>
                <div className={!isFinal ? `bg-white/80 backdrop-blur-xl rounded-xl p-10 mt-5 z-50`: `bg-white/80 backdrop-blur-xl rounded-xl p-10 mt-5 z-50`}>
                  <h2 className="text-3xl font-bold text-[rgba(255,255,255,0.2)] text-center -z-5 cursor-not-allowed">
                    {isFinal && randomNumber}
                  </h2>
                </div>
            </div>
            <div>
                <h1 className='text-3xl'>Try Your Luck Here! 🍀 </h1>
                <div className='mt-5'>
                    <input type="text" placeholder="Enter your lucky number..." value={luck} name='luck' onChange={(e) => setLuck(e.target.value)}
                        className="w-full py-5 text-2xl px-6 border border-pink-300 rounded-xl outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                    />
                </div>
            </div>
          </div>)}  
        </div>
          {isFinished && <div className='float-right'>
              <button onClick={handleSubmit} className="text-center mt-18 md:mt-10 px-10 py-4 rounded-xl
                  text-white text-lg font-extrabold
                  bg-gradient-to-r from-pink-300 via-rose-400 to-orange-300
                  shadow-[0_0_20px_via-rose-200]
                  hover:scale-105 hover:shadow-[0_0_35px_via-rose-300]
                  active:scale-95 cursor-pointer">🍀 Let's Roll</button>
          </div>}
      </div>
    {showModal && (
        <div className="fixed inset-0 z-50 flex items-center
          justify-center bg-black/50 backdrop-blur-sm p-4">

          <div className="bg-white w-full max-w-sm rounded-2xl
            p-8 text-center shadow-2xl animate-modal">

            {/* Success Icon */}
            <div className="mx-auto w-20 h-20 rounded-full
              bg-green-100 flex items-center justify-center
              animate-icon">

              <svg
                className="w-12 h-12 text-green-600"
                viewBox="0 0 52 52"
                fill="none"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="animate-circle"
                />

                <path
                  d="M14 27L22 35L38 18"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-check"
                />
              </svg>

            </div>

            {/* Content */}
            <h2 className="text-2xl font-bold text-gray-800 mt-5">{message}</h2>

            <p className="text-gray-500 mt-2">
              The generated number is {randomNumber}! 🎯.
            </p>

            {/* Button */}
            <button
              onClick={() => {setShowModal(false); window.location.reload();}}
              className="mt-7 w-full bg-green-600 hover:bg-green-700
                text-white font-semibold py-3 rounded-xl
                transition-all duration-300 hover:scale-105"
            >
              Continue
            </button>

          </div>
        </div>
      )}
    </div>
  )

}

export default App

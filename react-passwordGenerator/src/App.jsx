import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [password, setPassword] = useState(null);
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed]);

  return (
    <div className='min-h-screen bg-gray-900 shadow-md text-white'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Password Generator</h1>
      <div className='w-full bg-white/40 rounded-lg max-w-md mx-auto py-6 px-10'>
        <div className='mb-4 w-full relative'>
          <input
            type="text"
            value={password}
            placeholder='Generated password will appear here'
            className='outline-none w-full bg-white text-black/50 p-2 rounded-lg'
            readOnly
            ref={passRef}
          />
          <button
          className='absolute right-1 translate-x-1/2 bg-amber-500 hover:bg-amber-600 py-2 px-3 rounded-xl'
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>
        <div className='flex gap-x-3 text-sm'>
          <div className='flex items-center gap-x-1'>
            <input
              id='length-display'
              type="range"
              min={6}
              max={100}
              className='cursor-pointer'
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length-display">Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id="numbers"
              checked={numAllowed}
              onChange={() =>
                setNumAllowed((prev) => !prev)
              }
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id="symbols"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

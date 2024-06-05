import { useState } from "react";

function App() {
function calculateSi(){
      let ans = (p*t*r)/100;
      setSi(ans);
    }
  const [si,setSi]= useState(0)
  const [p,setP]= useState(0)
  const [t,setT]= useState(0)
  const [r,setR]= useState(0)
  return (
   <>
   <div className="h-screen flex justify-center items-center flex-wrap text-center">
          <p className="text-black mb-2 w-screen text-5xl">Simple Interest Calculator</p>
   
    <div className=" h-96 w-80 flex justify-center items-center rounded-2xl flex-wrap shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">

      <form className=" h-96 w-80 flex justify-center items-center flex-wrap">
      <input type="text" onChange={(e)=> setP(e.target.value)} required placeholder="Enter Principle Amount" className="h-10 w-72 pl-2 outline-none rounded-2xl  border-2" id="p" />
      <input type="text" onChange={(e)=> setT(e.target.value)} required placeholder="Enter  Time" className="h-10 w-72 pl-2 outline-none rounded-2xl border-2" id="t" />
      <input type="text" onChange={(e)=> setR(e.target.value)} required placeholder="Enter Rate" className="h-10 w-72 pl-2 outline-none rounded-2xl border-2" id="r" />
      
      <p className="text-black text-xl">The Total Simple Interest is:</p>
      <p className="text-black text-5xl text-center w-72 mb-2">{si}</p>
      <button type="button" className="bg-blue-500 rounded-3xl p-3 w-64 text-white " onClick={calculateSi}>Calculate</button>
      </form>
      
    </div>
   </div>
   </>
  );
}

export default App;

// import React, { useState } from "react";
// import axios from "axios";
// import CGLogo from "../assets/img/chatGPT.png";
// import AppLogo from "../assets/img/app-logo.png";
// import "../gpt.css";

// export default function ChatGPT() {
//   const [prompt, setPrompt] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // communicate with API
//     // post input value 'prompt' to API end point
//     axios
//       .post("http://localhost:5555/chat", { prompt })
//       .then((res) => {
//         setResponse(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   return (
//     <div className="wrapper mx-4 min-h-[580px]">
//       <img src={AppLogo} alt="" className="app-logo" />
//       <form onSubmit={handleSubmit}>
//         <img
//           src={CGLogo}
//           alt=""
//           className={loading ? "cg-logo loading" : "cg-logo"}
//         />
//         <input
//           type="text"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder=" {^_^} => Ask anything..."
//         />
//         <button type="submit">Ask</button>
//       </form>
//       <p className="antialiased font-light text-gray-700 text-sm response-area text-black leading-relaxed">
//         {loading ? "loading..." : response}
//       </p>
//     </div>
//   );
// }

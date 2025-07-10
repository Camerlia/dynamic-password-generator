import React, { useState } from "react";

const Input = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSpecialChar, setIncludeSpecialChar] = useState(true);
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxzy";
    const number = "0123456789";
    const specialChar = "!@#$%^&*()_+[]~";

    let str = "";
    if (includeUppercase) {
      str += uppercase;
    }
    if (includeLowercase) {
      str += lowercase;
    }
    if (includeNumber) {
      str += number;
    }
    if (includeSpecialChar) {
      str += specialChar;
    }

    let generatePassword = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random()* str.length);
        generatePassword += str[randomNum];

        setPassword(generatePassword)
    }

    console.log(`${uppercase}, ${lowercase} ${number} ${specialChar}`);
  };
  return (
    <div className="bg-amber-100 w-full h-screen p-10">
      <div className="max-w-lg m-auto border border-amber-800 rounded-2xl p-4 text-amber-800">
        <h1 className="text-3xl font-medium">Dyanmic Password Generator</h1>
        <div className={"flex flex-col gap-4  my-3.5"}>
          <div className={"flex gap-2.5"}>
            <label>Password Length:</label>
            <input
              type={"number"}
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              className={
                "rounded border border-amber-800 pl-3 placeholder:pl-3"
              }
            />
          </div>
          <div className={"flex gap-2.5"}>
            <label>Include Uppercase:</label>
            <input
              type={"checkbox"}
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className={"p-1"}
            />
          </div>
          <div className={"flex gap-2.5"}>
            <label>Include Lowercase:</label>
            <input
              type={"checkbox"}
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className={"p-1"}
            />
          </div>
          <div className={"flex gap-2.5"}>
            <label>Include Number:</label>
            <input
              type={"checkbox"}
              checked={includeNumber}
              onChange={() => setIncludeNumber(!includeNumber)}
              className={"p-1"}
            />
          </div>
          <div className={"flex gap-2.5"}>
            <label>Include Special Character:</label>
            <input
              type={"checkbox"}
              checked={includeSpecialChar}
              onChange={() => setIncludeSpecialChar(!includeSpecialChar)}
              className={"p-1"}
            />
          </div>
          <div>
            <button
              className={"bg-amber-800 text-white rounded px-8 py-3"}
              onClick={handleGeneratePassword}
            >
              Generate Password
            </button>
          </div>
          <div>
            <label>Password:</label>
            <br />
            <input
              type="text"
              value={password}
              readonly
              className={
                "rounded border border-amber-800 pl-3 placeholder:pl-3 bg-amber-600/20"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;

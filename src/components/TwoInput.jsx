import React from "react";

const TwoInput = () => {
  const [password, setPassword] = React.useState("");
  const [passwordLength, setPasswordLength] = React.useState(12);
  const [includeUppercase, setIncludeUppercase] = React.useState(true);
  const [includeLowercase, setIncludeLowercase] = React.useState(true);
  const [includeNumber, setIncludeNumber] = React.useState(true);
  const [includeSpecialChar, setIncludeSpecialChar] = React.useState(true);

  const handleGeneratePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const specialChar = "~!@#$%^&*()_+={}[]?/<>";

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
      let randomNum = Math.floor(Math.random() * str.length);

      generatePassword += str[randomNum];
      setPassword(generatePassword);
    }
  };
  return (
    <div className={"w-full h-screen bg-blue-50 text-blue-600 p-6"}>
      <div
        className={`max-w-xl m-auto border border-blue-600 rounded-2xl p-4 bg-white`}
      >
        <h2 className={"font-semibold text-2xl"}>Password Generator</h2>
        <div className="my-6 flex flex-col gap-4">
          <div className={"flex gap-2 items-center"}>
            <label>Password Length:</label>
            <input
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              className="bg-blue-200 rounded p-2"
            />
          </div>
          <div className={"flex gap-2 items-center"}>
            <label>Include Uppercase</label>
            <input
              type={"checkbox"}
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
          </div>
          <div className={"flex gap-2 items-center"}>
            <label>Include Lowercase</label>
            <input
              type={"checkbox"}
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
          </div>
          <div className={"flex gap-2 items-center"}>
            <label>Include Number</label>
            <input
              type={"checkbox"}
              checked={includeNumber}
              onChange={() => setIncludeNumber(!includeNumber)}
            />
          </div>
          <div className={"flex gap-2 items-center"}>
            <label>Include Special Character</label>
            <input
              type={"checkbox"}
              checked={includeSpecialChar}
              onChange={() => setIncludeSpecialChar(!includeSpecialChar)}
            />
          </div>
          <div>
            <button
              onClick={handleGeneratePassword}
              className={"bg-blue-600 text-white py-3 px-8 rounded"}
            >
              Generate Password
            </button>
          </div>
          <div>
            <input
              readOnly
              value={password}
              className="bg-blue-200 rounded p-2 text-blue-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoInput;

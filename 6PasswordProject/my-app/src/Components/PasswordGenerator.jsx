import React, { useState } from 'react';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(true);
  const [hasNumbers, setHasNumbers] = useState(true);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGeneratePassword = () => {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = '';
    if (hasUppercase) characterPool += upperChars;
    if (hasLowercase) characterPool += lowerChars;
    if (hasNumbers) characterPool += numChars;
    if (hasSymbols) characterPool += symbolChars;

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      newPassword += characterPool[randomIndex];
    }

    setGeneratedPassword(newPassword);
  };

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <div className="input-group">
        <label>
          Password Length:
          <input
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            min="1"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          <input
            type="checkbox"
            checked={hasUppercase}
            onChange={(e) => setHasUppercase(e.target.checked)}
          />
          Include Uppercase Letters
        </label>
      </div>
      <div className="input-group">
        <label>
          <input
            type="checkbox"
            checked={hasLowercase}
            onChange={(e) => setHasLowercase(e.target.checked)}
          />
          Include Lowercase Letters
        </label>
      </div>
      <div className="input-group">
        <label>
          <input
            type="checkbox"
            checked={hasNumbers}
            onChange={(e) => setHasNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
      </div>
      <div className="input-group">
        <label>
          <input
            type="checkbox"
            checked={hasSymbols}
            onChange={(e) => setHasSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={handleGeneratePassword}>Generate Password</button>
      <div className="generated-password">
        <h2>Your Generated Password:</h2>
        <p>{generatedPassword}</p>
      </div>
    </div>
  );
};

export default PasswordGenerator;

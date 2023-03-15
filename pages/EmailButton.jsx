import React from 'react';

// const EButton = styled.button`
//   height: 35px;
//   width: 100px;
//   background: transparent;
//   color: #1BA098;
//   border: 1px #1BA098 solid;
//   border-radius: 5px;
//   &:hover {
//     background: linear-gradient(rgb(27,160,152, .25), rgb(27,160,152, .25));
//     cursor: pointer;
//     color: #1BA098;
//   }
// `

function EmailButton() {
  const handleButtonClick = () => {
    window.location.href = 'mailto:gildonnie864@gmail.com';
  }

  return (
    <button className="h-10 w-10 bg-green-600" onClick={handleButtonClick}>
      Reach Out
    </button>
  );
}

export default EmailButton;
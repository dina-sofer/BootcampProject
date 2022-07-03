import React from 'react';
import './style.css';

const fetch = () => {
  const xhr = new XMLHttpRequest();
  let contentOfFile = '';
  xhr.open('GET', 'http://localhost:3000/');
  xhr.send();
  xhr.onload = function () {
    if(xhr.status === 200) {
      const file = JSON.parse(xhr.responseText); //! ??????
      file.forEach((element: any) => {
        contentOfFile += `${element}`;
      });
    }
    else {
      if(xhr.status === 404)
        xhr.send('Invalid file!');
    }
  }
  return(contentOfFile);
}

function FetchingData() {
    return(
      <div className="FetchingData">
        <div id="fetchingData">
          <input  className='buttonFetch' type={'file'}></input>
          <div className='content'>
            <p>`file: ${fetch()}`</p>
          </div>
        </div>
        <script src="app.js"></script>
      </div>
    )
}

export default FetchingData;
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import './app.css'

const App = () => {

  // Usestates
  const [lineTop, setLineTop] = useState('');
  const [lineBottom, setLineBottom] = useState('');
  const [image, setImage] = useState('');
  //metodos
  const onChangeLineTop = function(e) {
    setLineTop(e.target.value)
  }

  const onChangeLineBottom = function(e) {
    setLineBottom(e.target.value)
  }

  const onChangeImage = function(e) {
    setImage(e.target.value)
  }

  const downloadMeme = function(e) {
    console.log('si exporta');
      html2canvas(document.querySelector("#meme-generator")).then(canvas => {
        var img = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.download = 'meme.generator.png';
        link.href = img;
        link.click();
  });
  }

  const refreshMeme = function(e) {
      console.log('si refresco')
      setLineTop('')
      setLineBottom('')
  }

  return <div className='container'>
        <div className='div__form'>
          <h1>Generador de Memes</h1>
          <select onChange={ onChangeImage } >
            <option value="fire">Casa en Llamas</option>
            <option value="futurama">Futurama</option>
            <option value="history">History Channel</option>
            <option value="matrix">Matrix</option>
            <option value="philosoraptor">PhilosoRaptor</option>
            <option value="smart">Smart Guy</option>
          </select>
    
            <input onChange={ onChangeLineTop } type="text" placeholder='Primer texto'></input>
            <input onChange={ onChangeLineBottom } type="text" placeholder='Segundo texto'></input>
            <button onClick={ downloadMeme }>Exportar Meme</button>
            <button onClick={ refreshMeme } >Refresh</button>

        </div>

        <div className='class__meme'>
          <div id='meme-generator'>
          <p className='textTop'>{ lineTop }</p>
          <p  className='textBottom'>{ lineBottom }</p>

          <img src= {'/img/' + image + '.jpg'} />
          </div>
        </div>
  </div>;
};

export default App;

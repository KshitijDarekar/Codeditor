import React,{useState,useEffect} from 'react';
import Editor from './Editor.js';
import useLocalStorage from '../hooks/useLocalStorage'
import { Menu } from './Menu.js';
import { MenuBtn } from './MenuBtn.js';
import { MenuOption } from './MenuOption.js';
import { themesNames } from '../utils/themesNames.js';

function App() {
  const [html,setHtml]= useLocalStorage('html','');
  const [css,setCss]= useLocalStorage('css','');
  const [js,setJs]= useLocalStorage('js','');
  const [srcDoc,setSrcDoc]= useState('');
  const [ themeChoosen, setThemeChoosen ] = useState('material');

  const handleThemeChoosen = (theme) => {
    setThemeChoosen(theme);
  }

  useEffect( ()=>{
    // used useEffect to cause some delay
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
        <body> ${html}</body>
        <style> ${css}</style>
        <script> ${js}</script>
      </html>
      `)
    },250)
    return ()=>clearTimeout(timeout); //clears the update
  },[html,css,js])

  return (
    <>
      <Menu>
      <MenuBtn title='Theme'>
          {
            themesNames.map(theme => (
              <MenuOption 
                key={theme}
                title={theme.replace('-', ' ')}
                onClick={() => handleThemeChoosen(theme)}  
                active={themeChoosen === theme ? true : false}
              />
            ))
          }
        </MenuBtn>
      </Menu>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
          theme={themeChoosen}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
          theme={themeChoosen}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
          theme={themeChoosen}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc} 
          title='output'
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>    
    </>
  );
}

export default App;

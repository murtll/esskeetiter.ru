import { ReactTerminal } from 'react-terminal'

import { Welcome } from './Welcome'

import './App.css'

const App = () => {

  const files = ['about.txt', 
                 'cv.md',
                 'socials.md']

  const longFiles = <p>
    total 104
    <br/>
    -rw-r--r--   1 murtll murtll  451B Apr  8 16:46 about.txt
    <br/>
    -rw-r--r--   1 murtll murtll  301B Apr  8 17:41 cv.md
    <br/>
    -rw-r--r--   1 murtll murtll  163B Apr  8 16:42 socials.md
  </p>

  const commands = {
    help: <p>
      whoami: shows current user
      <br/>
      exit: close terminal
      <br/>
      pwd: show current directory
      <br/>
      ls | ll: list files in current directory
      <br/>
      help: display this help
    </p>,
    whoami: 'murtll',
    exit: window.close,
    pwd: '/home/murtll',
    ls: (flags) => {
      if (flags == '-lah' || flags == '-la' || flags == '-l') {
        return longFiles
      }
      return files.join(' ')
    },
    ll: longFiles,
    la: longFiles
  }

  return (
    <ReactTerminal
      welcomeMessage={<Welcome/>}
      id='term'
      theme='matrix'
      prompt='murtll@esskeetiter.ru $'
      showControlBar='false'
      showControlButtons='false'
      errorMessage='command not found'
      commands={commands}
    />
  )
}

export default App

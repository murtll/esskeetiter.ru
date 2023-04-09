import { useEffect, useState } from 'react'
import { ReactTerminal } from 'react-terminal'

import { Welcome } from './Welcome'
import * as co from './CommandOutputs'

import './App.css'

const App = () => {
  const commands = {
    help: co.help,
    whoami: 'murtll',
    exit: window.close,
    pwd: '/home/murtll',
    ls: (flags) => {
      if (flags == '-lah' || flags == '-la' || flags == '-l') {
        return co.longFiles
      }
      return co.files.join(' ')
    },
    ll: co.longFiles,
    la: co.longFiles,
    cat: (file) => {
      switch (file) {
        case '':
          return 'usage: cat <file>'
        case 'about.txt':
          return co.about
        default:
          return `cat: ${file}: no such file or directory`
      }
    }
  }

  const [height, setHeight] = useState(0);
  setInterval(() => { 
    setHeight(document.documentElement.scrollHeight)
  }, 100)
  useEffect(() => {
    window.scrollTo(0, height)
  }, [height])

  return (
    <ReactTerminal
      welcomeMessage={<Welcome/>}
      theme='matrix'
      prompt='murtll@esskeetiter.ru $'
      showControlBar={false}
      showControlButtons={false}
      errorMessage='command not found'
      commands={commands}
    />
  )
}

export default App

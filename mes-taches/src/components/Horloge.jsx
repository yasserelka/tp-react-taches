import { useEffect, useState } from 'react'

function Horloge() {
  const [maintenant, setMaintenant] = useState(() => new Date())

  useEffect(() => {
    // 1. Start a timer that updates the time every 1000ms (1 second)
    const intervalId = setInterval(() => {
      setMaintenant(new Date())
    }, 1000)

    // 2. Cleanup function: stop the timer when the component disappears
    return () => clearInterval(intervalId)
  }, []) // Empty array means this effect runs only once when the component mounts

  return <p className="horloge">{maintenant.toLocaleTimeString('fr-FR')}</p>
}

export default Horloge
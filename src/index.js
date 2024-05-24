import { createRoot } from 'react-dom/client';
import { useState} from 'react'
import './index.css'

function App() {
    const base_url = process.env.REACT_APP_BACKEND_BASE_URL
    const [result, setResult] = useState()
  
    const showResult = async(url) => {
      setResult("Trying to fetch the result")
      await fetch(url)
      .then(response => {
        if ([200, 401].includes(response.status) ) {
          return response.json();
        }
        throw new Error(`Error fetching data: ${response.status}`);
      })
      .then(data => {
        setResult(JSON.stringify(data.message))
      })
      .catch(error => {
          setResult(`${error}`)
      });
    }

    const getLastChange = async (event) => {
        event.preventDefault();
        let phoneNumber = event.currentTarget.elements.phoneNumber.value
        const url = base_url + "retrieve_date/" + phoneNumber
        showResult(url)
    }


    const checkChange = async (event) => {
      event.preventDefault();
      let phoneNumber = event.currentTarget.elements.phoneNumber.value
      let maxAge = event.currentTarget.elements.maxAge.value
      let url = base_url + "check/" + phoneNumber + "/" + maxAge
      showResult(url)
    }
  return (
    <>
          <h1>Sim swap sample app</h1>
          <form onSubmit={getLastChange}>
            <input type="password" placeholder='phoneNumber' id='phoneNumber'/> <button type="submit">Retrive Last Sim Swap</button>
          </form>
          <form onSubmit={checkChange}>
            <input type="password" placeholder='phoneNumber' id='phoneNumber'/> <input placeholder='[0-240]' id='maxAge' maxLength="3"
          pattern="[0-9]{3}" size={3}/>
            <button type="submit">Check if exists sim-swap in period </button>
          </form>
          <p className='result'>{result}</p>

    </>
  )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
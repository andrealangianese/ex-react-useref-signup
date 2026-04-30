import { useState } from 'react'

function App() {

    const [nome, setNome] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [specializzazione, setSpecializzazione] = useState('')
    const [anniEsperienza, setAnniEsperienza] = useState('')
    const [descrizione, setDescrizione] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <>
            <h3>web dev</h3>
            <form onSubmit={handleSubmit}>
                <label >
                    <h5>nome</h5>
                    <input
                        type="text"
                        placeholder='inserisci il tuo nome'
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </label>
                <label >
                    <h5>username</h5>
                    <input
                        type="text"
                        placeholder='inserisci il tuo username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </label>
                <label >
                    <h5>password</h5>
                    <input
                        type='password'
                        placeholder='inserisci la tua password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <h5>specializzazione</h5>
                    <select value={specializzazione} onChange={e => setSpecializzazione(e.target.value)}>
                        <option value="full stack">full stack</option>
                        <option value="frontend">frontend</option>
                        <option value="backend">backend</option>
                    </select>
                </label>
                <label >
                    <h5>anni esperienza</h5>
                    <input
                        type='number'
                        placeholder='inserisci la tua esperienza'
                        value={anniEsperienza}
                        onChange={e => setAnniEsperienza(e.target.value)}
                    />
                </label>
                <label>
                    <p>descrizione</p>
                    <textarea
                        value={descrizione}
                        onChange={e => setDescrizione(e.target.value)}
                    ></textarea>
                </label>
            </form>
        </>
    )

}

export default App

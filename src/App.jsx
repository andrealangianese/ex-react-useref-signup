import { useState } from 'react'

function App() {

    const [nome, setNome] = useState('andrea')
    const [username, setUsername] = useState('langi')
    const [password, setPassword] = useState('lanlan')
    const [specializzazione, setSpecializzazione] = useState('frontend')
    const [anniEsperienza, setAnniEsperienza] = useState('3')
    const [descrizione, setDescrizione] = useState('non saprei')

    const handleSubmit = e => {
        e.preventDefault()
        if (
            !nome.trim() ||
            !username.trim() ||
            !password.trim() ||
            !specializzazione.trim() ||
            !anniEsperienza.trim() ||
            anniEsperienza <= 0 ||
            !descrizione.trim()
        ) { alert('compila correttamente tutti i dati del form!!') }
        {
            console.log('form compilato correttamente, ecco i tuoi dati :', {
                nome,
                username,
                password,
                specializzazione,
                anniEsperienza,
                descrizione
            });
        }
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
                <button type='submit'>iscriviti</button>
            </form>
        </>
    )

}

export default App

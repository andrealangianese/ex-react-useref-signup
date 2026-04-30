import { useState, useMemo } from 'react'

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

function App() {

    const [nome, setNome] = useState('andrea')
    const [username, setUsername] = useState('langi')
    const [password, setPassword] = useState('lanlan')
    const [specializzazione, setSpecializzazione] = useState('frontend')
    const [anniEsperienza, setAnniEsperienza] = useState('3')
    const [descrizione, setDescrizione] = useState('non saprei')

    // --- VALIDAZIONE USERNAME ---
    const isUsernameValid = useMemo(() => {
        const val = username.toLowerCase();
        const hasMinLength = val.length >= 6;
        // Solo caratteri alfanumerici (lettere o numeri)
        const onlyAlphanumeric = val.split('').every(char =>
            letters.includes(char) || numbers.includes(char)
        );
        return hasMinLength && onlyAlphanumeric;
    }, [username]);

    // --- VALIDAZIONE PASSWORD ---
    const isPasswordValid = useMemo(() => {
        const val = password.toLowerCase();
        const chars = val.split('');

        const hasMinLength = val.length >= 8;
        const hasLetter = chars.some(char => letters.includes(char));
        const hasNumber = chars.some(char => numbers.includes(char));
        const hasSymbol = chars.some(char => symbols.includes(char));

        return hasMinLength && hasLetter && hasNumber && hasSymbol;
    }, [password]);

    // --- VALIDAZIONE DESCRIZIONE ---
    const isDescrizioneValid = useMemo(() => {
        const trimmed = descrizione.trim();
        return trimmed.length >= 100 && trimmed.length <= 1000;
    }, [descrizione]);

    const handleSubmit = e => {
        e.preventDefault()
        if (
            !nome.trim() ||
            !username.trim() ||
            !password.trim() ||
            !specializzazione.trim() ||
            !anniEsperienza.trim() ||
            anniEsperienza <= 0 ||
            !descrizione.trim() ||
            !isDescrizioneValid ||
            !isPasswordValid ||
            !isUsernameValid
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
    // Helper per lo stile dei messaggi
    const getStatusStyle = (isValid) => ({
        color: isValid ? 'green' : 'red',
        fontSize: '0.8rem',
        marginTop: '5px'
    });
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
                    <p style={getStatusStyle(isUsernameValid)}>
                        {isUsernameValid
                            ? "✅ Username valido"
                            : "❌ Minimo 6 caratteri alfanumerici (no simboli/spazi)"}
                    </p>

                </label>
                <label >
                    <h5>password</h5>
                    <input
                        type='password'
                        placeholder='inserisci la tua password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <p style={getStatusStyle(isPasswordValid)}>
                        {isPasswordValid
                            ? "✅ Password valido"
                            : "❌ Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo"}
                    </p>
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
                    <p style={getStatusStyle(isDescrizioneValid)}>
                        {isDescrizioneValid
                            ? "✅ descrizione valida"
                            : "❌ Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali)."}
                    </p>
                </label>
                <button type='submit'>iscriviti</button>
            </form>
        </>
    )

}

export default App

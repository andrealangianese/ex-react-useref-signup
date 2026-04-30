import { useState, useMemo, useRef } from 'react'

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

function App() {

    // campi controllati rimangono con usetstate
    const [username, setUsername] = useState('langino')
    const [password, setPassword] = useState('lanlan5!')
    const [descrizione, setDescrizione] = useState('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu')

    // campi non controllati con useref
    const specializzazioneRef = useRef()
    const nomeRef = useRef()
    const anniEsperienzaRef = useRef()

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

        // trasformo i dati per mantenere il controllo uguale a prima
        const specializzazione = specializzazioneRef.current.value;
        const anniEsperienza = anniEsperienzaRef.current.value;
        const nome = nomeRef.current.value

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
                        ref={nomeRef}
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
                    <select
                        ref={specializzazioneRef}>
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
                        ref={anniEsperienzaRef}
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

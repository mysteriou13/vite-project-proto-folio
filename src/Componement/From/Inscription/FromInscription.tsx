import { useState } from "react"

export default function FormInscription() {
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [role, setRole] = useState<string>("admin")

    const inscription = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() // empêche le rechargement de la page

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/user/inscription`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    password,
                    role
                })
            })

            const data = await response.json()
            console.log('Success:', data)
        } catch (error: any) {
            console.error('Error:', error.message)
        }
    }

    return (
        <div>
            <form onSubmit={inscription}>
                <h1>Inscription</h1>

                <div>
                    <label>Nom</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Mot de passe</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="Inscription" />
                </div>
            </form>
        </div>
    )
}

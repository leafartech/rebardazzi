'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function JornadaObrigado() {
    const router = useRouter()
    useEffect(() => {
        router.refresh()
        // router.
    }, [])

    return (
        <div className="w-full h-screen flex justify-center bg-my2">
            <div className="max-w-xl flex flex-col items-center justify-center px-4 sm:px-0">
                <img src="./images/logo.svg" alt="" className="w-32 sm:w-72" />
                <div className="relative border border-my rounded-xl w-full h-7 flex items-center overflow-hidden mt-6">
                    <div className="bg-my6 absolute left-0 text-white w-[90%] h-full font-bold text-center rounded-xl">90%</div>
                </div>
                <div className="flex flex-col gap-3 text-center text-my mt-8">
                    <h1 className="text-2xl font-extrabold">Falta um passo ainda</h1>
                    <p className="sub">Sua inscrição na jornada do Ballet do Zero está quase completa! Para confirmar sua inscrição, é necessário estar no grupo exclusivo para os inscritos no treinamento, lá você receberá os lembretes e avisos prévios de todas nossas aulas ao longo das nossas aulas!</p>
                    <div className="flex justify-center">
                        <a href="https://chat.whatsapp.com/HSsFeYpkYLe4btRr6T0igS" className="font-semibold bg-green-600 text-white sub py-3 rounded-xl w-56">Entrar no grupo vip</a>
                    </div>
                </div>
            </div>
        </div>
    )
} ''
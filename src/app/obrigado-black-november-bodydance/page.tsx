export default function JornadaObrigado() {
    return (
        <div className="w-full h-screen flex justify-center bg-zinc-900">
            <div className="max-w-xl flex flex-col items-center justify-center px-4 sm:px-0">
                <img src="./images/logo3.svg" alt="" className="w-32 sm:w-72" />
                <div className="relative border border-my rounded-xl w-full h-7 flex items-center overflow-hidden mt-6">
                    <div className="bg-[#c85bfc] sub absolute left-0 text-white w-[90%] h-full font-bold text-center rounded-xl">90%</div>
                </div>
                <div className="flex flex-col gap-3 text-center text-white mt-8 sub">
                    <h1 className="text-2xl font-extrabold">Parabéns! Agora resta um último passo...</h1>
                    <p className="sub">Para receber todas as informações da Black November do BodyDance Progress, toque no botão abaixo e entre no Grupo VIP do Whatsapp onde enviaremos todos os avisos e informações 👇👇</p>
                    <div className="flex justify-center">
                        <a href="https://chat.whatsapp.com/LxOVxEzBm0mCWZaaNmfCI4" className="font-semibold bg-green-600 text-white sub py-3 rounded-xl w-56">TOQUE AQUI PARA ENTRAR NO GRUPO VIP</a>
                    </div>
                </div>
            </div>
        </div>
    )
} ''
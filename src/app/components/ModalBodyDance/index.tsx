'use client'
interface ModalProps {
    modal: boolean
    setModal: React.Dispatch<boolean>
}

export default function Modal({ modal, setModal }: ModalProps) {
    var data: any = {};
    if (typeof window !== 'undefined') {
        var query = location.search.slice(1);
        var partes = query.split('&');
        partes.forEach(function (parte) {
            var chaveValor = parte.split('=');
            var chave = chaveValor[0];
            var valor = chaveValor[1];
            data[chave] = valor;
        });
    }

    var apiKey = '53be2cd2bb8d905869263e2c944c03ec';
    fetch(`https://53be2cd2bb8d905869263e2c944c03ec.api.mailchimp.com/3.0/lists/d6c9c23fba/members`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`anystring:${apiKey}`)}`
        },
    })
        .then(response => {
            if (response.status === 200) {
                window.location.href = 'https://rebardazzi.com.br/obrigado-black-november-bodydance';
            } else {
                alert('Houve um erro na inscrição. Por favor, tente novamente.');
            }
        });

    return (
        <div className={`fixed left-0 top-0 w-full h-screen flex justify-center items-center z-50 ${modal ? 'block' : 'hidden'}`}>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60" onClick={() => setModal(!modal)}></div>
            <div id="content"></div>
            <form className="w-[440px] py-12 px-12 z-50 rounded-sm bg-[#750095] validate" action="https://gmail.us13.list-manage.com/subscribe/post?u=f8afbe3d4af930883e1a7e8cd&amp;id=d6c9c23fba&amp;f_id=001609e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
                <h2 className="text-white font-bold text-2xl mb-6 sub">Quase lá...</h2>
                <div className="">
                    <div className="flex flex-col gap-1 mb-2 sub">
                        <label className="text-white">Email</label>
                        <input type="email" name="EMAIL" className="text-sm text-white/70 outline-none bg-transparent border border-zinc-300/40 rounded-full py-2 px-3 w-full" id="mce-EMAIL" required />
                    </div>
                    <div className="flex flex-col gap-1 mb-2 sub">
                        <label className="text-white">Seu primeiro nome</label>
                        <input type="text" name="FNAME" className="text-sm text-white/70 outline-none bg-transparent border border-zinc-300/40 rounded-full py-2 px-3 w-full" id="mce-FNAME" required />
                    </div>
                    <div className="flex flex-col gap-1 mb-2 sub">
                        <label className="text-white">Número do Whatsapp</label>
                        <input type="text" name="PHONE" className="text-sm text-white/70 outline-none bg-transparent border border-zinc-300/40 rounded-full py-2 px-3 w-full" id="mce-PHONE" required />
                    </div>

                    <input type="hidden" name="MMERGE6" className=" text" id="mce-MMERGE6" value={typeof data.utm_campaign !== 'undefined' ? data.utm_campaign : ''}/>
                    <input type="hidden" name="MMERGE7" className=" text" id="mce-MMERGE7" value={typeof data.utm_source !== 'undefined' ? data.utm_source : ''}/>
                    <input type="hidden" name="MMERGE8" className=" text" id="mce-MMERGE8" value={typeof data.utm_medium !== 'undefined' ? data.utm_medium : ''}/>
                    <input type="hidden" name="MMERGE9" className=" text" id="mce-MMERGE9" value={typeof data.utm_content !== 'undefined' ? data.utm_content : ''}/>
                    <input type="hidden" name="MMERGE10" className=" text" id="mce-MMERGE10" value={typeof data.utm_term !== 'undefined' ? data.utm_term : ''}/>
                    <input type="hidden" name="MMERGE3" className=" text" id="mce-MMERGE3" value={'black-bodydance-2023'}/>
                </div>
                <button type="submit" className="mt-4 relative w-full tracking-widest text-base sub flex justify-center items-center py-2 bg-green-600 text-white rounded-full">
                    <span className="uppercase">Inscreva-se</span>
                    <div className="absolute right-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 56 56" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.0963 26.7915L0 26.7921C0.417476 11.9244 12.6011 0 27.5698 0C42.8022 0 55.1506 12.3484 55.1506 27.5808C55.1506 42.8133 42.8022 55.1616 27.5698 55.1616C12.6034 55.1616 0.421284 43.241 0.000196547 28.3765L31.1213 28.3759C29.4815 29.2385 27.9391 30.3865 26.6082 31.6453C25.1817 32.9945 23.9623 34.5036 23.0947 35.9947C22.235 37.4721 21.6826 38.9976 21.6826 40.3649C21.6826 40.8024 22.0373 41.157 22.4748 41.157C22.9123 41.157 23.267 40.8024 23.267 40.3649C23.267 39.3909 23.6744 38.1487 24.4641 36.7916C25.2458 35.4481 26.3653 34.0558 27.6969 32.7963C30.3856 30.2532 33.7961 28.3807 36.8615 28.3807C37.299 28.3807 37.6536 28.0261 37.6536 27.5886C37.6536 27.1511 37.299 26.7964 36.8615 26.7964C33.8192 26.7964 30.4081 24.9455 27.7139 22.4147C26.3795 21.1612 25.256 19.7723 24.4709 18.4253C23.6784 17.0655 23.2669 15.8111 23.2669 14.8123C23.2669 14.3748 22.9123 14.0201 22.4748 14.0201C22.0373 14.0201 21.6826 14.3748 21.6826 14.8123C21.6826 16.2023 22.2373 17.7393 23.1021 19.2231C23.9743 20.7195 25.1991 22.2261 26.6292 23.5695C27.9501 24.8103 29.4767 25.9394 31.0963 26.7915Z" fill="#F0E6DB"></path></svg>
                    </div>
                </button>
            </form >
        </div >
    )
}
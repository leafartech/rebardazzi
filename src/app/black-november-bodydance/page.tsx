'use client'

import { useState } from "react";
import Button2 from "../components/Button2";
import Dropdown from "../components/Dropdown";
import MySwiper from "../components/MySwiper";
import MySwiper2 from "../components/MySwiper2";
import Section from "../components/Section";
import ModalBodyDance from "../components/ModalBodyDance";

export default function page() {
    const [modal, setModal] = useState<boolean>(false)
    
    return (
        <div className="bg-black">
            <header className="back-4 pt-12 sm:pt-24 sm:pb-32 sm:flex sm:justify-center sm:items-start">
                <div className="w-full flex flex-col justify-center items-center max-w-3xl px-4 sm:px-0">
                    <img src="./images/logo3.svg" alt="" className="w-64 sm:w-full sm:max-w-md" />
                    <div className="text-center mt-12 flex flex-col gap-4 items-center">
                        <h1 className="text-xl sm:text-4xl text-white">Receba todas as informações da oferta IMPERDÍVEL de Black November que preparei para você do Método Bodydance Progress tocando no botão abaixo.</h1>
                        <p className="text-sm sm:text-base sub font-light text-white">Você terá acesso a aulas transformadoras que te farão alcançar constância, saúde e um corpo mais bonito através da dança com aulas que poupam seu tempo e podem ser feitas em casa.</p>
                        <Button2 modal={modal} setModal={setModal} />
                    </div>
                </div>
                <img src="./images/bg8.webp" alt="" className="mt-4 sm:hidden" />
            </header>
            <main className="bg-zinc-100">
                <Section classNameS="pb-6 sm:py-12 sm:px-4">
                    <div className="max-w-7xl w-full flex flex-col sm:grid sm:grid-cols-2 items-center pt-5 sm:pt-0">
                        <div className="mb-6 sm:mb-0">
                            <img src="./images/bg9.webp" alt="" className="sm:h-[612px]" />
                        </div>
                        <div className="flex flex-col text-my8 gap-3 sm:px-4">
                            <h2 className="text-my8 text-2xl font-bold sm:text-4xl mb-4">Benefícios BodyDance</h2>
                            <div className="sub flex flex-col text-my8 gap-3 max-w-lg">
                                <p className="sm:font-semibold">Faltando dois meses para o final do ano quero te apresentar o método que já foi responsável pelo emagrecimento de centenas de alunas. </p>
                                <p className="sm:font-semibold">E chegou a vez de você ter acesso a ele em uma promoção especial da Black November que preparei.</p>
                                <p className="sm:font-semibold">O Método BodyDance Progress não é só mais um método de emagrecimento que te coloca em um efeito sanfona.</p>
                                <p className="sm:font-semibold">Ele é feito para ser definitivo.</p>
                                <p className="sm:font-semibold">É feito para que você possa emagrecer e ter um corpo bonito.</p>
                                <p className="sm:font-semibold">É feito para praticar em casa com o espaço que você tiver.</p>
                                <p className="sm:font-semibold">É feito para te acompanhar toda a semana com as aulas semanais e trilhas de conteúdo.</p>
                                <p className="sm:font-semibold">Com ele é possível alcançar perdas de 3 a 5kg em 3 meses ou 10,6kg em 6 meses.</p>
                                <p className="sm:font-semibold">O verdadeiro diferencial desse método que permite esses resultados é a intensidade, os movimentos, a disciplina adquirida e o principal:</p>
                                <p className="sm:font-semibold">A dança.</p>
                                <p className="sm:font-semibold">Não é mais um método comum, é o método que será definitivo para o seu emagrecimento e trará aquele corpo que você sempre sonhou.</p>
                                <p className="sm:font-semibold">A oferta que preparei para você no Método BD Progress na Black November te dará acesso a isso, toque no botão abaixo:</p>
                            </div>
                            <Button2 modal={modal} setModal={setModal} />
                        </div>
                    </div>
                </Section>
                <Section classNameS="bg-black py-12 sm:px-4">
                    <h2 className="text-my8 text-2xl font-bold sm:text-4xl mb-4 text-center sm:text-left sm:hidden">Para quem é o método BodyDance Progress:</h2>
                    <div className="flex flex-col-reverse sm:flex-row">
                        <div className="flex flex-col gap-4 text-white font-semibold sub text-center sm:text-left mt-4 sm:mt-0">
                            <h2 className="text-my8 text-2xl font-bold sm:text-4xl mb-4 text-center sm:text-left hidden sm:block">Para quem é o método BodyDance Progress:</h2>
                            <p>Ou como minha aluna que perdeu 10,5kg em 6 meses.</p>
                            <p>Essa é a transformação que eu quero te possibilitar alcançar através do método Bodydance, sem enrolação e com aulas práticas.</p>
                            <Button2 modal={modal} setModal={setModal} />
                        </div>
                        <div className="">
                            <img src="./images/bg10.webp" alt="" />
                        </div>
                    </div>
                </Section>
                <Section classNameS="bg-my8 py-12">
                    <div className="flex flex-col items-center">
                        <h2 className="text-white text-2xl font-bold sm:text-4xl mb-4 text-center sm:text-left">O que as alunas dizem sobre o BodyDance?</h2>
                        <div className="w-full">
                            <MySwiper />
                        </div>
                        <Button2 modal={modal} setModal={setModal} />
                    </div>
                </Section>
                <Section classNameS="sm:py-12 bg-black">
                    <div className="max-w-7xl w-full flex flex-col sm:grid sm:grid-cols-2 items-center pt-5 sm:pt-0">
                        <div className="mb-6 sm:mb-0">
                            <img src="./images/bg11.webp" alt="" className="sm:h-[612px]" />
                        </div>
                        <div className="flex flex-col text-white gap-3 sm:px-4">
                            <h2 className="text-white text-2xl font-bold sm:text-4xl mb-4">Quem é Renata Bardazzi?</h2>
                            <div className="sub flex flex-col text-white gap-3 max-w-lg">
                                <p className="sm:font-semibold">Você entende que só depois de ter aprendido com lições rígidas de coreógrafos e diretores de companhias de dança e ballet profissional, há 22 anos, posso me sentir capaz de entregar para você a transformação do meu método Body Dance Progress?</p>
                                <p className="sm:font-semibold">Tive minha formação de estudos sobre dança em Dresden, na Alemanha, com 17 anos. Me desenvolvi profissionalmente por um trajeto que passou por 3 companhias profissionais e de impacto no mercado da dança, nesses 22 anos:</p>
                                <p className="sm:font-semibold">-O cisne negro (SP).</p>
                                <p className="sm:font-semibold">-A São Paulo companhia de dança.</p>
                                <p className="sm:font-semibold">-Balé da Cidade de São Paulo/ CIA Oficial do Theatro Municipal, lugar onde danço até hoje!</p>
                                <p className="sm:font-semibold">Não falo isso para você à toa, falo porque esse caminho me permitiu ter a visão única de acreditar que a dança é intensa!</p>
                                <p className="sm:font-semibold">E é isso que vai ser demonstrado, na prática, através do meu método Body Dance Progress para você.</p>
                            </div>
                            <Button2 modal={modal} setModal={setModal} />
                        </div>
                    </div>
                </Section>
                <Section classNameS="hidden sm:flex back-3 py-24" className="flex flex-col items-center">
                    <h2 className="text-white text-2xl font-bold sm:text-4xl mb-4 max-w-2xl text-center">Todas as ferramentas que você precisa para se desenvolver na dança em um só lugar</h2>
                    <div className="rounded-2xl p-12 bg-my8 flex flex-col gap-3 text-white max-w-2xl sub">
                        <p className="sm:font-semibold">O método BodyDance foi pensado para que você possa praticá-lo da forma mais simples e objetiva possível. </p>
                        <p className="sm:font-semibold">Você começa a aplicar e ter os benefícios logo nas primeiras aulas. </p>
                        <p className="sm:font-semibold">Sem enrolação ou conteúdo que não irá te levar a lugar nenhum.</p>
                        <p className="sm:font-semibold">Nele você terá acesso a benefícios que transformarão corpo e mente através da dança. Tudo isso sem precisar sair de casa ou até mesmo perder muito tempo, nossas aulas são semanais e te ajudam a manter o hábito e adquirir constância.</p>
                        <p className="sm:font-semibold">Além de poder voltar a vestir aquele Biquíni que você gosta e melhorar seu condicionamento físico. O BodyDance irá te permitir se sentir Linda, Livre e Leve.</p>
                        <p className="sm:font-semibold">Se você já tomou sua decisão, toque no botão abaixo:</p>
                    </div>
                </Section>
                <Section classNameS="hidden sm:flex sm:py-12 bg-black" className="flex flex-col items-center">
                    <h2 className="text-white text-2xl font-bold mb-4">Essa é a transformação no BodyDance na vida das alunas que aplicam o método:</h2>
                    <div className="w-full">
                        <MySwiper2 />
                    </div>
                </Section>
                <Section classNameS="hidden sm:flex sm:py-12 bg-black" className="flex flex-col items-center">
                    <div className="max-w-2xl rounded-2xl grad px-6 py-12">
                        <h2 className="text-white text-2xl font-bold mb-4">O que você ganha praticando o BD Progress?</h2>
                        <div className="flex flex-col gap-3 text-white sub">
                            <p className="">✅Saúde</p>
                            <p className="">✅Disposição no dia-a-dia</p>
                            <p className="">✅Perca de peso</p>
                            <p className="">✅Tonificação muscular</p>
                            <p className="">✅Autoestima</p>
                            <p className="">✅Extrair o máximo do seu potencial físico</p>
                            <p className="">✅Estilo de vida saudável</p>
                            <p className="">✅Voltar a se sentir bem usando aquela roupa que você gosta</p>
                        </div>
                    </div>
                </Section>
                <Section classNameS="py-12 sm:py-24 bg-black" className="sm:flex sm:flex-col sm:items-center">
                    <h2 className="text-white text-2xl  max-w-lg font-bold sm:text-4xl mb-4 sm:mb-8">Está com alguma dúvida? A resposta pode estar aqui:</h2>
                    <div className="flex flex-col gap-3">
                        <Dropdown
                            title="Como funciona o BodyDance Progress?"
                        >
                            <div className="flex flex-col gap-3">
                                <p className="text-zinc-300 sm:font-semibold">No BodyDance você terá acesso a diversos módulos.</p>
                                <p className="text-zinc-300 sm:font-semibold">Um de Nutrição, um de Fisioterapia e claramente a todas as as nossas aulas do BodyDance Progress onde toda semana você terá a oportunidade de praticar o método comigo.</p>
                                <p className="text-zinc-300 sm:font-semibold">Você conseguirá desenvolver disciplina na dança e alcançar um vida mais saudável ativa através do método.</p>
                            </div>
                        </Dropdown>
                        <Dropdown
                            title="Quais são as formas de pagamento?"
                        >
                            <div className="flex flex-col gap-3">
                                <p className="text-zinc-300 sm:font-semibold">Você pode pagar pelo cartão de crédito em até 12x, à vista pelo PIX e boleto Bancário.</p>
                            </div>
                        </Dropdown>
                        <Dropdown
                            title="Como faço para acessar o curso?"
                        >

                            <div className="flex flex-col gap-3">
                                <p className="text-zinc-300 sm:font-semibold">Você receberá um e-mail da nossa plataforma de vendas, a Kiwify, lá você terá todas as orientações para que possa acessar o conteúdo.</p>

                                <p className="text-zinc-300 sm:font-semibold">Caso não consiga acessar mesmo assim, Clique aqui e mande uma mensagem para minha equipe com sua dúvida.</p>
                            </div>
                        </Dropdown>
                        <Dropdown
                            title="Por quanto tempo tenho acesso às aulas e aos conteúdos disponibilizados?"
                        >

                            <div className="flex flex-col gap-3">
                                <p className="text-zinc-300 sm:font-semibold">Um ano após a compra – com acesso a todas as atualizações</p>
                            </div>
                        </Dropdown>
                        <Dropdown
                            title="Tenho + 40 anos, esse produto é para mim?"
                        >

                            <div className="flex flex-col gap-3">
                                <p className="text-zinc-300 sm:font-semibold">Nunca é tarde para aprender a se amar!</p>
                                <p className="text-zinc-300 sm:font-semibold">Eu, hoje, com 37 anos (quase 40, rs), ainda pratico e busco cada dia mais aperfeiçoar minha técnica, idade não é desculpa.</p>
                            </div>
                        </Dropdown>
                        <Dropdown
                            title="Estou com problemas para efetuar a compra. Com quem eu falo?"
                        >

                            <div className="flex flex-col gap-3">
                                <p><a href="https://api.whatsapp.com/send?phone=5561999025095" className="italic text-red-600">Clique aqui</a> <span className="text-zinc-300 ">e converse diretamente com minha equipe no whatsapp. Eles estão prontos para responder suas dúvidas com atenção e garantir que você não perca essa oportunidade.</span></p>
                            </div>
                        </Dropdown>
                        <Dropdown
                            title="Minha dúvida não está aqui, o que faço?"
                        >
                            <div className="flex flex-col gap-3">
                                <p>
                                    <a href="https://api.whatsapp.com/send?phone=5561999025095" className="italic text-red-600">Clique aqui</a> <span className="text-zinc-300"> e converse diretamente com minha equipe no WhatsApp. Eles estão prontos para responder suas dúvidas com atenção e garantir que você não perca essa oportunidade.</span>
                                </p>
                            </div>
                        </Dropdown>
                    </div>
                </Section>
                <Section classNameS="bg-black pb-6" className="sm:flex sm:flex-col sm:items-center" >
                    <h2 className="text-white text-2xl font-bold sm:text-4xl mb-4 text-center">Dúvidas?</h2>
                    <a href="https://api.whatsapp.com/send?phone=5511984682383" className="text-center relative w-full sm:w-96 font-bold text-sm sm:text-lg sub flex justify-center items-center py-4 px-4 bg-green-600 text-white rounded-full">Clique aqui para falar com meu time no Whatsapp</a>

                </Section>
                <ModalBodyDance modal={modal} setModal={setModal} />
            </main>
        </div>
    )
}
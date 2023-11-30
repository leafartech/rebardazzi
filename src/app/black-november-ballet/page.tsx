'use client'

import { useState } from "react";
import MySwiper from "../components/MySwiper";
import Section from "../components/Section";
import Button3 from "../components/Button3";
import ModalBlackBallet from "../components/ModalBlackBallet";

export default function Page() {
    const [modal, setModal] = useState<boolean>(false)

    return (
        <div className="bg-my3">
            <header className="header-2 pt-12 pb-6 sm:pt-24 sm:pb-32 sm:flex sm:justify-center sm:items-start px-4 sm:px-0">
                <div className="w-full flex flex-col justify-center items-center max-w-3xl">
                    <img src="./images/logo2.svg" alt="" className="w-64 sm:w-full sm:max-w-md" />
                    <div className="text-center mt-12 flex flex-col gap-4 items-center">
                        <h1 className="text-4xl text-my">Essa é sua chance de aprender Ballet com 30 minutos por dia é apenas no espaço da sua casa.</h1>
                        <p className="sub font-semibold text-my6">Receba todas as informações desta oferta IMPERDÍVEL de Black November que preparei para você no Ballet é Alma tocando no botão abaixo 👇🏻
                        </p>
                        <Button3 
                            modal={modal}
                            setModal={setModal}
                        />
                    </div>
                </div>
            </header>
            <main>
                <Section classNameS="back-2">
                    <div className="max-w-7xl w-full flex flex-col sm:grid sm:grid-cols-2 items-center">
                        <div className="mb-6 sm:mb-0">
                            <img src="./images/bg2.webp" alt="" className="sm:h-[712px]" />
                        </div>
                        <div className="flex flex-col text-my gap-3 sm:px-4">
                            <h2 className="text-my text-2xl font-bold sm:text-4xl mb-4">Benefícios: Ballet é Alma</h2>
                            <div className="sub flex flex-col text-my gap-3 max-w-lg">
                                <p className="sm:font-semibold">Lindeza, quero te falar uma coisa muito importante:</p>
                                <p className="sm:font-semibold">O que estou preparando para você é uma oportunidade realmente incrível.</p>
                                <p className="sm:font-semibold">Para mim, O Ballet é Alma é uma jóia rara que algumas pessoas têm a oportunidade de acessar.</p>
                                <p className="sm:font-semibold">E você pode ser a próxima.</p>
                                <p className="sm:font-semibold">Além de ter acesso ao meu método pessoal de Ensino de Ballet, você terá acesso a muitos outros benefícios que o Ballet vai proporcionar para sua vida.</p>
                                <p className="sm:font-semibold">A disciplina fará parte de você.</p>
                                <p className="sm:font-semibold">A confiança irá surgir a cada aula que fizer.</p>
                                <p className="sm:font-semibold">Sua autoestima será como nunca antes.</p>
                                <p className="sm:font-semibold">Até mesmo sua saúde mental será outra ao final do curso.</p>
                                <p className="sm:font-semibold">Eu citei apenas 4 benefícios que o Ballet pode trazer, mas eles são inúmeros.</p>
                                <p className="sm:font-semibold">Se você quer ter acesso a isso e muito mais na Black November Renata Bardazzi, toque no botão abaixo:</p>
                            </div>
                            <Button3 
                                modal={modal}
                                setModal={setModal}
                            />
                        </div>
                    </div>
                </Section>
                <Section classNameS="bg-my4 pt-12 sm:pt-6 pb-12">
                    <div className="sm:pt-12 sm:flex sm:flex-col sm:items-center">
                        <h2 className="text-my text-2xl sm:text-4xl mb-4 font-extrabold">O Ballet é Alma para você que:</h2>
                        <ul className="w-full max-w-3xl rounded-xl flex flex-col gap-2 bg-my7 py-12 px-4 sm:px-12 sub text-my text-lg">
                            <li>→ Iniciantes no Ballet;</li>
                            <li>→ Pessoas que desejam voltar a dançar;</li>
                            <li>→ Para quem quer se sentir jovem novamente;</li>
                            <li>→ Pessoas com +40 anos que desejam aprender a dançar de forma que ela se adapte às limitações;</li>
                            <li>→ Para aqueles que desejam ir do básico ao intermediário;</li>
                        </ul>
                    </div>
                </Section>
                <Section classNameS="py-12 sm:py-16 bg-my">
                    <div className="flex flex-col sm:gap-4 items-center">
                        <h2 className="text-my3 text-2xl sm:text-4xl sm:mb-4">O que minhas alunas dizem sobre Ballet é Alma?</h2>
                        <div className="w-full">
                            <MySwiper />
                        </div>
                        <Button3 
                            modal={modal}
                            setModal={setModal}
                        />
                    </div>
                </Section>
                <Section classNameS="back-2 py-6 sm:py-24">
                    <div className="max-w-7xl w-full flex flex-col sm:grid sm:grid-cols-2 items-center">
                        <div className="">
                            <img src="./images/bg7.webp" alt="" className="sm:h-[712px]" />
                        </div>
                        <div className="flex flex-col text-my gap-3 mt-4 sm:mt-0 sm:px-4">
                            <h2 className="text-my text-2xl sm:text-4xl sm:mb-4 font-extrabold">Quem te guiará?</h2>
                            <div className="sub flex flex-col text-my gap-3 max-w-lg">
                                <p className="sm:font-semibold">Eu aprendi o verdadeiro Ballet Clássico após ter passado pelas mãos de mestres com suas técnicas corretas e nas mãos de grandes coreógrafos e diretores de Companhias de Dança de renome internacional.</p>
                                <p className="sm:font-semibold">Hoje, eu me sinto apta a te ensinar a verdadeira essência do Ballet Clássico. Quero que aprenda a forma correta com muito amor por essa arte.</p>
                                <p className="sm:font-semibold">Eu tive a minha formação de estudos sobre dança em Dresden, na Alemanha, aos 17 anos.</p>
                                <p className="sm:font-semibold">A minha trajetória profissional aconteceu em três Companhias profissionais e internacionais:</p>
                                <p className="sm:font-semibold">Além de ter acesso ao meu método pessoal de Ensino de Ballet, você terá acesso a muitos outros benefícios que o Ballet vai proporcionar para sua vida.</p>
                                <p className="sm:font-semibold">– O Cisne Negro | SP;</p>
                                <p className="sm:font-semibold">– São Paulo Companhia de Dança do Governo do Estado de São Paulo;</p>
                                <p className="sm:font-semibold">– Balé da Cidade de São Paulo | Companhia oficial do Theatro Municipal de São Paulo, onde atuo até hoje.</p>
                                <p className="sm:font-semibold">É a sua chance de ter uma aula comigo e poder contar com toda a minha experiência profissional, usufruindo de todos os benefícios que essa dança e arte incrível pode te oferecer.</p>
                                <p className="sm:font-semibold">Para ter acesso, toque no botão abaixo:</p>
                            </div>
                            <Button3 
                                modal={modal}
                                setModal={setModal}
                            />
                        </div>
                    </div>
                </Section>
                <ModalBlackBallet modal={modal} setModal={setModal} />
            </main>
        </div>
    )
}
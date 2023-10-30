'use client'

import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Section from "../components/Section";

export default function Page() {
  const [modal, setModal] = useState<boolean>(false)

  return (
    <div>
      <header className="header min-h-screen flex justify-center items-center pb-16">
        <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-4 sm:grid sm:grid-cols-2 sm:gap-0 text-my px-4 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start sm:justify-start pt-6 sm:max-w-xl">
            <img src="./images/logo.svg" alt="" className="w-32 sm:w-72" />
            <h1 className="text-2xl sm:text-3xl font-extrabold my-4 sm:my-6">Aprenda Ballet Clássico do Zero com Renata Bardazzi, bailarina do Theatro Municipal de São Paulo e uma das maiores da atualidade.</h1>
            <p className="sub mb-3">Nunca foi tão fácil aprender o Ballet de uma forma simples e com qualquer idade, sem tomar horas do seu dias, muito menos necessitando de mais que um espaço na sua casa.</p>
            <Button setModal={setModal} modal={modal}/>
          </div>
          <div className="sm:flex sm:justify-end">
            <img src="./images/bg.webp" alt="" className="sm:h-[664px]" />
          </div>
        </div>
      </header>
      <main className="bg-my4 overflow-hidden">
        <Section classNameS="bg-my2 pt-12 pb-24">
          <div className="text-center sm:flex sm:flex-col sm:items-center">
            <h2 className="text-my font-extrabold text-2xl sm:text-3xl mb-4 sm:max-w-xl">Um treinamento 100% online e gratuito de 3 dias, onde você irá aprender Ballet ao meu lado.</h2>
            <p className="sub text-my sm:max-w-xl">Mesmo que você seja iniciante aprenderá comigo a realizar os principais movimentos do ballet clássico, alcançando saúde e definição.</p>
          </div>
        </Section>
        <Section classNameS="z-10">
          <div className="-translate-y-20 sm:-translate-y-20 sm:grid sm:grid-cols-2 sm:items-center">
            <img src="./images/bg2.webp" alt="" />
            <div className="bg-my3 sm:h-[664px] text-my sm:translate-y-20 px-4 sm:px-24 -translate-y-6 pt-12 pb-6">
              <h2 className="font-extrabold text-2xl sm:text-3xl mb-4">O ballet é a dança mais praticada de todos os tempos</h2>
              <div className="flex flex-col gap-2">
                <p className="sub">Além dos benefícios que ele trás ao corpo, o Ballet não incorpora somente isso a sua vida, ele traz:</p>
                <ul className="list-disc ps-5 sub">
                  <li>Disciplina</li>
                  <li>Confiança</li>
                  <li>Alivia o estresse</li>
                  <li>Autoestima</li>
                  <li>Saúde mental</li>
                </ul>
                <p className="sub">Na jornada Ballet do zero irei caminhar ao seu lado mostrando exatamente o passo a passo do Ballet Clássico para que você conheça todos os elementos essenciais que compõem esse estilo de dança que transformou a minha vida e agora pode mudar a sua também.</p>
                <Button setModal={setModal} modal={modal} />
              </div>
            </div>
          </div>
        </Section>
        <Section className="-translate-y-10" classNameS="bg-my-4">
          <div className="absolute -left-6 -top-24 -rotate-[4deg] h-16 w-[120%] bg-my2"></div>
          <div className="w-full flex flex-col sm:grid sm:grid-cols-2 sm:pt-16 sm:pb-32">
            <div className="sm:px-12 -z-10">
              <h2 className="text-my font-extrabold text-2xl sm:text-3xl mb-4">O que você irá aprender:</h2>
              <ul className="list-disc ps-5">
                <li className="sub text-my">Técnica do Ballet.</li>
                <li className="sub text-my">Sequências de dança.</li>
                <li className="sub text-my">Como ter Disciplina.</li>
                <li className="sub text-my">O caminho para aprender Ballet.</li>
                <li className="sub text-my">Os maiores desafios para aprender (e como se livrar).</li>
                <li className="sub text-my">Um modo de dança que se adapta a todas as idades.</li>
              </ul>
            </div>
            <div className="absolute right-0 bottom-0">
              <img src="./images/bg3.webp" alt="" className="w-[624px]" />
            </div>
          </div>
        </Section>
        <Section classNameS="bg-my py-12" className="sm:flex sm:justify-center">
          <div className="max-w-xl">
            <h2 className="text-my3 font-extrabold text-2xl sm:text-3xl mb-4">Para quem é</h2>
            <ul className="list-disc ps-5">
              <li className="sub text-my3">Iniciantes no Ballet </li>
              <li className="sub text-my3">Pessoas que desejam voltar a dançar </li>
              <li className="sub text-my3">Para quem quer se sentir jovem novamente</li>
              <li className="sub text-my3">Pessoas com +40 anos que desejam aprender a dançar de forma que ela se adapte às limitações</li>
              <li className="sub text-my3">Para aqueles que desejam ir do básico ao intermediário</li>
            </ul>
          </div>
        </Section>
        <Section classNameS="py-12 sm:py-0" className="sm:flex sm:flex-col sm:items-center sm:pb-16">
          <img src="./images/bg4.webp" alt="" className="absolute sm:relative left-0 top-0 w-full" />
          <div className="sm:px-24">
            <h2 className="text-my font-extrabold text-2xl sm:text-3xl mb-4 mt-32 sm:mt-8">Para quem é</h2>
            <p className="sub text-my mb-3">Sabe quando eu aprendi de verdade o Ballet Clássico? Somente após ter passado pelas mãos de mestres com suas técnicas corretas e nas mãos de grandes coreógrafos e diretores de Companhias de Dança de renome internacional.</p>
            <p className="sub text-my mb-3">Hoje, eu me sinto apta a te ensinar a verdadeira essência do Ballet Clássico. Quero que aprenda a forma correta com muito amor por essa arte.</p>
            <p className="sub text-my mb-3">Eu tive a minha formação de estudos sobre dança em Dresden, na Alemanha, aos 17 anos. A minha trajetória profissional aconteceu em três Companhias profissionais e internacionais:</p>
            <ul className="list-decimal ps-5 mb-3">
              <li className="sub text-my">O Cisne Negro | SP; </li>
              <li className="sub text-my">São Paulo Companhia de Dança do Governo do Estado de São Paulo;</li>
              <li className="sub text-my">Balé da Cidade de São Paulo | Companhia oficial do Theatro Municipal de São Paulo, onde atuo até hoje;</li>
            </ul>
            <p className="sub text-my mb-3">
              É a sua chance de ter uma aula comigo e poder contar com toda a minha experiência profissional, usufruindo de todos os benefícios que essa arte incrível pode te oferecer.
            </p>
            <p className="sub text-my mb-3">Inscreva-se tocando no botão abaixo.</p>
            <Button setModal={setModal} modal={modal} />
          </div>
        </Section>
        {/* <Forms /> */}
        <Modal modal={modal} setModal={setModal} />
      </main>
    </div>
  )
}
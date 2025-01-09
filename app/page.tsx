"use client";
import React from "react";

import SortRoundedIcon from "@mui/icons-material/SortRounded";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import Link from "next/link";
//import { useAuth } from "@clerk/nextjs";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";

import DrawIcon from "@mui/icons-material/Draw";
import Image from "next/image";
function page() {
  return (
    <div className="poppins">
      <Navbar />
      <CTASection />
      <Features />
    </div>
  );

  function Features() {
    const features = [
      {
        id: 4,
        name: "Gerenciamento de Projetos e Tarefas Sem Esforço",
        icon: <ListAltRoundedIcon className="text-orange-600 text-[32px]" />,
        description: ` Crie, edite e exclua projetos e tarefas com facilidade. Use classificação, filtragem e abas para manter seu espaço de trabalho organizado.`,
      },
      {
        id: 5,
        name: "Interface Dinâmica com Design Responsivo",
        icon: <DevicesRoundedIcon className="text-orange-600 text-[32px]" />,
        description: ` Navegue por um painel responsivo e páginas de tarefas que se adaptam a qualquer tamanho de tela. Abra e feche barras laterais, menus suspensos e menus intuitivamente, aumentando sua produtividade.`,
      },
      {
        id: 6,
        name: "Classificação Avançada de Tarefas e Acompanhamento de Progresso",
        icon: <SortRoundedIcon className="text-orange-600 text-[32px]" />,
        description: ` Acompanhe tarefas em andamento e concluídas, alterne entre abas e classifique tarefas ou projetos com base em status, prioridade ou data para manter-se no controle de sua carga de trabalho.`,
      },
    ];

    return (
      <section className=" py-12 bg-slate-50 mt-12 px-9">
        <div className=" mx-auto px-4 ">
          <h2 className="text-2xl font-bold text-center ">
            Principais Funcionalidades
          </h2>
          {/*  */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 px-10 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" p-6 bg-white rounded-lg shadow-sm flex flex-col items-center "
              >
                <div className="w-20 h-20 rounded-full items-center justify-center flex bg-orange-100">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-orange-600 mt-6 text-center">
                  {feature.name}
                </h3>
                <p className="text-slate-600 text-[13px] mt-2 text-center w-[80%]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function CTASection() {
    return (
      <div className="flex flex-col mx-16 items-center mt-[120px] gap-6 ">
        {/*  */}
        <h2 className="font-bold text-2xl text-center">
          Gerencie seus projetos e tarefas
          <span className={`text-orange-600`}> Facilmente!</span>
        </h2>
        {/*  */}
        <p className="text-center text-[15px] w-[510px] max-sm:w-full text-slate-500 ">
          Tome o controle total de seus projetos hoje – comece a adicionar
          tarefas, classificar suas prioridades e acompanhar o progresso com
          facilidade. Mantenha-se organizado e aumente sua produtividade sem
          esforço!
        </p>

        <button
          className={`block bg-orange-600 rounded-md  px-9 py-3 text-sm font-medium text-white hover:bg-orange-600    `}
          type="button"
        >
          {`Vamos começar!`}
        </button>

        <Image
          src="/app.png"
          alt="dashboard"
          width={900}
          height={400}
          className="shadow-xl mt-9 aspect-auto sm:w-auto w-[398px] rounded-lg max-w-full   sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
        />
      </div>
    );
  }
}

function Navbar() {
  return (
    <nav className="flex m-7 p-2 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col  ">
      <Logo />
      <Buttons />
    </nav>
  );

  function Logo() {
    return (
      <div className="flex gap-2 items-center">
        {/* Icon Container */}

        {/* Icon */}

        <TaskAltIcon sx={{ fontSize: 34 }} className="text-orange-600  " />

        {/* App Name */}
        <div className="flex gap-1 text-[22px] ">
          <span className={`font-bold text-orange-600`}>Gestão </span>
          <span className="text-slate-600">de Projetos</span>
        </div>
      </div>
    );
  }

  function Buttons() {
    //const { userId } = useAuth();
    const userId = "1000";
    return (
      <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8">
        {!userId ? (
          <>
            <Link href="/sign-in">
              <button
                className={` max-sm:w-full text-sm border border-orange-600 text-white bg-orange-600 
 p-[8px] px-6 rounded-md `}
              >
                Sign In
              </button>
            </Link>

            <Link href="/sign-up">
              <button
                className={` max-sm:w-full text-sm border border-orange-600 text-orange-600 
hover:bg-orange-600 hover:text-white p-[8px] px-6 rounded-md `}
              >
                Sign Up
              </button>
            </Link>
          </>
        ) : (
          <Link href="/dashboard">
            <button
              className={` max-sm:w-full text-sm border bg-orange-600 text-white
hover:bg-orange-600 hover:text-white p-[8px] px-6 rounded-md `}
            >
              Dashboard
            </button>
          </Link>
        )}
      </div>
    );
  }
}

export default page;

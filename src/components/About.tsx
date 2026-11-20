import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import portfolioImage from '../imagens/mirelly_foto.png';

const profilePhoto = portfolioImage;
export default function About() {
  const { language } = useLanguage();

  return (
    <section id="sobre" className="py-32 px-6 bg-[#0c0c0c] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <span className="text-[40vw] font-black absolute -top-[10vw] -left-[5vw] leading-none">{language === 'pt' ? 'SOBRE' : 'ABOUT'}</span>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden group"
        >
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-2/3 h-2/3 border border-[#FF00FF]/20 rounded-full animate-[spin_20s_linear_infinite]" />
             <div className="absolute w-1/2 h-1/2 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>
          <img 
            src={profilePhoto} 
            alt="Mirelly Alvarenga" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" 
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="text-[#FF00FF] font-mono text-xs uppercase tracking-[0.3em]">{language === 'pt' ? 'Perfil Profissional' : 'Professional Profile'}</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            {language === 'pt' ? 'Dados de ponta a ponta: do pipeline ao dashboard.' : 'End-to-end data: from pipeline to dashboard.'}
          </h2>

          <div className="space-y-6 text-white/60 leading-relaxed max-w-lg text-lg">
            <p>
              {language === 'pt' ? (
                <>Sou <strong className="text-white">Mirelly Pego Cordeiro de Alvarenga</strong>, graduanda em Engenharia de Software pela PUC Minas, com formação técnica em Informática pelo IFMG, e atuação na área de dados.</>
              ) : (
                <>I am <strong className="text-white">Mirelly Pego Cordeiro de Alvarenga</strong>, a Software Engineering student at PUC Minas with a technical degree in Informatics from IFMG, working in the data field.</>
              )}
            </p>
            <p>
              {language === 'pt'
                ? 'Trabalho com dados de ponta a ponta: desenvolvo pipelines de ETL, modelo e mantenho data warehouses em PostgreSQL e crio relatórios e modelos semânticos no Power BI, com foco em performance. Gosto de transformar dados brutos em informação confiável para a tomada de decisão.'
                : 'I work with data end to end: I build ETL pipelines, model and maintain data warehouses in PostgreSQL, and create reports and semantic models in Power BI with a focus on performance. I enjoy turning raw data into reliable information for decision-making.'}
            </p>
            <p>
              {language === 'pt'
                ? 'Minha experiência anterior em desenvolvimento de software me ajuda a entender como os dados nascem nos sistemas e a construir soluções mais completas.'
                : 'My previous experience in software development helps me understand how data is born inside systems and build more complete solutions.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

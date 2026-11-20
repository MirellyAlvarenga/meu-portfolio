import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

export default function Experience() {
  const { language } = useLanguage();
  const pt = language === 'pt';

  const experiences = [
    {
      role: pt ? 'Analista de Dados Júnior' : 'Junior Data Analyst',
      company: 'dti digital',
      type: pt ? 'Tempo integral · Híbrido' : 'Full-time · Hybrid',
      period: pt ? 'Ago 2026 - Presente' : 'Aug 2026 - Present',
      details: pt ? [
        'Desenvolvimento de pipelines de ETL e modelagem de data warehouses em PostgreSQL.',
        'Criação de relatórios e modelos semânticos no Power BI, com foco em performance.',
        'Transformação de dados brutos em informação confiável para a tomada de decisão.'
      ] : [
        'Building ETL pipelines and modeling data warehouses in PostgreSQL.',
        'Creating Power BI reports and semantic models with a focus on performance.',
        'Turning raw data into reliable information for decision-making.'
      ],
      tags: ['Power BI', pt ? 'Engenharia de Dados' : 'Data Engineering', 'PostgreSQL']
    },
    {
      role: pt ? 'Estágio em Análise de Dados' : 'Data Analysis Intern',
      company: 'dti digital',
      type: pt ? 'Estágio · Híbrido' : 'Internship · Hybrid',
      period: pt ? 'Ago 2024 - Ago 2026' : 'Aug 2024 - Aug 2026',
      details: pt ? [
        'Consultas e análises em SQL para apoiar as áreas de negócio.',
        'Construção de dashboards e indicadores no Power BI.'
      ] : [
        'SQL queries and analyses supporting business teams.',
        'Building dashboards and KPIs in Power BI.'
      ],
      tags: ['SQL', pt ? 'Análise de Dados' : 'Data Analysis', 'Power BI']
    },
    {
      role: pt ? 'Desenvolvimento de Software' : 'Software Development',
      company: pt ? 'Experiência anterior' : 'Previous experience',
      type: 'Web',
      period: pt ? 'Anterior' : 'Previous',
      details: pt ? [
        'Desenvolvimento back-end utilizando Java.',
        'Desenvolvimento front-end com o framework Angular.'
      ] : [
        'Back-end development using Java.',
        'Front-end development with the Angular framework.'
      ],
      tags: ['Java', 'Angular']
    }
  ];

  return (
    <section id="experiencia" className="py-32 px-6 bg-[#0a0a0a] relative">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-4">
            <span className="text-[#FF00FF] font-mono text-xs uppercase tracking-[0.3em]">02 / {pt ? 'Experiência' : 'Experience'}</span>
            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">{pt ? 'Experiência Profissional' : 'Professional Experience'}</h2>
          </div>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-b border-white/5 py-12 flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-10 items-start md:items-center hover:bg-white/[0.02] px-4 -mx-4 transition-colors"
              >
                <span className="text-white/30 font-mono text-sm">{exp.period}</span>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-[#FF00FF] transition-colors">{exp.role}</h3>
                    <p className="text-white/50 text-lg">
                      {exp.company} <span className="text-white/30 text-base">· {exp.type}</span>
                    </p>
                  </div>
                  <ul className="text-white/50 space-y-2 text-sm list-disc list-inside">
                    {exp.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end w-full">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] uppercase tracking-widest text-[#FF00FF]/70 border border-[#FF00FF]/20 rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

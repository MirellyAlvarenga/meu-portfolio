import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

export default function Skills() {
  const { language } = useLanguage();
  const pt = language === 'pt';

  const categories = [
    {
      title: pt ? 'Engenharia de Dados' : 'Data Engineering',
      description: pt ? 'Pipelines, modelagem e orquestração.' : 'Pipelines, modeling, and orchestration.',
      skills: ['Python', 'SQL', 'dbt Core', 'Apache Airflow', 'Docker', 'PostgreSQL', 'DuckDB', 'Apache Parquet', 'Databricks', 'Pentaho', 'GitHub Actions']
    },
    {
      title: pt ? 'BI & Análise' : 'BI & Analytics',
      description: pt ? 'Da consulta à decisão.' : 'From query to decision.',
      skills: [
        'Power BI',
        'Streamlit',
        'Plotly',
        pt ? 'Modelos Semânticos' : 'Semantic Models',
        pt ? 'Modelagem Dimensional' : 'Dimensional Modeling',
        'Excel',
        pt ? 'Estatística' : 'Statistics',
        pt ? 'Visualização de Dados' : 'Data Visualization'
      ]
    },
    {
      title: pt ? 'Automação & Desenvolvimento' : 'Automation & Development',
      description: pt ? 'Processos e software.' : 'Processes and software.',
      skills: ['Pipefy', 'Power Platform', 'Power Apps', 'Java', 'Angular', 'Git']
    },
    {
      title: pt ? 'Soft Skills & Idiomas' : 'Soft Skills & Languages',
      description: pt ? 'Como eu trabalho.' : 'How I work.',
      skills: [
        pt ? 'Pensamento Analítico' : 'Analytical Thinking',
        pt ? 'Comunicação' : 'Communication',
        pt ? 'Pensamento Crítico' : 'Critical Thinking',
        pt ? 'Inglês (Profissional)' : 'English (Professional)',
        pt ? 'Português (Nativo)' : 'Portuguese (Native)'
      ]
    }
  ];

  return (
    <section id="competencias" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 mb-16 text-center">
          <span className="text-[#FF00FF] font-mono text-xs uppercase tracking-[0.3em]">04 / {pt ? 'Competências' : 'Skills'}</span>
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">{pt ? 'Minhas Competências' : 'My Skills'}</h2>
          <p className="max-w-2xl mx-auto text-white/50 text-base lg:text-lg">
            {pt
              ? 'Ferramentas que uso para levar o dado da origem até a decisão: ingestão, modelagem, qualidade e visualização.'
              : 'The tools I use to take data from its source to a decision: ingestion, modeling, quality, and visualization.'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="rounded-3xl border border-white/10 bg-[#111111] p-8 hover:border-[#FF00FF]/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              <p className="text-white/40 text-sm mt-1 mb-6">{category.description}</p>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:border-[#FF00FF] hover:text-[#FF00FF] transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

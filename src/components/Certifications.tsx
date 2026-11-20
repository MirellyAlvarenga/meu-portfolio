import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

export default function Certifications() {
  const { language } = useLanguage();
  const pt = language === 'pt';
  const oct = pt ? 'Out 2026' : 'Oct 2026';

  const certifications = [
    {
      name: 'Databricks Fundamentals',
      issuer: 'Databricks',
      date: oct,
      description: pt
        ? 'Arquitetura lakehouse, Delta Lake, governança com Unity Catalog e recursos de análise e IA da plataforma.'
        : "Lakehouse architecture, Delta Lake, governance with Unity Catalog, and the platform's analytics and AI features."
    },
    {
      name: pt ? 'Introdução à Power Platform' : 'Introduction to Power Platform',
      issuer: 'VICO Treinamentos',
      date: oct,
      description: pt ? 'Microsoft Power Platform e Power Apps.' : 'Microsoft Power Platform and Power Apps.'
    },
    {
      name: 'Intro to SQL',
      issuer: 'Kaggle',
      date: oct,
      description: pt
        ? 'Consultas SQL em grandes bases públicas no BigQuery: filtros, agregações, CTEs e JOINs.'
        : 'SQL queries on large public datasets in BigQuery: filtering, aggregations, CTEs, and JOINs.'
    },
    {
      name: 'Data Visualization and Presentation',
      issuer: 'IBM',
      date: oct,
      description: pt
        ? 'Storytelling com dados, visualizações e dashboards, coleta de feedback e documentação.'
        : 'Data storytelling, visualizations and dashboards, user feedback, and documentation.'
    },
    {
      name: 'Data Preparation for Analysis',
      issuer: 'IBM',
      date: oct,
      description: pt
        ? 'Preparação de múltiplos conjuntos de dados: subdivisão, junção e análise de impacto.'
        : 'Preparing multiple datasets: subdividing, joining, and assessing impact.'
    },
    {
      name: 'Data Collection and Analysis',
      issuer: 'IBM',
      date: oct,
      description: pt
        ? 'As cinco etapas da análise: preparar, coletar, limpar, analisar e interpretar dados.'
        : 'The five steps of analysis: prepare, gather, clean, analyze, and interpret data.'
    },
    {
      name: 'Introduction to Inferential and Descriptive Statistics',
      issuer: 'IBM',
      date: oct,
      description: pt
        ? 'Distribuições, amostragem e estatística descritiva e inferencial para recomendações baseadas em dados.'
        : 'Distributions, sampling, and descriptive and inferential statistics for data-driven recommendations.'
    },
    {
      name: 'Data Usability for Organizations',
      issuer: 'IBM',
      date: oct,
      description: pt
        ? 'Usabilidade de dados conforme requisitos organizacionais e princípios de automação.'
        : 'Data usability for organizational requirements and data automation principles.'
    },
    {
      name: 'Data Classification',
      issuer: 'IBM',
      date: oct,
      description: pt
        ? 'Análise de dados por origem e tipo e refinamento de conjuntos de dados.'
        : 'Analyzing data by source and type and refining datasets.'
    },
    {
      name: 'Data Fundamentals',
      issuer: 'IBM',
      date: pt ? 'Set 2026' : 'Sep 2026',
      description: pt
        ? 'Ciclo de vida dos dados: coleta, armazenamento, modelagem, análise visual e SQL em bancos relacionais.'
        : 'Data lifecycle: collection, storage, modeling, visual analysis, and SQL on relational databases.'
    },
    {
      name: 'Pipefy Process Automation',
      issuer: 'Pipefy',
      date: pt ? 'Abr 2026' : 'Apr 2026',
      description: pt
        ? 'Automação de workflows com gatilhos e ações, requisições HTTP para integrações e fórmulas automatizadas.'
        : 'Workflow automation with triggers and actions, HTTP requests for integrations, and automated formulas.'
    }
  ];

  return (
    <section id="certificacoes" className="py-32 px-6 bg-[#0c0c0c]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 mb-16 text-center">
          <span className="text-[#FF00FF] font-mono text-xs uppercase tracking-[0.3em]">05 / {pt ? 'Certificações' : 'Certifications'}</span>
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">{pt ? 'Certificações' : 'Certifications'}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-[#111111] p-6 hover:border-[#FF00FF]/60 transition-colors"
            >
              <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest">
                <span className="text-[#FF00FF]">{cert.issuer}</span>
                <span className="text-white/30 shrink-0">{cert.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{cert.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

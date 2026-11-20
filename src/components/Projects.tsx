import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

// Coloque aqui o link do repositório no GitHub para exibir o botão "Ver no GitHub".
const REPO_URL = '';

export default function Projects() {
  const { language } = useLanguage();
  const pt = language === 'pt';

  const highlights = pt ? [
    { title: 'Ingestão incremental & resiliência', text: 'Extratores em Python (httpx, SQLAlchemy) com paginação automática, exponential backoff, cache de CNPJs e controle de watermark via tabela de auditoria (audit.pipeline_runs).' },
    { title: 'Arquitetura Medallion & modelagem dimensional', text: 'Camadas Bronze (JSONB bruto), Silver (carga incremental delete+insert no dbt Core) e Gold (Star Schema com 4 dimensões e 2 tabelas fato em PostgreSQL).' },
    { title: 'Data quality na fonte', text: 'Detecção e isolamento de outliers de digitação em portais públicos via flag booleana (is_outlier_valor), testes unitários com pytest e testes singulares/schema no dbt.' },
    { title: 'Orquestração & CI/CD', text: 'Pipeline containerizado com Docker Compose, DAG granular por tarefas no Apache Airflow e automação CI/CD + catálogo interativo (dbt docs) no GitHub Actions.' },
    { title: 'Visualização executiva', text: 'Dashboard de 3 páginas no Power BI versionado em formato .pbip: Panorama de Mercado, Inteligência de Pricing & Deságio e Market Share de Fornecedores.' }
  ] : [
    { title: 'Incremental ingestion & resilience', text: 'Python extractors (httpx, SQLAlchemy) with automatic pagination, exponential backoff, CNPJ caching, and watermark control through an audit table (audit.pipeline_runs).' },
    { title: 'Medallion architecture & dimensional modeling', text: 'Bronze (raw JSONB), Silver (incremental delete+insert loads in dbt Core), and Gold (Star Schema with 4 dimensions and 2 fact tables in PostgreSQL) layers.' },
    { title: 'Data quality at the source', text: 'Detection and isolation of typing outliers from public portals via a boolean flag (is_outlier_valor), unit tests with pytest, and singular/schema tests in dbt.' },
    { title: 'Orchestration & CI/CD', text: 'Containerized pipeline with Docker Compose, a task-granular DAG in Apache Airflow, and CI/CD automation + interactive catalog (dbt docs) on GitHub Actions.' },
    { title: 'Executive visualization', text: '3-page Power BI dashboard versioned as .pbip: Market Overview, Pricing & Discount Intelligence, and Supplier Market Share.' }
  ];

  const stack = ['Python', 'dbt Core', 'Apache Airflow', 'PostgreSQL', 'Docker', 'GitHub Actions', 'pytest', 'Power BI'];

  return (
    <section id="projetos" className="py-32 px-6 bg-[#0c0c0c]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-[#FF00FF] font-mono text-xs uppercase tracking-[0.3em]">03 / {pt ? 'Projetos' : 'Projects'}</span>
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">{pt ? 'Projeto em Destaque' : 'Featured Project'}</h2>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-[#111111] p-8 lg:p-12 hover:border-[#FF00FF]/50 transition-colors"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <h3 className="text-3xl lg:text-5xl font-black tracking-tight">B2G Market Radar</h3>
              <p className="text-[#FF00FF] font-mono text-sm uppercase tracking-widest mt-3">
                {pt ? 'Plataforma end-to-end de Engenharia de Dados & BI' : 'End-to-end Data Engineering & BI platform'}
              </p>
            </div>
            {REPO_URL ? (
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="self-start px-6 py-3 border border-[#FF00FF] text-[#FF00FF] rounded-full font-mono text-xs uppercase tracking-widest hover:bg-[#FF00FF] hover:text-black transition-all"
              >
                {pt ? 'Ver no GitHub' : 'View on GitHub'}
              </a>
            ) : null}
          </div>

          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mb-10">
            {pt
              ? 'Plataforma completa que ingere, enriquece, modela e visualiza dados abertos de licitações e contratos públicos do PNCP (Portal Nacional de Contratações Públicas) e da BrasilAPI.'
              : "A complete platform that ingests, enriches, models, and visualizes open data on public tenders and contracts from PNCP (Brazil's National Public Procurement Portal) and BrasilAPI."}
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/5 bg-black/30 p-6">
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-white/60">
                {tech}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}

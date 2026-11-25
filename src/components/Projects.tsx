import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

type Highlight = { title: string; text: string };

type Project = {
  name: string;
  subtitle: string;
  description: string;
  highlights: Highlight[];
  stack: string[];
  // Links opcionais: o botão só aparece quando o link estiver preenchido.
  repoUrl?: string;
  demoUrl?: string;
};

export default function Projects() {
  const { language } = useLanguage();
  const pt = language === 'pt';

  const projects: Project[] = [
    {
      name: 'Climate Data Lake',
      subtitle: pt ? 'Séries temporais & análise climática' : 'Time series & climate analysis',
      description: pt
        ? 'Pipeline end-to-end de engenharia e análise de dados meteorológicos sobre arquitetura Medalhão, com mais de uma década de séries diárias (2016–2026) de 5 capitais brasileiras: Belo Horizonte, São Paulo, Rio de Janeiro, Manaus e Porto Alegre. Responde a tendências térmicas de longo prazo, anomalias climatológicas e regimes sazonais.'
        : 'End-to-end weather data engineering and analytics pipeline built on a Medallion architecture, covering over a decade of daily series (2016–2026) for 5 Brazilian state capitals: Belo Horizonte, São Paulo, Rio de Janeiro, Manaus, and Porto Alegre. It answers questions about long-term temperature trends, climate anomalies, and seasonal patterns.',
      highlights: pt ? [
        { title: 'Extração resiliente', text: 'Ingestão da Open-Meteo API em Python com exponential backoff + jitter para HTTP 429 e checkpointing idempotente para evitar reprocessamento.' },
        { title: 'Data lake em Parquet', text: 'Bronze com JSON bruto e metadados UTC, Silver em Parquet Snappy particionado estilo Hive (cidade/ano) e Gold com tabelas analíticas leves (< 1 MB).' },
        { title: 'SQL analítico no DuckDB', text: 'Partition pruning, predicate pushdown, médias móveis de 7 e 30 dias com window functions e recordes históricos com ARG_MAX / ARG_MIN.' },
        { title: 'Gates de qualidade', text: 'Pytest valida estações do Hemisfério Sul, deduplicação, ausência de nulos nas janelas móveis e limites físicos (máx ≥ mín, chuva não negativa).' },
        { title: 'Dashboard na nuvem', text: 'Relatório interativo em Streamlit + Plotly com KPIs e conclusões dinâmicas, publicado no Streamlit Community Cloud sem banco externo.' }
      ] : [
        { title: 'Resilient extraction', text: 'Python ingestion from the Open-Meteo API with exponential backoff + jitter for HTTP 429 and idempotent checkpointing to avoid reprocessing.' },
        { title: 'Parquet data lake', text: 'Bronze with raw JSON and UTC metadata, Silver in Hive-partitioned (city/year) Snappy Parquet, and Gold with lightweight analytical tables (< 1 MB).' },
        { title: 'Analytical SQL in DuckDB', text: 'Partition pruning, predicate pushdown, 7- and 30-day moving averages with window functions, and historical records with ARG_MAX / ARG_MIN.' },
        { title: 'Quality gates', text: 'Pytest checks Southern Hemisphere seasons, deduplication, no nulls in moving windows, and physical limits (max ≥ min, non-negative rainfall).' },
        { title: 'Cloud dashboard', text: 'Interactive Streamlit + Plotly report with KPIs and dynamic conclusions, deployed on Streamlit Community Cloud with no external database.' }
      ],
      stack: ['Python', 'Pandas', 'PyArrow', 'Apache Parquet', 'DuckDB', 'pytest', 'Streamlit', 'Plotly'],
      repoUrl: 'https://github.com/MirellyAlvarenga/climate-data-lake',
      demoUrl: 'https://mirelly-climate-data-lake.streamlit.app'
    },
    {
      name: 'B2G Market Radar',
      subtitle: pt ? 'Plataforma end-to-end de Engenharia de Dados & BI' : 'End-to-end Data Engineering & BI platform',
      description: pt
        ? 'Plataforma completa que ingere, enriquece, modela e visualiza dados abertos de licitações e contratos públicos do PNCP (Portal Nacional de Contratações Públicas) e da BrasilAPI.'
        : "A complete platform that ingests, enriches, models, and visualizes open data on public tenders and contracts from PNCP (Brazil's National Public Procurement Portal) and BrasilAPI.",
      highlights: pt ? [
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
      ],
      stack: ['Python', 'dbt Core', 'Apache Airflow', 'PostgreSQL', 'Docker', 'GitHub Actions', 'pytest', 'Power BI'],
      // Coloque aqui o link do repositório no GitHub para exibir o botão "Ver no GitHub".
      repoUrl: ''
    }
  ];

  return (
    <section id="projetos" className="py-32 px-6 bg-[#0c0c0c]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <span className="text-[#FF00FF] font-mono text-xs uppercase tracking-[0.3em]">03 / {pt ? 'Projetos' : 'Projects'}</span>
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">{pt ? 'Projetos em Destaque' : 'Featured Projects'}</h2>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-[#111111] p-8 lg:p-12 hover:border-[#FF00FF]/50 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-3xl lg:text-5xl font-black tracking-tight">{project.name}</h3>
                  <p className="text-[#FF00FF] font-mono text-sm uppercase tracking-widest mt-3">{project.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-[#FF00FF] text-black rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,0,255,0.4)] transition-all"
                    >
                      {pt ? 'Ver Dashboard' : 'View Dashboard'}
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 border border-[#FF00FF] text-[#FF00FF] rounded-full font-mono text-xs uppercase tracking-widest hover:bg-[#FF00FF] hover:text-black transition-all"
                    >
                      {pt ? 'Ver no GitHub' : 'View on GitHub'}
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="text-white/60 text-lg leading-relaxed max-w-3xl mb-10">{project.description}</p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
                {project.highlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/5 bg-black/30 p-6">
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-white/60">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

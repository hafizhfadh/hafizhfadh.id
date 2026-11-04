export interface TechCategory {
	category: string;
	tag: string;
	description: string;
	skills: string[];
}

export const techEcosystem: TechCategory[] = [
	{
		category: 'Database Engineering',
		tag: 'DATA // STORAGE // OPTIMIZATION',
		description:
			'Deep query plan analysis, indexing strategies, concurrency tuning, and high-availability operations across relational and in-memory databases.',
		skills: [
			'PostgreSQL',
			'MySQL',
			'MariaDB',
			'Redis',
			'MongoDB',
			'Query Optimization',
			'Execution Plan Analysis',
			'Indexing (B-tree, BRIN, GIN)',
			'Vacuum Parameter Tuning',
			'Connection Management & Pooling',
			'Backup & Disaster Recovery'
		]
	},
	{
		category: 'Cloud & Infrastructure',
		tag: 'INFRASTRUCTURE // COST // PLATFORM',
		description:
			'Cloud architecture, multi-provider cost reduction, workload sizing, and robust Linux environment administration.',
		skills: [
			'AWS',
			'Azure',
			'Local Cloud Providers',
			'Cloud Migration',
			'Infrastructure Optimization',
			'Cost Governance',
			'Linux Systems',
			'Shell Scripting'
		]
	},
	{
		category: 'DevOps & Observability',
		tag: 'TELEMETRY // RELIABILITY // METRICS',
		description:
			'Full-stack system visibility, centralized telemetry pipelines, proactive alerting, and health dashboards.',
		skills: [
			'Grafana',
			'MonIT Centralized Platform',
			'Custom Monitoring Scripts',
			'Infrastructure Monitoring',
			'Database Health Metrics',
			'SIEM Security Monitoring',
			'Log Aggregation'
		]
	},
	{
		category: 'Security & Compliance',
		tag: 'GOVERNANCE // CONTROLS // AUDIT',
		description:
			'Rigorous security implementations aligned with international standards, access controls, and vulnerability mitigation.',
		skills: [
			'ISO/IEC 27001:2022 Implementation',
			'Security Controls & Recertification',
			'SIEM Platform Threat Monitoring',
			'Least Privilege Access Policy',
			'Network & Data Security'
		]
	},
	{
		category: 'Software Engineering',
		tag: 'CLIENT // BACKEND // INTEGRATION',
		description:
			'Custom software, API integration layers, resilient mobile applications, and modern edge web platforms.',
		skills: [
			'SvelteKit (Svelte 5 runes)',
			'TypeScript',
			'Flutter (iOS & Android)',
			'PHP & Laravel',
			'REST API Integration',
			'Banking & Payment Gateway APIs',
			'Optimistic Data Synchronization'
		]
	}
];

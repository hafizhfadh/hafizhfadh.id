export interface TechCategory {
	category: string;
	description: string;
	skills: string[];
}

export const techEcosystem: TechCategory[] = [
	{
		category: 'Database Engineering',
		description:
			'Query plan analysis, indexing strategy, concurrency tuning, and high-availability operations across relational and in-memory databases.',
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
		description:
			'Cloud architecture, multi-provider cost reduction, workload sizing, and Linux system administration.',
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
		description:
			'System-wide visibility: centralized telemetry pipelines, proactive alerting, and dashboards your team can read.',
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
		description:
			'Controls designed into the architecture: ISO/IEC 27001:2022 alignment, least-privilege access, SIEM threat monitoring, and vulnerability mitigation.',
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
		description:
			'Internal business systems, API integration layers, resilient mobile applications, and modern edge web platforms.',
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

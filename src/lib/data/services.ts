export interface ServicePillar {
	id: string;
	number: string;
	tag: string;
	title: string;
	summary: string;
	quote: string;
	capabilities: string[];
	businessOutcomes: string[];
	engagementExample: string;
	technologies: string[];
}

export const services: ServicePillar[] = [
	{
		id: 'forward-deployed',
		number: '01',
		tag: 'COLLABORATIVE // EMBEDDED',
		title: 'Forward Deployed Engineering',
		summary:
			'Direct, embedded engineering partnership with your technical and executive teams to solve high-stakes architecture, database, and infrastructure challenges.',
		quote:
			'Not another external vendor handing over documentation. An engineering partner who works alongside your team to understand, integrate, and solve real technical challenges.',
		capabilities: [
			'Technical discovery & deep requirements analysis',
			'Existing infrastructure & application health assessment',
			'Open-source platform integration & vendor decoupling',
			'Complex systems & multi-service integration',
			'Infrastructure & database performance engineering',
			'Hands-on implementation & knowledge transfer'
		],
		businessOutcomes: [
			'Accelerate delivery without accumulating long-term technical debt',
			'Empower internal engineers through hands-on knowledge transfer',
			'Avoid costly vendor lock-in through well-architected open-source platforms'
		],
		engagementExample:
			'Embedding during a cloud migration or compliance sprint to optimize infrastructure, audit configurations, and implement reliable architectures alongside your staff.',
		technologies: ['Linux', 'PostgreSQL', 'Grafana', 'Shell', 'Docker', 'REST APIs']
	},
	{
		id: 'managed-platforms',
		number: '02',
		tag: 'RELIABILITY // OPERATIONAL',
		title: 'Managed Platforms & Infrastructure',
		summary:
			'End-to-end stewardship, query tuning, observability, and cost governance for mission-critical databases and cloud environments.',
		quote:
			'Keep your platforms reliable, observable, secure, and operationally efficient without building every capability internally.',
		capabilities: [
			'Database administration & health monitoring (PostgreSQL, MySQL, Redis)',
			'Database query performance optimization & indexing strategies (B-tree, BRIN, GIN)',
			'Cloud & on-premises infrastructure management',
			'Centralized monitoring, custom telemetry scripts & Grafana dashboards',
			'High-availability connection pooling & vacuum parameter tuning',
			'Backup, replication & disaster recovery verification',
			'Security-conscious infrastructure operations & ISO/IEC 27001 alignment',
			'Cloud infrastructure cost reduction & capacity planning'
		],
		businessOutcomes: [
			'Substantial reduction in monthly cloud expenditure (e.g. 33%–70% reductions achieved)',
			'Consistently low query execution times (< 500ms) on multi-terabyte datasets',
			'Elimination of silent database connection leaks and performance degradation'
		],
		engagementExample:
			'Ongoing retainer for high-throughput transactional databases requiring continuous latency monitoring, monthly optimization reporting, and capacity tuning.',
		technologies: ['PostgreSQL', 'MySQL', 'MariaDB', 'Redis', 'AWS', 'Azure', 'Grafana']
	},
	{
		id: 'custom-applications',
		number: '03',
		tag: 'SOFTWARE // ADAPTIVE',
		title: 'Custom Applications & Integration',
		summary:
			'Targeted internal business systems, workflow automation, and data integrations built to fit your precise operational realities.',
		quote:
			'Software should adapt to your operational requirements, not force your organization to adapt to inflexible software.',
		capabilities: [
			'Internal business applications & admin platforms',
			'Custom administrative dashboards & operational portals',
			'High-throughput API development & third-party integrations',
			'Workflow automation & backend cron pipelines',
			'Database-backed transactional software',
			'Legacy system integration & modern API bridging',
			'Open-source platform customization',
			'Mobile (Flutter) & modern web application engineering'
		],
		businessOutcomes: [
			'Automate repetitive operational bottlenecks and eliminate manual human error',
			'Bridge modern web interfaces with mission-critical legacy databases',
			'Deliver responsive, offline-resilient software tested across 200k+ installs'
		],
		engagementExample:
			'Building administrative accounting portals, custom POS systems, or virtual account payment bridges integrated directly with core banking and billing engines.',
		technologies: ['SvelteKit', 'TypeScript', 'Flutter', 'PHP/Laravel', 'SQL', 'REST APIs']
	}
];

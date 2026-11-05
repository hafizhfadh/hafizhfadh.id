export interface PrincipleItem {
	number: string;
	title: string;
	/** One-line teaser for Level-1 surfaces (home): distinct voice from summary. */
	teaser?: string;
	summary: string;
	application: string;
}

export const principles: PrincipleItem[] = [
	{
		number: '01',
		title: 'Open source where it makes sense',
		teaser: 'Battle-tested platforms, chosen for operational maturity, never for ideology.',
		summary:
			'Open source offers flexibility and vendor independence, but adoption is grounded in business requirements, security posture, operational maturity, and total cost of ownership. Never ideology.',
		application:
			'Selecting battle-tested open platforms (PostgreSQL, Linux, Grafana) and integrating them with the enterprise investments you already run.'
	},
	{
		number: '02',
		title: 'Security from the beginning',
		summary:
			'Security is not an audit phase bolted on before launch. It is a structural property that governs data storage, access patterns, network topology, and compliance.',
		application:
			'Practical implementation of ISO/IEC 27001:2022 standards, SIEM threat monitoring, encrypted data layers, and least-privilege connection pooling.'
	},
	{
		number: '03',
		title: 'Optimize before overspending',
		teaser: 'Slow systems usually need a better query plan, not a bigger server.',
		summary:
			'Slow systems rarely require more expensive hardware or larger cloud instances. They usually suffer from unindexed queries, stalled connections, or untuned runtime parameters.',
		application:
			'Analyzing query execution plans (EXPLAIN ANALYZE), applying BRIN/GIN indexes, tuning vacuum thresholds. The 70% reduction on the homepage ledger came from exactly this.'
	},
	{
		number: '04',
		title: 'Adapt to existing environments',
		summary:
			'Real engineering respects organizational momentum. Greenfield rewrites are expensive and risky. The highest-value engineering adapts to and improves the architecture already in flight.',
		application:
			'Working within your current cloud provider, legacy databases, or hybrid infrastructure rather than enforcing an arbitrary new stack.'
	},
	{
		number: '05',
		title: 'Build for long-term operations',
		summary:
			'Software spends most of its life in maintenance. Clear configuration, observability, automated health probes, and simple recovery paths outrank clever complexity.',
		application:
			'Standardized telemetry with MonIT and Grafana dashboards, repeatable deployment scripts, and comprehensive operational documentation.'
	},
	{
		number: '06',
		title: 'Measure engineering outcomes',
		teaser: '“Faster” isn’t an outcome until it’s a number someone audited.',
		summary:
			'Subjective claims of "faster" or "better" do not satisfy technical leadership. Every engineering change must produce quantifiable, auditable operational metrics.',
		application:
			'Tracking hard numbers: P95/P99 latency thresholds at or under 500 ms, weekly growth curves, and audited monthly cloud balance sheets.'
	}
];

export interface PrincipleItem {
	number: string;
	title: string;
	/** One-line teaser for Level-1 surfaces (home) — distinct voice from summary. */
	teaser?: string;
	summary: string;
	application: string;
}

export const principles: PrincipleItem[] = [
	{
		number: '01',
		title: 'Open-Source Where It Makes Sense',
		teaser: 'Battle-tested platforms, chosen for operational maturity — never for ideology.',
		summary:
			'Open source offers unparalleled flexibility and vendor independence, but adoption must be grounded in business requirements, security posture, operational maturity, and TCO—never ideology.',
		application:
			'Selecting battle-tested open platforms (PostgreSQL, Linux, Grafana) while integrating seamlessly with your existing enterprise investments.'
	},
	{
		number: '02',
		title: 'Security From the Beginning',
		summary:
			'Security is not an audit phase retrofitted prior to launch. It is an intrinsic structural property that governs data storage, access patterns, network topology, and compliance.',
		application:
			'Practical implementation of ISO/IEC 27001:2022 standards, SIEM threat monitoring, encrypted data layers, and least-privilege connection pooling.'
	},
	{
		number: '03',
		title: 'Optimize Before Overspending',
		teaser: 'Slow systems usually need a better query plan, not a bigger server.',
		summary:
			'Slow systems rarely require more expensive hardware or larger cloud instances. They usually suffer from unindexed queries, stalled connections, or un-tuned runtime parameters.',
		application:
			'Analyzing query execution plans (EXPLAIN ANALYZE), applying BRIN/GIN indexes, tuning vacuum thresholds, and reducing cloud spend by up to 70%.'
	},
	{
		number: '04',
		title: 'Adapt to Existing Environments',
		summary:
			'Real engineering respects organizational momentum. Green-field rewrites are expensive and risky. The highest-value engineering adapts to and improves the architecture already in flight.',
		application:
			'Working within your current cloud provider, legacy databases, or hybrid infrastructure rather than enforcing an arbitrary new stack.'
	},
	{
		number: '05',
		title: 'Build for Long-Term Operations',
		summary:
			'Software spends 90% of its lifecycle in maintenance mode. Clear configuration, observability, automated health probes, and simple recovery paths outrank clever complexity.',
		application:
			'Standardized telemetry with MonIT and Grafana dashboards, repeatable deployment scripts, and comprehensive operational documentation.'
	},
	{
		number: '06',
		title: 'Measure Engineering Outcomes',
		teaser: '\u201cFaster\u201d isn\u2019t an outcome until it\u2019s a number someone audited.',
		summary:
			'Subjective claims of "faster" or "better" do not satisfy technical leadership. Every engineering change must produce quantifiable, auditable operational metrics.',
		application:
			'Tracking hard numbers: P95/P99 latency thresholds <= 500ms, weekly growth curves, and audited monthly cloud balance sheets.'
	}
];

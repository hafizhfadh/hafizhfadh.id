export interface ServiceSection {
	title: string;
	body: string;
}

export interface ServiceRelevantExperience {
	organization: string;
	note: string;
}

export interface ServicePillar {
	id: string;
	slug: string;
	title: string;
	/** One-line teaser for Level-1 surfaces (home): distinct voice from summary. */
	teaser: string;
	summary: string;
	/** Distinct lead for the detail page header, not a copy of summary. */
	lead: string;
	quote: string;
	positioning: string;
	challenges: ServiceSection[];
	scenarios: ServiceSection[];
	capabilities: string[];
	capabilitySections: ServiceSection[];
	outcomes: string[];
	deliverables: string[];
	collaboration: ServiceSection;
	relevantExperience: ServiceRelevantExperience[];
	engagementExample: string;
	technologies: string[];
	/** Label for the exploration link that leads to this service's detail page. */
	cta: string;
	diagram: 'bridge' | 'rhythm' | 'flow';
}

export const services: ServicePillar[] = [
	{
		id: 'forward-deployed',
		slug: 'forward-deployed-engineering',
		title: 'Forward Deployed Engineering',
		teaser:
			'An engineering partner inside your team, on the architecture, performance, and compliance problems that never fit a ticket queue.',
		summary:
			'Direct, embedded engineering partnership with your technical and executive teams to solve high-stakes architecture, database, and infrastructure challenges.',
		lead: 'Embedded partnership for the problems that never fit a ticket queue.',
		quote:
			'Not another vendor handing over documentation. An engineer who joins your team, learns the environment, and stays until the problem is solved.',
		positioning:
			'The most valuable engineering sometimes happens inside your walls. Forward Deployed Engineering means I join your team on your tools, in your meetings, against your deadlines, to work on the problems that never fit a ticket queue: architecture decisions, performance mysteries, compliance deadlines, and the migration everyone keeps postponing.',
		challenges: [
			{
				title: 'A cloud bill that keeps climbing',
				body: 'Spend has grown faster than the business, nobody can say exactly why, and "add a budget alert" is not a strategy.'
			},
			{
				title: 'Performance you cannot trace',
				body: 'Queries slow down under load, incidents repeat, and the bottleneck moves somewhere else every time someone fixes it.'
			},
			{
				title: 'A compliance deadline with no security lead',
				body: 'ISO/IEC 27001 or a customer audit is approaching, and the controls need an engineer who implements, not a consultant who delegates.'
			},
			{
				title: 'A migration everyone postpones',
				body: 'The move to a new provider, database, or architecture is obviously right and perpetually "next quarter".'
			}
		],
		scenarios: [
			{
				title: 'Embedded in a cloud migration',
				body: 'Working alongside your staff for a fixed sprint: auditing configurations, redesigning the architecture, and implementing the migration with your team watching every step.'
			},
			{
				title: 'Interim platform ownership',
				body: 'Taking hands-on responsibility for infrastructure and database health while you hire, with documentation and handover built in from day one.'
			},
			{
				title: 'Architecture reviews that end in code',
				body: 'Not a slide deck: an assessment followed by working alongside your engineers to implement the recommendations.'
			}
		],
		capabilities: [
			'Technical discovery & deep requirements analysis',
			'Existing infrastructure & application health assessment',
			'Open-source platform integration & vendor decoupling',
			'Complex systems & multi-service integration',
			'Infrastructure & database performance engineering',
			'Hands-on implementation & knowledge transfer'
		],
		capabilitySections: [],
		outcomes: [
			'Delivery speeds up without technical debt piling up behind it',
			'Your engineers finish the engagement knowing what I know',
			'Vendor lock-in avoided by design, through well-architected open-source platforms'
		],
		deliverables: [
			'A discovery brief and problem statement you can act on',
			'An engineering assessment with prioritized recommendations',
			'Implemented improvements, not just recommendations',
			'Operational documentation and runbooks',
			'Knowledge transfer sessions for your internal engineers'
		],
		collaboration: {
			title: 'Embedded, not adjacent',
			body: 'I work inside your environment: your repositories, your tickets, your communication channels. You get direct access to the engineer doing the work, decisions explained as they are made, and everything written down so your team owns the result long after the engagement ends.'
		},
		relevantExperience: [
			{
				organization: 'Infradigital Nusantara',
				note: 'Embedded DevOps: 70% monthly cloud spend reduction, the MonIT monitoring platform, and ISO/IEC 27001:2022 technical implementation.'
			},
			{
				organization: 'Monster Data Asia',
				note: 'Consulting engagement: a 1.6 TB telecommunications database administered with 33–40% spend reduction.'
			}
		],
		engagementExample:
			'Embedding during a cloud migration or compliance sprint to optimize infrastructure, audit configurations, and implement reliable architectures alongside your staff.',
		technologies: ['Linux', 'PostgreSQL', 'Grafana', 'Shell', 'Docker', 'REST APIs'],
		cta: 'See how embedding works',
		diagram: 'bridge'
	},
	{
		id: 'managed-platforms',
		slug: 'managed-platforms',
		title: 'Managed Platforms & Infrastructure',
		teaser:
			'Ongoing stewardship for mission-critical databases and cloud environments: fast, observable, secure, and cost-effective month after month.',
		summary:
			'End-to-end stewardship, query tuning, observability, and cost governance for mission-critical databases and cloud environments.',
		lead: 'Ongoing stewardship for the systems your business runs on.',
		quote:
			'Keep your platforms reliable, observable, secure, and operationally efficient without building every capability internally.',
		positioning:
			'Some systems are too important to learn on the job. Managed Platforms means ongoing stewardship of the databases and infrastructure your business runs on: kept fast, observable, secure, and cost-effective month after month, without building every capability in-house.',
		challenges: [
			{
				title: 'A database nobody truly owns',
				body: 'It works, most days. But configuration is folklore, backups are untested, and the person who understood it left last year.'
			},
			{
				title: 'Latency that grows with the data',
				body: 'The same queries get slower every month as the dataset grows, and bigger servers are starting to look inevitable.'
			},
			{
				title: 'Costs nobody connects to value',
				body: 'The invoice arrives, it is larger than last quarter, and there is no review process tying spend to actual usage.'
			},
			{
				title: 'Visibility that starts after the incident',
				body: 'You find out about problems from users. Monitoring exists, but it watches servers, not the health of the business.'
			}
		],
		scenarios: [
			{
				title: 'A high-throughput transactional retainer',
				body: 'Ongoing care for payment and billing databases: continuous latency monitoring, monthly optimization reports, and capacity tuning ahead of growth.'
			},
			{
				title: 'Cost governance with audited figures',
				body: 'A monthly review of spend against usage: the discipline behind 33–70% reductions in real production environments.'
			},
			{
				title: 'Observability built where none exists',
				body: 'Centralized dashboards and custom telemetry so the next incident is seen in minutes, not reported by customers.'
			}
		],
		capabilities: [
			'Database administration & health monitoring (PostgreSQL, MySQL, Redis)',
			'Query performance optimization & indexing strategies (B-tree, BRIN, GIN)',
			'Cloud & on-premises infrastructure management',
			'Centralized monitoring, custom telemetry & Grafana dashboards',
			'Connection pooling & vacuum parameter tuning',
			'Backup, replication & disaster recovery verification',
			'Security-conscious operations & ISO/IEC 27001 alignment',
			'Cloud cost reduction & capacity planning'
		],
		capabilitySections: [
			{
				title: 'Infrastructure management',
				body: 'Day-to-day stewardship of cloud and on-premises environments: provisioning, configuration, capacity planning, and the unglamorous maintenance that prevents outages.'
			},
			{
				title: 'Database administration',
				body: 'Health monitoring and operations for PostgreSQL, MySQL, MariaDB, and Redis: users, roles, replication, and the parameters that decide whether a database behaves.'
			},
			{
				title: 'Database performance optimization',
				body: 'Query and index strategy (B-tree, BRIN, GIN), execution plan analysis, vacuum tuning, and connection pool management. The toolkit that keeps a 1.6 TB database under 500 ms.'
			},
			{
				title: 'Cloud & on-premises operations',
				body: 'Linux administration, workload sizing, and hybrid environments, including cost-efficient local cloud providers where they genuinely beat the giants.'
			},
			{
				title: 'Monitoring & observability',
				body: 'Centralized telemetry with Grafana dashboards and custom collection scripts. The MonIT approach: see problems before your users do.'
			},
			{
				title: 'Backup & recovery',
				body: 'Backup schedules, replication, and disaster recovery that is actually tested, because an unverified backup is a hope, not a plan.'
			},
			{
				title: 'Security-conscious operations',
				body: 'Least-privilege access, ISO/IEC 27001-aligned controls, and SIEM-backed threat monitoring baked into daily operations.'
			},
			{
				title: 'Infrastructure cost optimization',
				body: 'A monthly review of spend against usage with actionable recommendations: governance, not cost-cutting theater.'
			},
			{
				title: 'Reliability improvement',
				body: 'Incident analysis, connection-leak elimination, and hardening against the slow degradations that quietly become Friday-night outages.'
			}
		],
		outcomes: [
			'Cloud expenditure down 33–70% in documented engagements',
			'Query execution held at or under 500 ms on multi-terabyte datasets',
			'Silent connection leaks and slow degradation found and eliminated'
		],
		deliverables: [
			'A monthly database performance report with prioritized recommendations',
			'A cost governance review built on audited balance-sheet figures',
			'Observability dashboards your team can actually read',
			'A backup and recovery verification log',
			'Quarterly capacity and architecture recommendations'
		],
		collaboration: {
			title: 'A retainer that earns its keep',
			body: 'Ongoing stewardship with a predictable rhythm: continuous monitoring, monthly reporting with actionable recommendations, and a direct line when something needs attention. You get senior database and infrastructure expertise without the salary line, and your internal team keeps learning from the work.'
		},
		relevantExperience: [
			{
				organization: 'Monster Data Asia',
				note: 'Ongoing administration of a 1.6 TB telecommunications payment and billing database growing ~11 GB weekly, held at or under 500 ms query latency.'
			},
			{
				organization: 'Infradigital Nusantara',
				note: 'MonIT centralized monitoring platform and a 70% reduction in monthly infrastructure spend.'
			}
		],
		engagementExample:
			'Ongoing retainer for high-throughput transactional databases requiring continuous latency monitoring, monthly optimization reporting, and capacity tuning.',
		technologies: ['PostgreSQL', 'MySQL', 'MariaDB', 'Redis', 'AWS', 'Azure', 'Grafana'],
		cta: 'See the scope of care',
		diagram: 'rhythm'
	},
	{
		id: 'custom-applications',
		slug: 'custom-applications',
		title: 'Custom Applications & Integration',
		teaser:
			'Software built around your operation: internal systems, integrations, and automation that returns hours to your team.',
		summary:
			'Targeted internal business systems, workflow automation, and data integrations built to fit how your operation actually works.',
		lead: 'Software built around your operation, not a vendor’s roadmap.',
		quote:
			'Software should adapt to your operation. Your organization shouldn’t have to adapt to the software.',
		positioning:
			'Off-the-shelf software gets you 80% of the way there and 100% of the frustration. Custom Applications means software built around your actual operation: administrative systems, integrations between the tools you already run, and the automation that returns hours to your team every week.',
		challenges: [
			{
				title: 'Operations run in spreadsheets',
				body: 'The real system of record is a shared file nobody dares to restructure, and every month-end is a manual reconciliation sprint.'
			},
			{
				title: 'Systems that do not talk to each other',
				body: 'The billing engine, the website, and the accounting tool each hold a different version of the truth, connected by copy-paste.'
			},
			{
				title: 'A legacy system you cannot replace',
				body: 'It is mission-critical, irreplaceable this year, and impossible to integrate with, so the workarounds keep multiplying.'
			},
			{
				title: 'Manual work that quietly scales',
				body: 'Every new customer adds repetitive tasks for your team: entering data, sending reminders, moving numbers between systems.'
			}
		],
		scenarios: [
			{
				title: 'Administrative systems from the ground up',
				body: 'School administration, accounting, and point-of-sale platforms built exactly around how an organization actually operates.'
			},
			{
				title: 'Banking and payment integrations',
				body: 'Virtual account payment bridges integrated directly with core banking engines, static and dynamic, so reconciliation happens by itself.'
			},
			{
				title: 'Mobile software for real-world networks',
				body: 'A Flutter application engineered for low-end devices and unstable connections, proven across more than 200,000 installs.'
			}
		],
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
		capabilitySections: [
			{
				title: 'Custom business applications',
				body: 'Internal tools that fit your process exactly: administration platforms, accounting portals, and operational systems built from your requirements rather than a vendor roadmap.'
			},
			{
				title: 'Internal platforms & dashboards',
				body: 'Operational portals and administrative dashboards that give your team one honest view of the business.'
			},
			{
				title: 'APIs & systems integration',
				body: 'High-throughput API development and third-party integrations, including banking and payment gateway APIs with static and dynamic virtual accounts.'
			},
			{
				title: 'Workflow automation',
				body: 'Backend pipelines and scheduled jobs that remove repetitive manual work, and the human error that comes with it.'
			},
			{
				title: 'Open-source customization',
				body: 'Adapting proven open-source platforms to your needs instead of paying for a parody of what you actually wanted.'
			},
			{
				title: 'Legacy integration & modernization',
				body: 'Bridging modern web interfaces with mission-critical legacy databases, respecting the system that pays the bills while moving it forward.'
			},
			{
				title: 'Mobile & web development',
				body: 'Flutter for iOS and Android, SvelteKit for the web. Production software proven across 200,000+ installs, with offline resilience built in.'
			}
		],
		outcomes: [
			'Repetitive operational bottlenecks automated, manual error eliminated',
			'Modern interfaces bridged onto mission-critical legacy databases',
			'Software proven across 200,000+ installs, offline-resilient by design'
		],
		deliverables: [
			'Requirements analysis translated into a build plan you can challenge',
			'Working software in iterations, not a single big reveal',
			'Integration documentation for every system touched',
			'A handover with the knowledge to operate what was built',
			'Post-launch support on clearly agreed terms'
		],
		collaboration: {
			title: 'Built with your team, not just for it',
			body: 'Short iterations, working software early, and requirements that come from watching how your operation actually works. I build on your existing stack where it makes sense, and say so plainly when it does not.'
		},
		relevantExperience: [
			{
				organization: 'Infradigital Nusantara',
				note: 'Pelajar Flutter app: 200,000+ installs with offline optimistic synchronization and ISO/IEC 27001-aligned security.'
			},
			{
				organization: 'Yayasan Al Sudais Indonesia',
				note: 'School administration, accounting, POS, and banking virtual account integrations built from the ground up.'
			}
		],
		engagementExample:
			'Building administrative accounting portals, custom POS systems, or virtual account payment bridges integrated directly with core banking and billing engines.',
		technologies: ['SvelteKit', 'TypeScript', 'Flutter', 'PHP/Laravel', 'SQL', 'REST APIs'],
		cta: 'See what gets built',
		diagram: 'flow'
	}
];

export function getServiceBySlug(slug: string): ServicePillar | undefined {
	return services.find((service) => service.slug === slug);
}

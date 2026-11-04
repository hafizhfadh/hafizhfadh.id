export interface ExperienceItem {
	organization: string;
	role: string;
	period: string;
	location?: string;
	highlight: string;
	achievements: string[];
	tags: string[];
}

export interface EducationItem {
	degree: string;
	institution: string;
	period: string;
	status?: string;
}

export interface CertificationItem {
	name: string;
	issuer: string;
}

export const experiences: ExperienceItem[] = [
	{
		organization: 'Infradigital Nusantara',
		role: 'DevOps',
		period: 'August 2023 – Present',
		highlight: 'Reduced monthly cloud infrastructure expenditure by 70% (IDR 70M to IDR 21M)',
		achievements: [
			'Cut monthly infrastructure spend by 70% through systemic architecture optimization, database configuration tuning, and migration to a cost-efficient local cloud provider.',
			'Developed MonIT, a centralized monitoring platform integrating existing monitoring tools and custom scripts with Grafana dashboards providing real-time visibility into application activity, database latency, and internal network health.',
			'Optimized database queries and indexing strategies for large datasets, applying B-tree, BRIN, and GIN indexes according to database engine capabilities and workload query patterns.',
			'Led technical implementation activities supporting the organization’s ISO/IEC 27001:2022 recertification, strengthening security controls and compliance practices.',
			'Contributed to implementing a Security Information and Event Management (SIEM) platform to strengthen security monitoring and early cyber threat detection.'
		],
		tags: ['DevOps', 'Cost Optimization', 'Grafana', 'MonIT', 'B-tree/BRIN/GIN', 'ISO/IEC 27001', 'SIEM']
	},
	{
		organization: 'Monster Data Asia',
		role: 'Database Administration Consultant',
		period: 'July 2023 – Present',
		highlight: 'Administered 1.6 TB telecommunications database, reducing expenditure by 33–40%',
		achievements: [
			'Reduced monthly cloud infrastructure expenditure from approximately IDR 300 million to IDR 180–200 million through systematic database performance optimization and configuration tuning.',
			'Administer databases supporting a telecommunications subsidiary’s payment and billing (PPOB) systems and an online ticketing platform, including a 1.6 TB telecommunications database with approximately 11 GB weekly data growth.',
			'Optimized database queries and indexing strategies across API endpoints, successfully maintaining database-side query execution times <= 500 ms.',
			'Analyzed query execution plans, index efficiency, connection pooling, and stalled/idle connection bottlenecks.',
			'Tuned database configurations, cache settings, vacuum-related parameters, and connection limits based on high-concurrency workload characteristics.',
			'Produce monthly database performance reports identifying slow queries, affected application features, and actionable recommendations for development teams.'
		],
		tags: ['Database Administration', '1.6 TB Scale', 'PPOB & Billing', 'Query Plans', 'Vacuum Tuning', 'Latency <=500ms']
	},
	{
		organization: 'Infradigital Nusantara',
		role: 'Mobile Application Developer',
		period: 'November 2020 – July 2023',
		highlight: 'Engineered and maintained Pelajar Flutter app across 200,000+ installs',
		achievements: [
			'Developed and maintained Pelajar, a Flutter-based mobile application for iOS and Android, achieving more than 200,000 installs across Google Play Store and Apple App Store.',
			'Optimized application performance and device resource consumption to deliver a lightweight, responsive experience across a broad spectrum of Android and iOS devices.',
			'Implemented offline support and optimistic data synchronization to improve application usability and resilience under unstable cellular network conditions.',
			'Implemented application security measures aligned with the organization’s ISO/IEC 27001:2022 security requirements.',
			'Managed application release pipelines and deployments across both app store ecosystems.'
		],
		tags: ['Flutter', 'iOS & Android', '200k+ Installs', 'Optimistic Sync', 'Offline Resilience', 'ISO 27001']
	},
	{
		organization: 'Yayasan Al Sudais Indonesia',
		role: 'Full-Stack Developer',
		period: 'January 2019 – November 2020',
		highlight: 'Built internal administration, accounting, POS, and banking payment platforms',
		achievements: [
			'Built internal software solutions from the ground up to support administrative and operational processes across multiple Islamic boarding schools in Indonesia.',
			'Developed school administration and accounting systems to manage tuition fees, operational expenditures, and administrative workflows.',
			'Built a point-of-sale (POS) system for student dining facilities and a centralized school management system.',
			'Integrated banking APIs to support static and dynamic virtual account payments, simplifying and automating administrative reconciliation for parents and institutions.'
		],
		tags: ['Full-Stack', 'Laravel/PHP', 'Banking APIs', 'Virtual Accounts', 'POS Systems', 'Accounting']
	}
];

export const education: EducationItem[] = [
	{
		degree: 'Bachelor’s Degree in Information Systems',
		institution: 'Universitas Bina Sarana Informatika',
		period: 'In Progress',
		status: 'Active'
	},
	{
		degree: 'Vocational High School Diploma in Computer Programming, System Architecture, and Design',
		institution: 'Taruna Bhakti Vocational High School',
		period: '2018',
		status: 'Graduated'
	}
];

export const certifications: CertificationItem[] = [
	{
		name: 'Microsoft Technology Associate: Database Administration Fundamentals',
		issuer: 'Microsoft'
	},
	{
		name: 'Microsoft Technology Associate: HTML5 Application Development Fundamentals',
		issuer: 'Microsoft'
	}
];

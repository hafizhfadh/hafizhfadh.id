export interface VerifiedMetric {
	value: string;
	label: string;
	context: string;
	organization: string;
	role: string;
	details: string;
	badge: string;
}

export const verifiedMetrics: VerifiedMetric[] = [
	{
		value: '70%',
		label: 'Monthly Cloud Infrastructure Cost Reduction',
		context: 'Reduced spend from IDR 70 million to IDR 21 million monthly',
		organization: 'Infradigital Nusantara',
		role: 'DevOps',
		details:
			'Achieved through deep infrastructure optimization, database query & configuration tuning, and strategic migration to a local cloud provider.',
		badge: 'COST GOVERNANCE'
	},
	{
		value: '33–40%',
		label: 'Telecommunications Cloud Spend Reduction',
		context: 'Reduced monthly expenditure from ~IDR 300M to IDR 180–200M',
		organization: 'Monster Data Asia',
		role: 'Database Administration Consultant',
		details:
			'Delivered through database performance optimization, vacuum tuning, connection limits management, and targeted query plan optimizations.',
		badge: 'DATABASE EFFICIENCY'
	},
	{
		value: '1.6 TB',
		label: 'Mission-Critical Database Scale Administered',
		context: 'Supporting telco payment & billing with ~11 GB weekly data growth',
		organization: 'Monster Data Asia',
		role: 'Database Administration Consultant',
		details:
			'Maintained database-side query execution times <= 500ms across high-throughput payment, billing (PPOB), and online ticketing endpoints.',
		badge: 'SCALE & LATENCY'
	},
	{
		value: '200,000+',
		label: 'Production Mobile Application Installs',
		context: 'Pelajar app across Google Play Store & Apple App Store',
		organization: 'Infradigital Nusantara',
		role: 'Mobile Application Developer',
		details:
			'Delivered lightweight, responsive client performance, offline resilience with optimistic synchronization, and ISO/IEC 27001-aligned security measures.',
		badge: 'CLIENT DEPLOYMENT'
	}
];

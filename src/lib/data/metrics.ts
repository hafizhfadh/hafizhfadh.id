export interface VerifiedMetric {
	value: string;
	label: string;
	context: string;
	organization: string;
	role: string;
	details: string;
}

export const verifiedMetrics: VerifiedMetric[] = [
	{
		value: '70%',
		label: 'Reduction in monthly cloud infrastructure spend',
		context: 'IDR 70 million to IDR 21 million a month',
		organization: 'Infradigital Nusantara',
		role: 'DevOps',
		details:
			'Architecture and configuration work came first, then database query tuning, then migration to a cost-efficient local cloud provider.'
	},
	{
		value: '33–40%',
		label: 'Reduction in a telecommunications cloud bill',
		context: 'Roughly IDR 300M down to IDR 180–200M a month',
		organization: 'Monster Data Asia',
		role: 'Database Administration Consultant',
		details:
			'Delivered from the database outward: query plan optimization, vacuum tuning, and connection limit management.'
	},
	{
		value: '1.6 TB',
		label: 'Telecommunications database under continuous administration',
		context: 'Payment and billing systems, growing about 11 GB every week',
		organization: 'Monster Data Asia',
		role: 'Database Administration Consultant',
		details:
			'Query execution held at or under 500 ms across high-throughput payment, billing, and ticketing endpoints.'
	},
	{
		value: '200,000+',
		label: 'Installs of a production mobile application',
		context: 'Pelajar, across Google Play and the App Store',
		organization: 'Infradigital Nusantara',
		role: 'Mobile Application Developer',
		details:
			'Lightweight on low-end devices, offline-resilient with optimistic synchronization, and secured to ISO/IEC 27001 requirements.'
	}
];

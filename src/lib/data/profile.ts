export interface ProfileData {
	name: string;
	title: string;
	tagline: string;
	philosophy: string;
	supporting: string;
	location: string;
	email: string;
	linkedin: string;
	bio: string;
	approachStatement: string;
	siteDescription: string;
}

export const profile: ProfileData = {
	name: 'Hafizh Fadhlurrohman',
	title: 'Infrastructure, Platform & Database Engineering Consultant',
	tagline: 'Engineering Beyond Infrastructure',
	philosophy: 'Engineering Beyond Infrastructure',
	supporting: 'Secure. Open. Adaptable.',
	location: 'Depok, West Java, Indonesia',
	email: 'hafizhfadh@gmail.com',
	linkedin: 'https://linkedin.com/in/hafizhfadh',
	bio: 'Independent engineering consultant for infrastructure, platforms, and databases. Open-source engineering, measured outcomes, and direct access to the engineer doing the work.',
	approachStatement:
		'I don’t force my preferred stack on anyone. I study the environment you have, weigh the constraints you operate under, and build what makes sense for your business.',
	siteDescription:
		'Independent engineering consultancy for infrastructure, platforms, and databases. Verified results: 70% cloud cost reduction, a 1.6 TB database answering in under 500 ms, and 200,000+ installs of production software.'
};

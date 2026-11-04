export interface EngagementStep {
	step: string;
	number: string;
	title: string;
	summary: string;
	activities: string[];
	deliverable: string;
}

export const engagementProcess: EngagementStep[] = [
	{
		step: 'STAGE // 01',
		number: '01',
		title: 'Professional Introduction',
		summary:
			'Initial context sharing where you introduce your organization, your technical environment, operational constraints, and the business goals prompting the conversation.',
		activities: [
			'Context exchange regarding current architecture and operational priorities',
			'High-level alignment on desired technical outcomes and timeline',
			'Mutual evaluation of strategic fit'
		],
		deliverable: 'Initial Discovery Brief & Mutual NDA (if required)'
	},
	{
		step: 'STAGE // 02',
		number: '02',
		title: 'Structured Discovery Interview',
		summary:
			'A focused technical and business conversation to uncover the root causes behind system bottlenecks, cloud cost escalations, or platform transitions.',
		activities: [
			'Detailed review of existing infrastructure, telemetry data, and query workloads',
			'Analysis of team responsibilities, incident history, and compliance requirements',
			'Identification of technical and organizational constraints'
		],
		deliverable: 'Problem Statement & Scope Boundaries'
	},
	{
		step: 'STAGE // 03',
		number: '03',
		title: 'Technical Assessment',
		summary:
			'Direct technical evaluation of system architecture, database performance bottlenecks, infrastructure sizing, security posture, and level of engineering effort.',
		activities: [
			'Evaluation of database query execution plans, connection limits, and resource utilization',
			'Infrastructure cost audits and cloud provider balance sheet evaluation',
			'Architectural gap analysis against ISO/IEC 27001 or reliability standards'
		],
		deliverable: 'Engineering Assessment & Recommended Roadmap'
	},
	{
		step: 'STAGE // 04',
		number: '04',
		title: 'Tailored Proposal',
		summary:
			'Preparation of a detailed scope of work outlining the exact engagement model, deliverables, milestone schedules, and engineering responsibilities.',
		activities: [
			'Custom scoping tailored to your internal team capacity (embedded vs. managed)',
			'Definition of measurable engineering acceptance criteria (e.g., latency targets, cost ceilings)',
			'Clarification of responsibilities, communication cadence, and reporting'
		],
		deliverable: 'Comprehensive Scope of Work & Milestone Specifications'
	},
	{
		step: 'STAGE // 05',
		number: '05',
		title: 'Commercial Agreement',
		summary:
			'Finalizing transparent, value-aligned commercial terms once both parties thoroughly understand the technical scope, operational stakes, and expected outcomes.',
		activities: [
			'Selection of engagement structure (embedded sprint, ongoing retainer, or project milestone)',
			'Establishment of transparent terms based on verified scope rather than generic packages',
			'Formalization of kick-off schedule and platform access credentials'
		],
		deliverable: 'Master Services Agreement & Active Engineering Engagement'
	}
];

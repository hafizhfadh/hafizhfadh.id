export interface NavItem {
	label: string;
	href: string;
}

/** Primary navigation — single source for navbar, footer, and mobile menu. */
export const primaryNav: NavItem[] = [
	{ label: 'Services', href: '/services' },
	{ label: 'Experience', href: '/experience' },
	{ label: 'Expertise', href: '/expertise' },
	{ label: 'About', href: '/about' }
];

export const contactNav: NavItem = { label: "Let's Talk", href: '/contact' };

/** True when the given pathname should mark this nav item active. */
export function isNavItemActive(href: string, pathname: string): boolean {
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(`${href}/`);
}

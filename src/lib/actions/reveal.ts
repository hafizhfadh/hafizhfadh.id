export interface RevealOptions {
	/** Stagger delay in milliseconds */
	delay?: number;
}

/**
 * Gentle one-time reveal when the element enters the viewport.
 * The hidden state is applied only when JavaScript runs, so
 * content remains fully visible without it.
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	if (typeof window === 'undefined') return;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	node.classList.add('reveal');
	if (options.delay) {
		node.style.transitionDelay = `${options.delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('reveal-visible');
					observer.disconnect();
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

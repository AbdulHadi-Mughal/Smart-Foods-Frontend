// Global ImageKit helpers for responsive widths

export const IMAGE_WIDTH_BREAKPOINTS = [360, 480, 600, 768, 1024, 1280, 1536, 1920] as const;

/**
 * Picks the closest width bucket from IMAGE_WIDTH_BREAKPOINTS that is >= the given target width.
 * Falls back to the largest bucket if viewport exceeds all buckets.
 */
export function pickWidthBucket(targetWidth: number): number {
	for (const bp of IMAGE_WIDTH_BREAKPOINTS) {
		if (targetWidth <= bp) return bp;
	}
	return IMAGE_WIDTH_BREAKPOINTS[IMAGE_WIDTH_BREAKPOINTS.length - 1];
}

/**
 * Computes a responsive width based on current window size and device pixel ratio,
 * then snaps it to the defined width buckets.
 * Provides a safe default for SSR or non-browser environments.
 */
export function getResponsiveWidth(defaultWidth = 768): number {
	if (typeof window === 'undefined') return defaultWidth;
	const dpr = Math.max(1, Math.min(3, window.devicePixelRatio || 1));
	const viewport = Math.max(320, window.innerWidth || defaultWidth);
	const desired = Math.round(viewport * dpr);
	return pickWidthBucket(desired);
}

/**
 * Builds an ImageKit src with optional width transform.
 * `path` can be a plain path (spaces allowed) and will be URI-encoded.
 */
export function buildIkSrc(path: string, width?: number, extraTransform?: string): string {
	const encoded = encodeURI(path);
	const transforms: string[] = [];
	if (width) transforms.push(`w-${width}`);
	if (extraTransform) transforms.push(extraTransform);
	return transforms.length ? `${encoded}?tr=${transforms.join(',')}` : encoded;
}

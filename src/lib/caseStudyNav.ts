interface CaseStudyNavData {
	number: string;
	projectHeading: string;
	projectSectionId: string;
	processHeading: string;
	hasKeyFindings: boolean;
	endProductHeading: string;
	outcomeHeading: string;
}

const lowerFirstWord = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

/** The scrollable jump-link row in the case intro ("↓ the Problem", "↓ my Impact", …). */
export function getJumpLinks(data: CaseStudyNavData) {
	const links = [
		{ label: lowerFirstWord(data.projectHeading), href: `#${data.projectSectionId}` },
		{ label: 'my Impact', href: '#impact' },
		{ label: lowerFirstWord(data.processHeading), href: '#process' },
	];
	if (data.hasKeyFindings) links.push({ label: 'key findings', href: '#findings' });
	links.push(
		{ label: lowerFirstWord(data.endProductHeading), href: '#core' },
		{ label: lowerFirstWord(data.outcomeHeading), href: '#outcome' },
	);
	return links;
}

/** The compact-nav mobile menu: jump links (title case) + a trailing back link,
 *  pointing at the same landing-page anchor as the in-page "← Back" link. */
export function getMenuItems(data: CaseStudyNavData) {
	const items = getJumpLinks(data).map((l) => ({
		label: l.label.charAt(0).toUpperCase() + l.label.slice(1),
		href: l.href,
	}));
	items.push({ label: '← Back', href: `/#case-${data.number}` });
	return items;
}

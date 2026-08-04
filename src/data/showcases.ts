export interface ProcessStep {
	name: string;
	description: string;
	images?: string[];
}

export interface CoreHighlight {
	title: string;
	description: string;
	image?: string;
}

export interface CaseStudy {
	when: string;
	role: string;
	tools: string;
	heroImage?: string;
	problem: string;
	businessChallenge: string;
	howMightWe: string;
	impact: string[];
	process: ProcessStep[];
	keyLearnings: string[];
	coreExplained: CoreHighlight[];
	whatsNext?: ProcessStep[];
}

export interface Showcase {
	slug: string;
	category: string;
	title: string;
	tags: string[];
	cardImage?: string;
	pdfUrl: string;
	caseStudy?: CaseStudy;
	variant?: "slim";
}

export const showcases: Showcase[] = [
	{
		slug: "project-one",
		category: "AI Product Design · Fintech",
		title: "Simplify payment fraud management, when introducing an AI-powered core",
		tags: ["AI/UX", "Fintech", "Enterprise SaaS"],
		cardImage: "/images/work/project-one/card.png",
		pdfUrl: "/case-studies/project-one.pdf",
		caseStudy: {
			when: "2023–2024",
			role: "End-to-end design & validation, supported by a UX Writer",
			tools: "Figma",
			heroImage: "/images/work/project-one/hero.png",
			problem:
				"Protect let merchants block payment fraud by manually building score-based risk rules. Built for expert risk officers, it was later sold straight to merchants — exposing a tool that was too manual, too complex, and too opaque for non-experts. Worse, the score-based rule model had become a structural blocker: it capped how much AI capability Adyen could build into Protect, and into its wider suite of conversion-optimization products.",
			businessChallenge:
				"Move current merchants onto AI-powered profiles as fast as possible — while the underlying AI capabilities were still maturing.",
			howMightWe:
				"How might we simplify payment fraud management when introducing AI-powered profiles and a new core interaction: action-based rules?",
			impact: [
				"Designed the three core interactions — action-based rules, AI configuration, and AI integration — plus every supporting feature and screen needed to move merchant traffic onto them.",
				"Validated the concepts through qualitative testing before development, steering engineering away from the wrong solution early.",
				"De-risked the transition by building confidence incrementally, enabling a pilot and phased rollout to all merchants.",
			],
			process: [
				{
					name: "Kick-off",
					description:
						"Workshop with PMs and tech leads using a \"scope canvas\" (a method picked up at ING) to surface existing knowledge and align on how the team saw the challenge.",
					images: ["/images/work/project-one/kickoff-canvas.png"],
				},
				{
					name: "Gather inspiration",
					description:
						"Heuristic evaluation, review of past research and CSAT findings, competitor analysis, UX guideline research, and exploratory talks with Adyen's risk specialists.",
				},
				{
					name: "Synthesize for action",
					description:
						"Mapped user archetypes (generalist payment managers vs. expert risk specialists), defined experience principles, and sketched the before/after customer journey.",
					images: [
						"/images/work/project-one/archetypes.png",
						"/images/work/project-one/principles.png",
						"/images/work/project-one/journey-before-after.png",
						"/images/work/project-one/journey-cycle.png",
					],
				},
				{
					name: "Generate ideas",
					description:
						"Crazy-8-style sprints across three concepts — action-based rules, AI positioning, AI configuration — narrowed down with two PMs and two tech leads.",
					images: ["/images/work/project-one/crazy8.png"],
				},
				{
					name: "Test to learn",
					description:
						"Two rounds: static screens with 5 Adyen risk specialists, then 1-on-1 prototype sessions with 12 merchants completing set tasks.",
					images: ["/images/work/project-one/prototype-flow.png"],
				},
				{
					name: "Finalize",
					description:
						"Locked all interactions, product visuals, and pixel specifications ready for development.",
				},
			],
			keyLearnings: [
				"Merchants trusted the new action-based rules, but worried that simplification meant losing fraud coverage.",
				"An AI score of 0–100 risked merchants reading AI as just another score-based rule — the very mental model the redesign was meant to replace.",
				"Merchants desperately wanted per-payment explanations of AI decisions; a few unexplained blocks were enough to make them want to move traffic away, which reprioritized that explanation's redesign.",
				"Power users wanted AI evaluation available as a condition inside their own custom rules, to close remaining fraud-coverage gaps.",
			],
			coreExplained: [
				{
					title: "Action hierarchy, not scores",
					description:
						"Reused the existing tab structure to introduce a new priority order (Allow, then Block, then Review, ...), avoiding a relearned layout and cutting development effort.",
					image: "/images/work/project-one/core-actions.png",
				},
				{
					title: "AI as just another rule",
					description:
						"Modeled AI as another risk rule so it could reuse existing interaction patterns — lower cognitive load for merchants, lower build cost now and for future analytics.",
					image: "/images/work/project-one/core-ai-rule.png",
				},
				{
					title: "Four thresholds, no scores",
					description:
						"Offered four abstract blocking thresholds instead of a 0–100 score, avoiding the old scoring mental model while keeping choice limited until proven necessary.",
					image: "/images/work/project-one/core-threshold.png",
				},
				{
					title: "Backtest before you commit",
					description:
						"Let merchants preview a threshold's expected block-rate impact on their own traffic before applying it — since the AI logic itself couldn't be fully explained.",
					image: "/images/work/project-one/core-backtest.png",
				},
			],
		},
	},
	{
		slug: "project-two",
		category: "UX Research & Design · Banking",
		title: "Scaling a marketplace for entrepreneurs that compares third-party products",
		tags: ["UX Research", "Design Systems", "Fintech"],
		cardImage: "/images/work/project-two/card.jpg",
		pdfUrl: "/case-studies/project-two.pdf",
		caseStudy: {
			when: "2019",
			role: "Senior UX Designer, Usability Researcher",
			tools: "Sketch, InVision",
			heroImage: "/images/work/project-two/hero.png",
			problem:
				"ING Business Banking wanted to become the default relationship for entrepreneurs: a bank-agnostic platform hosting both ING's own and third-party business services, built to stay future-proof against new competitors. One of its main initiatives, a marketplace called ING+Partners, guided entrepreneurs to the right third-party product in an objective, fee-based way. I joined after the first product category had gone live, with scaling to at least 10 categories planned within a year — and within a few weeks found usability and scalability issues serious enough to advise a redesign before scaling any further.",
			businessChallenge:
				"Scale ING+Partners from a single live category to at least 10 within a year, without every new category needing its own one-off redesign.",
			howMightWe:
				"How might we redesign the category and product pages so every current and future product category can launch on the same scalable, reusable components?",
			impact: [
				"Redesigned the category and product-detail pages around fully configurable, reusable components — not a one-off design for a single category, but a system every future category could launch on.",
				"Ran persona walkthroughs and squad reviews to pressure-test the designs before they shipped, presenting findings back as a story from each persona's perspective.",
				"Validated the redesign with real users on the most complex category, payment solutions, reaching an average System Usability Score of 75 against an above-average benchmark of 68.",
			],
			process: [
				{
					name: "Expert review",
					description:
						"Quickly ran through the existing pages to spot pain points and create focus for the steps that followed.",
				},
				{
					name: "Benchmark",
					description:
						"Decided together with the Squad which 10 competitors and e-commerce parties to benchmark the experience against.",
				},
				{
					name: "Desk research",
					description:
						"Investigated e-commerce and UX best practices and lessons learned for category pages, product pages, and their individual elements.",
				},
				{
					name: "Prioritized list of findings",
					description:
						"Turned the expert review, benchmark, and desk research into an Excel-based list of usability findings, rated by severity and impact, then grouped into slices — creating planning clarity and an easier scope conversation with the Product Owner.",
				},
				{
					name: "First designs",
					description:
						"With the big- and medium-impact slices approved by the Product Owner, designed the first happy-flow desktop screens for the bookkeeping category — the platform's most-used screen and category.",
				},
				{
					name: "Persona walkthroughs & squad review",
					description:
						"Walked through the designs as the bookkeeping category's own personas to test and refine them, then presented the design back to the squad as a story told from each persona's perspective.",
				},
				{
					name: "Full design & scalable components",
					description:
						"After processing feedback from users and the squad, finalized the design for every screen size and turned every page component into something reusable across all current and upcoming product categories.",
					images: [
						"/images/work/project-two/category-before-after.png",
						"/images/work/project-two/detail-before-after.png",
					],
				},
			],
			keyLearnings: [
				"The original IA clicked a product straight into a partner page showing a subset of products — restructuring to one product per detail page matched how users actually expected to browse.",
				"USPs on product cards weren't comparable across categories; replacing them with three overlapping, category-dependent attributes made every card genuinely scannable.",
				"The detail page's content column was too wide for comfortable reading, and its primary CTA disappeared on scroll — a sticky product summary card in the corner fixed both problems at once.",
				"Sorting defaulted to alphabetical, but users arrived with no idea of providers or product names — switching the default to price low-to-high matched how they actually decided.",
			],
			coreExplained: [
				{
					title: "Smarter, scalable filters",
					description:
						"Let users choose multiple filters, see which ones are active, and clear them easily — built as a repeatable pattern so any new category can just add another single- or multi-select dropdown.",
					image: "/images/work/project-two/core-filters.png",
				},
				{
					title: "Sort by price, not the alphabet",
					description:
						"Moved the default sort from alphabetical to price low-to-high, since entrepreneurs came in with no idea of providers or product names, and de-emphasized the label so focus stayed on the products.",
					image: "/images/work/project-two/core-sorting.png",
				},
				{
					title: "Configurable product cards",
					description:
						"Split each card into a header and detail section for easier scanning, dropped incomparable USPs for three overlapping category-dependent attributes, and specced it as a fully configurable component for every future category.",
					image: "/images/work/project-two/core-cards.png",
				},
				{
					title: "One product, one page",
					description:
						"The original IA clicked into a partner page showing a subset of products; restructuring to one product per detail page made the page consistent with what users expected again.",
					image: "/images/work/project-two/core-partners-to-products.png",
				},
				{
					title: "Everything that matters, above the fold",
					description:
						"Prioritized primary, summarizing content and quick navigation above the fold, so users could get the gist before deciding to dive deeper.",
					image: "/images/work/project-two/core-fold.png",
				},
				{
					title: "A summary card that sticks",
					description:
						"A product summary card pinned to the upper-right corner kept the primary CTA in reach and narrowed the reading column for the detail content — solving two problems with one component.",
					image: "/images/work/project-two/core-sticky-summary.png",
				},
			],
			whatsNext: [
				{
					name: "User testing",
					description:
						"Set up and ran user tests on the most complex category, payment solutions, reaching an average System Usability Score of 75 (68 is considered above average), with clear next steps for improvement.",
				},
				{
					name: "Designing compare & select",
					description:
						"Prototyped a compare-and-select pattern — pick up to two products, then jump into a side-by-side comparison — as the next logical step once browsing and detail pages were solid.",
					images: ["/images/work/project-two/compare-select.png"],
				},
				{
					name: "Long-term vision prototype",
					description:
						"Advised the Product Owner on further features and bigger framework optimizations, then visualized the long-term vision as a clickable prototype for stakeholder demos.",
				},
			],
		},
	},
	{
		slug: "project-three",
		category: "UX Design · Mortgages",
		title: "Designing a monthly mortgage costs calculator used on an external platform",
		tags: ["UX Design", "Fintech", "Conversion"],
		cardImage: "/images/work/project-three/card.png",
		pdfUrl: "/case-studies/project-three.pdf",
		caseStudy: {
			when: "2021–2022",
			role: "Senior UX Designer",
			tools: "Sketch, InVision",
			heroImage: "/images/work/project-three/hero.png",
			problem:
				"ING wanted to reach customers outside its own platforms. One of its biggest investments was taking over the 'monthly cost calculator' from competitor De Hypotheker on Funda — the Netherlands' biggest real-estate platform, drawing about 175,000 views a month on that page alone. I was asked to design the new calculator to drive more customers into ING's mortgage funnel, and was part of the core team setting requirements while working toward a fixed release date. I stepped into the project from the very start, about a year into working in the mortgages domain at ING after a year at Rabobank.",
			businessChallenge:
				"Replace a competitor's calculator embedded on the Netherlands' largest real-estate platform with a redesigned, ING-branded version — on a platform ING didn't control, inside an iframe, on a fixed release date — without losing the traffic already flowing through it.",
			howMightWe:
				"How might we redesign the monthly-cost calculator to feel native to ING while working within an iframe's constraints, and turn its ~175,000 monthly views into qualified leads for ING's mortgage funnel?",
			impact: [
				"Replaced a competitor's calculator embedded on the Netherlands' largest real-estate platform with a redesigned, ING-branded version, working around hard iframe constraints such as no dialogs and fixed CTA placement.",
				"Ran a two-day-iterate, two-day-test usability research cadence with an external agency to validate changes quickly before finalizing for development.",
				"The live product scored an average report grade of 7.7, measured by an external agency (N=400).",
			],
			process: [
				{
					name: "0-measurement current product",
					description:
						"Researched user reactions to the current monthly-cost calculator from competitor De Hypotheker — the results directly shaped the changes covered in the end product below.",
				},
				{
					name: "Clarify customer journey",
					description:
						"Planned a 'Scope Canvas' workshop with the core team to define the product's parameters and get everyone aligned on the same page.",
				},
				{
					name: "Brainstorm & iterate",
					description:
						"User requirements were clear from the 0-measurement, but business and feasibility requirements were still fuzzy. Started by putting as many ideas as possible on paper to let the real requirements surface and build enthusiasm.",
				},
				{
					name: "Usability testing",
					description:
						"Tested the agreed-upon product through an InVision prototype I built and set up the research for, with an external agency running the sessions on a two-day-iterate, two-day-test cadence — fast enough to validate changes as we went.",
				},
				{
					name: "Finalize",
					description:
						"Based on the research findings, finalized all interactions, product visuals, and pixel specifications ready for development.",
					images: ["/images/work/project-three/end-product-overview.png"],
				},
			],
			keyLearnings: [
				"Business worried simplifying the contact form's logic would flood the call queue — the resolved compromise routed existing ING customers to self-service booking and used an urgency question to triage everyone else, keeping business confidence without piling on unnecessary logic.",
				"An embedded iframe ruled out dialogs entirely; solving that by swapping the card's content inline, with its own back navigation, kept the flow feeling like a side-step rather than a dead end.",
				"Most visitors weren't ready to book an appointment yet, still in the orientation phase — which is why 'down the rabbit hole' sends them onward to a full ING-controlled calculator instead of forcing a conversion moment too early.",
				"Shipped scope didn't fully match the original design: the contact form went out simpler than planned, and the 'down the rabbit hole' calculator hand-off isn't live yet, with users still routed to the max-mortgage calculator in the meantime.",
			],
			coreExplained: [
				{
					title: "Every input field earns its place",
					description:
						"Stripped out De Hypotheker's fields that weren't needed for the calculation, then split the single 'wanted mortgage' field into two — fictive bid and own money — so users could finally account for savings or surplus house value.",
					image: "/images/work/project-three/core-a-inputs.png",
				},
				{
					title: "Branding without breaking mobile",
					description:
						"Space was tight on mobile, framed in beneath Funda's large header, so the logo moved inside the result section to keep the primary CTA on-screen even on older devices — with a brand photo alongside the result on larger screens, angled to lead the eye back to the follow-up actions.",
					image: "/images/work/project-three/core-b-branding.png",
				},
				{
					title: "Surfacing 'kosten koper'",
					description:
						"Users wanted to know their 'kosten koper' — the extra costs of buying a house, like notary fees — so they could tell whether their savings covered it or how much was left over. Added it directly to the result.",
					image: "/images/work/project-three/core-c-kosten-koper.png",
				},
				{
					title: "Working around the iframe",
					description:
						"The calculator was framed into the Funda page, which ruled out dialogs entirely. Worked around it by swapping the card's content inline with its own back navigation — enough to feel like a side-step, not a dead end.",
					image: "/images/work/project-three/core-d-iframe.png",
				},
				{
					title: "A contact form business could live with",
					description:
						"Business worried simplifying the form would flood the call queue. Landed on routing existing ING customers to self-service booking, and letting everyone else submit a form triaged by an urgency question — before Funda later shipped an even simpler version without me.",
					image: "/images/work/project-three/core-e-contact.png",
				},
				{
					title: "Down the rabbit hole, deliberately",
					description:
						"Most visitors were still in the orientation phase, not ready to book. Instead of forcing a conversion, the plan sends them to a full ING-controlled calculator that reuses their Funda input — though this hand-off isn't live yet.",
					image: "/images/work/project-three/core-f-rabbit-hole.png",
				},
			],
		},
	},
	{
		slug: "mortgage-impressions",
		category: "Quick Impressions · Mortgages",
		title: "Quick impressions other Mortgage projects",
		tags: [],
		pdfUrl: "/case-studies/mortgage-impressions.pdf",
		variant: "slim",
	},
];

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
}

export interface Showcase {
	slug: string;
	category: string;
	title: string;
	tags: string[];
	cardImage?: string;
	caseStudy?: CaseStudy;
}

export const showcases: Showcase[] = [
	{
		slug: "project-one",
		category: "AI Product Design · Fintech",
		title: "De-risking Adyen's move to AI-powered fraud protection",
		tags: ["AI/UX", "Fintech", "Enterprise SaaS"],
		cardImage: "/images/work/project-one/hero.png",
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
		category: "[Showcase 2: project type]",
		title: "[Project Two: outcome-focused title]",
		tags: ["[TAG]", "[TAG]", "[TAG]"],
	},
	{
		slug: "project-three",
		category: "[Showcase 3: project type]",
		title: "[Project Three: outcome-focused title]",
		tags: ["[TAG]", "[TAG]", "[TAG]"],
	},
];

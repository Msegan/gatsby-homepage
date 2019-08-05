export const debtnote = {
	title: 'On Debt',
	date: 'May 30th, 2019',
	content: `
Most engineers consider tech debt shameful. This is wrong. Debt lets you scale faster than otherwise possible and can dramatically limit loss. The truly dangerous thing in software is not tech debt, but rather, its evil twin: technical risk <span>&#9760;</span>

Tech debt is a concept in programming for short term solutions that will eventually need to be revamped or rebuilt entirely. Whereas traditional debt trades money in the future for money today, “tech debt” trades engineering time in the future for engineering time today. Tech debt comes in two forms.

First is the <b>naive implementation</b>. You may have designed the desired API, but, in sprinting toward deadlines, you consciously implement a simple but inefficient or otherwise temporary version. You shouldn’t worry about taking on this type of debt.

Second is a <b>temporary foundation</b>. You may plan to migrate your codebase to another language or framework or update a public facing API in a non-backward compatible manner; however, these changes are expensive and take time to peel back. You should have a good reason to implement a temporary foundation.

Tech debt involves suboptimal solutions but never incurs structural fragility. Technical risk, unlike debt, introduces the incorrect or inherently fragile. The tradeoff goes beyond time and includes dangers such as breakages, security vulnerabilities, and even privacy violations. For example, if we have a global singleton logger, we may incorrectly log user data across different user sessions, leaking sensitive data. It is difficult to properly handle multiple users, but making a mistake on privacy is too important to mess up. <b>Do not incur technical risk</b>.

Having examined nuances of tech debt and technical risk, we can now gain further insight by making an analogy to financial debt. Three key properties of traditional debt are interest rate, repayment schedule, and defaults. These have simple definitions and direct correspondence to tech debt.

Interest rates can be <a href="https://www.investopedia.com/terms/n/negative-interest-rate.asp">zero or even negative</a> allowing you to pay back less than you get today. This is almost always a deal worth taking. A common example of negative interest rates in tech debt is code modernization efforts for features which may be deleted. Deleted code is always up to date.

High interest debt imparts a significant burden but may be worth taking on with a short repayment schedule. Consider revamping an API which adds new callsites rapidly and where every callsite will need to be updated by hand. This is high interest tech debt and should generally not be taken on or deferred. If the repayment schedule is short enough, say only a few weeks, it may still be prudent to delay the migration. A big launch coming up is a reasonable cause for deferral.

Historically, if a company you owned part of went bankrupt, you personally assumed its debt with no limits. Ouch. Enter the concept of limited liability. The Economist has a <a href="https://www.economist.com/finance-and-economics/1999/12/23/the-key-to-industrial-capitalism-limited-liability">great article on the history of LLCs</a>. Limited liability creates a powerful asymmetry of unlimited upside but limited downside, whereby if a company fails the rest of your assets are safe. Tech debt allows you to capitalize on the same asymmetry, also through bankruptcy. Any time you begin a new effort you should ask yourself if it's separate from your other systems and can simply be deleted. <b><code>rm -rf</code></b> is your bankruptcy. If you're able to create that separation and your project is experimental, <b>be aggressive in taking on tech debt</b>. There is a high chance that experimental projects fail and you can default on your debt. If the project succeeds, paying it back is usually a good problem to have.

While tech debt is a powerful tool, there is undesirable debt. While even bad debt is not as ruinous as technical risk can be, it can result significant wasted time. Additionally, unlike with traditional debt, with tech debt, you can never truly be certain of the interest rate or total liabilities. You may think your system is properly abstracted away only to realize you need a sweeping refactor. This uncertainty exists with intentionally as well as accidentally accrued tech debt.

Tech debt is a powerful tool to be respected, utilized, and avoided where appropriate. Fear debt that will balloon quickly, such as on foundations, and embrace low, zero, and negative interest rate debt. Leverage debt in projects which have a high chance of failure and are encapsulated. Continually reevaluate your system to identify debt you did not know you had, and, most importantly, <b>do not skimp on API design, take on technical risk, or conflate risk with debt</b>.
	`.split("\n").filter(word => word.length > 1),
};

export const censorshipnote = {
title: 'On Censorship',
	date: 'June 4th, 2019',
	content: [`
Students in the northwest see<br/>
The crudeness of the grass-mud horse overruns the desert<br/>
Saved by Papa and the river crabs;<br/>
Leaps forward in education<br/>
Heaven is watching as<br/>
We learn our history;<br/>
Honor our ancestors by thinking twice or<br/>
Soil parchment; always double
`],
}

export const wantnote = {
	title: 'On Want',
	date: 'August 5th, 2019',
	content: `
Every six months I touch base with each of my reports about what they want in work and life. It’s easy to get caught in the day to day and week to week, forgetting to adjust course as we grow and our desires change. When known, typical outcomes range from a desire for management opportunities to getting home in time for dinner with the family every night. However, many either don’t know what to work toward or think they do only to later realize they were wrong. Thankfully, there are useful principles to identify what we want.

When we <b>want</b> we’re predicting the future, namely that some state of the world will be preferable to others. If we’re predicting something in the near term or we’re familiar with, such as what we want for dinner, there’s a fair chance you’re going to be right. If your time horizon is long or the domain foreign to you, such as a new job or discipline, be ready for surprise.

Predicting new areas is hard, but we can increase confidence. I wanted to get a PhD in Computer Science, so I got a research internship one summer. We can often sample things, find people who’ve walked similar paths, or simply research the area. Often more important than researching is explore different alternative domains to identify potential paths not previously considered.

Even with comprehensive knowledge of our options and informed opinions about them, our underlying desires change. Not only do we change in unpredictable ways, but the people and world around us do as well - both of which play a large role in what we want. These factors add an inherent uncertainty to our predictions. Thus, we’re best served evaluating ranges and many options rather than just a single path. Option value reigns.

There are many things we can learn, get, or experience that hedge our future. Many skills and knowledge are broadly applicable, such as writing, people management, or foreign language. However uncouth, it’s sensible to want money and status in addition to skills and experience. Money provides total optionality in how you use it. Similarly, a well-known title from a reputable company can qualify you for roles. Usually preferable to skills or money is a strong reputation. Especially if you work with exceptional coworkers, their admiration and respect will be the most valuable thing you can get.

It’s necessary to collaborate and avoid isolating yourself to foster a strong reputation. Take the time to help others and take on work which is not formally rewarded. Developing skills takes similar intention, stretching outside your comfort zone, and often tradeoff with formal rewards. Your company likely incentivizes you to work where you’re already most impactful rather than learning new areas.

Whatever tradeoffs you make, working towards a promotion, money, or skills are widely understood and respected. They can be false goals. Many people feel compelled to follow an existing notion of success or a path that they set out in the past. A long time frame and limited familiarity in an area are not the only contributors to poor accuracy in predicting what we want. We often fail to give ourselves permission to be honest. We stay on our default path, focus on advancement over quality of life rather, or force ourselves into a new area we hate instead of continuing doing work we love. Give yourself permission to march to the beat of your own drum.
	`.split("\n").filter(word => word.length > 1),
};

export const roadmapsnote = {
	title: 'On Roadmaps',
	date: 'Pending',
	content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

In cursus turpis massa tincidunt dui ut ornare lectus. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nec tincidunt praesent semper feugiat. Facilisis sed odio morbi quis commodo. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Vel turpis nunc eget lorem dolor sed viverra. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. tortor consequat id porta. Ante metus dictum at tempor commodo ullamcorper a lacus. At imperdiet dui accumsan sit amet. Viverra justo nec ultrices dui sapien eget. Tellus id interdum velit laoreet id donec ultrices. Nibh tortor id aliquet lectus. Praesent tristique magna sit amet. Sit amet aliquam id diam maecenas. Laoreet sit amet cursus sit amet dictum sit. Ac turpis egestas sed tempus urna.
	`.split("\n").filter(word => word.length > 1),
};

export const personanote = {
	title: 'On Persona',
	date: 'Pending',
  content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

In cursus turpis massa tincidunt dui ut ornare lectus. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nec tincidunt praesent semper feugiat. Facilisis sed odio morbi quis commodo. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Vel turpis nunc eget lorem dolor sed viverra. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. tortor consequat id porta. Ante metus dictum at tempor commodo ullamcorper a lacus. At imperdiet dui accumsan sit amet. Viverra justo nec ultrices dui sapien eget. Tellus id interdum velit laoreet id donec ultrices. Nibh tortor id aliquet lectus. Praesent tristique magna sit amet. Sit amet aliquam id diam maecenas. Laoreet sit amet cursus sit amet dictum sit. Ac turpis egestas sed tempus urna.
	`.split("\n").filter(word => word.length > 1),
};
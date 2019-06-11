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

export const convictionnote = {
	title: 'On Conviction',
	date: 'Pending',
	content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

In cursus turpis massa tincidunt dui ut ornare lectus. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nec tincidunt praesent semper feugiat. Facilisis sed odio morbi quis commodo. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Vel turpis nunc eget lorem dolor sed viverra. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. tortor consequat id porta. Ante metus dictum at tempor commodo ullamcorper a lacus. At imperdiet dui accumsan sit amet. Viverra justo nec ultrices dui sapien eget. Tellus id interdum velit laoreet id donec ultrices. Nibh tortor id aliquet lectus. Praesent tristique magna sit amet. Sit amet aliquam id diam maecenas. Laoreet sit amet cursus sit amet dictum sit. Ac turpis egestas sed tempus urna.
	`.split("\n").filter(word => word.length > 1),
};

export const continuitynote = {
	title: 'On Continuity',
	date: 'Pending',
	content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

In cursus turpis massa tincidunt dui ut ornare lectus. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nec tincidunt praesent semper feugiat. Facilisis sed odio morbi quis commodo. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Vel turpis nunc eget lorem dolor sed viverra. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. tortor consequat id porta. Ante metus dictum at tempor commodo ullamcorper a lacus. At imperdiet dui accumsan sit amet. Viverra justo nec ultrices dui sapien eget. Tellus id interdum velit laoreet id donec ultrices. Nibh tortor id aliquet lectus. Praesent tristique magna sit amet. Sit amet aliquam id diam maecenas. Laoreet sit amet cursus sit amet dictum sit. Ac turpis egestas sed tempus urna.
	`.split("\n").filter(word => word.length > 1),
};

export const exceptionalismnote = {
	title: 'On Exceptionalism',
	date: 'Pending',
  content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

In cursus turpis massa tincidunt dui ut ornare lectus. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nec tincidunt praesent semper feugiat. Facilisis sed odio morbi quis commodo. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Vel turpis nunc eget lorem dolor sed viverra. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. tortor consequat id porta. Ante metus dictum at tempor commodo ullamcorper a lacus. At imperdiet dui accumsan sit amet. Viverra justo nec ultrices dui sapien eget. Tellus id interdum velit laoreet id donec ultrices. Nibh tortor id aliquet lectus. Praesent tristique magna sit amet. Sit amet aliquam id diam maecenas. Laoreet sit amet cursus sit amet dictum sit. Ac turpis egestas sed tempus urna.
	`.split("\n").filter(word => word.length > 1),
};
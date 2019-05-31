const notemap = {
  debt: {
  	title: 'On Debt',
  	date: '5/30/19',
  	content: `
Tech debt is considered shameful in projects. This is wrong. Debt lets you scale faster than otherwise possible and can dramatically limit loss. However, it has a dark side beyond just the risk that comes with leverage.

Tech debt is a concept in programming for short term solutions that will eventually need to be revamped or rebuilt entirely. Whereas traditional debt trades money in the future for money today, “tech debt” trades engineering time in the future for engineering time today. Tech debt comes in two forms, but they have an evil twin <span>&#9760;</span>

First, and most innocent, is the <b>naive implementation</b>. You may have designed the desired API but in sprinting toward deadlines you consciously implement a simple but inefficient or otherwise temporary version.

Second, and more dangerous, is a <b>temporary foundation</b>. You may plan to migrate your codebase to another language or framework or update a public facing API in a non-backward compatible manner; these changes are expensive and take time to peel back.

Standard tech debt involves suboptimal solutions but never incur structural risk. A close relative of debt, risk, adds <b>landmines</b> which introduce the incorrect or inherently fragile, such as through <a href="https://en.wikipedia.org/wiki/Action_at_a_distance_(computer_programming)">spooky action at a distance</a>. Bad debt incurs systemic risk and makes your system unsafe. This might involve introspecting the class of an object passed in or calling private methods, whereby innocent changes elsewhere in the system break unrelated functionality. <b>Do this at your own risk</b>. Even extensive test coverage can not prevent unacceptable risk of privacy violations or systemic breakages.

These each map to traditional debt in subtly different but important ways. Three key properties of tradition debt are interest rate, repayment schedule, and defaults. These have simple definitions and direct correspondence to tech debt.

Interest rates can be <a href=”https://www.investopedia.com/terms/n/negative-interest-rate.asp”>zero or even negative<a> allowing you to pay back less than you get today. This is almost always a deal worth taking. A common example of negative interest rates in tech debt are code modernization efforts for features which may be deleted. Deleted code is always up to date.

High interest debt carries significant risk but may be worth taking on with a short repayment schedule. Consider, revamping an API which adds new callsites rapidly and where every callsite will needs to be updated by hand. This is high interest tech debt and should generally not be taken on or deferred. If the repayment schedule is short enough, say only a few weeks, it may still be prudent to delay the migration. A big launch coming up is a reasonable cause for deferral.

Historically, if a company you owned part of went bankrupt, you personally assumed it's debt with no limits. Ouch. Enter the concept of limited liability. The Economist has a <a href="https://www.economist.com/finance-and-economics/1999/12/23/the-key-to-industrial-capitalism-limited-liability">great article on the history of LLCs</a>. This creates a powerful asymmetry of unlimited upside but limited downside, where if a company fails the rest of your assets are safe. Tech debt allows you to capitalize on the same asymmetry, also through bankruptcy. Any time you begin a new effort you should ask yourself if it's separate from my other systems and can simply be deleted. <b><code>rm -rf</code></b> is your bankruptcy. If you're able to create that separation and your project is experimental, <b>be aggressive in taking on tech debt</b>. There is a high chance that experimental projects fail and you can default on your debt. If the project succeeds, paying it back is usually a good problem to have.

While tech debt is a powerful tool it can lead to ruin. Unlike most traditional debt, you can never be truly certain of the interest rate or total liabilities. You may think your system is properly abstracted away only to realize you need a sweeping refactor. Continually reevaluate your system to identify debt you did not know you had and most importantly <b>do not skimp on API design, take on risk, or conflate risk with debt</b>.

Tech debt is a powerful tool to be respected, utilized, and avoided where appropriate. Fear debt which will balloon quickly, such as on foundations, and embrace low, zero, and negative interest rate debt. Leverage debt it in projects which have a high risk of failure and are encapsulated. Most of all, be mindful and conscious of your leverage.
`.split("\n").filter(word => word.length > 1),
  },
  conviction: {
  	title: 'On Conviction',
  	date: 'Pending',
  	content: [`
		  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
		  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
			deserunt mollit anim id est laborum.
			`,
			`
			In cursus turpis massa tincidunt dui ut ornare lectus. Tempor commodo
			ullamcorper a lacus vestibulum sed arcu. Eget lorem dolor sed viverra
			ipsum nunc aliquet bibendum enim. Nec tincidunt praesent semper feugiat.
			Facilisis sed odio morbi quis commodo. Lacus luctus accumsan tortor posuere
			ac ut consequat semper viverra. Vel turpis nunc eget lorem dolor sed viverra.
			Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
			Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Et
			tortor consequat id porta. Ante metus dictum at tempor commodo ullamcorper a lacus.
			At imperdiet dui accumsan sit amet. Viverra justo nec ultrices dui sapien eget.
			Tellus id interdum velit laoreet id donec ultrices. Nibh tortor id aliquet lectus.
			Praesent tristique magna sit amet. Sit amet aliquam id diam maecenas. Laoreet sit
			amet cursus sit amet dictum sit. Ac turpis egestas sed tempus urna.
			`,
		],
  },
  continuity: {
  	title: 'On Continuity',
  	date: 'Pending',
  	content: [`
		  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
		  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
			deserunt mollit anim id est laborum.
			`,
			`
			In cursus turpis massa tincidunt dui ut ornare lectus. Tempor commodo
			ullamcorper a lacus vestibulum sed arcu. Eget lorem dolor sed viverra
			ipsum nunc aliquet bibendum enim. Nec tincidunt praesent semper feugiat.
			Facilisis sed odio morbi quis commodo. Lacus luctus accumsan tortor posuere
			ac ut consequat semper viverra. Vel turpis nunc eget lorem dolor sed viverra.
			Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
			Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Et
			tortor consequat id porta. Ante metus dictum at tempor commodo ullamcorper a lacus.
			At imperdiet dui accumsan sit amet. Viverra justo nec ultrices dui sapien eget.
			Tellus id interdum velit laoreet id donec ultrices. Nibh tortor id aliquet lectus.
			Praesent tristique magna sit amet. Sit amet aliquam id diam maecenas. Laoreet sit
			amet cursus sit amet dictum sit. Ac turpis egestas sed tempus urna.
			`,
		],
  },
  exceptionalism: {
  	title: 'On Exceptionalism',
  	date: 'Pending',
  	content: [`
		  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
		  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
			reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
			deserunt mollit anim id est laborum.
			`,
			`
			In cursus turpis massa tincidunt dui ut ornare lectus. Tempor commodo
			ullamcorper a lacus vestibulum sed arcu. Eget lorem dolor sed viverra
			ipsum nunc aliquet bibendum enim. Nec tincidunt praesent semper feugiat.
			Facilisis sed odio morbi quis commodo. Lacus luctus accumsan tortor posuere
			ac ut consequat semper viverra. Vel turpis nunc eget lorem dolor sed viverra.
			Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
			Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Et
			tortor consequat id porta. Ante metus dictum at tempor commodo ullamcorper a lacus.
			At imperdiet dui accumsan sit amet. Viverra justo nec ultrices dui sapien eget.
			Tellus id interdum velit laoreet id donec ultrices. Nibh tortor id aliquet lectus.
			Praesent tristique magna sit amet. Sit amet aliquam id diam maecenas. Laoreet sit
			amet cursus sit amet dictum sit. Ac turpis egestas sed tempus urna.
			`,
		],
  },
}

export default notemap
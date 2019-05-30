const notemap = {
  debt: {
  	title: 'On Debt',
  	content: `
Tech debt is considered shameful in projects. This is wrong. Debt lets you scale faster than otherwise possible and can save you from massive wasted effort. However, it has a dark side beyond just the risk that comes with leverage.

Before diving into tech debt in particular it's useful to understand a few simple concepts of traditional debt. Debt is a sum of money that is owed. You may pay it slowly over time or all in one chunk. At the core we trade money in the future for money today. Tech debt is not monetary. Rather, we are trading engineering time in the future for engineering time today.

Three important properties of tradition debt are interest rate, repayment schedule, and defaults. These have simple definitions and direct correspondence to tech debt.

<span>&#9888;</span>Tech debt has an evil twin. Good tech debt involves tradeoffs to shift time, but should never incur structural risk. Bad debt introduces the incorrect, inherently fragile, or <a href="https://en.wikipedia.org/wiki/Action_at_a_distance_(computer_programming)">spooky action at a distance</a>. Good debt requires moving things around, replacing parts, or deferring upgrades without changing behavior. Bad debt incurs systemic risk and makes your system unsafe.

Notably, interest rates need not be positive. Debt can have zero or negative interest rates; this is attractive debt worth looking out for. Tech debt often has zero interest rates, such as when a system is fully encapsulated. Negative interest rates on debt are especially attractive, and do exist. Code modernization efforts offer an interesting case study in negative interest rates. If we expect many features to be phased out and deleted it may cost less time to do a migration in the future once there's less to migrate.

If you have a very short repayment schedule it can make sense to take on high interest tech debt. Take, for example, a foundational API which adds many new callsites each week and has an untyped interface. Let’s assume that and every callsite needs to be updated by hand. This is high interest tech debt, as the cost mounts rapidly the longer we wait. If the repayment schedule is short enough, say only a few weeks, it may still be prudent to delay the migration. A big launch coming up is a reasonable cause for deferral.

Historically, if a company you owned part of went bankrupt, you personally assumed it's debt with no limits. Ouch. Enter the concept of limited liability. The Economist has a <a href="https://www.economist.com/finance-and-economics/1999/12/23/the-key-to-industrial-capitalism-limited-liability">great article on the history of LLCs</a>. This creates a powerful asymmetry of unlimited upside but limited downside, where if a company fails the rest of your assets are unaffected. Tech debt presents opportunities to capitalize on same asymmetry by leveraging the concept of bankruptcy. Any time you begin a new effort you should ask yourself if it's separate from my other systems and can simply be deleted. <b><code>rm -rf</code></b> is your bankruptcy. If you're able to create that separation and your project is experimental, <b>be aggressive in taking on tech debt</b>. There is a high chance that experimental projects default, and if the project succeeds paying it back will constitute a good problem to have.

While tech debt is a powerful tool it can also lead to ruin. Unlike most traditional debt, you can never be truly certain of the interest rate or total liabilities. You may think your system is properly abstracted away and only requires changes to the implementation file only to realize you need a sweeping refactor. Continually reevaluate your system to identify debt you did not know you had and most importantly <b>do not skimp on API design.</b>

Tech debt is a powerful tool to be respected and utilized. Embrace low, zero, and negative interest rate debt. Embrace debt in projects which have a high risk of failure and are encapsulated. Avoid debt which will balloon quickly such as on foundations.
`.split("\n").filter(word => word.length > 1),
  },
  conviction: {
  	title: 'On Conviction',
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
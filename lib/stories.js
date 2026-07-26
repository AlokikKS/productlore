// ProductLore — story data. Every story tells the product-thinking journey.

export const stories = [
  {
    slug: 'netflix',
    name: 'Netflix',
    product: 'Netflix',
    founders: 'Reed Hastings, Marc Randolph',
    year: 1997,
    hook: "A late fee sparked a streaming revolution.",
    logo: 'N',
    accent: '#E50914',
    gradient: 'from-red-600 via-red-500 to-rose-500',
    badges: ['MVP', 'Product Strategy', 'Trade-offs', 'PM Thinking'],
    readTime: 8,
    sections: {
      worldBefore: `In the late 1990s, watching a movie at home meant driving to Blockbuster, hunting through aisles, and hoping your pick wasn't already rented. If you were even a day late returning it, you paid — sometimes more than the movie itself. Blockbuster made nearly $800M a year on late fees alone. The pain was universal, invisible, and quietly accepted.`,
      spark: `Reed Hastings famously paid a $40 late fee for Apollo 13. On the way to the gym, a question kept circling: what if a video store worked like a gym — a flat monthly fee, keep the movie as long as you want, no penalties? The insight wasn't "mail DVDs." It was: remove the punishment from the experience.`,
      firstMVP: `Marc and Reed mailed themselves a DVD in a paper envelope. It arrived intact. That's it — that was the technical validation. The first Netflix.com in 1998 was a pay-per-rental site, not a subscription. It was closer to Blockbuster than to the Netflix we know. The MVP proved the pipes worked; the business model came later.`,
      turningPoints: `The pivot to a flat-fee, no-late-fee, no-due-date subscription in 1999 changed everything. Then the queue — a small feature that made customers feel in control of their own future. Then Cinematch, the recommendation engine, which turned a warehouse into a personalized store. In 2007, streaming launched as a bonus feature — deliberately not competing with the DVD business. Within four years it had swallowed it.`,
      evolution: `Netflix went from mailing plastic discs to streaming to producing House of Cards in 2013 — the first show greenlit off data, not gut. They killed their own DVD business to protect the streaming one. They rebuilt globally in one weekend in 2016, launching in 130 countries at once. Each move required cannibalizing the previous version of themselves.`,
      today: `Netflix has ~270M paying households, operates in 190+ countries, and spends ~$17B a year on content. It's now a studio, a tech company, a games publisher, and a live-events platform. The DVD envelope is a museum piece; the mindset that made it possible — remove friction, own the relationship — is the operating system.`,
      whatsNext: `Streaming growth is flattening. Password-sharing crackdowns and ads bought time, not a decade. The next frontier is unclear: interactive content underperformed, gaming is unproven, live sports is expensive. The real question is whether Netflix is a distribution company that made content, or a content company that happens to distribute — and which identity wins the next decade.`
    },
    pmQuestions: [
      'Would you have launched a subscription service in 1999 when your DVD-rental business was still growing?',
      'If you were PM in 2007, would you have hidden streaming behind the DVD product, or led with it?',
      "Netflix cancelled its own DVD business years before it had to. Would you have had the discipline to do the same?",
      'What would you build next: deeper personalization, gaming, live, or something no one is talking about yet?'
    ]
  },
  {
    slug: 'airbnb',
    name: 'Airbnb',
    product: 'Airbnb',
    founders: 'Brian Chesky, Joe Gebbia, Nathan Blecharczyk',
    year: 2008,
    hook: "Three air mattresses became a $75B marketplace.",
    logo: 'A',
    accent: '#FF385C',
    gradient: 'from-rose-500 via-pink-500 to-red-500',
    badges: ['MVP', 'Growth', 'PM Thinking'],
    readTime: 9,
    sections: {
      worldBefore: `In 2007, if you traveled to a strange city, you had two options: an expensive hotel or a sketchy Craigslist listing. Hotels sold uniformity. Craigslist sold anonymity and risk. There was no way for a normal person with a spare room to safely become a host, and no way for a traveler to trust a stranger's home. The market had a gaping hole hiding in plain sight.`,
      spark: `Brian and Joe couldn't make rent in San Francisco. A design conference was in town and every hotel was sold out. They blew up three air mattresses in their loft, threw up a one-page website called AirBed & Breakfast, and got three guests at $80 each. The insight wasn't "rent air mattresses." It was: strangers will pay to stay in a stranger's home if you make it feel safe.`,
      firstMVP: `The first site was three photos, a payment link, and a promise of coffee in the morning. No search, no reviews, no map. Just a landing page and a founder who answered emails himself. When they relaunched during the 2008 election as "Obama O's" cereal boxes to fund the company, they proved something rare — the founders could sell anything.`,
      turningPoints: `Two decisions saved Airbnb. First: Paul Graham told them to "do things that don't scale" — so they flew to New York and photographed every listing themselves. Bookings doubled. Second: they built trust into the product — verified IDs, reviews, a $1M host guarantee. Airbnb didn't win because it was cheap. It won because it felt safe.`,
      evolution: `Airbnb went from air mattresses to entire homes, then to Experiences, then to Airbnb Plus, then to long-term stays that saved the company during COVID. In 2020, when travel died, they cut everything non-core, went back to hosts, and IPO'd a few months later at a higher valuation than the entire hotel industry.`,
      today: `Airbnb has ~5M hosts, 7M+ listings, and serves ~150M users across 220+ countries. It's a verb. It has changed the economics of neighborhoods, tourism, and side-income for millions. It quietly rebuilt what "a hotel room" means without ever building a hotel.`,
      whatsNext: `Regulatory pressure is intensifying — cities are banning short-term rentals, and hosts are exiting. Airbnb needs to prove it can grow without cannibalizing housing. The 2024 relaunch bet everything on Experiences and AI-powered discovery. The question is whether Airbnb becomes the everything-travel platform, or a stays company under permanent political siege.`
    },
    pmQuestions: [
      'Would you have flown to New York to take photos yourself, or built a scalable photography marketplace?',
      'During COVID, would you have cut Experiences, or doubled down?',
      'How would you balance host growth vs. the political cost of removing housing supply?',
      'If you were PM today, would you bet more on Experiences, long-term stays, or unbundle Airbnb entirely?'
    ]
  },
  {
    slug: 'apple',
    name: 'Apple',
    product: 'iPhone',
    founders: 'Steve Jobs, Steve Wozniak',
    year: 1976,
    hook: "They killed the iPod to build the iPhone.",
    logo: '',
    accent: '#A2AAAD',
    gradient: 'from-zinc-400 via-zinc-300 to-white',
    badges: ['Product Strategy', 'Trade-offs', 'PM Thinking'],
    readTime: 10,
    sections: {
      worldBefore: `In 2006, phones were terrible. Physical keyboards ate half the device. Browsers were toys. Apps were locked to carriers. The iPod dominated music but its click wheel was made for songs, not everything. Meanwhile Nokia and BlackBerry ran the market — and both were confident nothing was about to change.`,
      spark: `Steve Jobs saw an internal Apple prototype for a multi-touch tablet and realized the technology was too good to waste on a niche product. He redirected it into the thing everyone already carried but hated: their phone. The insight wasn't "build a smartphone." It was: the phone is the wrong shape for what people actually want to do with it.`,
      firstMVP: `The first iPhone had no App Store, no copy-paste, no 3G, no video recording, and cost $499 on a 2-year contract. It couldn't even run third-party apps — Jobs initially insisted web apps were the future. It was a phone, an iPod, and an internet communicator. Three things in one device — and that framing alone changed the industry.`,
      turningPoints: `Jobs reversed himself in 2008 and launched the App Store. That single decision turned the iPhone from a great phone into a platform. Then the iPhone 4 in 2010 — Retina display, FaceTime, and a design so tight it defined the next decade. Killing Flash. Killing the headphone jack. Every removal made the product sharper, and every removal was mocked before it was copied.`,
      evolution: `From one iPhone a year to a lineup. From selling hardware to selling services — Apple's Services business is now larger than Nike. From a phone company to a chip company (M-series). From closed ecosystem to closed-and-thriving ecosystem. Each expansion was defended by the previous one.`,
      today: `~1.4B active iPhones. Apple is a $3T+ company. iPhone alone is a bigger business than most Fortune 100 companies combined. The device is now a camera, wallet, health tracker, car key, and identity — and increasingly the interface for everything else Apple makes.`,
      whatsNext: `Growth in phones has plateaued. Vision Pro is a bet that the next computer isn't in your pocket — it's on your face. Apple Intelligence is a bet that AI runs locally, not in the cloud. Both are strategic answers to the same question: what's the next computer, and can Apple own the shape of it before someone else does?`
    },
    pmQuestions: [
      'Would you have launched the first iPhone without an App Store?',
      'Would you kill the iPod line to protect the iPhone, or milk it as long as possible?',
      'How would you decide when to remove a beloved feature (headphone jack, home button, ports)?',
      'If you were PM on Vision Pro, would you launch at $3,499 or wait for cheaper hardware?'
    ]
  },
  {
    slug: 'uber',
    name: 'Uber',
    product: 'Uber',
    founders: 'Travis Kalanick, Garrett Camp',
    year: 2009,
    hook: "Can't find a cab in Paris. Build the world's largest transportation network.",
    logo: 'U',
    accent: '#000000',
    gradient: 'from-neutral-800 via-neutral-700 to-neutral-500',
    badges: ['MVP', 'Growth', 'Trade-offs'],
    readTime: 9,
    sections: {
      worldBefore: `In 2008, hailing a taxi in most cities was awful. In San Francisco, you'd stand on a corner in the rain waving your hand. Cabs didn't come when called. Cash-only. Rude drivers. No idea when you'd arrive. Meanwhile, the smartphone in your pocket knew exactly where you were — but nothing in the world used that data yet.`,
      spark: `Travis and Garrett were stuck in Paris, couldn't find a taxi, and started riffing on the idea of pressing a button and having a black car appear. The insight wasn't "a taxi app." It was: GPS + smartphones + credit-cards-on-file collapse the friction of hiring a car to almost zero.`,
      firstMVP: `UberCab launched in San Francisco in 2010 as a black-car service. You opened the app, saw a car on a map, tapped a button, and it came. No cash. No addresses. No tips. It was luxury, not disruption — priced 1.5x a taxi, aimed at professionals. The first 100 users included half of tech Twitter.`,
      turningPoints: `Three decisions rewrote transportation. First: UberX in 2012 — normal cars, normal drivers — turned Uber from a luxury to a utility. Second: surge pricing — deeply unpopular, mathematically correct, and the reason cars appeared when you needed them. Third: launching in dozens of cities simultaneously, before regulation could catch up. Ask forgiveness, not permission.`,
      evolution: `From black cars to UberX to UberPool to Uber Eats to freight to autonomous R&D to a public company. Uber survived a leadership crisis, a cultural reckoning, mass driver protests, and a global pandemic that dropped rides 80% overnight. Eats saved them. Then the return of ride growth made them profitable for the first time in 2023.`,
      today: `~150M monthly active users, ~7M drivers, in ~70 countries. Uber is finally profitable and now the platform for both mobility and delivery. It quietly rewired urban transport in a decade — millions of people no longer own a car because they no longer need to.`,
      whatsNext: `Autonomous vehicles are the existential question. If Waymo scales, Uber's driver moat vanishes. Uber's answer: become the marketplace layer that any autonomous fleet plugs into. The next 5 years will decide whether Uber owns demand aggregation or gets disintermediated by the car companies it once disrupted.`
    },
    pmQuestions: [
      'Would you have launched UberX and cannibalized your premium black-car business?',
      'How would you defend surge pricing when a hurricane triples fares?',
      'Would you launch in cities where the service is technically illegal?',
      'If AVs arrive in 5 years, do you build your own fleet, partner, or become pure marketplace?'
    ]
  },
  {
    slug: 'spotify',
    name: 'Spotify',
    product: 'Spotify',
    founders: 'Daniel Ek, Martin Lorentzon',
    year: 2006,
    hook: "Beat piracy by building something better than free.",
    logo: 'S',
    accent: '#1DB954',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    badges: ['Product Strategy', 'Growth', 'PM Thinking'],
    readTime: 8,
    sections: {
      worldBefore: `In the mid-2000s, music was in chaos. Napster had blown up the industry. iTunes charged $0.99 a song and felt like a lifeline for labels. But most people just pirated — through LimeWire, Kazaa, or torrents. The labels were sure the answer was tougher DRM. The users had already voted with their downloads.`,
      spark: `Daniel Ek watched piracy and realized the problem wasn't price — it was friction. Torrents were slow, virus-ridden, and awkward. The insight: music will feel free when it's frictionless. If you can beat piracy on speed and ease, people will accept anything on top — even ads, even a subscription.`,
      firstMVP: `Early Spotify felt like a magic trick. Type any song. It plays instantly. In a broadband world where even YouTube buffered, this was uncanny. The trick was Peer-to-peer plus a clever cache — the same tech pirates used, now legal and licensed. Free with ads, or pay to remove them.`,
      turningPoints: `Convincing the labels was the hardest product decision — it took years of negotiation and equity stakes to license the catalog. Then the Facebook integration in 2011 made music social. Then the launch of Discover Weekly in 2015 — a personalized playlist every Monday — turned recommendation into a habit. Then podcasts, then Spotify Wrapped, which turned data into identity.`,
      evolution: `From music streaming to podcasting (Rogan, Gimlet, Anchor) to audiobooks to a full audio platform. From licensing to producing original content. From ads and subscriptions to a two-sided marketplace where artists pay for promotion. Each expansion added revenue lines the labels didn't control.`,
      today: `~600M monthly users, ~240M paying subscribers, in 180+ markets. Spotify is the default audio interface for most of the world. Wrapped is a cultural event. Discover Weekly is where careers start. Yet artist payouts remain contentious, and margins are thin.`,
      whatsNext: `The business model still leaks — every stream sends 70% back to labels. AI-generated music, personalized soundtracks, and creator tools may be Spotify's path to a higher-margin future. The question is whether the next Spotify is a bigger music library, or an audio operating system that no longer depends on the labels at all.`
    },
    pmQuestions: [
      'Would you have offered a free tier, knowing labels hated it?',
      'Would you spend $1B on podcast acquisitions with no clear ROI?',
      'How would you balance artist payouts vs. platform margins?',
      'If AI music becomes indistinguishable from human music, do you host it, label it, or block it?'
    ]
  },
  {
    slug: 'amazon',
    name: 'Amazon',
    product: 'Amazon',
    founders: 'Jeff Bezos',
    year: 1994,
    hook: "Started with books. Ended up selling everything.",
    logo: 'a',
    accent: '#FF9900',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    badges: ['MVP', 'Product Strategy', 'Growth'],
    readTime: 10,
    sections: {
      worldBefore: `In 1994, retail was physical. If you wanted a book, you went to a store, and the store carried the 100,000 books it could physically stock. The remaining 3 million books in print were effectively invisible. The internet existed but almost no one bought anything on it. Bezos saw a chart of internet growth — 2,300% annually — and decided that number alone justified quitting his Wall Street job.`,
      spark: `Bezos made a list of 20 products that could be sold online. Books won because they had massive catalog (millions of titles), a standardized format (no sizing, no returns problem), and two dominant distributors already doing the hard warehousing work. The insight wasn't "sell books online." It was: use books to acquire customers, then sell them everything.`,
      firstMVP: `Amazon.com launched in July 1995 from a garage in Bellevue. It had a bell that rang when someone placed an order. Within a month, they were shipping to all 50 states and 45 countries. The site was ugly, the recommendations were manual, and Bezos personally packed boxes on the floor. But it worked because it did one thing better than any store: it had everything.`,
      turningPoints: `Reviews in 1995 — publishers were furious, users loved it. 1-Click ordering in 1997 — patented friction removal. Amazon Marketplace in 2000 — turning competitors into distribution. Prime in 2005 — the psychological trick of pre-paying for shipping. AWS in 2006 — accidentally becoming the internet's backend. Kindle in 2007 — willing to disrupt their own book business.`,
      evolution: `From bookstore to "everything store" to logistics company to cloud company to advertising company to Hollywood studio to grocer (Whole Foods) to hardware maker (Alexa, Kindle). Every expansion looked crazy at the time. Each one worked because Amazon obsessed over the same primitive: reduce the customer's friction, and let compounding do the rest.`,
      today: `~$600B in revenue, ~1.5M employees, ~200M Prime members. AWS runs a third of the internet. Amazon Ads is now larger than YouTube. Amazon touches nearly every part of Western commerce — sometimes as retailer, sometimes as landlord, sometimes as arms dealer to its own competitors.`,
      whatsNext: `Regulatory pressure is intense — antitrust in the US and EU. Retail margins are thin. The next chapter is AI infrastructure via AWS (Bedrock, Trainium chips), robotics-driven logistics, and healthcare (One Medical, PillPack). The bet is that the flywheel spins again in a new category before the old one stalls.`
    },
    pmQuestions: [
      'Would you have launched Prime with unlimited 2-day shipping, knowing every order would lose money?',
      'AWS started as internal infra. Would you have opened it up to competitors like Netflix?',
      "Would you cannibalize your book business with the Kindle, or protect print margins?",
      `If antitrust forces a breakup, what's the sharpest cut — AWS, Ads, or Marketplace?`
    ]
  },
  {
    slug: 'tesla',
    name: 'Tesla',
    product: 'Tesla',
    founders: 'Martin Eberhard, Marc Tarpenning, Elon Musk (early investor/CEO)',
    year: 2003,
    hook: "Made electric cars cool before making them cheap.",
    logo: 'T',
    accent: '#CC0000',
    gradient: 'from-red-500 via-red-600 to-neutral-800',
    badges: ['Product Strategy', 'Trade-offs', 'PM Thinking'],
    readTime: 9,
    sections: {
      worldBefore: `In the early 2000s, electric cars were golf carts. The GM EV1 had been recalled and crushed. Hybrids like the Prius were the "green" option — slow, ugly, and moralized. The car industry was sure EVs were a curiosity, not a category. Range was 40 miles, styling was penance, and infrastructure was nonexistent.`,
      spark: `Eberhard and Tarpenning realized lithium-ion batteries (the same tech in laptops) had been quietly improving 8% a year. Stack thousands of them together and you could actually build a fast, long-range car. The insight wasn't "make electric cars." It was: make the desirable version first, then work down-market. Reverse the traditional launch strategy.`,
      firstMVP: `The Roadster in 2008. Built on a Lotus Elise chassis. 245 miles of range. 0–60 in under 4 seconds. $109,000. It was expensive, unreliable, hand-built, and produced in tiny volume — none of which mattered. It made electric cars look sexy for the first time, and it seeded a customer base that could afford to fund the next car.`,
      turningPoints: `The Model S in 2012 — a real luxury sedan that beat every gas competitor on performance. The Supercharger network — building infrastructure Tesla didn't have to build, in order to sell cars only Tesla made. Over-the-air software updates — turning a car into a device that got better over time. Autopilot — controversial, imperfect, but the first mass-market demo of self-driving hardware.`,
      evolution: `From Roadster to Model S/X to Model 3/Y — the mass-market car that saved the company. From cars to solar to home batteries to grid-scale storage. From selling cars to selling FSD subscriptions. Then Cybertruck, then Optimus, then robotaxis. Tesla stopped being a car company and became a bet on physical-world AI.`,
      today: `~1.8M cars delivered a year. The largest EV maker in the West. The Model Y was briefly the best-selling car in the world across all fuel types. Tesla's Supercharger network has become the industry standard — Ford, GM, and others adopted its plug. Every legacy automaker's EV division exists because Tesla proved the market.`,
      whatsNext: `Competition is finally real — BYD, Chinese EVs, and legacy makers are catching up. Growth in cars has slowed. The next chapter is autonomy (FSD, robotaxis), humanoid robotics (Optimus), and energy storage. Tesla's valuation only makes sense if one of these bets becomes a business bigger than the car itself.`
    },
    pmQuestions: [
      'Would you have launched a $109K sports car before a mass-market model?',
      'Would you invest billions in Supercharger infrastructure that only supports your own cars?',
      'How would you communicate Autopilot capabilities — safely, or aggressively for adoption?',
      "Which bet gets your next $10B: FSD, Optimus, or the next-gen affordable EV?"
    ]
  },
  {
    slug: 'figma',
    name: 'Figma',
    product: 'Figma',
    founders: 'Dylan Field, Evan Wallace',
    year: 2012,
    hook: "Bet 4 years on WebGL. Killed Sketch in a weekend.",
    logo: 'F',
    accent: '#F24E1E',
    gradient: 'from-orange-500 via-pink-500 to-purple-500',
    badges: ['MVP', 'Product Strategy', 'PM Thinking'],
    readTime: 8,
    sections: {
      worldBefore: `In 2012, design tools were desktop-only. Photoshop was for pixels. Sketch, on Mac, had just become the default for UI design. Every design was a file — sent by Dropbox, emailed, versioned as "final_v3_FINAL_use-this-one.sketch". Designers worked alone; engineers guessed at handoffs; nothing rendered in a browser.`,
      spark: `Dylan Field, on a Thiel Fellowship, and Evan Wallace, a WebGL genius, asked: could design tools live in the browser? Not as a slow toy, but as a real professional tool? The insight wasn't "design in a browser." It was: if the file lives on the web, collaboration becomes native — like Google Docs for design.`,
      firstMVP: `They spent four years — four years — building the rendering engine before launching. Most startups would have shipped in six months. Figma didn't launch publicly until 2016. When they did, the demo was jaw-dropping: multiple designers editing the same file in real time, in a browser, with no lag. Designers didn't know they wanted this. They just knew Sketch suddenly felt lonely.`,
      turningPoints: `Free tier for individuals was the growth engine — every designer who tried it evangelized it inside their company. FigJam in 2021 turned Figma from a design tool into a whiteboarding platform, extending it to PMs and engineers. The Community — plugins, templates, files — turned Figma into an ecosystem instead of an app.`,
      evolution: `From design tool to collaboration platform to whiteboard (FigJam) to dev handoff to design system infrastructure. Adobe's failed $20B acquisition attempt in 2022 was, in hindsight, both a validation and a warning shot. When it collapsed in 2023, Figma emerged bigger — richer, independent, and now a public-company path is open.`,
      today: `~13M+ users, used by every major tech company, and the default design tool for the industry. Figma is where products get imagined before they're built. It changed how design teams operate, how PMs review, and how engineers implement.`,
      whatsNext: `AI is the next battleground — turning intent into design, or design into code. Figma Slides and FigJam AI are early bets. The real question is whether Figma becomes the design layer of AI-native software creation, or gets flanked by AI tools that skip design tools entirely.`
    },
    pmQuestions: [
      'Would you spend 4 years on infrastructure before launching a product?',
      'Would you give away the professional tool for free to solo designers?',
      'Would you have accepted the Adobe acquisition, or bet on independence?',
      'If AI can generate UIs from prompts, does Figma still need a canvas — or a new interface entirely?'
    ]
  },
  {
    slug: 'notion',
    name: 'Notion',
    product: 'Notion',
    founders: 'Ivan Zhao, Simon Last',
    year: 2016,
    hook: "Rebuilt the whole product from scratch, twice, before launching.",
    logo: 'N',
    accent: '#000000',
    gradient: 'from-neutral-700 via-neutral-500 to-neutral-300',
    badges: ['MVP', 'Product Strategy', 'Trade-offs'],
    readTime: 8,
    sections: {
      worldBefore: `Before Notion, knowledge work was fragmented. Google Docs for writing. Evernote for notes. Trello for tasks. Confluence for wikis. Every team's "single source of truth" was actually spread across five apps. Switching costs were high, links were broken, and search was awful across tools.`,
      spark: `Ivan Zhao was obsessed with the idea that software should be as malleable as Lego — small building blocks users could arrange into whatever they needed. The insight wasn't "another notes app." It was: give people primitives (blocks) instead of products (apps), and let them build the app they actually need.`,
      firstMVP: `The first version of Notion in 2015 nearly killed the company. It was slow, buggy, and the founders were burning through savings in Kyoto. Ivan threw it all away and rebuilt from scratch, twice. Version 1.0 in 2016 was a bet on a fundamentally different metaphor: everything is a block, and blocks can nest infinitely.`,
      turningPoints: `Templates and the community — users started sharing their setups, and each shared template was a live tutorial. The Personal Pro free-for-students program. Databases in 2018 — turning Notion from a wiki into a real work OS. Notion AI in 2023 — early, aggressive, and native. Each move deepened the switching cost.`,
      evolution: `From notes to docs to wiki to database to project management to CRM to AI-native workspace. Notion barely marketed for years — growth was almost entirely word of mouth, template sharing, and student adoption that flowed into first jobs. The bottom-up motion turned into enterprise deals almost accidentally.`,
      today: `~100M+ users, tens of thousands of paying teams, and the default "second brain" for a generation of knowledge workers. Notion has become verb and noun — "my Notion," "put it in Notion." Startups run on it. Students plan their lives with it.`,
      whatsNext: `AI-first competitors (Coda, Mem, Obsidian, plus AI-native newcomers) are pushing hard. Notion's answer is Notion AI Q&A, agents that live inside your workspace, and a serious enterprise push. The question is whether "workspace" survives as a category — or gets absorbed into whatever the AI chat interface becomes.`
    },
    pmQuestions: [
      'Would you throw away a working product to rebuild the metaphor?',
      'Would you offer unlimited free usage to students, knowing they use it heavily?',
      'How would you defend against native AI-first workspaces?',
      'If chat becomes the interface for work, does Notion pivot to agents — or double down on the canvas?'
    ]
  },
  {
    slug: 'openai',
    name: 'OpenAI',
    product: 'ChatGPT',
    founders: 'Sam Altman, Ilya Sutskever, Greg Brockman, Elon Musk & others',
    year: 2015,
    hook: "A research demo they weren't sure to launch. It broke the internet.",
    logo: 'O',
    accent: '#10A37F',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    badges: ['MVP', 'Growth', 'Product Strategy', 'PM Thinking'],
    readTime: 10,
    sections: {
      worldBefore: `Before 2022, AI was mostly invisible — recommendation systems, spam filters, autocomplete. Every "chatbot" was a scripted disappointment. Consumer AI meant Siri, Alexa, or a customer-service dead-end. Academic labs argued about AGI. No one outside of research was using large language models directly. The word "prompt" meant nothing to most people.`,
      spark: `OpenAI was founded in 2015 as a nonprofit research lab betting that scaling neural nets — bigger models, more data, more compute — would keep working. GPT-1, GPT-2, GPT-3 each vindicated the bet. But the products were APIs for developers. The real insight came in 2022: what if we wrap this in a chat window and let anyone talk to it?`,
      firstMVP: `ChatGPT launched November 30, 2022, as a "low-key research preview." The team wasn't sure it was worth a formal launch. Sam Altman said internally he expected 20,000 users. It hit 1 million users in 5 days. 100 million in 2 months — the fastest-growing consumer product in history. The MVP was almost accidental — the base model was already GPT-3.5.`,
      turningPoints: `The pricing decision — free tier + $20 Plus — turned it into a mass consumer product overnight. Plugins, then GPTs, then the API — each move opened up new developer ecosystems. GPT-4 in 2023 proved the scaling bet was still alive. The Microsoft partnership gave them capital and cloud without giving up product ownership. The board saga in late 2023 nearly killed the company — and cemented Sam's control.`,
      evolution: `From research lab to API company to consumer product to platform. From text to code to images (DALL·E) to audio (Whisper) to voice (advanced voice mode) to video (Sora) to reasoning (o1, o3). Each modality collapsed into the same product surface: chat. The interface never changed, but what it could do doubled every few months.`,
      today: `~300M+ weekly users. ChatGPT is now embedded into how millions of people write, code, learn, and think. It's changing knowledge work, education, customer support, and search — while regulators, publishers, and rivals race to catch up. OpenAI is valued at ~$150B+ and has effectively created a new product category from scratch.`,
      whatsNext: `Competition is fierce — Anthropic, Google DeepMind, Meta, xAI, and open-source models are closing gaps fast. The next frontier is agents — AI that acts, not just answers. And beyond that, the hardest question: does the interface stay as chat, or does it dissolve into every product you use? OpenAI is betting on both.`
    },
    pmQuestions: [
      'Would you have launched ChatGPT as a "research preview" — or waited to polish?',
      'Would you launch a $20/mo consumer subscription for an unproven category?',
      'How would you balance open research vs. commercial product secrecy?',
      'If agents replace apps, what does the ChatGPT interface look like in 3 years?'
    ]
  }
];

export function getStoryBySlug(slug) {
  return stories.find((s) => s.slug === slug);
}

export const badgeMeta = {
  MVP: { icon: '\uD83D\uDE80', label: 'MVP' },
  'Product Strategy': { icon: '\uD83C\uDFAF', label: 'Product Strategy' },
  Growth: { icon: '\uD83D\uDCC8', label: 'Growth' },
  'Trade-offs': { icon: '\u2696\uFE0F', label: 'Trade-offs' },
  'PM Thinking': { icon: '\uD83E\uDDE0', label: 'PM Thinking' }
};

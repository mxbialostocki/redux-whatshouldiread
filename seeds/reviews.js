exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { id: 1, reviewer_name: 'Bam Bam', review_head: 'Slow Burner in Casablanca', review_body: `‘You have not been yourself lately,” the narrator of Vendela Vida’s new novel says to herself. Or maybe the narrator says it to the character: the story is told entirely in the second person, a decision that is strikingly odd at the start, then quickly becomes part of the alienating texture of this intoxicatingly strange novel. This “you” compels the reader into a very disquieting question from the first page – who am I? Am I this you? – which, as it happens, is the same question the main character orbits throughout. Who is she? Is she you? The limits of self wear away and identity bleeds out, and no one is quite secure in their skin.`, review_isbn: 9780062110916 },
        { id: 2, reviewer_name: 'Webb T', review_head: 'A Response to a McCahon Painting', review_body: `This exquisitely produced hand-bound book was first published in a limited first edition of 150 hand-numbered copies. The first edition has now sold out (though may still be available from some book shops, such as Unity Books) but a second, un-numbered edition is now available. The books are bound with hemp and flax-linen thread, and features a fly-leaf insert of hand-made harakeke (New Zealand flax) paper made by Pakohe Papers in Whanganui.`, review_isbn: 9780994134509 },
        { id: 3, reviewer_name: 'mxbialostocki', review_head: 'Ever Been Raised in a Seminary?', review_body: `When Patricia was 19, in 2002, she met her future husband Jason on an internet poetry forum. She was living at home – her father, a “loose, lazy pile of carnality”, was happy to spend money on himself but unable to fund his children through college. After months of exchanged messages, Jason drove from Colorado to Missouri finally to meet her. He half-assumed she would be “fifty years old and Latina”; Lockwood in turn was worried that poets “were the sort of people who said ‘lo’ in conversation”. Her parents were naturally wary of the stranger, and Jason was greeted by her father with the screech: “Gimme your license. I got cop friends.” Though an immediate marriage proposal took place – “in the parking lot of … the most matrimonial of all grocery stores” – her mother and father were convinced Tricia was about to drive off with a murderer. It was her sister Mary who pointed out that “We are the ones who are not normal”.`, review_isbn: 9780141984599 },
        { id: 4, reviewer_name: 'J Tapsell', review_head: 'Scathing attck on the aristocracy', review_body: `For more than twenty years, acclaimed author Edward St. Aubyn has chronicled the life of Patrick Melrose, painting an extraordinary portrait of the beleaguered and self-loathing world of privilege. This single volume collects the first four novels "Never Mind," "Bad News," "Some Hope," and "Mother's Milk," a Man Booker finalist to coincide with the publication of "At Last," the final installment of this unique novel cycle.`, review_isbn: 9780312429966 },
        { id: 5, reviewer_name: 'Eve Henare', review_head: `help me i'm stuck in a computer`, review_body: `This reissue of Grace Paley's classic collection—a finalist for the National Book Award—demonstrates her rich use of language as well as her extraordinary insight into and compassion for her characters, moving from the hilarious to the tragic and back again. Whether writing about the love (and conflict) between parents and children or between husband and wife, or about the struggles of aging single mothers or disheartened political organizers to make sense of the world, she brings the same unerring ear for the rhythm of life as it is actually lived. The Collected Stories is a 1994 National Book Award Finalist for Fiction.`, review_isbn: 9780374530280 },
        { id: 6, reviewer_name: 'Billy Bones', review_head: `ha ha ha ha h a`, review_body: `The book opens with a scene of the child Joana playing in the garden, making up poems for her father. Joana's wildness and barely suppressed violence, along with her linguistic creativity, are her most notable features. She is frequently compared to animals: over the course of the book Lispector compares her to a bird, a snake, a wildcat, a horse, and a dog. She commits transgressive acts—as a child she throws a book at an old man's head, for example, and as a married woman she leaves her husband, Otávio, and greets the news of his adultery—he has made another woman, his old friend Lídia, pregnant—with utter indifference. She is not so much immoral as she is amoral: “Evil is not living, and that’s it. Dying is already something else. Dying is different from good and evil.”[8] In the book, she cites long passages from Spinoza, the longest quotes that appear anywhere in her novels; it seems that she felt an affinity with the Dutch philosopher's amoral conception of the world.`, review_isbn: 9780811220026 },
        { id: 7, reviewer_name: 'Emily Parkes', review_head: `how many cats can you fit in a pail?`, review_body: 'An unusually strong first book, this collection of short stories depends on exquisitely crafted surfaces that conceal shocking emotional force. Three of the stories are obliquely connected and feature young women on the edge. In the first of these, a new mother contemplates her new baby; in the second, a girl finds herself in rehab; and in the final story, the main character goes to jail. Other characters include a New Zealand serviceman returned from active duty in Dili, the employees of a $2 shop, and a vegan couple at a Samoan resort.', review_isbn: 9780864736253 },
        { id: 8, reviewer_name: 'Bryce G Williard', review_head: `Ever fucked a fish? You think i'm kidding but I'm not`, review_body: `The Pisces is many things: a jaunt in a fabulous voice, a culture critique of Los Angeles, an explicit tour of all kinds of sex (both really good and really bad), but possibly most of all, it is a persuasive excavation into what might drive Lucy’s compulsion for a certain kind of connection ... Broder’s voice has a funny, frank Amy Schumer feel to it, injected with moments of a Lydia Davis-type of abstraction that can turn the existence of a woman walking by in skimpy silk shorts into a meditation on meaninglessness. These are often the strongest moves of the novel’s voice: from the minor keen observation into the resonant theoretical. At other times, though, we are so centered in Lucy’s head that the outside world drifts too far away ... By the end, the character and Broder acknowledge something else is going on. There is plenty of lively sex and humor here for readers to relish, but trade Eros for Thanatos for the book’s center — and depth`, review_isbn: 9781524761554 },
        { id: 9, reviewer_name: 'Paul Renwick', review_head: `the last person to read this chopped off their hand aftrewards`, review_body: `Having read an early excerpt of Last Days in the form of a short run glossy pamphlet titled The Brotherhood of Mutilation years ago, I remember feeling, in the digestion of that fragment, as if I'd stumbled through a door in my home I hadn't noticed was always there, leading to another version of the world that seemed like ours but also wasn't. A secret place, cryptic like a snuff film, but on paper, made of language. And yet, the full novel version of Last Days is all about truncation—it follows the experience of an ex-detective named Kline, who is abducted into a cult-like society that believes amputation brings people closer to God. Once taken, he is forced to help them investigate who murdered their leader. The clinical tone with which Evenson is able to traverse such situations, and the strange stark architecture of their world, makes even the most insidious or repulsive situations seem plausible, mathematical, nearby. Nothing is real, so everything is real.`, review_isbn: 9781566894166 },
        { id: 10, reviewer_name: 'Alice Gatland', review_head: `Moving through love, motherhood, sexuality, family and anxiety, these poems infuse universal themes with wit and sudden, even shocking beauty.`, review_body: `HFSB, The Jessie Mackay Best First Book Award for Poetry 2018? Must be worth a read.`, review_isbn: 9781776561049 },
        { id: 11, reviewer_name: `mxbialostocki`, review_head: `A 1920s circus fantasy horror in dustbowl America`, review_body: `Two young boys witness the disturbing phenomena of an ageless carnival passing through their small town. As the adults of the town fall further and further into the Ringmaster's mythical power, the boys face the trials of adulthood: getting people to listen to what you're fucking saying.`, review_isbn: 9780575078741 },
        { id: 12, reviewer_name: `mxbialostocki`, review_head: `“I’d rather have a bottle in front of me than a frontal lobotomy.”`, review_body: `An all-encomassing collection of Dorothy Parker's poetry, short stories, and book reviews, and letters to- and from- a mass of fascinating characters. She quit book reviewing for the New York Times because it was "inteferring with her reading"`, review_isbn: 9780143039532 },
        { id: 13, reviewer_name: `mxbialostocki`, review_head: `Willard is a tormented veteran of the carnage in the South Pacific who can't save his wife, Charlotte, from a slow death by cancer no matter how much sacrificial blood he pours on his 'prayer log'`, review_body: `Carl and Sandy Henderson, a husband-and-wife team of serial killers, trawl America's highways searching for suitable models to photograph and exterminate. The spider-handling preacher Roy and his crippled virtuoso-guitar-playing sidekick are running from the law. And caught in the middle of all this is Arvin, Willard and Charlotte's orphaned son, who grows up to be a good but also violent man in his own right.`, review_isbn: 9780099563389 },
        { id: 14, reviewer_name: `mxbialostocki`, review_head: `Have you ever raised a Duck on home-distilled whiskey?`, review_body: `In what fucking circumstance would you *not* want to read a book about an alcoholic duck locked into a life-long battle with a violent wild pig? Seriously. Ask yourself how you really feel about this.`, review_isbn: 9781597141581 },
        { id: 15, reviewer_name: `mxbialostocki`, review_head: `Germanic horror fable about the devil in a Spider's form. Let's fuck some shit up.`, review_body: `Upon conscription from the king of the nation to build a castle impossible by human standards, the populace of a small village make a pact with a devil the woods... and fail to hold up their end of the bargain. What follows is an eerie treatise on society's tendencey to take the easiest option available, with the eventual realisation that we are rarely willing to fulfil the contracts we enter into. Because people are short sighted and rather stupid.`, review_isbn: 9781590176689 },
        { id: 16, reviewer_name: `mxbialostocki`, review_head: `Need a psycho-sexual religious allegory? ACTUAL FINGERNAIL MARKS.`, review_body: `The Rum Preacher, named so because he is found half naked and trolleyed on the steps when his congregation shows up on Sunday, is cast out of his own church by a sheer-white clad newcomer who promises to whip the town into shape. But the new preacher is not all they seem. So dangerously ruffling that the gay author was accused of being homophobic upon submitting the first draft because of the depth of psychological analysis. If I'm being honest I doubt you can even handle this book. `, review_isbn: 9781780748498 },
        { id: 17, reviewer_name: `mxbialostocki`, review_head: `Witches Overthrow a Jamaican Sugar Plantation, Kind of.`, review_body: `No it is what it sounds like, it will really fuck you up but also blow your mind.`, review_isbn: 9781594484360 },
        { id: 18, reviewer_name: `mxbialostocki`, review_head: `Fiona Fucking Pardington!!`, review_body: `Find Your Old A Beautiful Hesitation Review`, review_isbn: 9781776560547 },
        { id: 19, reviewer_name: `mxbialostocki`, review_head: `I'd like to take this opportunity to ruin your childhood.`, review_body: `Legendary Witch/Cat duo Meg and Mog have grown up into depressed stoners living in (probably) Australia somewhere. Very little goes well for anyone in this narrative.`, review_isbn: 9781606997437 },
        { id: 20, reviewer_name: `mxbialostocki`, review_head: `Wait, an actual Island of Horses?`, review_body: `Dillon wrote in Irish Gaelic at the start of her writing life, but as her works affected more people she diversed into English. In a captivating portrait of coastal Irish life, two young adventurers discover a harras and grapple with keeping the secret from their parents. Don't be some fucker who thinks that children's books are for children, if you like horses this book is as much for you as Black Beauty is.`, review_isbn: 9781590171028 }
      ])
    })
}

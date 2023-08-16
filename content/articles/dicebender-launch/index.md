---
title: "DICEBENDER Launch"
description: "Track your games. Level up your group. Find community. Play Together. Win."
date: "2023-08-07"
banner:
  src: "../../images/ranger.jpg"
  alt: "Ranger Vagabond"
  caption: 'Photo of the critically-acclaimed <u><a href="https://boardgamegeek.com/boardgame/237182/root">Root board game</a></u>'
categories:
  - "Dicebender"
  - "Gaming"
  - "Software"
  - "Next.js"
keywords:
  - "Next.js"
  - "React"
  - "Board Games"
  - "Game Tracker"
---

As an avid board gamer and data geek, visualizations within games showing your performance have always been interesting to me. It could be a breakdown of how many shots you've taken with each gun in Ghost Recon Wildlands or how many times you've cut people off in Curve Fever -- either way I loved digging into the details. That's why I built <u><a href="https://dicebender.com/" target="_blank">Dicebender</a></u>, a game tracking app for your gaming groups. Built for friends, conventions, and game shops.

### How it levels up your gaming group
No more baseless claims of who's the best -- now you'll know. With Dicebender, you can track every game your group plays. This includes what faction each player played, their score, and more! This gives you access to all sorts of fun stats like your win frequency with certain 7 Wonders factions, or even how well you perform on different maps in Root!
![Initial mockups of Dicebender were called 'Victor'](../../images/victor_v.png "Initial mockups of Dicebender were called 'Victor'")

### Current Progress
Dicebender's first commit was on June 22nd, 2023. 46 days later and development is flying along! It runs using Next.js, a cutting-edge Node.js framework that utilizes React. That combination in particular enabled development to fly along with the help of tools like <u><a href="https://www.tremor.so/" target="_blank">Tremor</a></u>, <u><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a></u>, and <u><a href="https://next-auth.js.org/" target="_blank">NextAuth</a></u>.

Currently users can:
- Sign in using their Google or Discord accounts (shoutout to the Woodland Warriors discord)
- Create and manage gaming groups
- Join public groups (or private groups they're invited to)
- Add game sessions and track who played what and their scores
- Lookup games using BGG's API and add them to the Dicebender database
- See visualizations of their playing history including which factions they perform well with and which players are their "rivals"
- View rankings of group members ordered by wins or "bounty" (our way of tracking how well a player has been performing lately)

<!-- Interestingly enough, initial concepts for Dicebender were actually built using the Symfony PHP framework (under a different name at the time: "Victor"). -->

![Ranger Vagabond](../../images/ferry.jpg "The vagabond steals the game...again")

### Next Steps
Dicebender is far from complete. Just take a look at its atrocious color scheme!

Exciting things planned:
- Better visualizations
- MORE ways to view the data being stored -- specifically easier ways to get into the data from different angles
- Ability for users to contribute components and factions to a game in the system
- UX/UI Overhaul -- I want things to be as easy, clean, and beautiful as possible now that initial functionality is up
- Ability to create Events/Tournaments complete with brackets
- Customizable Group Dashboards!
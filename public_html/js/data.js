var TT2 = {
    Artifacts: [
        {tier: 'S', id: 1, name: 'Book of Shadows', maxLvl: 0, addupPerLvl: 0.05, damPerLvl: 0.3, costCoef: 0.7, costExp: 2.5, offset: 1, effect: 'Prestige Relic', pref: '&#10005', app: ''},
        {tier: 'A', id: 2, name: 'Parchment of Foresight', maxLvl: 0, addupPerLvl: 0.2, damPerLvl: 0.4, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'War Cry Skill Effect', pref: '&#10005', app: ''},
        {tier: 'A', id: 3, name: 'Laborer\'s Pendant', maxLvl: 0, addupPerLvl: 0.2, damPerLvl: 0.4, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Hand Of Midas Effect', pref: '&#10005', app: ''},
        {tier: 'A', id: 4, name: 'Heroic Shield', maxLvl: 0, addupPerLvl: 0.2, damPerLvl: 0.5, costCoef: 0.7, costExp: 1.8, offset: 1, effect: 'Boss Gold', pref: '&#10005', app: ''},
        {tier: 'A', id: 5, name: 'Furies Bow', maxLvl: 0, addupPerLvl: 0.15, damPerLvl: 0.6, costCoef: 0.7, costExp: 1.7, offset: 1, effect: 'Ranged Hero Damage', pref: '&#10005', app: ''},
        {tier: 'A', id: 9, name: 'Hero\'s Blade', maxLvl: 0, addupPerLvl: 0.05, damPerLvl: 0.5, costCoef: 0.7, costExp: 1.7, offset: 1, effect: 'All Hero Damage', pref: '&#10005', app: ''},
        {tier: 'B', id: 10, name: 'Heavenly Sword', maxLvl: 0, addupPerLvl: 0.05, damPerLvl: 0.3, costCoef: 0.7, costExp: 2.2, offset: 1, effect: 'All artifact Damage', pref: '&#10005', app: ''},
        {tier: 'B', id: 11, name: 'Divine Retribution', maxLvl: 0, addupPerLvl: 0.02, damPerLvl: 0.3, costCoef: '1.0', costExp: 2, offset: 1, effect: 'All Damage', pref: '&#10005', app: ''},
        {tier: 'B', id: 39, name: 'Influential Elixir', maxLvl: 0, addupPerLvl: 0.1, damPerLvl: 0.5, costCoef: 0.7, costExp: 1.7, offset: 1, effect: 'Clan Ship Damage', pref: '&#10005', app: ''},
        {tier: 'B', id: 12, name: 'Book of Prophecy', maxLvl: 0, addupPerLvl: 0.05, damPerLvl: 0.3, costCoef: 0.7, costExp: 2.2, offset: 1, effect: 'All Gold', pref: '&#10005', app: ''},
        {tier: 'B', id: 18, name: 'Blade of Damocles', maxLvl: 0, addupPerLvl: 0.02, damPerLvl: 0.3, costCoef: 0.65, costExp: 2, offset: 1, effect: 'Sword Boost', pref: '&#10005', app: ''},
        {tier: 'B', id: 19, name: 'Helmet of Madness', maxLvl: 0, addupPerLvl: 0.02, damPerLvl: 0.3, costCoef: 0.65, costExp: 2, offset: 1, effect: 'Helmet Boost', pref: '&#10005', app: ''},
        {tier: 'B', id: 40, name: 'Titanium Plating', maxLvl: 0, addupPerLvl: 0.02, damPerLvl: 0.3, costCoef: 0.65, costExp: 2, offset: 1, effect: 'Armor Boost', pref: '&#10005', app: ''},
        {tier: 'B', id: 16, name: 'Amethyst Staff', maxLvl: 0, addupPerLvl: 0.02, damPerLvl: 0.3, costCoef: 0.65, costExp: 2, offset: 1, effect: 'Slash Boost', pref: '&#10005', app: ''},
        {tier: 'C', id: 6, name: 'Fruit of Eden', maxLvl: 0, addupPerLvl: 0.1, damPerLvl: 0.3, costCoef: 0.7, costExp: 2, offset: 1, effect: 'Pet Damage', pref: '&#10005', app: ''},
        {tier: 'C', id: 17, name: 'Royal Toxin', maxLvl: 0, addupPerLvl: 0.1, damPerLvl: 0.5, costCoef: 0.7, costExp: 1.8, offset: 1, effect: 'Clan Ship Damage', pref: '&#10005', app: ''},
        {tier: 'C', id: 8, name: 'The Sword of Storms', maxLvl: 0, addupPerLvl: 0.15, damPerLvl: 0.6, costCoef: 0.7, costExp: 1.7, offset: 1, effect: 'Melee Hero Damage', pref: '&#10005', app: ''},
        {tier: 'C', id: 7, name: 'Charm of the Ancient', maxLvl: 0, addupPerLvl: 0.15, damPerLvl: 0.6, costCoef: 0.7, costExp: 1.7, offset: 1, effect: 'Spell Hero Damage', pref: '&#10005', app: ''},
        {tier: 'C', id: 37, name: 'Drunken Hammer', maxLvl: 0, addupPerLvl: 0.05, damPerLvl: 0.3, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Tap Damage', pref: '&#10005', app: ''},
        {tier: 'D', id: 14, name: 'Ring of Fealty', maxLvl: 30, addupPerLvl: 2, damPerLvl: 1.5, costCoef: 0.6, costExp: 2.4, offset: 0, effect: 'Hand Of Midas Duration', pref: '+', app: 's'},
        {tier: 'D', id: 15, name: 'Aegis', maxLvl: 30, addupPerLvl: 2, damPerLvl: 1.5, costCoef: 0.6, costExp: 2.4, offset: 0, effect: 'War Cry Skill Duration', pref: '+', app: 's'},
        {tier: 'D', id: 23, name: 'Staff of Radiance', maxLvl: 40, addupPerLvl: 2, damPerLvl: 0.8, costCoef: 0.5, costExp: 2.6, offset: 0, effect: 'Hero upgrade cost', pref: '-', app: '%'},
        {tier: 'D', id: 24, name: 'Invader\'s Shield', maxLvl: 50, addupPerLvl: 0.5, damPerLvl: 1.6, costCoef: 0.5, costExp: 2.1, offset: 0, effect: 'Double Fairy Chance', pref: '+', app: '%'},
        {tier: 'D', id: 13, name: 'Divine Chalice', maxLvl: 50, addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.8, costExp: 2.6, offset: 0, effect: 'Chance for 10x Gold', pref: '+', app: '%'},
        {tier: 'D', id: 25, name: 'Chest of Contentment', maxLvl: 0, addupPerLvl: 0.25, damPerLvl: 0.4, costCoef: '1.0', costExp: 1.8, offset: 1, effect: 'Chesterson Gold', pref: '&#10005', app: ''},
        {tier: 'D', id: 26, name: 'Egg of Fortune', maxLvl: 10, addupPerLvl: 1, damPerLvl: 0.3, costCoef: 1.4, costExp: 3, offset: 0, effect: 'Chesterson Chance', pref: '+', app: '%'},
        {tier: 'D', id: 23, name: 'Staff of Radiance', maxLvl: 40, addupPerLvl: 2, damPerLvl: 0.8, costCoef: 0.5, costExp: 2.6, offset: 0, effect: 'Hero upgrade cost', pref: '-', app: '%'},
        {tier: 'D', id: 20, name: 'Axe of Muerte', maxLvl: 20, addupPerLvl: 0.5, damPerLvl: 3, costCoef: 0.8, costExp: 2.5, offset: 0, effect: 'Critical Strike Chance', pref: '+', app: '%'},
        {tier: 'D', id: 21, name: 'Titan Spear', maxLvl: 40, addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.6, costExp: 3, offset: 0, effect: 'Hand of Midas Mana Cost', pref: '-', app: ''},
        {tier: 'D', id: 22, name: 'The Arcana Cloak', maxLvl: 40, addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.6, costExp: 3, offset: 0, effect: 'War Cry Skill Mana Cost', pref: '-', app: ''},
        {tier: 'E', id: 27, name: 'Bringer of Ragnarok', maxLvl: 0, addupPerLvl: 0.2, damPerLvl: 0.4, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Fire Sword Effect', pref: '&#10005', app: ''},
        {tier: 'E', id: 28, name: 'Glacial Axe', maxLvl: 30, addupPerLvl: 2, damPerLvl: 1.5, costCoef: 0.6, costExp: 2.4, offset: 0, effect: 'Fire Sword Duration', pref: '+', app: 's'},
        {tier: 'E', id: 29, name: 'Oak Staff', maxLvl: 30, addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.6, costExp: 3, offset: 0, effect: 'Fire Sword Cost', pref: '-', app: ''},
        {tier: 'E', id: 30, name: 'Forbidden Scroll', maxLvl: 30, addupPerLvl: 2, damPerLvl: 1.5, costCoef: 0.6, costExp: 2.4, offset: 0, effect: 'Critical Strike Duration', pref: '+', app: 's'},
        {tier: 'E', id: 31, name: 'Glove of Kuma', maxLvl: 30, addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.6, costExp: 3, offset: 0, effect: 'Critical Strike Cost', pref: '-', app: ''},
        {tier: 'E', id: 32, name: 'Swamp Gauntlet', maxLvl: 30, addupPerLvl: 2, damPerLvl: 1.5, costCoef: 0.6, costExp: 2.4, offset: 0, effect: 'Shadow Clone Duration', pref: '+', app: 's'},
        {tier: 'E', id: 33, name: 'Hunter\'s Ointment', maxLvl: 40, addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.6, costExp: 3, offset: 0, effect: 'Shadow Clone Cost', pref: '-', app: ''},
        {tier: 'E', id: 34, name: 'Elixir of Eden', maxLvl: 0, addupPerLvl: 0.2, damPerLvl: 0.4, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Shadow Clone Effect', pref: '&#10005', app: ''},
        {tier: 'E', id: 35, name: 'Infinity Pendulum', maxLvl: 20, addupPerLvl: 1, damPerLvl: 0.9, costCoef: 0.6, costExp: 3, offset: 0, effect: 'Heavenly Strike Cost', pref: '-', app: ''},
        {tier: 'E', id: 36, name: 'Titan\'s Mask', maxLvl: 0, addupPerLvl: 0.2, damPerLvl: 0.4, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Heavenly Strike Effect', pref: '&#10005', app: ''},
        {tier: 'E', id: 38, name: 'Stone of the Valrunes', maxLvl: 0, addupPerLvl: 0.1, damPerLvl: 0.5, costCoef: 0.7, costExp: 1.8, offset: 1, effect: 'Monster Gold', pref: '&#10005', app: ''},
            // new artifacts
//		{tier:'E', id: 41, name:'X1', 	maxLvl:0,  addupPerLvl:0.1,  damPerLvl:0.5, costCoef:0.7,   costExp:1.8, offset:1, effect:'Monster Gold', pref:'&#10005', app:''},
//		{tier:'E', id: 42, name:'X2', 	maxLvl:0,  addupPerLvl:0.1,  damPerLvl:0.5, costCoef:0.7,   costExp:1.8, offset:1, effect:'Monster Gold', pref:'&#10005', app:''},
//		{tier:'E', id: 43, name:'X3', 	maxLvl:0,  addupPerLvl:0.1,  damPerLvl:0.5, costCoef:0.7,   costExp:1.8, offset:1, effect:'Monster Gold', pref:'&#10005', app:''},
//		{tier:'E', id: 44, name:'X4', 	maxLvl:0,  addupPerLvl:0.1,  damPerLvl:0.5, costCoef:0.7,   costExp:1.8, offset:1, effect:'Monster Gold', pref:'&#10005', app:''},
//		{tier:'E', id: 45, name:'X5', 	maxLvl:0,  addupPerLvl:0.1,  damPerLvl:0.5, costCoef:0.7,   costExp:1.8, offset:1, effect:'Monster Gold', pref:'&#10005', app:''}
    ],
    Skills: [
        //1
        {name: 'Pet: Lighting Burst', intro: 'Pet Focus Tap Damage', pre: '+', app: '', precon: 0,
            effArr: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Pet: Heart of Midas', intro: 'Gold Focus Tap Amount', pre: '+', app: '', precon: 1,
            effArr: [16, 32, 48, 64, 80, 104, 128, 160, 200, 240, 288, 336, 400, 480, 560, 640, 800, 1040, 1280, 1600],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Pet: Flash Zip', intro: 'Boss Focus Tap Damage', pre: '+', app: '', precon: 1,
            effArr: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Ultra Heroes', intro: 'Hero Focus Tap Damage', pre: '+', app: '', precon: 2,
            effArr: [8, 16, 24, 32, 40, 52, 64, 80, 100, 120, 144, 168, 200, 240, 280, 320, 400, 520, 640, 800],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Fairyland', intro: 'Chance for Multiple Fairies', pre: '+', app: '%', precon: 4,
            effArr: [0.2, 0.4, 0.6, 0.7, 0.8],
            costArr: [1, 3, 5, 7, 10], max: 5},
        {name: 'Mighty Power', intro: 'Hero Focus Tap Count', pre: '+', app: '', precon: 4,
            effArr: [1, 2, 3, 4, 5],
            costArr: [1, 2, 3, 4, 5], max: 5},
        {name: 'Time Distortion', intro: 'seconds to Boss Timer', pre: '+', app: '', precon: 5,
            effArr: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
            costArr: [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10, 15], max: 15},
        {name: 'Summon Help', intro: 'Clan Focus Tap Damage', pre: '+', app: '', precon: 6,
            effArr: [3, 6, 10, 14, 18, 22, 26, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        //2
        {name: 'Gold Splitter', intro: 'Inactive Gold', pre: '�', app: '', precon: 0,
            effArr: [1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20, 25, 30, 35, 40, 50],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Pet Evolution', intro: 'Pet Damage', pre: '�', app: '', precon: 11,
            effArr: [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 24, 26, 30, 40, 50, 60],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Stronger Arms', intro: 'Melee Hero Damage', pre: '�', app: '', precon: 9,
            effArr: [2, 4, 6, 8, 10, 13, 16, 20, 25, 30, 36, 42, 50, 60, 70, 80, 100, 130, 160, 200],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Intimidating Presence', intro: 'Titan Count Per Stage', pre: '-', app: '', precon: 10,
            effArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Hyper Magic', intro: 'Spell Hero Damage', pre: '�', app: '', precon: 11,
            effArr: [2, 4, 6, 8, 10, 13, 16, 20, 25, 30, 36, 42, 50, 60, 70, 80, 100, 130, 160, 200],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Extended Reach', intro: 'Splash Damage', pre: '', app: '%', precon: 12,
            effArr: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.20, 0.21],
            costArr: [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 35, 40, 50], max: 20},
        {name: 'Pin Point Accuracy', intro: 'Range Hero Damage', pre: '�', app: '', precon: 13,
            effArr: [2, 4, 6, 8, 10, 13, 16, 20, 25, 30, 36, 42, 50, 60, 70, 80, 100, 130, 160, 200],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Silent March', intro: 'Inactive Stage Advance up to Stage', pre: '', app: '', precon: 14,
            effArr: [100, 300, 500, 700, 1000, 2000, 3000, 4000],
            costArr: [1, 2, 3, 4, 5, 6, 7, 8], max: 8},
        {name: 'Titan Family', intro: 'Multiple Titan Chance', pre: '+', app: '%', precon: 16,
            effArr: [0.02, 0.04, 0.06, 0.08, 0.10, 0.12, 0.14, 0.16, 0.18, 0.20, 0.22, 0.24, 0.26, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Pet: Stealth', intro: 'Inactive Pet Damage', pre: '�', app: '', precon: 16,
            effArr: [0.1, 0.2, 0.3, 0.4, 0.5, 0.65, 0.8, 1.0, 1.25, 1.5, 1.8, 2.1, 2.5, 3, 3.5, 4, 5, 6.5, 8, 10],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        //3
        {name: 'Magic Fusion', intro: 'Damage to Magic Fusion', pre: '+', app: '', precon: 0,
            effArr: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Magic Well', intro: 'Mana Regen Rate', pre: '+', app: '', precon: 21,
            effArr: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Flame Touch', intro: 'Damage to Flame Touch', pre: '+', app: '', precon: 19,
            effArr: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Mana Limit Break', intro: 'Mana Cap', pre: '+', app: '', precon: 20,
            effArr: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 200, 220],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Heroic Might', intro: 'Heroes Crit Damage', pre: '�', app: '', precon: 21,
            effArr: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Mana Siphon', intro: 'Mana Steal', pre: '+', app: '%', precon: 25,
            effArr: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Midas Ultimate', intro: 'Damage', pre: '�', app: '', precon: 23,
            effArr: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Shadow Clone', intro: 'Tap Damage', pre: '�', app: '%', precon: 27,
            effArr: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.20],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Lightning Strike', intro: 'Chance for Lightning Strike', pre: '+', app: '%', precon: 25,
            effArr: [0.01, 0.012, 0.014, 0.016, 0.018, 0.02, 0.022, 0.024, 0.026, 0.028, 0.03, 0.032, 0.034, 0.036, 0.038, 0.04, 0.042, 0.044, 0.046, 0.048],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
        {name: 'Manni Mana', intro: 'mana replenished by Manni Mana', pre: '', app: '', precon: 26,
            effArr: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
            costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
    ],
    EquipWeapon: [
        //All Damage
        {name: 'Dark Knight Sword', rare: 'common', base: 10, inc: 0.01, type: 'All Damage'},
        {name: 'Club', rare: 'common', base: 10, inc: 0.02, type: 'All Damage'},
        {name: 'Average Sword', rare: 'common', base: 10, inc: 0.03, type: 'All Damage'},
        {name: 'Lumberjack Axe', rare: 'common', base: 10, inc: 0.03, type: 'All Damage'},
        {name: 'Crimson Sword', rare: 'common', base: 10, inc: 0.03, type: 'All Damage'},
        {name: 'Energy Sword', rare: 'rare', base: 10, inc: 0.05, type: 'All Damage'},
        {name: 'Crooked Blade', rare: 'rare', base: 10, inc: 0.07, type: 'All Damage'},
        {name: 'Heartbreaker', rare: 'legendary', base: 10, inc: 0.08, type: 'All Damage'},
        {name: 'Conqueror\'s Cleaver', rare: 'legendary', base: 10, inc: 0.09, type: 'All Damage'},
        {name: 'Excalibur', rare: 'legendary', base: 10, inc: 0.1, type: 'All Damage'},
        //All Hero Damage
        {name: 'Geared Blade', rare: 'common', base: 10, inc: 0.05, type: 'All Hero Damage'},
        {name: 'Death Sythe', rare: 'common', base: 10, inc: 0.05, type: 'All Hero Damage'},
        {name: 'Ninja Dagger', rare: 'common', base: 10, inc: 0.06, type: 'All Hero Damage'},
        {name: 'Axe of Ages', rare: 'common', base: 10, inc: 0.06, type: 'All Hero Damage'},
        {name: 'Titansmasher', rare: 'common', base: 10, inc: 0.07, type: 'All Hero Damage'},
        {name: 'Lightsaber', rare: 'rare', base: 10, inc: 0.14, type: 'All Hero Damage'}, //OK
        {name: 'Onyx Halberd', rare: 'rare', base: 10, inc: 0.17, type: 'All Hero Damage'},
        {name: 'Knightfall Sword', rare: 'legendary', base: 10, inc: 0.25, type: 'All Hero Damage'},
        {name: 'Poisonous Spellblade', rare: 'legendary', base: 10, inc: 0.27, type: 'All Hero Damage'},
        //Crit Damage
        {name: 'Ancient Glaive', rare: 'common', base: 10, inc: 0.04, type: 'Crit Damage'},
        {name: 'Swift Spear', rare: 'common', base: 10, inc: 0.04, type: 'Crit Damage'},
        {name: 'Buster Blade', rare: 'common', base: 10, inc: 0.05, type: 'Crit Damage'},
        {name: 'Skull-crusher Sword', rare: 'common', base: 10, inc: 0.05, type: 'Crit Damage'},
        {name: 'Reforged Katana', rare: 'common', base: 10, inc: 0.05, type: 'Crit Damage'},
        {name: 'Pitchfork', rare: 'rare', base: 10, inc: 0.10, type: 'Crit Damage'},
        {name: 'Twilight Staff', rare: 'rare', base: 10, inc: 0.11, type: 'Crit Damage'},
        {name: 'Sharpened Saw', rare: 'legendary', base: 10, inc: 0.2, type: 'Crit Damage'}, //OK
    ],
    EquipHat: [
        //Ranged Hero Damage
        {name: 'Feline Helmet', rare: 'common', base: 10, inc: 0.02, type: 'Ranged Hero Damage'},
        {name: 'Magnificent Helmet', rare: 'common', base: 10, inc: 0.02, type: 'Ranged Hero Damage'},
        {name: 'Ice Walker Helmet', rare: 'common', base: 10, inc: 0.02, type: 'Ranged Hero Damage'},
        {name: 'White Warrior Helmet', rare: 'common', base: 10, inc: 0.02, type: 'Ranged Hero Damage'},
        {name: 'Hat of Love', rare: 'rare', base: 10, inc: 0.05, type: 'Ranged Hero Damage'},
        {name: 'Devil Helmet', rare: 'rare', base: 10, inc: 0.06, type: 'Ranged Hero Damage'}, //OK
        {name: 'Fedora', rare: 'legendary', base: 10, inc: 0.15, type: 'Ranged Hero Damage'},
        //Melee Hero Damage
        {name: 'Castle Guard Mask', rare: 'common', base: 10, inc: 0.02, type: 'Melee Hero Damage'}, //OK
        {name: 'Dark Knight', rare: 'common', base: 10, inc: 0.02, type: 'Melee Hero Damage'},
        {name: 'Cyclops Mask', rare: 'common', base: 10, inc: 0.02, type: 'Melee Hero Damage'},
        {name: 'Horned Helmet', rare: 'common', base: 10, inc: 0.02, type: 'Melee Hero Damage'},
        {name: 'Tribal Helmet', rare: 'rare', base: 10, inc: 0.06, type: 'Melee Hero Damage'},
        {name: 'Chicken Beanie', rare: 'legendary', base: 10, inc: 0.15, type: 'Melee Hero Damage'},
        //Spell Hero Damage
        {name: 'Crimson Knight', rare: 'common', base: 10, inc: 0.02, type: 'Spell Hero Damage'},
        {name: 'Everyday Cap', rare: 'common', base: 10, inc: 0.02, type: 'Spell Hero Damage'},
        {name: 'Boom Box Head', rare: 'common', base: 10, inc: 0.02, type: 'Spell Hero Damage'},
        {name: 'Wizard Hat', rare: 'common', base: 10, inc: 0.02, type: 'Spell Hero Damage'},
        {name: 'Top Hat', rare: 'rare', base: 10, inc: 0.06, type: 'Spell Hero Damage'},
        {name: 'Phrygian Cap', rare: 'legendary', base: 10, inc: 0.15, type: 'Spell Hero Damage'},
        {name: 'Ninja Mask', rare: 'legendary', base: 10, inc: 0.16, type: 'Spell Hero Damage'}, //OK
    ],
    EquipSuit: [
        //All Gold
        {name: 'Unknown Face', rare: 'common', base: 10, inc: 0.01, type: 'All Gold'},
        {name: 'Frosted Armor', rare: 'common', base: 10, inc: 0.01, type: 'All Gold'},
        {name: 'Everyday Sweater', rare: 'common', base: 10, inc: 0.01, type: 'All Gold'},
        {name: 'Wizard Sweater', rare: 'common', base: 10, inc: 0.01, type: 'All Gold'},
        {name: 'Fit for Royals', rare: 'rare', base: 10, inc: 0.03, type: 'All Gold'},
        {name: 'Kungfu Master', rare: 'rare', base: 10, inc: 0.03, type: 'All Gold'},
        {name: 'Crimson Warrior', rare: 'legendary', base: 10, inc: 0.10, type: 'All Gold'},
        {name: 'Futuristic Gladiator', rare: 'legendary', base: 10, inc: 0.11, type: 'All Gold'}, //OK

        //Chesterson Amount
        {name: 'Amethyst Armor', rare: 'common', base: 10, inc: 0.02, type: 'Chesterson Amount'},
        {name: 'Scaly Suit', rare: 'common', base: 10, inc: 0.02, type: 'Chesterson Amount'},
        {name: 'Farmer Overalls', rare: 'common', base: 10, inc: 0.02, type: 'Chesterson Amount'},
        {name: 'Forest Fighter', rare: 'common', base: 10, inc: 0.02, type: 'Chesterson Amount'},
        {name: 'White Warrior', rare: 'rare', base: 10, inc: 0.06, type: 'Chesterson Amount'},
        {name: 'Sunrise Armor', rare: 'rare', base: 10, inc: 0.06, type: 'Chesterson Amount'},
        {name: 'Ancient Rome', rare: 'legendary', base: 10, inc: 0.2, type: 'Chesterson Amount'},
        {name: 'Ninja Suit', rare: 'legendary', base: 10, inc: 0.21, type: 'Chesterson Amount'},
    ],
    EquipAura: [
        //Chesterson Chance
        {name: 'Colour Pop', rare: 'common', base: 0.01, inc: 0.0009, type: 'Chesterson Chance', pref: '+'},
        {name: 'Dizzy', rare: 'common', base: 0.01, inc: 0.001, type: 'Chesterson Chance', pref: '+'},
        {name: 'Lightning Charge', rare: 'common', base: 0.01, inc: 0.0011, type: 'Chesterson Chance', pref: '+'},
        {name: 'Circle of Love', rare: 'rare', base: 0.01, inc: 0.0015, type: 'Chesterson Chance', pref: '+'},
        {name: 'Whirlpool', rare: 'rare', base: 0.01, inc: 0.0016, type: 'Chesterson Chance', pref: '+'},
        {name: 'Space Orbs', rare: 'rare', base: 0.01, inc: 0.0016, type: 'Chesterson Chance', pref: '+'},
        {name: 'Bat Cave', rare: 'legendary', base: 0.01, inc: 0.0021, type: 'Chesterson Chance', pref: '+'},
        //Critical Chance
        {name: 'Magnetic Power', rare: 'common', base: 0.01, inc: 0.001, type: 'Critical Chance', pref: '+'},
        {name: 'Diamond Ring', rare: 'common', base: 0.01, inc: 0.0011, type: 'Critical Chance', pref: '+'},
        {name: 'Star Shine', rare: 'common', base: 0.01, inc: 0.0012, type: 'Critical Chance', pref: '+'},
        {name: 'Birds', rare: 'rare', base: 0.01, inc: 0.0015, type: 'Critical Chance', pref: '+'},
        {name: 'Dark Energy', rare: 'rare', base: 0.01, inc: 0.0016, type: 'Critical Chance', pref: '+'},
        {name: 'Smells Fishy', rare: 'legendary', base: 0.01, inc: 0.0021, type: 'Critical Chance', pref: '+'},
        {name: 'Blue Wind', rare: 'legendary', base: 0.01, inc: 0.005, type: 'Critical Chance', pref: '+'},
        //Titan HP
        {name: 'Sparks', rare: 'common', base: 0.99, inc: 0.0035, type: 'Titan HP', pref: '�'}, //inc = decrease
        {name: 'Falling Ember', rare: 'common', base: 0.99, inc: 0.003, type: 'Titan HP', pref: '�'},
        {name: 'Butterfly Effect', rare: 'common', base: 0.99, inc: 0.0014, type: 'Titan HP', pref: '�'},
        {name: 'Leaf Shield', rare: 'rare', base: 0.99, inc: 0.006, type: 'Titan HP', pref: '�'},
        {name: 'Frost Bite', rare: 'legendary', base: 0.99, inc: 0.009, type: 'Titan HP', pref: '�'},
    ],
    EquipSlash: [
        //Tap Damage
        {name: 'Casting Shadows', rare: 'common', base: 10, inc: 0.05, type: 'Tap Damage'},
        {name: 'Gray Flames', rare: 'common', base: 10, inc: 0.05, type: 'Tap Damage'},
        {name: 'Summoner Flames', rare: 'common', base: 10, inc: 0.05, type: 'Tap Damage'},
        {name: 'Fiery Embers', rare: 'common', base: 10, inc: 0.06, type: 'Tap Damage'},
        {name: 'Hot Lava', rare: 'rare', base: 10, inc: 0.014, type: 'Tap Damage'},
        {name: 'Frosted Embers', rare: 'rare', base: 10, inc: 0.15, type: 'Tap Damage'},
        {name: 'Flames', rare: 'legendary', base: 10, inc: 0.40, type: 'Tap Damage'}, //OK
        {name: 'Glimmering Path', rare: 'legendary', base: 10, inc: 0.50, type: 'Tap Damage'},
        //Pet Damage
        {name: 'Blue Lightning', rare: 'common', base: 10, inc: 0.00, type: 'Pet Damage'},
        {name: 'Paint Streaks', rare: 'common', base: 10, inc: 0.00, type: 'Pet Damage'},
        {name: 'Starry Path', rare: 'common', base: 10, inc: 0.01, type: 'Pet Damage'},
        {name: 'Tidal Waves', rare: 'common', base: 10, inc: 0.01, type: 'Pet Damage'},
        {name: 'Rainbow Road', rare: 'rare', base: 10, inc: 0.02, type: 'Pet Damage'}, //ERROR
        {name: 'Fallen Leaves', rare: 'rare', base: 10, inc: 0.03, type: 'Pet Damage'},
        {name: 'Crimson Flames', rare: 'legendary', base: 10, inc: 0.09, type: 'Pet Damage'},
        {name: 'Something Stinks', rare: 'legendary', base: 10, inc: 0.10, type: 'Pet Damage'},
    ],
    Pets: [
        {name: 'Zero', baseDmg: 5, DAP1: 1.8, DAP2: 1.2, DAP3: 0.45, effStr: 'Spell Hero Damage', effPre: 'x', baseEff: 1, EAP: 0.2},
        {name: 'Harker', baseDmg: 3, DAP1: 2.2, DAP2: 0.8, DAP3: 0.6, effStr: 'Spell Hero Damage', effPre: 'x', baseEff: 1, EAP: 0.2},
        {name: 'Cerberus', baseDmg: 3, DAP1: 2, DAP2: 1, DAP3: 0.4, effStr: 'Melee Hero Damage', effPre: 'x', baseEff: 1, EAP: 0.2},
        {name: 'Basky', baseDmg: 6, DAP1: 1.5, DAP2: 1.4, DAP3: 0.6, effStr: 'Melee Hero Damage', effPre: 'x', baseEff: 1, EAP: 0.2},
        {name: 'Scraps', baseDmg: 3, DAP1: 2.2, DAP2: 0.4, DAP3: 0.73, effStr: 'Ranged Hero Damage', effPre: 'x', baseEff: 1, EAP: 0.2},
        {name: 'Mousy', baseDmg: 8, DAP1: 1.5, DAP2: 1.3, DAP3: 0.55, effStr: 'Ranged Hero Damage', effPre: 'x', baseEff: 1, EAP: 0.2},
        {name: 'Tempest', baseDmg: 1, DAP1: 2, DAP2: 0.8, DAP3: 0.5, effStr: 'All Hero Damage', effPre: 'x', baseEff: 1, EAP: 0.15},
        {name: 'Toto', baseDmg: 7, DAP1: 1.6, DAP2: 1.2, DAP3: 0.25, effStr: 'All Hero Damage', effPre: 'x', baseEff: 1, EAP: 0.15},
        {name: 'Demos', baseDmg: 6, DAP1: 1.5, DAP2: 1.4, DAP3: 0.75, effStr: 'All Damage', effPre: 'x', baseEff: 1, EAP: 0.1},
        {name: 'Nova', baseDmg: 3, DAP1: 1.7, DAP2: 1.4, DAP3: 0.3, effStr: 'All Damage', effPre: 'x', baseEff: 1, EAP: 0.1},
        {name: 'Hamy', baseDmg: 1, DAP1: 2.2, DAP2: 0.8, DAP3: 0.4, effStr: 'Tap Damage', effPre: 'x', baseEff: 1, EAP: 1},
        {name: 'Phobos', baseDmg: 4, DAP1: 1.6, DAP2: 1.2, DAP3: 0.73, effStr: 'Tap Damage', effPre: 'x', baseEff: 1, EAP: 1},
        {name: 'Bubbles', baseDmg: 3, DAP1: 1.8, DAP2: 0.9, DAP3: 0.5, effStr: 'All Gold', effPre: 'x', baseEff: 1, EAP: 0.12},
        {name: 'Polly', baseDmg: 5, DAP1: 1.95, DAP2: 0.7, DAP3: 0.6, effStr: 'All Gold', effPre: 'x', baseEff: 1, EAP: 0.12},
        {name: 'Kit', baseDmg: 2, DAP1: 2, DAP2: 0.6, DAP3: 0.7, effStr: 'Splash Damage', effPre: '+', baseEff: 0.01, EAP: 0.002},
        {name: 'Fluffers', baseDmg: 4, DAP1: 1.8, DAP2: 1.6, DAP3: 0.35, effStr: 'Mana Regen', effPre: '+', baseEff: 0, EAP: 0.05}
    ],
    /**
     Skill Mapping:
     
     Crit Damage *1.1				index:0
     Critical Chance +0.1%			index:1
     Chesterson Amount *1.1			index:2
     Chesterson Chance +0.1%			index:3
     Mana Pool Cap +3				index:4
     Tap Damage *1.1					index:5
     Tap Damage *2					index:6
     Tap Damage From Heroes +0.1%	index:7
     Boss Gold *1.1					index:8
     Boss Gold *1.2					index:9
     All Hero Damage *1.1			index:10
     All Hero Damage *1.2			index:11
     All Gold *1.1					index:12
     All Gold *1.2					index:13
     Titan Gold *1.1					index:14
     Titan Gold *1.2					index:15
     All Damage *1.1					index:16
     All Damage *1.2					index:17
     Melee Hero Damage *1.1			index:18
     Spell Hero Damage *1.1			index:19
     Ranged Hero Damage *1.1			index:20
     Mana Regen +0.1					index:21
     x10 Gold Chance +0.1%			index:22
     
     Skill Unlock Lv:
     
     20 40 60 100 200 500 1000 2000 3000 4000
     **/
    Heros: [
        {name: 'Maya Muerta the Watcher', type: 'Spell', init: 30.0, skills: [0, 1, 2, 3, 4, 5, 7, 8, 10, 12]},
        {name: 'Zato the Blind Staff Master', type: 'Melee', init: 180.0, skills: [2, 3, 0, 1, 14, 4, 12, 16, 10, 12]},
        {name: 'Sophia, Champion of Swords', type: 'Melee', init: 800.0, skills: [5, 5, 5, 5, 5, 5, 7, 10, 12, 8]},
        {name: 'Lance, Knight of Cobalt Steel', type: 'Melee', init: 4.0E+3, skills: [8, 8, 8, 8, 8, 8, 10, 2, 18, 8]},
        {name: 'Pingo of the Tori', type: 'Ranged', init: 28.0E+3, skills: [4, 4, 4, 4, 4, 4, 10, 4, 4, 4]},
        {name: 'Rosabella Bonnie Archer', type: 'Ranged', init: 224.0E+3, skills: [14, 14, 14, 14, 14, 14, 7, 19, 10, 14]},
        {name: 'Gulbrand the Destroyer', type: 'Melee', init: 2.688E+6, skills: [2, 2, 2, 2, 2, 2, 7, 2, 16, 2]},
        {name: 'Captain Davey Cannon', type: 'Ranged', init: 21.504E+6, skills: [20, 20, 20, 20, 20, 20, 4, 10, 16, 20]},
        {name: 'Rhys Mage of Order Evetga', type: 'Melee', init: 236.54E+6, skills: [18, 18, 18, 18, 18, 18, 7, 10, 4, 12]},
        {name: 'Kronus, Bringer of Judgement', type: 'Spell', init: 1.892E+9, skills: [7, 19, 19, 19, 19, 19, 12, 10, 0, 4]},
        {name: 'Cosette, Jewel of House Sabre', type: 'Melee', init: 9.462E+9, skills: [18, 18, 18, 18, 18, 18, 7, 18, 4, 16]},
        {name: 'Kiki the Dragon Rider', type: 'Spell', init: 85.156E+9, skills: [19, 19, 19, 19, 19, 19, 16, 10, 18, 4]},
        {name: 'Maddie, Shadow Thief', type: 'Ranged', init: 851.56E+9, skills: [20, 20, 20, 20, 20, 20, 10, 18, 4, 12]},
        {name: 'Beany Sprout the 1st', type: 'Spell', init: 15.328E+12, skills: [10, 10, 10, 10, 10, 10, 16, 7, 19, 10]},
        {name: 'Sawyer the Wild Gunslinger', type: 'Ranged', init: 183.94E+12, skills: [5, 5, 5, 5, 5, 5, 16, 12, 10, 5]},
        {name: 'Lil\' Ursa', type: 'Spell', init: 1.6787E+15, skills: [0, 21, 21, 21, 21, 21, 19, 2, 21, 14]},
        {name: 'Saje the Garden Keeper', type: 'Ranged', init: 2.3109E+16, skills: [5, 20, 20, 20, 20, 20, 22, 16, 7, 22]},
        {name: 'Wally Wat the Magician', type: 'Spell', init: 7.9191E+17, skills: [5, 19, 19, 19, 19, 19, 12, 18, 1, 7]},
        {name: 'Jayce the Ruthless Cutter', type: 'Melee', init: 2.5555E+19, skills: [5, 18, 18, 18, 18, 18, 16, 7, 22, 14]},
        {name: 'The Great Pharaoh', type: 'Spell', init: 1.3111E+21, skills: [14, 14, 14, 14, 14, 14, 20, 14, 20, 19]},
        {name: 'Boomoh Doctor', type: 'Melee', init: 1.9667E+22, skills: [22, 22, 22, 22, 22, 22, 22, 19, 5, 22]},
        {name: 'Dex-1000', type: 'Ranged', init: 1.77E+24, skills: [1, 1, 1, 1, 1, 1, 19, 7, 0, 16]},
        {name: 'The Great Madame Cass', type: 'Spell', init: 3.54E+26, skills: [3, 3, 3, 3, 3, 3, 12, 16, 8, 3]},
        {name: 'Lala Quickshot', type: 'Ranged', init: 1.416E+29, skills: [8, 7, 8, 8, 8, 8, 7, 14, 16, 8]},
        {name: 'Aya the Lightning Violet', type: 'Melee', init: 1.5576E+32, skills: [12, 12, 12, 12, 12, 12, 20, 18, 19, 12]},
        {name: 'Lady Lucy the Night Caster', type: 'Spell', init: 6.8534E+36, skills: [0, 0, 0, 0, 0, 0, 16, 12, 16, 0]},
        {name: 'Jazz Rockerfellow', type: 'Spell', init: 2.4124E+43, skills: [16, 16, 16, 16, 16, 16, 22, 12, 20, 16]},
        {name: 'Maple the Autumn Guardian', type: 'Melee', init: 6.7933E+51, skills: [8, 14, 22, 12, 8, 14, 22, 12, 14, 8]},
        {name: 'Kin the Puffy Beast', type: 'Ranged', init: 1.5304E+61, skills: [2, 3, 2, 3, 2, 3, 7, 3, 2, 5]},
        {name: 'Princess Titania of Fay', type: 'Spell', init: 2.7581E+72, skills: [4, 21, 4, 21, 4, 21, 16, 20, 4, 21]},
        {name: 'Miki the Graceful Dancer', type: 'Ranged', init: 3.9767E+84, skills: [0, 1, 0, 1, 0, 1, 7, 22, 5, 0]},
        {name: 'Mina the Priestess of Light', type: 'Spell', init: 4.5868E+96, skills: [0, 0, 0, 0, 0, 0, 21, 6, 4, 2]},
        {name: 'Yzafa the Fearsome Bandit', type: 'Melee', init: 2.6453E+108, skills: [2, 2, 2, 2, 2, 2, 21, 6, 0, 4]},
        {name: 'Zolom Blaster, Space Hunter', type: 'Ranged', init: 7.6279E+122, skills: [1, 1, 1, 1, 1, 1, 21, 6, 0, 2]},
        {name: 'Finn the Funny Guard', type: 'Ranged', init: 1E+140, skills: [19, 19, 19, 19, 19, 15, 9, 11, 13, 17]},
        {name: 'Nohni the Spearit', type: 'Melee', init: 1E+140, skills: [18, 18, 18, 18, 18, 15, 9, 11, 13, 17]},
        {name: 'Damon of the Darkness', type: 'Spell', init: 1E+140, skills: [20, 20, 20, 20, 20, 15, 9, 11, 13, 17]}
    ],
    HeroImprBonus: [
        {lv: 10, mtp: 2},
        {lv: 30, mtp: 2},
        {lv: 50, mtp: 2},
        {lv: 70, mtp: 2},
        {lv: 90, mtp: 2},
        {lv: 110, mtp: 3},
        {lv: 130, mtp: 3},
        {lv: 150, mtp: 3},
        {lv: 170, mtp: 3},
        {lv: 190, mtp: 3},
        {lv: 210, mtp: 4},
        {lv: 230, mtp: 3},
        {lv: 250, mtp: 3},
        {lv: 270, mtp: 3},
        {lv: 290, mtp: 3},
        {lv: 310, mtp: 4},
        {lv: 330, mtp: 3},
        {lv: 350, mtp: 3},
        {lv: 370, mtp: 3},
        {lv: 400, mtp: 4},
        {lv: 430, mtp: 3},
        {lv: 460, mtp: 3},
        {lv: 490, mtp: 3},
        {lv: 520, mtp: 4},
        {lv: 550, mtp: 3},
        {lv: 580, mtp: 3},
        {lv: 610, mtp: 4},
        {lv: 640, mtp: 3},
        {lv: 670, mtp: 3},
        {lv: 700, mtp: 4},
        {lv: 730, mtp: 3},
        {lv: 760, mtp: 3},
        {lv: 790, mtp: 3},
        {lv: 820, mtp: 4},
        {lv: 850, mtp: 3},
        {lv: 880, mtp: 3},
        {lv: 910, mtp: 4},
        {lv: 940, mtp: 3},
        {lv: 970, mtp: 3},
        {lv: 1000, mtp: 100},
        {lv: 1040, mtp: 8},
        {lv: 1080, mtp: 7},
        {lv: 1120, mtp: 8},
        {lv: 1160, mtp: 9},
        {lv: 1200, mtp: 10},
        {lv: 1240, mtp: 11},
        {lv: 1280, mtp: 12},
        {lv: 1320, mtp: 13},
        {lv: 1360, mtp: 12},
        {lv: 1400, mtp: 11},
        {lv: 1440, mtp: 12},
        {lv: 1480, mtp: 13},
        {lv: 1520, mtp: 12},
        {lv: 1560, mtp: 11},
        {lv: 1600, mtp: 10},
        {lv: 1640, mtp: 9},
        {lv: 1680, mtp: 10},
        {lv: 1720, mtp: 11},
        {lv: 1760, mtp: 10},
        {lv: 1800, mtp: 9},
        {lv: 1840, mtp: 10},
        {lv: 1880, mtp: 9},
        {lv: 1920, mtp: 10},
        {lv: 1960, mtp: 9},
        {lv: 2000, mtp: 100},
        {lv: 2050, mtp: 9},
        {lv: 2100, mtp: 10},
        {lv: 2150, mtp: 11},
        {lv: 2200, mtp: 12},
        {lv: 2250, mtp: 13},
        {lv: 2300, mtp: 12},
        {lv: 2350, mtp: 11},
        {lv: 2400, mtp: 12},
        {lv: 2450, mtp: 13},
        {lv: 2500, mtp: 12},
        {lv: 2550, mtp: 11},
        {lv: 2600, mtp: 10},
        {lv: 2650, mtp: 9},
        {lv: 2700, mtp: 10},
        {lv: 2750, mtp: 11},
        {lv: 2800, mtp: 12},
        {lv: 2850, mtp: 11},
        {lv: 2900, mtp: 10},
        {lv: 2950, mtp: 9},
        {lv: 3000, mtp: 100},
        {lv: 3050, mtp: 5},
        {lv: 3100, mtp: 15},
        {lv: 3150, mtp: 6},
        {lv: 3200, mtp: 14},
        {lv: 3250, mtp: 10},
        {lv: 3300, mtp: 13},
        {lv: 3350, mtp: 12},
        {lv: 3400, mtp: 11},
        {lv: 3450, mtp: 8},
        {lv: 3500, mtp: 12},
        {lv: 3550, mtp: 15},
        {lv: 3600, mtp: 5},
        {lv: 3650, mtp: 9},
        {lv: 3700, mtp: 7},
        {lv: 3750, mtp: 14},
        {lv: 3800, mtp: 12},
        {lv: 3850, mtp: 13},
        {lv: 3900, mtp: 10},
        {lv: 3950, mtp: 9},
        {lv: 4000, mtp: 100},
        {lv: 4100, mtp: 20},
        {lv: 4200, mtp: 20},
        {lv: 4300, mtp: 20},
        {lv: 4400, mtp: 20},
        {lv: 4500, mtp: 20},
        {lv: 4600, mtp: 20},
        {lv: 4700, mtp: 20},
        {lv: 4800, mtp: 20},
        {lv: 4900, mtp: 20},
        {lv: 5000, mtp: 100},
        {lv: 5100, mtp: 20},
        {lv: 5200, mtp: 20},
        {lv: 5300, mtp: 20},
        {lv: 5400, mtp: 20},
        {lv: 5500, mtp: 20},
        {lv: 5600, mtp: 20},
        {lv: 5700, mtp: 20},
        {lv: 5800, mtp: 20},
        {lv: 5900, mtp: 20},
        {lv: 6000, mtp: 100},
    ],
    SMImprBonus: [
        {lv: 10, mtp: 2},
        {lv: 30, mtp: 2},
        {lv: 50, mtp: 2},
        {lv: 70, mtp: 2},
        {lv: 90, mtp: 2},
        {lv: 110, mtp: 2},
        {lv: 130, mtp: 2},
        {lv: 150, mtp: 2},
        {lv: 170, mtp: 2},
        {lv: 190, mtp: 2},
        {lv: 210, mtp: 3},
        {lv: 230, mtp: 3},
        {lv: 250, mtp: 2},
        {lv: 270, mtp: 2},
        {lv: 290, mtp: 2},
        {lv: 310, mtp: 3},
        {lv: 330, mtp: 2},
        {lv: 350, mtp: 2},
        {lv: 370, mtp: 2},
        {lv: 400, mtp: 2},
        {lv: 420, mtp: 3},
        {lv: 440, mtp: 3},
        {lv: 460, mtp: 3},
        {lv: 480, mtp: 2},
        {lv: 500, mtp: 2},
        {lv: 520, mtp: 2},
        {lv: 540, mtp: 2},
        {lv: 560, mtp: 2},
        {lv: 580, mtp: 2},
        {lv: 600, mtp: 2},
        {lv: 620, mtp: 2},
        {lv: 640, mtp: 2},
        {lv: 660, mtp: 2},
        {lv: 680, mtp: 2},
        {lv: 700, mtp: 2},
        {lv: 720, mtp: 2},
        {lv: 740, mtp: 2},
        {lv: 760, mtp: 2},
        {lv: 780, mtp: 2},
        {lv: 800, mtp: 2},
        {lv: 820, mtp: 2},
        {lv: 840, mtp: 2},
        {lv: 860, mtp: 2},
        {lv: 880, mtp: 2},
        {lv: 900, mtp: 2},
        {lv: 920, mtp: 2},
        {lv: 940, mtp: 2},
        {lv: 960, mtp: 2},
        {lv: 980, mtp: 2},
        {lv: 1000, mtp: 10},
        {lv: 1040, mtp: 5},
        {lv: 1080, mtp: 5},
        {lv: 1120, mtp: 5},
        {lv: 1160, mtp: 5},
        {lv: 1200, mtp: 10},
        {lv: 1240, mtp: 5},
        {lv: 1280, mtp: 5},
        {lv: 1320, mtp: 5},
        {lv: 1360, mtp: 5},
        {lv: 1400, mtp: 10},
        {lv: 1440, mtp: 5},
        {lv: 1480, mtp: 5},
        {lv: 1520, mtp: 5},
        {lv: 1560, mtp: 5},
        {lv: 1600, mtp: 10},
        {lv: 1640, mtp: 5},
        {lv: 1680, mtp: 5},
        {lv: 1720, mtp: 5},
        {lv: 1760, mtp: 5},
        {lv: 1800, mtp: 10},
        {lv: 1840, mtp: 5},
        {lv: 1880, mtp: 5},
        {lv: 1920, mtp: 5},
        {lv: 1960, mtp: 5},
        {lv: 2000, mtp: 20},
        {lv: 2050, mtp: 5},
        {lv: 2100, mtp: 10},
        {lv: 2150, mtp: 5},
        {lv: 2200, mtp: 10},
        {lv: 2250, mtp: 5},
        {lv: 2300, mtp: 10},
        {lv: 2350, mtp: 5},
        {lv: 2400, mtp: 10},
        {lv: 2450, mtp: 5},
        {lv: 2500, mtp: 10},
        {lv: 2550, mtp: 5},
        {lv: 2600, mtp: 10},
        {lv: 2650, mtp: 5},
        {lv: 2700, mtp: 10},
        {lv: 2750, mtp: 5},
        {lv: 2800, mtp: 10},
        {lv: 2850, mtp: 5},
        {lv: 2900, mtp: 10},
        {lv: 2950, mtp: 5},
        {lv: 3000, mtp: 30},
        {lv: 3050, mtp: 5},
        {lv: 3100, mtp: 5},
        {lv: 3150, mtp: 5},
        {lv: 3200, mtp: 10},
        {lv: 3250, mtp: 5},
        {lv: 3300, mtp: 5},
        {lv: 3350, mtp: 5},
        {lv: 3400, mtp: 10},
        {lv: 3450, mtp: 5},
        {lv: 3500, mtp: 5},
        {lv: 3550, mtp: 5},
        {lv: 3600, mtp: 10},
        {lv: 3650, mtp: 5},
        {lv: 3700, mtp: 5},
        {lv: 3750, mtp: 5},
        {lv: 3800, mtp: 10},
        {lv: 3850, mtp: 5},
        {lv: 3900, mtp: 5},
        {lv: 3950, mtp: 5},
        {lv: 4000, mtp: 40},
        {lv: 4100, mtp: 12},
        {lv: 4200, mtp: 12},
        {lv: 4300, mtp: 12},
        {lv: 4400, mtp: 12},
        {lv: 4500, mtp: 12},
        {lv: 4600, mtp: 12},
        {lv: 4700, mtp: 12},
        {lv: 4800, mtp: 12},
        {lv: 4900, mtp: 12},
        {lv: 5000, mtp: 50},
        {lv: 5100, mtp: 12},
        {lv: 5200, mtp: 12},
        {lv: 5300, mtp: 12},
        {lv: 5400, mtp: 12},
        {lv: 5500, mtp: 12},
        {lv: 5600, mtp: 12},
        {lv: 5700, mtp: 12},
        {lv: 5800, mtp: 12},
        {lv: 5900, mtp: 12},
        {lv: 6000, mtp: 60},
    ],
    SwordMasterSkills: {
        HeavenlyStrike: {
            cost: [4.91e+3, 825.16e+6, 2.8e+15, 192.76e+21, 654.88e+27, 45.03e+36, 3.09e+45, 87.23e+54, 2.45e+66, 28.36e+78, 327.37e+90, 3.77e+105, 43.6e+117, 503.31e+129, 67.04e+156],
            mana: [27, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
            eff: [450, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3500]
        },
        CriticalStrike: {
            cost: [2.01e+6, 16.7e+9, 103.54e+15, 31.71e+21, 1.19e+30, 18.44e+39, 1.73e+51, 48.76e+60, 3.35e+69, 1.95e+87, 134.12e+93, 634.18e+108, 2.99e+126, 84.76e+135, 399.45e+150],
            mana: [30, 32, 34, 36, 38, 40, 43, 46, 50, 53, 57, 60, 63, 66, 68],
            eff: [10, 12, 14, 16, 18, 20, 23, 26, 30, 33, 36, 40, 43, 46, 50]
        },
        HandOfMidas: {
            cost: [825.16e+6, 461.25e+12, 9.52e+21, 5.32e+27, 893.53e+30, 509.5e+42, 87.23e+54, 4.57e+72, 52.8e+84, 2.02e+99, 23.42e+111, 659.93e+120, 7.61e+135, 523.74e+141, 3.12e+138],
            mana: [40, 44, 48, 52, 54, 56, 60, 65, 70, 72, 74, 77, 80, 82, 85],
            eff: [0.05, 0.08, 0.11, 0.14, 0.17, 0.2, 0.23, 0.26, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6]
        },
        FireSword: {
            cost: [338.06e+9, 2.8e+15, 9.52e+21, 13.25e+30, 45.03e+36, 3.09e+45, 87.23e+54, 5.99e+63, 28.36e+78, 327.37e+90, 3.77e+105, 43.6e+117, 503.31e+129, 286.99e+141, 137.99e+156],
            mana: [27, 29, 31, 33, 35, 36, 38, 40, 43, 46, 49, 52, 55, 60, 65],
            eff: [10, 40, 70, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650]
        },
        WarCry: {
            cost: [138.49e+12, 23.24e+18, 1.59e+27, 2.22e+36, 3.09e+45, 1.76e+57, 2.45e+66, 1.4e+78, 39.47e+87, 1.11e+99, 12.83e+111, 148.15e+123, 4.17e+135, 286.99e+141, 19.73e+150],
            mana: [38, 41, 44, 47, 51, 55, 60, 65, 70, 72, 74, 77, 80, 82, 85],
            eff: [5, 7, 10, 13, 15, 18, 20, 23, 25, 27, 30, 33, 35, 40, 45]
        },
        ShadowClone: {
            cost: [56.74e+15, 1.17e+24, 32.35e+27, 18.44e+39, 5.76e+48, 10.94e+63, 2.5e+72, 131.47e+87, 9.04e+96, 42.74e+111, 1.2e+123, 33.92e+132, 2.33e+141, 26.92e+153, 1.85e+162],
            mana: [33, 37, 40, 44, 48, 52, 56, 60, 65, 70, 72, 74, 77, 80, 82],
            eff: [20, 23, 27, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 90]
        },
    },
    getWeaponMtp: function (i, lv, lwLv) {
        if (lv == 0)
            return 1;
        return this.EquipWeapon[i].base * (lv + 1) * this.EquipWeapon[i].inc * this.artifactEff(16, lwLv);
    },
    getHatMtp: function (i, lv, lwLv) {
        if (lv == 0)
            return 1;
        return this.EquipHat[i].base * (lv + 1) * this.EquipHat[i].inc * this.artifactEff(17, lwLv);
    },
    getSuitMtp: function (i, lv, lwLv) {
        if (lv == 0)
            return 1;
        return this.EquipSuit[i].base * (lv + 1) * this.EquipSuit[i].inc * this.artifactEff(18, lwLv);
    },
    getAuraMtp: function (i, lv) {
        var aura = this.EquipAura[i];
        switch (aura.type) {
            case 'Chesterson Chance':
                if (lv == 0)
                    return 0;
                return aura.base + lv * aura.inc;
                break;
            case 'Critical Chance':
                if (lv == 0)
                    return 0;
                return aura.base + lv * aura.inc;
                break;
            case 'Titan HP':
                if (lv == 0)
                    return 1;
                return aura.base - lv * aura.inc;
                break;
        }
    },
    getSlashMtp: function (i, lv, lwLv) {
        if (lv == 0)
            return 1;
        return this.EquipSlash[i].base * (lv + 1) * this.EquipSlash[i].inc * this.artifactEff(15, lwLv);
    },
    getPetEff: function (i, lv) {
        var act = this.Pets[i].baseEff + this.Pets[i].EAP * lv,
            psv = this.Pets[i].baseEff + this.Pets[i].EAP * lv * Math.min(Math.floor(lv / 5) * 0.05, 1);
        return {active: act, passive: psv};
    },
    getPetDmg: function (i, lv) {
        var dmg = 0,
            p = this.Pets[i],
            psvMtp = Math.min(Math.floor(lv / 5) * 0.05, 1);

        if (lv > 80) {
            dmg += p.DAP3 * (lv - 80);
            lv = 80;
        }
        if (lv > 40) {
            dmg += p.DAP2 * (lv - 40);
            lv = 40;
        }
        if (lv > 0) {
            dmg += p.DAP1 * lv + p.baseDmg;
        }

        var act = dmg,
            psv = dmg * psvMtp;

        return {active: act, passive: psv};
    },
    timeFormat: function (t) {
        var h = 0,
            m = 0,
            s = t,
            str = '';

        if (s >= 3600) {
            h = Math.floor(s / 3600);
            s = s % 3600;
            str += h + 'h ';
        }
        if (s >= 60) {
            m = Math.floor(s / 60);
            s = s % 60;
            str += m + 'm ';
        }
        if (s > 0) {
            s = s.toFixed(2);
            str += s + 's';
        }
        return str;
    },
    numFormat: function (num) {

        var myNum = new Number(num);
        if (myNum >= 1e15) {
            // var n = myNum.toExponential(2),
            // 	exp = n.slice(+n.charAt('+')+2);
            myNum /= 1e15;
            var L1 = 'a',
                L2 = 'a',
                z = 'z';
            for (; myNum > 1000; myNum /= 1000) {
                L2 = String.fromCharCode(L2.charCodeAt() + 1);
                if (L2 == String.fromCharCode(z.charCodeAt() + 1)) {
                    L2 = 'a';
                    L1 = String.fromCharCode(L1.charCodeAt() + 1);
                }
            }
            return myNum.toPrecision(4) + L1 + L2;
        } else if (myNum >= 1e12) {
            myNum /= 1e12;
            return myNum.toPrecision(3) + ' T';
        } else if (myNum >= 1e9) {
            myNum /= 1e9;
            return myNum.toPrecision(3) + ' B';
        } else if (myNum >= 1e6) {
            myNum /= 1e6;
            return myNum.toPrecision(3) + ' M';
        } else if (myNum >= 1000) {
            myNum /= 1000;
            return myNum.toPrecision(3) + ' K';
        } else {
            return Math.round(myNum);
        }
    },
    artifactUpg1: function (i, cur) {
        return ((+this.Artifacts[i].costCoef) * Math.pow(+cur + 1, this.Artifacts[i].costExp));
    },
    artifactUpgTo: function (i, cur, to) {

        var max = this.Artifacts[i].maxLvl,
            relic = 0;

        if (to > 0 && to < 5001 && to > cur) {
            if (max == 0 || to <= max) {

                for (var j = cur; j < to; j++) {
                    relic += this.artifactUpg1(i, j);
                }
                return relic;
            } else {
                for (var j = cur; j < max; j++) {
                    relic += this.artifactUpg1(i, j);
                }
                return relic;
            }
        }
        return -1;
    },
    artifactEff: function (i, lv) {
        return this.Artifacts[i].offset + lv * this.Artifacts[i].addupPerLvl;
    },
    artifactDmg: function (i, lv) {
        return lv * this.Artifacts[i].damPerLvl;
    },
    serialize: function (name, value) { //??localStorage
        if (!name) {
            return null;
        }
        localStorage.setItem(name, JSON.stringify(value));
    },
    deserialize: function (name) { //??localStorage
        if (!name) {
            return null;
        }

        var storage = localStorage.getItem(name);

        if (!storage) {
            return null;
        }

        return JSON.parse(storage);
    },
    clearCache: function (name) {
        if (!name) {
            return null;
        }
        localStorage.removeItem(name);
    },
    getClanMtp: function (lv) {
        return Math.pow(1.1, Math.min(lv, 200)) * Math.pow(1.05, Math.max(lv - 200, 0));
    },
    getArtifactMtp: function (artLvArr) {
        var allArtiDmg = 1,
            hs = this.artifactEff(9, artLvArr[9]);

        for (var i = 0; i < this.Artifacts.length; i++) {
            allArtiDmg += this.artifactDmg(i, artLvArr[i]);
        }
        return allArtiDmg * hs;
    },
    getAllDmgMtp: function (demosLv, novaLv, activePet, wpChosen, wpLv, clanLv, artLvArr, heroWpArr) {
        //pet
        var demos = this.getPetEff(8, demosLv),
            nova = this.getPetEff(9, novaLv);

        var AllDmgPetMtp = 1;

        AllDmgPetMtp *= (activePet == 8 ? demos.active : demos.passive);
        AllDmgPetMtp *= (activePet == 9 ? nova.active : nova.passive);

        //artifact
        var DivineRetribution = this.artifactEff(10, artLvArr[10]);

        //weapon
        var weapon = this.EquipWeapon[wpChosen],
            wpMtp = 1;

        if (weapon.type == 'All Damage') {
            wpMtp = this.getWeaponMtp(wpChosen, wpLv, artLvArr[16]);
        }

        var clanBonusMtp = this.getClanMtp(clanLv),
            artifactMtp = this.getArtifactMtp(artLvArr),
            heroWpMtp = this.getHeroWpMtp(-1, heroWpArr);

        return AllDmgPetMtp * DivineRetribution * clanBonusMtp * artifactMtp * wpMtp * heroWpMtp;
    },
    getTapDmgMtp: function (hamyLv, phobosLv, activePet, slashChosen, slLv, amethLv, dkhmLv) {
        var hamy = this.getPetEff(10, hamyLv),
            phobos = this.getPetEff(11, phobosLv);

        var TapDmgPetMtp = 1;

        TapDmgPetMtp *= (activePet == 10 ? hamy.active : hamy.passive);
        TapDmgPetMtp *= (activePet == 11 ? phobos.active : phobos.passive);

        //artifact
        var DrunkenHammer = this.artifactEff(36, dkhmLv);

        //slash
        var slash = this.EquipSlash[slashChosen],
            SlashMtp = 1;

        if (slash.type == 'Tap Damage') {
            SlashMtp = this.getSlashMtp(slashChosen, slLv, amethLv);
        }

        return TapDmgPetMtp * DrunkenHammer * SlashMtp;
    },
    getPetDmgMtp: function (slashChosen, slLv, amethLv, fbLv, allPetsBase, ptevLv) {
        //artifact
        var FuriesBow = this.artifactEff(4, fbLv);

        //slash
        var slash = this.EquipSlash[slashChosen],
            SlashMtp = 1;

        if (slash.type == 'Pet Damage') {
            SlashMtp = this.getSlashMtp(slashChosen, slLv, amethLv);
        }

        //skill
        var PetEvolution = 1;

        if (ptevLv > 0) {
            PetEvolution = this.Skills[9].effArr[ptevLv - 1];
        }

        return FuriesBow * SlashMtp * allPetsBase * PetEvolution;
    },
    getHeroMtp: function (tempestLv, totoLv, activePet, bodcLv, lwLv, wpChosen, wpLv) {

        var tempest = this.getPetEff(6, tempestLv),
            toto = this.getPetEff(7, totoLv);

        var HeroDmgPetMtp = 1;

        HeroDmgPetMtp *= (activePet == 6 ? tempest.active : tempest.passive);
        HeroDmgPetMtp *= (activePet == 7 ? toto.active : toto.passive);

        //artifact
        var BladeOfDamocles = this.artifactEff(8, bodcLv);

        //weapon
        var weapon = this.EquipWeapon[wpChosen],
            wpMtp = 1;

        if (weapon.type == 'All Hero Damage') {
            wpMtp = this.getWeaponMtp(wpChosen, wpLv, lwLv);
        }

        return HeroDmgPetMtp * BladeOfDamocles * wpMtp;
    },
    getSpellMtp: function (zeroLv, HarkerLv, activePet, hatChosen, hatLv, hbLv, cotaLv, hmLv) {
        var hat = this.EquipHat[hatChosen],
            SpellHatMtp = 1;

        if (hat.type == 'Spell Hero Damage') {
            SpellHatMtp = this.getHatMtp(hatChosen, hatLv, hbLv);
        }

        //pet
        var zero = this.getPetEff(0, zeroLv),
            harker = this.getPetEff(1, HarkerLv);

        var SpellPetMtp = 1;

        SpellPetMtp *= (activePet == 0 ? zero.active : zero.passive);
        SpellPetMtp *= (activePet == 1 ? harker.active : harker.passive);

        //artifact
        var CharmOfTheAncient = this.artifactEff(6, cotaLv);

        //skills
        var HyperMagic = 1;

        if (hmLv > 0) {
            HyperMagic = this.Skills[12].effArr[hmLv - 1];
        }
        return SpellHatMtp * SpellPetMtp * CharmOfTheAncient * HyperMagic;
    },
    getMeleeMtp: function (cerberusLv, baskyLv, activePet, hatChosen, hatLv, hbLv, foedLv, saLv) {
        var hat = this.EquipHat[hatChosen],
            MeleeHatMtp = 1;

        if (hat.type == 'Melee Hero Damage') {
            MeleeHatMtp = this.getHatMtp(hatChosen, hatLv, hbLv);
        }

        //pet
        var cerberus = this.getPetEff(2, cerberusLv),
            basky = this.getPetEff(3, baskyLv);

        var MeleePetMtp = 1;

        MeleePetMtp *= (activePet == 2 ? cerberus.active : cerberus.passive);
        MeleePetMtp *= (activePet == 3 ? basky.active : basky.passive);

        //artifact
        var FruitOfEden = this.artifactEff(5, foedLv);

        //skills
        var StrongerArms = 1;

        if (saLv > 0) {
            StrongerArms = this.Skills[10].effArr[saLv - 1];
        }
        return MeleeHatMtp * MeleePetMtp * FruitOfEden * StrongerArms;
    },
    getRangedMtp: function (scrapsLv, mousyLv, activePet, hatChosen, hatLv, hbLv, tsosLv, ppaLv) {
        var hat = this.EquipHat[hatChosen],
            RangedHatMtp = 1;

        if (hat.type == 'Ranged Hero Damage') {
            RangedHatMtp = this.getHatMtp(hatChosen, hatLv, hbLv);
        }

        //pet
        var scraps = this.getPetEff(4, scrapsLv),
            mousy = this.getPetEff(5, mousyLv);

        var RangedPetMtp = 1;

        RangedPetMtp *= (activePet == 4 ? scraps.active : scraps.passive);
        RangedPetMtp *= (activePet == 5 ? mousy.active : mousy.passive);

        //artifact
        var SwordOfStorms = this.artifactEff(7, tsosLv);

        //skills
        var PinPointAcc = 1;

        if (ppaLv > 0) {
            PinPointAcc = this.Skills[14].effArr[ppaLv - 1];
        }
        return RangedHatMtp * RangedPetMtp * SwordOfStorms * PinPointAcc;
    },
    getCriticalChance: function (auraChosen, auraLv, csLv, aomLv, heroSkillCnt) {
        var aura = this.EquipAura[auraChosen],
            mtp = 0.002;

        if (aura.type == 'Critical Chance') {
            mtp += this.getAuraMtp(auraChosen, auraLv);
        }
        if (csLv > 0) {
            mtp += this.SwordMasterSkills.CriticalStrike.eff[csLv - 1] * 0.01;
        }
        if (aomLv > 0) {
            mtp += this.artifactEff(19, aomLv) * 0.01;
        }
        if (heroSkillCnt > 0) {
            mtp += 0.001 * heroSkillCnt;
        }
        return Math.min(mtp, 0.5);
    },
    getCriticalMtp: function (wpChosen, wpLv, lwLv) {
        var min = 3,
            max = 20,
            weapon = this.EquipWeapon[wpChosen],
            wpMtp = 1;

        if (weapon.type == 'Crit Damage') {
            wpMtp = this.getWeaponMtp(wpChosen, wpLv, lwLv);
        }
        return {min: min * wpMtp, max: max * wpMtp};
    },
    getGoldMtp: function (bubblesLv, pollyLv, activePet, suitChosen, suitLv, homLv, bopLv) {
        var suit = this.EquipSuit[suitChosen],
            SuitMtp = 1;

        if (suit.type == 'All Gold') {
            SuitMtp = this.getSuitMtp(suitChosen, suitLv, homLv);
        }

        //pet
        var bubbles = this.getPetEff(12, bubblesLv),
            polly = this.getPetEff(13, pollyLv);

        var PetMtp = 1;

        PetMtp *= (activePet == 12 ? bubbles.active : bubbles.passive);
        PetMtp *= (activePet == 13 ? polly.active : polly.passive);

        //artifact
        var BookOfProphecy = this.artifactEff(11, bopLv);

        return SuitMtp * PetMtp * BookOfProphecy;
    },
    getTitanNum: function (stage, iplv) {
        var baseNum = 10 + Math.min(Math.floor(stage / 1000) * 4, 20);
        return Math.max(baseNum - iplv, 1);
    },
    getTitanHp: function (stage, titanHpMtp) {
        return 17.5 * Math.pow(1.39, Math.min(stage, 115)) * Math.pow(1.13, Math.max(stage - 115, 0)) * titanHpMtp;
    },
    getBossHp: function (stage, titanHpMtp) {
        var consArr = [2, 3, 4, 5, 8],
            constant = consArr[(stage - 1) % 5];

        return constant * this.getTitanHp(stage, titanHpMtp) * Math.min(2.5, Math.pow(1.1, Math.floor(stage / 200)));
    },
    getTitanHpMtp: function (auraChosen, auraLv) {
        var aura = this.EquipAura[auraChosen],
            mtp = 1;

        if (aura.type == 'Titan HP') {
            mtp = this.getAuraMtp(auraChosen, auraLv);
        }
        return mtp;
    },
    getChestersonChance: function (auraChosen, auraLv, eoftLv) {
        var aura = this.EquipAura[auraChosen],
            mtp = 0.01;

        if (aura.type == 'Chesterson Chance') {
            mtp += this.getAuraMtp(auraChosen, auraLv);
        }

        mtp += 0.01 * this.artifactEff(25, eoftLv);
        return mtp;
    },
    getChestersonMtp: function (suitChosen, suitLv, homLv, coctLv) {
        var suit = this.EquipSuit[suitChosen],
            suitMtp = 1;

        if (suit.type == 'Chesterson Amount') {
            suitMtp = this.getSuitMtp(suitChosen, suitLv, homLv);
        }

        var artiMtp = this.artifactEff(24, coctLv);
        return suitMtp * artiMtp;
    },
    getBaseTitanGold: function (stage, goldMtp, titanHpMtp) {
        return  Math.max(1, this.getTitanHp(stage, titanHpMtp) * 0.008) * goldMtp;
    },
    getBaseBossGold: function (stage, goldMtp, titanHpMtp) {
        return  Math.max(1, this.getBossHp(stage, titanHpMtp) * 0.008) * goldMtp;
    },
    getTitanGold: function (stage, goldMtp, titanMtp, titanHpMtp) {
        return Math.floor(this.getBaseTitanGold(stage, goldMtp, titanHpMtp) * titanMtp);
    },
    getBossGold: function (stage, goldMtp, bossMtp, titanHpMtp) {
        return Math.floor(this.getBaseBossGold(stage, goldMtp, titanHpMtp) * bossMtp * 3);
    },
    getChestersonGold: function (stage, goldMtp, chestersonMtp, titanHpMtp) {
        return Math.floor(this.getBaseTitanGold(stage, goldMtp, titanHpMtp) * chestersonMtp) * 10;
    },
    getTotalGold: function (stage, goldMtp, titanMtp, bossMtp, chestersonMtp, chestersonChance, x10chance, iplv, titanHpMtp) {
        var gd = 0;
        gd += this.getBossGold(stage, goldMtp, bossMtp, titanHpMtp);
        gd += this.getTitanGold(stage, goldMtp, titanMtp, titanHpMtp) * this.getTitanNum(stage, iplv) * (1 - chestersonChance);
        gd += this.getChestersonGold(stage, goldMtp, chestersonMtp, titanHpMtp) * this.getTitanNum(stage, iplv) * chestersonChance;
        gd = gd * (x10chance * 10 + (1 - x10chance));
        return gd;
    },
    getHeroWpMtp: function (heroIndex, heroWpArr) {
        var mtp = 1,
            min = heroWpArr[0];
        for (var i = 0; i < heroWpArr.length; i++) {
            if (i == heroIndex)
                mtp *= (1 + 0.5 * heroWpArr[i]);
            if (heroWpArr[i] < min)
                min = heroWpArr[i];
        }
        if (heroIndex == -1) {
            return Math.max(min * 10, 1);
        }
        return mtp;
    },
    getHeroInitDmg: function (heroIndex) {
        return this.Heros[heroIndex].init / 10 * Math.pow(1 - 23 / 1000 * Math.min(heroIndex, 34), Math.min(heroIndex, 34));
    },
    getHeroDmg: function (heroIndex, heroLv, typeMtp, allDmgMtp, allHeroMtp, heroWpArr) {
        var impBonus = 1;
        for (var i = 0; i < this.HeroImprBonus.length; i++) {
            if (heroLv >= this.HeroImprBonus[i].lv) {
                impBonus *= TT2.HeroImprBonus[i].mtp;
                continue;
            }
            break;
        }
        return this.getHeroInitDmg(heroIndex) * impBonus * heroLv * typeMtp * allDmgMtp * allHeroMtp * this.getHeroWpMtp(heroIndex, heroWpArr);
    },
    getSwordMasterDmg: function (lv, tapDmgMtp, allDmgMtp, herosDPS, tapFromHeros) {
        var impBonus = 1;
        for (var i = 0; i < this.SMImprBonus.length; i++) {
            if (lv >= this.SMImprBonus[i].lv) {
                impBonus *= TT2.SMImprBonus[i].mtp;
                continue;
            }
            break;
        }
        return lv * impBonus * tapDmgMtp * allDmgMtp + herosDPS * tapFromHeros;
    },
    // Cost form heroLv-1 to heroLv
    getHeroUpgCost: function (heroIndex, heroLv) {
        var init = this.Heros[heroIndex].init;
        if (heroLv == 0)
            return 0;
        return init * Math.pow(1.082, heroLv - 1);
    },
    // Cost from 0 upgrade to heroLv
    getHeroCost: function (heroIndex, heroLv, costMtp) {
        var init = this.Heros[heroIndex].init,
            basicCost = init * (Math.pow(1.082, heroLv) - 1) / 0.082,
            skillCost = 0;

        if (heroLv >= 20) {
            skillCost += this.getHeroUpgCost(heroIndex, 20) * 10
        }
        if (heroLv >= 40) {
            skillCost += this.getHeroUpgCost(heroIndex, 40) * 10
        }
        if (heroLv >= 60) {
            skillCost += this.getHeroUpgCost(heroIndex, 60) * 10
        }
        if (heroLv >= 100) {
            skillCost += this.getHeroUpgCost(heroIndex, 100) * 10
        }
        if (heroLv >= 200) {
            skillCost += this.getHeroUpgCost(heroIndex, 200) * 10
        }
        if (heroLv >= 500) {
            skillCost += this.getHeroUpgCost(heroIndex, 500) * 10
        }
        if (heroLv >= 1000) {
            skillCost += this.getHeroUpgCost(heroIndex, 1000) * 1010
        }
        if (heroLv >= 2000) {
            skillCost += this.getHeroUpgCost(heroIndex, 2000) * 1010
        }
        if (heroLv >= 3000) {
            skillCost += this.getHeroUpgCost(heroIndex, 3000) * 10
        }
        if (heroLv >= 4000) {
            skillCost += this.getHeroUpgCost(heroIndex, 4000) * 10
        }

        return (basicCost + skillCost) * costMtp;
    },
    getSwordMasterCost: function (lv) {
        var cost = 5 * (Math.pow(1.062, lv) - 1) / 0.062;
        return cost;
    },
    getRelics: function (s, bosLv) {
        var bosEff = this.artifactEff(0, bosLv);
        if (s <= 75) {
            return 0;
        }
        var r = Math.pow((s - 75) / 14, 1.75);
        if (r < 100) {
            return Math.round(Math.floor(r) * bosEff);
        }
        return Math.round(r * bosEff);
    }
}
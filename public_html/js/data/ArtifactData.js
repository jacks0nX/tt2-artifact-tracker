if (!TT2) {
    TT2 = {};
}

TT2.Artifacts = [
    // S
    {tier: 'S', id: 1, name: 'Book of Shadows', maxLvl: 0, build: '', addupPerLvl: 0.05, damPerLvl: 0.3, costCoef: 0.7, costExp: 2.5, offset: 1, effect: 'Prestige Relic', pref: '&#10005', app: '',
        growthMax: 0.015, growthRate: '2.5E-05', growthExpo: 1},
    // A
    {tier: 'A', id: 2, name: 'Parchment of Foresight', maxLvl: 0, build: 'CS,SC,HS', addupPerLvl: 0.1, damPerLvl: 0.4, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'War Cry Skill Effect', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'A', id: 3, name: 'Laborer\'s Pendant', maxLvl: 0, build: '', addupPerLvl: 0.1, damPerLvl: 0.4, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Hand Of Midas Effect', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'A', id: 43, name: 'Invader\'s Gjalarhorn', maxLvl: 0, build: 'CS,SC,HS', addupPerLvl: 0.02, damPerLvl: 0.2, costCoef: 0.6, costExp: 1.8, offset: 1, effect: 'All Active Skill Effect', pref: '&#10005', app: '',
        growthMax: 0.045, growthRate: '4.5E-05', growthExpo: 1},
    {tier: 'A', id: 4, name: 'Heroic Shield', maxLvl: 0, build: '', addupPerLvl: 0.2, damPerLvl: 0.5, costCoef: 0.7, costExp: 1.8, offset: 1, effect: 'Boss Gold', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'A', id: 5, name: 'Furies Bow', maxLvl: 0, build: 'CS,SC,HS', addupPerLvl: 0.15, damPerLvl: 0.6, costCoef: 0.7, costExp: 1.7, offset: 1, effect: 'Ranged Hero Damage', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'A', id: 9, name: 'Hero\'s Blade', maxLvl: 0, build: 'CS,SC,HS', addupPerLvl: 0.1, damPerLvl: 0.5, costCoef: 0.7, costExp: 1.7, offset: 1, effect: 'All Hero Damage', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    // B
    {tier: 'B', id: 10, name: 'Heavenly Sword', maxLvl: 0, build: '', addupPerLvl: 0.05, damPerLvl: 0.3, costCoef: 0.7, costExp: 2.2, offset: 1, effect: 'All artifact Damage', pref: '&#10005', app: '',
        growthMax: 0.04, growthRate: '3.75E-05', growthExpo: 1},
    {tier: 'B', id: 11, name: 'Divine Retribution', maxLvl: 0, build: '', addupPerLvl: 0.1, damPerLvl: 0.3, costCoef: '1.0', costExp: 2, offset: 1, effect: 'All Damage', pref: '&#10005', app: '',
        growthMax: 0.04, growthRate: '3.75E-05', growthExpo: 1},
    {tier: 'B', id: 17, name: 'Royal Toxin', maxLvl: 0, build: 'CS,SC,HS', addupPerLvl: 0.1, damPerLvl: 0.5, costCoef: 0.7, costExp: 1.8, offset: 1, effect: 'Deadly Strike Effect', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'B', id: 18, name: 'Blade of Damocles', maxLvl: 0, build: '', addupPerLvl: 0.08, damPerLvl: 0.3, costCoef: 0.65, costExp: 2, offset: 1, effect: 'Sword Boost', pref: '&#10005', app: '',
        growthMax: 0.04, growthRate: '3.75E-05', growthExpo: 1},
    {tier: 'B', id: 19, name: 'Helmet of Madness', maxLvl: 0, build: '', addupPerLvl: 0.08, damPerLvl: 0.3, costCoef: 0.65, costExp: 2, offset: 1, effect: 'Helmet Boost', pref: '&#10005', app: '',
        growthMax: 0.04, growthRate: '3.75E-05', growthExpo: 1},
    {tier: 'B', id: 40, name: 'Titanium Plating', maxLvl: 0, build: '', addupPerLvl: 0.08, damPerLvl: 0.3, costCoef: 0.65, costExp: 2, offset: 1, effect: 'Armor Boost', pref: '&#10005', app: '',
        growthMax: 0.04, growthRate: '3.75E-05', growthExpo: 1},
    {tier: 'B', id: 16, name: 'Amethyst Staff', maxLvl: 0, build: '', addupPerLvl: 0.08, damPerLvl: 0.3, costCoef: 0.65, costExp: 2, offset: 1, effect: 'Slash Boost', pref: '&#10005', app: '',
        growthMax: 0.04, growthRate: '3.75E-05', growthExpo: 1},
    {tier: 'B', id: 12, name: 'Book of Prophecy', maxLvl: 0, build: '', addupPerLvl: 0.2, damPerLvl: 0.3, costCoef: 0.7, costExp: 2.2, offset: 1, effect: 'All Gold', pref: '&#10005', app: '',
        growthMax: 0.0375, growthRate: '3.75E-05', growthExpo: 1},
    {tier: 'B', id: 49, name: 'Heart of Storms', maxLvl: 0, build: '', addupPerLvl: 0.00025, damPerLvl: 0.3, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Splash Damage', pref: '+', app: '%',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'B', id: 50, name: 'Coins of Ebizu', maxLvl: 0, build: '', addupPerLvl: 0.3, damPerLvl: 0.3, costCoef: 0.7, costExp: 1.8, offset: 1, effect: 'Splash Gold', pref: '+', app: '%',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    // C
    {tier: 'C', id: 39, name: 'Influential Elixir', maxLvl: 0, build: 'CS', addupPerLvl: 0.1, damPerLvl: 0.5, costCoef: 0.7, costExp: 1.7, offset: 1, effect: 'Clan Ship Damage', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '3.75E-05', growthExpo: 1},
    {tier: 'C', id: 34, name: 'Elixir of Eden', maxLvl: 0, build: 'SC', addupPerLvl: 0.1, damPerLvl: 0.4, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Shadow Clone Effect', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'C', id: 6, name: 'Fruit of Eden', maxLvl: 0, build: 'PET', addupPerLvl: 0.1, damPerLvl: 0.3, costCoef: 0.7, costExp: 2, offset: 1, effect: 'Pet Damage', pref: '&#10005', app: '',
        growthMax: 0.045, growthRate: '4.5E-05', growthExpo: 1},
    {tier: 'C', id: 37, name: 'Drunken Hammer', maxLvl: 0, build: 'SC,HS', addupPerLvl: 0.1, damPerLvl: 0.3, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Tap Damage', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'C', id: 44, name: 'Samosek Sword', maxLvl: 0, build: 'SC,HS', addupPerLvl: 0.1, damPerLvl: 0.5, costCoef: 0.7, costExp: 2.0, offset: 1, effect: 'Sword  Attack Damage', pref: '&#10005', app: '',
        growthMax: 0.04, growthRate: '3.5E-05', growthExpo: 1},
    {tier: 'C', id: 36, name: 'Titan\'s Mask', maxLvl: 0, build: 'HS', addupPerLvl: 0.1, damPerLvl: 0.4, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Heavenly Strike Effect', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    // D
    {tier: 'D', id: 27, name: 'Bringer of Ragnarok', maxLvl: 0, build: 'SC,HS', addupPerLvl: 0.1, damPerLvl: 0.4, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Fire Sword Effect', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'D', id: 7, name: 'Charm of the Ancient', maxLvl: 0, build: '', addupPerLvl: 0.15, damPerLvl: 0.6, costCoef: 0.7, costExp: 1.7, offset: 1, effect: 'Spell Hero Damage', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'D', id: 8, name: 'The Sword of Storms', maxLvl: 0, build: '', addupPerLvl: 0.15, damPerLvl: 0.6, costCoef: 0.7, costExp: 1.7, offset: 1, effect: 'Melee Hero Damage', pref: '&#10005', app: '',
        growthMax: 0.045, growthRate: '4.5E-05', growthExpo: 1},
    {tier: 'D', id: 25, name: 'Chest of Contentment', maxLvl: 0, build: '', addupPerLvl: 0.25, damPerLvl: 0.4, costCoef: '1.0', costExp: 1.8, offset: 1, effect: 'Chesterson Gold', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'D', id: 48, name: 'Great Fay Medallion', maxLvl: 0, build: '', addupPerLvl: 0.1, damPerLvl: 0.4, costCoef: 1, costExp: 1.8, offset: 1, effect: 'Fairy Gold', pref: '&#10005', app: '',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'D', id: 14, name: 'Ring of Fealty', maxLvl: 30, build: '', addupPerLvl: 2, damPerLvl: 1.5, costCoef: 0.6, costExp: 2.4, offset: 0, effect: 'Hand Of Midas Duration', pref: '+', app: 's',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'D', id: 15, name: 'Aegis', maxLvl: 30, build: '', addupPerLvl: 2, damPerLvl: 1.5, costCoef: 0.6, costExp: 2.4, offset: 0, effect: 'War Cry Skill Duration', pref: '+', app: 's',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'D', id: 23, name: 'Staff of Radiance', maxLvl: 40, build: '', addupPerLvl: 2, damPerLvl: 0.8, costCoef: 0.5, costExp: 2.6, offset: 0, effect: 'Hero upgrade cost', pref: '-', app: '%',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'D', id: 24, name: 'Invader\'s Shield', maxLvl: 50, build: '', addupPerLvl: 0.5, damPerLvl: 1.6, costCoef: 0.5, costExp: 2.1, offset: 0, effect: 'Double Fairy Chance', pref: '+', app: '%',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'D', id: 13, name: 'Divine Chalice', maxLvl: 50, build: '', addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.8, costExp: 2.6, offset: 0, effect: 'Chance for 10x Gold', pref: '+', app: '%',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'D', id: 42, name: 'Phantom Timepiece', maxLvl: 30, build: '', addupPerLvl: 1, damPerLvl: 0.8, costCoef: '1.0', costExp: 3, offset: 0, effect: 'All Active Skill Duration', pref: '+', app: 's',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'D', id: 26, name: 'Egg of Fortune', maxLvl: 10, build: '', addupPerLvl: 1, damPerLvl: 0.3, costCoef: 1.4, costExp: 3, offset: 0, effect: 'Chesterson Chance', pref: '+', app: '%',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'D', id: 20, name: 'Axe of Muerte', maxLvl: 20, build: '', addupPerLvl: 0.5, damPerLvl: 3, costCoef: 0.8, costExp: 2.5, offset: 0, effect: 'Critical Strike Chance', pref: '+', app: '%',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'D', id: 21, name: 'Titan Spear', maxLvl: 40, build: '', addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.6, costExp: 3, offset: 0, effect: 'Hand of Midas Mana Cost', pref: '-', app: 'm',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'D', id: 22, name: 'The Arcana Cloak', maxLvl: 40, build: '', addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.6, costExp: 3, offset: 0, effect: 'War Cry Skill Mana Cost', pref: '-', app: 'm',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'D', id: 41, name: 'Ambrosia Elixir', maxLvl: 40, build: '', addupPerLvl: 2, damPerLvl: 0.8, costCoef: 0.6, costExp: 3, offset: 0, effect: 'Mana Capacity', pref: '+', app: 'm',
        growthMax: 0, growthRate: 0, growthExpo: 1},

    // E
    {tier: 'E', id: 45, name: 'Avian Feather', maxLvl: 0, build: '', addupPerLvl: 0.2, damPerLvl: 0.3, costCoef: 0.6, costExp: 1.7, offset: 1, effect: 'Inactive Damage', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'E', id: 46, name: 'Zakinthos Coin', maxLvl: 0, build: '', addupPerLvl: 0.2, damPerLvl: 0.3, costCoef: 0.7, costExp: 1.8, offset: 1, effect: 'Inactive Gold', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '5E-05', growthExpo: 1},
    {tier: 'E', id: 38, name: 'Stone of the Valrunes', maxLvl: 0, build: '', addupPerLvl: 0.3, damPerLvl: 0.5, costCoef: 0.7, costExp: 1.8, offset: 1, effect: 'Monster Gold', pref: '&#10005', app: '',
        growthMax: 0.05, growthRate: '6.25E-05', growthExpo: 1},
    {tier: 'E', id: 47, name: 'The Master\'s Sword', maxLvl: 40, build: '', addupPerLvl: 2, damPerLvl: 2, costCoef: 0.5, costExp: 2.6, offset: 1, effect: 'Sword Master Upgrade Cost', pref: '-', app: '%',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'E', id: 28, name: 'Glacial Axe', maxLvl: 30, build: '', addupPerLvl: 2, damPerLvl: 1.5, costCoef: 0.6, costExp: 2.4, offset: 0, effect: 'Fire Sword Duration', pref: '+', app: 's',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'E', id: 29, name: 'Oak Staff', maxLvl: 30, build: '', addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.6, costExp: 3, offset: 0, effect: 'Fire Sword Cost', pref: '-', app: 'm',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'E', id: 30, name: 'Forbidden Scroll', maxLvl: 30, build: '', addupPerLvl: 2, damPerLvl: 1.5, costCoef: 0.6, costExp: 2.4, offset: 0, effect: 'Critical Strike Duration', pref: '+', app: 's',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'E', id: 31, name: 'Glove of Kuma', maxLvl: 30, build: '', addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.6, costExp: 3, offset: 0, effect: 'Critical Strike Cost', pref: '-', app: 'm',
        growthMax: 0, growthRate: '4.5E-05', growthExpo: 1},
    {tier: 'E', id: 32, name: 'Swamp Gauntlet', maxLvl: 30, build: '', addupPerLvl: 2, damPerLvl: 1.5, costCoef: 0.6, costExp: 2.4, offset: 0, effect: 'Shadow Clone Duration', pref: '+', app: 's',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'E', id: 33, name: 'Hunter\'s Ointment', maxLvl: 40, build: '', addupPerLvl: 1, damPerLvl: 0.8, costCoef: 0.6, costExp: 3, offset: 0, effect: 'Shadow Clone Cost', pref: '-', app: 'm',
        growthMax: 0, growthRate: 0, growthExpo: 1},
    {tier: 'E', id: 35, name: 'Infinity Pendulum', maxLvl: 20, build: '', addupPerLvl: 1, damPerLvl: 0.9, costCoef: 0.6, costExp: 3, offset: 0, effect: 'Heavenly Strike Cost', pref: '-', app: 'm',
        growthMax: 0, growthRate: 0, growthExpo: 1}
];
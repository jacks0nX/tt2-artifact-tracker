if (!TT2) {
    TT2 = {};
}



TT2.EquipWeapon = [
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
    {name: 'Sharpened Saw', rare: 'legendary', base: 10, inc: 0.2, type: 'Crit Damage'} //OK
];

TT2.EquipHat = [
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
    {name: 'Ninja Mask', rare: 'legendary', base: 10, inc: 0.16, type: 'Spell Hero Damage'} //OK
],
    TT2.EquipSuit = [
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
        {name: 'Ninja Suit', rare: 'legendary', base: 10, inc: 0.21, type: 'Chesterson Amount'}
    ],
    TT2.EquipAura = [
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
        {name: 'Frost Bite', rare: 'legendary', base: 0.99, inc: 0.009, type: 'Titan HP', pref: '�'}
    ];

TT2.EquipSlash = [
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
    {name: 'Something Stinks', rare: 'legendary', base: 10, inc: 0.10, type: 'Pet Damage'}
];

TT2.Pets = [
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
];

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

TT2.Heros = [
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
];

TT2.HeroImprBonus = [
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
    {lv: 6000, mtp: 100}
];

TT2.SMImprBonus = [
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
    {lv: 6000, mtp: 60}
];

TT2.SwordMasterSkills = {
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
    }
};
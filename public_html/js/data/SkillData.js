if (!TT2) {
    TT2 = {};
}

TT2.Skills = [
    {
        name: 'Knight',
        rows: [
            [
                null,
                {name: 'Knight\'s Valor', id: 1, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 0},
                null
            ],
            [
                {name: 'Chivalric Order', id: 2, maxLvl: 200, reqId: 1, reqLvl: 0, reqSum: 3},
                {name: 'Pet Evolution', id: 3, maxLvl: 20, reqId: 1, reqLvl: 0, reqSum: 3},
                {name: 'Heart of Midas', id: 4, maxLvl: 12, reqId: 1, reqLvl: 0, reqSum: 3}
            ],
            [
                {name: 'Cleaving Strike', id: 5, maxLvl: 200, reqId: 2, reqLvl: 0, reqSum: 20},
                {name: 'Summon Inferno', id: 6, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 20},
                {name: 'Lightning Burst', id: 7, maxLvl: 12, reqId: 4, reqLvl: 0, reqSum: 20}
            ],
            [
                {name: 'Barbaric Fury', id: 8, maxLvl: 200, reqId: 5, reqLvl: 0, reqSum: 50},
                null,
                {name: 'Flash Zip', id: 9, maxLvl: 12, reqId: 7, reqLvl: 0, reqSum: 50}
            ]
        ]
    },
    {
        name: 'Warlord',
        rows: [
            [
                null,
                {name: 'Master Commander', id: 10, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 0},
                null
            ],
            [
                {name: 'Spoils of War', id: 11, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 3},
                {name: 'Heroic Might', id: 12, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 3},
                {name: 'Aerial Assault', id: 13, maxLvl: 12, reqId: 0, reqLvl: 0, reqSum: 3}
            ],
            [
                {name: 'Tactical Insight', id: 14, maxLvl: 200, reqId: 0, reqLvl: 0, reqSum: 20},
                null,
                {name: 'Coordinated Offensive', id: 15, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 20}
            ],
            [
                {name: 'Astral Awakening', id: 16, maxLvl: 200, reqId: 0, reqLvl: 0, reqSum: 50},
                null,
                {name: 'Anchoring Shot', id: 17, maxLvl: 12, reqId: 0, reqLvl: 0, reqSum: 50}
            ]
        ]
    },
    {
        name: 'Sorcerer',
        rows: [
            [
                null,
                {name: 'Limit Break', id: 18, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 0},
                null
            ],
            [
                {name: 'Midas Ultimate', id: 19, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 3},
                {name: 'Angelic Radiance', id: 20, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 3},
                {name: 'Phantom Vengeance', id: 21, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 3}
            ],
            [
                {name: 'Fairy Charm', id: 22, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 20},
                {name: 'Mana Siphon', id: 23, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 20},
                {name: 'Eternal Darkness', id: 24, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 20}
            ],
            [
                {name: 'Manni Mana', id: 25, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 50},
                {name: 'Lightning Strike', id: 26, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 50},
                {name: 'Dimensional Shift', id: 27, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 50}
            ]
        ]
    },
    {
        name: 'Rogue',
        rows: [
            [
                null,
                {name: 'Master Thief', id: 28, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 0},
                null
            ],
            [
                {name: 'Assassinate', id: 29, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 3},
                {name: 'Silent March', id: 30, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 3},
                {name: 'Ambush', id: 31, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 3}
            ],
            [
                {name: 'Twilight\'s Veil', id: 32, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 20},
                {name: 'Ghost Ship', id: 33, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 20},
                {name: 'Shadow Assassin', id: 34, maxLvl: 20, reqId: 0, reqLvl: 0, reqSum: 20}
            ]
        ]
    }


//    {name: 'Pet: Lighting Burst', intro: 'Pet Focus Tap Damage', pre: '+', app: '', precon: 0,
//        effArr: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Pet: Heart of Midas', intro: 'Gold Focus Tap Amount', pre: '+', app: '', precon: 1,
//        effArr: [16, 32, 48, 64, 80, 104, 128, 160, 200, 240, 288, 336, 400, 480, 560, 640, 800, 1040, 1280, 1600],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Pet: Flash Zip', intro: 'Boss Focus Tap Damage', pre: '+', app: '', precon: 1,
//        effArr: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Ultra Heroes', intro: 'Hero Focus Tap Damage', pre: '+', app: '', precon: 2,
//        effArr: [8, 16, 24, 32, 40, 52, 64, 80, 100, 120, 144, 168, 200, 240, 280, 320, 400, 520, 640, 800],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Fairyland', intro: 'Chance for Multiple Fairies', pre: '+', app: '%', precon: 4,
//        effArr: [0.2, 0.4, 0.6, 0.7, 0.8],
//        costArr: [1, 3, 5, 7, 10], max: 5},
//    {name: 'Mighty Power', intro: 'Hero Focus Tap Count', pre: '+', app: '', precon: 4,
//        effArr: [1, 2, 3, 4, 5],
//        costArr: [1, 2, 3, 4, 5], max: 5},
//    {name: 'Time Distortion', intro: 'seconds to Boss Timer', pre: '+', app: '', precon: 5,
//        effArr: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
//        costArr: [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10, 15], max: 15},
//    {name: 'Summon Help', intro: 'Clan Focus Tap Damage', pre: '+', app: '', precon: 6,
//        effArr: [3, 6, 10, 14, 18, 22, 26, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    //2
//    {name: 'Gold Splitter', intro: 'Inactive Gold', pre: '�', app: '', precon: 0,
//        effArr: [1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20, 25, 30, 35, 40, 50],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Pet Evolution', intro: 'Pet Damage', pre: '�', app: '', precon: 11,
//        effArr: [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 24, 26, 30, 40, 50, 60],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Stronger Arms', intro: 'Melee Hero Damage', pre: '�', app: '', precon: 9,
//        effArr: [2, 4, 6, 8, 10, 13, 16, 20, 25, 30, 36, 42, 50, 60, 70, 80, 100, 130, 160, 200],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Intimidating Presence', intro: 'Titan Count Per Stage', pre: '-', app: '', precon: 10,
//        effArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Hyper Magic', intro: 'Spell Hero Damage', pre: '�', app: '', precon: 11,
//        effArr: [2, 4, 6, 8, 10, 13, 16, 20, 25, 30, 36, 42, 50, 60, 70, 80, 100, 130, 160, 200],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Extended Reach', intro: 'Splash Damage', pre: '', app: '%', precon: 12,
//        effArr: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.20, 0.21],
//        costArr: [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 35, 40, 50], max: 20},
//    {name: 'Pin Point Accuracy', intro: 'Range Hero Damage', pre: '�', app: '', precon: 13,
//        effArr: [2, 4, 6, 8, 10, 13, 16, 20, 25, 30, 36, 42, 50, 60, 70, 80, 100, 130, 160, 200],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Silent March', intro: 'Inactive Stage Advance up to Stage', pre: '', app: '', precon: 14,
//        effArr: [100, 300, 500, 700, 1000, 2000, 3000, 4000],
//        costArr: [1, 2, 3, 4, 5, 6, 7, 8], max: 8},
//    {name: 'Titan Family', intro: 'Multiple Titan Chance', pre: '+', app: '%', precon: 16,
//        effArr: [0.02, 0.04, 0.06, 0.08, 0.10, 0.12, 0.14, 0.16, 0.18, 0.20, 0.22, 0.24, 0.26, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Pet: Stealth', intro: 'Inactive Pet Damage', pre: '�', app: '', precon: 16,
//        effArr: [0.1, 0.2, 0.3, 0.4, 0.5, 0.65, 0.8, 1.0, 1.25, 1.5, 1.8, 2.1, 2.5, 3, 3.5, 4, 5, 6.5, 8, 10],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    //3
//    {name: 'Magic Fusion', intro: 'Damage to Magic Fusion', pre: '+', app: '', precon: 0,
//        effArr: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Magic Well', intro: 'Mana Regen Rate', pre: '+', app: '', precon: 21,
//        effArr: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Flame Touch', intro: 'Damage to Flame Touch', pre: '+', app: '', precon: 19,
//        effArr: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Mana Limit Break', intro: 'Mana Cap', pre: '+', app: '', precon: 20,
//        effArr: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 200, 220],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Heroic Might', intro: 'Heroes Crit Damage', pre: '�', app: '', precon: 21,
//        effArr: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Mana Siphon', intro: 'Mana Steal', pre: '+', app: '%', precon: 25,
//        effArr: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Midas Ultimate', intro: 'Damage', pre: '�', app: '', precon: 23,
//        effArr: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Shadow Clone', intro: 'Tap Damage', pre: '�', app: '%', precon: 27,
//        effArr: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.20],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Lightning Strike', intro: 'Chance for Lightning Strike', pre: '+', app: '%', precon: 25,
//        effArr: [0.01, 0.012, 0.014, 0.016, 0.018, 0.02, 0.022, 0.024, 0.026, 0.028, 0.03, 0.032, 0.034, 0.036, 0.038, 0.04, 0.042, 0.044, 0.046, 0.048],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20},
//    {name: 'Manni Mana', intro: 'mana replenished by Manni Mana', pre: '', app: '', precon: 26,
//        effArr: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
//        costArr: [1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 25, 30], max: 20}
];
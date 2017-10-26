var TT2 = {
    getWeaponMtp: function (i, lv, lwLv) {
        if (lv === 0)
            return 1;
        return this.EquipWeapon[i].base * (lv + 1) * this.EquipWeapon[i].inc * this.artifactEff(16, lwLv);
    },
    getHatMtp: function (i, lv, lwLv) {
        if (lv === 0)
            return 1;
        return this.EquipHat[i].base * (lv + 1) * this.EquipHat[i].inc * this.artifactEff(17, lwLv);
    },
    getSuitMtp: function (i, lv, lwLv) {
        if (lv === 0)
            return 1;
        return this.EquipSuit[i].base * (lv + 1) * this.EquipSuit[i].inc * this.artifactEff(18, lwLv);
    },
    getAuraMtp: function (i, lv) {
        var aura = this.EquipAura[i];
        switch (aura.type) {
            case 'Chesterson Chance':
                if (lv ===0)
                    return 0;
                return aura.base + lv * aura.inc;
                break;
            case 'Critical Chance':
                if (lv === 0)
                    return 0;
                return aura.base + lv * aura.inc;
                break;
            case 'Titan HP':
                if (lv === 0)
                    return 1;
                return aura.base - lv * aura.inc;
                break;
        }
    },
    getSlashMtp: function (i, lv, lwLv) {
        if (lv === 0)
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
                if (L2 === String.fromCharCode(z.charCodeAt() + 1)) {
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
            if (max === 0 || to <= max) {

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
    artifactEff: function (i, level) {
        var artifact = this.Artifacts[i],
            offset = artifact.offset,
            addupPerLvl = artifact.addupPerLvl,
            costExp = artifact.costExp,
            growthRate = artifact.growthRate,
            growthMax = artifact.growthMax,
            growth = Math.min(growthRate * level, growthMax),
            exp = Math.pow(1 + (costExp - 1) * growth, 1);

        return offset + addupPerLvl * Math.pow(level, exp);
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

        AllDmgPetMtp *= (activePet === 8 ? demos.active : demos.passive);
        AllDmgPetMtp *= (activePet === 9 ? nova.active : nova.passive);

        //artifact
        var DivineRetribution = this.artifactEff(10, artLvArr[10]);

        //weapon
        var weapon = this.EquipWeapon[wpChosen],
            wpMtp = 1;

        if (weapon.type === 'All Damage') {
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

        TapDmgPetMtp *= (activePet === 10 ? hamy.active : hamy.passive);
        TapDmgPetMtp *= (activePet === 11 ? phobos.active : phobos.passive);

        //artifact
        var DrunkenHammer = this.artifactEff(36, dkhmLv);

        //slash
        var slash = this.EquipSlash[slashChosen],
            SlashMtp = 1;

        if (slash.type === 'Tap Damage') {
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

        if (slash.type === 'Pet Damage') {
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

        HeroDmgPetMtp *= (activePet === 6 ? tempest.active : tempest.passive);
        HeroDmgPetMtp *= (activePet === 7 ? toto.active : toto.passive);

        //artifact
        var BladeOfDamocles = this.artifactEff(8, bodcLv);

        //weapon
        var weapon = this.EquipWeapon[wpChosen],
            wpMtp = 1;

        if (weapon.type === 'All Hero Damage') {
            wpMtp = this.getWeaponMtp(wpChosen, wpLv, lwLv);
        }

        return HeroDmgPetMtp * BladeOfDamocles * wpMtp;
    },
    getSpellMtp: function (zeroLv, HarkerLv, activePet, hatChosen, hatLv, hbLv, cotaLv, hmLv) {
        var hat = this.EquipHat[hatChosen],
            SpellHatMtp = 1;

        if (hat.type === 'Spell Hero Damage') {
            SpellHatMtp = this.getHatMtp(hatChosen, hatLv, hbLv);
        }

        //pet
        var zero = this.getPetEff(0, zeroLv),
            harker = this.getPetEff(1, HarkerLv);

        var SpellPetMtp = 1;

        SpellPetMtp *= (activePet === 0 ? zero.active : zero.passive);
        SpellPetMtp *= (activePet === 1 ? harker.active : harker.passive);

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

        if (hat.type === 'Melee Hero Damage') {
            MeleeHatMtp = this.getHatMtp(hatChosen, hatLv, hbLv);
        }

        //pet
        var cerberus = this.getPetEff(2, cerberusLv),
            basky = this.getPetEff(3, baskyLv);

        var MeleePetMtp = 1;

        MeleePetMtp *= (activePet === 2 ? cerberus.active : cerberus.passive);
        MeleePetMtp *= (activePet === 3 ? basky.active : basky.passive);

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

        if (hat.type === 'Ranged Hero Damage') {
            RangedHatMtp = this.getHatMtp(hatChosen, hatLv, hbLv);
        }

        //pet
        var scraps = this.getPetEff(4, scrapsLv),
            mousy = this.getPetEff(5, mousyLv);

        var RangedPetMtp = 1;

        RangedPetMtp *= (activePet === 4 ? scraps.active : scraps.passive);
        RangedPetMtp *= (activePet === 5 ? mousy.active : mousy.passive);

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

        if (aura.type === 'Critical Chance') {
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

        if (weapon.type === 'Crit Damage') {
            wpMtp = this.getWeaponMtp(wpChosen, wpLv, lwLv);
        }
        return {min: min * wpMtp, max: max * wpMtp};
    },
    getGoldMtp: function (bubblesLv, pollyLv, activePet, suitChosen, suitLv, homLv, bopLv) {
        var suit = this.EquipSuit[suitChosen],
            SuitMtp = 1;

        if (suit.type === 'All Gold') {
            SuitMtp = this.getSuitMtp(suitChosen, suitLv, homLv);
        }

        //pet
        var bubbles = this.getPetEff(12, bubblesLv),
            polly = this.getPetEff(13, pollyLv);

        var PetMtp = 1;

        PetMtp *= (activePet === 12 ? bubbles.active : bubbles.passive);
        PetMtp *= (activePet === 13 ? polly.active : polly.passive);

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

        if (aura.type === 'Titan HP') {
            mtp = this.getAuraMtp(auraChosen, auraLv);
        }
        return mtp;
    },
    getChestersonChance: function (auraChosen, auraLv, eoftLv) {
        var aura = this.EquipAura[auraChosen],
            mtp = 0.01;

        if (aura.type === 'Chesterson Chance') {
            mtp += this.getAuraMtp(auraChosen, auraLv);
        }

        mtp += 0.01 * this.artifactEff(25, eoftLv);
        return mtp;
    },
    getChestersonMtp: function (suitChosen, suitLv, homLv, coctLv) {
        var suit = this.EquipSuit[suitChosen],
            suitMtp = 1;

        if (suit.type === 'Chesterson Amount') {
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
            if (i === heroIndex)
                mtp *= (1 + 0.5 * heroWpArr[i]);
            if (heroWpArr[i] < min)
                min = heroWpArr[i];
        }
        if (heroIndex === -1) {
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
        if (heroLv === 0)
            return 0;
        return init * Math.pow(1.082, heroLv - 1);
    },
    // Cost from 0 upgrade to heroLv
    getHeroCost: function (heroIndex, heroLv, costMtp) {
        var init = this.Heros[heroIndex].init,
            basicCost = init * (Math.pow(1.082, heroLv) - 1) / 0.082,
            skillCost = 0;

        if (heroLv >= 20) {
            skillCost += this.getHeroUpgCost(heroIndex, 20) * 10;
        }
        if (heroLv >= 40) {
            skillCost += this.getHeroUpgCost(heroIndex, 40) * 10;
        }
        if (heroLv >= 60) {
            skillCost += this.getHeroUpgCost(heroIndex, 60) * 10;
        }
        if (heroLv >= 100) {
            skillCost += this.getHeroUpgCost(heroIndex, 100) * 10;
        }
        if (heroLv >= 200) {
            skillCost += this.getHeroUpgCost(heroIndex, 200) * 10;
        }
        if (heroLv >= 500) {
            skillCost += this.getHeroUpgCost(heroIndex, 500) * 10;
        }
        if (heroLv >= 1000) {
            skillCost += this.getHeroUpgCost(heroIndex, 1000) * 1010;
        }
        if (heroLv >= 2000) {
            skillCost += this.getHeroUpgCost(heroIndex, 2000) * 1010;
        }
        if (heroLv >= 3000) {
            skillCost += this.getHeroUpgCost(heroIndex, 3000) * 10;
        }
        if (heroLv >= 4000) {
            skillCost += this.getHeroUpgCost(heroIndex, 4000) * 10;
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
};
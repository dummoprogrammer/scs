var globalItems = [
    {
        "name": "Taco",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/taco.png",
        "id": 0,
        "type": "item",
        "tags": ["food"]
    },
    {
        "name": "Bomb",
        "amount": 1,
        "rarity": "uncommon",
        "img": "assets/items/bomb.png",
        "id": 1,
        "type": "item",
        "tags": ["explosive", "placeable", "ammo"]
    },
    {
        "name": "Tennis Ball",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/tennis_ball.png",
        "id": 2,
        "type": "item",
        "tags": ["ammo", "placeable"]
    },
    {
        "name": "debug:dollar_bill",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/dollar_bill.png",
        "id": 3,
        "type": "item",
        "tags": []
    },
    {
        "name": "debug:double_dollar_bill",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/dollar_bill2.png",
        "id": 4,
        "type": "item",
        "tags": []
    },
    {
        "name": "debug:triple_dollar_bill",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/dollar_bill3.png",
        "id": 5,
        "type": "item",
        "tags": []
    },
    {
        "name": "Crate",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/crate.png",
        "id": 6,
        "type": "item",
        "tags": ["placeable"]
    },
    {
        "name": "Big Crate",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/big_crate.png",
        "id": 7,
        "type": "item",
        "tags": ["placeable"]
    },
    {
        "name": "Super Big Crate",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/double_big_crate.png",
        "id": 8,
        "type": "item",
        "tags": ["placeable"]
    },
    {
        "name": "TNT",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/tnt.png",
        "id": 9,
        "type": "item",
        "tags": ["explosive", "placeable"]
    },
    {
        "name": "TNT 10x",
        "amount": 1,
        "rarity": "uncommon",
        "img": "assets/items/10xtnt.png",
        "id": 10,
        "type": "item",
        "tags": ["explosive", "placeable"]
    },
    {
        "name": "TNT 100x",
        "amount": 1,
        "rarity": "rare",
        "img": "assets/items/100xtnt.png",
        "id": 11,
        "type": "item",
        "tags": ["explosive", "placeable"]
    },
    {
        "name": "TNT 1000x",
        "amount": 1,
        "rarity": "super_rare",
        "img": "assets/items/1000xtnt.png",
        "id": 12,
        "type": "item",
        "tags": ["explosive", "placeable"]
    },
    {
        "name": "Sunglasses",
        "amount": 1,
        "rarity": "rare",
        "img": "assets/wearables/sunglasses.png",
        "id": 13,
        "type": "wearable",
        "tags": ["oof"],
        "slot": 1,
        "mask_type": 1,
        "equipped": false
    },
    {
        "name": "Metal Tube",
        "amount": 1,
        "rarity": "rare",
        "img": "assets/wearables/metal_tube.png",
        "id": 14,
        "type": "wearable",
        "tags": ["oof"],
        "slot": 2,
        "equipped": false
    },
    {
        "name": "Super Boot Pad",
        "amount": 1,
        "rarity": "super_rare",
        "img": "assets/wearables/super_boot_pad.png",
        "id": 15,
        "type": "wearable",
        "tags": ["oof"],
        "slot": 3,
        "equipped": false
    },
    {
        "name": "Tennis Ball Launcher",
        "amount": 1,
        "rarity": "rare",
        "img": "assets/weapons/tennis_ball_launcher.png",
        "id": 16,
        "type": "weapon",
        "tags": ["fun"],
    },
    {
        "name": "Hammer",
        "amount": 1,
        "rarity": "common",
        "img": "assets/weapons/hammer.png",
        "id": 17,
        "type": "weapon",
        "tags": ["crate", "breaker"],
    },
    {
        "name": "Air Jordans",
        "amount": 1,
        "rarity": "rare",
        "img": "assets/wearables/air_jordans.png",
        "id": 18,
        "type": "wearable",
        "slot": 3,
        "tags": ["oof"],
        "equipped": false
    },
    {
        "name": "Christmas Sweater",
        "amount": 1,
        "rarity": "common",
        "img": "assets/wearables/christmas_sweater.png",
        "id": 19,
        "type": "wearable",
        "slot": 2,
        "tags": ["oof"],
        "equipped": false
    },
    {
        "name": "Dream Mask",
        "amount": 1,
        "rarity": "rare",
        "img": "assets/wearables/dream_mask_center.png",
        "id": 20,
        "type": "wearable",
        "slot": 1,
        "mask_type": 2,
        "xOffset": 0,
        "yOffset": 0,
        "xVariance": 0,
        "yVariance": 2,
        "tags": ["oof"],
        "equipped": false
    },
    {
        "name": "COVID Mask",
        "amount": 1,
        "rarity": "common",
        "img": "assets/wearables/covid_mask_center.png",
        "id": 21,
        "type": "wearable",
        "slot": 1,
        "mask_type": 2,
        "xOffset": 0,
        "yOffset": 2,
        "xVariance": 0,
        "yVariance": 3,
        "tags": ["oof"],
        "equipped": false
    },
    {
        "name": "Eye Patch",
        "amount": 1,
        "rarity": "common",
        "img": "assets/wearables/eye_patch_right.png",
        "id": 22,
        "type": "wearable",
        "slot": 1,
        "mask_type": 3,
        "tags": ["oof"],
        "equipped": false
    },
    {
        "name": "Doodle",
        "amount": 1,
        "rarity": "collectible",
        "folder": "assets/collections/doodles/",
        "id": 23,
        "variant": 0,
        "type": "collectible",
        "collectibleID": 0,
        "tags": ["comic", "fun"],
    },
    {
        "name": "Pikachu Hat",
        "amount": 1,
        "rarity": "common",
        "img": "assets/wearables/pikachu_hat_center.png",
        "id": 24,
        "type": "wearable",
        "slot": 1,
        "mask_type": 2,
        "xOffset": 0,
        "yOffset": -15,
        "xVariance": 0,
        "yVariance": 0,
        "tags": ["oof"],
        "equipped": false
    },
    {
        "name": "Flappy Face",
        "amount": 1,
        "rarity": "collectible",
        "folder": "assets/collections/flappy_faces/",
        "id": 25,
        "variant": 0,
        "type": "collectible",
        "collectibleID": 1,
        "tags": ["face", "fun", "flappy"],
    },
    {
        "name": "Air Horn",
        "amount": 1,
        "rarity": "common",
        "img": "assets/weapons/air_horn.png",
        "id": 26,
        "type": "weapon",
        "tags": ["fun"]
    },
    {
        "name": "Leaf Blower",
        "amount": 1,
        "rarity": "uncommon",
        "img": "assets/weapons/leaf_blower.png",
        "id": 27,
        "type": "weapon",
        "tags": ["fun"]
    },
    {
        "name": "Creeper Head",
        "amount": 1,
        "rarity": "collectible",
        "folder": "assets/collections/creeper_heads/",
        "id": 28,
        "variant": 0,
        "type": "collectible",
        "collectibleID": 2,
        "tags": ["creeper", "aw man", "minecraft"],
    },
    {
        "name": "Tabasco",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/hot_sauce.png",
        "id": 29,
        "type": "item",
        "tags": ["food"]
    },
    {
        "name": "Coffee",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/coffee.png",
        "id": 30,
        "type": "usable",
        "tags": ["food"],
        "action": function() {
            addEffect(0, 60000);
            addEffect(1, 60000);
            flood(this.img);
        }
    },
    {
        "name": "Bag Of Sugar",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/bag1.png",
        "id": 31,
        "type": "usable",
        "tags": ["food"],
        "action": function() {
            addEffect(0, 15000);
            flood(this.img);
        }
    },
    {
        "name": "Cinnamon",
        "amount": 1,
        "rarity": "common",
        "img": "assets/items/cinnamon.png",
        "id": 32,
        "type": "usable",
        "tags": ["food"],
        "action": function() {
            addEffect(1, 20000);
            flood(this.img);
        }
    },
    {
        "name": "Cereal Box",
        "amount": 1,
        "rarity": "common",
        "img": "assets/wearables/cereal_box.png",
        "id": 33,
        "type": "wearable",
        "slot": 2,
        "tags": ["oof"],
        "equipped": false
    },
    {
        "name": "Purplecubicyellowconiosis",
        "amount": 1,
        "rarity": "collectible",
        "folder": "assets/collections/purplecubicyellowconiosis/",
        "id": 34,
        "variant": 0,
        "type": "collectible",
        "collectibleID": 3,
        "tags": ["eastmond", "rob boss"],
    },
    {
        "name": "Mystery Collectible",
        "amount": 1,
        "rarity": "collectible",
        "img": "assets/items/mystery.png",
        "id": 35,
        "type": "usable",
        "tags": ["collectible"],
        "action": function() {
            var bal = Math.floor(Math.random() * Object.values(collectibles)[this.randomCollection].variants);
            characterCollectibles[this.randomCollection][bal]++;
            flood(globalItems[Object.values(collectibles)[this.randomCollection].num].folder + String(bal) + ".png");
        },
        "randomCollection": 0
    },
    {
        "name": "Money Bomb",
        "amount": 1,
        "rarity": "rare",
        "img": "assets/items/money_bomb.png",
        "id": 36,
        "type": "usable",
        "tags": ["explosive"],
        "action": function() {
            smallBomb(characterLocation[0], characterLocation[1], 0);
        }
    },
    {
        "name": "Big Money Bomb",
        "amount": 1,
        "rarity": "super_rare",
        "img": "assets/items/big_money_bomb.png",
        "id": 37,
        "type": "usable",
        "tags": ["explosive"],
        "action": function() {
            bigBomb(characterLocation[0], characterLocation[1], 0);
        }
    },
    {
        "name": "Dictionary",
        "amount": 1,
        "rarity": "uncommon",
        "img": "assets/items/dictionary.png",
        "id": 38,
        "type": "infinitive_usable",
        "tags": ["literate"],
        "action": function() {
            openDictionaryImage("assets/items/dictionary/" + String(Math.floor(Math.random() * 38)) + ".png");
        }
    },
    {
        "name": "Sky Goggles",
        "amount": 1,
        "rarity": "uncommon",
        "img": "assets/wearables/goggles_center.png",
        "id": 39,
        "type": "wearable",
        "slot": 1,
        "mask_type": 2,
        "xOffset": 0,
        "yOffset": -1,
        "xVariance": 3.5,
        "yVariance": 3,
        "tags": ["oof"],
        "equipped": false
    },
];
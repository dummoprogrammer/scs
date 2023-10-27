var globalEffects = [
    {
        name: "Speed Boost",
        sound: "assets/audio/generic/upgrade.wav",
        add: function() {
            speedFactor = 2;
        },
        remove: function() {
            speedFactor = 1;
        }
    },
    {
        name: "Jump Boost",
        sound: "assets/audio/generic/upgrade.wav",
        add: function() {
            jumpAddend = 10;
        },
        remove: function() {
            jumpAddend = 0;
        }
    }
];
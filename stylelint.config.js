module.exports = {
    extends: ["stylelint-config-standard"],
    rules: {
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"],
            },
        ],
        "declaration-block-trailing-semicolon": null,
        "no-descending-specificity": null,
        "unit-allowed-list": ["px", "vh", "vw", "%", "rem", "deg"],
    },
};

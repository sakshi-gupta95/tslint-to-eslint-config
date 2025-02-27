import { RuleConverter } from "../../converter";

export const convertDirectiveSelector: RuleConverter = (tslintRule) => {
    return {
        rules: [
            {
                ...(tslintRule.ruleArguments.length !== 0 && {
                    ruleArguments: [
                        {
                            type: tslintRule.ruleArguments[0],
                            prefix: tslintRule.ruleArguments[1],
                            style: tslintRule.ruleArguments[2],
                        },
                    ],
                }),
                ruleName: "@angular-eslint/directive-selector",
            },
        ],
        plugins: ["@angular-eslint/eslint-plugin"],
    };
};

export const rewardQuery = `
query rewards ($brand_uid: String!) {
    rewards (brand_uid: $brand_uid) {
        amount_off {
            cents
            currency
            display
            precision
        }
        description
        discount_type
        id
        name
        percentage_off
        points_to_redeem
        type
        welcome
    }
}
`;
export const createRewardQuery = `
mutation create_reward ($brand_uid: String!, $data: LoyaltyRewardAttributes!) {
    create_reward (brand_uid: $brand_uid, data: $data) {
        errors
        reward {
            amount_off {
                cents
                currency
                display
                precision
            }
            description
            discount_type
            id
            name
            percentage_off
            points_to_redeem
            type
            welcome
        }
        status
    }
}
`;
export const expectedAmountOffKeys = [
  "cents",
  "currency",
  "display",
  "precision",
];
export const expectedRewardKeys = [
  "amount_off",
  "description",
  "discount_type",
  "id",
  "name",
  "percentage_off",
  "points_to_redeem",
  "type",
  "welcome",
];

export const amountOffFieldTypes = {
  cents: "number",
  currency: "string",
  display: "string",
  precision: "number",
};
export const rewardFieldTypes = {
  amount_off: "object",
  description: "string",
  discount_type: "string",
  id: "string",
  name: "string",
  percentage_off: "number",
  points_to_redeem: "number",
  type: "string",
  welcome: "boolean",
};

export const rewardSchema = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://example.com/object1685092235.json",
  title: "Root",
  type: "object",
  required: ["data"],
  properties: {
    data: {
      $id: "#root/data",
      title: "Data",
      type: "object",
      required: ["rewards"],
      properties: {
        rewards: {
          $id: "#root/data/rewards",
          title: "Rewards",
          type: "array",
          default: [],
          items: {
            $id: "#root/data/rewards/items",
            title: "Items",
            type: "object",
            required: [
              "amount_off",
              "description",
              "discount_type",
              "id",
              "name",
              "percentage_off",
              "points_to_redeem",
              "type",
              "welcome",
            ],
            properties: {
              amount_off: {
                $id: "#root/data/rewards/items/amount_off",
                title: "Amount_off",
                type: "object",
                required: ["cents", "currency", "display", "precision"],
                properties: {
                  cents: {
                    $id: "#root/data/rewards/items/amount_off/cents",
                    title: "Cents",
                    type: "integer",
                    examples: [10000],
                    default: 0,
                  },
                  currency: {
                    $id: "#root/data/rewards/items/amount_off/currency",
                    title: "Currency",
                    type: "string",
                    default: "",
                    examples: ["JOD"],
                    pattern: "^.*$",
                  },
                  display: {
                    $id: "#root/data/rewards/items/amount_off/display",
                    title: "Display",
                    type: "string",
                    default: "",
                    examples: ["JOD 10.000"],
                    pattern: "^.*$",
                  },
                  precision: {
                    $id: "#root/data/rewards/items/amount_off/precision",
                    title: "Precision",
                    type: "integer",
                    examples: [3],
                    default: 0,
                  },
                },
              },
              description: {
                $id: "#root/data/rewards/items/description",
                title: "Description",
                type: "string",
                default: "",
                examples: ["Rewardssss"],
                pattern: "^.*$",
              },
              discount_type: {
                $id: "#root/data/rewards/items/discount_type",
                title: "Discount_type",
                type: "string",
                default: "",
                examples: ["amount"],
                pattern: "^.*$",
              },
              id: {
                $id: "#root/data/rewards/items/id",
                title: "Id",
                type: "string",
                default: "",
                examples: ["6"],
                pattern: "^.*$",
              },
              name: {
                $id: "#root/data/rewards/items/name",
                title: "Name",
                type: "string",
                default: "",
                examples: ["Reward 1"],
                pattern: "^.*$",
              },
              percentage_off: {
                $id: "#root/data/rewards/items/percentage_off",
                title: "Percentage_off",
                type: "integer",
                examples: [20],
                default: 0,
              },
              points_to_redeem: {
                $id: "#root/data/rewards/items/points_to_redeem",
                title: "Points_to_redeem",
                type: "integer",
                examples: [10],
                default: 0,
              },
              type: {
                $id: "#root/data/rewards/items/type",
                title: "Type",
                type: "string",
                default: "",
                examples: ["DiscountReward"],
                pattern: "^.*$",
              },
              welcome: {
                $id: "#root/data/rewards/items/welcome",
                title: "Welcome",
                type: "boolean",
                examples: [false],
              },
            },
          },
        },
      },
    },
  },
};

export const createRewardSchema = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://example.com/object1685456260.json",
  title: "Root",
  type: "object",
  required: ["data"],
  properties: {
    data: {
      $id: "#root/data",
      title: "Data",
      type: "object",
      required: ["create_reward"],
      properties: {
        create_reward: {
          $id: "#root/data/create_reward",
          title: "Create_reward",
          type: "object",
          required: ["errors", "reward", "status"],
          properties: {
            errors: {
              $id: "#root/data/create_reward/errors",
              title: "Errors",
              type: "array",
              default: [],
            },
            reward: {
              $id: "#root/data/create_reward/reward",
              title: "Reward",
              type: "object",
              required: [
                "amount_off",
                "description",
                "discount_type",
                "id",
                "name",
                "percentage_off",
                "points_to_redeem",
                "type",
                "welcome",
              ],
              properties: {
                amount_off: {
                  $id: "#root/data/create_reward/reward/amount_off",
                  title: "Amount_off",
                  type: "object",
                  required: ["cents", "currency", "display", "precision"],
                  properties: {
                    cents: {
                      $id: "#root/data/create_reward/reward/amount_off/cents",
                      title: "Cents",
                      type: "integer",
                      examples: [40000],
                      default: 0,
                    },
                    currency: {
                      $id: "#root/data/create_reward/reward/amount_off/currency",
                      title: "Currency",
                      type: "string",
                      default: "",
                      examples: ["JOD"],
                      pattern: "^.*$",
                    },
                    display: {
                      $id: "#root/data/create_reward/reward/amount_off/display",
                      title: "Display",
                      type: "string",
                      default: "",
                      examples: ["JOD 40.000"],
                      pattern: "^.*$",
                    },
                    precision: {
                      $id: "#root/data/create_reward/reward/amount_off/precision",
                      title: "Precision",
                      type: "integer",
                      examples: [3],
                      default: 0,
                    },
                  },
                },
                description: {
                  $id: "#root/data/create_reward/reward/description",
                  title: "Description",
                  type: "string",
                  default: "",
                  examples: ["Reward 3 Description"],
                  pattern: "^.*$",
                },
                discount_type: {
                  $id: "#root/data/create_reward/reward/discount_type",
                  title: "Discount_type",
                  type: "string",
                  default: "",
                  examples: ["amount"],
                  pattern: "^.*$",
                },
                id: {
                  $id: "#root/data/create_reward/reward/id",
                  title: "Id",
                  type: "string",
                  default: "",
                  examples: ["62"],
                  pattern: "^.*$",
                },
                name: {
                  $id: "#root/data/create_reward/reward/name",
                  title: "Name",
                  type: "string",
                  default: "",
                  examples: ["Reward 3"],
                  pattern: "^.*$",
                },
                percentage_off: {
                  $id: "#root/data/create_reward/reward/percentage_off",
                  title: "Percentage_off",
                  type: "null",
                  default: null,
                },
                points_to_redeem: {
                  $id: "#root/data/create_reward/reward/points_to_redeem",
                  title: "Points_to_redeem",
                  type: "integer",
                  examples: [30],
                  default: 0,
                },
                type: {
                  $id: "#root/data/create_reward/reward/type",
                  title: "Type",
                  type: "string",
                  default: "",
                  examples: ["DiscountReward"],
                  pattern: "^.*$",
                },
                welcome: {
                  $id: "#root/data/create_reward/reward/welcome",
                  title: "Welcome",
                  type: "boolean",
                  examples: [false],
                  default: true,
                },
              },
            },
            status: {
              $id: "#root/data/create_reward/status",
              title: "Status",
              type: "boolean",
              examples: [true],
              default: true,
            },
          },
        },
      },
    },
  },
};

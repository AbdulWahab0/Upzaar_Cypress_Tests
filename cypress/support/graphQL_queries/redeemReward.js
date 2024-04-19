export const redeemRewardMutation = `
mutation redeem_reward ($brand_uid: String!, $reward_id: ID!, $customer_uid: String!) {
    redeem_reward (brand_uid: $brand_uid, reward_id: $reward_id, customer_uid: $customer_uid) {
        status
        errors
    }
}
`;

export const redeemRewardSchema = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://example.com/object1686494080.json",
  title: "Root",
  type: "object",
  required: ["data"],
  properties: {
    data: {
      $id: "#root/data",
      title: "Data",
      type: "object",
      required: ["redeem_reward"],
      properties: {
        redeem_reward: {
          $id: "#root/data/redeem_reward",
          title: "Redeem_reward",
          type: "object",
          required: ["status", "errors"],
          properties: {
            status: {
              $id: "#root/data/redeem_reward/status",
              title: "Status",
              type: "boolean",
              examples: [false],
              default: true,
            },
            errors: {
              $id: "#root/data/redeem_reward/errors",
              title: "Errors",
              type: "array",
              default: [],
              items: {
                $id: "#root/data/redeem_reward/errors/items",
                title: "Items",
                type: "string",
                default: "",
                examples: ["Couldn't find customer"],
                pattern: "^.*$",
              },
            },
          },
        },
      },
    },
  },
};

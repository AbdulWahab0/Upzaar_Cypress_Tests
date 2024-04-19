export const joinLoyaltyMutation = `
mutation join_loyalty ($brand_uid: String!, $customer_uid: String!, $joined_from_referral_code: String) {
    join_loyalty (brand_uid: $brand_uid, customer_uid: $customer_uid, joined_from_referral_code: $joined_from_referral_code) {
        errors
        status
    }
}
`;

export const joinLoyaltySchema = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://example.com/object1686484194.json",
  title: "Root",
  type: "object",
  required: ["data"],
  properties: {
    data: {
      $id: "#root/data",
      title: "Data",
      type: "object",
      required: ["join_loyalty"],
      properties: {
        join_loyalty: {
          $id: "#root/data/join_loyalty",
          title: "Join_loyalty",
          type: "object",
          required: ["errors", "status"],
          properties: {
            errors: {
              $id: "#root/data/join_loyalty/errors",
              title: "Errors",
              type: "array",
              default: [],
            },
            status: {
              $id: "#root/data/join_loyalty/status",
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

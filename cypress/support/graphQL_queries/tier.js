export const postTierQuery = `
query tiers ($brand_uid: String!) {
    tiers (brand_uid: $brand_uid) {
        brand_uid
        created_at
        description
        discountable_loyalty_benefits {
            begins_at
            benefit_type
            created_at
            description
            discount_percentage
            expires_at
            id
            name
            point_multiplier
            updated_at
        }
        hidden_to_members
        id
        loyalty_benefits {
            begins_at
            benefit_type
            created_at
            description
            discount_percentage
            expires_at
            id
            name
            point_multiplier
            updated_at
        }
        max_points
        min_points
        name
        point_multiplier_loyalty_benefits {
            begins_at
            benefit_type
            created_at
            description
            discount_percentage
            expires_at
            id
            name
            point_multiplier
            updated_at
        }
        updated_at
    }
}
`;
export const createTierQuery = `
mutation create_tier ($brand_uid: String!, $data: LoyaltyTierAttributes!) {
    create_tier (brand_uid: $brand_uid, data: $data) {
        status
        errors
        tier {
            brand_uid
            created_at
            description
            discountable_loyalty_benefits {
                begins_at
                benefit_type
                created_at
                description
                discount_percentage
                expires_at
                id
                name
                point_multiplier
                updated_at
            }
            hidden_to_members
            id
            loyalty_benefits {
                begins_at
                benefit_type
                created_at
                description
                discount_percentage
                expires_at
                id
                name
                point_multiplier
                updated_at
            }
            max_points
            min_points
            name
            point_multiplier_loyalty_benefits {
                begins_at
                benefit_type
                created_at
                description
                discount_percentage
                expires_at
                id
                name
                point_multiplier
                updated_at
            }
            updated_at
        }
    }
}
`;
// Post Tier APi Endpoint
export const expectedPostTierKeys = [
  "brand_uid",
  "created_at",
  "description",
  "discountable_loyalty_benefits",
  "hidden_to_members",
  "id",
  "loyalty_benefits",
  "max_points",
  "min_points",
  "name",
  "point_multiplier_loyalty_benefits",
  "updated_at",
];
export const expectedPostTier = [
  "begins_at",
  "benefit_type",
  "created_at",
  "description",
  "discount_percentage",
  "expires_at",
  "id",
  "name",
  "point_multiplier",
  "updated_at",
];

export const expectedCreateTierKeys = ["status", "errors", "tier"];
export const expectedTierKeys = [
  "brand_uid",
  "created_at",
  "description",
  "discountable_loyalty_benefits",
  "hidden_to_members",
  "id",
  "loyalty_benefits",
  "max_points",
  "min_points",
  "name",
  "point_multiplier_loyalty_benefits",
  "updated_at",
];
export const createTierFieldTypes = {
  name: "string",
  description: "string",
  min_points: "number",
  max_points: "number",
  hidden_to_members: "Boolean",
};
export const postTierFieldTypes = {
  brand_uid: "string",
  created_at: "string",
  description: "string",
  discountable_loyalty_benefits: "array",
  hidden_to_members: "Boolean",
  id: "number",
  loyalty_benefits: "array",
  max_points: "number",
  min_points: "number",
  name: "string",
  point_multiplier_loyalty_benefits: "array",
  updated_at: "string",
};
export const createTierSchema = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://example.com/object1685606774.json",
  title: "Root",
  type: "object",
  required: ["data"],
  properties: {
    data: {
      $id: "#root/data",
      title: "Data",
      type: "object",
      required: ["create_tier"],
      properties: {
        create_tier: {
          $id: "#root/data/create_tier",
          title: "Create_tier",
          type: "object",
          required: ["status", "errors", "tier"],
          properties: {
            status: {
              $id: "#root/data/create_tier/status",
              title: "Status",
              type: "boolean",
              examples: [true],
              default: true,
            },
            errors: {
              $id: "#root/data/create_tier/errors",
              title: "Errors",
              type: "array",
              default: [],
            },
            tier: {
              $id: "#root/data/create_tier/tier",
              title: "Tier",
              type: "object",
              required: [
                "brand_uid",
                "created_at",
                "description",
                "discountable_loyalty_benefits",
                "hidden_to_members",
                "id",
                "loyalty_benefits",
                "max_points",
                "min_points",
                "name",
                "point_multiplier_loyalty_benefits",
                "updated_at",
              ],
              properties: {
                brand_uid: {
                  $id: "#root/data/create_tier/tier/brand_uid",
                  title: "Brand_uid",
                  type: "string",
                  default: "",
                  examples: ["19942948"],
                  pattern: "^.*$",
                },
                created_at: {
                  $id: "#root/data/create_tier/tier/created_at",
                  title: "Created_at",
                  type: "string",
                  default: "",
                  examples: ["2023-06-01T11:04:22+03:00"],
                  pattern: "^.*$",
                },
                description: {
                  $id: "#root/data/create_tier/tier/description",
                  title: "Description",
                  type: "string",
                  default: "",
                  examples: [""],
                  pattern: "^.*$",
                },
                discountable_loyalty_benefits: {
                  $id: "#root/data/create_tier/tier/discountable_loyalty_benefits",
                  title: "Discountable_loyalty_benefits",
                  type: "array",
                  default: [],
                },
                hidden_to_members: {
                  $id: "#root/data/create_tier/tier/hidden_to_members",
                  title: "Hidden_to_members",
                  type: "boolean",
                  examples: [true],
                  default: true,
                },
                id: {
                  $id: "#root/data/create_tier/tier/id",
                  title: "Id",
                  type: "integer",
                  examples: [540],
                  default: 0,
                },
                loyalty_benefits: {
                  $id: "#root/data/create_tier/tier/loyalty_benefits",
                  title: "Loyalty_benefits",
                  type: "array",
                  default: [],
                },
                max_points: {
                  $id: "#root/data/create_tier/tier/max_points",
                  title: "Max_points",
                  type: "integer",
                  examples: [0],
                  default: 0,
                },
                min_points: {
                  $id: "#root/data/create_tier/tier/min_points",
                  title: "Min_points",
                  type: "integer",
                  examples: [0],
                  default: 0,
                },
                name: {
                  $id: "#root/data/create_tier/tier/name",
                  title: "Name",
                  type: "string",
                  default: "",
                  examples: ["test"],
                  pattern: "^.*$",
                },
                point_multiplier_loyalty_benefits: {
                  $id: "#root/data/create_tier/tier/point_multiplier_loyalty_benefits",
                  title: "Point_multiplier_loyalty_benefits",
                  type: "array",
                  default: [],
                },
                updated_at: {
                  $id: "#root/data/create_tier/tier/updated_at",
                  title: "Updated_at",
                  type: "string",
                  default: "",
                  examples: ["2023-06-01T11:04:22+03:00"],
                  pattern: "^.*$",
                },
              },
            },
          },
        },
      },
    },
  },
};

export const postTierSchema = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://example.com/object1685602673.json",
  title: "Root",
  type: "object",
  required: ["data"],
  properties: {
    data: {
      $id: "#root/data",
      title: "Data",
      type: "object",
      required: ["tiers"],
      properties: {
        tiers: {
          $id: "#root/data/tiers",
          title: "Tiers",
          type: "array",
          default: [],
          items: {
            $id: "#root/data/tiers/items",
            title: "Items",
            type: "object",
            required: [
              "brand_uid",
              "created_at",
              "description",
              "discountable_loyalty_benefits",
              "hidden_to_members",
              "id",
              "loyalty_benefits",
              "max_points",
              "min_points",
              "name",
              "point_multiplier_loyalty_benefits",
              "updated_at",
            ],
            properties: {
              brand_uid: {
                $id: "#root/data/tiers/items/brand_uid",
                title: "Brand_uid",
                type: "string",
                default: "",
                examples: ["19942948"],
                pattern: "^.*$",
              },
              created_at: {
                $id: "#root/data/tiers/items/created_at",
                title: "Created_at",
                type: "string",
                default: "",
                examples: ["2023-05-16T14:27:34+03:00"],
                pattern: "^.*$",
              },
              description: {
                $id: "#root/data/tiers/items/description",
                title: "Description",
                type: "string",
                default: "",
                examples: ["Tier 111 "],
                pattern: "^.*$",
              },
              discountable_loyalty_benefits: {
                $id: "#root/data/tiers/items/discountable_loyalty_benefits",
                title: "Discountable_loyalty_benefits",
                type: "array",
                default: [],
                items: {
                  $id: "#root/data/tiers/items/discountable_loyalty_benefits/items",
                  title: "Items",
                  type: "object",
                  required: [
                    "begins_at",
                    "benefit_type",
                    "created_at",
                    "description",
                    "discount_percentage",
                    "expires_at",
                    "id",
                    "name",
                    "point_multiplier",
                    "updated_at",
                  ],
                  properties: {
                    begins_at: {
                      $id: "#root/data/tiers/items/discountable_loyalty_benefits/items/begins_at",
                      title: "Begins_at",
                      type: "string",
                      default: "",
                      examples: ["2023-05-21T00:00:00+03:00"],
                      pattern: "^.*$",
                    },
                    benefit_type: {
                      $id: "#root/data/tiers/items/discountable_loyalty_benefits/items/benefit_type",
                      title: "Benefit_type",
                      type: "string",
                      default: "",
                      examples: ["Discount"],
                      pattern: "^.*$",
                    },
                    created_at: {
                      $id: "#root/data/tiers/items/discountable_loyalty_benefits/items/created_at",
                      title: "Created_at",
                      type: "string",
                      default: "",
                      examples: ["2023-05-22T15:20:10+03:00"],
                      pattern: "^.*$",
                    },
                    description: {
                      $id: "#root/data/tiers/items/discountable_loyalty_benefits/items/description",
                      title: "Description",
                      type: "string",
                      default: "",
                      examples: ["For our gold members"],
                      pattern: "^.*$",
                    },
                    discount_percentage: {
                      $id: "#root/data/tiers/items/discountable_loyalty_benefits/items/discount_percentage",
                      title: "Discount_percentage",
                      type: "integer",
                      examples: [10],
                      default: 0,
                    },
                    expires_at: {
                      $id: "#root/data/tiers/items/discountable_loyalty_benefits/items/expires_at",
                      title: "Expires_at",
                      type: "null",
                      default: null,
                    },
                    id: {
                      $id: "#root/data/tiers/items/discountable_loyalty_benefits/items/id",
                      title: "Id",
                      type: "integer",
                      examples: [16],
                      default: 0,
                    },
                    name: {
                      $id: "#root/data/tiers/items/discountable_loyalty_benefits/items/name",
                      title: "Name",
                      type: "string",
                      default: "",
                      examples: ["10% all year"],
                      pattern: "^.*$",
                    },
                    point_multiplier: {
                      $id: "#root/data/tiers/items/discountable_loyalty_benefits/items/point_multiplier",
                      title: "Point_multiplier",
                      type: "null",
                      default: null,
                    },
                    updated_at: {
                      $id: "#root/data/tiers/items/discountable_loyalty_benefits/items/updated_at",
                      title: "Updated_at",
                      type: "string",
                      default: "",
                      examples: ["2023-05-22T15:20:10+03:00"],
                      pattern: "^.*$",
                    },
                  },
                },
              },
              hidden_to_members: {
                $id: "#root/data/tiers/items/hidden_to_members",
                title: "Hidden_to_members",
                type: "boolean",
                examples: [true],
                default: true,
              },
              id: {
                $id: "#root/data/tiers/items/id",
                title: "Id",
                type: "integer",
                examples: [15],
                default: 0,
              },
              loyalty_benefits: {
                $id: "#root/data/tiers/items/loyalty_benefits",
                title: "Loyalty_benefits",
                type: "array",
                default: [],
                items: {
                  $id: "#root/data/tiers/items/loyalty_benefits/items",
                  title: "Items",
                  type: "object",
                  required: [
                    "begins_at",
                    "benefit_type",
                    "created_at",
                    "description",
                    "discount_percentage",
                    "expires_at",
                    "id",
                    "name",
                    "point_multiplier",
                    "updated_at",
                  ],
                  properties: {
                    begins_at: {
                      $id: "#root/data/tiers/items/loyalty_benefits/items/begins_at",
                      title: "Begins_at",
                      type: "string",
                      default: "",
                      examples: ["2023-05-21T00:00:00+03:00"],
                      pattern: "^.*$",
                    },
                    benefit_type: {
                      $id: "#root/data/tiers/items/loyalty_benefits/items/benefit_type",
                      title: "Benefit_type",
                      type: "string",
                      default: "",
                      examples: ["Discount"],
                      pattern: "^.*$",
                    },
                    created_at: {
                      $id: "#root/data/tiers/items/loyalty_benefits/items/created_at",
                      title: "Created_at",
                      type: "string",
                      default: "",
                      examples: ["2023-05-22T15:20:10+03:00"],
                      pattern: "^.*$",
                    },
                    description: {
                      $id: "#root/data/tiers/items/loyalty_benefits/items/description",
                      title: "Description",
                      type: "string",
                      default: "",
                      examples: ["For our gold members"],
                      pattern: "^.*$",
                    },
                    discount_percentage: {
                      $id: "#root/data/tiers/items/loyalty_benefits/items/discount_percentage",
                      title: "Discount_percentage",
                      type: "integer",
                      examples: [10],
                      default: 0,
                    },
                    expires_at: {
                      $id: "#root/data/tiers/items/loyalty_benefits/items/expires_at",
                      title: "Expires_at",
                      type: "null",
                      default: null,
                    },
                    id: {
                      $id: "#root/data/tiers/items/loyalty_benefits/items/id",
                      title: "Id",
                      type: "integer",
                      examples: [16],
                      default: 0,
                    },
                    name: {
                      $id: "#root/data/tiers/items/loyalty_benefits/items/name",
                      title: "Name",
                      type: "string",
                      default: "",
                      examples: ["10% all year"],
                      pattern: "^.*$",
                    },
                    point_multiplier: {
                      $id: "#root/data/tiers/items/loyalty_benefits/items/point_multiplier",
                      title: "Point_multiplier",
                      type: "null",
                      default: null,
                    },
                    updated_at: {
                      $id: "#root/data/tiers/items/loyalty_benefits/items/updated_at",
                      title: "Updated_at",
                      type: "string",
                      default: "",
                      examples: ["2023-05-22T15:20:10+03:00"],
                      pattern: "^.*$",
                    },
                  },
                },
              },
              max_points: {
                $id: "#root/data/tiers/items/max_points",
                title: "Max_points",
                type: "integer",
                examples: [10],
                default: 0,
              },
              min_points: {
                $id: "#root/data/tiers/items/min_points",
                title: "Min_points",
                type: "integer",
                examples: [0],
                default: 0,
              },
              name: {
                $id: "#root/data/tiers/items/name",
                title: "Name",
                type: "string",
                default: "",
                examples: ["Tier 1"],
                pattern: "^.*$",
              },
              point_multiplier_loyalty_benefits: {
                $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits",
                title: "Point_multiplier_loyalty_benefits",
                type: "array",
                default: [],
                items: {
                  $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits/items",
                  title: "Items",
                  type: "object",
                  required: [
                    "begins_at",
                    "benefit_type",
                    "created_at",
                    "description",
                    "discount_percentage",
                    "expires_at",
                    "id",
                    "name",
                    "point_multiplier",
                    "updated_at",
                  ],
                  properties: {
                    begins_at: {
                      $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits/items/begins_at",
                      title: "Begins_at",
                      type: "string",
                      default: "",
                      examples: ["2023-05-30T00:00:00+03:00"],
                      pattern: "^.*$",
                    },
                    benefit_type: {
                      $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits/items/benefit_type",
                      title: "Benefit_type",
                      type: "string",
                      default: "",
                      examples: ["point_multiplier"],
                      pattern: "^.*$",
                    },
                    created_at: {
                      $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits/items/created_at",
                      title: "Created_at",
                      type: "string",
                      default: "",
                      examples: ["2023-05-31T19:28:28+03:00"],
                      pattern: "^.*$",
                    },
                    description: {
                      $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits/items/description",
                      title: "Description",
                      type: "string",
                      default: "",
                      examples: ["hello world"],
                      pattern: "^.*$",
                    },
                    discount_percentage: {
                      $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits/items/discount_percentage",
                      title: "Discount_percentage",
                      type: "null",
                      default: null,
                    },
                    expires_at: {
                      $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits/items/expires_at",
                      title: "Expires_at",
                      type: "null",
                      default: null,
                    },
                    id: {
                      $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits/items/id",
                      title: "Id",
                      type: "integer",
                      examples: [17],
                      default: 0,
                    },
                    name: {
                      $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits/items/name",
                      title: "Name",
                      type: "string",
                      default: "",
                      examples: ["50% all year"],
                      pattern: "^.*$",
                    },
                    point_multiplier: {
                      $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits/items/point_multiplier",
                      title: "Point_multiplier",
                      type: "integer",
                      examples: [2],
                      default: 0,
                    },
                    updated_at: {
                      $id: "#root/data/tiers/items/point_multiplier_loyalty_benefits/items/updated_at",
                      title: "Updated_at",
                      type: "string",
                      default: "",
                      examples: ["2023-05-31T19:28:28+03:00"],
                      pattern: "^.*$",
                    },
                  },
                },
              },
              updated_at: {
                $id: "#root/data/tiers/items/updated_at",
                title: "Updated_at",
                type: "string",
                default: "",
                examples: ["2023-05-16T14:27:34+03:00"],
                pattern: "^.*$",
              },
            },
          },
        },
      },
    },
  },
};

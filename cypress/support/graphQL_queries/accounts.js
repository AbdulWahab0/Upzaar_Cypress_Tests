export const accountQuery = `
query accounts ($brand_uid: ID, $brand_group_uid: String, $customer_uid: ID) {
    accounts (brand_uid: $brand_uid, brand_group_uid: $brand_group_uid, customer_uid: $customer_uid) {
        avatar_url
        created_at
        email
        full_name
        id
        phone_number
        phone_number_normalized
        uid
        upzaar_points
    }
}
`;
export const createAccountQuery = `
mutation create_account ($data: CustomerAttributes!) {
    create_account (data: $data) {
        customer_user {
            avatar_url
            created_at
            email
            full_name
            id
            uid
            phone_number
            phone_number_normalized
            upzaar_points
        }
        status
        errors
    }
}
`;
export const expectedKeys = [
  "avatar_url",
  "created_at",
  "email",
  "full_name",
  "id",
  "phone_number",
  "phone_number_normalized",
  "uid",
  "upzaar_points",
];
export const expectedCreateCustomerUserKeys = [
  "avatar_url",
  "created_at",
  "email",
  "full_name",
  "id",
  "phone_number",
  "phone_number_normalized",
  "uid",
  "upzaar_points",
];
export const fieldTypes = {
  avatar_url: "string",
  created_at: "string",
  email: "string",
  full_name: "string",
  id: "string",
  phone_number: "string",
  phone_number_normalized: "string",
  uid: "string",
  upzaar_points: "number",
};
export const expectedCreateAccountDataTypes = {
  created_at: "string",
  email: "string",
  full_name: "string",
  id: "string",
  phone_number: "string",
  uid: "string",
  upzaar_points: "number",
};
export const createAccountSchema = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://example.com/object1686084789.json",
  title: "Root",
  type: "object",
  required: ["data"],
  properties: {
    data: {
      $id: "#root/data",
      title: "Data",
      type: "object",
      required: ["create_account"],
      properties: {
        create_account: {
          $id: "#root/data/create_account",
          title: "Create_account",
          type: "object",
          required: ["customer_user", "status", "errors"],
          properties: {
            customer_user: {
              $id: "#root/data/create_account/customer_user",
              title: "Customer_user",
              type: "object",
              required: [
                "avatar_url",
                "created_at",
                "email",
                "full_name",
                "id",
                "uid",
                "phone_number",
                "phone_number_normalized",
                "upzaar_points",
              ],
              properties: {
                avatar_url: {
                  $id: "#root/data/create_account/customer_user/avatar_url",
                  title: "Avatar_url",
                  type: "null",
                  default: null,
                },
                created_at: {
                  $id: "#root/data/create_account/customer_user/created_at",
                  title: "Created_at",
                  type: "string",
                  default: "",
                  examples: ["2023-06-06T23:52:31+03:00"],
                  pattern: "^.*$",
                },
                email: {
                  $id: "#root/data/create_account/customer_user/email",
                  title: "Email",
                  type: "string",
                  default: "",
                  examples: [""],
                  pattern: "^.*$",
                },
                full_name: {
                  $id: "#root/data/create_account/customer_user/full_name",
                  title: "Full_name",
                  type: "string",
                  default: "",
                  examples: [""],
                  pattern: "^.*$",
                },
                id: {
                  $id: "#root/data/create_account/customer_user/id",
                  title: "Id",
                  type: "string",
                  default: "",
                  examples: ["1106"],
                  pattern: "^.*$",
                },
                uid: {
                  $id: "#root/data/create_account/customer_user/uid",
                  title: "Uid",
                  type: "string",
                  default: "",
                  examples: ["CreatedManually-0300cdc841dd6f08"],
                  pattern: "^.*$",
                },
                phone_number: {
                  $id: "#root/data/create_account/customer_user/phone_number",
                  title: "Phone_number",
                  type: "string",
                  default: "",
                  examples: [""],
                  pattern: "^.*$",
                },
                phone_number_normalized: {
                  $id: "#root/data/create_account/customer_user/phone_number_normalized",
                  title: "Phone_number_normalized",
                  type: "null",
                  default: null,
                },
                upzaar_points: {
                  $id: "#root/data/create_account/customer_user/upzaar_points",
                  title: "Upzaar_points",
                  type: "integer",
                  examples: [1000],
                  default: 0,
                },
              },
            },
            status: {
              $id: "#root/data/create_account/status",
              title: "Status",
              type: "boolean",
              examples: [true],
              default: true,
            },
            errors: {
              $id: "#root/data/create_account/errors",
              title: "Errors",
              type: "array",
              default: [],
            },
          },
        },
      },
    },
  },
};

export const accountSchema = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://example.com/object1684366569.json",
  title: "Root",
  type: "object",
  required: ["data"],
  properties: {
    data: {
      $id: "#root/data",
      title: "Data",
      type: "object",
      required: ["accounts"],
      properties: {
        accounts: {
          $id: "#root/data/accounts",
          title: "Accounts",
          type: "array",
          default: [],
          items: {
            $id: "#root/data/accounts/items",
            title: "Items",
            type: "object",
            required: [
              "avatar_url",
              "created_at",
              "email",
              "full_name",
              "id",
              "phone_number",
              "phone_number_normalized",
              "uid",
              "upzaar_points",
            ],
            properties: {
              avatar_url: {
                $id: "#root/data/accounts/items/avatar_url",
                title: "Avatar_url",
                type: "string",
                default: "",
                examples: [
                  "https://www.gravatar.com/avatar/b3a84191a547ee77a3d77ebfa1c978d6",
                ],
                pattern: "^.*$",
              },
              created_at: {
                $id: "#root/data/accounts/items/created_at",
                title: "Created_at",
                type: "string",
                default: "",
                examples: ["2023-05-16T14:34:05+03:00"],
                pattern: "^.*$",
              },
              email: {
                $id: "#root/data/accounts/items/email",
                title: "Email",
                type: "string",
                default: "",
                examples: ["abdul@buttercloud.com"],
                pattern: "^.*$",
              },
              full_name: {
                $id: "#root/data/accounts/items/full_name",
                title: "Full_name",
                type: "string",
                default: "",
                examples: ["Abdul Wahab"],
                pattern: "^.*$",
              },
              id: {
                $id: "#root/data/accounts/items/id",
                title: "Id",
                type: "string",
                default: "",
                examples: ["1027"],
                pattern: "^.*$",
              },
              phone_number: {
                $id: "#root/data/accounts/items/phone_number",
                title: "Phone_number",
                type: "string",
                default: "",
                examples: ["123"],
                pattern: "^.*$",
              },
              phone_number_normalized: {
                $id: "#root/data/accounts/items/phone_number_normalized",
                title: "Phone_number_normalized",
                type: "string",
                default: "",
                examples: ["+962123"],
                pattern: "^.*$",
              },
              uid: {
                $id: "#root/data/accounts/items/uid",
                title: "Uid",
                type: "string",
                default: "",
                examples: ["CreatedManually-282d82c8c914811a"],
                pattern: "^.*$",
              },
              upzaar_points: {
                $id: "#root/data/accounts/items/upzaar_points",
                title: "Upzaar_points",
                type: "integer",
                examples: [1000],
                default: 0,
              },
            },
          },
        },
      },
    },
  },
};

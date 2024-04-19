export const point_collection_activities = `
query point_collection_activities ($brand_uid: String!) {
  point_collection_activities (brand_uid: $brand_uid) {
      brand_uid
      channel
      description
      id
      name
      order_value_multiplier
      point_amount
      type
  }
}
`;

export const expectedKeys = [
  "brand_uid",
  "channel",
  "description",
  "id",
  "name",
  "order_value_multiplier",
  "point_amount",
  "type",
];
export const fieldTypes = {
  brand_uid: "string",
  channel: "string",
  description: "string",
  id: "number",
  name: "string",
  point_amount: "number",
  order_value_multiplier: "number",
  type: "string",
};

export const point_collection_schema = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://example.com/object1684424323.json",
  title: "Root",
  type: "object",
  required: ["data"],
  properties: {
    data: {
      $id: "#root/data",
      title: "Data",
      type: "object",
      required: ["point_collection_activities"],
      properties: {
        point_collection_activities: {
          $id: "#root/data/point_collection_activities",
          title: "Point_collection_activities",
          type: "array",
          default: [],
          items: {
            $id: "#root/data/point_collection_activities/items",
            title: "Items",
            type: "object",
            required: [
              "brand_uid",
              "channel",
              "description",
              "id",
              "name",
              "order_value_multiplier",
              "point_amount",
              "type",
            ],
            properties: {
              brand_uid: {
                $id: "#root/data/point_collection_activities/items/brand_uid",
                title: "Brand_uid",
                type: "string",
                default: "",
                examples: ["19942948"],
                pattern: "^.*$",
              },
              channel: {
                $id: "#root/data/point_collection_activities/items/channel",
                title: "Channel",
                type: "string",
                default: "",
                examples: ["online"],
                pattern: "^.*$",
              },
              description: {
                $id: "#root/data/point_collection_activities/items/description",
                title: "Description",
                type: "string",
                default: "",
                examples: ["hello world"],
                pattern: "^.*$",
              },
              id: {
                $id: "#root/data/point_collection_activities/items/id",
                title: "Id",
                type: "integer",
                examples: [7],
                default: 0,
              },
              name: {
                $id: "#root/data/point_collection_activities/items/name",
                title: "Name",
                type: "string",
                default: "",
                examples: ["Activity"],
                pattern: "^.*$",
              },
              order_value_multiplier: {
                $id: "#root/data/point_collection_activities/items/order_value_multiplier",
                title: "Order_value_multiplier",
                type: "integer",
                examples: [1],
                default: 0,
              },
              point_amount: {
                $id: "#root/data/point_collection_activities/items/point_amount",
                title: "Point_amount",
                type: "integer",
                examples: [1],
                default: 0,
              },
              type: {
                $id: "#root/data/point_collection_activities/items/type",
                title: "Type",
                type: "string",
                default: "",
                examples: ["Standard"],
                pattern: "^.*$",
              },
            },
          },
        },
      },
    },
  },
}; // schema end

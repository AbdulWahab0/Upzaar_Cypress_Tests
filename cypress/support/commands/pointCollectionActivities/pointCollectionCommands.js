Cypress.Commands.add("verifyMandatoryFields", (point_collection) => {
  const {
    brand_uid,
    channel,
    description,
    id,
    name,
    order_value_multiplier,
    point_amount,
    type,
  } = point_collection;
  expect(brand_uid).to.not.be.null;
  expect(channel).to.not.be.null;
  expect(description).to.not.be.null;
  expect(id).to.not.be.null;
  expect(name).to.not.be.null;
  expect(order_value_multiplier).to.not.be.null;
  expect(point_amount).to.not.be.null;
  expect(type).to.not.be.null;
});

Cypress.Commands.add("expectedKeys", () => {
  const expectedKeys = [
    "brand_uid",
    "channel",
    "description",
    "id",
    "name",
    "order_value_multiplier",
    "point_amount",
    "type",
  ];
});

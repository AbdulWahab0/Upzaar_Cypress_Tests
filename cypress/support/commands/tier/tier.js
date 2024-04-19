Cypress.Commands.add("verifyPostTierMandatoryFields", (tiers) => {
  const {
    brand_uid,
    created_at,
    discountable_loyalty_benefits,
    hidden_to_members,
    loyalty_benefits,
    max_points,
    min_points,
    updated_at,
    name,
    point_multiplier_loyalty_benefits,
  } = tiers;
  expect(brand_uid).to.not.be.null;
  expect(created_at).to.not.be.null;
  expect(discountable_loyalty_benefits).to.not.be.null;
  expect(hidden_to_members).to.not.be.null;
  expect(loyalty_benefits).to.not.be.null;
  expect(max_points).to.not.be.null;
  expect(min_points).to.not.be.null;
  expect(updated_at).to.not.be.null;
  expect(name).to.not.be.null;
});
Cypress.Commands.add("verifyCreateTierMandatoryFields", (tiers) => {
  const {
    brand_uid,
    created_at,
    discountable_loyalty_benefits,
    hidden_to_members,
    loyalty_benefits,
    max_points,
    min_points,
    updated_at,
    name,
    point_multiplier_loyalty_benefits,
  } = tiers;
  expect(brand_uid).to.not.be.null;
  expect(created_at).to.not.be.null;
  expect(discountable_loyalty_benefits).to.not.be.null;
  expect(hidden_to_members).to.not.be.null;
  expect(loyalty_benefits).to.not.be.null;
  expect(max_points).to.not.be.null;
  expect(min_points).to.not.be.null;
  expect(updated_at).to.not.be.null;
  expect(name).to.not.be.null;
});

Cypress.Commands.add("verifyMandatoryFields", (reward) => {
  const { description, id, name } = reward;
  expect(description).to.not.be.null;
  expect(id).to.not.be.null;
  expect(name).to.not.be.null;
});

Cypress.Commands.add("verifyMandatoryFields", (account) => {
  const { created_at, id, uid } = account;
  expect(created_at).to.not.be.null;
  expect(id).to.not.be.null;
  expect(uid).to.not.be.null;
});

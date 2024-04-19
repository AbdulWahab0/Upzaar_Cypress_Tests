class brandsGroup {
  getBrandList() {
    return cy.get(".gap-y-10");
  }
  getBrandTitle() {
    return cy.get(
      ":nth-child(1) > .mantine-Carousel-root > .mantine-1my8u2w > .mantine-14pwlwp > :nth-child(1) > a > .group > .mantine-Text-root"
    );
  }
  getBrandDescription() {
    return cy.get(
      ":nth-child(2) > .mantine-Carousel-root > .mantine-1my8u2w > .mantine-14pwlwp > :nth-child(1) > a > .group > .font-medium"
    );
  }
}
export default brandsGroup;

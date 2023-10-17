const { formatDate } = require("../../src/utils/DateFormat"); 

describe("formatDate function", () => {
  // Test case 1: Test with a known timestamp
  it("formats a timestamp correctly", () => {
    // Create a timestamp representing a specific date
    const timestamp = { toMillis: () => 1618670400000 }; // Example: May 17, 2021

    const formattedDate = formatDate(timestamp);

    // Assert that the result matches the expected format
    expect(formattedDate).toBe("2021-04-17 ");
  });

  // Test case 2: Test with a different timestamp
  it("formats another timestamp correctly", () => {
    const timestamp = { toMillis: () => 1622419200000 }; 
    const formattedDate = formatDate(timestamp);
    expect(formattedDate).toBe("2021-05-31 ");
  });

});

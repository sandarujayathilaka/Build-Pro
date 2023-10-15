const axios = require("axios");
const fetchPost = require("./fetch");

describe("Fetching Tests with mock", () => {
  it("Mocking and returning correct data", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
      id: 1,
      title: "ReactJS Crash Course",
      body: "Lorem ipsum dolor sit amet.",
    });

    const results = await fetchPost(1);
    expect(results.title).toBe("ReactJS Crash Course");
    expect(results.body).toBe("Lorem ipsum dolor sit amet.");
  });
});

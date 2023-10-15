const fetchPost = require("./api");

describe("Fetching Tests", () => {
  it("Should return correct userId", async () => {
    const post = await fetchPost(1);
    expect(post.userId).toBe(1);
  });

  it("Should return correct title", () => {
    fetchPost(1).then((post) => {
      expect(post.title).toEqual(expect.stringContaining("aut facere"));
    });
  });
});

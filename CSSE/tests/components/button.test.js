import React from "react";
import renderer from "react-test-renderer";

import Button from "../../src/components/shared/Button";

describe("<Button />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

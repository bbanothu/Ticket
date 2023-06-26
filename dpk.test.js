const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });


  it("Makes a key when partitionKey does not exist", () => {
    const event = {
      data: "example",
    };
    const key = deterministicPartitionKey(event);
    expect(typeof key).toBe("string");
    expect(key.length).toBeGreaterThan(0);
    expect(key.length).toBeLessThan(257);
  });

  it("Gives us the key when it exists and does not exceeed the limit", () => {
    const event = {
      partitionKey: "testkey123",
    };
    const key = deterministicPartitionKey(event);
    expect(typeof key).toBe("string");
    expect(key).toBe("testkey123");
  });

  it("Makes a key when we exceed the limit", () => {
    const longKey = "a".repeat(260);
    const event = {
      partitionKey: longKey,
    };
    const key = deterministicPartitionKey(event);
    expect(typeof key).toBe("string");
    expect(key.length).toBeGreaterThan(0);
    expect(key.length).toBeLessThan(257);
  });
});

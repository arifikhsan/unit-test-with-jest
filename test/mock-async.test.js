import {getBalance} from "../src/async";

test('mock async function', async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalance('Alice', from)).resolves.toEqual({name: 'Alice', balance: 1000});

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
})

test.failing('mock async function rejected', async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error('Ups'))

  await getBalance('Alice', from)
})

test('mock async function rejected', async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("Rejected")

  await expect(getBalance('Alice', from)).rejects.toBe("Rejected")
})
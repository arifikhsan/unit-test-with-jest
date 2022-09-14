import {calculate, calculateAndReturn} from "../src/sum";

test('test calculate', () => {
  const callback = jest.fn();

  calculate([1, 2], callback);
  calculate([1, 2, 3], callback);

  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(3);
  expect(callback.mock.calls[1][0]).toBe(6);
})

test('test mock return value', () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(10).mockReturnValueOnce(20);

  expect(calculateAndReturn([5, 5], callback)).toBe(10);
  expect(calculateAndReturn([15, 5], callback)).toBe(20);

  expect(callback.mock.results[0].value).toBe(10);
  expect(callback.mock.results[1].value).toBe(20);
})

test('test mock implementation', () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => total * 2);

  expect(calculateAndReturn([5, 5], callback)).toBe(20);
  expect(calculateAndReturn([15, 5], callback)).toBe(40);

  expect(callback.mock.results[0].value).toBe(20);
  expect(callback.mock.results[1].value).toBe(40);
})

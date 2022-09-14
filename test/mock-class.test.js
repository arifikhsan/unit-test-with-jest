import {UserRepository} from "../src/user-repository";
import {UserService} from "../src/user-service";

jest.mock('../src/user-repository.js')

const repository = new UserRepository();
const service = new UserService(repository);

test('mock user save', () => {
  const user = {id: 1, name: 'alice'}
  service.save(user);
  expect(repository.save).toBeCalledWith(user);
})

test('test mock class findById', () => {
  const user = {id: 1, name: 'alice'}
  repository.findById.mockReturnValue(user);
  expect(service.findById(1)).toBe(user);
  expect(repository.findById).toBeCalledWith(1);
})

test('test mock class findAll', () => {
  const users = [{id: 1, name: 'alice'}, {id: 2, name: 'bob'}]
  repository.findAll.mockReturnValue(users);
  expect(service.findAll()).toBe(users);
  expect(repository.findAll).toBeCalled();
})
import {UserRepository} from "../src/user-repository";
import {UserService} from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test('test mock partial class findById', () => {
  const user = {id: 1, name: 'alice'}
  const findByIdMock = jest.spyOn(repository, 'findById')
  findByIdMock.mockReturnValue(user);
  expect(service.findById(1)).toBe(user);
  expect(findByIdMock).toBeCalledWith(1);
  expect(repository.findById).toBeCalledWith(1);
})

test('mock partial findAll', () => {
  const users = [{id: 1, name: 'alice'}, {id: 2, name: 'bob'}]
  const findAllMock = jest.spyOn(repository, 'findAll')
  findAllMock.mockReturnValue(users);
  expect(service.findAll()).toBe(users);
  expect(findAllMock).toBeCalled();
  expect(repository.findAll).toBeCalled();
})

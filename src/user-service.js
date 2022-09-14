export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository || new UserRepository();
  }

  save(user) {
    this.userRepository.save(user);
  }

  findById(id) {
    return this.userRepository.findById(id);
  }

  findAll() {
    return this.userRepository.findAll();
  }
}
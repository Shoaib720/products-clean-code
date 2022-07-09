import { v4 as uuidv4, validate } from 'uuid';

const Id = Object.freeze({
  makeId: uuidv4,
  isValidId: validate
})

export default Id;
import validate from 'validate.js';

export const login = {
  email: {
    presence: { message: 'email.presence' },
    email: { message: 'email.invalid' }
  },
  password: {
    presence: { message: 'password.presence' }
  }
};

export const signUp = {
  firstName: {
    presence: { message: 'firstName.presence' }
  },
  lastName: {
    presence: { message: 'lastName.presence' }
  },
  email: {
    presence: { message: 'email.presence' },
    email: { message: 'email.invalid' }
  },
  password: {
    presence: { message: 'password.presence' },
    length: { min: 8 }
  },
  passwordConfirmation: {
    presence: { message: 'passwordConfirmation.presence' },
    equality: {
      attribute: 'password',
      message: 'passwordConfirmation.equality'
    }
  },
  workingHours: {
    presence: { message: 'workingHours.presence' }
  }
};

export const adminEntry = {
  userId: {
    presence: { message: 'user.presence' }
  },
  date: {
    presence: { message: 'date.presence' }
  },
  minutes: {
    presence: { message: 'minutes.presence' },
    numericality: { greaterThan: 0, message: 'minutes.positive' }
  },
  detail: {
    presence: { message: 'detail.presence' }
  }
};

export const entry = {
  date: {
    presence: { message: 'date.presence' }
  },
  detail: {
    presence: { message: 'detail.presence' }
  },
  minutes: {
    presence: { message: 'minutes.presence' },
    numericality: { greaterThan: 0, message: 'minutes.positive' }
  }
};

export const user = {
  firstName: {
    presence: { message: 'firstName.presence' }
  },
  lastName: {
    presence: { message: 'lastName.presence' }
  },
  role: {
    presence: { message: 'role.presence' }
  },
  email: {
    presence: { message: 'email.presence' },
    email: { message: 'email.invalid' }
  }
};

export const userWithPassword = {
  ...user,
  password: {
    presence: { message: 'password.presence' },
    length: { min: 8 }
  }
};

validate.validators.presence.options = { allowEmpty: false };

export const validations = (constraints, props = {}) => data =>
  validate(data, constraints, props) || {};

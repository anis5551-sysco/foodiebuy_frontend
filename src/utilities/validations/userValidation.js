export const validateEmail = (email) => {
    let errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is Invalid";
    }
    return errors;
  };
  export const validateFirstName = (firstName) => {
    let errors = {};
    if (!firstName) {
      errors.firstName = "First Name is required";
    }
    return errors;
  };
  export const validateLastName = (lastName) => {
    let errors = {};
    if (!lastName) {
      errors.lastName = "Last Name is required";
    }
    return errors;
  };
  export const validatePassword = (password) => {
    let errors = {};
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 5) {
      errors.password = "Password should be more than five characters";
    }
    return errors;
  };
  export const validateConfirmPassword = (confirmPassword, password) => {
    let errors = {};
    if (confirmPassword !== password) {
      confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  export const validateContact = (contact) => {
    const regex =
      /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
    let errors = {};
    if (!regex.test(contact)) {
      errors.contact = "Contact number entered is invalid";
    }
    return errors;
  };

  export const validateAddress = (address) => {
    let errors = {};
    if (!address) {
      errors.address = "Address is required";
    }
    return errors;
  };
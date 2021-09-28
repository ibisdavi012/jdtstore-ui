// Every validation returns an object
// {result: true, message:''}

// pass: TRUE/FALSE depending if the validation rules passed
// message: in case of any warning o error this field will hold that information.

// DEfault message for required fields
const empty = "This field is required.";

// Prepare the error message
function prepareMessage(pass, message) {
  return { pass: pass, message: message };
}

// Checks if the input text starts with a white/blank space
function startsWithSpace(value) {
  return value.charAt(0) === " ";
}

// Checks if the input has more that 1 space in a row
function consecutiveSpaces(value) {
  const repeatedSpacing = new RegExp(/[\s+]{2}/, "i");

  return repeatedSpacing.test(value);
}

// Detects if the input text is alphanumeric
// The las parameter includes/excludes spacing char from the validation
function isAlphanumeric(value, minLength, maxLength, includeSpace = false) {
  const alphanumeric = includeSpace
    ? new RegExp(`^[a-z0-9\\s]{${minLength},${maxLength}}$`, "i")
    : new RegExp(`^[a-z0-9]{${minLength},${maxLength}}$`, "i");
  return alphanumeric.test(value);
}

// Validate a SKU input
export function sku(value) {
  // Alphanumeric string between 10-20 characters

  const notSku = "It must be an alphanumeric value between 10-20 characters.";

  if (!isNotEmpty(value)) {
    return prepareMessage(false, empty);
  }

  if (isAlphanumeric(value, 10, 20)) {
    return prepareMessage(true, "");
  }

  return prepareMessage(false, notSku);
}

// Checks if the input is not empty
export function isNotEmpty(value) {
  return value && value.length > 0;
}

// Valides a value in USD
export function usd(value) {
  if (!isNotEmpty(value)) {
    return prepareMessage(false, empty);
  }

  const validUsd = new RegExp(/^(\d{1,3}(,\d{3})*|(\d+))(\.\d{2})?$/);

  if (!validUsd.test(value)) {
    return prepareMessage(
      false,
      "Value is not in USD. Please follow any of the standard american rule for expressing a number. Ex. 12.30 / 1,200.20 / 0.75"
    );
  }

  return prepareMessage(true, "");
}

export function units(value, requiredUnit) {
  const unitReg = new RegExp(
    `^(\\d+|\\d{0,3}\\.\\d{1,2})+[\\s]{0,1}${requiredUnit}+$`,
    "i"
  );

  if (!isNotEmpty(value)) {
    return prepareMessage(false, empty);
  }

  if (!unitReg.test(value)) {
    return prepareMessage(
      false,
      `It must be a valid number expressed in ${requiredUnit}. Ex. 12${requiredUnit} / 22 ${requiredUnit} / 2.50${requiredUnit}`
    );
  }
  return prepareMessage(true, "");
}

// Checks that if input meet some rules:
// It must be between a min a max length,
// It must be an alphanumeric value
// It cannot contain more that 2 spaces in a row
// It can't be empty
export function text(value, minLength, maxLength) {
  if (!isNotEmpty(value)) {
    return prepareMessage(false, empty);
  }

  if (startsWithSpace(value)) {
    return prepareMessage(false, "It can't start with a space.");
  }

  if (consecutiveSpaces(value)) {
    return prepareMessage(false, "Too many consecutive spaces.");
  }

  if (isAlphanumeric(value, minLength, maxLength, true)) {
    return prepareMessage(true, "");
  }

  return prepareMessage(
    false,
    `Enter an alphanumeric value between ${minLength} and ${maxLength} characters.`
  );
}

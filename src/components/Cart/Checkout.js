import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length !== 5;
const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const enterredName = nameInputRef.current.value;
    const enterredStreet = streetInputRef.current.value;
    const enterredPostalCode = postalCodeInputRef.current.value;
    const enterredCity = cityInputRef.current.value;

    const enterredNameIsValid = !isEmpty(enterredName);
    const enterredStreetIsValid = !isEmpty(enterredStreet);
    const enterredPostalCodeIsValid = !isNotFiveChars(enterredPostalCode);
    const enterredCityIsValid = !isEmpty(enterredCity);

    setFormInputsValidity({
      name: enterredNameIsValid,
      street: enterredStreetIsValid,
      city: enterredCityIsValid,
      postalCode: enterredPostalCodeIsValid,
    });

    const formIsValid =
      enterredNameIsValid &&
      enterredCityIsValid &&
      enterredPostalCodeIsValid &&
      enterredStreetIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name:enterredName,
      street:enterredStreet,
      postalcode: enterredPostalCode,
      city:enterredCity
    })
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

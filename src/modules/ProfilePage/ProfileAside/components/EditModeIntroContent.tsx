import Button from '../../../../components/Button';

import { IntroItemInputField } from './IntroItemInputField';

interface IntroItemInputFieldProps {
  submitHandler: any;
  defaultValues: any;
  refs: any;
}

export default function EditModeIntroContent({ refs, defaultValues, submitHandler, ...props }: IntroItemInputFieldProps) {
  const { emailRef, dateOfBirthRef, phoneNumberRef, addressRef, cityRef, stateRef, countryRef } = refs;

  const { email, dateOfBirth, phoneNumber, address, city, country, state } = defaultValues;

  let birthday = '';
  try {
    birthday = new Date(dateOfBirth).toISOString().split('T')[0];
  } catch (error) {}

  //prettier-ignore
  return (
      <form onSubmit={submitHandler} {...props}>
        <>
          <IntroItemInputField label='Email'          type='email'  ref={emailRef}        defaultValue={email} />
          <IntroItemInputField label='Date of Birth'  type='date'   ref={dateOfBirthRef}  defaultValue={birthday} />
          <IntroItemInputField label='Phone Number'   type='tel'    ref={phoneNumberRef}  defaultValue={phoneNumber} />
          <IntroItemInputField label='Address'        type='text'   ref={addressRef}      defaultValue={address} />
          <IntroItemInputField label='City'           type='text'   ref={cityRef}         defaultValue={city} />
          <IntroItemInputField label='State'          type='text'   ref={stateRef}        defaultValue={state} />
          <IntroItemInputField label='Country'        type='text'   ref={countryRef}      defaultValue={country} />
        </>
        <div className='w-full flex justify-center'>
          <Button className='w-32' variant='primary' type='submit'> Save </Button>
        </div>
    </form>
  )
}

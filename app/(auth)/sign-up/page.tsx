import Link from 'next/link'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import SubmitButton from '@/components/form/Buttons'
import { registerAction } from '@/utils/api'

const SignUpPage = () => {
  return (
    <section className='max-w-md mx-auto'>
      <h1 className='text-2xl font-semibold mb-4 capitalize'>sign up</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={registerAction}>
          <FormInput name='name' type='text' label='Name' />
          <FormInput name='email' type='email' label='Email' />
          <FormInput name='password' type='password' label='Password' />
          <SubmitButton text='Create Account' className='w-full' />
        </FormContainer>
        <p className='mt-4 text-sm text-muted-foreground'>
          Already have an account?{' '}
          <Link href='/sign-in' className='underline'>Sign in</Link>
        </p>
      </div>
    </section>
  )
}

export default SignUpPage

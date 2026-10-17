import Link from 'next/link'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import SubmitButton from '@/components/form/Buttons'
import { loginAction } from '@/utils/api'

function SignInPage() {
  return (
    <section className='max-w-md mx-auto'>
      <h1 className='text-2xl font-semibold mb-4 capitalize'>sign in</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={loginAction}>
          <FormInput name='email' type='email' label='Email' />
          <FormInput name='password' type='password' label='Password' />
          <SubmitButton text='Sign In' className='w-full' />
        </FormContainer>
        <p className='mt-4 text-sm text-muted-foreground'>
          No account?{' '}
          <Link href='/sign-up' className='underline'>Sign up</Link>
        </p>
      </div>
    </section>
  )
}

export default SignInPage

import FormHeader from '../../components/FormHeader/FormHeader';
import LogInHere from './components/LogInHere';
import Button from '../../components/Button/Button';
import SignUpFormInput from './components/SignUpFormInput';

export default function SignUpForm() {
    return (
        <div className="mt-16 flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
            <FormHeader text="Register your account" />
            <div className="bg-blue-100 rounded px-16 py-8 mt-8 border-2 border-blue-200">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        action="#"
                        method="POST">
                        <div className="flex justify-between gap-8">
                            <SignUpFormInput
                                label="First Name"
                                id="first-name"
                                placeholder="Boris"
                            />

                            <SignUpFormInput
                                label="Last Name"
                                id="last-name"
                                placeholder="Mauer"
                            />
                        </div>

                        <SignUpFormInput
                            label="Username"
                            id="username"
                            placeholder="BorisMauer69"
                        />

                        <SignUpFormInput
                            label="Email Address"
                            id="email"
                            placeholder="boris@mauer.com"
                        />

                        <SignUpFormInput
                            label="Password"
                            id="password"
                            placeholder="********"
                        />
                    </form>
                    <Button
                        variant="primary"
                        className="w-full m-0 mt-8">
                        Sign Up
                    </Button>
                </div>
            </div>
            <LogInHere className="mt-8" />
        </div>
    );
}

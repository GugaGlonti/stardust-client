import FormHeader from '../../components/FormHeader';
import LogInHere from './components/LogInHere';
import Button from '../../components/Button';
import SignUpFormInput from './components/SignUpFormInput';
import { useState } from 'react';
import AuthService from '../../services/auth.service';
import { useNavigate } from 'react-router';

interface SignUpFormProps {}

export interface SignUpFormData {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}

export default function SignUpForm({ ...props }: SignUpFormProps) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<SignUpFormData>({ firstName: '', lastName: '', username: '', email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (await AuthService.signUp(formData)) return navigate('/signin');
        return navigate('');
    };

    const { firstName, lastName, username, email, password } = formData;

    return (
        <div className="mt-16 flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
            <FormHeader text="Register your account" />
            <div className="bg-blue-100 rounded px-16 py-8 mt-8 border-2 border-blue-200">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit}>
                        <div className="flex justify-between gap-8">
                            <SignUpFormInput
                                value={firstName}
                                onChange={handleChange}
                                label="First Name"
                                id="firstName"
                                placeholder="Boris"
                            />

                            <SignUpFormInput
                                value={lastName}
                                onChange={handleChange}
                                label="Last Name"
                                id="lastName"
                                placeholder="Mauer"
                            />
                        </div>

                        <SignUpFormInput
                            value={username}
                            onChange={handleChange}
                            label="Username"
                            id="username"
                            placeholder="BorisMauer69"
                        />

                        <SignUpFormInput
                            value={email}
                            onChange={handleChange}
                            label="Email Address"
                            id="email"
                            placeholder="boris@mauer.com"
                        />

                        <SignUpFormInput
                            value={password}
                            onChange={handleChange}
                            label="Password"
                            id="password"
                            placeholder="********"
                        />
                        <Button
                            variant="primary"
                            type="submit"
                            className="w-full m-0 mt-8">
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
            <LogInHere className="mt-8" />
        </div>
    );
}

import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import HomeLayout from './../../Layouts/HomeLayout';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <HomeLayout>
            <Head title="Log in" />


            <section id="home" className="dtr-section dtr-section-with-bg dtr-hero-section-top-padding" style={{ backgroundImage: 'url(assets/images/hero-img2.jpg)' }}>
                {/* overlay */}
                <div className="dtr-overlay dtr-overlay-white" />
                <div className="dtr-dotted-bg z-index">
                    <div className="container dtr-py-100 dtr-overlay-content">
                        {/*== row starts ==*/}
                        <div className="row d-flex align-items-center">
                            <div className="col-12 col-md-6">
                                {/* <h3 className="dtr-mb-5">Turn $20 into $2,500+</h3>
                                <h1 className="color-red">GET PAID AND SAVE PEOPLE MONEY ON FUEL!</h1>
                                <ul className="dtr-list-styled dtr-mt-30 color-dark">
                                    <li>Two Important Questions:</li>
                                    <li><img src="assets/images/checkmark.svg" alt="image" />Would you invest $20 to make $2,500 in profit?</li>
                                    <li><img src="assets/images/checkmark.svg" alt="image" />Do you know two other people that would do the same?</li>
                                </ul> */}

                                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                                <ValidationErrors errors={errors} />

                            </div>

                            <div className="col-12 col-md-5 small-device-space">

                                <div className="w-full">
                                    <div className="flex items-center justify-center">
                                        <h4>Login to your account</h4>
                                    </div>
                                    <form onSubmit={submit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                Email
                                            </label>
                                            <input
                                                className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="Email address"
                                                value={data.email}
                                                onChange={onHandleChange}
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                className="shadow-sm appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="password"
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={data.password}
                                                onChange={onHandleChange}
                                            />
                                       
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                                Sign In
                                            </button>
                                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                                Forgot Password?
                                            </a>
                                        </div>
                                    </form>
                                    {/* <p className="text-center text-gray-500 text-xs">
                                        ©2020 Acme Corp. All rights reserved.
                                    </p> */}
                                </div>





                            </div>
                            {/*== column 2 ends ==*/}
                        </div>
                        {/*== row ends ==*/}
                    </div>
                </div>
            </section>

            {/* <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button className="ml-4" processing={processing}>
                        Log in
                    </Button>
                </div>
            </form> */}
        </HomeLayout>
    );
}

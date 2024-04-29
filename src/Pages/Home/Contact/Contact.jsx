import { useRef } from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import AOS from 'aos';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import Swal from "sweetalert2";
const Contact = () => {
    AOS.init({
        offset: 200,
        duration: 1000,
        easing: 'ease-in-sine',
        delay: 100,
    });
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(`${import.meta.env.VITE_serviecID}`, `${import.meta.env.VITE_templateID}`, form.current, `${import.meta.env.VITE_publickkey}`)
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                Swal.fire(
                    'Your response has been send',
                    'Thank you for your massage',
                    'success'
                )
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className=" p-5 bg-[#dfebeebf] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100  my-10 py-10 px-3 lg:px-16 rounded-lg" >
            <SectionTitle title="Contact Us" />
            {/* <h1 className="text-5xl font-bold text-center my-10">Contact Me</h1> */}
            <form ref={form} onSubmit={sendEmail} className="space-y-5" data-aos="zoom-in">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input name="user_name" type="text" placeholder="Rohim Islam" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input type="email" name="user_email" placeholder="info@site.com" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Massage</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <textarea name="message" placeholder="Hey How are you? can we ...." className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </label>
                </div>
                <div className=''>
                    <input className='cursor-pointer bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100 ' type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Contact;
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../../ContextApi/AppContext';
import '../../styles/Form/index.scss';
import { RxCross2 } from "react-icons/rx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ isFieldvisible, isIconVisible, showModal, setShowModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        address: '',
        treatment: '',
        army: '',
    });

    const [errors, setErrors] = useState({});

    const { data } = useContext(AppContext);

    const validateField = (id, value) => {
        switch (id) {
            case 'name':
                return value.trim() === '' ? 'Name is required' : '';
            case 'number':
                return !/^\d{10}$/.test(value) ? 'Enter a valid 10-digit number' : '';
            case 'address':
                return value.trim() === '' ? 'Address is required' : '';
            case 'treatment':
                return value === '' ? 'Please select a treatment type' : '';
            case 'army':
                return isFieldvisible && value === '' ? 'Please select an army type' : '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'number') {
            const numericValue = value.replace(/\D/g, ''); // Remove non-digit characters
            setFormData((prevState) => ({
                ...prevState,
                [id]: numericValue,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [id]: value,
            }));
        }

        setErrors((prevState) => ({
            ...prevState,
            [id]: validateField(id, value),
        }));
    };

    const formSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            postData();
        }
    };

    const postData = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/contact`, formData);
            if (response) {
                setFormData({
                    name: '',
                    number: '',
                    address: '',
                    treatment: '',
                    army: ''
                });

                // Show success toast
                toast.success('Form submitted successfully!', {
                    position: 'top-right',  // Fix: using string instead of toast.POSITION.TOP_RIGHT
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error('Error sending POST request:', error.message);

            // Show error toast
            toast.error('Failed to submit form. Please try again.', {
                position: 'top-right',  // Fix: using string instead of toast.POSITION.TOP_RIGHT
                autoClose: 3000,
            });
        }
    };

    return (
        <>
            <form className={`c-form ${showModal ? 'show' : 'hide'}`} onSubmit={formSubmit}>
                <div className='c-form__headingWrap'>
                    <h2 className='c-form__headingWrap-heading'>Details</h2>
                    {isIconVisible && (
                        <div className='c-form__close' onClick={() => setShowModal(false)}>
                            <RxCross2 />
                        </div>
                    )}
                </div>

                <div className='c-form__inputWrap'>
                    <input
                        className='c-form__input'
                        placeholder='Name'
                        id='name'
                        value={formData.name}
                        onChange={handleChange}
                        type='text'
                    />
                    {errors.name && <p className='c-form__error'>{errors.name}</p>}
                </div>

                <div className='c-form__inputWrap'>
                    <input
                        className='c-form__input'
                        type='text'
                        placeholder='Phone Number'
                        id='number'
                        maxLength={10}
                        value={formData.number}
                        onChange={handleChange}
                    />
                    {errors.number && <p className='c-form__error'>{errors.number}</p>}
                </div>

                <div className='c-form__inputWrap -textarea'>
                    <textarea
                        className='c-form__textarea'
                        placeholder='Address'
                        id='address'
                        value={formData.address}
                        onChange={handleChange}
                    />
                    {errors.address && <p className='c-form__error'>{errors.address}</p>}
                </div>

                <div className='c-form__inputWrap'>
                    <select
                        className='c-form__select'
                        id='treatment'
                        value={formData.treatment}
                        onChange={handleChange}
                    >
                        <option disabled value=''>
                            Select
                        </option>
                        <option value='Hand'>Hand</option>
                        <option value='Leg'>Leg</option>
                        <option value='Face / Eye / Nose / Ear'>
                            Face / Eye / Nose / Ear
                        </option>
                        <option value='Other'>Other</option>
                    </select>
                    {errors.treatment && <p className='c-form__error'>{errors.treatment}</p>}
                </div>

                {isFieldvisible && (
                    <div className='c-form__inputWrap'>
                        <select
                            className='c-form__select'
                            id='army'
                            value={formData.army}
                            onChange={handleChange}
                        >
                            <option disabled value=''>
                                Select
                            </option>
                            <option value='ECHS'>ECHS</option>
                            <option value='CGHS'>CGHS</option>
                        </select>
                        {errors.army && <p className='c-form__error'>{errors.army}</p>}
                    </div>
                )}

                <button type='submit' className='c-form__btn'>
                    Book now
                </button>
            </form>
        </>
    );
};

export default Form;

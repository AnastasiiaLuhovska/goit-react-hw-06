import {ErrorMessage, Field, Form, Formik} from "formik";
import {useId} from "react";
import s from './ContactForm.module.css'
import {nanoid} from "nanoid";
import * as Yup from 'yup'

const ContactForm = ({userData, setUserData}) => {

    const phoneRegExp = /^\+380\d{9}$/;

    const validationSchema = Yup.object({
        name: Yup.string().min(3, 'Too short Name').max(50, 'Too long Name').required('This field is required'),
        number: Yup.string().matches(phoneRegExp, "Введіть коректний номер у форматі +380XXXXXXXXX").required('This field is required')
    })

    const idForName = useId()
    const idForNumber = useId()

    const handleSubmit = (value, action)=>{
        setUserData([...userData, {id: nanoid(), ...value}])
        action.resetForm()
    }

    return <Formik validationSchema={validationSchema} initialValues={{name: '', number: ''}} onSubmit={handleSubmit}>
        <Form className={s.form}>
            <label htmlFor={idForName}>Name</label>
            <Field className={s.input} type='text' name='name' id={idForName}></Field>
            <ErrorMessage className={s.error} name='name' component='p'/>

            <label htmlFor={idForNumber}>Number</label>
            <Field className={s.input} type='text' name='number' id={idForNumber}></Field>
            <ErrorMessage className={s.error} name='number' component='p'/>

            <button  className={s.button} type='submit'>Add Contact</button>
        </Form>
    </Formik>
};

export default ContactForm;
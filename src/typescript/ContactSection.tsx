import titleStyles from '../css/AboutSection.module.css';
import styles from '../css/ContactSection.module.css';
import { ToastContainer, toast } from 'react-toastify';
import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import { error } from 'console';

export function ContactSection() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs.sendForm(
            "portfolioService",
            "template_jd8ntya",
            form.current,
            "JIl3WoR55pMIwLfRO"
        )
        .then (
            () => {
                toast.success("Message sent");
                form.current?.reset(); // 🧽 czyści pola formularza
            },
            (error) => toast.error("Error")
        )
    }
    
    return(
        <section id = "contact" className={titleStyles.Container}>
            <div className={titleStyles.AboutSection}>
                <div className={titleStyles.SectionTitle}>✦ Contact</div>
                <hr className={titleStyles.Line}/>
            <form ref = {form} onSubmit={sendEmail}>
                <div className={styles.ContactContainer}>
                <label htmlFor="user_name">Name *</label>
                <textarea id="user_name" name = "user_name" required></textarea>
                
                <label htmlFor="user_email">E-mail *</label>
                <textarea id = "user_email" name = "user_email" required></textarea>
                
                <label htmlFor="title">Title *</label>
                <textarea id = "title" name = "title" required></textarea>
                
                <label htmlFor="message">Message *</label>
                <textarea id = "message" name = "message" className={styles.MessageInput} required></textarea>
            </div>

            <button type='submit' className={styles.SendButton}>
                Send Message
            </button>

            <ToastContainer
            position='bottom-center'
            autoClose={2000}
            theme='dark'
            closeOnClick
            pauseOnHover/>
            </form>

            </div>
        </section>
    )
}
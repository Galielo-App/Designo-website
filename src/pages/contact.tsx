import Head from "next/head";
import { useForm } from "react-hook-form"
import { ButtonPrimary } from "../components/_Buttons";
import styles from "../styles/views/Contact.module.scss"

type FormData = {
  name: string
  emailAddress: string
  phoneNumber: string
  message: string
}

export default function Contact() {
  const { register, formState: { errors }, handleSubmit } = useForm<FormData>()
  const onSubmit = data => console.log(data)
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return (
    <>
      <Head>
        <title>Designo | Contact Us</title>
        <meta name="description" content="" />
      </Head>

      <main>
        <section className={styles.form}>
          <div className={styles.form__content}>
            <div className={styles.form__textArea}>
              <h1 className="title-primary title-primary-white">Contact Us</h1>
              <p className="paragraph-primary">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.form__formArea}
              autoComplete="off"
            >
              <div className={styles.inputBlock}>
                <input
                  type="text"
                  {...register("name", { pattern: /^[a-z ,.'-]+$/i, required: true })}
                  className={`${errors.name ? "invalid" : ""}`}
                  placeholder="name"
                />
                {errors.name && <small>this field cannot be empty</small>}
              </div>

              <div className={styles.inputBlock}>
                <input
                  type="text"
                  {...register("emailAddress", { pattern: emailPattern, required: true })}
                  placeholder="email address"
                />
                {errors.emailAddress && <small>use a valid email address</small>}
              </div>

              <div className={styles.inputBlock}>
                <input
                  type="text"
                  {...register("phoneNumber", { required: true })}
                  placeholder="phone"
                />
                {errors.phoneNumber && <small>use a valid number</small>}
              </div>

              <div className={styles.inputBlock}>
                <textarea
                  placeholder="your message"
                  {...register("message", { required: true })}
                />
                {errors.message && <small>this field cannot be empty</small>}
              </div>


              <ButtonPrimary>submit</ButtonPrimary>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

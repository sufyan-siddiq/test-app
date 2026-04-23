import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { toast } from 'react-toastify'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim()
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim()
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (values) => {
    setIsSubmitting(true)

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          'EmailJS config missing. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env then restart dev server.',
        )
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          to_name: 'John Carter',
          reply_to: values.email,
        },
        {
          publicKey,
        },
      )

      toast.success('Message sent successfully.')
      reset()
    } catch (error) {
      toast.error(error.message || 'Unable to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold md:text-5xl">Contact</h1>
      <p className="max-w-3xl text-slate-600 dark:text-slate-300">
        For speaking events, interviews, collaborations, or reader questions, share your details and message below.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            John and his team respond to all professional inquiries with care and respect.
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm">
            <FiMail /> hello@johncarterbooks.com
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm">
            <FiPhone /> +1 (617) 555-0149
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm">
            <FiMapPin /> Boston, Massachusetts
          </p>
        </motion.div>

        <motion.form
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-semibold">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-indigo-500 placeholder:text-slate-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
          </div>

          <div className="mt-4 space-y-1.5">
            <label htmlFor="email" className="text-sm font-semibold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-indigo-500 placeholder:text-slate-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
          </div>

          <div className="mt-4 space-y-1.5">
            <label htmlFor="message" className="text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message here..."
              className="w-full resize-y rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none ring-indigo-500 placeholder:text-slate-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 20,
                  message: 'Please provide at least 20 characters for more context.',
                },
              })}
            />
            {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <FiSend /> {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

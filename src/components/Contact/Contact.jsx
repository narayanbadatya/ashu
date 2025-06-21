import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  const form = useRef();
  const [submittedData, setSubmittedData] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const subject = form.current.subject.value;

    emailjs
      .sendForm(
        "service_5g9k3td",
        "template_j8c90oc",
        form.current,
        "_7IYvKqkTY633CUcX"
      )
      .then(() => {
        setSubmittedData({ userName, subject });

        toast.success(`🚀 Thanks ${userName}! Your message about "${subject}" was sent.`, {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
        });

        form.current.reset();

        setTimeout(() => setSubmittedData(null), 6000);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  return (
    <motion.section
      id="contact"
      className="relative font-hacker flex flex-col items-center justify-center py-24 px-[8vw] bg-[#050414] text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <ToastContainer />

      <motion.div className="text-center mb-16" variants={fadeUp}>
        <h2 className="text-4xl font-bold text-purple-400 tracking-wide">
          CONTACT
        </h2>
        <div className="w-32 h-1 bg-purple-400 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Ping me for collabs, missions or questions! 💻
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-md bg-black/60 p-6 rounded-xl shadow-lg border border-purple-500"
        variants={fadeUp}
      >
        <motion.h3
          className="text-xl font-semibold text-purple-300 text-center"
          variants={fadeUp}
        >
          Contact Me <span className="ml-1">🚀</span>
        </motion.h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-6 flex flex-col space-y-4"
        >
          {[{ name: "user_email", placeholder: "your@email.com", type: "email" }, { name: "user_name", placeholder: "Your Name", type: "text" }, { name: "subject", placeholder: "Subject", type: "text" }].map((field, i) => (
            <motion.input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
              className="w-full p-3 rounded-md bg-black text-lime-300 border border-purple-600 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition-all duration-200"
              variants={fadeUp}
              custom={i}
            />
          ))}

          <motion.textarea
            name="message"
            rows="4"
            required
            placeholder="Type your message..."
            className="w-full p-3 rounded-md bg-black text-lime-300 border border-purple-600 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition-all duration-200"
            variants={fadeUp}
            custom={3}
          />

          <input type="hidden" name="time" value={new Date().toLocaleString()} />
          <input type="hidden" name="year" value={new Date().getFullYear()} />

          <motion.button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md bg-gradient-to-r from-pink-600 to-purple-600 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
            variants={fadeUp}
            custom={4}
            whileTap={{ scale: 0.97 }}
            whileHover={{
              rotateX: 5,
              rotateY: -5,
              transition: { duration: 0.2 },
            }}
          >
            Send Message 🚀
          </motion.button>
        </form>

        <AnimatePresence>
          {submittedData && (
            <motion.div
              className="mt-6 p-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg border border-lime-400 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                <BsCheckCircleFill className="text-2xl text-lime-300" />
              </motion.div>
              <div>
                <h4 className="font-bold">
                  Thank you <span className="text-lime-200">{submittedData.userName}</span> for visiting!
                </h4>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default Contact;

"use client"
import { SocialIcon } from "react-social-icons"
import { useState } from "react"

export default function SocialSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  }

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let&pos;s Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md ">
                {" "}
                Check out all of my projects on GitHub, my content on YouTube, Twitch, and BlueSky, 
                or reach out to me via email with any questions or opportunities.
            </p>
            <div className="socials flex flex-row gap-2">
                <SocialIcon url="https://github.com/kfechter" />
                <SocialIcon url="https://bsky.app/profile/kfechter.bsky.social" />
                <SocialIcon url="https://www.linkedin.com/in/kafechter" />
                <SocialIcon url="https://www.youtube.com/@TheSecondKen" />
                <SocialIcon url="https://www.twitch.tv/thesecondken" />
            </div>
        </div>
        <div>
        { emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Hello"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3"
            >
              Send Message
            </button>
          </form>
          )
        }
        </div>
    </section>
  )
}

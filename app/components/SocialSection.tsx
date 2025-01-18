import { SocialIcon } from "react-social-icons"

export default function SocialSection() {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="socials">
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
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
        </div>
    </section>
  )
}
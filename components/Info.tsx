import Link from "next/link";

export default function Info() {
  return (
    <section className="bg-[#1B1B1B] p-[15px] flex flex-col gap-5 rounded-[10px] md:gap-10 md:p-10 md:flex-row md:items-center md:justify-center xl:gap-70">
      <div className="flex flex-col gap-5 md:items-start md:gap-5 md:max-w-[380px] xl:max-w-[700px] xl:gap-10">
        <h2 className="text-[18px] text-white font-bold text-center xl:text-[32px]">
          INFORMATION <span className="text-[#27DEBF]">ABOUT ME</span>
        </h2>
        <p className="text-[13px] text-white flex flex-col gap-5 xl:text-[16px]">
          I am a passionate Junior Frontend Developer with a strong foundation
          in modern web technologies. I’m fluent in{" "}
          <span className="text-[#27DEBF]">
            JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, and Styled
            Components.
          </span>{" "}
          I love crafting clean, responsive, and user-friendly interfaces, and I
          continuously strive to improve my skills and stay up-to-date with the
          latest trends in frontend development.
        </p>
        <p className="text-white text-[14px] text-bold text-center">
          For more information{" "}
          <button
            style={{
              paddingRight: "10px",
              paddingLeft: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
            className=" rounded-[5px] text-[#27DEBF] cursor-pointer  hover:underline transition-[0.2s] hover:text-[#51bcaa]">
            <Link href={"/About"}>CLICK HERE</Link>
          </button>
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 xl:gap-7">
        <img
          src="/assets/image-me.png"
          alt="contact image"
          className="w-[85px] xl:w-[130px]"
        />
        <h3 className="text-[16px] font-semibold text-[#27DEBF] text-center xl:text-[20px]">
          CONTACT ME
        </h3>
      </div>
    </section>
  );
}

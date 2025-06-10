export default function Info() {
  return (
    <section
      style={{ padding: "15px" }}
      className="bg-[#1B1B1B] flex flex-col gap-5 rounded-[10px]">
      <div className="flex flex-col gap-5">
        <h2 className="text-[18px] text-white font-bold text-center">
          INFORMATION <span className="text-[#27DEBF]">ABOUT ME</span>
        </h2>
        <p className="text-[13px] text-white">
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
      </div>
      <p className="text-white text-[14px] text-bold text-center">
        For more information{" "}
        <button
          style={{
            paddingRight: "10px",
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
          className="bg-[#27DEBF] rounded-[5px] text-black cursor-pointer hover:bg-[#27dec04d] hover:text-white transition-[0.2s] hover:scale-[0.97]">
          CLICK HERE
        </button>
      </p>
      <div className="flex flex-col items-center gap-3">
        <img
          src="/assets/image-me.png"
          alt="contact image"
          className="w-[85px]"
        />
        <h3 className="text-[16px] font-bold text-[#27DEBF] text-center">
          CONTACT ME
        </h3>
      </div>
    </section>
  );
}

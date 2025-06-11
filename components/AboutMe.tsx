export default function AboutMe() {
  return (
    <section className="p-5 flex flex-col gap-7 md:flex-row md:items-center md:justify-center md:gap-20 xl:p-25">
      <div className="flex flex-col gap-4 md:max-w-[400px] xl:max-w-[700px]">
        <h1 className="text-center text-[18px] text-[#27DEBF] font-semibold md:text-start md:text-[24px]">
          ABOUT ME
        </h1>
        <p className="text-white text-[13px] leading-loose xl:text-[16px]">
          <span className="text-[#27DEBF]">Tsotne Tsintsadze</span> — I’m a
          Frontend Developer based in{" "}
          <span className="text-[#27DEBF]">Tbilisi, Georgia.</span> Programming
          is my passion, and I approach every project with full responsibility
          and enthusiasm. I enjoy challenges and constantly seek out new
          experiences that help me grow as a developer. I have 2 years of
          experience working with HTML and CSS, and 1 year of hands-on
          experience with{" "}
          <span className="text-[#27DEBF]">
            JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, and Styled
            Components.
          </span>{" "}
          I’m confident using modern tools and libraries to build user-focused,
          responsive, and performant web applications. Additionally, I have a
          background in graphic design — I’m proficient in{" "}
          <span className="text-[#27DEBF]">
            Adobe Photoshop and Adobe Illustrator,
          </span>{" "}
          which allows me to create visually engaging and functional user
          interfaces.
        </p>
      </div>
      <img
        src="/assets/illustration.png"
        alt="illustration"
        className="w-[240px] xl:w-[340px]"
      />
    </section>
  );
}

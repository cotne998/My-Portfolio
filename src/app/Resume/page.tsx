export default function page() {
  return (
    <div className="flex flex-col gap-5 items-center p-7">
      <a
        className="text-[#00000079] text-[13px] xl:text-[15px] px-5 py-2 rounded-xl bg-[#27DEBF] flex items-center gap-3 font-semibold hover:scale-[1.04] transition-[0.2s] hover:shadow-[0_0_24px_1px_#27dec036]"
        href="/assets/resume/cv.pdf"
        download>
        <img
          src="/assets/icon-download.svg"
          alt="download icon"
          className="brightness-40 w-[15px] xl:w-[20px]"
        />
        Download CV
      </a>
      <iframe src="/assets/resume/cv.pdf" width="80%" height="800px" />
    </div>
  );
}

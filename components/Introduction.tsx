export default function Introduction() {
  return (
    <div style={{ padding: "15px" }} className="flex flex-col gap-20">
      <div className="flex flex-col w-full gap-3">
        <h2 className="text-[16px] text-white">Hello</h2>
        <p className="text-[18px] text-white font-bold">
          My name is <span className="text-[#27DEBF]">TSOTNE TSINTSADZE</span>
        </p>
      </div>
      <img
        className="w-[240px]"
        src="/assets/illustration.png"
        alt="illustration image"
      />
    </div>
  );
}

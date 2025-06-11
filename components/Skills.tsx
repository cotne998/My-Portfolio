import icons from "../src/app/skills.json";

export default function Skills() {
  return (
    <section className="p-7 flex flex-col gap-5 xl:gap-15">
      <h2 className="text-[20px] text-[#27DEBF] font-semibold text-center">
        MY SKILLS
      </h2>
      <ul className="flex flex-wrap gap-7 justify-center xl:gap-50">
        {icons.map((item, index) => {
          return (
            <li key={index}>
              <img
                src={item}
                alt="skill image"
                className="w-[50px] xl:w-[100px] hover:scale-[1.1] cursor-pointer transition-[0.2s]"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

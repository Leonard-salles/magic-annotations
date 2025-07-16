import MagicLogo from "/magic-logo-white.svg"

export const Home = () => {
  return (
    <main className="flex justify-evenly items-center w-full">
      <section className="flex flex-col gap-2">
        <h1 className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#660099] to-[#FF9900]">MAGICTOOL</h1>
        <p className="text-xl font-medium pl-9">Para anotações e testes</p>
      </section>
      <section>
        <img src={MagicLogo} alt="logo magictool white" />
      </section>
    </main>
  );
};

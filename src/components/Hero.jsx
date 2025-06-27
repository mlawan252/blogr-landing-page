import Nav from "./Nav";

/* eslint-disable react/react-in-jsx-scope */
function Hero() {
  return (
    <div className="bg-gradient-image h-100 bg-right bg-cover rounded-bl-[5rem]">
      <Nav />
      <section className="flex flex-col items-center justify-center gap-6 mt-8">
        <h1 className="sm:text-4xl text-2xl font-semibold text-white">A Modern publishing platform</h1>
        <h6 className="text-stone-200">Grow your audience and build your online brand</h6>
        <div className="space-x-4 text-sm">
          <button className="bg-white px-4 py-2 rounded-2xl text-red-400 font-semibold">Start for Free</button>
          <button className="border border-stone-50 px-4 py-2 rounded-2xl text-red-50 font-semibold">Learn More..</button>
        </div>
      </section>
    </div>
  );
}
export default Hero;

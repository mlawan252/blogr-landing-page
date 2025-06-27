import Footer from "./Footer";

/* eslint-disable react/react-in-jsx-scope */
function Future() {
  return (
    <div className="my-16 py-8">
      <h1 className="text-center md:text-4xl text-stone-800 text-2xl font-bold">
        Designed for the future
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div className="sm:pl-20 text-center sm:text-left">
          <h1 className="py-8 font-semibold text-2xl capitalize">
            Introducing an extensible editor
          </h1>
          <p className="tracking-wide text-stone-500">
            Blogr features an extensible intuitive interface which let you focus
            on one thing: creating contents. The editor supports management of
            multiple blogs and allow easy manipulation of embeds such as images,
            videos and Markdown. Extensiblity with plugins and themes provide
            easy ways to add functionality or change the looks of a blog.
          </p>
          <h1 className="py-8 font-semibold text-2xl capitalize mt-4">
            Robust Contents Management
          </h1>
          <p className="tracking-wide text-stone-500">
            Blogr features an extensible intuitive interface which let you focus
            on one thing: creating contents. The editor supports management of
            multiple blogs and allow easy manipulation of embeds such as images,
            videos and Markdown. Extensiblity with plugins and themes provide
            easy ways to add functionality or change the looks of a blog.
          </p>
        </div>
        <div className="w-full col-start-1 row-start-1 sm:col-start-2 sm:row-start-1">
          <img src="/illustration-editor-desktop.svg" alt="desktopimage" />
        </div>
      </div>
      <section className="bg-purple-950 flex sm:flex-row flex-col px-12 sm:gap-20 mt-12 rounded-bl-[5rem]  rounded-tr-[5rem]">
        <img
          src="/illustration-phones.svg"
          alt="desktopimage"
          className="h-60 scale-y-140"
        />
        <div className="sm:basis-xl py-12 sm:py-0 mt-12 text-center sm:text-left ">
          <h1 className="capitalize text-slate-50 sm:text-2xl text-3xl mb-4">
            State of the art infrastracture
          </h1>
          <p className="text-sm text-stone-400">
            Blogr features an extensible intuitive interface which let you focus
            on one thing: creating contents. The editor supports management of
            multiple blogs and allow easy manipulation of embeds such as images,
            videos and Markdown.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <img src="/illustration-editor-desktop.svg" alt="illustartionDesktop" className="mt-12 w-xl" />
        <div className="sm:pl-20 text-center sm:text-left">
          <h1 className="py-8 font-semibold text-2xl capitalize">
            Introducing an extensible editor
          </h1>
          <p className="tracking-wide text-stone-500">
            Blogr features an extensible intuitive interface which let you focus
            on one thing: creating contents. The editor supports management of
            multiple blogs and allow easy manipulation of embeds such as images,
            videos and Markdown. Extensiblity with plugins and themes provide
            easy ways to add functionality or change the looks of a blog.
          </p>
          <h1 className="py-8 font-semibold text-2xl capitalize mt-4">
            Robust Contents Management
          </h1>
          <p className="tracking-wide text-stone-500">
            Blogr features an extensible intuitive interface which let you focus
            on one thing: creating contents. The editor supports management of
            multiple blogs and allow easy manipulation of embeds such as images,
            videos and Markdown. Extensiblity with plugins and themes provide
            easy ways to add functionality or change the looks of a blog.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Future;

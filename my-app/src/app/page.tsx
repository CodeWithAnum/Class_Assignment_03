import Header from "./header/header";
import Footer from "./footer/footer";
import Hero from "./hero/hero";

const HomePage = () => {
  return(
    <div className="bg-blue-100 h-screen">
         <Header/>
         <Hero/>

         <section
         id="about"
         className="bg-blue-100 h-screen text-center">

          <div className="bg-red-200 container mx-auto rounded-lg shadow-lg p-6 max-w-2xl pt-6 space-y-4">
            <h1 className="text-center font-bold text-3xl font-serif py-4">About Me</h1>
            <p className="text-center font-medium py-5 ml-5 leading-relaxed">
              I am a developer with a strong foundation in Typescript,Next.js and Tailwind CSS. Currently,I am dadicated to expanding my skills and deepling my understanding of these technologies.I believe that continuous learning is the growth, and I am excited about the possibilities that lie ahead. Remember,every line of code brings you one step closer to your goals!
            </p>
          </div>
         </section>

         <section
         id="contact"
         className="bg-blue-100 h-screen text-center">
          <div className="bg-green-300 container mx-auto rounded-lg shadow-lg p-6 max-w-2xl pt-6 space-y-4">
            <h1 className="font-bold text-3xl font-serif  py-4">Contact Me</h1>
            <p className="text-center font-medium py-5 ml-5 leading-relaxed">Let's Contact Reach out to me on Linkedin for insights and updates,or feel free to send me an email for any inquries or collaboration idea.I look forward to engaging with you and exploring new opportunities together</p>
          </div>

         </section>

         <section
         id="service"
         className="bg-blue-100 h-screen text-center">

          <div className="bg-purple-300 containerb mx-auto rounded-lg shadow-lg p-6 max-w-2xl pt-6 space-y-4">
            <h1 className="font-bold text-3xl font-serif py-4">Service</h1>
            <p className="text-center font-medium py-5 ml-5 leading-relaxed">We Provide Comprehensive web development services utilizing Typescript,Next.js,and Tailwind CSS.Our Typescript development ensures robust,console.error-free code through static typing, enhancing the overall quality and maintainability of your application.with Next.js, we build high-performance web application that benifit from features like server-side rendering and static site generation,improving both spead and SEO.Tailwind CSS allow us to create responsive,Visually appealing design with a utility-first approach,enabling rapaid and consistent styling across your project.Together,these technologies empower us to deliver Tailroed,modren web solutions that meet your unique business needs.</p>
          </div>

         </section>
         <Footer/>
    </div>
  );
};

export default HomePage
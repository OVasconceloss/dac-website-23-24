import logoSchool from "../../assets/aesa-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-5 flex items-center justify-between bg-light_black_two border-t-4 border-green-600 shadow">
      <section className="w-screen flex items-center justify-between">
        <img src={logoSchool} alt="Logo AESA" className="object-scale-down max-h-full w-24 h-24 p-2 rounded-r-md"/>
        <h3 className="text-green-500">Copyright© {currentYear} AESA, All rights reserved.</h3>
      </section>
    </footer>
  );
};
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mx-10 sm:mx-16">
        <Banner />
      </div>
      <div className="w-full h-[100vh] bg-slate-50 dark:bg-slate-800"></div>
      <div className="w-full h-[100vh] bg-red-300"></div>
      <div className="w-full h-[100vh] bg-emerald-300"></div>
      <div className="w-full h-[100vh] bg-blue-300"></div>
    </main>
  );
}

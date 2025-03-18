import SideBarComponentPage from "@/component/SideBarComponent";
import HomePageComponent from "./(page)/home/page";
import SearchBarComponentPage from "@/component/SearchBarComponent";
export default function Home() {
  return (
    <>
      <section className="flex min-h-full sticky">
        {/* Sidebar */}
        <SideBarComponentPage />

        {/* Main Content */}
        <section className="ml-[300px] mt-5 mr-6 w-full">
          {/* Search Bar */}
          <SearchBarComponentPage />
          <HomePageComponent />
        </section>
      </section>
    </>
  );
}

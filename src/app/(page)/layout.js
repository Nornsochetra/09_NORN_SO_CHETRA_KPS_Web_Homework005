import CardComponentPage from "@/component/CardComponent";
import SearchBarComponentPage from "@/component/SearchBarComponent";
import SideBarComponentPage from "@/component/SideBarComponent";

export default function RootLayouts({ children }) {
  return (
    <section className="flex min-h-full sticky">
      {/* Sidebar */}
      <SideBarComponentPage />

      {/* Main Content */}
      <section className="ml-[300px] mt-5 mr-6 w-full">
        {/* Search Bar */}
        <SearchBarComponentPage />
        {children}
      </section>
    </section>
  );
}

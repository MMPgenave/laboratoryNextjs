import Select from "@/components/Select";
import SelectorProvider from "@/context/SelectorProvider";

export default function Home() {
  return (
    <SelectorProvider>
      <div className="container">
        <Select />
      </div>
    </SelectorProvider>
  );
}

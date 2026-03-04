import Sidebar from "./components/Sidebar";
import PageHeader from "./components/PageHeader";
import AccountsCard from "./components/AccountsCard";
import TopBar from "./components/Topbar";

const accounts = [
  { id: "1245668", name: "John Doe", email: "john@inspirejo.com", type: "Maker", status: "not active" },
  { id: "1245669", name: "John Doe", email: "john@inspirejo.com", type: "Admin", status: "Active" },
  { id: "1245670", name: "John Doe", email: "john@inspirejo.com", type: "Admin", status: "Debited" },
  { id: "1245668", name: "John Doe", email: "john@inspirejo.com", type: "Checker", status: "Active" },
  { id: "1245669", name: "John Doe", email: "john@inspirejo.com", type: "Admin", status: "not Active" },
];

export default function App() {
  return (
    <>
      <TopBar />

      <div className="app">
        <Sidebar />

        <main className="main">
          <PageHeader />

          <AccountsCard accounts={accounts} />
        </main>
      </div>
    </>
  );
}

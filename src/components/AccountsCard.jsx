export default function AccountsCard({ accounts }) {
  return (
    <section className="card">
      <div className="card-actions">
        <button className="card-icon-btn" aria-label="Filter">
          <i className="fa-solid fa-sliders"></i>
        </button>
        <button className="card-icon-btn" aria-label="Print">
          <i className="fa-solid fa-print"></i>
        </button>
        <button className="card-icon-btn" aria-label="Download">
          <i className="fa-solid fa-download"></i>
        </button>
        <button className="card-icon-btn" aria-label="Search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Account ID</th>
              <th>Account Name</th>
              <th>Email</th>
              <th>Account Type</th>
              <th className="right">Status</th>
            </tr>
          </thead>

          <tbody>
            {accounts.map((acc, idx) => (
              <tr key={`${acc.id}-${idx}`}>
                <td>{acc.id}</td>
                <td>{acc.name}</td>
                <td>
                  <a href="#">{acc.email}</a>
                </td>
                <td>{acc.type}</td>
                <td className="account-status">{acc.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page-arrow" aria-label="Previous">
          {"<"}
        </button>
        <button className="page-num active">1</button>
        <button className="page-num">2</button>
        <button className="page-num">3</button>
        <button className="page-arrow" aria-label="Next">
          {">"}
        </button>
      </div>
    </section>
  );
}

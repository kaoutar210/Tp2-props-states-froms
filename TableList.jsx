export default function TableList({ livres }) {
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    marginTop: "20px"
  };

  const td = { border: "1px solid black", padding: "8px" };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={td}>Titre</th>
          <th style={td}>Auteur</th>
          <th style={td}>Année</th>
          <th style={td}>Genre</th>
          <th style={td}>Note</th>
        </tr>
      </thead>
      <tbody>
        {livres.map((l, i) => (
          <tr key={i}>
            <td style={td}>{l.title}</td>
            <td style={td}>{l.author}</td>
            <td style={td}>{l.publicationYear}</td>
            <td style={td}>{l.genre}</td>
            <td style={td}>{l.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

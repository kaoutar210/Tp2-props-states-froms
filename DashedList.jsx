export default function DashedList({ livres }) {
  return (
    <ul>
      {livres.map((l, i) => (
        <li key={i}>- {l.title} ({l.author} – {l.publicationYear})</li>
      ))}
    </ul>
  );
}

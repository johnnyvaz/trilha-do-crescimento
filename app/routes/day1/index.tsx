import { Link } from "@remix-run/react";

export default function NoteIndexPage() {
  return (
    <p>
      Tarefa não selecionada, ou crie uma nova - {" "}
      <Link to="new" className="text-blue-500 underline">
        Criar nova tarefa
      </Link>
    </p>
  );
}

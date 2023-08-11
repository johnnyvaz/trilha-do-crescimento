import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import type { Day1 } from "~/types/day1";
import { getDay1ListItems } from "~/models/day1.server";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";

type LoaderData = {
  day1ListItems: Day1[];
};

export async function loader ({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const day1ListItems = await getDay1ListItems({ userId });
  return json({ day1ListItems });
};

export default function NotesPage() {
  const data = useLoaderData<typeof loader>() as LoaderData;

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
          <Link to="new" className="block p-4 text-xl text-blue-500">
            + Inserir tarefa do dia 1
          </Link>

          <hr />

          {data.day1ListItems.length === 0 ? (
            <p className="p-4">Sem tarefa</p>
          ) : (
            <ol>
              {data.day1ListItems.map((day1) => (
                <li key={day1.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={day1.id}
                  >
                    📝 {day1.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function Header() {
  const user = useUser();
  return (
    <div>
    <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
      <h1 className="text-3xl font-bold">
        <Link to=".">Dia 1</Link>
      </h1>
      <p>{user.email}</p>
      <Form action="/logout" method="post">
        <button
          type="submit"
          className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
        >
          Logout
        </button>
      </Form>
    </header>
    <h1 className="text-center bg-red-400">VERSÃO DE TESTE - OS DADOS SERÃO EXCLUÍDOS POSTERIORMENTE</h1>
    </div>
  );
}

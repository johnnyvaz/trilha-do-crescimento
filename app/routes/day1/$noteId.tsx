import type { ActionFunction, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { deleteNote, getDay1 } from "~/models/day1.server";
import { requireUserId } from "~/session.server";
import invariant from "tiny-invariant";
import { Day1 } from "~/types/day1";
import { QUESTIONS } from "~/contants/questions";

type LoaderData = {
  day1: Day1;
};

export async function loader({ request, params }: LoaderArgs) {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  const day1 = await getDay1({ userId, id: params.noteId });
  if (!day1) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ day1 });
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  await deleteNote({ userId, id: params.noteId });

  return redirect("/day1");
};

export default function NoteDetailsPage() {
  const data = useLoaderData<typeof loader>() as LoaderData;

  return (
    <div>
      <h3 className="text-2xl font-bold">{data.day1.title}</h3>
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest1}
          </label>
          <p className="py-6"> <h2>“E não sede conformados com este mundo, mas sede transformados pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus.” - Romanos 12:2</h2></p>  
      </div>

      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest2}
          </label>
          <p className="py-6">{data.day1.question2}</p>  
      </div>
      
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest3}
          </label>
          <p className="py-6">{data.day1.question3}</p>  
      </div>
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest4}
          </label>
          <p className="py-6">{data.day1.question4}</p>  
      </div>
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest5}
          </label>
          <p className="py-6">{data.day1.question5}</p>  
      </div>
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest6}
          </label>
          <p className="py-6">{data.day1.question6}</p>  
      </div>
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest7}
          </label>
          <p className="py-6">{data.day1.question7}</p>  
      </div>
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest8}
          </label>
          <p className="py-6">{data.day1.question8}</p>  
      </div>
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest9}
          </label>
          <p className="py-6">{data.day1.question9}</p>  
      </div>
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest10}
          </label>
          <p className="py-6">{data.day1.question10}</p>  
      </div>
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest11}
          </label>
          <p className="py-6">{data.day1.question11}</p>  
      </div>
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest12}
          </label>
          <p className="py-6">{data.day1.question12}</p>  
      </div>
      <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="ensinamento">
          {QUESTIONS.quest13}
          </label>
          <p className="py-6">{data.day1.question13}</p>  
      </div>
      
      <hr className="my-4" />
      <Form method="post">
        <button
          type="submit"
          className="rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Delete
        </button>
      </Form>
    </div>
  );
}

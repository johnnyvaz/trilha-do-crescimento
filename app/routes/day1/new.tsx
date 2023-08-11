import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { createDay1 } from "~/models/day1.server";
import { requireUserId } from "~/session.server";
import { QUESTIONS } from "~/contants/questions";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");

  if (typeof title !== "string" || title.length === 0) {
    return json({ errors: { title: "Title is required" } }, { status: 400 });
  }

  if (typeof body !== "string" || body.length === 0) {
    return json({ errors: { body: "Body is required" } }, { status: 400 });
  }

  const note = await createDay1({ title, body, userId });
  return redirect(`/day1/${note.id}`);
};

export default function NewDay1Page() {
  return (
    <>
    <h1>Dia 1</h1>
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Nome/Data </span>
          <input
            name="title"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
          />
        </label>
      </div>
      <p>{QUESTIONS.quest1}</p>
        <div className="border-2 border-red-400 text-lg flex w-full flex-col gap-">
       “E não sede conformados com este mundo, mas sede transformados pela renovação do  vosso  entendimento,  para  que  experimenteis  qual  seja  a  boa,  agradável,  e  perfeita vontade de Deus.” - Romanos 12:2 
        </div>
        <div>
        <label className="flex w-full flex-col gap-1">
          <span>{QUESTIONS.quest2}</span>
          <input
            name="question2"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
          />
        </label>
      </div>
      <div>
        <label className="flex w-full flex-col gap-1">
        <span>{QUESTIONS.quest3}</span>
          <textarea
            name="question3"
            rows={3}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>
      <div>
        <label className="flex w-full flex-col gap-1">
        <span>{QUESTIONS.quest4}</span>
          <textarea
            name="question4"
            rows={3}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
        <span>{QUESTIONS.quest5}</span>
          <textarea
            name="question5"
            rows={3}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
        <span>{QUESTIONS.quest6}</span>
          <textarea
            name="question6"
            rows={3}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
        <span>{QUESTIONS.quest7}</span>
          <textarea
            name="question7"
            rows={3}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
        <span>{QUESTIONS.quest8}</span>
          <textarea
            name="question8"
            rows={3}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
        <span>{QUESTIONS.quest9}</span>
          <textarea
            name="question9"
            rows={3}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
        <span>{QUESTIONS.quest10}</span>
          <textarea
            name="question10"
            rows={3}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
        <span>{QUESTIONS.quest11}</span>
          <textarea
            name="question12"
            rows={3}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
        <span>{QUESTIONS.quest12}</span>
          <textarea
            name="question12"
            rows={3}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
        <span>{QUESTIONS.quest13}</span>
          <textarea
            name="question13"
            rows={3}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>

      {/* botão salvar */}
      <div className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Salvar
        </button>
      </div>
    </Form>


    </>
  );
}

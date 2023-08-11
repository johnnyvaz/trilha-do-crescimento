import { Day1 } from "~/types/day1";
import { supabase } from "./user.server";
import { User } from "~/types/user";

export async function getDay1ListItems({ userId }: { userId: User["id"] }) {
  const { data } = await supabase
    .from("day1")
    .select("id, title")
    .eq("profile_id", userId);

  return data;
}

export async function createDay1({
  title,
  body,
  userId,
}: Pick<Day1, "body" | "title"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("day1")
    .insert([{ title, body, profile_id: userId }])
    .single();

  if (!error) {
    return data;
  }

  return null;
}

export async function deleteNote({
  id,
  userId,
}: Pick<Day1, "id"> & { userId: User["id"] }) {
  const { error } = await supabase
    .from("day1")
    .delete({ returning: "minimal" })
    .match({ id, profile_id: userId });

  if (!error) {
    return {};
  }

  return null;
}

export async function getDay1({
  id,
  userId,
}: Pick<Day1, "id"> & { userId: User["id"] }) {
  const { data, error } = await supabase
    .from("day1")
    .select("*")
    .eq("profile_id", userId)
    .eq("id", id)
    .single();

  if (!error) {
    return {
      userId: data.profile_id,
      id: data.id,
      title: data.title,
      body: data.body,
      question1: data.question1,
      question2: data.question2,
      question3: data.question3,
      question4: data.question4,
      question5: data.question5,
      question6: data.question6,
      question7: data.question7,
      question8: data.question8,
      question9: data.question9,
      question10: data.question10,
      question11: data.question11,
      question12: data.question12,
      question13: data.question13
    };
  }

  return null;
}

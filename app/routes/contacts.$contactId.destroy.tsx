import { ActionFunctionArgs, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { deleteContact } from "~/data";

export const action = ({ params }: ActionFunctionArgs) => {
  invariant(params.contactId, "Missing id");
  const id = params.contactId;
  if (!id) {
    return new Response("Not found", { status: 404 });
  }
  deleteContact(id);
  return redirect("/");
};

import { useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";

export function loader({ params: { userName } }) {
  return userName;
}

export default function UserNameRoute() {
  const userName = useLoaderData();
  const fetcher = useFetcher();
  const [isDisabled, setIsDisabled] = useState(true);
  const [slug, setSlug] = useState("");

  const handleChange = (e: React.FormEvent<HTMLSelectElement>): void => {
    if (e.currentTarget.value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setSlug(e.currentTarget.value);
    }
  };

  return (
    <fetcher.Form
      method="post"
      style={{ display: "flex", justifyContent: "center" }}
      action={`${slug}`}
    >
      <select onChange={handleChange} name="pets" id="pet-select">
        <option value="">Choose A Pet</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
      </select>
      <button disabled={isDisabled}>Submit</button>
    </fetcher.Form>
  );
}

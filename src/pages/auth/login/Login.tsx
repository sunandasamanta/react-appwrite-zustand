import { Field, Input, Label, Button } from "@headlessui/react";
import { useState } from "react"
import clsx from "clsx"

type FormValueTypes = {
  username: string;
  password: string;
}

export default function Login() {

  // form value states
  const [formValue, setFormValue] = useState<FormValueTypes>({
    username: "",
    password: ""
  })

  // updates form values
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-white">Name</Label>
        <Input
          name="username"
          type="text"
          placeholder="Enter your username/email"
          value={formValue.username}
          onChange={handleChange}
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
        />
      </Field>
      <Field className="mt-4 ">
        <Label className="text-sm/6 font-medium text-white">Password:</Label>
        <Input
          name="password"
          type="password"
          value={formValue.password}
          onChange={handleChange}
          placeholder="Enter correct password"
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
        />
      </Field>
      <Button className="mt-4 rounded bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500">
        Log In
      </Button>
    </div>
  )
}
